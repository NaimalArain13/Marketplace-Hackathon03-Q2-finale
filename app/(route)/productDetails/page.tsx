import ProductDetail from '@/app/Component/productDetails/productDetails'
import TopSection from '@/app/Component/productListPage/productTop'
import React from 'react'

function ProductDetails() {
  return (
    <div>
      <TopSection />
        <ProductDetail />
    </div>
  )
}

export default ProductDetails