import { useState, useEffect, useCallback } from "react";

import hero1 from "@/assets/hero/1.jpg";
import hero2 from "@/assets/hero/2.jpg";
import hero3 from "@/assets/hero/3.jpg";
import hero4 from "@/assets/hero/4.jpg";
import hero5 from "@/assets/hero/5.jpg";
import hero6 from "@/assets/hero/6.jpg";
import hero7 from "@/assets/hero/7.jpg";
import hero8 from "@/assets/hero/8.jpg";
import hero9 from "@/assets/hero/9.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroImages.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroImages.length) % heroImages.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section
      className="relative w-full min-h-[500px] max-h-[90vh] aspect-[4/3] md:aspect-[16/9] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          {/* Blurred background image for letterbox effect */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover scale-110 blur-xl opacity-60"
            />
          </div>
          
          {/* Main image - contained, not cropped */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image}
              alt={`Shijin Varghese - Image ${index + 1}`}
              className={`max-w-full max-h-full w-auto h-auto object-contain ${
                index === currentSlide ? "animate-slow-zoom" : ""
              }`}
            />
          </div>
        </div>
      ))}

      {/* Gradient Overlay - Tricolour themed */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            to bottom,
            hsla(24, 100%, 60%, 0.2) 0%,
            hsla(0, 0%, 0%, 0.5) 40%,
            hsla(0, 0%, 0%, 0.7) 70%,
            hsla(136, 83%, 28%, 0.3) 100%
          )`
        }}
      />

      {/* Content - Only Name and Tagline */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in drop-shadow-lg">
            SHIJIN VARGHESE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto opacity-95 animate-fade-in stagger-1 drop-shadow-md">
            Serving Humanity. Empowering Youth. Strengthening India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
