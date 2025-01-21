"use client";
import React, { useEffect, useState } from "react";
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";
import LoadingAnimation from "./loadingAnimation";
import Link from "next/link";
import JustForYou from "@/app/Component/card";


export default function FlashSale() {
  const [product, setProduct] = useState<WatchesXPerfumes[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true); // Start the loader
      try {
        const data: WatchesXPerfumes[] = await DataFetching(); // Fetch data
        const slicedData: WatchesXPerfumes[] = data.slice(2, 6); // Slice data
        setProduct(slicedData); // Update product state
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors
      } finally {
        setLoader(false); // Stop the loader after fetching
      }
    };
    fetchData();
  }, []);

  if (loader) {
    return <LoadingAnimation />; // Show loader while loading
  }

//   if (product.length === 0) {
//     return <div>No product found</div>; // Handle empty product case
//   }

  return (
    <div className="w-full py-9">
      <div className="flex justify-center items-center p-7 py-4">
        <div className="flex flex-col gap-5 py-4 ">

          <div>
            <h1 className="font-semibold text-[36px]">Flash Sales</h1>
          </div>
        </div>
      </div>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7   md:p-11 px-4">
        {product.map((item, index) => (
            <Link key={index} href={`/productListing/${String(item._id)}`}>
            <JustForYou key={index} {...item} />
            </Link>
          ))}
        </div>
     
    </div>
  );
}