"use client";
import React from 'react';
import Image from 'next/image';
import EmblaCarousel from './carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const celebrities = [
    { id: 3, name: 'Celebrity Three', imageUrl: '/images/celebrity6.jpg', description: 'Rocking our stylish custom fit.' },
    { id: 4, name: 'Celebrity Four', imageUrl: '/images/celebrity8.jpg', description: 'Elegant in our formal wear.' },
    { id: 5, name: 'Celebrity Five', imageUrl: '/images/celebrity11.jpg', description: 'Casual wear.' },
    { id: 6, name: 'Celebrity Six', imageUrl: '/images/celebrity4.jpg', description: 'Sophisticated in our office wear.' },
    { id: 2, name: 'Celebrity Two', imageUrl: '/images/celebrity5.jpg', description: 'Spotted in our trendy wear.' },
    { id: 7, name: 'Celebrity Seven', imageUrl: '/images/celebrity7.jpg', description: 'Stylish in winter wear.' },
    { id: 7, name: 'Celebrity Seven', imageUrl: '/images/celebrity9.jpg', description: 'Stylish in winter wear.' },
    { id: 7, name: 'Celebrity Seven', imageUrl: '/images/celebrity10.jpg', description: 'Sophisticated in our office wear.' },
    { id: 7, name: 'Celebrity Seven', imageUrl: '/images/celebrity12.jpg', description: 'Stylish custom fit wear.' },
];

const OPTIONS: EmblaOptionsType = { loop: true };

const CelebritySection = () => {
    return (
        <div className="container py-12">
            <div className="p-4">
                <h1 className="text-5xl font-bold text-center mb-12 text-white">Celebrity Spotlights</h1>
                <p className="text-center mb-10 text-white">See how celebrities style our brand.</p>
            
                <EmblaCarousel slides={celebrities.map((celebrity, index) => (
                    <div className="embla__slide" key={index}>
                        <Image
                            src={celebrity.imageUrl}
                            alt={celebrity.name}
                            width={400}  // Adjust width as needed
                            height={500}  // Adjust height as needed
                            className="embla__slide__img w-full object-cover rounded-2xl"
                        />
                        <p className="text-center text-white mt-4">{celebrity.description}</p>
                    </div>
                ))} options={OPTIONS} />
            </div>
        </div>
    );
};

export default CelebritySection;
