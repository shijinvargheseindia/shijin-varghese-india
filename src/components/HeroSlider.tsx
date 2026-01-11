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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

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

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroImages.length;
    const prevIndex = (currentSlide - 1 + heroImages.length) % heroImages.length;
    
    [nextIndex, prevIndex].forEach(index => {
      if (!loadedImages.has(index)) {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
        };
        img.src = heroImages[index];
      }
    });
  }, [currentSlide, loadedImages]);

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
      className="relative w-full min-h-[50vh] md:min-h-[60vh] max-h-[70vh] aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-navy mt-20"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Solid background - no blur */}
      <div className="absolute inset-0 bg-navy" />
      
      {/* Slides - NO text overlay */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          
          {/* Main image - contained, not cropped */}
          <div className="absolute inset-0 flex items-center justify-center max-w-5xl mx-auto">
            {(loadedImages.has(index) || index === currentSlide) ? (
              <img
                src={image}
                alt={`Shijin Varghese - Image ${index + 1}`}
                className={`max-w-full max-h-full w-auto h-auto object-contain ${
                  index === currentSlide ? "animate-slow-zoom" : ""
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ) : (
              <div className="w-full h-full bg-navy/50 animate-pulse" />
            )}
          </div>
        </div>
      ))}

      {/* Subtle gradient overlay at bottom for transition to text below */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--navy)))'
        }}
      />
    </section>
  );
};

export default HeroSlider;
