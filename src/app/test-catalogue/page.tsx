'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TestCataloguePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeProblem, setActiveProblem] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(3);

  // Gestion du scroll pour le bouton "Retour en haut" et la barre de progression
  useEffect(() => {
    const handleScroll = () => {
      // Gestion du bouton retour en haut
      setShowBackToTop(window.scrollY > 500);

      // Gestion de la barre de progression
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(100, currentProgress));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour scroller vers un problème spécifique
  const scrollToProblem = (problemId: string) => {
    const element = document.getElementById(problemId);
    if (element) {
      const offset = 100; // Ajustement pour le filtre sticky
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveProblem(problemId);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-contrast">
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <div 
          className="h-full bg-button transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Section KISS */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-title mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
              Tu veux scaler ton business B2B ?
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
              On a déjà aidé +100 entrepreneurs à passer de 0 à 100k€/mois en 90 jours maximum
            </p>

            {/* Témoignages en grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-in-delay-2">
              {/* Témoignage principal */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-button/30 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative">
                    <Image
                      src="/Yann Grosjean.jpeg"
                      alt="Yann Grosjean"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-bold mb-4">
                  "+20 000€ générés dès le premier lancement"
                </p>
                <p className="text-gray-300 mb-2">Yann Grosjean</p>
                <p className="text-sm text-gray-400">CEO de Lugus</p>
              </div>

              {/* Témoignage secondaire */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-button/30 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative">
                    <Image
                      src="/temoignage2.jpg"
                      alt="Témoignage"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-bold mb-4">
                  "+50k€/mois en délégation"
                </p>
                <p className="text-gray-300 mb-2">Thomas Martin</p>
                <p className="text-sm text-gray-400">Fondateur de TechPro</p>
              </div>
            </div>

            {/* CTA Principal avec garantie et disponibilités */}
            <div className="mb-8 animate-fade-in-delay-3">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-bold mb-1">Créneaux disponibles</p>
                    <p className="text-sm text-gray-400">Cette semaine</p>
                  </div>
                  <div className="text-3xl font-bold text-button">
                    {availableSlots}
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-button h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(availableSlots / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="btn text-xl px-12 py-6 inline-block mb-4 hover:scale-105 transition-transform duration-300"
              >
                Réserver un appel de diagnostic gratuit
              </Link>
              <p className="text-sm text-gray-400">
                <span className="text-button">✓</span> 100% satisfait ou remboursé
              </p>
            </div>

            {/* Micro-CTA */}
            <div className="bg-button/10 rounded-xl p-4 mb-8 animate-fade-in-delay-4">
              <p className="text-sm text-gray-300 mb-2">
                Tu veux voir les solutions en détail ?
              </p>
              <button 
                onClick={() => scrollToProblem('starter')}
                className="text-button font-bold hover:underline"
              >
                Découvrir nos solutions →
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="text-gray-400 text-sm mt-8 animate-bounce">
              <p className="mb-2">Tu veux plus de détails ?</p>
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problem-Solution */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
        </div>

        {/* Filtre rapide amélioré */}
        <div className="sticky top-20 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 py-6 mb-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-sm text-gray-400 mb-4">
                Tu es dans quelle situation ?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => scrollToProblem('starter')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeProblem === 'starter' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Pas de système qui vend
                </button>
                <button 
                  onClick={() => scrollToProblem('scale')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeProblem === 'scale' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Besoin de déléguer
                </button>
                <button 
                  onClick={() => scrollToProblem('incubateur')}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeProblem === 'incubateur' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Volonté d'exploser
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-title mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tu as ce problème ?
              </h2>
              <p className="text-xl text-gray-300">
                On a la solution exacte pour le résoudre
              </p>
            </div>

            <div className="space-y-12">
              {/* Problème 1 - STARTER */}
              <div id="starter" className="scroll-mt-32">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-button/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-red-400">1</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">Tu n'as pas de système qui vend</h3>
                          <span className="px-3 py-1 rounded-full bg-button/20 text-button text-sm font-bold">
                            7 jours
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-red-400 font-bold mb-3">Symptômes</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu galères à trouver des clients
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu n'as pas de tunnel de vente
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu perds du temps en prospection
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-button font-bold mb-3">Impact</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                CA instable et imprévisible
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Stress et frustration
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Pas de croissance possible
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-button/5 p-8 border-t border-white/5">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-button">✓</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold">Solution: STARTER</h4>
                          <span className="px-3 py-1 rounded-full bg-button/20 text-button text-sm font-bold">
                            Recommandé
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-button font-bold mb-3">Ce que tu obtiens</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Tunnel de vente automatisé
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Scripts de vente prêts à l'emploi
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Formation complète
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-button font-bold mb-3">Résultats typiques</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                +5 à 10 rendez-vous/mois
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Système reproductible
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                En 7 jours
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Micro-témoignage */}
                        <div className="mt-6 bg-black/20 rounded-lg p-4">
                          <p className="text-sm text-gray-300 italic">
                            "J'ai généré +20k€ dès le premier mois grâce au système STARTER"
                          </p>
                          <p className="text-xs text-gray-400 mt-2">- Marc D., Consultant B2B</p>
                        </div>
                        <div className="mt-6">
                          <Link 
                            href="/catalogue/starter" 
                            className="btn w-full text-center hover:scale-105 transition-transform duration-300"
                          >
                            Découvrir STARTER
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-CTA entre les sections */}
              <div className="text-center py-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 inline-block">
                  <p className="text-gray-300 mb-4">
                    Tu veux passer à l'échelle ?
                  </p>
                  <button 
                    onClick={() => scrollToProblem('scale')}
                    className="text-button font-bold hover:underline"
                  >
                    Découvrir la solution SCALE →
                  </button>
                </div>
              </div>

              {/* Problème 2 - SCALE */}
              <div id="scale" className="scroll-mt-32">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-button/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-red-400">2</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">Tu veux déléguer pour scaler</h3>
                          <span className="px-3 py-1 rounded-full bg-button/20 text-button text-sm font-bold">
                            30 jours
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-red-400 font-bold mb-3">Symptômes</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu n'as pas le temps
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu veux un système clé en main
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu veux passer à l'échelle
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-button font-bold mb-3">Impact</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Plafond de verre atteint
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Épuisement professionnel
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Pas de liberté
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-button/5 p-8 border-t border-white/5">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-button">✓</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold">Solution: SCALE</h4>
                          <span className="px-3 py-1 rounded-full bg-button/20 text-button text-sm font-bold">
                            Populaire
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-button font-bold mb-3">Ce que tu obtiens</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Équipe de vente dédiée
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Système clé en main
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Formation de l'équipe
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-button font-bold mb-3">Résultats typiques</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                +30k€/mois en délégation
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Liberté retrouvée
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                En 30 jours
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Micro-témoignage */}
                        <div className="mt-6 bg-black/20 rounded-lg p-4">
                          <p className="text-sm text-gray-300 italic">
                            "Mon équipe génère maintenant +30k€/mois sans moi"
                          </p>
                          <p className="text-xs text-gray-400 mt-2">- Sophie L., CEO TechStart</p>
                        </div>
                        <div className="mt-6">
                          <Link 
                            href="/catalogue/scale" 
                            className="btn w-full text-center hover:scale-105 transition-transform duration-300"
                          >
                            Découvrir SCALE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-CTA entre les sections */}
              <div className="text-center py-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/5 inline-block">
                  <p className="text-gray-300 mb-4">
                    Tu veux construire un empire ?
                  </p>
                  <button 
                    onClick={() => scrollToProblem('incubateur')}
                    className="text-button font-bold hover:underline"
                  >
                    Découvrir l'INCUBATEUR →
                  </button>
                </div>
              </div>

              {/* Problème 3 - INCUBATEUR */}
              <div id="incubateur" className="scroll-mt-32">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-button/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-red-400">3</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">Tu veux des associés pour exploser</h3>
                          <span className="px-3 py-1 rounded-full bg-button/20 text-button text-sm font-bold">
                            90 jours
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-red-400 font-bold mb-3">Symptômes</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu veux dépasser 100k€/mois
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu cherches des vrais associés
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-400 mr-2">→</span>
                                Tu veux construire un empire
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-button font-bold mb-3">Impact</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Limites de croissance
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Manque de ressources
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Vision limitée
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-button/5 p-8 border-t border-white/5">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-button">✓</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold">Solution: INCUBATEUR</h4>
                          <span className="px-3 py-1 rounded-full bg-button/20 text-button text-sm font-bold">
                            Premium
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-button font-bold mb-3">Ce que tu obtiens</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Partenariat stratégique
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Équipe d'experts dédiée
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Vision long terme
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-button font-bold mb-3">Résultats typiques</p>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                +100k€/mois en automatique
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                Business scalable
                              </li>
                              <li className="flex items-start">
                                <span className="text-button mr-2">→</span>
                                En 90 jours
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Micro-témoignage */}
                        <div className="mt-6 bg-black/20 rounded-lg p-4">
                          <p className="text-sm text-gray-300 italic">
                            "On a atteint 100k€/mois en 3 mois avec l'INCUBATEUR"
                          </p>
                          <p className="text-xs text-gray-400 mt-2">- Alexandre M., Fondateur TechEmpire</p>
                        </div>
                        <div className="mt-6">
                          <Link 
                            href="/catalogue/incubateur" 
                            className="btn w-full text-center hover:scale-105 transition-transform duration-300"
                          >
                            Découvrir l'INCUBATEUR
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/5 mb-8">
                <h3 className="text-2xl font-bold mb-4">Tu hésites encore ?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Réserve un appel de diagnostic gratuit pour identifier la meilleure solution pour ton business
                </p>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-button mb-1">{availableSlots}</div>
                    <div className="text-sm text-gray-400">Créneaux disponibles</div>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-button mb-1">100%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                </div>
                <Link 
                  href="/contact" 
                  className="btn text-lg px-12 py-6 inline-block hover:scale-105 transition-transform duration-300"
                >
                  Réserver un diagnostic gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton Retour en haut */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-button text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

// Styles pour les animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .animate-fade-in-delay-1 {
    animation: fadeIn 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-delay-2 {
    animation: fadeIn 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-delay-3 {
    animation: fadeIn 0.8s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-delay-4 {
    animation: fadeIn 0.8s ease-out 0.8s forwards;
    opacity: 0;
  }
`;

// Ajout des styles globaux
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
} 