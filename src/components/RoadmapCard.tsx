'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface RoadmapCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
  showRecommendedBadge?: boolean;
  onClick?: () => void;
}

export default function RoadmapCard({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  className = '',
  showRecommendedBadge = true,
  onClick
}: RoadmapCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-gradient-to-br from-surfaceMedium/80 to-surfaceDark/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-2xl overflow-visible group hover:border-primary/40 transition-all duration-300 ${className}`}
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Badge "Recommandé" - Ajusté pour ne pas être coupé par le header */}
      {showRecommendedBadge && (
        <div className="absolute top-2 right-2 bg-accent text-surfaceDark px-3 py-1 rounded-full text-xs font-semibold transform rotate-12 shadow-lg z-50">
          Recommandé
        </div>
      )}
      
      {/* Contenu */}
      <div className="relative">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>
          <div className="flex-1 min-w-0"> {/* Ajout de flex-1 et min-w-0 pour gérer le texte long */}
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 truncate">
              {title}
            </h3>
            <p className="text-primary/80 text-sm">Accélère ta croissance</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        <Link
          href={buttonHref}
          onClick={onClick}
          className="relative inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-primary via-primary/90 to-primary text-white rounded-xl hover:from-primary/90 hover:via-primary hover:to-primary/90 transition-all duration-300 shadow-lg group/button overflow-hidden"
        >
          {/* Effet de brillance sur le bouton */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
          
          <span className="relative flex items-center font-medium">
            {buttonText}
            <svg className="w-5 h-5 ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  );
} 