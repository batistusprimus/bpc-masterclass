'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaLightbulb, FaChartLine, FaClock, FaBullseye, FaUsers, FaComments, FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { anton, archivo, montserrat } from '@/app/fonts';

const roadmapSteps = [
  {
    phase: "ÉTAPE 1",
    title: "Structure ton offre en 3 niveaux",
    subtitle: "La capture du marché",
    description: "Tu dois capturer tout le spectre de ton marché. Pas une seule offre à un seul prix. Tu perds trop.",
    duration: "5 jours",
    icon: FaChartLine,
    color: "#9F99EB",
    tips: [
      "Une version Starter (entrée)",
      "Une Core Offer (cœur de ta solution)",
      "Une Premium (sur-mesure ou deep transformation)"
    ],
    tasks: [
      "Créer un plan d'offre à 3 étages",
      "Starter à 300€",
      "Core à 1500€",
      "Premium à 5k+"
    ],
    successCriteria: "Tu as une offre claire pour chaque segment de ton marché"
  },
  {
    phase: "ÉTAPE 2",
    title: "Crée un lead magnet qui qualifie",
    subtitle: "L'attraction des bons leads",
    description: "Tu ne veux pas juste des emails. Tu veux les bons leads. Un guide c'est bien. Un audit, une checklist actionnable, ou un mini outil ? Bien mieux.",
    duration: "3 jours",
    icon: FaBullseye,
    color: "#99E5EB",
    tips: [
      "Crée un lead magnet que ta cible ne peut pas ignorer",
      "Pense valeur immédiate",
      "Facilite la prise de décision"
    ],
    tasks: [
      "Identifier le format idéal (audit, checklist, outil)",
      "Créer le contenu du lead magnet",
      "Mettre en place la page de capture",
      "Tester sur 5 personnes de ta cible"
    ],
    successCriteria: "Ton lead magnet génère des leads qualifiés"
  },
  {
    phase: "ÉTAPE 3",
    title: "Mets en place ta séquence email evergreen",
    subtitle: "L'automatisation de la vente",
    description: "Un lead sans séquence = un prospect perdu. Tu veux automatiser la valeur + vendre sans être là.",
    duration: "7 jours",
    icon: FaRocket,
    color: "#9B8E7D",
    tips: [
      "5 mails de contenu (insight, preuve, objection, méthode, résultat)",
      "2 mails de vente",
      "Une séquence qui raconte une histoire"
    ],
    tasks: [
      "Écrire les 5 mails de contenu",
      "Créer les 2 mails de vente",
      "Configurer la séquence dans ton outil",
      "Tester la séquence complète"
    ],
    successCriteria: "Ta séquence convertit sans ton intervention"
  },
  {
    phase: "ÉTAPE 4",
    title: "Monte ton tunnel Notion",
    subtitle: "La simplicité efficace",
    description: "Pas besoin d'un funnel complexe. Tu veux une landing claire + un Calendly + ton pipe de suivi.",
    duration: "4 jours",
    icon: FaUsers,
    color: "#9F99EB",
    tips: [
      "1 page Notion : promesse + preuve + CTA",
      "Calendly avec préqual",
      "Pipe simple en 5 étapes"
    ],
    tasks: [
      "Créer la page Notion de conversion",
      "Configurer Calendly avec préqualification",
      "Mettre en place le pipe de suivi",
      "Tester le parcours complet"
    ],
    successCriteria: "Ton tunnel convertit de manière autonome"
  },
  {
    phase: "ÉTAPE 5",
    title: "Lance ta machine de contenu",
    subtitle: "La création de valeur",
    description: "Tu ne postes plus au hasard. Tu postes pour nourrir ton pipe.",
    duration: "5 jours",
    icon: FaComments,
    color: "#99E5EB",
    tips: [
      "Éducation (ce que tu sais)",
      "Preuve (ce que tu fais)",
      "Positionnement (ce que tu penses)"
    ],
    tasks: [
      "Créer un calendrier éditorial",
      "Préparer 3 types de contenus",
      "Planifier 3 posts par semaine",
      "Mesurer l'engagement"
    ],
    successCriteria: "Ton contenu génère des leads régulièrement"
  },
  {
    phase: "ÉTAPE 6",
    title: "Industrialise ton outreach",
    subtitle: "La prospection à l'échelle",
    description: "Tu ne peux plus prospecter à la main tous les jours. Tu dois avoir une base, des séquences, des relances.",
    duration: "4 jours",
    icon: FaUsers,
    color: "#9B8E7D",
    tips: [
      "Crée une base de 100 leads",
      "Prépare 2 messages + 1 relance",
      "Envoie 15 messages/jour"
    ],
    tasks: [
      "Construire la base de leads",
      "Écrire les séquences d'outreach",
      "Mettre en place l'automatisation",
      "Suivre les résultats"
    ],
    successCriteria: "Ton outreach génère des rendez-vous régulièrement"
  },
  {
    phase: "ÉTAPE 7",
    title: "Commence à déléguer ou automatiser",
    subtitle: "La scalabilité",
    description: "Si tu fais encore tout, tu plafonnes. Tu dois sortir de l'exécution répétitive.",
    duration: "2 jours",
    icon: FaStar,
    color: "#9F99EB",
    tips: [
      "Identifie 3 tâches répétitives",
      "Crée une SOP simple",
      "Délègue ou automatise"
    ],
    tasks: [
      "Lister les tâches répétitives",
      "Créer les procédures",
      "Former ou automatiser",
      "Mesurer le gain de temps"
    ],
    successCriteria: "Tu gagnes 10h par semaine en automatisation"
  }
];

const Roadmap10k50k = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with 3D Effect */}
      <div className="relative h-screen flex items-center justify-center perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        {/* 3D Grid Background */}
        <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 grid-rows-8 md:grid-rows-12 gap-1 opacity-10">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-white/10 rounded-sm"></div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <h1 className={`${anton.className} text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 md:mb-8 text-[#FFF1DE] leading-tight`}>
            Roadmap<br />10k€ – 50k€
          </h1>
          <p className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
            De solo rentable à machine à leads en 30 jours
          </p>
        </motion.div>
      </div>

      {/* Introduction Section with Parallax */}
      <div className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#9F99EB]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#99E5EB]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB]"></div>
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F99EB]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#99E5EB]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#9F99EB] flex items-center justify-center">
                    <span className="text-2xl text-white">🌟</span>
                  </div>
                  <h2 className={`${anton.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFF1DE] text-center md:text-left`}>
                    Tu as prouvé que tu pouvais vendre ?
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Tu as un système qui fonctionne. Des clients qui arrivent. Des ventes qui se font. Mais tu veux plus. Plus de clients. Plus de revenus. Plus d'impact.
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Ce palier, c'est le passage de l'artisanat à l'industrialisation. Tu ne vends plus au feeling. Tu construis une machine de vente.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/contact" target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${montserrat.className} bg-[#9F99EB] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-[#8A84D9] transition-colors duration-300 shadow-[0_0_30px_rgba(159,153,235,0.3)] w-full sm:w-auto`}
                      >
                        Appel de diagnostic
                      </motion.button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB]"></div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#9F99EB]"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#99E5EB]"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#9B8E7D]"></div>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#99E5EB] to-[#9F99EB]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Roadmap */}
      <div className="relative py-8 md:py-16 lg:py-32 bg-black">
        <div className="container mx-auto px-4">
          {/* Mobile Steps Navigation */}
          <div className="lg:hidden mb-6 md:mb-8">
            <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 snap-x snap-mandatory">
              {roadmapSteps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-shrink-0 w-[240px] md:w-[280px] text-left p-4 md:p-6 rounded-xl transition-all duration-300 snap-center ${
                    activeStep === index 
                      ? 'bg-gradient-to-br from-[#9F99EB] to-[#8A84D9] text-white shadow-[0_0_30px_rgba(159,153,235,0.3)]' 
                      : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                      activeStep === index ? 'bg-white/20' : 'bg-[#9F99EB]/20'
                    }`}>
                      <span className="text-lg md:text-xl">{index + 1}</span>
                    </div>
                    <div>
                      <div className={`${archivo.className} text-sm md:text-lg mb-1`}>{step.phase}</div>
                      <div className={`${anton.className} text-base md:text-xl`}>{step.title}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Desktop Steps Navigation */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-8 space-y-3 md:space-y-4">
                {roadmapSteps.map((step, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 md:p-6 rounded-xl transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-gradient-to-br from-[#9F99EB] to-[#8A84D9] text-white shadow-[0_0_30px_rgba(159,153,235,0.3)]' 
                        : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                        activeStep === index ? 'bg-white/20' : 'bg-[#9F99EB]/20'
                      }`}>
                        <span className="text-lg md:text-xl">{index + 1}</span>
                      </div>
                      <div>
                        <div className={`${archivo.className} text-sm md:text-lg mb-1`}>{step.phase}</div>
                        <div className={`${anton.className} text-base md:text-xl`}>{step.title}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Active Step Content */}
            <div className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB]"></div>
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F99EB]/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#99E5EB]/5 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-4 border-[#9F99EB] shadow-[0_0_30px_rgba(159,153,235,0.3)]">
                        <span className="text-2xl md:text-3xl">{activeStep + 1}</span>
                      </div>
                      <div className="text-center md:text-left">
                        <div className={`${archivo.className} text-[#FFF1DE] text-xl md:text-2xl`}>{roadmapSteps[activeStep].phase}</div>
                        <h3 className={`${anton.className} text-3xl md:text-4xl text-white`}>{roadmapSteps[activeStep].title}</h3>
                        <p className={`${montserrat.className} text-gray-400 text-base md:text-lg mt-2`}>{roadmapSteps[activeStep].subtitle}</p>
                      </div>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 mb-6 md:mb-8">
                      <p className={`${montserrat.className} text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed`}>
                        {roadmapSteps[activeStep].description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 text-[#9F99EB] mb-6 md:mb-8">
                      <span className="text-lg md:text-xl">⏱️</span>
                      <span className={`${montserrat.className} text-base md:text-lg`}>Durée estimée: {roadmapSteps[activeStep].duration}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="col-span-2">
                        <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 mb-4 md:mb-6 hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                          <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-3 md:mb-4`}>Conseils clés</h4>
                          <ul className="space-y-2 md:space-y-3">
                            {roadmapSteps[activeStep].tips.map((tip, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${montserrat.className} flex items-start gap-3 text-gray-300 text-base md:text-lg group`}
                              >
                                <div className="w-2 h-2 rounded-full bg-[#9F99EB] mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                                {tip}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {roadmapSteps[activeStep].tasks.map((task, taskIndex) => (
                        <motion.div
                          key={taskIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: taskIndex * 0.1 }}
                          className={`${montserrat.className} flex items-start gap-3 md:gap-4 text-gray-300 text-base md:text-lg group bg-[#1a1a1a] p-3 md:p-4 rounded-xl border border-white/5 hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300`}
                        >
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#9F99EB] mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                          {task}
                        </motion.div>
                      ))}
                      
                      <div className="col-span-2 mt-4 md:mt-6">
                        <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                          <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-3 md:mb-4`}>Critère de succès</h4>
                          <p className={`${montserrat.className} text-gray-300 text-base md:text-lg`}>
                            {roadmapSteps[activeStep].successCriteria}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 md:mt-12 flex items-center gap-4 md:gap-6">
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB]"></div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#9F99EB]"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#99E5EB]"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#9B8E7D]"></div>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#99E5EB] to-[#9F99EB]"></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section with 3D Cards */}
      <div className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#9F99EB]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#99E5EB]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className={`${anton.className} text-4xl md:text-6xl text-[#FFF1DE] mb-8 md:mb-12 text-center`}>
              ÉTUDE DE CAS
            </h2>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB]"></div>
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F99EB]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#99E5EB]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#9F99EB] to-[#99E5EB] flex items-center justify-center shadow-[0_0_30px_rgba(159,153,235,0.3)]">
                    <span className="text-3xl md:text-4xl">🌟</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className={`${archivo.className} text-2xl md:text-3xl text-[#FFF1DE]`}>Thomas, consultant en stratégie digitale</h3>
                    <p className={`${montserrat.className} text-gray-300 text-base md:text-lg`}>Transformation en 30 jours</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Avant</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Des missions à 800€
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Aucune récurrence
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Expertise en stratégie
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#9F99EB]"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Actions</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Lead magnet + tunnel
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        5 mails de séquence
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Contenu régulier
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Résultats</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        2.500€/mois récurrents
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        2 clients à 1500€
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Leads automatiques
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/5">
                  <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-6 md:mb-8`}>Le parcours en détail</h4>
                  <div className="space-y-4 md:space-y-6">
                    {[
                      "Créé un lead magnet 'Audit Stratégie Digital'",
                      "Mis en place une séquence email de 7 jours",
                      "Lancé 3 posts par semaine sur LinkedIn",
                      "Automatisé le processus de qualification",
                      "Signé 2 clients en 3 semaines"
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 md:gap-4 group"
                      >
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9F99EB] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-sm md:text-base">{index + 1}</span>
                        </div>
                        <p className={`${montserrat.className} text-gray-300 text-base md:text-lg`}>
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section with 3D Effect */}
      <div className="relative py-16 md:py-24 lg:py-32 bg-black overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#9F99EB]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#99E5EB]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB]"></div>
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#9F99EB]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-[#99E5EB]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className={`${anton.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFF1DE] mb-4 md:mb-6 lg:mb-8`}>
                  Prêt à industrialiser ta vente ?
                </h2>
                <p className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto`}>
                  Tu ne gagnes pas ce jeu en en faisant plus. Tu gagnes en automatisant, en systématisant, en industrialisant. Ce palier, tu le franchis en construisant une machine de vente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/roadmap" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${montserrat.className} bg-[#9F99EB] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-[#8A84D9] transition-colors duration-300 shadow-[0_0_30px_rgba(159,153,235,0.3)] w-full sm:w-auto`}
                    >
                      Découvrir la Roadmap
                    </motion.button>
                  </Link>
                  <Link href="/catalogue" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${montserrat.className} bg-white text-[#9F99EB] px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto`}
                    >
                      Voir le catalogue
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap10k50k; 