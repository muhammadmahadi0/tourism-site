import React from 'react';
import { cn } from '../../lib/utils';

export default function Chip({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  icon: Icon
}) {
  const variants = {
    default: 'bg-forest/10 text-forest border-forest/20',
    rust: 'bg-rust/10 text-rust border-rust/20',
    spice: 'bg-spice/15 text-ink border-spice/30 font-medium',
    river: 'bg-river/10 text-river border-river/20',
    info: 'bg-river/15 text-river-dark border-river/30',
    warning: 'bg-rust/15 text-rust-dark border-rust/30 font-medium',
    dark: 'bg-ink text-paper border-ink-muted'
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 font-mono tracking-wider uppercase',
    md: 'text-xs px-3 py-1 font-mono tracking-wider uppercase',
    lg: 'text-sm px-3.5 py-1.5 font-mono tracking-wider'
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border transition-colors",
      variants[variant] || variants.default,
      sizes[size] || sizes.md,
      className
    )}>
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
