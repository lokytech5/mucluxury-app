import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Silk Shirt', price: '#25,000', imageUrl: '/images/product1.jpg', limited: false, description: "hello lokosman" },
    { id: 2, name: 'Chambray Shirt', price: '$30,000', imageUrl: '/images/product2.jpg', limited: false },
    { id: 3, name: 'Oxford Shirt', price: '#20,000', imageUrl: '/images/product3.jpg', limited: true },
    { id: 4, name: 'Linear Floral', price: '#15,000', imageUrl: '/images/product4.jpg', limited: false },
    { id: 5, name: 'Dress Shirt', price: '#17,000', imageUrl: '/images/product5.jpg', limited: false },
];

const FeaturedProducts = () => {
    return (
        <div className="py-12" style={{ backgroundColor: '#f7f3ef' }}> {/* Use a light beige background */}
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
                    <button className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-full hover:bg-black transition-all text-lg">
                        More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
