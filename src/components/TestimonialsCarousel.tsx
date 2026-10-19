import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';

interface TestimonialItem {
  id: number;
  src: string;
  alt: string;
  name: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    src: '/depoimentos/depoimento-1.webp',
    alt: 'Testimonio de cliente Octubre Rosa 1',
    name: 'Opinión Verificada',
    role: 'Evento en Empresa y RRHH'
  },
  {
    id: 2,
    src: '/depoimentos/depoimento-2.webp',
    alt: 'Testimonio de cliente Octubre Rosa 2',
    name: 'Opinión Verificada',
    role: 'Presentación Escolar y Docente'
  },
  {
    id: 3,
    src: '/depoimentos/depoimento-3.webp',
    alt: 'Testimonio de cliente Octubre Rosa 3',
    name: 'Opinión Verificada',
    role: 'Charla de Concientización'
  }
];

interface TestimonialsCarouselProps {
  onImageClick?: (src: string) => void;
}

export function TestimonialsCarousel({ onImageClick }: TestimonialsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active dot on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const itemWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < testimonials.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const targetElement = container.children[index] as HTMLElement;
    if (targetElement) {
      const containerLeft = container.getBoundingClientRect().left;
      const targetLeft = targetElement.getBoundingClientRect().left;
      const scrollPos = container.scrollLeft + (targetLeft - containerLeft) - (container.clientWidth / 2 - targetElement.clientWidth / 2);
      
      container.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1;
    scrollTo(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0;
    scrollTo(nextIdx);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Carousel Container with Arrows */}
      <div className="relative group">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Testimonio anterior"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-rose-600 shadow-lg border border-rose-100 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory py-3 px-4 sm:px-6 scroll-smooth no-scrollbar items-center justify-start md:justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.id}
                className="shrink-0 snap-center flex flex-col items-center"
              >
                <div
                  onClick={() => onImageClick?.(item.src)}
                  className={`w-[260px] sm:w-[290px] md:w-[310px] rounded-2xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl ${
                    isActive 
                      ? 'border-rose-400 ring-2 ring-rose-400/20 shadow-rose-950/10 scale-100' 
                      : 'border-rose-100/90 opacity-80 hover:opacity-100 scale-95'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  <div className="bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-amber-500/10 px-3.5 py-2 border-b border-rose-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-rose-700 flex items-center gap-1.5">
                      <MessageSquareHeart className="w-3.5 h-3.5 text-rose-500" />
                      Opinión Real
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      Testimonio {index + 1} de 3
                    </span>
                  </div>

                  {/* Testimonial Image */}
                  <div className="p-2 sm:p-2.5 bg-slate-50/50 flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto max-h-[440px] sm:max-h-[470px] object-contain rounded-xl shadow-xs"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Siguiente testimonio"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-rose-600 shadow-lg border border-rose-100 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>

      {/* Indicadores de Progresso (Dots) */}
      <div className="flex flex-col items-center justify-center gap-2 pt-1">
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ver testimonio ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2.5 bg-gradient-to-r from-rose-500 to-pink-500 shadow-xs'
                    : 'w-2.5 h-2.5 bg-rose-200 hover:bg-rose-300'
                }`}
              />
            );
          })}
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Desliza lateralmente o usa las flechas para ver los 3 testimonios
        </span>
      </div>

    </div>
  );
}
