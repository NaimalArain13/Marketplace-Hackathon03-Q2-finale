"use client";

import React from "react";
import Image from "next/image";
import { WatchesXPerfumes } from "@/lib/dataFetching";
import { useCart } from "@/app/context/cartContext";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

export default function JustForYou({
  _id,
  imageUrl,
  name,
  description,
  price,
  priceWithoutDiscount,
  discountPercentage,
  rating,
  ratingCount,
  stock_Quantity,
  brand,
}: WatchesXPerfumes) {
  const { wishlist, addToWishlist, removeFromWishlist } = useCart();

  const isWishlisted = wishlist.some((item: { _id: string; }) => item._id === _id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(_id);
    } else {
      addToWishlist({
        _id,
        imageUrl,
        name,
        description,
        price,
        priceWithoutDiscount,
        discountPercentage,
        rating,
        ratingCount,
        stock_Quantity,
        brand,
        quantity: 1,
      });
    }
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      {/* Wishlist Icon */}
      

      {/* Product Image */}
      <div className="relative w-full h-[300px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name || ""}
            fill
            className="object-cover p-3 transition-transform hover:scale-95 duration-300 rounded bg-black/90"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
            No Image Available
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <button
        onClick={toggleWishlist}
        className="absolute top-3 right-3 rounded-full p-1  "
        aria-label="Toggle Wishlist"
      >
        {isWishlisted ? (
          <SolidHeartIcon className="h-6 w-6 text-red-500" />
        ) : (
          <OutlineHeartIcon className="h-6 w-6 text-gray-500" />
        )}
      </button>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 items-baseline">
            <p className="text-lg font-bold text-[#23856D]">${price}</p>
            {priceWithoutDiscount && (
              <p className="text-sm line-through text-gray-500">
                ${priceWithoutDiscount}
              </p>
            )}
          </div>
          {discountPercentage && (
            <p className="text-sm text-red-500 font-medium">
              -{discountPercentage}%
            </p>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm text-yellow-500">
          {"★".repeat(Math.round(rating || 0))}
          {"☆".repeat(5 - Math.round(rating || 0))}
          <span className="text-gray-600">({ratingCount} reviews)</span>
        </div>

        <div className="flex flex-col items-start text-sm text-gray-500 mt-3">
          <p>
            Brand: <span className="font-medium text-gray-800">{brand}</span>
          </p>
          <p>
            Stock:{" "}
            <span
              className={`font-medium ${
                stock_Quantity > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stock_Quantity > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>

        <button className="mt-4 w-full bg-[#23856D] text-white py-2 rounded-md font-medium hover:bg-[#1d6b57] transition-colors duration-300">
          View Product
        </button>
      </div>
    </div>
  );
}
