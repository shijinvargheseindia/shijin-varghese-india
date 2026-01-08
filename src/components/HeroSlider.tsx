import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

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
      className="relative h-screen min-h-[600px] overflow-hidden"
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
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={image}
              alt={`Shijin Varghese - Image ${index + 1}`}
              className={`w-full h-full object-cover object-center ${
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

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            SHIJIN VARGHESE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in stagger-1">
            Serving Humanity. Empowering Youth. Strengthening India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in stagger-2">
            <Link to="/awards" className="btn-hero-primary">
              Awards & Recognition
            </Link>
            <Link to="/positions" className="btn-hero-secondary">
              Positions Held
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in stagger-3">
            <Link to="/wealth-management" className="btn-hero-outline">
              SVI Wealth Management
            </Link>
            <Link to="/nextgen-pro" className="btn-hero-outline">
              SVI NextGen Pro
            </Link>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-8 animate-fade-in stagger-4">
            <a
              href="https://wa.me/919633508448"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Connect on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-saffron"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
