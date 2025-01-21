
import CartProvider from "@/app/context/cartContext";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
        <CartProvider>
        {children}
        </CartProvider> 
      
  );
}
