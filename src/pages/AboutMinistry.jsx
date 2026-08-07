import React, { useState } from 'react';
import AnimatedReveal from '../components/shared/AnimatedReveal';
import { Compass, ShieldCheck, Mail, Phone, MapPin, CheckCircle, FileText, Send } from 'lucide-react';
import Chip from '../components/shared/Chip';
import { useLanguage } from '../context/LanguageContext';

export default function AboutMinistry() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-paper dark:bg-ink min-h-screen transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <AnimatedReveal className="text-center mb-12">
          <div className="w-12 h-12 rounded-full bg-forest text-spice flex items-center justify-center mx-auto mb-4 shadow-md">
            <Compass className="w-6 h-6" />
          </div>

          <span className="font-mono text-xs text-rust dark:text-spice uppercase tracking-widest font-semibold block mb-2">
            // {t('ministryHeaderLabel')}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink dark:text-paper leading-tight">
            {t('ministryHeaderTitle')}
          </h1>

          <p className="mt-3 text-base md:text-lg text-ink/80 dark:text-paper/80 max-w-2xl mx-auto font-sans">
            {t('ministryHeaderSub')}
          </p>
        </AnimatedReveal>

        {/* Mandate & Vision Section */}
        <AnimatedReveal className="bg-white dark:bg-ink-light p-8 rounded-3xl border border-forest/10 dark:border-forest/30 shadow-sm mb-10 space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper border-b border-paper-dark dark:border-forest/20 pb-4">
            {t('visionTitle')}
          </h2>

          <p className="text-sm md:text-base text-ink/85 dark:text-paper/85 leading-relaxed font-sans">
            {t('visionSub')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30 space-y-2">
              <ShieldCheck className="w-6 h-6 text-forest dark:text-spice" />
              <h3 className="font-serif font-semibold text-ink dark:text-paper text-base">{t('protectedEcosystems')}</h3>
              <p className="text-xs text-ink/75 dark:text-paper/75">{t('protectedEcosystemsSub')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30 space-y-2">
              <Compass className="w-6 h-6 text-rust dark:text-spice" />
              <h3 className="font-serif font-semibold text-ink dark:text-paper text-base">{t('culturalHeritage')}</h3>
              <p className="text-xs text-ink/75 dark:text-paper/75">{t('culturalHeritageSub')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30 space-y-2">
              <FileText className="w-6 h-6 text-river dark:text-river-light" />
              <h3 className="font-serif font-semibold text-ink dark:text-paper text-base">{t('digitalGovernance')}</h3>
              <p className="text-xs text-ink/75 dark:text-paper/75">{t('digitalGovernanceSub')}</p>
            </div>
          </div>
        </AnimatedReveal>

        {/* Official Contact Form & Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Directory */}
          <AnimatedReveal className="bg-white dark:bg-ink-light p-8 rounded-3xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper">{t('secretariatTitle')}</h2>

            <div className="space-y-4 font-mono text-xs text-ink/80 dark:text-paper/80">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30">
                <MapPin className="w-5 h-5 text-rust dark:text-spice shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ink dark:text-paper text-sm font-sans font-semibold mb-1">{t('headOffice')}</strong>
                  <span>{t('headOfficeValue')}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30">
                <Phone className="w-5 h-5 text-forest dark:text-spice shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ink dark:text-paper text-sm font-sans font-semibold mb-1">{t('helpline')}</strong>
                  <span>{t('helplineValue')}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-paper-light dark:bg-ink border border-forest/10 dark:border-forest/30">
                <Mail className="w-5 h-5 text-river dark:text-river-light shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-ink dark:text-paper text-sm font-sans font-semibold mb-1">{t('officialEmail')}</strong>
                  <span>{t('emailValue')}</span>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Inquiry Form */}
          <AnimatedReveal className="bg-white dark:bg-ink-light p-8 rounded-3xl border border-forest/10 dark:border-forest/30 shadow-sm space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-ink dark:text-paper">{t('inquiryForm')}</h2>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-forest/10 dark:bg-forest/20 text-forest dark:text-spice text-center space-y-2 py-10">
                <CheckCircle className="w-10 h-10 text-forest dark:text-spice mx-auto" />
                <h3 className="font-serif text-xl font-semibold">{t('inquirySuccess')}</h3>
                <p className="text-xs font-mono text-ink/75 dark:text-paper/75">{t('inquirySuccessSub')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block text-ink dark:text-paper font-mono font-medium mb-1">{t('fullName')}</label>
                  <input
                    type="text"
                    required
                    placeholder={t('namePlaceholder')}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm bg-paper-light dark:bg-ink text-ink dark:text-paper"
                  />
                </div>

                <div>
                  <label className="block text-ink dark:text-paper font-mono font-medium mb-1">{t('emailAddress')}</label>
                  <input
                    type="email"
                    required
                    placeholder={t('emailPlaceholder')}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm bg-paper-light dark:bg-ink text-ink dark:text-paper"
                  />
                </div>

                <div>
                  <label className="block text-ink dark:text-paper font-mono font-medium mb-1">{t('subject')}</label>
                  <input
                    type="text"
                    placeholder={t('subjectPlaceholder')}
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm bg-paper-light dark:bg-ink text-ink dark:text-paper"
                  />
                </div>

                <div>
                  <label className="block text-ink dark:text-paper font-mono font-medium mb-1">{t('message')}</label>
                  <textarea
                    rows="4"
                    required
                    placeholder={t('messagePlaceholder')}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-forest/20 dark:border-forest/40 focus:outline-none focus:border-forest text-sm bg-paper-light dark:bg-ink text-ink dark:text-paper"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-forest dark:bg-spice text-paper dark:text-ink font-mono text-xs font-semibold uppercase tracking-wider hover:bg-forest-light transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-spice dark:text-ink" />
                  <span>{t('submitInquiry')}</span>
                </button>
              </form>
            )}
          </AnimatedReveal>

        </div>

      </div>
    </div>
  );
}
