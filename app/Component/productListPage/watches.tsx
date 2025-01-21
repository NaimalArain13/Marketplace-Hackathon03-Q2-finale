"use client"

import { useEffect, useState } from "react";
import JustForYou from "../card";
import Link from "next/link";
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";

function WatchesComponent() {
  const [product, setProduct] = useState<WatchesXPerfumes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: WatchesXPerfumes[] = await DataFetching(); // Fetch data
      const final =[]
      const slicedData1: WatchesXPerfumes[] = data.slice(4, 6); // Slice data
      const slicedData2: WatchesXPerfumes[] = data.slice(11, 17); // Slice data
      const slicedData3: WatchesXPerfumes[] = data.slice(20, 21); // Slice data
      
      final.push(...slicedData1, ...slicedData2, ...slicedData3)
      setProduct(final);
    };
    fetchData();
  }, []);

  if (!product) {
    return <div>No watches found</div>;
  }

  return (
    <div className="w-full py-9 mx-auto">
      <div className="flex flex-col items-center md:justify-center">
        <div className="mb-8 flex flex-col w-full text-center md:max-w-[463px]">
          <p className="text-gray-500 uppercase text-sm">Exclusive Collection</p>
          <h1 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl">
            TIMELY ELEGANCE: BESTSELLING WATCHES
          </h1>
          <p className="text-gray-600 mt-2">
            Discover our curated selection of timeless watches, blending elegance and precision. Elevate your style with every tick.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7   md:p-11 px-4">
          {product.map((item, index) => (
            <Link key={index} href={`/productListing/${String(item._id)}`}>
              <JustForYou key={index} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchesComponent;