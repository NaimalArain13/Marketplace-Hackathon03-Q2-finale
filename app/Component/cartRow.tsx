"use client";

import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import Image from "next/image"
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { useCart } from "../context/cartContext";
import { WatchesXPerfumes } from "@/lib/dataFetching";

const CartRow = ({quantity, imageUrl, name,price, _id}:WatchesXPerfumes) => {
  const {incrementQuantity, decrementQuantity, removeOneFromCart} = useCart()
  const total = quantity * price; // Calculate subtotal dynamically

  const handleDecrement = ()=>{
    if(_id){
      decrementQuantity(_id)
    }
  }
  const handleIncrement = ()=>{
    if(_id){
      incrementQuantity(_id)
    }
  }
  const handleRemove = ()=>{
    if(_id){
      removeOneFromCart(_id)
    }
  }

  

    return (
      <tr
        className="border-b hover:bg-gray-50 cursor-pointer"
        
      >
        {/* <td className="py-4 px-5 text-gray-500">{index}</td> */}
        
        <td className="py-4 px-5 flex gap-5 items-center">
            <div className="flex gap-3 flex-col md:flex-row items-center">
          <Image
            src={imageUrl || "/placeholder-image.png"}
            alt="name"
            width={54}
            height={54}
            className="rounded shadow"
          /> <p className="text-gray-800 md:font-medium">{name}</p>
          </div>
        </td>
        <td className="py-4 px-5 text-gray-800">${price.toFixed(2) || "N/A"}</td>
        <td className="py-4 px-5 text-gray-800">
        <div className="flex items-center gap-2">
          {/* Decrement Button */}
          <Button
            onClick={handleDecrement}
            disabled={quantity === 1} // Disable if quantity is 1
            className={`py-1 px-2 bg-gray-200 text-black hover:bg-gray-300  ${
              quantity === 1 ? "bg-gray-300 text-black cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <TiMinus />
          </Button>

          {/* Quantity Display */}
          <span className="px-4 py-1 border rounded">{quantity}</span>

          {/* Increment Button */}
          <Button
            onClick={handleIncrement}
            className="py-1 px-2 bg-gray-200 text-black hover:bg-gray-300"
          >
            <FaPlus />
          </Button>
        </div>
      </td>
        <td className="py-4 px-5 text-gray-500">${total.toFixed(2)}</td>
        <td className="py-4 px-5 text-gray-500">
          {/* Increment Button */}
          <Button
            onClick={handleRemove}
            className="bg-transparent text-red-400 hover:bg-white hover:text-red-800"
          >
            <X size={32}/>
          </Button>
        </td>
      </tr>
    );
  };

  export default CartRow