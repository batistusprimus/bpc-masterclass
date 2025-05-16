'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssistantChat from '@/components/AssistantChat';

export default function TestSearchPage() {
  const [activeSection, setActiveSection] = useState<'hero1' | 'hero2' | 'hero3' | 'hero4'>('hero1');

  return (
    <div className="min-h-screen bg-primary text-contrast">
      <div className="container-custom py-12">
        <h1 className="text-4xl md:text-5xl font-title mb-8">Propositions de héros pour la page d'accueil</h1>
        
        {/* Navigation entre les sections */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveSection('hero1')}
            className={`btn ${activeSection === 'hero1' ? 'bg-button' : 'btn-outline'}`}
          >
            Proposition 1: Diagnostic Express
          </button>
          <button
            onClick={() => setActiveSection('hero2')}
            className={`btn ${activeSection === 'hero2' ? 'bg-button' : 'btn-outline'}`}
          >
            Proposition 2: Exploration Visuelle
          </button>
          <button
            onClick={() => setActiveSection('hero3')}
            className={`btn ${activeSection === 'hero3' ? 'bg-button' : 'btn-outline'}`}
          >
            Proposition 3: Assistant IA avec Conversation Guidée
          </button>
          <button
            onClick={() => setActiveSection('hero4')}
            className={`btn ${activeSection === 'hero4' ? 'bg-button' : 'btn-outline'}`}
          >
            Proposition 4: Parcours Personnalisé
          </button>
        </div>

        {/* Section 1: Diagnostic Express */}
        {activeSection === 'hero1' && (
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block animate-fade-in">
                    <span className="px-4 py-2 rounded-full bg-button/10 border border-button/20 text-button text-sm font-medium">
                      Diagnostic Express
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-title leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
                    Quel est votre objectif principal aujourd'hui ?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: 'Augmenter mes revenus', icon: '💰' },
                      { title: 'Automatiser mon business', icon: '⚡' },
                      { title: 'Trouver plus de clients', icon: '🎯' },
                      { title: 'Optimiser mes processus', icon: '⚙️' }
                    ].map((option, index) => (
                      <button
                        key={index}
                        className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-button/20 transition-all duration-300 text-left group"
                      >
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <h3 className="text-lg font-medium text-white group-hover:text-button transition-colors">
                          {option.title}
                        </h3>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                    <h3 className="text-xl font-subtitle mb-6 text-title">Modules recommandés</h3>
                    <div className="space-y-4">
                      {[
                        { title: 'Créer son offre irrésistible', progress: '100%' },
                        { title: "Toute l'acquisition", progress: '75%' },
                        { title: 'Tout pour closer en B2B', progress: '50%' }
                      ].map((module, index) => (
                        <div key={index} className="p-4 bg-button/10 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{module.title}</h4>
                            <span className="text-sm text-button">{module.progress}</span>
                          </div>
                          <div className="h-2 bg-black/20 rounded-full">
                            <div 
                              className="h-full bg-button rounded-full transition-all duration-500"
                              style={{ width: module.progress }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: Exploration Visuelle */}
        {activeSection === 'hero2' && (
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-graph/10 via-transparent to-button/10"></div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block animate-fade-in mb-6">
                  <span className="px-4 py-2 rounded-full bg-graph/10 border border-graph/20 text-graph text-sm font-medium">
                    Exploration Visuelle
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-title leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text mb-6">
                  Découvrez votre parcours idéal
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Explorez visuellement les différentes étapes de votre développement B2B et trouvez le chemin qui vous correspond
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Colonne 1: Problèmes */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-rare/20 flex items-center justify-center">
                      <span className="text-rare text-lg">🎯</span>
                    </div>
                    <h3 className="text-xl font-subtitle text-title">Vos Défis</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Manque de clients', icon: '👥', color: 'rare' },
                      { title: 'Prix trop bas', icon: '💰', color: 'button' },
                      { title: 'Processus inefficace', icon: '⚡', color: 'graph' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg bg-${item.color}/10 border border-${item.color}/20 cursor-pointer hover:bg-${item.color}/20 transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-white">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colonne 2: Solutions */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-button/20 flex items-center justify-center">
                      <span className="text-button text-lg">✨</span>
                    </div>
                    <h3 className="text-xl font-subtitle text-title">Solutions</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Acquisition LinkedIn', icon: '🔗', color: 'button' },
                      { title: 'Prix Premium', icon: '💎', color: 'rare' },
                      { title: 'Automatisation', icon: '🤖', color: 'graph' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg bg-${item.color}/10 border border-${item.color}/20 cursor-pointer hover:bg-${item.color}/20 transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-white">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colonne 3: Résultats */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-graph/20 flex items-center justify-center">
                      <span className="text-graph text-lg">📈</span>
                    </div>
                    <h3 className="text-xl font-subtitle text-title">Résultats</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Pipeline rempli', icon: '🎯', color: 'graph' },
                      { title: 'Revenus x2', icon: '💫', color: 'button' },
                      { title: 'Business scalable', icon: '🚀', color: 'rare' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg bg-${item.color}/10 border border-${item.color}/20 cursor-pointer hover:bg-${item.color}/20 transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-white">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="btn bg-button text-white px-8 py-4 rounded-lg hover:bg-button/90 transition-colors">
                  Explorer les modules correspondants
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Assistant IA avec Conversation Guidée */}
        {activeSection === 'hero3' && (
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-rare/10 via-transparent to-button/10"></div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block animate-fade-in mb-6">
                    <span className="px-4 py-2 rounded-full bg-rare/10 border border-rare/20 text-rare text-sm font-medium">
                      Assistant B2B
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-title leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text mb-6">
                    Comment puis-je vous aider aujourd'hui ?
                  </h2>
                </div>

                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                  <AssistantChat />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Parcours Personnalisé */}
        {activeSection === 'hero4' && (
          <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
            </div>
            
            <div className="container-custom relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block animate-fade-in">
                    <span className="px-4 py-2 rounded-full bg-button/10 border border-button/20 text-button text-sm font-medium">
                      Parcours Personnalisé
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-title leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
                    Créez votre parcours sur mesure
                  </h2>
                  <p className="text-lg text-gray-300">
                    Répondez à quelques questions simples pour obtenir un parcours adapté à vos besoins spécifiques.
                  </p>
                </div>

                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-gray-300 mb-2 block">Quel est votre niveau actuel ?</span>
                        <select className="w-full p-4 bg-black/20 border border-white/10 rounded-lg text-white">
                          <option>Débutant</option>
                          <option>Intermédiaire</option>
                          <option>Avancé</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="text-gray-300 mb-2 block">Quel est votre objectif principal ?</span>
                        <select className="w-full p-4 bg-black/20 border border-white/10 rounded-lg text-white">
                          <option>Augmenter mes revenus</option>
                          <option>Automatiser mon business</option>
                          <option>Trouver plus de clients</option>
                          <option>Optimiser mes processus</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="text-gray-300 mb-2 block">Quel est votre temps disponible ?</span>
                        <select className="w-full p-4 bg-black/20 border border-white/10 rounded-lg text-white">
                          <option>1-2 heures par semaine</option>
                          <option>3-5 heures par semaine</option>
                          <option>5+ heures par semaine</option>
                        </select>
                      </label>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <h3 className="text-xl font-subtitle mb-4 text-title">Votre parcours recommandé</h3>
                      <div className="space-y-4">
                        {[
                          { title: 'Module 1: Mindset', duration: '30 min' },
                          { title: 'Module 2: Créer son offre', duration: '45 min' },
                          { title: 'Module 3: Acquisition', duration: '60 min' }
                        ].map((module, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-button/10 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 rounded-full bg-button/20 flex items-center justify-center">
                                <span className="text-button">{index + 1}</span>
                              </div>
                              <span className="text-white">{module.title}</span>
                            </div>
                            <span className="text-sm text-gray-400">{module.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full btn bg-button text-white py-4 rounded-lg hover:bg-button/90 transition-colors">
                      Commencer mon parcours
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
} 