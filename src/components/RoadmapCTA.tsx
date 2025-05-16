'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface RoadmapCTAProps {
  className?: string;
}

export default function RoadmapCTA({ 
  className = ''
}: RoadmapCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <Link
        href="/roadmap"
        className="relative inline-flex items-center justify-center w-full px-10 py-6 rounded-xl bg-[#9F99EB] text-white text-xl font-bold shadow-[0_0_40px_rgba(159,153,235,0.4)] hover:shadow-[0_0_60px_rgba(159,153,235,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
      >
        <span className="relative flex items-center">
          OBTENIR MA ROADMAP MAINTENANT
          <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
} 