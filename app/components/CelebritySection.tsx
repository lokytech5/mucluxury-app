"use client";
import React from 'react';
import EmblaCarousel from './carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const celebrities = [
    { id: 3, name: 'Celebrity Three', imageUrl: '/images/img-b1.jpeg', description: 'Rocking our stylish evening dresses.' },
    { id: 4, name: 'Celebrity Four', imageUrl: '/images/img2.jpeg', description: 'Elegant in our formal wear.' },
    { id: 5, name: 'Celebrity Five', imageUrl: '/images/img4.jpeg', description: 'Casual chic in our casual wear.' },
    { id: 6, name: 'Celebrity Six', imageUrl: '/images/img5.jpeg', description: 'Sophisticated in our office wear.' },
    { id: 2, name: 'Celebrity Two', imageUrl: '/images/img6.jpeg', description: 'Spotted in our trendy winter wear.' },
    { id: 7, name: 'Celebrity Seven', imageUrl: '/images/img-b2.jpeg', description: 'Stylish in winter wear.' },
    { id: 7, name: 'Celebrity Seven', imageUrl: '/images/img7.jpeg', description: 'Stylish in winter wear.' },
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
                        <img
                            src={celebrity.imageUrl}
                            alt={celebrity.name}
                            className="embla__slide__img w-full h-[500px] object-cover rounded-2xl"
                        />
                        <p className="text-center text-white mt-4">{celebrity.description}</p>
                    </div>
                ))} options={OPTIONS} />
            </div>
        </div>
    );
};

export default CelebritySection;
