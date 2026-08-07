import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, AlertCircle, Globe, ShieldCheck, Sun, Moon } from 'lucide-react';
import Chip from '../shared/Chip';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle Escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: t('navHome'), path: '/' },
    { name: t('navPlaces'), path: '/places-to-visit' },
    { name: t('navEvents'), path: '/events' },
    { name: t('navAdvisory'), path: '/travel-update' },
    { name: t('navMinistry'), path: '/about' },
  ];

  return (
    <>
      {/* Top Ministry Banner Bar */}
      <div className="bg-ink dark:bg-ink-dark text-paper/80 py-1.5 px-4 text-xs font-mono border-b border-forest/30 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-spice" />
            <span className="truncate">{t('topbarTitle')}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link to="/travel-update" className="hidden sm:flex items-center gap-1.5 text-spice hover:underline">
              <AlertCircle className="w-3 h-3" />
              <span>{t('topbarAlert')}</span>
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 px-2 rounded-md bg-forest/40 hover:bg-forest text-spice transition-colors flex items-center gap-1 text-xs"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{darkMode ? t('lightMode') : t('darkMode')}</span>
            </button>

            {/* Language Selector Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-forest/40 hover:bg-forest text-spice font-semibold transition-colors"
              title="Toggle Language"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'EN' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-paper/90 dark:bg-ink-dark/95 backdrop-blur-md shadow-md py-3 border-b border-forest/10 dark:border-forest/30' 
          : 'bg-paper/60 dark:bg-ink/90 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Emblem */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-forest text-spice flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-ink dark:text-paper block leading-none">
                {t('brandName')}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-rust dark:text-spice uppercase block mt-1">
                {t('brandSubtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors rounded-lg ${
                    isActive 
                      ? 'text-forest dark:text-spice font-bold' 
                      : 'text-ink/80 dark:text-paper/80 hover:text-forest dark:hover:text-spice hover:bg-forest/5 dark:hover:bg-paper/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-rust dark:bg-spice rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/places-to-visit"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-rust text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-rust-dark transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t('planTrip')}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-forest/10 dark:bg-paper/10 text-ink dark:text-paper hover:bg-forest/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-paper dark:bg-ink-dark z-50 p-6 flex flex-col justify-between border-l border-forest/20 dark:border-forest/40 shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-forest/10 dark:border-forest/20">
                  <div className="flex items-center gap-2">
                    <Compass className="w-6 h-6 text-forest dark:text-spice" />
                    <span className="font-serif font-bold text-ink dark:text-paper">{t('navTitle')}</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-lg hover:bg-paper-dark dark:hover:bg-ink text-ink dark:text-paper"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl font-mono text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-forest text-paper font-bold' 
                            : 'text-ink dark:text-paper hover:bg-forest/10 dark:hover:bg-paper/10'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-forest/10 dark:border-forest/20 space-y-3">
                  <button
                    onClick={toggleDarkMode}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-forest/10 dark:bg-paper/10 text-ink dark:text-paper font-mono text-xs font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      {darkMode ? <Sun className="w-4 h-4 text-spice" /> : <Moon className="w-4 h-4 text-forest" />}
                      <span>{darkMode ? t('switchToLight') : t('switchToDark')}</span>
                    </span>
                  </button>

                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-forest/10 dark:bg-paper/10 text-ink dark:text-paper font-mono text-xs font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-spice" />
                      <span>{t('languageLabel')} {language === 'EN' ? 'বাংলা' : 'English'}</span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-forest/10 dark:border-forest/20">
                <Link
                  to="/places-to-visit"
                  className="w-full block text-center py-3 rounded-xl bg-rust text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-md"
                >
                  {t('planTrip')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
