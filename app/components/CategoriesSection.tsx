// components/CategoriesSection.tsx

import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
    { id: 1, title: 'Men\'s Wear', imageUrl: '/images/Img1.jpeg', description: 'Explore our latest collection of men\'s clothing.' },
    { id: 2, title: 'Women\'s Wear', imageUrl: '/images/hairs1.jpeg', description: 'Discover trendy and stylish women\'s clothing.' },
    { id: 3, title: 'Kid\'s Wear', imageUrl: '/images/Img1.jpeg', description: 'Fashionable and comfortable clothing for kids.' },
    { id: 4, title: 'Accessories', imageUrl: '/images/hairs1.jpeg', description: 'Complete your look with our range of accessories.' },
];

const CategoriesSection = () => {
    return (
        <div className="py-12 bg-base-100">
            <div className="container mx-auto p-4">
                <h1 className="text-5xl font-bold text-center mb-12 text-black">Categories</h1>
                <p className="text-center mb-10 text-black">Explore our wide range of product categories.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            title={category.title}
                            imageUrl={category.imageUrl}
                            description={category.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;
