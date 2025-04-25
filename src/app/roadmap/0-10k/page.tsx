'use client';

import React, { useState } from 'react';
import { Anton, Archivo_Black, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaLightbulb, FaChartLine, FaClock, FaBullseye, FaUsers, FaComments, FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const roadmapSteps = [
  {
    phase: "ÉTAPE 1",
    title: "Pose ta vision claire",
    subtitle: "La fondation de ton business",
    description: "Avant de penser offre ou client, tu dois savoir ce que tu veux construire, pourquoi tu le fais, et ce que tu refuses.",
    duration: "1 semaine",
    icon: FaBullseye,
    color: "#9F99EB",
    tips: [
      "Évite de te lancer sans vision claire",
      "Ne néglige pas tes valeurs personnelles",
      "Pense à long terme, pas seulement au court terme"
    ],
    tasks: [
      "Écrire 3 raisons profondes qui te poussent à entreprendre",
      "Définir ton idéal de vie dans 3 ans (revenus, temps libre, impact)",
      "Lister 3 choses que tu refuses absolument de faire",
      "Créer une page 'vision' avec tes valeurs et tes non-négociables"
    ],
    successCriteria: "Tu peux expliquer ta vision en 2 minutes à n'importe qui"
  },
  {
    phase: "ÉTAPE 2",
    title: "Choisis une cible et un problème solvable",
    subtitle: "Le point de départ de ta vente",
    description: "Arrête de réfléchir à ce que tu veux vendre. Commence par identifier à qui.",
    duration: "1 semaine",
    icon: FaUsers,
    color: "#99E5EB",
    tips: [
      "Privilégie une cible qui a les moyens de payer",
      "Vérifie que le problème est récurrent et urgent",
      "Assure-toi que la solution est réalisable"
    ],
    tasks: [
      "Identifier 3 segments de clients avec un budget >1000€/mois",
      "Conduire 5 interviews pour valider un problème récurrent",
      "Vérifier que le problème coûte >500€/mois à tes clients",
      "Valider que la solution peut être livrée en <1 mois"
    ],
    successCriteria: "Tu as identifié une cible qui peut payer et un problème qui mérite d'être résolu"
  },
  {
    phase: "ÉTAPE 3",
    title: "Crée une offre simple, vendable et claire",
    subtitle: "L'art de la simplicité",
    description: "Pas besoin d'une formation. Pas besoin d'un site. Tu veux signer ? Propose une transformation en 1 phrase.",
    duration: "1 semaine",
    icon: FaRocket,
    color: "#9B8E7D",
    tips: [
      "Une offre simple se vend mieux qu'une offre complexe",
      "Le prix doit refléter la valeur perçue",
      "Un résultat tangible est plus vendeur qu'une promesse vague"
    ],
    tasks: [
      "Définir 1 résultat tangible et mesurable pour le client",
      "Créer 1 livrable concret qui résout le problème",
      "Fixer un prix entre 500€ et 2000€",
      "Écrire l'offre en 3 phrases maximum"
    ],
    successCriteria: "Un enfant de 10 ans comprend ton offre"
  },
  {
    phase: "ÉTAPE 4",
    title: "Pitch en 1 phrase qui percute",
    subtitle: "Le pouvoir des mots",
    description: "Si tu ne sais pas pitcher ton offre en 1 phrase, personne n'ira lire la suite.",
    duration: "1 semaine",
    icon: FaComments,
    color: "#9F99EB",
    tips: [
      "Utilise des mots simples et concrets",
      "Évite le jargon et les termes techniques",
      "Mets l'accent sur le bénéfice, pas sur les fonctionnalités"
    ],
    tasks: [
      "Créer 5 versions de ton one-liner",
      "Tester chaque version sur 3 personnes différentes",
      "Mesurer le taux de 'Ah oui, je comprends !'",
      "Affiner jusqu'à avoir 80% de compréhension immédiate"
    ],
    successCriteria: "Les gens comprennent immédiatement ce que tu fais"
  },
  {
    phase: "ÉTAPE 5",
    title: "Parle à 30 personnes",
    subtitle: "La puissance du contact direct",
    description: "Tu veux vendre ? Parle à des gens. Maintenant. Oublie les posts. Oublie l'algo.",
    duration: "1 semaine",
    icon: FaUsers,
    color: "#99E5EB",
    tips: [
      "La personnalisation est la clé du succès",
      "Un message par heure évite le spam",
      "Note toutes les objections pour améliorer ton pitch"
    ],
    tasks: [
      "Lister 50 prospects sur LinkedIn",
      "Envoyer 30 messages personnalisés (1 par heure)",
      "Booker 5 calls de 15 minutes",
      "Noter les objections et les questions récurrentes"
    ],
    successCriteria: "Tu as au moins 5 conversations engagées"
  },
  {
    phase: "ÉTAPE 6",
    title: "Fait un call = Vend un call",
    subtitle: "L'art de la vente consultative",
    description: "Tu ne vends pas ton offre. Tu vends un diagnostic. Ton job c'est d'écouter, structurer la douleur, poser les bonnes questions.",
    duration: "1 semaine",
    icon: FaComments,
    color: "#9B8E7D",
    tips: [
      "Écoute plus que tu ne parles",
      "Pose des questions ouvertes",
      "Structure la douleur avant de proposer une solution"
    ],
    tasks: [
      "Préparer 5 questions qui révèlent la douleur",
      "Réaliser 3 appels de 15 minutes",
      "Closer au moins 1 personne sur un diagnostic",
      "Affiner le processus de vente basé sur les retours"
    ],
    successCriteria: "Tu as vendu au moins un diagnostic"
  },
  {
    phase: "ÉTAPE 7",
    title: "Récupère de la preuve sociale",
    subtitle: "Le pouvoir des témoignages",
    description: "Tu n'as pas besoin d'un portfolio. Tu as besoin d'un témoignage puissant.",
    duration: "1 semaine",
    icon: FaStar,
    color: "#9F99EB",
    tips: [
      "Demande des témoignages spécifiques",
      "Inclus des chiffres et des résultats concrets",
      "Utilise différents formats (vidéo, texte, audio)"
    ],
    tasks: [
      "Travailler avec 2 clients stratégiques",
      "Obtenir des résultats mesurables",
      "Collecter des témoignages vidéo ou écrits",
      "Créer des case studies avec des chiffres concrets"
    ],
    successCriteria: "Tu as au moins 2 témoignages puissants"
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
            Roadmap<br />0€ – 10k€
          </h1>
          <p className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
            Un plan de guerre en 30 jours pour encaisser tes premiers euros sérieusement
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
                    <FaLightbulb className="text-xl md:text-2xl text-white" />
                  </div>
                  <h2 className={`${anton.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFF1DE] text-center md:text-left`}>
                    T'as rien vendu ?
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Parfait. Ça veut dire : pas de mauvaises habitudes, pas de système à désapprendre, pas de tunnels qui partent dans tous les sens.
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      En 30 jours, tu vas poser les 7 briques fondamentales de ton business. Pas une formation. Pas des posts. Un plan de guerre pour encaisser tes premiers euros sérieusement.
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
                      <step.icon className={`text-lg md:text-xl ${activeStep === index ? 'text-white' : 'text-[#9F99EB]'}`} />
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
                        <step.icon className={`text-lg md:text-xl ${activeStep === index ? 'text-white' : 'text-[#9F99EB]'}`} />
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
                        <IconComponent className="text-2xl md:text-3xl" style={{ color: roadmapSteps[activeStep].color }} />
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
                      <FaClock className="text-lg md:text-xl" />
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
                    <FaStar className="text-3xl md:text-4xl text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className={`${archivo.className} text-2xl md:text-3xl text-[#FFF1DE]`}>Anna, ex-graphiste en agence</h3>
                    <p className={`${montserrat.className} text-gray-300 text-base md:text-lg`}>Transformation en 21 jours</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Avant</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        0 client
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        0 réseau
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Expertise en design
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#9F99EB]"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Actions</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Cible : coachs
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Offre : 600€
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        25 messages LinkedIn
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        6 calls bookés
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Résultats</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        2 ventes en 21 jours
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        3 prospects actifs
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Offre validée
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
                  Prêt à transformer ton business ?
                </h2>
                <p className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto`}>
                  Rejoins-nous dès maintenant et commence ton parcours vers le succès
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