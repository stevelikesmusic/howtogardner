'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideshowProps = {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  className?: string;
};

export function Slideshow({ images, className = '' }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative mx-auto max-w-4xl ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="relative aspect-video">
          <Image
            fill
            alt={images[currentIndex].alt || ''}
            className="h-auto rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
            src={images[currentIndex].src}
          />

          {images[currentIndex].caption && (
            <div className="absolute right-0 bottom-0 left-0 bg-black/40 px-4 py-1 backdrop-blur-sm">
              <p className="text-center text-sm text-white">
                {images[currentIndex].caption}
              </p>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                aria-label="Previous image"
                className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:shadow-xl"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6 text-slate-800" />
              </button>

              <button
                aria-label="Next image"
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:shadow-xl"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6 text-slate-800" />
              </button>
            </>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-brand-gradient'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
