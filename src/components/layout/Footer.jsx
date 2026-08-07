import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink dark:bg-ink-dark text-paper pt-16 pb-8 border-t border-forest/30 relative overflow-hidden transition-colors">
      {/* Decorative River Wave Background Accent */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-forest via-spice to-rust" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-paper/10">
          
          {/* Col 1 & 2: Ministry Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest text-spice flex items-center justify-center">
                <Compass className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-paper">
                  {t('brandName')}
                </span>
                <span className="font-mono text-xs text-spice block">
                  {t('footerBrandSubtitle')}
                </span>
              </div>
            </div>

            <p className="text-sm text-paper/75 leading-relaxed max-w-md font-sans">
              {t('footerDesc')}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-paper/60 pt-2">
              <ShieldCheck className="w-4 h-4 text-forest-light" />
              <span>{t('footerVerified')}</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-spice uppercase tracking-widest font-semibold mb-4">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link to="/places-to-visit" className="text-paper/70 hover:text-spice transition-colors">
                  {t('navPlaces')}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-paper/70 hover:text-spice transition-colors">
                  {t('navEvents')}
                </Link>
              </li>
              <li>
                <Link to="/travel-update" className="text-paper/70 hover:text-spice transition-colors">
                  {t('navAdvisory')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-paper/70 hover:text-spice transition-colors">
                  {t('navMinistry')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Regions */}
          <div>
            <h4 className="font-mono text-xs text-spice uppercase tracking-widest font-semibold mb-4">
              {t('footerRegions')}
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-paper/70">
              <li>{t('regionSundarbans')}</li>
              <li>{t('regionCoxsBazar')}</li>
              <li>{t('regionSylhetTea')}</li>
              <li>{t('regionHillTracts')}</li>
              <li>{t('regionRajshahi')}</li>
            </ul>
          </div>

          {/* Col 5: Contact Desk */}
          <div>
            <h4 className="font-mono text-xs text-spice uppercase tracking-widest font-semibold mb-4">
              {t('footerContact')}
            </h4>
            <ul className="space-y-3 text-xs font-mono text-paper/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rust shrink-0 mt-0.5" />
                <span>{t('footerAddress')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest-light shrink-0" />
                <span>{t('footerPhone')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-river shrink-0" />
                <span>{t('footerEmail')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-paper/50">
          <div>
            {t('copyright')}
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-paper transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-paper transition-colors cursor-pointer">Accessibility Statement</span>
            <span className="hover:text-paper transition-colors cursor-pointer">RTI Desk</span>
            <span className="hover:text-paper transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
