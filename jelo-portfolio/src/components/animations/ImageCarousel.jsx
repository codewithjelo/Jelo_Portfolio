import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden h-48 bg-slate-900 group/carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-slate-800"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-slate-800"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? 'bg-cyan-400 w-6' : 'bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;