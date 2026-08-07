import React, { useState } from 'react';
import eventsData from '../data/events.json';
import EventCard from '../components/shared/EventCard';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedReveal from '../components/shared/AnimatedReveal';
import { Calendar, Filter, Sparkles } from 'lucide-react';
import Chip from '../components/shared/Chip';
import { useLanguage, EVENT_TYPE_KEYS } from '../context/LanguageContext';

export default function Events() {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState('all');

  const eventTypes = ['all', ...Array.from(new Set(eventsData.map(e => e.type)))];

  const filteredEvents = selectedType === 'all'
    ? eventsData
    : eventsData.filter(e => e.type === selectedType);

  return (
    <div className="py-12 bg-paper dark:bg-ink min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <AnimatedReveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-mono text-xs text-rust dark:text-spice uppercase tracking-widest font-semibold block mb-2">
            // {t('eventsHeaderLabel')}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-ink dark:text-paper leading-tight">
            {t('eventsHeaderTitle')}
          </h1>
          <p className="mt-3 text-ink/80 dark:text-paper/80 text-base md:text-lg">
            {t('eventsHeaderSub')}
          </p>
        </AnimatedReveal>

        {/* Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 bg-white dark:bg-ink-light p-4 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm mb-10">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-mono text-ink/60 dark:text-paper/60 uppercase shrink-0">{t('filterType')}</span>
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0 ${
                  selectedType === type
                    ? 'bg-forest dark:bg-spice text-paper dark:text-ink font-semibold'
                    : 'bg-paper dark:bg-ink text-ink/75 dark:text-paper/75 hover:bg-forest/10 dark:hover:bg-paper/10'
                }`}
              >
                {type === 'all' ? t('allEvents') : t(EVENT_TYPE_KEYS[type] || type)}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <AnimatedReveal key={event.id} delay={idx * 0.1}>
              <EventCard event={event} />
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
