'use client';

import React, { useState } from 'react';
import { Anton, Archivo_Black, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const roadmapSteps = [
  {
    phase: "ÉTAPE 1",
    title: "Optimise ton tunnel de conversion",
    subtitle: "La simplicité qui convertit",
    description: "Trop de friction tue la prise de rendez-vous. Trop d'infos = pas d'action.",
    duration: "3 jours",
    icon: "📈",
    color: "#9F99EB",
    tips: [
      "Audit de ton funnel actuel : est-ce que la promesse est claire en 3 secondes ?",
      "Supprime tous les liens sauf un : le lien de ton Calendly",
      "Ajoute une preuve sociale visible dès le haut de la page"
    ],
    tasks: [
      "Analyser ton tunnel actuel",
      "Simplifier la page de conversion",
      "Mettre en avant les témoignages",
      "Tester la nouvelle version"
    ],
    successCriteria: "Ton tunnel convertit plus de 20% des visiteurs"
  },
  {
    phase: "ÉTAPE 2",
    title: "Délègue la qualification des leads",
    subtitle: "L'automatisation de la qualification",
    description: "Tu perds du temps avec des appels non qualifiés ? Normal, tu qualifies à la main.",
    duration: "4 jours",
    icon: "👥",
    color: "#99E5EB",
    tips: [
      "Mets un setter (humain ou séquence automatisée)",
      "Objectif : 100% des appels réservés → qualifiés avant même de parler",
      "Crée un questionnaire de qualification"
    ],
    tasks: [
      "Créer le questionnaire de qualification",
      "Mettre en place le setter",
      "Automatiser le processus",
      "Mesurer les résultats"
    ],
    successCriteria: "Tous tes appels sont qualifiés à l'avance"
  },
  {
    phase: "ÉTAPE 3",
    title: "Tourne une VSL qui vend sans toi",
    subtitle: "La scalabilité du pitch",
    description: "Tu veux scaler ? Ton pitch doit vivre sans toi. Tu en as marre de répéter la même chose ? Pose une vidéo qui le fait à ta place.",
    duration: "5 jours",
    icon: "🚀",
    color: "#9B8E7D",
    tips: [
      "Écris une VSL de 5 min (hook + contexte + preuve + offre + CTA)",
      "Poste-la sur ta page Notion ou dans ta séquence email",
      "Teste différentes versions"
    ],
    tasks: [
      "Écrire le script de la VSL",
      "Tourner la vidéo",
      "Intégrer la VSL dans le tunnel",
      "Mesurer le taux de conversion"
    ],
    successCriteria: "Ta VSL convertit aussi bien que ton pitch en direct"
  },
  {
    phase: "ÉTAPE 4",
    title: "Lancer ta première campagne Meta Ads",
    subtitle: "L'acquisition payante",
    description: "Tu n'as pas besoin de budget énorme. Tu as besoin d'un test propre. Objectif = optin ou call. Rien d'autre.",
    duration: "4 jours",
    icon: "🎯",
    color: "#9F99EB",
    tips: [
      "Monte une campagne simple : promesse claire + visuel clean + call to action unique",
      "300€ max. Pas plus. Un seul angle. Un seul message",
      "Mesure le coût par acquisition"
    ],
    tasks: [
      "Créer la campagne Meta Ads",
      "Définir le budget et la cible",
      "Lancer le test",
      "Analyser les résultats"
    ],
    successCriteria: "Tu génères des leads à un coût acceptable"
  },
  {
    phase: "ÉTAPE 5",
    title: "Automatise ton onboarding client",
    subtitle: "La livraison sans friction",
    description: "Tu clos → mais après, c'est le flou. Tu perds du temps à renvoyer les mêmes infos, les mêmes liens.",
    duration: "3 jours",
    icon: "✅",
    color: "#99E5EB",
    tips: [
      "Crée une séquence d'onboarding",
      "Mail de bienvenue",
      "Lien de paiement",
      "Accès Notion ou Drive"
    ],
    tasks: [
      "Créer la séquence d'onboarding",
      "Automatiser les emails",
      "Mettre en place les accès",
      "Tester le processus complet"
    ],
    successCriteria: "L'onboarding se fait sans ton intervention"
  },
  {
    phase: "ÉTAPE 6",
    title: "Repackage une offre premium",
    subtitle: "La montée en valeur",
    description: "Tu as une offre qui tourne ? Parfait. Maintenant, crée sa version montée en valeur.",
    duration: "5 jours",
    icon: "⭐",
    color: "#9B8E7D",
    tips: [
      "Ajoute plus de valeur, plus de livrables, plus d'accompagnement",
      "Positionne-la comme une transformation plus rapide, plus complète",
      "Augmente le prix significativement"
    ],
    tasks: [
      "Créer la nouvelle offre premium",
      "Définir les nouveaux livrables",
      "Fixer le nouveau prix",
      "Lancer la nouvelle offre"
    ],
    successCriteria: "Tu signes des clients sur l'offre premium"
  },
  {
    phase: "ÉTAPE 7",
    title: "Revois ton pipe + tes stats de closing",
    subtitle: "La data-driven decision",
    description: "Tu ne peux plus bosser au doigt mouillé. Tu dois voir où tu perds les deals. À quel moment. Pourquoi.",
    duration: "6 jours",
    icon: "📊",
    color: "#9F99EB",
    tips: [
      "Crée ou mets à jour ton CRM avec ces colonnes : lead froid, contacté, call, propal, client",
      "Note le % de conversion entre chaque étape",
      "Analyse les points de friction"
    ],
    tasks: [
      "Mettre en place le CRM",
      "Définir les étapes du pipe",
      "Mesurer les conversions",
      "Optimiser les points faibles"
    ],
    successCriteria: "Tu connais tes taux de conversion à chaque étape"
  }
];

const Roadmap50k100k = () => {
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
            Roadmap<br />50k€ – 100k€
          </h1>
          <p className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
            De machine artisanale à système prévisible en 30 jours
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
                    Tu gagnes bien ?
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Tu as une machine qui tourne. Des leads qui arrivent. Des ventes qui se font. Mais tu veux plus. Plus de leads. Plus de ventes. Plus d'impact.
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Ce palier, c'est le passage de l'industrialisation à l'optimisation. Tu ne construis plus ta machine : tu l'optimises. Tu la rends plus efficace, plus rentable, plus scalable.
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
                      <span className="text-lg md:text-xl">{step.icon}</span>
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
                        <span className="text-lg md:text-xl">{step.icon}</span>
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
                        <span className="text-2xl md:text-3xl">{roadmapSteps[activeStep].icon}</span>
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
                    <h3 className={`${archivo.className} text-2xl md:text-3xl text-[#FFF1DE]`}>Kevin, copywriter B2B</h3>
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
                        1 à 2 missions/mois
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Via bouche-à-oreille
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Pas de tunnel
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#9F99EB]"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Actions</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Meta Ads
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Lead magnet
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        VSL + setter
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Résultats</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        4 clients par mois
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        2500€ par client
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        80% automatisé
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/5">
                  <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-6 md:mb-8`}>Le parcours en détail</h4>
                  <div className="space-y-4 md:space-y-6">
                    {[
                      "Mis en place un tunnel de conversion optimisé",
                      "Créé une VSL qui vend sans intervention",
                      "Lancé une campagne Meta Ads ciblée",
                      "Automatisé la qualification des leads",
                      "Atteint 10k€/mois avec 80% du système automatisé"
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
                  Prêt à optimiser ta machine ?
                </h2>
                <p className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto`}>
                  Tu ne gagnes pas ce jeu en en faisant plus. Tu gagnes en optimisant, en automatisant, en scalant. Ce palier, tu le franchis en rendant ta machine plus efficace.
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

export default Roadmap50k100k; 