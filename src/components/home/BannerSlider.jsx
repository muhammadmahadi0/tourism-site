import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chip from '../shared/Chip';
import { useLanguage } from '../../context/LanguageContext';

export default function BannerSlider() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 10 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const HERO_SLIDES = [
    {
      id: "sundarbans-hero",
      placeId: "sundarbans",
      location: t('hero1Location'),
      title: t('hero1Title'),
      subtitle: t('hero1Subtitle'),
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80",
      badge: t('hero1Badge')
    },
    {
      id: "coxs-bazar-hero",
      placeId: "coxs-bazar",
      location: t('hero2Location'),
      title: t('hero2Title'),
      subtitle: t('hero2Subtitle'),
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      badge: t('hero2Badge')
    },
    {
      id: "sreemangal-hero",
      placeId: "sreemangal",
      location: t('hero3Location'),
      title: t('hero3Title'),
      subtitle: t('hero3Subtitle'),
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1600&q=80",
      badge: t('hero3Badge')
    }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const activeSlide = HERO_SLIDES[selectedIndex] || HERO_SLIDES[0];

  return (
    <section className="relative bg-ink dark:bg-ink-dark text-paper overflow-hidden min-h-[85vh] flex flex-col justify-between transition-colors">
      
      {/* Embla Carousel Container */}
      <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Image with subtle zoom Ken Burns effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                    idx === selectedIndex ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>

              {/* Gradient overlays for readability and dramatic mood */}
              <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent dark:from-ink-dark/95 dark:via-ink-dark/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40 dark:from-ink-dark" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 w-full flex-grow flex flex-col justify-center">
        
        <div className="max-w-2xl">
          {/* Animated Slide Metadata */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Chip variant="spice" size="sm">
                  {activeSlide.badge}
                </Chip>
                
                <span className="flex items-center gap-1 text-xs font-mono text-paper/80">
                  <MapPin className="w-3.5 h-3.5 text-rust" />
                  <span>{activeSlide.location}</span>
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] text-white tracking-tight">
                {activeSlide.title}
              </h1>

              <p className="text-base sm:text-lg text-paper/85 font-sans leading-relaxed max-w-xl">
                {activeSlide.subtitle}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/places-to-visit/${activeSlide.placeId}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-rust text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-rust-light transition-all shadow-lg hover:shadow-rust/30 group"
                >
                  <span>{t('exploreDestination')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/places-to-visit"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-paper/20 bg-ink/40 backdrop-blur-sm text-paper font-mono text-xs hover:bg-paper/10 transition-colors"
                >
                  {t('viewAllPlaces')}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Floating Travel Advisory Chip & Carousel Navigation Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-paper/15">
          
          {/* Floating Travel Advisory Chip */}
          <Link 
            to="/travel-update" 
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-forest/80 backdrop-blur-md border border-forest-light/40 text-paper text-xs font-mono hover:bg-forest transition-colors shadow-md group"
          >
            <ShieldAlert className="w-4 h-4 text-spice animate-pulse shrink-0" />
            <span className="truncate">{t('advisoryChipText')}</span>
            <span className="text-spice group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>

          {/* Carousel Custom Controls & Progress Dots */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === selectedIndex 
                      ? 'w-8 bg-spice' 
                      : 'w-2 bg-paper/40 hover:bg-paper/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5 pl-2">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full border border-paper/20 hover:bg-paper/20 text-paper transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                className="p-2 rounded-full border border-paper/20 hover:bg-paper/20 text-paper transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
