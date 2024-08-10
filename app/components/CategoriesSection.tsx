import React from 'react';

const CategoriesSection = () => {
    return (
        <div className="py-12 bg-gray-300">
            <div className="container mx-auto p-4 text-center max-w-4xl">
                <h1 className="text-5xl font-bold mb-4 text-black">Product Category</h1>
                <p className="mb-10 text-gray-600">
                    By Real Artists for Real People. We’re challenging conventional retail, putting an end to dead stock, unconventional waste, and more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mx-auto">
                    {/* Trouser Category */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden md:col-span-5 md:row-span-2 md:h-auto">
                        <img 
                            src="/images/category2.jpg" 
                            alt="Trouser Category" 
                            className="w-full object-cover h-48 md:h-80" 
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2 text-black">#TailoredFit</h2>
                            <p className="text-gray-700">Experience precision and comfort with our tailored design trousers, crafted to perfection.</p>
                            <div className="mt-4 justify-center space-x-4">
                                <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg">Explore</button>
                            </div>
                        </div>
                    </div>
                    {/* Shirt Category */}
                    <div className="card image-full rounded-xl shadow-lg overflow-hidden md:col-span-7">
                        <figure>
                            <img src="/images/catgory6.jpg" alt="Shirt Category" className="w-full h-40" />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-bold mb-2">#SmartCasual</h2>
                            <p className="text-white">Explore our exclusive range of shirts, designed for versatility and crafted for comfort.</p>
                            <div className="mt-4 justify-center space-x-4">
                                <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg">Explore Shirts</button>
                            </div>
                        </div>
                    </div>
                    {/* Native Design Category */}
<div className="bg-white card rounded-xl shadow-lg overflow-hidden md:col-span-7">
    <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold text-black">
            <span className="underline decoration-wavy decoration-orange-500">EXPERIENCE</span>
        </h2>
        <h2 className="text-5xl font-bold text-black">
            MUCLUXURY
        </h2>
        <p className="mt-4 text-lg text-gray-700">
            Discover unparalleled craftsmanship and design in every piece. We bring tradition, innovation, and luxury together to create a truly unique style experience.
        </p>
        <div className="mt-4 justify-center space-x-4">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg">Explore Our Collections</button>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;
