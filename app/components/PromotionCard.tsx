// components/PromotionCard.tsx

import React from 'react';
import Image from 'next/image';

interface PromotionCardProps {
  title: string;
  imageUrl: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ title, imageUrl, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white card w-full md:w-72 rounded-xl shadow-lg overflow-hidden mx-auto sm:mx-auto lg:mx-0 hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <figure>
          <Image src={imageUrl} alt={title} width={284} height={200} className="w-full h-48 object-cover" />
        </figure>
      </div>
      <div className="p-4 text-black">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href={buttonLink} className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-black transition duration-300">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default PromotionCard;
