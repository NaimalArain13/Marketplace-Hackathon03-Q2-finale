"use client"
import React, { useEffect, useState } from "react";
import CustomButton from "./customButton";

function Banner() {
  const images = [
    "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737302796/Seven_Bead_Metal_Lady_s_Shell_Face_Quartz_Watch_-_White_lodij7.jpg",
    "https://i.pinimg.com/474x/43/b5/30/43b53024a99892585dbe74dd01b1673c.jpg",
    "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737301950/CHANEL_CHANCE_EAU_TENDRE_Eau_de_Parfum_Fragrance_Collection_-_Macy_s_t7aham.jpg",
    "https://i.pinimg.com/474x/73/e5/47/73e5477a1f89b3da2a2db121820149b9.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div   className="h-screen bg-no-repeat bg-cover bg-center flex justify-center"
    style={{ backgroundImage: `url(${images[activeIndex]})`}}
    >
      <div className="w-11/12 sm:w-3/4 md:w-1/2 text-black flex flex-col justify-center items-center lg:items-start gap-3 md:gap-5 text-center">
        {/* Tagline */}
        <p className="text-sm md:text-base tracking-widest">SUMMER 2025</p>

        {/* Main Heading */}
        <h1 className="font-semibold md:font-bold text-[40px] md:text-[50px] leading-tight">
          NEW COLLECTION
        </h1>

        {/* Description */}
        <p className="text-md text-center md:text-left md:text-lg leading-relaxed">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>

        {/* Button */}
       <CustomButton text="Buy Now" />
      </div>
    </div>
  );
}

export default Banner;
