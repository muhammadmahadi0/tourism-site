import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedReveal from './AnimatedReveal';

export default function SectionHeading({
  label,
  title,
  subtitle,
  actionText,
  actionLink,
  align = 'left',
  className = ''
}) {
  return (
    <AnimatedReveal className={`mb-10 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${align === 'center' ? 'items-center' : ''}`}>
        <div>
          {label && (
            <span className="font-mono text-xs text-rust dark:text-spice uppercase tracking-widest font-semibold block mb-2">
              // {label}
            </span>
          )}
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-ink dark:text-paper leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-ink/80 dark:text-paper/80 text-base md:text-lg max-w-2xl font-sans">
              {subtitle}
            </p>
          )}
        </div>
        
        {actionText && actionLink && (
          <Link
            to={actionLink}
            className="inline-flex items-center gap-2 font-mono text-sm text-forest dark:text-spice font-semibold hover:text-rust dark:hover:text-rust-light transition-colors group shrink-0"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </AnimatedReveal>
  );
}
