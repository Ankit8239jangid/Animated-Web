import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://cdn.dribbble.com/userupload/40268947/file/original-a2999722195be1a7749fc63f50142c13.png?resize=2048x1536&vertical=center",
  "https://cdn.dribbble.com/userupload/3664611/file/original-a57b65360a7b134f12b49705c3441379.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/17918230/file/original-9bf3e0c7581ddd0819fa5da97169c825.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/42648280/file/original-2b0e9abaf47943e6634e8a99aa77bc79.jpg?resize=2048x1536&vertical=center",
  "https://cdn.dribbble.com/userupload/42640329/file/original-bdde53c4bd9f6e6a9873a2539dd42ab1.png?resize=2048x1536&vertical=center",
];

export default function ModernImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextSlide();
          return 0;
        }
        return prevProgress + 1;
      });
    }, 40); // Update progress every 40ms

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl p-2 bg-transparent">
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-transparent">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full rounded-xl object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            loading={index === 0 ? 'eager' : 'lazy'} // Optimize image loading
          />
        ))}


        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-black p-1 sm:p-2 rounded-full hover:bg-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-black p-1 sm:p-2 rounded-full hover:bg-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setProgress(0);
              }}
              className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-3 sm:w-4' : 'bg-white bg-opacity-50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-30 ">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}