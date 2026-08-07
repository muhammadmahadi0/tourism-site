import React, { useState } from 'react';
import travelUpdatesData from '../data/travelUpdates.json';
import AnimatedReveal from '../components/shared/AnimatedReveal';
import Chip from '../components/shared/Chip';
import { AlertCircle, ShieldAlert, FileText, Calendar, Filter, Clock } from 'lucide-react';
import { formatDate } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function TravelUpdate() {
  const { t } = useLanguage();
  const [activeSeverity, setActiveSeverity] = useState('all');

  const filteredUpdates = activeSeverity === 'all'
    ? travelUpdatesData
    : travelUpdatesData.filter(u => u.severity === activeSeverity);

  return (
    <div className="py-12 bg-paper dark:bg-ink min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rust/10 dark:bg-rust/20 text-rust dark:text-spice font-mono text-xs mb-3">
            <ShieldAlert className="w-4 h-4" />
            <span>{t('advisoryHeaderLabel')}</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink dark:text-paper leading-tight">
            {t('advisoryHeaderTitle')}
          </h1>

          <p className="mt-3 text-ink/80 dark:text-paper/80 text-base max-w-2xl mx-auto font-sans">
            {t('advisoryHeaderSub')}
          </p>
        </AnimatedReveal>

        {/* Filter Bar */}
        <div className="flex items-center justify-between gap-4 bg-white dark:bg-ink-light p-4 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm mb-8 font-mono text-xs">
          <span className="text-ink/60 dark:text-paper/60 uppercase">{t('filterSeverity')}</span>
          <div className="flex items-center gap-2">
            {['all', 'warning', 'info'].map(sev => (
              <button
                key={sev}
                onClick={() => setActiveSeverity(sev)}
                className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
                  activeSeverity === sev
                    ? 'bg-forest dark:bg-spice text-paper dark:text-ink font-semibold'
                    : 'bg-paper dark:bg-ink text-ink/75 dark:text-paper/75 hover:bg-forest/10 dark:hover:bg-paper/10'
                }`}
              >
                {sev === 'all'
                  ? t('allNotices')
                  : t(sev === 'warning' ? 'severityWarning' : 'severityInfo')}
              </button>
            ))}
          </div>
        </div>

        {/* Updates Feed List */}
        <div className="space-y-6">
          {filteredUpdates.map((item, idx) => (
            <AnimatedReveal key={item.id} delay={idx * 0.1}>
              <div className="bg-white dark:bg-ink-light p-6 sm:p-8 rounded-2xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Chip variant={item.severity === 'warning' ? 'warning' : 'info'} size="sm">
                      {t(item.severity === 'warning' ? 'severityWarning' : 'severityInfo')}
                    </Chip>
                    <Chip variant="default" size="sm">
                      {item.category}
                    </Chip>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink/50 dark:text-paper/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t('published')} {formatDate(item.publishedAt)}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink dark:text-paper leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm font-sans text-ink/80 dark:text-paper/80 font-medium leading-relaxed">
                  {item.summary}
                </p>

                <div className="p-4 rounded-xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30 text-xs font-sans text-ink/85 dark:text-paper/85 leading-relaxed">
                  {item.details}
                </div>

              </div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
