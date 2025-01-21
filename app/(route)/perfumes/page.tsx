import Navbar from '@/app/Component/header'
import PerfumesComponent from '@/app/Component/productListPage/perfumes'
import TopSection from '@/app/Component/productListPage/productTop'
import React from 'react'

function Watches() {
  return (
    <div>
        <TopSection />
        <Navbar />
        <PerfumesComponent />
    </div>
  )
}

export default Watches