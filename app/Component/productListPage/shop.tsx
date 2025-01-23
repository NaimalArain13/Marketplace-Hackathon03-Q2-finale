"use client";
import { useEffect, useState } from "react";
import JustForYou from "../card";
import DataFetching, { WatchesXPerfumes } from "@/lib/dataFetching";
import Image from "next/image";
import Link from "next/link";
import LoadingAnimation from "../homepage/loadingAnimation";
import BreadCrumb from "../breadcrumb";
import Logos from "./logos";
function Shop() {
  const [product, setProduct] = useState<WatchesXPerfumes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const itemsPerPage = 8; // Items per page
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true); // Show loader before fetching
      const data: WatchesXPerfumes[] = await DataFetching(); // Fetch data
      setProduct(data); // Set product state
      setLoader(false); // Hide loader once data is fetched
    };
    fetchData();
  }, []);
  if (loader) {
    return <LoadingAnimation />;
  }
  console.log(product);
  const images = product?.map((p) => p.imageUrl);
  console.log("images", images);

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);
  // Calculate the total number of pages
  const totalPages = Math.ceil(product.length / itemsPerPage);
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-Primary space-y-4">
      {/* section one */}
      <div className="flex flex-col gap-4 items-start  md:px-9">
        <BreadCrumb route1="Shop" route1Link="/productListing"/>
        <div className="flex justify-between items-center py-3">
          <h1 className="font-medium text-xl">Shop</h1>
        </div>
      </div>
      {/* section two */}
      <div className="flex justify-center items-center flex-col py-6">
        <div className="grid grid-cols  md:grid-cols-5 gap-2">
          <div className="transition-transform hover:scale-105 duration-300 p-2 bg-black rounded-full">
            {" "}
            <Image
              src={images[7] || ""}
              alt="shop 1"
              width={206}
              height={223}
              className="rounded-full"
            />
          </div>
          <div className="transition-transform hover:scale-105 duration-300 p-2 bg-black rounded-full">
            <Image
              src={images[2] || ""}
              alt="shop 1"
              width={206}
              height={223}
              className="rounded-full"
            />
          </div>
          <div className="transition-transform hover:scale-105 duration-300 p-2 bg-black rounded-full">
            <Image
              src={images[5] || ""}
              alt="shop 1"
              width={206}
              height={223}
              className="rounded-full"
            />
          </div>
          <div className="transition-transform hover:scale-105 duration-300 p-2 bg-black rounded-full">
            <Image
              src={images[1] || ""}
              alt="shop 1"
              width={206}
              height={223}
              className="rounded-full"
            />
          </div>
          <div className="transition-transform hover:scale-105 duration-300 p-2 bg-black rounded-full ">
            <Image
              src={images[4] || ""}
              alt="shop 1"
              width={206}
              height={223}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {/* section three */}
      <div className="flex flex-col gap-5 md:flex-row justify-between p-5 items-center bg-white md:px-9"></div>
      {/* section four */}
     < Logos/>
      {/* Section five */}
      <div className="flex justify-center py-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7   md:p-11 px-4">
          {currentItems.map((item, index) => (
            <Link key={index} href={`/productListing/${String(item._id)}`}>
              <JustForYou key={index} {...item} />
            </Link>
          ))}
        </div>
      </div>
      {/* Section 6 */}
      {/* Pagination Controls */}
      <div className="flex justify-center p-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index + 1 ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Shop;
