'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary bg-opacity-90 backdrop-blur-md shadow-lg"
    >
      <div className="container-custom py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo blanc.png" alt="BPC Logo" className="h-12 md:h-16 transition-all duration-300" />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">
            Accueil
          </Link>
          <Link href="/masterclass" className="text-contrast hover:text-title transition-colors text-sm lg:text-base flex items-center gap-2 group">
            <span>Masterclass</span>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-button/10 text-button border border-button/20 group-hover:bg-button/20 group-hover:border-button/30 transition-all duration-300">
              Gratuit
            </span>
          </Link>
          
          {/* Solutions Dropdown */}
          <div 
            className="relative group"
          >
            <button 
              className="text-contrast hover:text-title transition-colors text-sm lg:text-base flex items-center gap-2"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <span>Solutions</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 rounded-lg bg-[#1A1A1A] border border-[#9B8E7D]/20 shadow-lg transition-all duration-200 ${
                isSolutionsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}
            >
              <div className="py-2">
                <a 
                  href="/incubateur" 
                  className="block px-4 py-2 text-sm text-contrast hover:bg-[#9F99EB]/10 hover:text-[#9F99EB] transition-colors"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Incubateur B2B
                </a>
                <a 
                  href="/catalogue/bpcppl" 
                  className="block px-4 py-2 text-sm text-contrast hover:bg-[#9F99EB]/10 hover:text-[#9F99EB] transition-colors"
                  onClick={() => setIsSolutionsOpen(false)}
                >
                  Pay Per Lead B2B
                </a>
              </div>
            </div>
          </div>

          <Link href="/contact" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">
            Diagnostic B2B Gratuit
          </Link>
          <Link href="/media" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">
            Media
          </Link>
          <Link href="/bpc-group" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">
            BPC GROUP
          </Link>
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="hidden md:flex">
            <Link 
              href="/roadmap" 
              className="btn text-sm lg:text-base"
            >
              Obtenir ma Roadmap Personnalisée
            </Link>
          </div>
          
          {/* Menu mobile button */}
          <button 
            className="md:hidden text-contrast p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-custom py-4 flex flex-col space-y-3 bg-primary">
          <Link 
            href="/" 
            className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            href="/masterclass" 
            className="text-contrast hover:text-title transition-colors py-3 px-4 flex items-center gap-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Masterclass</span>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-button/10 text-button border border-button/20 group-hover:bg-button/20 group-hover:border-button/30 transition-all duration-300">
              Gratuit
            </span>
          </Link>
          
          {/* Mobile Solutions Dropdown */}
          <div className="relative">
            <button 
              className="w-full text-left text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg flex items-center justify-between"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <span>Solutions</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Dropdown Menu */}
            <div 
              className={`overflow-hidden transition-all duration-200 ${
                isSolutionsOpen ? 'max-h-48 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
              }`}
            >
              <a 
                href="/incubateur" 
                className="block py-2 px-8 text-sm text-contrast hover:bg-white/5 hover:text-title transition-colors"
                onClick={() => {
                  setIsSolutionsOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                Incubateur B2B
              </a>
              <a 
                href="/catalogue/bpcppl" 
                className="block py-2 px-8 text-sm text-contrast hover:bg-white/5 hover:text-title transition-colors"
                onClick={() => {
                  setIsSolutionsOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                Pay Per Lead B2B
              </a>
            </div>
          </div>

          <Link 
            href="/contact" 
            className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Diagnostic B2B Gratuit
          </Link>
          <Link 
            href="/media" 
            className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Media
          </Link>
          <Link 
            href="/bpc-group" 
            className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            BPC GROUP
          </Link>
          <div className="pt-4 px-4">
            <Link 
              href="/roadmap" 
              className="btn w-full text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Obtenir ma Roadmap Personnalisée
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 