"use client";

import React, { useState, useEffect, useRef } from "react";
import { HERO_SLIDES, HeroSlide } from "@/data/hospital-data";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";

interface HeroCarouselProps {
  onOpenBooking: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Animated Slides */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Subtle medical grid & gradient backdrop */}
          <div className={`absolute inset-0 bg-gradient-to-r ${s.bgGradient} opacity-95`} />
          <div className="absolute inset-0 bg-[radial-gradient(#BFD1FF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 animate-ken-burns" />
          
          {/* Ambient luminous glow */}
          <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-[#0f57fb]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 left-10 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 key={slide.id}">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Award className="w-4 h-4 text-[#BFD1FF]" />
            <span>{slide.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading leading-[1.15] tracking-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed max-w-2xl font-light">
            {slide.subtitle}
          </p>

          {/* Buttons Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {slide.buttonLink.startsWith("tel:") ? (
              <a
                href={slide.buttonLink}
                className="px-7 py-3.5 rounded-[4px] bg-[#0f57fb] hover:bg-white hover:text-[#00123A] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/30 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{slide.buttonText}</span>
              </a>
            ) : (
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-[4px] bg-[#0f57fb] hover:bg-white hover:text-[#00123A] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/30 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{slide.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {slide.secondaryText && (
              <a
                href={slide.secondaryLink}
                className="px-6 py-3.5 rounded-[4px] bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm sm:text-base tracking-wide backdrop-blur-sm transition-all duration-200 inline-flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{slide.secondaryText}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-[#0f57fb] text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-[#0f57fb] text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dot Pills */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
              idx === currentSlide
                ? "w-8 bg-[#0f57fb] shadow-md shadow-blue-500/50"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
