"use client";
import { useCart } from "@/app/context/cartContext";
import Link from "next/link";
import CartRow from "../cartRow";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CartTable() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  console.log("this is cart from cartItem component", cart);
 

  return (
    <div className="md:p-6">
      {/* Conditional rendering */}
      {cart.length === 0 ? (
        <div className="flex justify-center items-center flex-col mt-10">
          <p className="text-xl text-gray-600">Your cart is empty</p>
          <Link href="/productListing">
            <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Table section */}
          <div className="md:overflow-y-scroll overflow-x-scroll h-3/5">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="text-Button tracking-tight">
                <tr>
                  {["Product", "Price", "Quantity", "Total", "Remove"].map(
                    (header, index) => (
                      <th
                        key={index}
                        className="py-4 px-4 text-left border-b-2 border-gray-300 pb-3"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <CartRow key={index} {...product} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between py-4">
            <Button
              onClick={() => {
                router.push("/productListing");
              }}
              className="p-4 md:p-6 md:px-9 rounded-none bg-transparent text-Button"
              variant={"outline"}
            >
              Return To Shop
            </Button>
            <Button
              onClick={clearCart}
              className="p-4 md:p-6 md:px-9 rounded-none bg-transparent text-Button"
              variant={"outline"}
            >
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
