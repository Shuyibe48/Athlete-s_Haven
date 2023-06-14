import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Automatically slide every 2 seconds
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [images.length]);

    return (
        <div className="relative w-full h-96">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-4xl text-white font-bold mb-4">Slide Title</h2>
                        <p className="text-white text-lg mb-8">Slide description</p>
                        <button className="bg-gray-800 text-white py-2 px-4 rounded">
                            Slide Button
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
