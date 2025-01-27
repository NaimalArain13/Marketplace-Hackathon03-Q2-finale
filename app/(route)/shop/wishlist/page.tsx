"use client";
import TopSection from "@/app/Component/productListPage/productTop";
import BreadCrumb from "../../../Component/breadcrumb";
import JustForYou from "../../../Component/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useCart } from "@/app/context/cartContext";
import Navbar from "@/app/Component/header";



export default function WishListPage() {
const { wishlist, clearWishlist } = useCart();
  console.log("this is wishlist from wishlistItem component", wishlist);
  return (
    <>
    <TopSection />
    <Navbar />
    <div className="max-w-7xl w-full mx-auto p-7">
      <BreadCrumb route1Link={"/shop/wishlist"} route1={"Wishlist"}/>
      <div className="flex justify-between items-center py-4">
        <h1 className="font-medium text-xl">Wishlist</h1>
       <Button
          onClick={clearWishlist}
          className="md:p-6 md:px-11 rounded-none bg-transparent text-Button"
          variant={"outline"}
        >
          Clear Wishlist
        </Button>

      </div>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 mb-9">
      {wishlist.map((item, index) => (
            <Link key={index} href={`/productListing/${String(item._id)}`}>
            <JustForYou key={index} {...item} />
            </Link>
          ))}
      </div>

      <div className="flex justify-between items-center py-4">
       
      </div>
      {/* <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {perfume.map((item, index) => (
            <Link key={index} href={`/productListing/${String(item._id)}`}>
            <JustForYou key={index} {...item} />
            </Link>
          ))}
      </div> */}
    </div>
    </>
  );
}
