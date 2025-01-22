"use client";

import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Cart, useCart } from "../../context/cartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaAngleDoubleLeft } from "react-icons/fa";

export default function SingleProductCard({ product }: { product: Cart }) {
  const { addToCart, addToWishlist } = useCart();
  const router = useRouter();
  const handleCart = () => {
    addToCart(product);
  };
  const handleWishlist = () => {
    addToWishlist(product);
  };
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-6 p-6 md:p-12 bg-white shadow-lg rounded-lg">
      <div onClick={()=>{router.back()}}>
        <FaAngleDoubleLeft size={42}/>
      </div>
      {/* Left Section - Product Images */}
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <div className="w-full h-[400px] relative">
          <Image
            src={product?.imageUrl || ""}
            alt={product?.name || ""}
            fill
            className="object-contain rounded-md"
          />
        </div>
        {/* Thumbnail Images */}
        <div className="flex gap-3 mt-4">
          {[product?.imageUrl, product?.imageUrl, product?.imageUrl]?.map(
            (img, index) => (
              <div
                key={index}
                className="w-[75px] h-[75px] bg-gray-100 border rounded-md overflow-hidden"
              >
                <Image
                  src={img || ""}
                  alt={`Thumbnail ${index}`}
                  width={75}
                  height={75}
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="md:w-1/2 w-full flex flex-col gap-6">
        {/* Product Name and Rating */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            {product?.name}
          </h1>
          <p className="flex items-center gap-2 text-yellow-500 mt-2">
            {[...Array(5)].map((_, index) => (
              <IoMdStar key={index} />
            ))}
            <span className="text-sm text-gray-500">
              ({product?.ratingCount} Reviews)
            </span>
          </p>
        </div>

        {/* Price and Availability */}
        <div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-semibold text-green-600">
              ${product?.price}
            </p>
            {product?.priceWithoutDiscount && (
              <p className="text-xl line-through text-gray-400">
                ${product?.priceWithoutDiscount}
              </p>
            )}
            {product?.discountPercentage && (
              <p className="text-lg text-red-500">
                -{product?.discountPercentage}%
              </p>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Availability:{" "}
            <span
              className={`font-medium ${
                product?.stock_Quantity > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product?.stock_Quantity > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700">{product?.moreDetails?.slice(0, 350)}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Options: Colors, Sizes, Gender */}
        <div className="flex flex-col gap-3">
          <p>
            <span className="font-medium text-gray-800">Brand:</span>{" "}
            {product?.brand}
          </p>
          <p>
            <span className="font-medium text-gray-800">Category:</span>{" "}
            {product?.categories?.join(", ")}
          </p>
          <p>
            <span className="font-medium text-gray-800">Gender:</span>{" "}
            {product?.gender}
          </p>
          <p>
            <span className="font-medium text-gray-800">Sizes:</span>{" "}
            {product?.sizes?.join(", ")}
          </p>
          <p>
            <span className="font-medium text-gray-800">Colors:</span>{" "}
            <span
              className="inline-block w-5 h-5 rounded-full"
              style={{ backgroundColor: product?.colors?.[0] || "#000" }}
            ></span>
          </p>
        </div>

        {/*Add to Cart and Return to Shop*/}
        <div className="flex items-center gap-6">
          <button
            onClick={handleCart}
            className="px-8 py-3 hover:bg-slate-900  bg-zinc-800 text-white font-medium rounded-md transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              router.push("/productListing");
            }}
            className="px-8 py-3 hover:bg-slate-900  bg-zinc-800 text-white font-medium rounded-md  transition"
          >
            Return To Shop
          </button>
        </div>

        {/* Delivery and Additional Information */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="material-icons text-green-600">
              local_shipping
            </span>
            <p className="text-sm text-gray-600">Free Delivery Available</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              7-day return policy for this product
            </p>
          </div>
        </div>

        {/* Social and Wishlist Links */}
        <div className="flex gap-6 items-center mt-6">
          <Button className="bg-[#23856D] hover:bg-[#13483b]text-white ">
            Buy Now
          </Button>
          <div className="flex gap-4">
            <button onClick={handleWishlist} className="bg-transparent ">
              <CiHeart size={32} className="text-gray-600 hover:text-red-500" />
            </button>
            <Link href={"/shop/wishlist/cart"}>
              <PiShoppingCartSimpleThin
                size={28}
                className="text-gray-600 hover:text-blue-500"
              />
            </Link>
            <Link href={"/shop/wishlist"}>
              <MdOutlineRemoveRedEye
                size={24}
                className="text-gray-600 hover:text-green-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
