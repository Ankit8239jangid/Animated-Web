

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    "https://cdn.dribbble.com/userupload/12052945/file/original-d69aecb883757065752b55e8e7ad2b95.png?crop=0x0-1600x1200&resize=640x480&vertical=center ",
    " https://cdn.dribbble.com/userupload/10562703/file/original-411c73a75ab32e2fed0f32a43d9f5053.png?resize=640x480&vertical=center",
    " https://cdn.dribbble.com/userupload/8934433/file/original-09fda02964324ba7b06ff58984ed3933.png?crop=0x0-3201x2401&resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/8727684/file/original-a6d6e72b2eafa63c82575cb1bf28cdc1.png?resize=450x338&vertical=center ",
    "https://cdn.dribbble.com/userupload/12047232/file/still-3c29a4f202bebce812064c69881f94b1.png?resize=450x338&vertical=center ",
]

export default function ModernImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextSlide()
          return 0
        }
        return prevProgress + 1
      })
    }, 40) // Update progress every 50ms

    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full max-w-4xl  mx-auto overflow-hidden rounded-xl shadow-2xl">
      <div className="relative h-[80vh] bg-gray-900">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20" />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setProgress(0)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-30">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}




















