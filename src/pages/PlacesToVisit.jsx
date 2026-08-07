import React, { useState, useMemo } from 'react';
import placesData from '../data/places.json';
import PlaceCard from '../components/shared/PlaceCard';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedReveal from '../components/shared/AnimatedReveal';
import { Search, Filter, SlidersHorizontal, MapPin } from 'lucide-react';
import Chip from '../components/shared/Chip';
import { useLanguage, CATEGORY_KEYS, REGION_KEYS } from '../context/LanguageContext';

export default function PlacesToVisit() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('famous'); // famous, rating, name

  const regions = useMemo(() => {
    const list = placesData.map(p => p.region);
    return ['all', ...Array.from(new Set(list))];
  }, []);

  const categories = useMemo(() => {
    const list = placesData.map(p => p.category);
    return ['all', ...Array.from(new Set(list))];
  }, []);

  const filteredPlaces = useMemo(() => {
    return placesData.filter(place => {
      const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.region.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = selectedRegion === 'all' || place.region === selectedRegion;
      const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;

      return matchesSearch && matchesRegion && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.famousRank - b.famousRank;
    });
  }, [searchQuery, selectedRegion, selectedCategory, sortBy]);

  return (
    <div className="py-12 bg-paper dark:bg-ink min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Banner */}
        <AnimatedReveal>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs text-rust dark:text-spice uppercase tracking-widest font-semibold block mb-2">
              {t('placesHeaderLabel')}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-ink dark:text-paper leading-tight">
              {t('placesHeaderTitle')}
            </h1>
            <p className="mt-3 text-ink/80 dark:text-paper/80 text-base md:text-lg">
              {t('placesHeaderSub')}
            </p>
          </div>
        </AnimatedReveal>

        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-ink-light p-6 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="w-5 h-5 text-ink/40 dark:text-paper/40 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm font-sans bg-paper-light dark:bg-ink text-ink dark:text-paper"
              />
            </div>

            {/* Region Filter */}
            <div className="relative">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm font-mono text-ink dark:text-paper bg-paper-light dark:bg-ink appearance-none"
              >
                <option value="all">{t('allRegions')}</option>
                {regions.filter(r => r !== 'all').map(r => (
                  <option key={r} value={r}>{t(REGION_KEYS[r] || r)}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm font-mono text-ink dark:text-paper bg-paper-light dark:bg-ink appearance-none"
              >
                <option value="famous">{t('sortPopular')}</option>
                <option value="rating">{t('sortRating')}</option>
                <option value="name">{t('sortAlpha')}</option>
              </select>
            </div>

          </div>

          {/* Category Chips */}
          <div className="pt-2 border-t border-paper-dark dark:border-forest/20 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-mono text-ink/60 dark:text-paper/60 uppercase shrink-0">{t('filterCategory')}</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-forest dark:bg-spice text-paper dark:text-ink font-semibold'
                    : 'bg-paper dark:bg-ink text-ink/75 dark:text-paper/75 hover:bg-forest/10 dark:hover:bg-paper/10'
                }`}
              >
                {cat === 'all' ? t('catAll') : t(CATEGORY_KEYS[cat] || cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 font-mono text-xs text-ink/70 dark:text-paper/70">
          <span>{t('showing')} {filteredPlaces.length} {t('destinations')}</span>
          {(searchQuery || selectedRegion !== 'all' || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
                setSelectedCategory('all');
              }}
              className="text-rust dark:text-spice hover:underline"
            >
              {t('resetFilters')}
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place, idx) => (
              <AnimatedReveal key={place.id} delay={idx * 0.08}>
                <PlaceCard place={place} />
              </AnimatedReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-ink-light rounded-2xl border border-forest/10 dark:border-forest/30">
            <MapPin className="w-12 h-12 text-ink/30 dark:text-paper/30 mx-auto mb-3" />
            <h3 className="font-serif text-2xl font-semibold text-ink dark:text-paper">{t('noPlacesFound')}</h3>
            <p className="text-sm text-ink/70 dark:text-paper/70 mt-1">{t('noPlacesSub')}</p>
          </div>
        )}

      </div>
    </div>
  );
}
