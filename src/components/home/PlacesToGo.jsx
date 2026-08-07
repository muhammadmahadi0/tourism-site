import React, { useState } from 'react';
import placesData from '../../data/places.json';
import SectionHeading from '../shared/SectionHeading';
import PlaceCard from '../shared/PlaceCard';
import AnimatedReveal from '../shared/AnimatedReveal';
import { Compass, Palmtree, Trees, Landmark, Waves } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function PlacesToGo() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const CATEGORIES = [
    { id: 'all', name: t('catAll'), icon: Compass },
    { id: 'Wildlife & Mangroves', name: t('catWildlife'), icon: Trees },
    { id: 'Beaches & Coasts', name: t('catBeaches'), icon: Palmtree },
    { id: 'Tea Gardens & Hills', name: t('catTea'), icon: Trees },
    { id: 'Heritage & History', name: t('catHeritage'), icon: Landmark },
    { id: 'Rivers & Wetlands', name: t('catRivers'), icon: Waves },
  ];

  const filteredPlaces = activeCategory === 'all'
    ? placesData
    : placesData.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-paper-light dark:bg-ink-dark border-y border-forest/10 dark:border-forest/30 relative z-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t('categoryLabel')}
          title={t('categoryTitle')}
          subtitle={t('categorySubtitle')}
        />

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all shrink-0 border ${
                  isActive
                    ? 'bg-forest dark:bg-spice text-paper dark:text-ink border-forest dark:border-spice font-semibold shadow-md'
                    : 'bg-white dark:bg-ink-light text-ink/75 dark:text-paper/75 border-forest/10 dark:border-forest/30 hover:border-forest/30 hover:text-forest dark:hover:text-spice'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-spice dark:text-ink' : 'text-forest dark:text-spice'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Places Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlaces.slice(0, 8).map((place, idx) => (
            <AnimatedReveal key={place.id} delay={idx * 0.1}>
              <PlaceCard place={place} />
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
