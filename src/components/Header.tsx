'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Link href="/masterclass" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">
            Masterclass
          </Link>
          <Link href="/catalogue" className="text-contrast hover:text-title transition-colors text-sm lg:text-base">
            Catalogue
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
            className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Masterclass
          </Link>
          <Link 
            href="/catalogue" 
            className="text-contrast hover:text-title transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalogue
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