// components/PromotionsSection.tsx

import React from 'react';
import PromotionCard from './PromotionCard';

const promotions = [
  {
    id: 1,
    title: 'Summer Sale',
    imageUrl: '/images/closure2.jpeg',
    description: 'Get up to 50% off on our summer collection.',
    buttonText: 'Shop Now',
    buttonLink: '/shop',
  },
  {
    id: 2,
    title: 'New Arrivals',
    imageUrl: '/images/hairs1.jpeg',
    description: 'Check out the latest additions to our collection.',
    buttonText: 'Explore',
    buttonLink: '/new-arrivals',
  },
];

const PromotionsSection = () => {
  return (
    <div className="py-12 bg-accent">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-black">Special Offers</h1>
        <p className="text-center mb-10 text-black">Don't miss out on our latest promotions and special offers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              title={promotion.title}
              imageUrl={promotion.imageUrl}
              description={promotion.description}
              buttonText={promotion.buttonText}
              buttonLink={promotion.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsSection;
