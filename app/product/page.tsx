import React from 'react';
import Image from 'next/image';  // Import the Next.js Image component
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Shirts New Era', price: '$80.99', imageUrl: '/images/product1.jpg', description: "A new era of fashion." },
  { id: 2, name: 'Jacket Bomber', price: '$100.00', imageUrl: '/images/product2.jpg', description: "Stay warm in style." },
  { id: 3, name: 'Jacket Winter Long', price: '$150.30', imageUrl: '/images/product1.jpg', description: "Perfect for winter chills." },
];

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white py-16 md:py-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Text Section for Small Screens */}
          <div className="block md:hidden text-center mt-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 animate-fadeInUp">
              WE’RE CHANGING THE WAY THINGS GET MADE.
            </h1>
          </div>

          {/* Image Section for Small Screens */}
          <div className="md:hidden w-full flex justify-center mb-10">
            <Image
              src="/images/ad.png"
              alt="Product Hero"
              width={300} // Adjust these values as necessary
              height={400} // Adjust these values as necessary
              className="shadow-2xl w-full max-w-xs sm:max-w-sm object-contain"
            />
          </div>

          {/* Supporting Text Section for Small Screens */}
          <div className="block md:hidden text-center">
            <p className="text-md sm:text-lg mb-8 animate-fadeInUp delay-200">
              Discover how our mission is shaping a new era in fashion, with a focus on sustainability and creative independence.
            </p>
          </div>

          {/* Text Section for Medium and Large Screens */}
          <div className="hidden md:flex flex-col justify-center text-center md:text-left md:w-1/2 lg:w-2/5 text-shadow-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp">
              WE’RE CHANGING THE WAY THINGS GET MADE.
            </h1>
            <p className="text-md sm:text-lg md:text-xl mb-8 animate-fadeInUp delay-200">
              Discover how our mission is shaping a new era in fashion, with a focus on sustainability and creative independence.
            </p>
          </div>

          {/* Image Section for Medium and Large Screens */}
          <div className="hidden md:flex md:w-1/2 lg:w-3/5 justify-center items-center animate-float">
            <Image
              src="/images/ad.png"
              alt="Product Hero"
              width={500} // Adjust these values as necessary
              height={600} // Adjust these values as necessary
              className="shadow-2xl w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* Overlapping Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500 opacity-70 transform rotate-45 translate-x-32 translate-y-32 pointer-events-none animate-bounceSlow"></div>
        </div>

        {/* Parallax Background Effect */}
        <div className="absolute inset-0 w-full h-full bg-parallax bg-cover bg-center opacity-10 pointer-events-none"></div>
      </div>

      {/* Shop by Essentials Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 leading-tight drop-shadow-md animate-fadeInUp">
          Shop by Essentials
        </h2>
        <div className="flex justify-center mb-8">
          <button className="px-4 py-2 mx-2 bg-black text-white rounded-full hover:shadow-lg transition duration-300">All</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-black rounded-full hover:shadow-lg transition duration-300">Winter Collection</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-black rounded-full hover:shadow-lg transition duration-300">New Arrivals</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              imageUrl={product.imageUrl} 
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
