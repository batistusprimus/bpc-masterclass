"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Anton, Archivo_Black, Montserrat } from "next/font/google";
import HeroAvatar from "@/components/HeroAvatar";

const anton = Anton({ weight: '400', subsets: ['latin'] });
const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const benefits = [
  {
    title: "Une machine à leads B2B qui génère des résultats concrets",
    description: "Nous analysons et optimisons chaque canal d'acquisition pour maximiser votre ROI, avec des leads qualifiés livrés chaque semaine.",
    icon: '🎯',
    highlight: "ROI garanti dès le premier mois"
  },
  {
    title: "Un processus de qualification qui garantit la qualité",
    description: "Chaque lead passe par notre système de scoring BANT + validation humaine, pour ne vous transmettre que des opportunités réelles.",
    icon: '📱',
    highlight: "Taux de conversion > 20%"
  },
  {
    title: "Une équipe d'experts dédiée à votre succès",
    description: "Un expert senior pilote votre compte et optimise en continu vos campagnes pour maximiser vos résultats.",
    icon: '✅',
    highlight: "Expert senior dédié"
  },
  {
    title: "Un reporting transparent et des résultats mesurables",
    description: "Dashboard en temps réel, rapports hebdomadaires et analyses détaillées pour suivre votre ROI et vos performances.",
    icon: '📊',
    highlight: "ROI mesuré en temps réel"
  }
];

const eligibilityCriteria = [
  {
    title: "CEO de boîtes B2B",
    description: "Entre 20k€ et 500k€/mois de chiffre d'affaires",
    icon: '👨‍💼'
  },
  {
    title: "Flux de leads régulier",
    description: "Sans gérer l'opérationnel au quotidien",
    icon: '📈'
  },
  {
    title: "Offre qui convertit",
    description: "Mais pas de système d'acquisition en place",
    icon: '🎯'
  },
  {
    title: "Scaler sans équipe interne",
    description: "Pas besoin d'équipe de growth dédiée",
    icon: '🚀'
  }
];

const pricingDetails = [
  {
    title: "Zéro risque, 100% résultats",
    description: "Aucun frais de setup. Aucun engagement. Vous ne payez que lorsque nous livrons des leads qualifiés, validés selon vos critères business.",
    icon: '🚀',
    color: '#9F99EB',
    highlight: "0€ à l'entrée",
    subHighlight: "Payez uniquement les leads validés"
  },
  {
    title: "Un CPL optimisé pour maximiser votre ROI",
    description: "Nous calibrons le coût par lead sur votre économie client pour garantir un retour sur investissement minimum de 5x dès le premier mois.",
    icon: '🎯',
    color: '#99E5EB',
    highlight: "ROI > 5x garanti",
    subHighlight: "CPL 2,5x inférieur au marché"
  },
  {
    title: "Une approche centrée sur votre croissance",
    description: "Nous augmentons progressivement le volume de leads tout en maintenant la qualité et le ROI, pour accompagner votre croissance.",
    icon: '💎',
    color: '#9F99EB',
    highlight: "Scaling garanti",
    subHighlight: "Volume adapté à vos objectifs"
  }
];

const processSteps = [
  {
    title: "Audit & Qualification",
    description: "Nous analysons votre marché, votre offre et votre processus de vente pour garantir un ROI optimal.",
    subDescription: "Vous ne déboursez rien tant que nous n'avons pas validé votre éligibilité.",
    icon: '🎯',
    color: '#9F99EB'
  },
  {
    title: "Stratégie & Déploiement",
    description: "Nous concevons et déployons une machine à leads sur-mesure, calibrée sur vos objectifs business.",
    subDescription: "En 48h, vos premières campagnes sont lancées sur les canaux les plus performants.",
    icon: '🚀',
    color: '#99E5EB'
  },
  {
    title: "Génération & Qualification",
    description: "Nous générons et qualifions chaque lead selon vos critères business, avec un taux de conversion garanti.",
    subDescription: "Chaque contact est validé par nos experts avant d'être transmis à vos équipes.",
    icon: '💎',
    color: '#9F99EB'
  },
  {
    title: "Livraison & Scaling",
    description: "Vous recevez chaque semaine des leads prêts à être closés, avec un reporting détaillé de vos performances.",
    subDescription: "Nous augmentons progressivement le volume tout en maintenant la qualité et le ROI.",
    icon: '📈',
    color: '#99E5EB'
  }
];

const profitableMarkets = [
  { vertical: 'SaaS B2B', ticket: '5000-15000€', volume: '50-100', cpl: '150-300€' },
  { vertical: 'Services IT', ticket: '8000-20000€', volume: '30-80', cpl: '200-400€' },
  { vertical: 'Conseil', ticket: '10000-25000€', volume: '20-50', cpl: '250-500€' },
  { vertical: 'Équipements Pro', ticket: '15000-30000€', volume: '15-40', cpl: '300-600€' }
];

const financialProjections = [
  {
    market: 'Conseil B2B / Agence experte',
    ticket: '7 000',
    ltv: '30 000',
    leads: '50',
    cpl: '80',
    clients: '10',
    revenue: '70 000',
    cost: '4 000',
    margin: '66 000',
    roi: 'x16,5'
  },
  {
    market: 'Formation professionnelle haut de gamme',
    ticket: '3 000',
    ltv: '10 000',
    leads: '50',
    cpl: '48',
    clients: '10',
    revenue: '30 000',
    cost: '2 400',
    margin: '27 600',
    roi: 'x12,5'
  },
  {
    market: 'SaaS B2B (ACV ≥ 10k€)',
    ticket: '10 000',
    ltv: '60 000',
    leads: '40',
    cpl: '100',
    clients: '8',
    revenue: '80 000',
    cost: '4 000',
    margin: '76 000',
    roi: 'x20,0'
  },
  {
    market: 'Services financiers B2B (Business Loans)',
    ticket: '8 000',
    ltv: '40 000',
    leads: '40',
    cpl: '120',
    clients: '8',
    revenue: '64 000',
    cost: '4 800',
    margin: '59 200',
    roi: 'x13,3'
  },
  {
    market: 'Immobilier off-market / prestige',
    ticket: '20 000',
    ltv: '100 000',
    leads: '20',
    cpl: '160',
    clients: '4',
    revenue: '80 000',
    cost: '3 200',
    margin: '76 800',
    roi: 'x25,0'
  }
];

const faqItems = [
  {
    question: "Comment garantissez-vous la qualité des leads ?",
    answer: "Chaque contact passe par (1) vérification email/téléphone, (2) scoring BANT + Urgence, (3) double validation humaine. Aucun lead ne part sans ces trois filtres."
  },
  {
    question: "Et si un lead est invalide ?",
    answer: "Nous appliquons une clause « lead mort » : tout contact qui ne répond pas aux critères convenus est remplacé ou déduit de la facture en fin de mois."
  },
  {
    question: "Combien vais-je payer exactement ?",
    answer: "Le coût par lead dépend de votre marché, de votre ticket moyen et du volume choisi. Vous recevez une grille claire avant de démarrer ; la facturation se fait uniquement sur les leads acceptés par vos équipes."
  },
  {
    question: "Quel engagement contractuel ?",
    answer: "Contrat initial : 3 mois. Passé ce délai, renouvellement mensuel tacite que vous pouvez stopper à tout moment avec un préavis de 30 jours."
  },
  {
    question: "Dois-je changer mon CRM ou mes outils ?",
    answer: "Non. Nous poussons les leads dans HubSpot, Salesforce, Pipedrive, GHL ou simple fichier CSV ; vous choisissez."
  },
  {
    question: "Qui se charge de closer les leads ?",
    answer: "Par défaut : votre équipe. En option, nous proposons un service de closing délégué (commission ou rev-share)."
  },
  {
    question: "Quels canaux utilisez-vous pour générer les leads ?",
    answer: "Mix inbound + outbound : SEO ciblé, contenu LinkedIn/YouTube, email prospecting, LinkedIn outreach et cold-call. Le mix exact dépend de votre vertical."
  },
  {
    question: "Combien de temps avant les premiers résultats ?",
    answer: "3 à 10 jours après le kick-off : premiers leads validés dans votre CRM. Volume nominal atteint sous 30 jours."
  }
];

const clientAvatars = [
  { name: "Jean-Michel", avatar: "/jean_michel_ly_v2.png" },
  { name: "Caroline", avatar: "/Caroline rousset.jpg" },
  { name: "Yann", avatar: "/Yann Grosjean.jpeg" },
  { name: "Anais", avatar: "/anais-remaoun.webp" },
  { name: "Samantha", avatar: "/Samantha Piat.jpeg" },
  { name: "Giacomo", avatar: "/Giacomo Genna.jpeg" },
  { name: "Joris", avatar: "/Joris Genty.jpeg" },
  { name: "Thierry", avatar: "/Thierry Lorfils .jpg" },
  { name: "Axelle", avatar: "/Axelle Guer .jpeg" },
  { name: "Floriane", avatar: "/Floriane Bobée.jpeg" }
];

const clientLogos = [
  { src: "/66586da221e592872a514716_ecf4541d-3c8f-4731-ace6-7f59afa16df4.png", alt: "Lugs", bg: "bg-gradient-to-br from-[#3a5d5d] to-[#6bbfae]" },
  { src: "/66586f5324a5f96213323991_e06827a1-d54d-4cff-8f39-d480a4d23967.png", alt: "Linkup Coaching", bg: "bg-[#2563eb]" },
  { src: "/665871bc5f8d9b87ce190b59_1443ebad-ae25-4240-b1e3-1bf8bf237c3a.png", alt: "Welcome to the Jungle", bg: "bg-[#ffd600]" },
  { src: "/665876e344b512bddc35112e_77189863-0a3b-48f3-9b9d-cf294d14d568.png", alt: "BeTech", bg: "bg-[#e0d7ff]" },
  { src: "/6658731f8227b6b6a4bca138_739e49c5-fdf8-4988-8417-7502d47f2c53.png", alt: "YouLoveWords", bg: "bg-[#2196f3]" },
  { src: "/6658713033c7316a7e38d620_548af79d-89fc-4542-a939-4eb1fabae0c8.png", alt: "Scale Up", bg: "bg-[#ffb877]" },
];

export default function BPCPPLPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    revenue: "",
    ticket: "",
    offer: "",
    objectives: {
      moreLeads: false,
      moreMeetings: false,
      optimizeAcquisition: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasObjective = Object.values(formData.objectives).some(value => value);
    if (!hasObjective) {
      alert("Veuillez sélectionner au moins un objectif");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <main className={`min-h-screen bg-black ${montserrat.className}`}>
      {/* Hero Section */}
      <section className="relative bg-black text-[#FFF1DE] min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1A1A]"></div>
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#9F99EB10,#1A1A1A_70%)]"></div>
          <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-br from-[#9F99EB]/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#99E5EB]/5 via-transparent to-transparent"></div>
          
          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#9F99EB05_1px,transparent_1px),linear-gradient(to_bottom,#9F99EB05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[80px] opacity-5 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#99E5EB] rounded-full mix-blend-multiply filter blur-[100px] opacity-5 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            {/* Left Column - Content */}
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
              className="relative"
          >
              {/* Decorative Elements */}
              <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-[#9F99EB] via-[#99E5EB] to-transparent"></div>
              <div className="absolute -left-2 top-0 w-1 h-16 bg-[#9F99EB] opacity-50"></div>

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9F99EB]/10 to-[#99E5EB]/10 border border-[#9F99EB]/20 text-[#9F99EB] text-sm font-medium mb-10 backdrop-blur-sm"
            >
                <span className="w-2 h-2 rounded-full bg-[#9F99EB] mr-2 animate-pulse"></span>
                <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">Pay Per Lead B2B</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`${anton.className} text-5xl md:text-6xl lg:text-7xl mb-10 text-[#FFF1DE] leading-[1.1]`}
            >
              Vous payez uniquement
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">pour des leads</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-3 bg-[#9F99EB]/10 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
              <br />
              <span className="text-[#FFF1DE]">qualifiés.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${archivoBlack.className} text-xl md:text-2xl mb-12 text-[#9B8E7D] space-y-4`}
            >
              <p className="text-[#FFF1DE]">Aucun frais de setup. Aucun engagement inutile.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  { label: 'SaaS B2B', icon: '💻' },
                  { label: 'Business Loans', icon: '💰' },
                  { label: 'Conseil B2B', icon: '🎯' }
                ].map((target, index) => (
                  <span 
                    key={index}
                    className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-br from-[#9F99EB]/5 to-[#99E5EB]/5 border border-[#9F99EB]/10 text-[#FFF1DE] hover:border-[#9F99EB]/30 hover:from-[#9F99EB]/10 hover:to-[#99E5EB]/10 transition-all duration-300 shadow-sm hover:shadow-[#9F99EB]/5"
                  >
                    <span className="text-base">{target.icon}</span>
                    <span className="relative z-10">{target.label}</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9F99EB]/0 via-[#9F99EB]/0 to-[#9F99EB]/0 group-hover:from-[#9F99EB]/5 group-hover:via-[#9F99EB]/10 group-hover:to-[#9F99EB]/5 transition-all duration-300"></div>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-start space-y-10"
            >
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-10 py-5 text-lg font-medium rounded-xl text-[#FFF1DE] overflow-hidden"
              >
                {/* Button background */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] transition-transform group-hover:scale-105"></span>
                <span className="absolute inset-0 bg-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></span>
                
                {/* Button content */}
                <span className="relative flex items-center">
                  Vérifier mon éligibilité
                  <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {clientAvatars.slice(0, 8).map((client, index) => (
                      <HeroAvatar
                        key={index}
                        name={client.name}
                        avatar={client.avatar}
                        index={index}
                      />
                    ))}
                    <HeroAvatar
                      name="Plus"
                      avatar=""
                      index={8}
                      isLast={true}
                      extraText="+200"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Floating Cards Container */}
              <div className="relative h-full flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9F99EB05_0%,transparent_70%)]"></div>
                
                {/* Floating Cards */}
                {[
                  {
                    icon: "🎯",
                    title: "Leads Qualifiés",
                    description: "Scoring BANT + Validation humaine",
                    position: "top-1/4 -left-10",
                    animation: { y: [0, -20, 0] },
                    delay: 0
                  },
                  {
                    icon: "💰",
                    title: "Pay Per Lead",
                    description: "Facturation uniquement sur les leads validés",
                    position: "top-1/2 -right-10",
                    animation: { y: [0, 20, 0] },
                    delay: 1
                  },
                  {
                    icon: "📈",
                    title: "ROI Garanti",
                    description: "CPL inférieur à votre coût d'acquisition",
                    position: "bottom-1/4 left-1/4",
                    animation: { y: [0, -15, 0] },
                    delay: 2
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    animate={card.animation}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                    className={`absolute ${card.position} w-72 h-48 bg-gradient-to-br from-[#1A1A1A] to-[#242424] rounded-2xl border border-[#9F99EB]/10 p-8 shadow-xl backdrop-blur-sm hover:border-[#9F99EB]/20 transition-all duration-300 group`}
                  >
                    <div className="relative">
                      {/* Card Background Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#9F99EB]/10 to-[#99E5EB]/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Card Content */}
                      <div className="relative">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{card.icon}</div>
                        <h3 className="text-[#FFF1DE] font-medium mb-2 text-lg">{card.title}</h3>
                        <p className="text-[#9B8E7D] text-sm leading-relaxed">{card.description}</p>
              </div>
              </div>
                  </motion.div>
                ))}

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#9F99EB]/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#9F99EB]/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#9F99EB]/5"></div>
              </div>
          </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#9F99EB]/50 flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-gradient-to-b from-[#9F99EB] to-[#99E5EB] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1A1A]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#9F99EB05,#1A1A1A_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9F99EB]/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9F99EB]/5 border border-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F99EB] mr-2"></span>
                Notre expertise
              </div>
              <h2 className={`${anton.className} text-4xl md:text-5xl mb-8 text-[#FFF1DE] leading-tight`}>
                Une machine à leads B2B
                <br />
                <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">qui génère des résultats concrets</span>
              </h2>
              <p className={`${archivoBlack.className} text-xl md:text-2xl mb-8 text-[#9B8E7D] max-w-3xl mx-auto`}>
                Nous transformons votre acquisition B2B avec un processus éprouvé qui garantit des leads qualifiés et un ROI optimal.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 md:gap-6 lg:gap-8"
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#9F99EB]/30 to-[#99E5EB]/30 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl shadow-md">
                    {benefit.icon}
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className={`${archivoBlack.className} text-lg md:text-xl lg:text-2xl mb-2 font-bold text-[#FFF1DE]`}>
                      {benefit.title}
                    </h3>
                    <p className="text-[#9B8E7D] text-base md:text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                    <p className="text-[#9B8E7D] text-lg font-medium italic">{benefit.highlight}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bande de logos clients amélioré (logos nus, défilement continu, fade sur les bords) */}
      <div className="relative py-8 md:py-12 overflow-hidden">
        {/* Fond dégradé subtil */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#181a1f] via-[#23272f] to-[#181a1f] opacity-90 pointer-events-none" />
        {/* Fade sur les bords */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-24 z-10" style={{background: "linear-gradient(to right, #181a1f 80%, transparent)"}} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-24 z-10" style={{background: "linear-gradient(to left, #181a1f 80%, transparent)"}} />
        {/* Bandeau logos */}
        <div className="relative z-10 overflow-x-hidden">
          <div className="flex flex-nowrap gap-12 md:gap-20 animate-logo-scroll items-center" style={{ minWidth: '900px' }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                draggable="false"
                className="h-12 md:h-20 w-auto object-contain select-none mx-6 md:mx-8"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A1A1A] to-black opacity-50"></div>
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#99E5EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFF1DE] mb-2">
                Nous travaillons avec&nbsp;:
              </h2>
              <p className="text-lg md:text-xl text-[#9B8E7D] max-w-2xl mx-auto">
                Des entreprises B2B structurées, en phase de croissance, qui souhaitent fiabiliser et accélérer leur acquisition de leads.
              </p>
            </motion.div>

            {/* Eligibility Grid - ultra épuré, moderne, sans case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {/* Critère 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9F99EB]/20 to-[#99E5EB]/20 flex items-center justify-center text-4xl text-[#9F99EB]">
                  👨‍💼
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#FFF1DE] mb-1">Entreprise B2B</h3>
                  <p className="text-base md:text-lg text-[#9B8E7D]">CA récurrent entre 20k€ et 500k€/mois</p>
                </div>
              </motion.div>
              {/* Critère 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9F99EB]/20 to-[#99E5EB]/20 flex items-center justify-center text-4xl text-[#9F99EB]">
                  📈
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#FFF1DE] mb-1">Flux de leads existant</h3>
                  <p className="text-base md:text-lg text-[#9B8E7D]">Mais besoin d'augmenter la qualité ou le volume</p>
                </div>
              </motion.div>
              {/* Critère 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9F99EB]/20 to-[#99E5EB]/20 flex items-center justify-center text-4xl text-[#9F99EB]">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#FFF1DE] mb-1">Offre validée par le marché</h3>
                  <p className="text-base md:text-lg text-[#9B8E7D]">Taux de conversion satisfaisant, mais acquisition à structurer</p>
                </div>
              </motion.div>
              {/* Critère 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9F99EB]/20 to-[#99E5EB]/20 flex items-center justify-center text-4xl text-[#9F99EB]">
                  🚀
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#FFF1DE] mb-1">Pas d'équipe growth interne</h3>
                  <p className="text-base md:text-lg text-[#9B8E7D]">Vous souhaitez externaliser l'acquisition pour vous concentrer sur le closing</p>
                </div>
              </motion.div>
            </div>

            {/* CTA modernisé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-[#9F99EB] text-lg font-semibold rounded-lg text-[#FFF1DE] bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] hover:bg-transparent hover:text-[#9F99EB] transition-all duration-300 shadow-lg hover:shadow-[#9F99EB]/10"
              >
                Vérifier mon éligibilité
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A1A1A] to-black opacity-50"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#99E5EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9F99EB]/5 border border-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F99EB] mr-2"></span>
                Tarification transparente
              </div>
              <h2 className={`${anton.className} text-4xl md:text-5xl mb-8 text-[#FFF1DE] leading-tight`}>
                Un modèle de tarification
                <br />
                <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">aligné sur vos résultats</span>
              </h2>
              <p className={`${archivoBlack.className} text-xl md:text-2xl mb-8 text-[#9B8E7D] max-w-3xl mx-auto`}>
                Nous ne gagnons que lorsque vous gagnez. Notre modèle de tarification garantit un ROI optimal dès le premier mois.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pricingDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#242424] rounded-2xl border border-[#9B8E7D]/20 group-hover:border-[#9F99EB]/40 transition-all duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Highlight Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#9F99EB]/10 to-[#99E5EB]/10 border border-[#9F99EB]/20 text-[#9F99EB] text-sm font-medium mb-6">
                      {detail.highlight}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${detail.color}20`, border: `2px solid ${detail.color}` }}
                    >
                      {detail.icon}
                    </div>

                    {/* Content */}
                    <h3 className={`${archivoBlack.className} text-xl mb-4 text-[#FFF1DE] group-hover:text-[#9F99EB] transition-colors`}>
                      {detail.title}
                    </h3>
                    <p className="text-[#9B8E7D] text-lg flex-grow">
                      {detail.description}
                    </p>
                    <p className="text-[#9B8E7D] text-lg font-medium italic">{detail.subHighlight}</p>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#9F99EB]/5 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="bg-[#1A1A1A] p-8 rounded-2xl border-2 border-[#9F99EB] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9F99EB05_0%,transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9F99EB] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">💡</span>
                    <div>
                      <h4 className={`${archivoBlack.className} text-xl mb-2 text-[#FFF1DE]`}>
                        Une approche centrée sur votre ROI
                      </h4>
                      <p className="text-[#9B8E7D] text-lg">
                        Nous calibrons le coût par lead sur votre économie client pour garantir un retour sur investissement positif dès le premier mois. Notre modèle de tarification est conçu pour s'aligner parfaitement sur vos objectifs business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-[#9F99EB] text-lg font-medium rounded-xl text-[#FFF1DE] bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] hover:bg-transparent hover:text-[#9F99EB] transition-all duration-300 shadow-lg hover:shadow-[#9F99EB]/10"
              >
                Calculer mon ROI potentiel
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#1A1A1A] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9F99EB]/5 border border-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F99EB] mr-2"></span>
                Notre processus
              </div>
              <h2 className={`${anton.className} text-4xl md:text-5xl mb-8 text-[#FFF1DE] leading-tight`}>
                De votre besoin à vos
                <br />
                <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">premiers leads qualifiés</span>
                <br />
                <span className="text-[#FFF1DE]">en moins de 7 jours</span>
              </h2>
              <p className={`${archivoBlack.className} text-xl md:text-2xl mb-8 text-[#9B8E7D] max-w-3xl mx-auto`}>
                Un processus éprouvé qui garantit des résultats concrets et un ROI optimal dès le premier mois.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-[#1A1A1A] border-2 border-[#9F99EB] rounded-full flex items-center justify-center text-[#FFF1DE] font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#9B8E7D] hover:border-[#9F99EB] transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center text-4xl"
                        style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}` }}
                      >
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className={`${archivoBlack.className} text-2xl mb-4 text-[#FFF1DE] group-hover:text-[#9F99EB] transition-colors`}>
                          {step.title}
                        </h3>
                        <p className="text-[#9B8E7D] text-lg mb-3">
                          {step.description}
                        </p>
                        {step.subDescription && (
                          <p className="text-[#FFF1DE] text-lg font-medium italic">
                            {step.subDescription}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-3 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#9F99EB] to-[#99E5EB] opacity-50"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-block bg-[#1A1A1A] p-6 rounded-lg border border-[#9F99EB]">
                <p className={`${archivoBlack.className} text-xl text-[#FFF1DE] mb-4`}>
                  Prêt à recevoir vos premiers leads qualifiés ?
                </p>
                <a
                  href="https://app.iclosed.io/e/baptistepiocelle/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 border-2 border-[#9F99EB] text-base font-medium rounded-md text-[#FFF1DE] hover:bg-[#9F99EB] hover:text-black transition-colors"
                >
                  Démarrer maintenant
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Projections Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#1A1A1A] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#99E5EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9F99EB]/5 border border-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F99EB] mr-2"></span>
                Projections financières
              </div>
              <h2 className={`${anton.className} text-4xl md:text-5xl mb-8 text-[#FFF1DE] leading-tight`}>
                Des résultats concrets
                <br />
                <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">avec un ROI garanti</span>
              </h2>
              <p className={`${archivoBlack.className} text-xl md:text-2xl mb-8 text-[#9B8E7D] max-w-3xl mx-auto`}>
                Exemples de projections par marché, basées sur un taux de conversion de 20% et un CPL optimisé.
              </p>
            </motion.div>

            {/* Projections Container */}
            <div className="bg-[#1A1A1A] rounded-2xl border border-[#9B8E7D]/20 overflow-hidden mb-12">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <div className="min-w-[1200px]">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#9F99EB]/10 to-[#99E5EB]/10">
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>Marché cible</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>Ticket moyen (€)</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>LTV client (€)</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>Leads / mois</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>CPL optimisé (€)</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>Clients signés*</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>CA direct (€)</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>Coût leads (€)</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#FFF1DE]`}>Marge nette (€)</th>
                        <th className={`${archivoBlack.className} px-6 py-4 text-left text-[#9F99EB]`}>ROI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#9B8E7D]/10">
                      {financialProjections.map((projection, index) => (
                        <tr key={index} className="group hover:bg-[#242424]/50 transition-colors duration-300">
                          <td className="px-6 py-4 text-[#FFF1DE] font-medium group-hover:text-[#9F99EB] transition-colors">{projection.market}</td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.ticket}</td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.ltv}</td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.leads}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium">
                              {projection.cpl}€
                            </span>
                          </td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.clients}</td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.revenue}</td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.cost}</td>
                          <td className="px-6 py-4 text-[#FFF1DE]">{projection.margin}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#9F99EB]/20 to-[#99E5EB]/20 text-[#9F99EB] font-bold">
                              {projection.roi}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4 p-4">
                {financialProjections.map((projection, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#242424] rounded-xl p-6 border border-[#9B8E7D]/20"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`${archivoBlack.className} text-lg text-[#FFF1DE]`}>
                        {projection.market}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#9F99EB]/20 to-[#99E5EB]/20 text-[#9F99EB] font-bold text-sm">
                        {projection.roi}
                      </span>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1">
                        <p className="text-sm text-[#9B8E7D]">Ticket moyen</p>
                        <p className="text-[#FFF1DE] font-medium">{projection.ticket}€</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-[#9B8E7D]">LTV client</p>
                        <p className="text-[#FFF1DE] font-medium">{projection.ltv}€</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-[#9B8E7D]">Leads / mois</p>
                        <p className="text-[#FFF1DE] font-medium">{projection.leads}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-[#9B8E7D]">CPL optimisé</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium">
                          {projection.cpl}€
                        </span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-[#1A1A1A] rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-[#9B8E7D]">Clients signés*</p>
                        <p className="text-[#FFF1DE] font-medium">{projection.clients}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-[#9B8E7D]">CA direct</p>
                        <p className="text-[#FFF1DE] font-medium">{projection.revenue}€</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-[#9B8E7D]">Coût leads</p>
                        <p className="text-[#FFF1DE] font-medium">{projection.cost}€</p>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-[#9B8E7D]/10">
                        <p className="text-sm text-[#9B8E7D]">Marge nette</p>
                        <p className="text-[#9F99EB] font-bold">{projection.margin}€</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Note and Explanation */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] p-6 rounded-xl border border-[#9B8E7D]/20"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">ℹ️</span>
                  <div>
                    <h4 className={`${archivoBlack.className} text-lg mb-2 text-[#FFF1DE]`}>
                      Hypothèses de calcul
                    </h4>
                    <ul className="space-y-2 text-[#9B8E7D]">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Taux de conversion : 20% (à ajuster selon vos chiffres)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>CPL optimisé : 2,5x inférieur au marché</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Volume mensuel de leads qualifiés</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] p-6 rounded-xl border border-[#9B8E7D]/20"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className={`${archivoBlack.className} text-lg mb-2 text-[#FFF1DE]`}>
                      Comment lire ces projections ?
                    </h4>
                    <ul className="space-y-2 text-[#9B8E7D]">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Remplacez les valeurs par vos chiffres réels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Nous adaptons le CPL et le volume</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Le ROI se calcule automatiquement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="bg-[#1A1A1A] p-8 rounded-2xl border-2 border-[#9F99EB] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9F99EB05_0%,transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9F99EB] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">🎯</span>
                    <div>
                      <h4 className={`${archivoBlack.className} text-xl mb-2 text-[#FFF1DE]`}>
                        Un CPL optimisé pour maximiser votre ROI
                      </h4>
                      <p className="text-[#9B8E7D] text-lg">
                        Notre approche unique nous permet de générer des leads qualifiés à un coût 2,5 fois inférieur au marché, garantissant un retour sur investissement exceptionnel dès le premier mois.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className={`${archivoBlack.className} text-xl mb-6 text-[#FFF1DE]`}>
                Prêt à calculer votre ROI potentiel ?
              </p>
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-[#9F99EB] text-lg font-medium rounded-xl text-[#FFF1DE] bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] hover:bg-transparent hover:text-[#9F99EB] transition-all duration-300 shadow-lg hover:shadow-[#9F99EB]/10"
              >
                Calculer mon ROI personnalisé
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section - Remplacé par un CTA */}
      <section id="form" className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A1A1A] to-black opacity-50"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className={`${anton.className} text-4xl md:text-5xl mb-6 text-[#FFF1DE]`}>
                Prêt à démarrer ?
              </h2>
              <p className={`${archivoBlack.className} text-xl text-[#9B8E7D] max-w-2xl mx-auto`}>
                Répondez à quelques questions rapides pour vérifier votre éligibilité et calculer votre ROI potentiel.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-[#9F99EB] text-lg font-medium rounded-xl text-[#FFF1DE] bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] hover:bg-transparent hover:text-[#9F99EB] transition-all duration-300 shadow-lg hover:shadow-[#9F99EB]/10"
              >
                Vérifier mon éligibilité
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <p className="mt-4 text-sm text-[#9B8E7D]">
                Réponse sous 24 h. Aucun engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1A1A]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#9F99EB05,#1A1A1A_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9F99EB]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9F99EB]/5 border border-[#9F99EB]/10 text-[#9F99EB] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9F99EB] mr-2"></span>
                Questions fréquentes
              </div>
              <h2 className={`${anton.className} text-4xl md:text-5xl mb-8 text-[#FFF1DE] leading-tight`}>
                Tout ce que vous devez savoir
                <br />
                <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">sur notre service</span>
              </h2>
              <p className={`${archivoBlack.className} text-xl md:text-2xl mb-8 text-[#9B8E7D] max-w-3xl mx-auto`}>
                Des réponses claires à vos questions sur notre approche de génération de leads qualifiés.
              </p>
            </motion.div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#242424] rounded-2xl border border-[#9B8E7D]/20 group-hover:border-[#9F99EB]/40 transition-all duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Question Icon */}
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-[#9F99EB]/10 to-[#99E5EB]/10 flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <span className="bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] bg-clip-text text-transparent">?</span>
                    </div>

                    {/* Question */}
                    <h3 className={`${archivoBlack.className} text-xl mb-4 text-[#FFF1DE] pr-16 group-hover:text-[#9F99EB] transition-colors`}>
                      {item.question}
                    </h3>

                    {/* Answer */}
                    <div className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#9F99EB] to-[#99E5EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="text-[#9B8E7D] text-lg leading-relaxed pl-4">
                        {item.answer}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#9F99EB]/5 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="bg-[#1A1A1A] p-8 rounded-2xl border-2 border-[#9F99EB] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9F99EB05_0%,transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9F99EB] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">💡</span>
                    <div>
                      <h4 className={`${archivoBlack.className} text-xl mb-2 text-[#FFF1DE]`}>
                        Vous avez des questions ?
                      </h4>
                      <p className="text-[#9B8E7D] text-lg mb-6">
                        Notre équipe d'experts est là pour vous répondre et vous accompagner dans votre projet de génération de leads.
                      </p>
                      <a
                        href="https://app.iclosed.io/e/baptistepiocelle/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-[#9F99EB] text-base font-medium rounded-lg text-[#FFF1DE] hover:bg-[#9F99EB] hover:text-black transition-all duration-300"
                      >
                        Discuter avec un expert
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A1A1A] to-black opacity-50"></div>
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#9F99EB] rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={`${anton.className} text-4xl md:text-5xl mb-8 text-[#FFF1DE]`}>
              Passez à l'action
            </h2>
            <div className={`${archivoBlack.className} text-xl md:text-2xl mb-12 text-[#9B8E7D] space-y-4`}>
              <p>Des leads qualifiés livrés.</p>
              <p>Pas de frais cachés. Pas de temps perdu.</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-[#9F99EB] text-lg font-semibold rounded-lg text-[#FFF1DE] bg-gradient-to-r from-[#9F99EB] to-[#99E5EB] hover:bg-transparent hover:text-[#9F99EB] transition-all duration-300 shadow-lg hover:shadow-[#9F99EB]/10"
              >
                Vérifier mon éligibilité
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          display: flex;
          animation: logo-scroll 32s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .animate-logo-scroll {
            animation-duration: 22s;
          }
        }
      `}</style>
    </main>
  );
} 