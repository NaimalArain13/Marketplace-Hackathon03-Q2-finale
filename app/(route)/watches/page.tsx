import Navbar from '@/app/Component/header'
import TopSection from '@/app/Component/productListPage/productTop'
import WatchesComponent from '@/app/Component/productListPage/watches'
import React from 'react'

function Watches() {
  return (
    <div>
        <TopSection />
        <Navbar />
        <WatchesComponent />
    </div>
  )
}

export default Watches