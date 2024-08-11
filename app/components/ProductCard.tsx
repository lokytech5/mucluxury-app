import React from 'react';
import Image from 'next/image';
import { FaCartPlus } from "react-icons/fa";

interface ProductCardProps {
    name: string;
    price: string;
    imageUrl: string;
    description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, description }) => {
    return (
        <div className="bg-white card w-72 rounded-xl shadow-lg overflow-hidden mx-auto sm:mx-auto lg:mx-0">
            <div className="relative">
                <figure>
                    <Image src={imageUrl} alt={name} width={284} height={200} className="w-full h-48 object-fit" />
                </figure>
            </div>
            <div className="p-4 flex flex-col justify-between text-black">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold">{name}</h2>
                        <p className="text-sm font-semibold text-gray-700">{price}</p>
                    </div>
                    <button className="text-white bg-yellow-500 px-2 py-2 rounded-full flex items-center ml-4 hover:bg-black transition duration-300">
                        <FaCartPlus className="h-5 w-5" />
                    </button>
                </div>
                {description && <p className="text-gray-600 mt-2">{description}</p>}
            </div>
        </div>
    );
};

export default ProductCard;
