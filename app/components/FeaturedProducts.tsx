// components/FeaturedProducts.tsx

import React from 'react'
import Image from 'next/image'

const products = [
    { id: 1, name: 'Carabiner Set', price: '$12.00', imageUrl: '/images/hairs1.jpeg', limited: false, description: "hello lokosman" },
    { id: 2, name: 'Jaq Bag', price: '$32.00', imageUrl: '/images/Img1.jpeg', limited: false },
    { id: 3, name: 'Nanga Sandal', price: '$89.00', imageUrl: '/images/Img1.jpeg', limited: true },
    { id: 4, name: 'Ponca Thermos', price: '$13.00', imageUrl: '/images/Img1.jpeg', limited: false },
    { id: 5, name: 'Kamenoko Liner', price: '$120.00', imageUrl: '/images/Img1.jpeg', limited: false },
    { id: 6, name: 'P.S Cap', price: '$49.00', imageUrl: '/images/Img1.jpeg', limited: true },
];

const FeaturedProducts = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">New Arrivals</h1>
            <p className="text-center mb-10">Our new arrivals are built to withstand your activities while keeping you looking your best!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white card w-72 rounded-xl shadow-lg overflow-hidden mt-2 mx-auto sm:mx-auto lg:mx-0">
                        <div className="relative">
                            <figure>
                            <Image src={product.imageUrl} 
                            alt={product.name} 
                            width={284} 
                            height={200} 
                            className="w-full h-48 object-cover" />

                            </figure>
                        
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-xl font-semibold text-gray-700">{product.price}</p>
                            <p className="text-gray-600 mt-2">{product.description || "Description of the product goes here."}</p>
                            <button className="mt-4 w-full bg-black text-white px-6 py-3 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 3v18m18-18v18M5 13l4 4L19 7"></path>
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn btn-outline">See All</button>
            </div>
        </div>
    )
}

export default FeaturedProducts
