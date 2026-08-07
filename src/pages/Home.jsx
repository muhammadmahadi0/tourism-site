import React from 'react';
import { Link } from 'react-router-dom';
import BannerSlider from '../components/home/BannerSlider';
import FamousPlacesGrid from '../components/home/FamousPlacesGrid';
import PlacesToGo from '../components/home/PlacesToGo';
import RiverLine from '../components/home/RiverLine';
import SectionHeading from '../components/shared/SectionHeading';
import EventCard from '../components/shared/EventCard';
import AnimatedReveal from '../components/shared/AnimatedReveal';
import eventsData from '../data/events.json';
import travelUpdatesData from '../data/travelUpdates.json';
import { ShieldAlert, ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const featuredEvents = eventsData.slice(0, 3);

  return (
    <div className="relative bg-paper dark:bg-ink text-ink dark:text-paper transition-colors duration-300">
      
      {/* Signature Scroll-Linked River Line Animation */}
      <RiverLine />

      {/* 1. Hero Banner Slider */}
      <BannerSlider />

      {/* 2. Famous Places Bento Box Grid */}
      <FamousPlacesGrid />

      {/* 3. Curated Places to Go Category Explorer */}
      <PlacesToGo />

      {/* 4. Upcoming Cultural Events Spotlight */}
      <section className="py-20 bg-paper dark:bg-ink relative z-20 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label={t('eventsLabel')}
            title={t('eventsTitle')}
            subtitle={t('eventsSubtitle')}
            actionText={t('viewCalendar')}
            actionLink="/events"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event, idx) => (
              <AnimatedReveal key={event.id} delay={idx * 0.15}>
                <EventCard event={event} />
              </AnimatedReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Live Travel Advisories & Safety Notices */}
      <section className="py-16 bg-forest dark:bg-forest-dark text-paper relative z-20 border-t border-forest-light/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-ink/50 dark:bg-ink-dark/80 backdrop-blur-md p-8 rounded-3xl border border-spice/20">
            
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-spice animate-pulse" />
                <span className="font-mono text-xs text-spice uppercase tracking-widest font-semibold">
                  {t('officialAdvisoryDesk')}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                {t('advisoryTitle')}
              </h3>

              <p className="text-sm text-paper/85 font-sans leading-relaxed">
                {t('advisorySubtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/travel-update"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-spice text-ink font-mono text-xs font-semibold uppercase tracking-wider hover:bg-spice-light transition-all shadow-lg"
              >
                {t('readBulletins')}
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Ministry Credibility Banner */}
      <section className="py-16 bg-paper-light dark:bg-ink-dark border-t border-forest/10 dark:border-forest/30 relative z-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedReveal>
            <div className="w-12 h-12 rounded-full bg-forest/10 dark:bg-paper/10 text-forest dark:text-spice mx-auto flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl md:text-4xl font-semibold text-ink dark:text-paper mb-3">
              {t('missionTitle')}
            </h3>

            <p className="text-base text-ink/75 dark:text-paper/75 font-sans leading-relaxed mb-6">
              {t('missionSubtitle')}
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-forest dark:text-spice font-mono text-xs font-semibold hover:text-rust dark:hover:text-rust-light transition-colors uppercase tracking-wider"
            >
              <span>{t('learnMandate')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>

    </div>
  );
}
