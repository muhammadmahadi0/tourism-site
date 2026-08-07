import React from 'react';
import placesData from '../../data/places.json';
import SectionHeading from '../shared/SectionHeading';
import PlaceCard from '../shared/PlaceCard';
import AnimatedReveal from '../shared/AnimatedReveal';
import { useLanguage } from '../../context/LanguageContext';

export default function FamousPlacesGrid() {
  const { t } = useLanguage();
  // Filter top featured places for bento grid
  const famousPlaces = placesData.filter(p => p.featured);

  return (
    <section className="py-20 bg-paper dark:bg-ink relative z-20 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t('famousLabel')}
          title={t('famousTitle')}
          subtitle={t('famousSubtitle')}
          actionText={t('exploreCatalogue')}
          actionLink="/places-to-visit"
        />

        {/* Bento Box CSS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Sundarbans (Large 2x2 featured card on desktop) */}
          {famousPlaces[0] && (
            <AnimatedReveal className="md:col-span-2 md:row-span-2" delay={0.1}>
              <PlaceCard 
                place={famousPlaces[0]} 
                isFeatured={true}
                className="h-full min-h-[380px]"
              />
            </AnimatedReveal>
          )}

          {/* Card 2: Cox's Bazar */}
          {famousPlaces[1] && (
            <AnimatedReveal className="md:col-span-1 md:row-span-1" delay={0.2}>
              <PlaceCard place={famousPlaces[1]} className="h-full" />
            </AnimatedReveal>
          )}

          {/* Card 3: Sreemangal */}
          {famousPlaces[2] && (
            <AnimatedReveal className="md:col-span-1 md:row-span-1" delay={0.3}>
              <PlaceCard place={famousPlaces[2]} className="h-full" />
            </AnimatedReveal>
          )}

          {/* Card 4: Ratargul (Vertical 1x2 card) */}
          {famousPlaces[3] && (
            <AnimatedReveal className="md:col-span-1 md:row-span-1" delay={0.4}>
              <PlaceCard place={famousPlaces[3]} className="h-full" />
            </AnimatedReveal>
          )}

          {/* Card 5: Saint Martin's */}
          {famousPlaces[4] && (
            <AnimatedReveal className="md:col-span-2 md:row-span-1" delay={0.5}>
              <PlaceCard place={famousPlaces[4]} className="h-full" />
            </AnimatedReveal>
          )}

        </div>

      </div>
    </section>
  );
}
