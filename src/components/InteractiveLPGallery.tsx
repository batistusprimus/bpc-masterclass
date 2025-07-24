'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LPExample {
  id: string;
  title: string;
  description: string;
  sector: string;
  results: string;
  previewContent: {
    heroTitle: string;
    heroSubtitle: string;
    features: string[];
    cta: string;
    colorScheme: string;
    gradient: string;
  };
}

const lpExamples: LPExample[] = [
  {
    id: "coach-business",
    title: "Coach Business",
    description: "De 0 à 15 RDV/mois",
    sector: "Coaching",
    results: "x3 taux de conversion",
    previewContent: {
      heroTitle: "Décrochez vos 15 premiers RDV qualifiés en 30 jours",
      heroSubtitle: "Même si vous partez de zéro et n'avez aucune audience",
      features: [
        "✅ Méthode testée sur 200+ coachs",
        "✅ Scripts de prospection inclus",
        "✅ Système de qualification automatique",
        "✅ Support personnalisé 30 jours"
      ],
      cta: "Réserver mon appel découverte",
      colorScheme: "blue",
      gradient: "from-blue-500 to-blue-700"
    }
  },
  {
    id: "consultant-marketing", 
    title: "Consultant Marketing",
    description: "x4 son taux de conversion",
    sector: "Consulting",
    results: "12K€ CA en 30 jours",
    previewContent: {
      heroTitle: "Transformez votre expertise en business rentable",
      heroSubtitle: "Sans prospecter, sans vendre, sans stress",
      features: [
        "🎯 Positionnement ultra-spécifique",
        "📧 Séquence email automatisée",
        "💼 Processus de vente simplifié",
        "💰 Pricing optimisé pour le max de CA"
      ],
      cta: "Découvrir ma méthode",
      colorScheme: "green",
      gradient: "from-green-500 to-green-700"
    }
  },
  {
    id: "formateur-digital",
    title: "Formateur Digital", 
    description: "12K€ CA en 30 jours",
    sector: "Formation",
    results: "50+ leads/mois",
    previewContent: {
      heroTitle: "Créez votre formation en ligne qui se vend toute seule",
      heroSubtitle: "De l'idée au premier client en 21 jours",
      features: [
        "📚 Structure de formation optimisée",
        "🎥 Scripts vidéo inclus",
        "🛒 Tunnel de vente automatisé",
        "📊 Dashboard de suivi des ventes"
      ],
      cta: "Lancer ma formation",
      colorScheme: "purple",
      gradient: "from-purple-500 to-purple-700"
    }
  },
  {
    id: "freelance-tech",
    title: "Freelance Tech",
    description: "De 3K à 15K€/mois",
    sector: "Tech",
    results: "x5 taux de conversion",
    previewContent: {
      heroTitle: "Développez votre activité freelance à 15K€/mois",
      heroSubtitle: "Sans prospecter, en travaillant moins",
      features: [
        "⚡ Portfolio qui convertit",
        "🎯 Ciblage clients premium",
        "💼 Processus de vente optimisé",
        "📈 Système de recommandation"
      ],
      cta: "Optimiser mon business",
      colorScheme: "orange",
      gradient: "from-orange-500 to-orange-700"
    }
  },
  {
    id: "expert-comptable",
    title: "Expert Comptable",
    description: "20+ clients qualifiés",
    sector: "Finance",
    results: "x2.5 taux de conversion",
    previewContent: {
      heroTitle: "Attirez 20+ clients qualifiés par mois",
      heroSubtitle: "Sans démarchage, en position d'expert",
      features: [
        "📊 Positionnement expert-comptable",
        "📋 Processus d'onboarding optimisé",
        "💡 Conseils fiscaux automatisés",
        "🤝 Système de parrainage intégré"
      ],
      cta: "Attirer plus de clients",
      colorScheme: "teal",
      gradient: "from-teal-500 to-teal-700"
    }
  },
  {
    id: "coach-vente",
    title: "Coach Vente",
    description: "De 5K à 25K€/mois",
    sector: "Vente",
    results: "x4 taux de conversion",
    previewContent: {
      heroTitle: "Multipliez vos ventes par 4 en 90 jours",
      heroSubtitle: "Avec des techniques de vente qui marchent vraiment",
      features: [
        "🎯 Scripts de vente testés",
        "📞 Processus d'appel optimisé",
        "💰 Techniques de closing avancées",
        "📈 Système de suivi des performances"
      ],
      cta: "Booster mes ventes",
      colorScheme: "red",
      gradient: "from-red-500 to-red-700"
    }
  }
];

export default function InteractiveLPGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedLP, setSelectedLP] = useState<LPExample | null>(null);

  const getColorClasses = (colorScheme: string) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      green: "bg-green-600 text-white", 
      purple: "bg-purple-600 text-white",
      orange: "bg-orange-600 text-white",
      teal: "bg-teal-600 text-white",
      red: "bg-red-600 text-white"
    };
    return colors[colorScheme as keyof typeof colors] || colors.blue;
  };

  const renderPreview = (lp: LPExample) => (
    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header du navigateur */}
      <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-gray-500 font-medium">landing-page.com</div>
        <div className="w-4"></div>
      </div>
      
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${lp.previewContent.gradient} text-white p-6`}>
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2 leading-tight">
            {lp.previewContent.heroTitle.split(' ').slice(0, 6).join(' ')}...
          </h3>
          <p className="text-sm opacity-90 mb-4">
            {lp.previewContent.heroSubtitle.split(' ').slice(0, 8).join(' ')}...
          </p>
          
          {/* Features mini */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {lp.previewContent.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-center space-x-1">
                <span className="text-white">✓</span>
                <span className="opacity-90">{feature.split(' ').slice(1, 4).join(' ')}...</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
            {lp.previewContent.cta}
          </button>
        </div>
      </div>
      
      {/* Footer avec stats */}
      <div className="bg-gray-50 p-3">
        <div className="flex justify-between items-center text-xs text-gray-600">
          <span>📈 {lp.results}</span>
          <span>🎯 {lp.sector}</span>
          <span>⚡ 7 jours</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Landing Pages Qui <span className="text-green-600">Convertissent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            +500 LP créées, des résultats qui parlent. <strong>Survolez pour voir les détails</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {lpExamples.map((lp, index) => (
            <motion.div
              key={lp.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(lp.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedLP(lp)}
            >
              {/* Carte principale */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  {/* Preview de la LP au lieu de l'image */}
                  {renderPreview(lp)}
                  
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {lp.sector}
                  </div>
                  
                  {/* Overlay au hover */}
                  <AnimatePresence>
                    {hoveredId === lp.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 flex items-center justify-center"
                      >
                        <div className="text-center text-white">
                          <div className="text-2xl mb-2">👁️</div>
                          <div className="font-bold">Voir la preview complète</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{lp.title}</h3>
                  <p className="text-green-600 font-medium mb-2">{lp.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">📈</span>
                    {lp.results}
                  </div>
                </div>
              </div>

              {/* Tooltip au hover */}
              <AnimatePresence>
                {hoveredId === lp.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-xs"
                  >
                    <div className="text-center">
                      <h4 className="font-bold mb-2">{lp.title}</h4>
                      <p className="text-sm text-gray-300 mb-2">{lp.description}</p>
                      <div className="text-green-400 font-medium text-sm">{lp.results}</div>
                      <div className="mt-2 text-xs text-gray-400">
                        Cliquez pour voir la preview complète
                      </div>
                    </div>
                    {/* Flèche */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal pour la preview complète */}
      <AnimatePresence>
        {selectedLP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedLP(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedLP.title} - Preview Complète</h3>
                    <p className="text-gray-600 mt-1">{selectedLP.description} • {selectedLP.results}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLP(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Preview complète de la Landing Page */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Aperçu de la Landing Page</h4>
                    <div className="w-16 h-1 bg-gray-300 mx-auto rounded"></div>
                  </div>
                  
                  {/* Mockup de la LP */}
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="bg-gray-100 p-4 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-500">landing-page.com</div>
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className={`bg-gradient-to-r ${selectedLP.previewContent.gradient} text-white p-8`}>
                      <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                          {selectedLP.previewContent.heroTitle}
                        </h1>
                        <p className="text-lg mb-6 max-w-lg mx-auto opacity-90">
                          {selectedLP.previewContent.heroSubtitle}
                        </p>
                        
                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                          {selectedLP.previewContent.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 text-left">
                              <span className="text-white text-lg">✓</span>
                              <span className="opacity-90">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
                        <button className={`px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white text-gray-800`}>
                          {selectedLP.previewContent.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats et détails */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{selectedLP.results}</div>
                    <div className="text-sm text-green-700">Résultats obtenus</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{selectedLP.sector}</div>
                    <div className="text-sm text-blue-700">Secteur d'activité</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">7 jours</div>
                    <div className="text-sm text-purple-700">Délai de livraison</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 