"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { UserPen } from "lucide-react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCart } from "../context/cartContext";

export default function Navbar() {
  const { cart, wishlist } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setWishlistCount(wishlist?.length || 0);
    setCartCount(cart?.length || 0);
  }, [wishlist, cart]);

  return (
    <div className="top-0 sticky z-20 bg-white w-full p-1 px-5 mx-auto">
      <div className="flex justify-between items-center px-4">
        {/* Logo */}
        <Link href={"/"}>
          <div className="font-bold text-2xl items-center flex gap-3">
            <Image
              src={
                "https://res.cloudinary.com/db3yy1i0j/image/upload/v1737491402/sxn-removebg-preview_esmqph.png"
              }
              alt={"Logo"}
              width={96}
              height={96}
            />
          </div>
        </Link>
        {/* Desktop Links */}
        <div className="hidden sm:hidden md:flex gap-3 text-Text2 text-lg font-[650px]">
          <Link href={"/"}>Home</Link>
          <Link href={"/productListing"}>All</Link>
          <Link href={"/perfumes"}>Perfumes</Link>
          <Link href={"/watches"}>Watches</Link>
          <Link href={"/shop/wishlist"}>Wishlist</Link>
          {/* <Link href={"#"}>Pages</Link> */}
        </div>

        {/* Icons */}
        <div className="flex gap-6 items-center text-gray-900">
          <Link href={"/account"}>
            <UserPen size={22} className="hidden md:block" />
          </Link>
          <div className="md:flex hidden gap-4">
            <div>
              <IoIosSearch size={30} />
            </div>
            <div className="relative">
              <Link href={"/shop/wishlist"}>
                <CiHeart size={30} />
              </Link>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistCount}
            </span>
            </div>
            <div>
              <div className="relative">
                <Link href={"/shop/wishlist/cart"}>
                  <PiShoppingCartSimpleThin size={32} />
                </Link>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden text-black"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3 bg-white z-50 flex flex-col items-center shadow-lg border-b border-gray-300 transition-transform duration-300">
          {/* Close Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-black"
          >
            <AiOutlineClose size={28} />
          </button>

          <div className="flex flex-col w-full  text-center divide-gray-300 mt-12">
            <Link
              href={"/"}
              className="block text-Text2 text-lg font-medium py-4 px-6 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href={"/productListing"}
              className="block text-Text2 text-lg font-medium py-4 px-6 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All
            </Link>

            <Link
              href={"/perfumes"}
              className="block text-Text2 text-lg font-medium py-4 px-6 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Perfumes
            </Link>

            <Link
              href={"/watches"}
              className=" text-Text2 text-lg font-medium py-4 px-6 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Watches
            </Link>

            <Link
              href={"/shop/wishlist"}
              className=" text-Text2 text-lg font-medium py-4 px-6 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wishlist
            </Link>

            {/* <Link
                href={"#"}
                className=" text-Text2 text-lg font-medium py-4 px-6 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pages
              </Link> */}
          </div>

          {/* Icons and Login Section */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <UserPen size={22} />
            {/* <p className="text-lg font-medium">Login / Register</p> */}
            <div className="flex gap-6">
              <IoIosSearch size={24} />

              <div className="relative">
                <Link href={"/shop/wishlist/cart"}>
                  <PiShoppingCartSimpleThin size={32} />
                </Link>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
              </div>
              <div className="relative">
                <Link href={"/shop/wishlist"}>
                  <CiHeart size={30} />
                </Link>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
              {wishlistCount}
            </span>
              </div>
            </div>
          </div>
        </div>
      )}
         
    </div>
  );
}
