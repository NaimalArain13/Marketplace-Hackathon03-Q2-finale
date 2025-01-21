import React from 'react'
import Image from "next/image"
function Bottom() {
    const buttons:Props[]=[
        {
            image:"https://i.pinimg.com/736x/40/ef/3a/40ef3ac38c408589ab8dd2bf4694be47.jpg",
            title:"FREE AND FAST DELIVERY",
            description:"Free delivery for all orders over $140"
        },
        {
            image:"https://i.pinimg.com/236x/99/07/3b/99073ba9bac04b19d0fd3c7a8dfcd3cd.jpg",
            title:"24/7 CUSTOMER SERVICE",
            description:"Friendly 24/7 customer support"
        },
        {
            image:"https://i.pinimg.com/736x/84/da/b7/84dab733a57013ff4c135c792cfa88cd.jpg",
            title:"MONEY BACK GUARANTEE",
            description:"We reurn money within 30 days"
        },
    ]
  return (
    <div className='grid grid-cols md:grid-cols-3 py-7 gap-[26px] mx-auto w-full'>
        {buttons.map((button, index)=>(
            <BottomComponent key={index} {...button} />
        ))}
    </div>
  )
}

export default Bottom

interface Props {
    image:string;title:string;description:string
}
 const BottomComponent = ({image,title,description}:Props)=>{
    return(
    <div className='flex flex-col space-y-2 items-center justify-center py-4'>
        <div className='w-12 h-12 rounded-full bg-Text1 flex items-center justify-center'>
        <Image 
        src={image}
        alt={title}
        width={48}
        height={48} 
        className='rounded-full bg-gray-600 p-2'
        />
        </div>
        <h1 className='text-xl md:text-[20px] font-semibold'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
    )
}