"use client"

import { useEffect, useState } from "react";
import JustForYou from "../card";
import Link from "next/link";
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";

function PerfumesComponent() {
  const [product, setProduct] = useState<WatchesXPerfumes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: WatchesXPerfumes[] = await DataFetching(); // Fetch data
      const final =[]
      const slicedData1: WatchesXPerfumes[] = data.slice(0, 4); // Slice data
      const slicedData2: WatchesXPerfumes[] = data.slice(6, 11); // Slice data
      final.push(...slicedData1, ...slicedData2)
      setProduct(final);
    };
    fetchData();
  }, []);

  if (!product) {
    return <div>No watches found</div>;
  }

  return (
    <div className="w-full py-9">
      <div className="flex flex-col items-center md:justify-center">
        <div className="mb-8 flex flex-col w-full text-center md:max-w-[463px]">
          <p className="text-gray-500 uppercase text-sm">Exclusive Collection</p>
          <h1 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl">
            SCENTS OF ELEGANCE: BESTSELLING PERFUMES
          </h1>
          <p className="text-gray-600 mt-2">
            Immerse yourself in an exquisite range of fragrances, crafted to evoke elegance and individuality. Find your signature scent today.
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

export default PerfumesComponent;