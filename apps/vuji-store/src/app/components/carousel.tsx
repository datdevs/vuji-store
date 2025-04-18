import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const navigationClassName =
  'absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30';

export function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    },
    [handlePrevious, handleNext],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isAutoPlaying) {
      interval = setInterval(handleNext, autoPlayInterval);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext, autoPlayInterval]);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      role="region"
      aria-label="Carousel"
    >
      <div className="relative h-[80vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={currentSlide !== index}
          >
            <Image
              priority
              className="absolute inset-0 h-full w-full object-cover"
              src={slide.imageUrl}
              alt={slide.title}
              width={1920}
              height={1080}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="container absolute bottom-0 left-0 right-0 mx-auto px-4 py-10 md:p-16 lg:px-4">
                <h2
                  className={`mb-4 transform text-4xl font-bold text-white transition-all delay-100 duration-700 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  {slide.title}
                </h2>
                <p
                  className={`mb-6 transform text-lg text-gray-200 transition-all delay-200 duration-700 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  {slide.description}
                </p>
                <button
                  onClick={() => window.open(slide.link, '_blank')}
                  className={`transform rounded-full bg-blue-600 px-10 py-3 text-white transition-all delay-300 duration-700 hover:bg-blue-700 ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  aria-label={`Read more about ${slide.title}`}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handlePrevious} className={navigationClassName + ' left-4'} aria-label="Previous slide">
        <span className="material-symbols-rounded">chevron_left</span>
      </button>

      <button onClick={handleNext} className={navigationClassName + ' right-4'} aria-label="Next slide">
        <span className="material-symbols-rounded">chevron_right</span>
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
