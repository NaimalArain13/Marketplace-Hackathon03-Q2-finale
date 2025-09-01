
import Navbar from '@/app/Component/header'
import TopSection from '@/app/Component/productListPage/productTop'
import React from 'react'
import DataFetching from '@/lib/dataFetching';
import SingleProductCard from '@/app/Component/productListPage/productDetail'
import { Cart } from '@/app/context/cartContext';

async function ProductDetails({params}:{params:{id:string}}) {
 const data: Cart[] = await DataFetching();

  // Log all IDs in the data array for debugging
  const ids = data.map((p) => String(p._id));

  // Ensure both sides of the comparison are strings
  const matchId = data.find((p) => String(p._id) === params.id);

  
  if (!matchId) {
    console.error("No matching product found for the provided ID.");
    return null;
  }
  return (
    <div>
      <TopSection />
      <Navbar />
      <SingleProductCard product={matchId} />
      </div>
       )
      };
 
export default ProductDetails