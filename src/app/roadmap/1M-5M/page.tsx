'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaLightbulb, FaChartLine, FaClock, FaBullseye, FaUsers, FaComments, FaCheckCircle, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { anton, archivo, montserrat } from '@/app/fonts';
import { IconBaseProps } from 'react-icons';

interface RoadmapStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: React.ComponentType<IconBaseProps>;
  color: string;
  tips: string[];
  tasks: string[];
  successCriteria: string;
}

const roadmapSteps: RoadmapStep[] = [
  {
    phase: "ÉTAPE 1",
    title: "Installe un comité de direction hebdo",
    subtitle: "Le pilotage collectif",
    description: "Tu ne dois plus centraliser la décision. Tu dois créer un cercle qui prend le relais, qui suit, qui corrige.",
    duration: "1 semaine",
    icon: FaUsers,
    color: "#9F99EB",
    tips: [
      "Réunis ton COO, ton Head of Delivery, ton Head of Acquisition",
      "Mène une Weekly Business Review de 30 min tous les lundis",
      "Module : 5.7 – CEO Ops Circle"
    ],
    tasks: [
      "Créer le comité",
      "Définir l'agenda",
      "Mettre en place le suivi",
      "Mesurer l'efficacité"
    ],
    successCriteria: "Tu as un comité de direction opérationnel"
  },
  {
    phase: "ÉTAPE 2",
    title: "Rédige ta vision à 3 ans",
    subtitle: "Le cap stratégique",
    description: "Tu ne dois plus penser au trimestre. Tu dois penser au cap. Les chiffres, les projets, les produits : tu les alignes sur une direction.",
    duration: "1 semaine",
    icon: FaBullseye,
    color: "#99E5EB",
    tips: [
      "Écris une vision 3 ans claire (positionnement, impact, équipe, offre)",
      "Découpe-la en plan d'action annuel avec jalons trimestriels",
      "Module : 5.8 – Vision + Roadmap annuelle"
    ],
    tasks: [
      "Définir la vision",
      "Créer le plan d'action",
      "Fixer les jalons",
      "Communiquer la vision"
    ],
    successCriteria: "Tu as une vision claire et un plan d'action"
  },
  {
    phase: "ÉTAPE 3",
    title: "Structure ta culture d'entreprise",
    subtitle: "Les fondations culturelles",
    description: "Tu ne peux pas tout contrôler. Mais tu peux influencer comment les gens pensent, réagissent, prennent des décisions.",
    duration: "1 semaine",
    icon: FaStar,
    color: "#9B8E7D",
    tips: [
      "Formalise 5 à 7 principes internes non négociables",
      "Rappelle-les chaque semaine dans tes rituels",
      "Module : 5.9 – Culture & Leadership"
    ],
    tasks: [
      "Définir les principes",
      "Créer les rituels",
      "Former l'équipe",
      "Mesurer l'impact"
    ],
    successCriteria: "Tu as une culture d'entreprise forte"
  },
  {
    phase: "ÉTAPE 4",
    title: "Clarifie tous les rôles internes",
    subtitle: "L'organisation claire",
    description: "Tu ne veux plus de flou. Chaque rôle doit être clair, mesuré, responsabilisé.",
    duration: "1 semaine",
    icon: FaChartLine,
    color: "#9F99EB",
    tips: [
      "Crée un org chart propre",
      "Associe à chaque rôle une fiche mission + 3 KPIs + un canal de reporting",
      "Module : 5.3 – RACI + Org-Chart"
    ],
    tasks: [
      "Créer l'org chart",
      "Définir les missions",
      "Fixer les KPIs",
      "Mettre en place le reporting"
    ],
    successCriteria: "Tu as une organisation claire et mesurée"
  },
  {
    phase: "ÉTAPE 5",
    title: "Prépare une expansion externe",
    subtitle: "La croissance maîtrisée",
    description: "Tu veux scaler sans charger l'interne ? Pense spin-off, partenaires, M&A, ou licencing.",
    duration: "1 semaine",
    icon: FaRocket,
    color: "#99E5EB",
    tips: [
      "Choisis un levier d'expansion externe à prototyper",
      "Ex : relancer une vieille offre avec un partenaire, ou lancer un produit adjacent",
      "Module : 6.5 – Scale externe"
    ],
    tasks: [
      "Identifier les leviers",
      "Créer le prototype",
      "Tester le marché",
      "Mesurer les résultats"
    ],
    successCriteria: "Tu as un levier d'expansion validé"
  },
  {
    phase: "ÉTAPE 6",
    title: "Mets en place un reporting mensuel",
    subtitle: "Le pilotage stratégique",
    description: "Tu pilotes au quotidien, mais tu veux de la vision. Le reporting mensuel = lecture à froid + décisions stratégiques.",
    duration: "1 semaine",
    icon: FaChartLine,
    color: "#9B8E7D",
    tips: [
      "Crée un tableau de bord PDF ou Notion auto-rempli chaque mois",
      "Y suivre : MRR, marge, leads, NPS, churn, cashflow",
      "Module : 5.1 – KPI Advanced"
    ],
    tasks: [
      "Créer le dashboard",
      "Définir les KPIs",
      "Automatiser le reporting",
      "Analyser les données"
    ],
    successCriteria: "Tu as un reporting mensuel opérationnel"
  },
  {
    phase: "ÉTAPE 7",
    title: "Sécurise la marge et le cash",
    subtitle: "La profitabilité stratégique",
    description: "Le risque maintenant, ce n'est pas l'échec. C'est la croissance non rentable.",
    duration: "1 semaine",
    icon: FaLightbulb,
    color: "#9F99EB",
    tips: [
      "Fixe une marge nette cible",
      "Établis ton seuil de sécurité cash + ton plan d'investissement à 6 mois",
      "Module : 6.3 – Profitabilité stratégique"
    ],
    tasks: [
      "Définir les objectifs",
      "Créer le plan",
      "Mettre en place les contrôles",
      "Mesurer la performance"
    ],
    successCriteria: "Tu as une marge et un cash sécurisés"
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
            Roadmap<br />1M€ – 5M€
          </h1>
          <p className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed`}>
            Du fondateur opérationnel au dirigeant architecte
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
                    Tu n'as plus un business ?
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Tu as une structure. Un système. Une équipe. Mais tu es toujours le point de tension principal. Tu veux de l'expansion. Mais pas au prix du chaos. Tu cherches de la profondeur, de la marge, de la paix.
                    </p>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5">
                    <p className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed`}>
                      Ce palier, c'est le vrai passage au rôle de dirigeant-architecte. Tu ne travailles plus dans la boîte. Tu composes autour d'elle.
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
                      <FaClock size={24} className="text-lg md:text-xl" />
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
                    <h3 className={`${archivo.className} text-2xl md:text-3xl text-[#FFF1DE]`}>Amine, fondateur d'un cabinet de conseil en croissance</h3>
                    <p className={`${montserrat.className} text-gray-300 text-base md:text-lg`}>Transformation en 12 mois</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Avant</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        1,2M€/an
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Croissance désorganisée
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Pas de structure
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#9F99EB]"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Actions</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Comité direction
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Org chart
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#9F99EB]"></div>
                        Produit spin-off
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(159,153,235,0.1)] transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                    <h4 className={`${anton.className} text-xl md:text-2xl text-white mb-4 md:mb-6`}>Résultats</h4>
                    <ul className={`${montserrat.className} text-gray-300 text-base md:text-lg space-y-3 md:space-y-4`}>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        3,8M€ en 12 mois
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Sans heures sup
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Équipe stable
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
                  Prêt à passer au niveau supérieur ?
                </h2>
                <p className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto`}>
                  Tu ne gagnes pas ce jeu en en faisant plus. Tu gagnes en pensant mieux, structurant mieux, en pilotant au bon niveau. Ce palier, tu le franchis en incarnant ton rôle de dirigeant.
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