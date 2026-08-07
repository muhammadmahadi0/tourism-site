import React from 'react';
import { Calendar, MapPin, Sparkles, UserCheck } from 'lucide-react';
import Chip from './Chip';
import { formatDate } from '../../lib/utils';
import { useLanguage, EVENT_TYPE_KEYS } from '../../context/LanguageContext';

export default function EventCard({ event }) {
  const { t, language } = useLanguage();
  const isBN = language === 'BN';
  const eventTitle = isBN && event.title_bn ? event.title_bn : event.title;
  const eventLocation = isBN && event.location_bn ? event.location_bn : event.location;
  const eventDesc = isBN && event.description_bn ? event.description_bn : event.description;
  const eventOrganizer = isBN && event.organizer_bn ? event.organizer_bn : event.organizer;
  return (
    <div className="bg-white dark:bg-ink-light rounded-2xl overflow-hidden border border-forest/10 dark:border-forest/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        
        <div className="absolute top-3 left-3">
          <Chip variant="rust" size="sm">
            {t(EVENT_TYPE_KEYS[event.type] || event.type)}
          </Chip>
        </div>

        {event.isFeatured && (
          <div className="absolute top-3 right-3 bg-spice text-ink px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold flex items-center gap-1 shadow">
            <Sparkles className="w-3 h-3" />
            <span>{t('featured')}</span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs font-mono text-paper">
          <Calendar className="w-3.5 h-3.5 text-spice" />
          <span>{formatDate(event.date)} {event.endDate ? `— ${formatDate(event.endDate)}` : ''}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-xl font-semibold text-ink dark:text-paper group-hover:text-forest dark:group-hover:text-spice transition-colors leading-snug">
            {eventTitle}
          </h3>
          
          <div className="flex items-center gap-1.5 text-xs font-mono text-river dark:text-river-light mt-2 mb-3">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{eventLocation}</span>
          </div>

          <p className="text-sm text-ink/75 dark:text-paper/75 leading-relaxed line-clamp-3">
            {eventDesc}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-paper-dark dark:border-forest/20 flex items-center justify-between text-xs text-ink/60 dark:text-paper/60 font-mono">
          <span className="flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-forest dark:text-spice" />
            <span className="truncate max-w-[180px]">{eventOrganizer}</span>
          </span>
          <button className="text-forest dark:text-spice hover:text-rust dark:hover:text-rust-light font-semibold transition-colors">
            {t('details')} →
          </button>
        </div>
      </div>
    </div>
  );
}
