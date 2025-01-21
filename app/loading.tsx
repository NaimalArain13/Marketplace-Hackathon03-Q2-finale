import React from 'react';

export default function LoadingAnimation() {
  return (
    <div>
      <div className="h-screen w-full py-10 relative flex md:flex-row flex-col gap-4 justify-center items-center bg-white dark:bg-gray-800">
        {/* <!-- 1 --> */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="absolute animate-ping h-[10rem] w-[10rem] rounded-full border-t-2 border-b-2 border-red-500"></div>
          <div className="absolute animate-spin h-[8rem] w-[8rem] rounded-full border-t-2 border-b-2 border-purple-500"></div>
          <div className="absolute animate-ping h-[6rem] w-[6rem] rounded-full border-t-2 border-b-2 border-pink-500"></div>
          <div className="absolute animate-spin h-[5rem] w-[5rem] rounded-full border-t-2 border-b-2 border-yellow-500"></div>
          <div className="absolute animate-ping h-[4rem] w-[4rem] rounded-full border-t-2 border-b-2 border-green-500"></div>
          <div className="absolute animate-spin h-[3rem] w-[3rem] rounded-full border-t-2 border-b-2 border-blue-500"></div>
          <div className="rounded-full h-20 w-20 animate-bounce flex items-center justify-center text-gray-400 font-semibold text-base dark:text-black">
            Loading...
          </div>
        </div>

        {/* <!-- 2 --> */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="absolute animate-spin h-[10rem] w-[10rem] rounded-full border-t-2 border-b-2 border-red-500"></div>
          <div className="absolute animate-spin h-[8rem] w-[8rem] rounded-full border-t-2 border-b-2 border-purple-500"></div>
          <div className="absolute animate-spin h-[6rem] w-[6rem] rounded-full border-t-2 border-b-2 border-pink-500"></div>
          <div className="absolute animate-spin h-[5rem] w-[5rem] rounded-full border-t-2 border-b-2 border-yellow-500"></div>
          <div className="absolute animate-spin h-[4rem] w-[4rem] rounded-full border-t-2 border-b-2 border-green-500"></div>
          <div className="absolute animate-spin h-[3rem] w-[3rem] rounded-full border-t-2 border-b-2 border-blue-500"></div>
          <div className="rounded-full h-20 w-20 animate-bounce flex items-center justify-center text-gray-400 font-semibold text-base dark:text-black">
            Loading...
          </div>
        </div>

        {/* <!-- 3 --> */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="absolute animate-spin h-[10rem] w-[10rem] rounded-full border-tr-2 border-b-2 border-red-500"></div>
          <div className="absolute animate-spin h-[8rem] w-[8rem] rounded-full border-tl-2 border-b-2 border-purple-500"></div>
          <div className="absolute animate-spin h-[6rem] w-[6rem] rounded-full border-tr-2 border-b-2 border-pink-500"></div>
          <div className="absolute animate-spin h-[5rem] w-[5rem] rounded-full border-tl-2 border-b-2 border-yellow-500"></div>
          <div className="absolute animate-spin h-[4rem] w-[4rem] rounded-full border-tr-2 border-b-2 border-green-500"></div>
          <div className="absolute animate-spin h-[3rem] w-[3rem] rounded-full border-tl-2 border-b-2 border-blue-500"></div>
          <div className="rounded-full h-20 w-20 animate-bounce flex items-center justify-center text-gray-400 font-semibold text-base dark:text-black">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}