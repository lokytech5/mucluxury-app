import React from 'react';

const PromotionsSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center max-w-4xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img src="/images/category3.jpg" alt="Exclusive Collection" className="rounded-xl shadow-lg object-cover h-48 md:h-full w-full"/>
      </div>
      
      {/* Text Section */}
      <div className="md:ml-8 w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Summer Collection</h2>
        <p className="text-lg md:text-xl mb-6">Discover the latest trends, crafted with precision for the modern individual.</p>
        <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all text-lg">Shop Now</button>
        <p className="mt-4 md:mt-6 italic text-sm">Luxury in every detail.</p>
      </div>
    </div>
  );
};

export default PromotionsSection;
