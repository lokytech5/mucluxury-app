import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <div className="container mx-auto p-6 rounded-xl shadow-lg bg-white grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Text Section */}
        <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WE’RE CHANGING THE WAY THINGS GET MADE.</h1>
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <span className="inline-block w-8 h-8 bg-black text-white flex items-center justify-center rounded-full mr-3">🌍</span>
              <div>
                <h3 className="text-xl font-semibold">MISSION</h3>
                <p className="text-sm">We’re on a mission to empower creative independence in a commercial world and incredible.</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-8 h-8 bg-black text-white flex items-center justify-center rounded-full mr-3">🍃</span>
              <div>
                <h3 className="text-xl font-semibold">SUSTAINABILITY</h3>
                <p className="text-sm">We’re challenging conventional retail, putting an end to dead stock, unconventional waste, and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img src="/images/catgory7.jpg" alt="Product Hero" className="rounded-lg shadow-md w-full h-full object-cover" />
        </div>
      </div>

      {/* Shop by Essentials Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Shop by Essentials</h2>
        <div className="flex justify-center mb-8">
          <button className="px-4 py-2 mx-2 bg-black text-white rounded-full">All</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-black rounded-full">Winter Collection</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-black rounded-full">New Arrivals</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-black rounded-full">Best Sellers</button>
          <button className="px-4 py-2 mx-2 bg-gray-200 text-black rounded-full">Flash Sale</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <span className="inline-block bg-black text-white px-2 py-1 rounded-full text-xs mb-2">NEW ARRIVAL</span>
            <img src="/images/product1.jpg" alt="Shirts New Era" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold">Shirts New Era</h3>
            <p className="text-orange-500 text-xl font-bold">$80.99</p>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded-full text-xs mb-2">GET OFF 20%</span>
            <img src="/images/product2.jpg" alt="Jacket Bomber" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold">Jacket Bomber</h3>
            <p className="text-gray-500 text-lg line-through">$128.00</p>
            <p className="text-orange-500 text-xl font-bold">$100.00</p>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/images/product1.jpg" alt="Jacket Winter Long" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold">Jacket Winter Long</h3>
            <p className="text-orange-500 text-xl font-bold">$150.30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
