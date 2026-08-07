import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function RiverLine() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to path length / stroke offset
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div 
      id="river-line"
      ref={containerRef}
      aria-hidden="true" 
      className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none z-10 overflow-hidden hidden md:block"
    >
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated SVG River Path */}
        <svg 
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 100 1000"
          fill="none"
        >
          {/* Background Guide Line (subtle shadow stream) */}
          <path
            d="M 50,0 Q 85,200 20,400 T 80,700 T 50,1000"
            stroke="rgba(14, 124, 144, 0.12)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Foreground Animated Stroke */}
          {shouldReduceMotion ? (
            <path
              d="M 50,0 Q 85,200 20,400 T 80,700 T 50,1000"
              stroke="#0E7C90"
              strokeWidth="4"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.6"
            />
          ) : (
            <motion.path
              d="M 50,0 Q 85,200 20,400 T 80,700 T 50,1000"
              stroke="#0E7C90"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                pathLength: pathLength
              }}
            />
          )}
        </svg>

        {/* Location Markers along the River Route */}
        <div className="absolute top-[20%] left-[80%] transform -translate-x-1/2 flex items-center gap-2 bg-paper/90 backdrop-blur-sm border border-river/30 px-3 py-1 rounded-full text-[11px] font-mono text-river shadow-md">
          <MapPin className="w-3.5 h-3.5 text-rust animate-bounce" />
          <span>Sundarbans Delta</span>
        </div>

        <div className="absolute top-[42%] left-[18%] transform -translate-x-1/2 flex items-center gap-2 bg-paper/90 backdrop-blur-sm border border-river/30 px-3 py-1 rounded-full text-[11px] font-mono text-river shadow-md">
          <MapPin className="w-3.5 h-3.5 text-rust" />
          <span>Ratargul Wetlands</span>
        </div>

        <div className="absolute top-[72%] left-[76%] transform -translate-x-1/2 flex items-center gap-2 bg-paper/90 backdrop-blur-sm border border-river/30 px-3 py-1 rounded-full text-[11px] font-mono text-river shadow-md">
          <MapPin className="w-3.5 h-3.5 text-rust" />
          <span>Cox's Bazar Sea Coast</span>
        </div>
      </div>
    </div>
  );
}
