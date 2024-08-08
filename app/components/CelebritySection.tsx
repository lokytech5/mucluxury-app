import React from 'react';
import CelebritySpotlight from './CelebritySpotlight';

const celebrities = [
    { id: 1, name: 'Celebrity One', imageUrl: '/images/hairs1.jpeg', description: 'Wearing our latest summer collection.' },
    { id: 2, name: 'Celebrity Two', imageUrl: '/images/Img1.jpeg', description: 'Spotted in our trendy winter wear.' },
    { id: 3, name: 'Celebrity Three', imageUrl: '/images/hairs1.jpeg', description: 'Rocking our stylish evening dresses.' },
    { id: 4, name: 'Celebrity Four', imageUrl: '/images/Img1.jpeg', description: 'Elegant in our formal wear.' },
    { id: 5, name: 'Celebrity Five', imageUrl: '/images/hairs1.jpeg', description: 'Casual chic in our casual wear.' },
    { id: 6, name: 'Celebrity Six', imageUrl: '/images/Img1.jpeg', description: 'Sophisticated in our office wear.' },
];

const CelebritySection = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto p-4">
                <h1 className="text-5xl font-bold text-center mb-12 text-black">Celebrity Spotlights</h1>
                <p className="text-center mb-10 text-black">See how celebrities style our brand.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {celebrities.map((celebrity) => (
                        <CelebritySpotlight
                            key={celebrity.id}
                            name={celebrity.name}
                            imageUrl={celebrity.imageUrl}
                            description={celebrity.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CelebritySection;
