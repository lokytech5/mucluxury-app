// components/FeaturedProducts.tsx

import React from 'react';
import ProductCard from './ProductCard';

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
        <div className="py-12 bg-base-100">
            <div className="container mx-auto p-4">
                <h1 className="text-5xl font-bold text-center mb-12 text-black">Featured Products</h1>
                <p className="text-center mb-10 text-black">Our new arrivals are built to withstand your activities while keeping you looking your best!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <button className="btn btn-outline">See All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
