import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { HeroSlide } from '@/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container-padding w-full">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow-lg">
                        {slide.title}
                      </h1>
                    </div>
                    
                    <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                      <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        {slide.description}
                      </p>
                    </div>
                    
                    <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href={slide.ctaLink}
                          className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                        >
                          <span>{slide.ctaText}</span>
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        
                        <button className="btn btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4 inline-flex items-center space-x-2 group">
                          <FiPlay className="group-hover:scale-110 transition-transform duration-200" />
                          <span>Watch Video</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm">
                <span className="opacity-75">{String(index + 1).padStart(2, '0')}</span>
                <span className="mx-2 opacity-50">/</span>
                <span className="opacity-75">{String(slides.length).padStart(2, '0')}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-px h-8 bg-white opacity-50" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 