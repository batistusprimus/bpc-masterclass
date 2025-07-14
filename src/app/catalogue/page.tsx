'use client';

import { useState, useEffect } from 'react';
import Button from "@/components/Button";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Anton, Archivo_Black, Montserrat } from 'next/font/google';
import Testimonials from "@/components/Testimonials";
import HeroAvatar from "@/components/HeroAvatar";

const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const archivoBlack = Archivo_Black({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

// Ajouter l'interface pour le type Product
interface Product {
  title: string;
  badge: string;
  mrr: string;
  problem: string;
  symptoms: string[];
  consequences: string[];
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  ctaText: string;
  popular: boolean;
  price: string;
}

export default function CataloguePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSolution, setActiveSolution] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Gestion du scroll pour le bouton "Retour en haut" et la barre de progression
  useEffect(() => {
    const handleScroll = () => {
      // Gestion du bouton retour en haut
      setShowBackToTop(window.scrollY > 500);

      // Gestion de la barre de progression
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(100, currentProgress));

      // Gestion de la solution active
      const solutions = ['starter', 'scale', 'incubateur'];
      for (const solution of solutions) {
        const element = document.getElementById(solution);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSolution(solution);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour scroller vers une solution spécifique
  const scrollToSolution = (solutionId: string) => {
    const element = document.getElementById(solutionId);
    if (element) {
      const offset = 100; // Ajustement pour le filtre sticky
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSolution(solutionId);
    }
  };

  return (
    <div 
      className="min-h-screen bg-primary text-contrast font-montserrat"
      style={{
        fontFamily: `var(--font-montserrat), var(--font-archivo-black), var(--font-anton)`
      }}
    >
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <div 
          className="h-full bg-button transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background amélioré */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-graph/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Client Avatars Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="relative flex -space-x-4">
                  {[
                    { name: "Samantha Piat", avatar: "/Samantha%20Piat.jpeg" },
                    { name: "Stevy", avatar: "/1734882654773.jpeg" },
                    { name: "Jean Michel Ly", avatar: "/jean_michel_ly_v2.png" },
                    { name: "Joris Genty", avatar: "/Joris%20Genty.jpeg" },
                    { name: "Giacomo Genna", avatar: "/Giacomo%20Genna.jpeg" },
                    { name: "Floriane Bobée", avatar: "/Floriane%20Bob%C3%A9e.jpeg" },
                    { name: "Caroline Rousset", avatar: "/Caroline%20rousset.jpg" },
                    { name: "Axelle Guer", avatar: "/Axelle%20Guer%20.jpeg" }
                  ].map((client, index) => (
                    <HeroAvatar
                      key={index}
                      name={client.name}
                      avatar={client.avatar}
                      index={index}
                    />
                  ))}
                  <HeroAvatar
                    name="Plus de clients"
                    avatar=""
                    index={8}
                    isLast={true}
                    extraText="+200"
                  />
                </div>
              </div>
            </motion.div>

            {/* Badge animé */}
            <div className="inline-block bg-gradient-to-r from-button/20 to-button/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-button/30 animate-fade-in shadow-lg shadow-button/10 hover:shadow-xl hover:shadow-button/20 transition-all duration-300 transform hover:scale-105">
              <p className="text-sm md:text-base font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Solutions B2B testées et approuvées
              </p>
            </div>

            {/* Titre principal avec effet de gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-title mb-8 bg-gradient-to-r from-white via-button to-white bg-clip-text text-transparent animate-fade-in bg-[length:200%_auto] animate-gradient">
              Tu veux scaler ton business B2B ?
            </h1>
            
            {/* Sous-titre avec effet de flou */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-delay-1 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
              +5.000 leads B2B qualifiés générés pour nos clients en 2024
            </p>

            {/* Témoignage amélioré */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 animate-fade-in-delay-2">
              <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-button/30 transition-all duration-300 w-full md:w-auto transform hover:scale-[1.02] shadow-xl shadow-black/20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative flex-shrink-0 ring-2 ring-button/20">
                    <Image
                      src="/Yann Grosjean.jpeg"
                      alt="Yann Grosjean"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-lg md:text-xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      "+20 000€ générés dès le premier lancement"
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-300">Yann Grosjean</p>
                      <span className="text-button">•</span>
                      <p className="text-sm text-gray-400">CEO de Lugus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Principal amélioré */}
            <div className="animate-fade-in-delay-3">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-12 py-5 text-lg md:text-xl font-medium text-white bg-gradient-to-r from-button to-button/80 rounded-xl shadow-lg shadow-button/20 hover:shadow-xl hover:shadow-button/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Réserver un appel de diagnostic gratuit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <div className="mt-4 flex items-center justify-center text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-button animate-pulse"></span>
                  {availableSlots} créneaux disponibles
                </span>
              </div>
            </div>

            {/* Micro-CTA amélioré */}
            <div className="mt-12 animate-fade-in-delay-4">
              <a 
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSolution('starter');
                }}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-button/10 to-button/5 rounded-xl px-6 py-3 text-button font-bold hover:bg-button/20 transition-all duration-300 border border-button/20 hover:border-button/30"
              >
                Découvrir nos solutions
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ajouter un élément de transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

      {/* Logos Clients Section */}
      <section className="relative py-20 overflow-hidden -mt-16">
        {/* Background avec effet de gradient et grille */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-button/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-archivo-black mb-6 bg-gradient-to-r from-[#FFF1DE] to-gray-300 bg-clip-text text-transparent">
                Ils nous font confiance
              </h2>
            </motion.div>
          </div>
          
          <div className="relative">
            {/* Effet de dégradé sur les bords */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
            
            {/* Conteneur des logos avec effet de glassmorphism */}
            <div className="relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
              <div className="absolute inset-0 bg-gradient-to-br from-button/5 to-transparent"></div>
              
              {/* Animation de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine"></div>
              
              <div className="py-12 px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <LogoMarquee />
                </motion.div>
              </div>
            </div>

            {/* Badge de confiance */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-button/20 to-button/10 backdrop-blur-sm px-6 py-3 rounded-full border border-button/30 shadow-lg shadow-button/10">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-white">+200 entrepreneurs accompagnés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solutions */}
      <section className="relative py-20 bg-gradient-to-b from-black/40 to-transparent">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            {/* En-tête de la section avec filtre intégré */}
            <div className="text-center mb-12 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/5">
              <h2 className="text-3xl md:text-4xl font-title mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quel est ton CA annuel actuel ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                On a la solution adaptée à ton niveau
              </p>

              {/* Filtre rapide amélioré */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button 
                  onClick={() => scrollToSolution('starter')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSolution === 'starter' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  &lt; 24k€/an
                </button>
                <button 
                  onClick={() => scrollToSolution('accelerateur')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSolution === 'accelerateur' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  24k€ - 80k€/an
                </button>
                <button 
                  onClick={() => scrollToSolution('scale')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSolution === 'scale' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  80k€ - 120k€/an
                </button>
                <button 
                  onClick={() => scrollToSolution('incubateur')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSolution === 'incubateur' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  120k€ - 600k€/an
                </button>
                <button 
                  onClick={() => scrollToSolution('scaling-lab')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSolution === 'scaling-lab' 
                      ? 'bg-button text-white shadow-lg shadow-button/20' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  600k€ - 3M€/an
                </button>
              </div>
            </div>

            {/* Solutions Grid */}
            <div className="space-y-8">
              {/* STARTER */}
              <div id="starter" className="scroll-mt-32">
                <div className="relative w-full bg-gradient-to-br from-[#FF5A5F]/10 via-black/40 to-[#FF5A5F]/10 rounded-xl md:rounded-3xl border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
                  <div className="p-3 md:p-8 border-b border-white/5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-[#FF5A5F]/20 flex items-center justify-center shadow-lg shadow-[#FF5A5F]/10">
                        <span className="text-base md:text-xl font-bold text-[#FF5A5F]">1</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          STARTER
                        </h3>
                        <div className="flex items-center gap-1.5 md:gap-3 mt-0.5 md:mt-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs md:text-sm font-medium">
                            CA &lt; 24k€/an
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/10 text-gray-300 text-xs md:text-sm font-bold whitespace-nowrap">
                        Accès à vie
                      </span>
                    </div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#FF5A5F]/10 to-[#FF5A5F]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#FF5A5F]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#FF5A5F] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-xs md:text-base">Symptômes</span>
                          </div>
                          {/* STARTER - Symptômes */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#FF5A5F] mt-0.5 md:mt-1">•</span>
                              <span>Tu passes plus de temps à chercher des clients qu'à les servir</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#FF5A5F] mt-0.5 md:mt-1">•</span>
                              <span>Tu n'as pas de processus clair pour convertir tes prospects</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#FF5A5F] mt-0.5 md:mt-1">•</span>
                              <span>Tu ne sais pas comment structurer tes offres pour maximiser tes revenus</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#FF5A5F]/10 to-[#FF5A5F]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#FF5A5F]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#FF5A5F] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-xs md:text-base">Conséquences</span>
                          </div>
                          {/* STARTER - Conséquences */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#FF5A5F] mt-0.5 md:mt-1">•</span>
                              <span>Tu te sens perdu et débordé par la gestion de ton activité</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#FF5A5F] mt-0.5 md:mt-1">•</span>
                              <span>Tu doutes de ta capacité à réussir et à te développer</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#FF5A5F] mt-0.5 md:mt-1">•</span>
                              <span>Tu as peur de stagner et de ne jamais atteindre tes objectifs</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs md:text-base">Solutions</span>
                          </div>
                          {/* STARTER - Solutions */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Des systèmes à copier/coller pour générer des prospects</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Savoir quoi vendre, à qui, quand et comment</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Stabiliser tes revenus et rester focus</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-xs md:text-base">Résultats</span>
                          </div>
                          {/* STARTER - Résultats */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>2 à 5 nouveaux clients / mois</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Des offres haut de gamme qui se vendent</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Un système duplicable et adaptable en 7 jours</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 md:w-5 md:h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs md:text-sm text-gray-300 font-medium">"La meilleure checklist pour ne plus se prendre la tête et avancer sur son business rapidement."</p>
                            </div>
                          </div>
                        </div>

                        <Link 
                          href="/catalogue/starter" 
                          className="group relative flex items-center justify-center w-full px-3 py-2 md:px-6 md:py-4 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981] to-[#10B981]/80 text-white font-medium shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span className="text-sm md:text-lg">Découvrir STARTER</span>
                          <svg className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div className="absolute inset-0 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACCÉLÉRATEUR */}
              <div id="accelerateur" className="scroll-mt-32">
                <div className="relative w-full bg-gradient-to-br from-[#F97316]/10 via-black/40 to-[#F97316]/10 rounded-xl md:rounded-3xl border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
                  <div className="p-3 md:p-8 border-b border-white/5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-[#F97316]/20 flex items-center justify-center shadow-lg shadow-[#F97316]/10">
                        <span className="text-base md:text-xl font-bold text-[#F97316]">2</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          ACCÉLÉRATEUR
                        </h3>
                        <div className="flex items-center gap-1.5 md:gap-3 mt-0.5 md:mt-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs md:text-sm font-medium">
                            CA 24k€ - 80k€/an
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/10 text-gray-300 text-xs md:text-sm font-bold whitespace-nowrap">
                        14 jours
                      </span>
                    </div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#F97316]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#F97316] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-xs md:text-base">Symptômes</span>
                          </div>
                          {/* ACCELERATOR - Symptômes */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#F97316] mt-0.5 md:mt-1">•</span>
                              <span>Tu as des clients mais tu ne sais pas comment les fidéliser</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#F97316] mt-0.5 md:mt-1">•</span>
                              <span>Tu perds des opportunités à cause d'un processus de vente inefficace</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#F97316] mt-0.5 md:mt-1">•</span>
                              <span>Tu n'arrives pas à augmenter tes prix malgré la qualité de ton service</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#F97316]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#F97316] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-xs md:text-base">Conséquences</span>
                          </div>
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#F97316] mt-0.5 md:mt-1">•</span>
                              <span>Tu te sens frustré de ne pas pouvoir valoriser ton expertise</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#F97316] mt-0.5 md:mt-1">•</span>
                              <span>Tu as peur de perdre tes clients existants</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#F97316] mt-0.5 md:mt-1">•</span>
                              <span>Tu te sens coincé dans une situation qui ne te satisfait pas</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs md:text-base">Solutions</span>
                          </div>
                          {/* ACCELERATOR - Solutions */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Doubler son volume d'affaire en 30 jours.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Identifier les points de blocages du business.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Se positionner comme acteur incontournable de ton industrie.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-xs md:text-base">Résultats</span>
                          </div>
                          {/* ACCELERATOR - Résultats */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>5 à 10 clients B2B qualifiés/mois.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Un système d'acquisition qui tourne.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Des prix qui augmentent en moyenne de 20%.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 md:w-5 md:h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs md:text-sm text-gray-300 font-medium">"J'ai grandement apprécié le professionnalisme et l'efficacité de Baptiste. (...) Cela permet de se booster et de gagner en compétence avec une rapidité sans précédent ! ⚡"</p>
                              <p className="text-[10px] md:text-xs text-gray-400">Joris Genty, CEO LinkedBy Agency</p>
                            </div>
                          </div>
                        </div>

                        <Link 
                          href="/catalogue/accelerateur" 
                          className="group relative flex items-center justify-center w-full px-3 py-2 md:px-6 md:py-4 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981] to-[#10B981]/80 text-white font-medium shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span className="text-sm md:text-lg">Découvrir l'ACCÉLÉRATEUR</span>
                          <svg className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div className="absolute inset-0 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCALE */}
              <div id="scale" className="scroll-mt-32">
                <div className="relative w-full bg-gradient-to-br from-[#3B82F6]/10 via-black/40 to-[#3B82F6]/10 rounded-xl md:rounded-3xl border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
                  <div className="p-3 md:p-8 border-b border-white/5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-[#3B82F6]/20 flex items-center justify-center shadow-lg shadow-[#3B82F6]/10">
                        <span className="text-base md:text-xl font-bold text-[#3B82F6]">3</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          SCALE
                        </h3>
                        <div className="flex items-center gap-1.5 md:gap-3 mt-0.5 md:mt-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs md:text-sm font-medium">
                            CA 80k€ - 120k€/an
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/10 text-gray-300 text-xs md:text-sm font-bold whitespace-nowrap">
                        30 jours
                      </span>
                    </div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#3B82F6]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#3B82F6]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#3B82F6] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-xs md:text-base">Symptômes</span>
                          </div>
                          {/* SCALE - Symptômes */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#3B82F6] mt-0.5 md:mt-1">•</span>
                              <span>Tu es submergé par le travail.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#3B82F6] mt-0.5 md:mt-1">•</span>
                              <span>Tu peux pas délivrer et gérer l'acquisition.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#3B82F6] mt-0.5 md:mt-1">•</span>
                              <span>T'as pas l'argent ou la confiance pour tout déléguer</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#3B82F6]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#3B82F6]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#3B82F6] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-xs md:text-base">Conséquences</span>
                          </div>
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#3B82F6] mt-0.5 md:mt-1">•</span>
                              <span>Tu te sens épuisé et débordé.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#3B82F6] mt-0.5 md:mt-1">•</span>
                              <span>Un business en dents de scie.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#3B82F6] mt-0.5 md:mt-1">•</span>
                              <span>Tu as peur de perdre le contrôle.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs md:text-base">Solutions</span>
                          </div>
                          {/* SCALE - Solutions */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Déléguer progressivement les tâches low values.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Automatiser ton acquisition/conversion.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Rester dans ta zone de génie.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-xs md:text-base">Résultats</span>
                          </div>
                          {/* SCALE - Résultats */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>+20h gagnées par semaine.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Un système d'acquisition qui tourne sans toi.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Un système installé en 30j pour doubler ton C.A.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                              <Image src="/Yann Grosjean.jpeg" alt="Yann Grosjean" width={40} height={40} className="rounded-full object-cover" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs md:text-sm text-gray-300 font-medium">"+20 000€ générés dès le premier lancement avec un système de vente entièrement délégué. Tout a été mis en place sans que j'aie à lever le petit doigt : tunnel, mails, pub, VSL, prise de rendez-vous, setting, closing. De mon côté ? J'ai juste conçu un programme utile, fait les bons choix stratégiques avec eux… et livré l'accompagnement."</p>
                              <p className="text-[10px] md:text-xs text-gray-400">Yann Grosjean</p>
                            </div>
                          </div>
                        </div>

                        <Link 
                          href="/catalogue/scale" 
                          className="group relative flex items-center justify-center w-full px-3 py-2 md:px-6 md:py-4 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981] to-[#10B981]/80 text-white font-medium shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span className="text-sm md:text-lg">Découvrir SCALE</span>
                          <svg className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div className="absolute inset-0 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INCUBATEUR */}
              <div id="incubateur" className="scroll-mt-32">
                <div className="relative w-full bg-gradient-to-br from-[#8B5CF6]/10 via-black/40 to-[#8B5CF6]/10 rounded-xl md:rounded-3xl border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
                  <div className="p-3 md:p-8 border-b border-white/5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-[#8B5CF6]/20 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/10">
                        <span className="text-base md:text-xl font-bold text-[#8B5CF6]">4</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          INCUBATEUR
                        </h3>
                        <div className="flex items-center gap-1.5 md:gap-3 mt-0.5 md:mt-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs md:text-sm font-medium">
                            CA 120k€ - 600k€/an
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/10 text-gray-300 text-xs md:text-sm font-bold whitespace-nowrap">
                        90 jours
                      </span>
                    </div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#8B5CF6]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#8B5CF6] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-xs md:text-base">Symptômes</span>
                          </div>
                          {/* INCUBATEUR - Symptômes */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#8B5CF6] mt-0.5 md:mt-1">•</span>
                              <span>T'arrives pas à tout déléguer.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#8B5CF6] mt-0.5 md:mt-1">•</span>
                              <span>Ton business est trop dépendant de toi.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#8B5CF6] mt-0.5 md:mt-1">•</span>
                              <span>Tu manques de ressources pour investir dans la croissance</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#8B5CF6]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#8B5CF6] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-xs md:text-base">Conséquences</span>
                          </div>
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#8B5CF6] mt-0.5 md:mt-1">•</span>
                              <span>Tu te sens limité dans tes ambitions</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#8B5CF6] mt-0.5 md:mt-1">•</span>
                              <span>Tu as peur de manquer d'opportunités</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#8B5CF6] mt-0.5 md:mt-1">•</span>
                              <span>Tu te sens seul face aux décisions stratégiques</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs md:text-base">Solutions</span>
                          </div>
                          {/* INCUBATEUR - Solutions */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>T'entourer des meilleurs dans leur domaine.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Ambitionner de faire 10X sur ton business.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Systémiser ton business et tes revenus.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-xs md:text-base">Résultats</span>
                          </div>
                          {/* INCUBATEUR - Résultats */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Une croissance saine jusqu'à 100k€/mois.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Des systèmes déployables en 90 jours.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Tu n'es plus seul dans ton business.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 md:w-5 md:h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs md:text-sm text-gray-300 font-medium">"17M€+ de C.A générés par nos clients et partenaires."</p>
                            </div>
                          </div>
                        </div>

                        <Link 
                          href="https://api.leadconnectorhq.com/widget/bookings/bp-scaling-implementation" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex items-center justify-center w-full px-3 py-2 md:px-6 md:py-4 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981] to-[#10B981]/80 text-white font-medium shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span className="text-sm md:text-lg">Découvrir l'INCUBATEUR</span>
                          <svg className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div className="absolute inset-0 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCALING LAB */}
              <div id="scaling-lab" className="scroll-mt-32">
                <div className="relative w-full bg-gradient-to-br from-[#6366F1]/10 via-black/40 to-[#6366F1]/10 rounded-xl md:rounded-3xl border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
                  <div className="p-3 md:p-8 border-b border-white/5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-[#6366F1]/20 flex items-center justify-center shadow-lg shadow-[#6366F1]/10">
                        <span className="text-base md:text-xl font-bold text-[#6366F1]">5</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          SCALING LAB
                        </h3>
                        <div className="flex items-center gap-1.5 md:gap-3 mt-0.5 md:mt-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs md:text-sm font-medium">
                            CA 600k€ - 3M€/an
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/10 text-gray-300 text-xs md:text-sm font-bold whitespace-nowrap">
                        180 jours
                      </span>
                    </div>
                  </div>

                  <div className="p-3 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#6366F1]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#6366F1]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#6366F1] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="text-xs md:text-base">Symptômes</span>
                          </div>
                          {/* SCALING LAB - Symptômes */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#6366F1] mt-0.5 md:mt-1">•</span>
                              <span>Un CEO piégé dans l'opérationnel.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#6366F1] mt-0.5 md:mt-1">•</span>
                              <span>Tu passes ton temps à éteindre des incendies.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#6366F1] mt-0.5 md:mt-1">•</span>
                              <span>Tes équipes sont désorganisées, tu gères encore TOUT.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#6366F1]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#6366F1]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#6366F1] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-xs md:text-base">Conséquences</span>
                          </div>
                          {/* SCALING LAB - Conséquences */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#6366F1] mt-0.5 md:mt-1">•</span>
                              <span>Une vision oubliée.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#6366F1] mt-0.5 md:mt-1">•</span>
                              <span>T'es proche du burnout.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#6366F1] mt-0.5 md:mt-1">•</span>
                              <span>Tu génères pas autant que tu mérites.</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-4">
                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs md:text-base">Solutions</span>
                          </div>
                          {/* SCALING LAB - Solutions */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Structurer tes process interne.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Internaliser les compétences clés.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Déployer un système d'acquisition d'envergure.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/20">
                          <div className="flex items-center gap-1.5 md:gap-2 text-[#10B981] font-medium mb-1.5 md:mb-3">
                            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-xs md:text-base">Résultats</span>
                          </div>
                          {/* SCALING LAB - Résultats */}
                          <ul className="space-y-1.5 md:space-y-3">
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Une acquisition qui supporte ta croissance.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Des équipes efficaces et fidèles, sans drama.</span>
                            </li>
                            <li className="flex items-start gap-1.5 md:gap-3 text-gray-300 text-xs md:text-base">
                              <span className="text-[#10B981] mt-0.5 md:mt-1">•</span>
                              <span>Les fondations stables pour traverser le désert entre 3M€ et 10M€</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-lg md:rounded-2xl p-2.5 md:p-5 border border-[#10B981]/10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                              <Image src="/anais-remaoun.webp" alt="Anaïs Remaoun" width={40} height={40} className="rounded-full object-cover" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs md:text-sm text-gray-300 font-medium">"+300 000€ générés en 75 jours via une stratégie de contenu LinkedIn On a lancé 35 posts en 75 jours. Résultat : +1,7M de vues, 4 posts viraux, +4000 abonnés, et plus de 300 000€ générés. Ce n'est pas juste du contenu. C'est une stratégie testée, analysée, optimisée."</p>
                              <p className="text-[10px] md:text-xs text-gray-400">Anaïs Remaoun</p>
                            </div>
                          </div>
                        </div>

                        <Link 
                          href="https://app.iclosed.io/e/baptistepiocelle/bpc-private-scaling-lab" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex items-center justify-center w-full px-3 py-2 md:px-6 md:py-4 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981] to-[#10B981]/80 text-white font-medium shadow-lg shadow-[#10B981]/20 hover:shadow-xl hover:shadow-[#10B981]/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <span className="text-sm md:text-lg">Découvrir le SCALING LAB</span>
                          <svg className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div className="absolute inset-0 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#10B981]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
              <div className="relative max-w-2xl mx-auto bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden">
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine"></div>
                
                {/* Contenu principal */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-title mb-4 bg-gradient-to-r from-white via-button to-white bg-clip-text text-transparent">
                    Tu hésites encore ?
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-6">
                    Réserve un appel stratégique de 45 minutes pour identifier les opportunités de croissance de ton business
                  </p>

                  {/* CTA Button */}
                  <div className="space-y-3">
                    <Link 
                      href="https://app.iclosed.io/e/baptistepiocelle/diagnostic-b2b" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-button to-button/80 rounded-xl shadow-lg shadow-button/20 hover:shadow-xl hover:shadow-button/30 transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                      <span className="relative z-10">Réserver mon diagnostic stratégique</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-button/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>

                    {/* Badge de confiance */}
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>45 min</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>+200 CEO sont déjà passés par là</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-20 bg-black/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-title mb-6">Questions fréquentes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tu as des questions sur nos programmes ? Consulte notre FAQ ci-dessous.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Comment choisir la solution adaptée à mon business ?",
                answer: "Tout dépend de ta situation actuelle et de tes objectifs. STARTER est idéal pour démarrer avec la méthode BPC en autonomie. ACCÉLÉRATEUR convient si tu veux être guidé dans la mise en œuvre. SCALE est pour ceux qui veulent déléguer la création de leur système. L'INCUBATEUR est pour ceux qui veulent nous avoir comme associés et dépasser les 80k€/mois. Le SCALING LAB est pour les entreprises qui veulent passer à l'échelle supérieure avec un CA entre 600k€ et 3M€."
              },
              {
                question: "Comment fonctionne le processus d'intégration ?",
                answer: "Chaque programme commence par un diagnostic approfondi de ton business. Nous identifions tes points forts, tes axes d'amélioration et définissons une stratégie claire. Ensuite, nous mettons en place un plan d'action personnalisé avec des étapes précises et des objectifs mesurables. Tu bénéficies d'un accompagnement continu et d'un accès à notre communauté d'entrepreneurs."
              },
              {
                question: "Quelle est la différence entre SCALE et l'INCUBATEUR ?",
                answer: "SCALE est un programme intensif de 30 jours où nous créons et déployons ton système d'acquisition complet. L'INCUBATEUR est un partenariat stratégique sur 90 jours qui évolue vers une collaboration à long terme. Nous devenons tes associés après une phase de test de 3 mois, prenant en charge tous les aspects de ton business sauf ta livraison client."
              },
              {
                question: "Comment fonctionne le SCALING LAB ?",
                answer: "Le SCALING LAB est un programme sur 180 jours conçu pour les entreprises qui veulent passer à l'échelle supérieure. Nous travaillons sur la structuration de tes processus internes, l'internalisation des compétences clés et le déploiement d'un système d'acquisition d'envergure. L'objectif est de créer les fondations stables pour traverser le désert entre 3M€ et 10M€ de CA."
              },
              {
                question: "Quels sont les résultats typiques de vos programmes ?",
                answer: "Nos clients obtiennent des résultats concrets et mesurables. Par exemple, certains ont généré +300 000€ en 75 jours via une stratégie de contenu LinkedIn, d'autres ont doublé leur CA en 30 jours, et d'autres encore ont gagné +20h par semaine en déléguant efficacement. Les résultats varient selon le programme choisi et l'engagement de l'entrepreneur."
              },
              {
                question: "Comment se déroule l'accompagnement au quotidien ?",
                answer: "L'accompagnement est personnalisé et adapté à chaque programme. Tu bénéficies d'appels réguliers, d'un accès à notre plateforme de formation, de sessions de coaching individuelles et de masterminds de groupe. Nous utilisons des outils de suivi pour mesurer ta progression et ajuster la stratégie si nécessaire. Notre objectif est de te rendre autonome tout en restant disponible pour toi."
              },
              {
                question: "Quelle est la durée d'engagement minimale ?",
                answer: "La durée varie selon le programme : STARTER est accessible à vie, ACCÉLÉRATEUR dure 14 jours, SCALE s'étend sur 30 jours, l'INCUBATEUR sur 90 jours, et le SCALING LAB sur 180 jours. Chaque programme est conçu pour te donner des résultats rapides tout en construisant des fondations solides pour le long terme."
              }
            ].map((item, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/30 hover:border-button/30 transition-colors duration-300">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-button transition-colors">{item.question}</h3>
                    <div className={`w-8 h-8 rounded-full bg-button/20 flex items-center justify-center group-hover:bg-button/30 transition-all transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {openFaq === index && (
                    <p className="text-gray-300 mt-4">{item.answer}</p>
                  )}
                </div>
              </div>
            ))}
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

      {/* Mettre à jour les styles globaux pour inclure les polices */}
      <style jsx global>{`
        :root {
          --font-anton: ${anton.style.fontFamily};
          --font-archivo-black: ${archivoBlack.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }

        .font-title {
          font-family: var(--font-anton);
        }

        .font-archivo-black {
          font-family: var(--font-archivo-black);
        }

        .font-montserrat {
          font-family: var(--font-montserrat);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-anton);
        }

        p, span, div, button, a {
          font-family: var(--font-montserrat);
        }

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

        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .float-animation {
          animation: float 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .animate-gradient {
          animation: gradient 8s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </div>
  );
} 