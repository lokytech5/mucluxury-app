import React from 'react';
import Image from 'next/image';

interface Props {
    name: string;
    imageUrl: string;
    description?: string;
}

const CelebritySpotlight = ({ name, imageUrl, description }: Props) => {
    return (
        <div className="bg-white card w-80 rounded-xl shadow-lg overflow-hidden mx-auto sm:mx-auto lg:mx-0 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
                <figure>
                    <Image src={imageUrl} alt={name} width={320} height={360} className="w-full h-60 object-cover" />
                </figure>
            </div>
            <div className="p-4 text-black">
                <h2 className="text-xl font-bold">{name}</h2>
                {description && <p className="text-gray-600 mt-2">{description}</p>}
            </div>
        </div>
    );
};

export default CelebritySpotlight;
