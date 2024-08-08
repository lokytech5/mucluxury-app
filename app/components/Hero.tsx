// components/Hero.tsx

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="absolute inset-0 opacity-80">
        <Image 
          src="/images/img2.jpg" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
      </div>
      <div className="relative z-10 flex flex-col items-start p-8 md:p-12 lg:p-24 space-y-8 max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-md animate-fade-in">
          Discover the New <br />
          <span className="text-yellow-500">Autumn Collection</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md animate-fade-in">
          Elevate your style with our <span className="font-bold">latest arrivals</span>. Trendy designs, 
          <span className="font-bold"> premium fabrics</span>, and unparalleled comfort.
        </p>
        <div className="flex space-x-4 animate-bounce">
          <button className="px-6 py-3 text-lg font-semibold text-black bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600">
            Shop Now
          </button>
          <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-yellow-500 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition duration-300">
            Explore
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-6 md:mt-0 md:ml-6 lg:ml-12 w-full md:w-1/2">
        {/* <Image
          src="/images/img2.jpg"
          alt="Model Image"
          height={700}
          width={500}
          className="object-cover rounded-lg shadow-2xl"
        /> */}
      </div>
    </div>
  )
}

export default Hero
