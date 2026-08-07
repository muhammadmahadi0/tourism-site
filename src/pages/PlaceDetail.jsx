import React from 'react';
import { useParams, Link } from 'react-router-dom';
import placesData from '../data/places.json';
import Chip from '../components/shared/Chip';
import AnimatedReveal from '../components/shared/AnimatedReveal';
import { MapPin, Calendar, Compass, ArrowLeft, Star, Navigation, CheckCircle2 } from 'lucide-react';
import { useLanguage, CATEGORY_KEYS, REGION_KEYS } from '../context/LanguageContext';

export default function PlaceDetail() {
  const { t } = useLanguage();
  const { placeId } = useParams();
  const place = placesData.find(p => p.id === placeId) || placesData[0];

  return (
    <div className="py-10 bg-paper dark:bg-ink min-h-screen transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/places-to-visit"
          className="inline-flex items-center gap-2 font-mono text-xs text-forest dark:text-spice hover:text-rust transition-colors mb-6 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('backToDestinations')}</span>
        </Link>

        {/* Destination Header Banner */}
        <AnimatedReveal className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 h-[450px]">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

          {/* Top Metadata Floating Badges */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <Chip variant="spice" size="md">
              {t(CATEGORY_KEYS[place.category] || place.category)}
            </Chip>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-ink/80 backdrop-blur-md text-spice text-xs font-mono font-bold">
                <Star className="w-4 h-4 fill-spice" />
                <span>{place.rating} / 5.0</span>
              </div>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-paper">
            <div className="flex items-center gap-2 text-xs font-mono text-spice mb-2">
              <MapPin className="w-4 h-4 text-rust" />
              <span>{t(REGION_KEYS[place.region] || place.region)}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              {place.name}
            </h1>

            <p className="mt-2 text-sm md:text-base text-paper/85 max-w-3xl font-sans">
              {place.shortDescription}
            </p>
          </div>
        </AnimatedReveal>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Main Column (Details, Description, Highlights) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Detailed Description */}
            <div className="bg-white dark:bg-ink-light p-8 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper">{t('overviewHeritage')}</h2>
              <p className="text-base text-ink/80 dark:text-paper/85 leading-relaxed font-sans">
                {place.description}
              </p>
            </div>

            {/* Key Highlights */}
            {place.highlights && (
              <div className="bg-white dark:bg-ink-light p-8 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper">{t('highlightsTitle')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {place.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30">
                      <CheckCircle2 className="w-5 h-5 text-forest dark:text-spice shrink-0" />
                      <span className="font-mono text-xs text-ink dark:text-paper font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Getting There Guide */}
            <div className="bg-white dark:bg-ink-light p-8 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper flex items-center gap-2">
                <Navigation className="w-5 h-5 text-rust dark:text-spice" />
                <span>{t('howToGetThere')}</span>
              </h2>
              <p className="text-sm text-ink/80 dark:text-paper/85 leading-relaxed font-sans">
                {place.gettingThere}
              </p>
            </div>

          </div>

          {/* Right Sidebar Widget */}
          <div className="space-y-6">
            
            {/* Best Season Widget */}
            <div className="bg-forest dark:bg-forest-dark text-paper p-6 rounded-2xl border border-forest-light shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-spice uppercase tracking-widest font-semibold">
                <Calendar className="w-4 h-4" />
                <span>{t('bestTimeToVisit')}</span>
              </div>
              <p className="text-sm font-sans font-medium text-paper leading-relaxed">
                {place.bestTimeToVisit}
              </p>
            </div>

            {/* Interactive Location Coordinates Widget */}
            <div className="bg-white dark:bg-ink-light p-6 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-semibold text-ink dark:text-paper flex items-center gap-2">
                <Compass className="w-5 h-5 text-river dark:text-river-light" />
                <span>{t('geoPosition')}</span>
              </h3>

              <div className="p-4 rounded-xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-ink/60 dark:text-paper/60">{t('latitude')}</span>
                  <span className="text-forest dark:text-spice font-semibold">{place.mapCoords?.lat}° N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/60 dark:text-paper/60">{t('longitude')}</span>
                  <span className="text-forest dark:text-spice font-semibold">{place.mapCoords?.lng}° E</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-paper-dark dark:border-forest/20">
                  <span className="text-ink/60 dark:text-paper/60">{t('regionLabel')}</span>
                  <span className="text-ink dark:text-paper font-semibold">{t(REGION_KEYS[place.region] || place.region)}</span>
                </div>
              </div>

              <Link
                to="/travel-update"
                className="w-full block text-center py-3 rounded-xl bg-rust text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-rust-dark transition-colors shadow"
              >
                {t('checkAdvisories')}
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
