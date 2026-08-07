import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  duration = 0.5
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
