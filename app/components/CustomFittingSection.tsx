import React from 'react';

const CustomFittingSection = () => {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto text-center">
        {/* Headline */}
        <h2 className="text-5xl font-bold mb-4 text-neutral" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          Tailored Just for You
        </h2>
        {/* Divider */}
        <div className="border-b-2 border-gray-300 w-12 mx-auto mb-6"></div>
        {/* Introductory Text */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed tracking-wide">
          Experience the <span className="font-bold">luxury</span> of custom-made clothing with our personal design service.
          Our expert designers will visit you to take precise measurements, ensuring a <span className="font-bold">perfect fit</span> every time.
        </p>
        {/* Video/Slideshow */}
        <div className="mb-8 video-container">
          <video controls className="video-content rounded-xl shadow-lg">
            <source src="/videos/video12.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Testimonials */}
        <div className="text-lg italic text-gray-600 mb-8">
          <p>"The custom fitting service was incredible. My outfit fits perfectly!"</p>
          <p>- Satisfied Client</p>
        </div>
        {/* Call to Action */}
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all text-lg">
          Book Your Custom Fitting Today
        </button>
      </div>
    </div>
  );
};

export default CustomFittingSection;
