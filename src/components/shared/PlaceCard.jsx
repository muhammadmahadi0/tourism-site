import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';
import Chip from './Chip';
import { useLanguage, CATEGORY_KEYS, REGION_KEYS } from '../../context/LanguageContext';

export default function PlaceCard({ place, isFeatured = false, className = '' }) {
  const { t } = useLanguage();
  return (
    <Link
      to={`/places-to-visit/${place.id}`}
      className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-ink-light border border-forest/10 dark:border-forest/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Background Image Container */}
      <div className={`relative overflow-hidden ${isFeatured ? 'h-72 md:h-full min-h-[320px]' : 'h-60'}`}>
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <Chip variant="spice" size="sm" className="shadow-md">
            {t(CATEGORY_KEYS[place.category] || place.category)}
          </Chip>
          
          {place.rating && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-ink/75 backdrop-blur-sm text-spice text-xs font-mono font-semibold">
              <Star className="w-3.5 h-3.5 fill-spice" />
              <span>{place.rating}</span>
            </div>
          )}
        </div>

        {/* Floating Explore Action Pill */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper/90 dark:bg-ink/90 text-ink dark:text-paper flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-forest dark:text-spice" />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-paper">
          <div className="flex items-center gap-1.5 font-mono text-xs text-spice mb-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{t(REGION_KEYS[place.region] || place.region)}</span>
          </div>
          
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-white group-hover:text-spice transition-colors line-clamp-1">
            {place.name}
          </h3>

          <p className="mt-1.5 text-xs md:text-sm text-paper/85 line-clamp-2 font-sans font-normal leading-relaxed">
            {place.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
