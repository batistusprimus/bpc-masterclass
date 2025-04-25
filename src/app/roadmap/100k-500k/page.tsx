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
    title: "Formalise ta méthode propriétaire",
    subtitle: "La scalabilité du savoir-faire",
    description: "Si tu veux scaler, tu dois vendre une méthode reproductible, pas juste un savoir-faire flou.",
    duration: "1 semaine",
    icon: "📘",
    color: "#9F99EB",
    tips: [
      "Découpe ce que tu fais naturellement en un framework clair",
      "Donne-lui un nom. Structure-le en étapes. Documente chaque étape.",
      "Module : 1.7 – Signature System + Produit Process"
    ],
    tasks: [
      "Analyser ton processus actuel",
      "Créer un framework structuré",
      "Documenter chaque étape",
      "Tester la méthode avec un client"
    ],
    successCriteria: "Tu as une méthode claire et reproductible"
  },
  {
    phase: "ÉTAPE 2",
    title: "Sépare vente et delivery",
    subtitle: "La délégation stratégique",
    description: "Tu ne dois plus tout faire. Chaque nouvelle vente ne doit pas t'enfermer dans plus de prod.",
    duration: "1 semaine",
    icon: "🎯",
    color: "#99E5EB",
    tips: [
      "Délègue la delivery, ou standardise-la à fond",
      "Objectif : 80% de la valeur délivrée sans toi en call",
      "Module : 5.0 – Delivery + 5.2 – SOPs"
    ],
    tasks: [
      "Identifier les tâches déléguables",
      "Créer des SOPs détaillées",
      "Former l'équipe",
      "Mesurer l'autonomie"
    ],
    successCriteria: "80% de la valeur est délivrée sans ton intervention"
  },
  {
    phase: "ÉTAPE 3",
    title: "Recrute ton rôle critique",
    subtitle: "Le premier pas vers l'équipe",
    description: "Tu es seul à gérer l'acquisition, la gestion client, les livrables. Stop.",
    duration: "1 semaine",
    icon: "👥",
    color: "#9B8E7D",
    tips: [
      "Liste ce qui te prend de l'énergie + ce que tu ne veux plus faire",
      "Recrute ou sous-traite 1 rôle clé : bras droit, closer, ops, prod",
      "Module : 5.4 – Premier recrutement"
    ],
    tasks: [
      "Définir le rôle critique",
      "Créer la fiche de poste",
      "Recruter ou sous-traiter",
      "Former et intégrer"
    ],
    successCriteria: "Tu as délégué un rôle clé"
  },
  {
    phase: "ÉTAPE 4",
    title: "Transforme ton offre en programme signature",
    subtitle: "Le passage à l'échelle",
    description: "Tu ne peux plus vendre du 1:1 pur. Tu dois packager une méthode complète, à suivre avec ou sans toi.",
    duration: "1 semaine",
    icon: "📚",
    color: "#9F99EB",
    tips: [
      "Prends ton offre 1:1 actuelle",
      "Structure-la sous forme de programme : modules, templates, étapes, suivi",
      "Module : 1.8 – Passage 1:1 → Produit Signature"
    ],
    tasks: [
      "Structurer le programme",
      "Créer les templates",
      "Définir les étapes",
      "Mettre en place le suivi"
    ],
    successCriteria: "Tu as un programme signature clair et structuré"
  },
  {
    phase: "ÉTAPE 5",
    title: "Renforce ton système d'acquisition",
    subtitle: "L'industrialisation des canaux",
    description: "Tu ne veux plus de trous dans ton agenda. Tu veux une machine.",
    duration: "1 semaine",
    icon: "🎯",
    color: "#99E5EB",
    tips: [
      "Choisis 2 canaux à industrialiser (ex : Ads + Email, ou SEO + LinkedIn)",
      "Structure les actions hebdo. Mets en place des métriques de contrôle.",
      "Module : 3.5 – Acquisition Multicanal"
    ],
    tasks: [
      "Sélectionner les canaux",
      "Créer le plan d'action",
      "Mettre en place les métriques",
      "Lancer les tests"
    ],
    successCriteria: "Tu as 2 canaux d'acquisition automatisés"
  },
  {
    phase: "ÉTAPE 6",
    title: "Mets en place ton dashboard hebdo",
    subtitle: "Le pilotage data-driven",
    description: "Sans chiffres = pilotage à l'instinct. À ce niveau, c'est non négociable.",
    duration: "1 semaine",
    icon: "📊",
    color: "#9B8E7D",
    tips: [
      "Mets en place un dashboard CEO (Notion ou GHL)",
      "Tu y suis : Nombres de leads, Closing rate, CA signé, Récurrence / churn, Charge de prod",
      "Module : 5.1 – KPI & Pilotage"
    ],
    tasks: [
      "Créer le dashboard",
      "Définir les KPIs",
      "Mettre en place le suivi",
      "Analyser les données"
    ],
    successCriteria: "Tu as un dashboard opérationnel avec 5 KPIs clés"
  },
  {
    phase: "ÉTAPE 7",
    title: "Crée une offre backend",
    subtitle: "La montée en valeur",
    description: "Ton vrai levier maintenant ? Tes clients actuels. Tu dois créer une suite logique à ton programme. Un backend.",
    duration: "1 semaine",
    icon: "🚀",
    color: "#9F99EB",
    tips: [
      "Crée une montée en gamme : consulting, 1:1 stratégique, mastermind, upgrade",
      "Objectif : augmenter ton LTV, fidéliser, libérer de la charge commerciale",
      "Module : 1.9 – Backend Offer"
    ],
    tasks: [
      "Définir l'offre backend",
      "Structurer les livrables",
      "Fixer le prix",
      "Lancer l'offre"
    ],
    successCriteria: "Tu as une offre backend qui augmente ton LTV"
  }
];

const RoadmapTemplate = () => {
  const [activeStep, setActiveStep] = useState(0);

  const IconComponent = roadmapSteps[activeStep].icon;

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
            Roadmap<br />100k€ – 500k€
          </h1>
          <p className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
            Passage en mode business, pas juste freelance amélioré
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
                      Tu sais closer. Tu délivres. T'as des résultats. Mais tout repose encore sur toi. Tu vends. Tu livres. Tu suis. Tu ajustes. T'as pas une entreprise. T'as une équipe de toi tout seul. Et ça bloque.
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Ce palier, c'est le switch : tu deviens chef d'orchestre, pas exécutant principal. Tu poses des systèmes. Tu recrutes. Tu standardises. Tu délègues. Tu pilotes.
                    </p>
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
                    <h3 className={`${archivo.className} text-2xl md:text-3xl text-[#FFF1DE]`}>Lucas, agence web B2B</h3>
                    <p className={`${montserrat.className} text-gray-300 text-base md:text-lg`}>Transformation en 5 mois</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Avant</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        120k€/an
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Tout faisait à la main
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Close + prod + suivi
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#9F99EB]"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Actions</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Recrutement d'un ops
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Packaging de l'offre
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Systématisation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Résultats</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        38k€/mois
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        4x plus scalable
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        1 jour off par semaine
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/5">
                  <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-6 md:mb-8`}>Le parcours en détail</h4>
                  <div className="space-y-4 md:space-y-6">
                    {[
                      "Identifié les coachs comme cible (ICP clair, budget, besoin urgent)",
                      "Créé une offre \"Identité pro en 7 jours\" à 600€",
                      "Envoyé 25 messages LinkedIn ciblés",
                      "Booké 6 calls",
                      "Travaillé gratuitement avec 1 client pour récolter de la preuve"
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
                  Prêt à passer en mode business ?
                </h2>
                <p className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto`}>
                  À ce stade, le blocage n'est plus commercial. C'est structurel. Ce palier, tu le passes avec des process, une équipe et un pilotage.
                </p>
                <Link href="/masterclass" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${montserrat.className} bg-[#9F99EB] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-[#8A84D9] transition-colors duration-300 shadow-[0_0_30px_rgba(159,153,235,0.3)]`}
                  >
                    Découvrir la Masterclass
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTemplate; 