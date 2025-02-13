import { useState, useEffect } from 'react';
import ad1Image from '../assets/ads1.png';
import ad2Image from '../assets/ads2.png';
import ad3Image from '../assets/ads3.png';

const AdsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const ads = [
    { id: 1, image: ad1Image, title: 'Advertisement 1' },
    { id: 2, image: ad2Image, title: 'Advertisement 2' },
    { id: 3, image: ad3Image, title: 'Advertisement 3' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === ads.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slider container with overflow hidden */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {ads.map((ad) => (
          <div key={ad.id} className="w-full h-full flex-shrink-0">
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {ads.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export { AdsSlider };
