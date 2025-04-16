'use client';

import Button from "@/components/Button";
import RoundedAvatar from "@/components/RoundedAvatar";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Testimonials from "@/components/Testimonials";

const TESTIMONIAL_IMAGES = [
  "/1682719923684.jpeg",
  "/1702830864459.jpeg",
  "/1728625826972.jpeg",
  "/1730449304405.jpeg",
  "/1734125066194.jpeg",
  "/1734882654773.jpeg",
  "/iLjcvlnf_400x400.jpg",
  "/maxresdefault.jpg",
  "/e8ea093205059.5e1d38df331db.jpg",
  "/Stevy.png",
  "/Jean.png",
  "/Arthur.png",
  "/Adrien.png"
];

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  results: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "En 3 jours, j'ai eu mon offre, ma page, mes premiers messages. Tout est prêt, plus qu'à envoyer.",
    author: "Julien",
    role: "coach B2B",
    results: "2x son CA en 2 mois"
  },
  {
    quote: "C'est carré, c'est rapide, c'est pas une énième formation. J'ai enfin un système qui tourne.",
    author: "Sarah",
    role: "freelance stratégie de marque",
    results: "15 leads/mois en moyenne"
  }
];

export default function StarterPage() {
  const [showDemo, setShowDemo] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 heures en secondes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 24 * 60 * 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Fonction pour obtenir des images aléatoires uniques
  const getRandomImages = (count: number) => {
    const shuffled = [...TESTIMONIAL_IMAGES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const testimonialImages = getRandomImages(5); // Pour les avatars en haut
  const mainTestimonialImages = getRandomImages(2); // Pour les témoignages principaux

  return (
    <>
      {/* Sticky CTA Bar avec compteur */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-button/30 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-button font-bold">STARTER</span>
              <span className="text-gray-300">Système de vente B2B en 7 jours</span>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Prochaine mise à jour dans {formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 jours de garantie</span>
              </div>
              <Button 
                href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                size="sm"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Accéder à STARTER - 99€</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section avec preuve sociale */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-primary via-primary/90 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-primary/20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-button/30 rounded-full blur-[120px] opacity-50" />
        
        {/* Content */}
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30"
            >
              <p className="text-sm md:text-base font-medium">
                🔥 STARTER – Le système de vente B2B que tu peux lancer en 7 jours
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight"
            >
              Lance ton système de vente B2B en 7 jours
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Tous les outils. Zéro bullshit. 99€ une fois, accès à vie.
            </motion.p>

            {/* Preuve sociale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="flex -space-x-4">
                {testimonialImages.map((img, i) => (
                  <RoundedAvatar
                    key={i}
                    src={img}
                    alt="Entrepreneur formé"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-button font-bold">+2.000</span> entrepreneurs formés depuis 4 ans
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">👉 Je prends STARTER maintenant - 99€</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>14 jours de garantie</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pour qui c'est fait ? */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Un système adapté à ton profil
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              🧠 Pour qui c'est fait ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "👨‍💼",
                title: "Freelance & Consultant B2B",
                description: "Tu es freelance, consultant, coach ou solopreneur B2B",
                gradient: "from-blue-500/20 via-transparent to-transparent"
              },
              {
                icon: "🎯",
                title: "Indépendant du bouche à oreille",
                description: "Tu veux vendre sans dépendre de ton réseau",
                gradient: "from-green-500/20 via-transparent to-transparent"
              },
              {
                icon: "🚀",
                title: "Autonome & Méthodique",
                description: "Tu préfères faire seul, mais avec une méthode claire",
                gradient: "from-purple-500/20 via-transparent to-transparent"
              },
              {
                icon: "⚡️",
                title: "Pressé d'avancer",
                description: "Tu veux aller vite et éviter les formations interminables",
                gradient: "from-yellow-500/20 via-transparent to-transparent"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-button">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-button">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preuve sociale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-full border border-gray-700/30 shadow-lg">
              <div className="flex -space-x-4">
                {getRandomImages(5).map((img, i) => (
                  <RoundedAvatar
                    key={i}
                    src={img}
                    alt="Entrepreneur formé"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-300 whitespace-normal sm:whitespace-nowrap">
                <span className="text-2xl sm:text-3xl font-bold text-button">2.000+</span>
                <span className="ml-2">entrepreneurs formés depuis 4 ans</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section avec preuve sociale */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Un système qui te fait gagner du temps
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              STARTER vs Formations YouTube
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* YouTube Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
              >
                <div className="text-center mb-8">
                  <div className="inline-block bg-red-500/20 px-4 py-2 rounded-lg mb-4">
                    <p className="text-red-500 font-medium">Formations YouTube</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-2">Gratuit mais inefficace</h3>
                  <p className="text-gray-400">Tu perds des mois à chercher</p>
                </div>
                <div className="space-y-4">
                  {[
                    "❌ Trop d'infos, pas de structure",
                    "❌ Aucun template prêt à l'emploi",
                    "❌ À toi d'inventer ton plan",
                    "❌ Résultats aléatoires",
                    "❌ Tu es seul face aux problèmes",
                    "❌ Tu dois tout refaire à chaque mise à jour",
                    "❌ Gratuit mais inefficace"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-700/30">
                      <div className="text-red-500 mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* STARTER Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-button/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-button/10 rounded-bl-full blur-3xl" />
                <div className="text-center mb-8">
                  <div className="inline-block bg-button/20 px-4 py-2 rounded-lg mb-4">
                    <p className="text-button font-medium">STARTER</p>
                  </div>
                  <h3 className="text-2xl font-bold text-button mb-2">99€ pour gagner des mois</h3>
                  <p className="text-gray-400">Tu lances en 7 jours</p>
                </div>
                <div className="space-y-4">
                  {[
                    "✅ Méthode claire en 7 modules",
                    "✅ 50+ templates Notion & GHL",
                    "✅ Workbook 7 jours + checklist",
                    "✅ Offre + tunnel + canal prêts",
                    "✅ Discord privé + entraide",
                    "✅ Inclus gratuitement à vie",
                    "✅ 99€ – une fois, tu gagnes des mois"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-button/30 group hover:bg-button/10 transition-colors duration-300">
                      <div className="text-button mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Preuve sociale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-full border border-gray-700/30 shadow-lg">
              <div className="flex -space-x-4">
                {getRandomImages(5).map((img, i) => (
                  <RoundedAvatar
                    key={i}
                    src={img}
                    alt="Entrepreneur formé"
                  />
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-300 whitespace-normal sm:whitespace-nowrap">
                <span className="text-2xl sm:text-3xl font-bold text-button">2.000+</span>
                <span className="ml-2">entrepreneurs formés depuis 4 ans</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce que tu obtiens avec visuels */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Un système complet pour lancer ton business B2B
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              🎯 Ce que tu obtiens
            </h2>
          </motion.div>

          {/* Core Product */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-button mb-2">Le système STARTER</h3>
              <p className="text-gray-300">La méthode complète pour lancer ton business B2B</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  emoji: "🎥",
                  title: "7 modules pas à pas",
                  description: "La méthode complète pour créer ton système de vente B2B en 7 jours",
                  gradient: "from-blue-500/20 via-transparent to-transparent"
                },
                {
                  emoji: "📘",
                  title: "Workbook 7 jours",
                  description: "Un plan d'action détaillé jour par jour pour implémenter la méthode",
                  gradient: "from-purple-500/20 via-transparent to-transparent"
                },
                {
                  emoji: "🔍",
                  title: "Mini-audit intelligent",
                  description: "Un outil pour identifier tes blocages et savoir quoi corriger",
                  gradient: "from-yellow-500/20 via-transparent to-transparent"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-3 text-button">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bonus Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-block bg-green-500/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-green-500/30">
                <p className="text-sm md:text-base font-medium text-green-400">
                  Bonus offerts (+2.000€ de valeur)
                </p>
              </div>
              <p className="text-gray-300">Des templates et ressources pour aller plus vite</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  emoji: "🧰",
                  title: "Templates premium",
                  description: "50+ templates Notion & GHL prêts à l'emploi. Tunnel, CRM, offre, contenu, automatisation.",
                  gradient: "from-green-500/20 via-transparent to-transparent",
                  highlight: true
                },
                {
                  emoji: "💬",
                  title: "Discord privé",
                  description: "Accès à la communauté des membres STARTER. Entraide, feedbacks et motivation.",
                  gradient: "from-pink-500/20 via-transparent to-transparent"
                },
                {
                  emoji: "♻️",
                  title: "Mises à jour à vie",
                  description: "Accès permanent aux nouvelles versions des templates et des ressources.",
                  gradient: "from-indigo-500/20 via-transparent to-transparent"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                    item.highlight 
                      ? "border-green-500/50 shadow-lg shadow-green-500/20" 
                      : "border-gray-700/30 hover:border-green-500/30"
                  }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-3 text-green-400">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Valeur totale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-green-500/30 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <p className="text-lg text-gray-300">
                <span className="text-3xl font-bold text-green-400">+2.000€</span>
                <span className="ml-2">de bonus offerts avec ton accès</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce que ces systèmes ont permis de générer */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Des résultats concrets et vérifiables
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              💰 Ce que ces systèmes ont permis de générer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "46 414,25€ en une transaction",
                description: "Un exemple de transaction B2B générée avec ce système",
                image: "/f9c46e64-1604-4daf-8264-6e96a8fade03.png",
                gradient: "from-blue-500/20 via-transparent to-transparent"
              },
              {
                title: "Des transactions à 4-5 chiffres",
                description: "Chaque transaction c'est minimum des milliers d'euros",
                image: "/52ca1aef-3987-40bd-ba8f-f17c23089204.png",
                gradient: "from-green-500/20 via-transparent to-transparent"
              },
              {
                title: "Clients premium sur le long terme",
                description: "Permet de signer des clients à +50.000€/an sur plusieurs années",
                image: "/Screen Freebe (1) (4).png",
                gradient: "from-purple-500/20 via-transparent to-transparent"
              },
              {
                title: "Système éprouvé et reproductible",
                description: "J'ai appliqué ce système exact pour generer +200.000€ entre juillet 2021 et Août 2023, sans travailler +4h/jour",
                image: "/Baptiste Piocelle (1) (2).png",
                gradient: "from-yellow-500/20 via-transparent to-transparent"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-gray-700/50 group-hover:border-button/30 transition-colors duration-500 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-button">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preuve sociale supplémentaire */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/30 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg text-gray-300">
                <span className="text-3xl font-bold text-button">+2M€</span>
                <span className="ml-2">générés en B2B par des freelances sur les 3 dernières années</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ce que tu gagnes avec résultats concrets */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Des résultats concrets en 7 jours
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              🚀 Ce que tu gagnes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              En 7 jours, tu peux transformer ton business B2B
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                emoji: "💼",
                title: "Une offre qui convertit",
                description: "Tu crées une offre claire qui attire tes clients idéaux et génère des transactions à 4-5 chiffres",
                gradient: "from-blue-500/20 via-transparent to-transparent"
              },
              {
                emoji: "🔄",
                title: "Un tunnel qui vend",
                description: "Tu mets en place un système de vente automatisé qui génère des leads et des rendez-vous sans effort",
                gradient: "from-purple-500/20 via-transparent to-transparent"
              },
              {
                emoji: "🎯",
                title: "Une acquisition qui scale",
                description: "Tu lances une stratégie d'acquisition B2B qui te permet de trouver des clients premium à volonté",
                gradient: "from-yellow-500/20 via-transparent to-transparent"
              },
              {
                emoji: "💰",
                title: "Des revenus récurrents",
                description: "Tu signes des clients à +50.000€/an sur plusieurs années, avec un système reproductible",
                gradient: "from-green-500/20 via-transparent to-transparent"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{item.emoji}</div>
                  <h3 className="text-2xl font-bold mb-3 text-button">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-button">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Résultats concrets */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                value: "7 jours",
                label: "Temps moyen pour lancer",
                description: "Un système de vente complet",
                icon: "⏱️"
              },
              {
                value: "10x",
                label: "ROI moyen",
                description: "Retour sur investissement",
                icon: "📈"
              },
              {
                value: "95%",
                label: "Satisfaction",
                description: "Clients satisfaits",
                icon: "⭐️"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/30 hover:border-button/30 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-4xl font-bold text-button mb-2">{stat.value}</p>
                <p className="text-lg font-bold text-white mb-1">{stat.label}</p>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button 
              href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">👉 Je lance mon système maintenant - 99€</span>
              <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 jours de garantie satisfait ou remboursé</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Témoignages avec photos */}
      <Testimonials />

      {/* Promesses & Garanties avec preuve */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Nous prenons tous les risques pour toi
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              🔐 Promesses & Garanties
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Nous sommes tellement sûrs de notre système que nous prenons tous les risques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "💎",
                title: "Accès à vie",
                description: "99€ une fois, accès à vie. Toutes les mises à jour incluses gratuitement.",
                highlight: true
              },
              {
                icon: "✅",
                title: "Résultats garantis",
                description: "Si tu suis les modules, tu lances ton système en 7 jours. Point.",
                highlight: false
              },
              {
                icon: "🔄",
                title: "Remboursement",
                description: "Si tu n'arrives à rien implémenter après avoir suivi les modules, on te rembourse.",
                highlight: false
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                  item.highlight 
                    ? "border-button/50 shadow-lg shadow-button/20" 
                    : "border-gray-700/30 hover:border-button/30"
                }`}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-button">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preuve de garantie */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/30 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-button/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg text-gray-300">
                <span className="text-3xl font-bold text-button">0.5%</span>
                <span className="ml-2">de taux de remboursement seulement</span>
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button 
              href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">👉 Je commence maintenant - 99€</span>
              <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 jours de garantie satisfait ou remboursé</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investissement & CTA avec urgence */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Un investissement qui change tout
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              💸 Investissement
            </h2>
            
            {/* Prix et valeur */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/30">
                <div className="text-4xl font-bold text-button">99€</div>
                <div className="text-left">
                  <p className="text-gray-300">Paiement unique</p>
                  <p className="text-sm text-gray-400">Accès à vie</p>
                </div>
              </div>
            </div>

            {/* Valeur totale */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700/30">
                <div className="text-4xl font-bold text-green-400">+2.000€</div>
                <div className="text-left">
                  <p className="text-gray-300">Valeur totale</p>
                  <p className="text-sm text-gray-400">Templates, ressources, mises à jour</p>
                </div>
              </div>
            </div>

            {/* Garanties */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: "✅",
                  title: "14 jours",
                  description: "Garantie satisfait ou remboursé"
                },
                {
                  icon: "💎",
                  title: "Accès à vie",
                  description: "Toutes les mises à jour incluses"
                },
                {
                  icon: "🔄",
                  title: "0.5%",
                  description: "Taux de remboursement"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-bold text-button">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Compteur d'urgence */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
                <svg className="w-5 h-5 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-300">
                  Prochaine mise à jour dans <span className="text-button font-bold">{formatTime(timeLeft)}</span>
                </p>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="mb-8">
              <Button 
                href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">👉 Je prends STARTER maintenant - 99€</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>

            {/* Preuve sociale */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-4">
                {getRandomImages(5).map((img, i) => (
                  <RoundedAvatar
                    key={i}
                    src={img}
                    alt="Entrepreneur formé"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-button font-bold">+2.000</span> entrepreneurs formés
              </p>
            </div>

            {/* Garantie */}
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 jours de garantie satisfait ou remboursé</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ avec preuve sociale */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              ❓ Questions fréquentes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Les questions que se posent les entrepreneurs avant de commencer
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Est-ce que c'est pour les débutants ?",
                answer: "Oui, si tu veux vendre en B2B et que tu n'as pas encore structuré ton système. 65% de nos clients sont des débutants."
              },
              {
                question: "Est-ce que je dois avoir GHL ou Notion ?",
                answer: "Oui, mais tu peux t'en sortir avec Notion seul pour commencer. La plupart commencent comme ça."
              },
              {
                question: "Est-ce que je peux me faire rembourser ?",
                answer: "Si tu n'arrives à rien implémenter après avoir suivi les modules → oui. Notre taux de remboursement est de 0.5% seulement."
              },
              {
                question: "Et après ?",
                answer: "Tu pourras rejoindre les offres plus avancées si tu veux déléguer ou scaler. 30% de nos clients passent à l'étape suivante."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
              >
                <h3 className="text-xl font-bold mb-3 text-button">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini-offre Finale avec urgence */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-primary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[120px] opacity-30" />
        
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium text-gray-300">
                Dernière chance de rejoindre STARTER
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              7 modules. 50 templates. 1 plan. 99€.
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Tu peux tout lancer dès ce soir.
            </p>

            {/* Valeur et garanties */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: "💎",
                  title: "99€",
                  description: "Paiement unique, accès à vie"
                },
                {
                  icon: "✅",
                  title: "14 jours",
                  description: "Garantie satisfait ou remboursé"
                },
                {
                  icon: "🔄",
                  title: "0.5%",
                  description: "Taux de remboursement"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-bold text-button">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Compteur d'urgence */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
                <svg className="w-5 h-5 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-300">
                  Prochaine mise à jour dans <span className="text-button font-bold">{formatTime(timeLeft)}</span>
                </p>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="mb-8">
              <Button 
                href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">👉 Je prends STARTER maintenant - 99€</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>

            {/* Preuve sociale */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-4">
                {getRandomImages(5).map((img, i) => (
                  <RoundedAvatar
                    key={i}
                    src={img}
                    alt="Entrepreneur formé"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-button font-bold">+2.000</span> entrepreneurs formés
              </p>
            </div>

            {/* Valeur totale */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/30">
                <div className="text-xl font-bold text-green-400">+2.000€</div>
                <div className="text-left">
                  <p className="text-sm text-gray-300">Valeur totale</p>
                  <p className="text-xs text-gray-400">Templates, ressources, mises à jour</p>
                </div>
              </div>
            </div>

            {/* Garantie */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>14 jours de garantie satisfait ou remboursé</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 