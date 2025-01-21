"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { WatchesXPerfumes } from "@/lib/dataFetching";

interface Cart extends WatchesXPerfumes {
  quantity: number;
}

interface cartContextType {
  cart: Cart[];
  wishlist:WatchesXPerfumes[];
  addToCart: (product: Cart) => void;
  clearCart: () => void;
  removeOneFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  totalPrice: number;
  addToWishlist: (product: WatchesXPerfumes) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}
interface CartProviderProps {
  children: ReactNode;
}

const cartContext = createContext<cartContextType | null>(null);

function CartProvider({ children }: CartProviderProps) {
  const [totalamount, setTotalAmount] = useState<number>(0);
  const [cart, setCart] = useState<Cart[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  const [wishlist, setWishlist] = useState<WatchesXPerfumes[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });
  console.log(totalamount);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   console.log("stored cart ",storedCart)
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);
  useEffect(() => {
    console.log("Updated cart:", cart);
  }, [cart]); // This will log the cart whenever it changes.

  //calculate total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // add to cart
  const addToCart = (product: Cart) => {
    console.log("Adding to cart:", product);
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItem.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log("Adding new product to cart:", product.name);
      return [...prevItem, { ...product, quantity: 1 }];
    });
    console.log("Updated cart:", cart);
  };

  //remove from cart
  const removeOneFromCart = (id: string) => {
    setCart((prevItem) => {
      return prevItem.filter((item) => item._id !== id);
    });
  };

  //increment the items quantity by one
  const incrementQuantity = (id: string) => {
    setCart((prevItem) =>
      prevItem.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //decrement quantity of items by one
  const decrementQuantity = (id: string) => {
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item._id === id);
      if (existingItem?.quantity === 1) {
        return prevItem.filter((item) => item._id !== id);
      }
      return prevItem.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  //clear the cart after order Done
  const clearCart = () => {
    setCart([]);
    setTotalAmount(0);
  };
  const addToWishlist = (product: WatchesXPerfumes) => {
    setWishlist((prevItems) => {
      if (!prevItems.some((item) => item._id === product._id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        wishlist,
        totalPrice,
        addToCart,
        removeOneFromCart,
        incrementQuantity,
        decrementQuantity,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart must be used within a cartProvider");
  }
  console.log(context);
  return context;
}
export { cartContext, useCart };
export type { Cart };
export default CartProvider;
