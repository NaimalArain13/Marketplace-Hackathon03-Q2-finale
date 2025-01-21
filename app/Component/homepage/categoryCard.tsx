import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CategoryProps{
    image:string;
    title:string;
    value:string
}
export default function CategoryCard({image,title, value}:CategoryProps) {
  return (
    <div className='hover:scale-125 transition-transform duration-200 w-full max-w-[170px] h-32 py-5 gap-4 border border-bg  flex flex-col justify-center items-center hover:bg-Secondary2'>
    <Link href={value}>
   
      <Image 
      src={image}
      alt={title}
      width={66}
      height={66}
      className='text-bg hover:text-text'
      />
      <h1>{title}</h1>
   
    </Link>
    </div>
  )
}