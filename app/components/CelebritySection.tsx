"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const celebrities = [
    { id: 3, name: 'Celebrity Three', imageUrl: '/images/Img1.jpeg', description: 'Rocking our stylish evening dresses.' },
    { id: 4, name: 'Celebrity Four', imageUrl: '/images/img2.jpg', description: 'Elegant in our formal wear.' },
    { id: 5, name: 'Celebrity Five', imageUrl: '/images/frontal.jpeg', description: 'Casual chic in our casual wear.' },
    { id: 6, name: 'Celebrity Six', imageUrl: '/images/frontal2.jpeg', description: 'Sophisticated in our office wear.' },
    { id: 2, name: 'Celebrity Two', imageUrl: '/images/hairs1.jpeg', description: 'Spotted in our trendy winter wear.' },
    { id: 2, name: 'Celebrity Two', imageUrl: '/images/hairs2.jpeg', description: 'Spotted in our trendy winter wear.' },
];

const CelebritySection = () => {
    return (
        <div className="container py-12">
            <div className="p-4">
                <h1 className="text-5xl font-bold text-center mb-12 text-white">Celebrity Spotlights</h1>
                <p className="text-center mb-10 text-white">See how celebrities style our brand.</p>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {celebrities.map((celebrity) => (
                        <SwiperSlide key={celebrity.id}>
                            <img src={celebrity.imageUrl} alt={celebrity.name} className="w-full h-[500px] object-cover rounded-2xl" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CelebritySection;
