// components/CategoryCard.tsx

import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
    description?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, description }) => {
    return (
        <div className="bg-white card w-72 rounded-xl shadow-lg overflow-hidden mx-auto sm:mx-auto lg:mx-0">
            <div className="relative">
                <figure>
                    <Image src={imageUrl} alt={title} width={284} height={200} className="w-full h-48 object-cover" />
                </figure>
            </div>
            <div className="p-4 text-black">
                <h2 className="text-lg font-bold">{title}</h2>
                {description && <p className="text-gray-600 mt-2">{description}</p>}
            </div>
        </div>
    );
};

export default CategoryCard;
