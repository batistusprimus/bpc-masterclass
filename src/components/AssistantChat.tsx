'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Types pour l'arbre de décision
type UserType = 'solopreneur' | 'agence';
type BusinessStage = 'debutant' | 'intermediaire' | 'avance';
type MainGoal = 'mindset' | 'offre' | 'acquisition' | 'contenu' | 'vente' | 'scaling';

type ChatOption = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

type Module = {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
};

type ChatTree = {
  initialMessage: string;
  initialOptions: ChatOption[];
  followUp: {
    [key in UserType]: {
      message: string;
      options: ChatOption[];
    };
  };
  goals: {
    [key in BusinessStage]: {
      message: string;
      options: ChatOption[];
    };
  };
  recommendations: {
    [key: string]: {
      message: string;
      modules: Module[];
    };
  };
};

// Types pour la persistance
type ChatState = {
  userType: UserType | null;
  businessStage: BusinessStage | null;
  mainGoal: MainGoal | null;
  timestamp: number;
  history: {
    step: 'initial' | 'userType' | 'businessStage' | 'mainGoal' | 'complete';
    value: string | null;
  }[];
};

type SavedChat = {
  id: string;
  state: ChatState;
  modules: Module[];
  lastUpdated: number;
};

// Configuration de l'arbre de décision
const chatTree: ChatTree = {
  initialMessage: "Bonjour ! Je suis Tom, ton coach business B2B. Es-tu Solopreneur ou CEO d'agence ?",
  initialOptions: [
    {
      id: 'solopreneur',
      title: 'Je suis Solopreneur',
      icon: '👤',
      description: 'Je gère mon business B2B en solo'
    },
    {
      id: 'agence',
      title: 'Je suis CEO d\'agence',
      icon: '👥',
      description: 'Je dirige une agence ou une équipe en B2B'
    }
  ],
  followUp: {
    solopreneur: {
      message: "Parfait. À quel stade te situes-tu dans ton parcours ?",
      options: [
        {
          id: 'debutant',
          title: 'Je débute mon activité',
          icon: '🌱',
          description: 'Je commence à construire mon business B2B'
        },
        {
          id: 'intermediaire',
          title: 'Je commence à avoir des résultats',
          icon: '🚀',
          description: 'J\'ai quelques clients et je souhaite accélérer'
        },
        {
          id: 'avance',
          title: 'Mon business est bien établi',
          icon: '💫',
          description: 'Mon activité tourne bien, je vise la croissance'
        }
      ]
    },
    agence: {
      message: "Parfait. À quel stade se trouve ton agence ?",
      options: [
        {
          id: 'debutant',
          title: 'Nous sommes en phase de lancement',
          icon: '🌱',
          description: 'Nous développons notre clientèle et nos processus'
        },
        {
          id: 'intermediaire',
          title: 'Nous avons une croissance stable',
          icon: '🚀',
          description: 'Nous avons des clients réguliers et visons plus'
        },
        {
          id: 'avance',
          title: 'Nous sommes bien établis',
          icon: '💫',
          description: 'Nous avons une forte présence et optimisons'
        }
      ]
    }
  },
  goals: {
    debutant: {
      message: "Quel est ton principal défi actuel ?",
      options: [
        {
          id: 'mindset',
          title: 'Je manque de confiance et de clarté',
          icon: '🧠',
          description: 'Je ne suis pas certain de ma direction'
        },
        {
          id: 'offre',
          title: 'Mon offre ne convainc pas assez',
          icon: '💎',
          description: 'J\'ai du mal à communiquer ma valeur'
        },
        {
          id: 'acquisition',
          title: 'Je peine à trouver des clients',
          icon: '🎯',
          description: 'Je cherche à attirer les bons prospects'
        }
      ]
    },
    intermediaire: {
      message: "Quel est ton objectif prioritaire maintenant ?",
      options: [
        {
          id: 'contenu',
          title: 'Je veux mieux convertir mes prospects',
          icon: '📚',
          description: 'Mes prospects ne perçoivent pas assez ma valeur'
        },
        {
          id: 'vente',
          title: 'Je veux développer mes ventes',
          icon: '💰',
          description: 'J\'ai des prospects mais je convertis peu'
        },
        {
          id: 'scaling',
          title: 'Je veux passer à l\'échelle',
          icon: '⚡',
          description: 'Je ne peux pas prendre plus de clients actuellement'
        }
      ]
    },
    avance: {
      message: "Quel est ton objectif principal ?",
      options: [
        {
          id: 'scaling',
          title: 'Je veux automatiser et déléguer',
          icon: '⚡',
          description: 'Optimiser mon temps et augmenter mes revenus'
        },
        {
          id: 'contenu',
          title: 'Je veux renforcer mon autorité',
          icon: '📚',
          description: 'Devenir une référence dans mon domaine'
        },
        {
          id: 'vente',
          title: 'Je veux optimiser mes conversions',
          icon: '💰',
          description: 'Améliorer chaque étape de mon processus de vente'
        }
      ]
    }
  },
  recommendations: {
    'solopreneur-debutant-mindset': {
      message: "Je comprends ta situation. Voici ton parcours personnalisé :",
      modules: [
        { id: 0, title: 'Mindset', href: '/masterclass/module0', description: 'Adopter l\'état d\'esprit qui mène au succès', icon: '🧠', color: '#9F99EB' },
        { id: 1, title: 'Créer son offre irrésistible', href: '/masterclass/module1', description: 'Structurer ton offre pour la rendre irrésistible', icon: '💎', color: '#FF9800' },
        { id: 2, title: 'Acquisition', href: '/masterclass/module2', description: 'Mettre en place tes canaux d\'acquisition', icon: '🎯', color: '#4CAF50' }
      ]
    },
    'solopreneur-debutant-offre': {
      message: "Voici ton parcours personnalisé pour renforcer ton offre :",
      modules: [
        { id: 1, title: 'Créer son offre irrésistible', href: '/masterclass/module1', description: 'Transformer ton expertise en une offre qui se vend', icon: '💎', color: '#FF9800' },
        { id: 0, title: 'Mindset', href: '/masterclass/module0', description: 'Adopter la confiance nécessaire pour vendre', icon: '🧠', color: '#9F99EB' },
        { id: 4, title: 'Éduquer tes prospects', href: '/masterclass/module4', description: 'Créer un tunnel de conversion efficace', icon: '📚', color: '#E91E63' }
      ]
    },
    'solopreneur-debutant-acquisition': {
      message: "Voici ton parcours personnalisé pour développer ton acquisition :",
      modules: [
        { id: 2, title: 'Acquisition', href: '/masterclass/module2', description: 'Mettre en place des canaux d\'acquisition performants', icon: '🎯', color: '#4CAF50' },
        { id: 3, title: 'Newsletter & Communauté', href: '/masterclass/module3', description: 'Développer une communauté de prospects qualifiés', icon: '📧', color: '#2196F3' },
        { id: 1, title: 'Créer son offre irrésistible', href: '/masterclass/module1', description: 'Créer une offre qui attire naturellement', icon: '💎', color: '#FF9800' }
      ]
    },
    'solopreneur-intermediaire-contenu': {
      message: "Voici ton parcours personnalisé pour améliorer tes conversions :",
      modules: [
        { id: 4, title: 'Éduquer ses prospects', href: '/masterclass/module4', description: 'Éduquer tes prospects pour qu\'ils achètent naturellement', icon: '📚', color: '#E91E63' },
        { id: 5, title: 'L\'art de faire des VSL', href: '/masterclass/module5', description: 'Rédiger des textes qui convertissent', icon: '✍️', color: '#9C27B0' },
        { id: 3, title: 'Newsletter & Communauté', href: '/masterclass/module3', description: 'Créer une communauté qui te fait confiance', icon: '📧', color: '#2196F3' }
      ]
    },
    'solopreneur-intermediaire-vente': {
      message: "Voici ton parcours personnalisé pour développer tes ventes :",
      modules: [
        { id: 5, title: 'L\'art de faire des VSL', href: '/masterclass/module5', description: 'Apprendre à présenter ta valeur de manière irrésistible', icon: '✍️', color: '#9C27B0' },
        { id: 6, title: 'Setting', href: '/masterclass/module6', description: 'Transformer tes appels en rendez-vous gagnés', icon: '🤝', color: '#FF5722' },
        { id: 4, title: 'Éduquer ses prospects', href: '/masterclass/module4', description: 'Créer un tunnel qui facilite la décision', icon: '📚', color: '#E91E63' }
      ]
    },
    'solopreneur-intermediaire-scaling': {
      message: "Voici ton parcours personnalisé pour passer à l'échelle :",
      modules: [
        { id: 7, title: 'Tout pour closer en B2B', href: '/masterclass/module7', description: 'Mettre en place des systèmes qui travaillent pour toi', icon: '⚡', color: '#00BCD4' },
        { id: 8, title: 'Satisfaire ses clients', href: '/masterclass/module8', description: 'Optimiser chaque aspect de ton business', icon: '⚙️', color: '#607D8B' },
        { id: 6, title: 'Setting', href: '/masterclass/module6', description: 'Transformer tes appels en rendez-vous gagnés', icon: '🤝', color: '#FF5722' }
      ]
    },
    'agence-debutant-mindset': {
      message: "Voici ton parcours personnalisé pour développer ton agence :",
      modules: [
        { id: 0, title: 'Mindset', href: '/masterclass/module0', description: 'Adopter l\'état d\'esprit qui mène à la croissance', icon: '🧠', color: '#9F99EB' },
        { id: 1, title: 'Structurer tes services', href: '/masterclass/module1', description: 'Créer des offres qui se vendent naturellement', icon: '💎', color: '#FF9800' },
        { id: 8, title: 'Mettre en place tes processus', href: '/masterclass/module8', description: 'Créer des systèmes qui facilitent la croissance', icon: '⚙️', color: '#607D8B' }
      ]
    },
    'agence-debutant-offre': {
      message: "Voici ton parcours personnalisé pour renforcer tes services :",
      modules: [
        { id: 1, title: 'Créer des offres irrésistibles', href: '/masterclass/module1', description: 'Structurer tes services pour qu\'ils se vendent', icon: '💎', color: '#FF9800' },
        { id: 8, title: 'Mettre en place tes processus', href: '/masterclass/module8', description: 'Créer des systèmes qui facilitent la vente', icon: '⚙️', color: '#607D8B' },
        { id: 7, title: 'Préparer ta croissance', href: '/masterclass/module7', description: 'Mettre en place les bases de ton scaling', icon: '⚡', color: '#00BCD4' }
      ]
    },
    'agence-debutant-acquisition': {
      message: "Voici ton parcours personnalisé pour développer ton acquisition :",
      modules: [
        { id: 2, title: 'Acquisition', href: '/masterclass/module2', description: 'Mettre en place des canaux d\'acquisition performants', icon: '🎯', color: '#4CAF50' },
        { id: 3, title: 'Newsletter & Communauté', href: '/masterclass/module3', description: 'Développer une communauté de prospects qualifiés', icon: '📧', color: '#2196F3' },
        { id: 8, title: 'Optimiser tes processus', href: '/masterclass/module8', description: 'Créer des systèmes qui facilitent l\'acquisition', icon: '⚙️', color: '#607D8B' }
      ]
    },
    'agence-intermediaire-contenu': {
      message: "Voici ton parcours personnalisé pour optimiser ton contenu :",
      modules: [
        { id: 4, title: 'Éduquer ses prospects', href: '/masterclass/module4', description: 'Éduquer tes prospects pour qu\'ils achètent naturellement', icon: '📚', color: '#E91E63' },
        { id: 5, title: 'L\'art de faire des VSL', href: '/masterclass/module5', description: 'Rédiger des textes qui convertissent', icon: '✍️', color: '#9C27B0' },
        { id: 8, title: 'Automatiser ton contenu', href: '/masterclass/module8', description: 'Créer des systèmes qui génèrent du contenu efficace', icon: '⚙️', color: '#607D8B' }
      ]
    },
    'agence-intermediaire-vente': {
      message: "Voici ton parcours personnalisé pour optimiser tes ventes :",
      modules: [
        { id: 6, title: 'Setting', href: '/masterclass/module6', description: 'Transformer tes appels en rendez-vous gagnés', icon: '🤝', color: '#FF5722' },
        { id: 8, title: 'Créer des processus de vente', href: '/masterclass/module8', description: 'Mettre en place des systèmes qui convertissent', icon: '⚙️', color: '#607D8B' },
        { id: 7, title: 'Automatiser ta vente', href: '/masterclass/module7', description: 'Libérer ton temps tout en augmentant les ventes', icon: '⚡', color: '#00BCD4' }
      ]
    },
    'agence-intermediaire-scaling': {
      message: "Voici ton parcours personnalisé pour passer à l'échelle :",
      modules: [
        { id: 7, title: 'Tout pour closer en B2B', href: '/masterclass/module7', description: 'Créer des systèmes qui travaillent pour toi', icon: '⚡', color: '#00BCD4' },
        { id: 8, title: 'Optimiser tes processus', href: '/masterclass/module8', description: 'Mettre en place des systèmes qui facilitent la croissance', icon: '⚙️', color: '#607D8B' },
        { id: 9, title: 'BONUS – Les clés du Scale', href: '/masterclass/module9', description: 'Découvrir les stratégies qui fonctionnent', icon: '📊', color: '#795548' }
      ]
    },
    'agence-avance-scaling': {
      message: "Voici ton parcours personnalisé pour optimiser ton agence :",
      modules: [
        { id: 7, title: 'Automatisation avancée', href: '/masterclass/module7', description: 'Créer des systèmes qui génèrent des revenus passifs', icon: '⚡', color: '#00BCD4' },
        { id: 8, title: 'Optimisation des processus', href: '/masterclass/module8', description: 'Affiner chaque aspect de ton agence', icon: '⚙️', color: '#607D8B' },
        { id: 9, title: 'Stratégies avancées', href: '/masterclass/module9', description: 'Découvrir les techniques des meilleures agences', icon: '📊', color: '#795548' }
      ]
    },
    'agence-avance-contenu': {
      message: "Voici ton parcours personnalisé pour devenir une référence :",
      modules: [
        { id: 4, title: 'Stratégie de contenu avancée', href: '/masterclass/module4', description: 'Créer un contenu qui positionne ton agence comme leader', icon: '📚', color: '#E91E63' },
        { id: 5, title: 'Copywriting avancé', href: '/masterclass/module5', description: 'Maîtriser l\'art de la persuasion à haut niveau', icon: '✍️', color: '#9C27B0' },
        { id: 9, title: 'Études de cas avancées', href: '/masterclass/module9', description: 'Apprendre des meilleures stratégies de contenu', icon: '📊', color: '#795548' }
      ]
    },
    'agence-avance-vente': {
      message: "Voici ton parcours personnalisé pour maximiser tes conversions :",
      modules: [
        { id: 6, title: 'Techniques avancées de vente', href: '/masterclass/module6', description: 'Maîtriser l\'art de la vente à haut niveau', icon: '🤝', color: '#FF5722' },
        { id: 8, title: 'Optimisation des processus de vente', href: '/masterclass/module8', description: 'Affiner chaque étape de ton processus', icon: '⚙️', color: '#607D8B' },
        { id: 9, title: 'Stratégies de conversion avancées', href: '/masterclass/module9', description: 'Découvrir les techniques des meilleures agences', icon: '📊', color: '#795548' }
      ]
    }
  }
};

export default function AssistantChat() {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [businessStage, setBusinessStage] = useState<BusinessStage | null>(null);
  const [mainGoal, setMainGoal] = useState<MainGoal | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [savedChats, setSavedChats] = useState<SavedChat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<'initial' | 'userType' | 'businessStage' | 'mainGoal' | 'complete'>('initial');
  const router = useRouter();

  // Charger les conversations sauvegardées au montage
  useEffect(() => {
    const loadSavedChats = () => {
      const saved = localStorage.getItem('savedChats');
      if (saved) {
        setSavedChats(JSON.parse(saved));
      }
    };
    loadSavedChats();
  }, []);

  // Sauvegarder l'état actuel de la conversation
  const saveCurrentChat = () => {
    if (!userType || !businessStage || !mainGoal) return;

    const chatState: ChatState = {
      userType,
      businessStage,
      mainGoal,
      timestamp: Date.now(),
      history: [
        { step: 'initial', value: null },
        { step: 'userType', value: userType },
        { step: 'businessStage', value: businessStage },
        { step: 'mainGoal', value: mainGoal },
        { step: 'complete', value: null }
      ]
    };

    const modules = getRecommendedModules();
    const chatId = `${userType}-${businessStage}-${mainGoal}-${Date.now()}`;
    
    const newChat: SavedChat = {
      id: chatId,
      state: chatState,
      modules,
      lastUpdated: Date.now()
    };

    const updatedChats = [...savedChats, newChat];
    setSavedChats(updatedChats);
    setCurrentChatId(chatId);
    localStorage.setItem('savedChats', JSON.stringify(updatedChats));
  };

  // Charger une conversation sauvegardée
  const loadChat = (chatId: string) => {
    const chat = savedChats.find(c => c.id === chatId);
    if (chat) {
      setUserType(chat.state.userType);
      setBusinessStage(chat.state.businessStage);
      setMainGoal(chat.state.mainGoal);
      setCurrentChatId(chatId);
      setCurrentStep('complete');
      setShowOptions(true);
    }
  };

  // Effacer une conversation sauvegardée
  const deleteChat = (chatId: string) => {
    const updatedChats = savedChats.filter(c => c.id !== chatId);
    setSavedChats(updatedChats);
    localStorage.setItem('savedChats', JSON.stringify(updatedChats));
    if (currentChatId === chatId) {
      resetChat();
    }
  };

  // Réinitialiser le chat
  const resetChat = () => {
    setUserType(null);
    setBusinessStage(null);
    setMainGoal(null);
    setCurrentChatId(null);
    setCurrentStep('initial');
    setShowOptions(false);
  };

  useEffect(() => {
    // Sauvegarder automatiquement quand une conversation est complète
    if (userType && businessStage && mainGoal && !currentChatId) {
      saveCurrentChat();
    }
  }, [userType, businessStage, mainGoal]);

  useEffect(() => {
    // Simuler l'effet de "typing" pour chaque nouveau message
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
      setShowOptions(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [userType, businessStage, mainGoal]);

  const getCurrentMessage = () => {
    if (!userType) return chatTree.initialMessage;
    if (!businessStage) return chatTree.followUp[userType].message;
    if (!mainGoal) return chatTree.goals[businessStage].message;
    const key = `${userType}-${businessStage}-${mainGoal}`;
    return chatTree.recommendations[key]?.message || "Je n'ai pas de recommandation spécifique pour cette combinaison.";
  };

  const getCurrentOptions = () => {
    if (!userType) return chatTree.initialOptions;
    if (!businessStage) return chatTree.followUp[userType].options;
    if (!mainGoal) return chatTree.goals[businessStage].options;
    return [];
  };

  const getRecommendedModules = () => {
    if (!userType || !businessStage || !mainGoal) return [];
    const key = `${userType}-${businessStage}-${mainGoal}`;
    return chatTree.recommendations[key]?.modules || [];
  };

  const goBack = (): void => {
    if (currentStep === 'complete') {
      setCurrentStep('mainGoal');
      setMainGoal(null);
    } else if (currentStep === 'mainGoal') {
      setCurrentStep('businessStage');
      setBusinessStage(null);
    } else if (currentStep === 'businessStage') {
      setCurrentStep('userType');
      setUserType(null);
    } else if (currentStep === 'userType') {
      setCurrentStep('initial');
      resetChat();
    }
    setShowOptions(true);
  };

  const handleOptionSelect = (optionId: string) => {
    setShowOptions(false);
    if (!userType) {
      setUserType(optionId as UserType);
      setCurrentStep('userType');
    } else if (!businessStage) {
      setBusinessStage(optionId as BusinessStage);
      setCurrentStep('businessStage');
    } else if (!mainGoal) {
      setMainGoal(optionId as MainGoal);
      setCurrentStep('complete');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col space-y-4 pt-2">
        {/* Message de Tom */}
        {(!userType || !businessStage || !mainGoal) && (
          <div className="flex items-start space-x-4 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rare via-rare/50 to-rare/20 flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-300">
              <span className="text-rare text-sm font-medium">Tom</span>
            </div>
            <div className="flex-1 max-w-[85%]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rare/20 via-rare/10 to-rare/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-rare/10 via-rare/5 to-transparent rounded-2xl p-4 shadow-lg backdrop-blur-sm border border-white/5 hover:border-rare/20 transition-all duration-300">
                  <div className="relative">
                    <p className="text-gray-200 text-sm leading-relaxed font-medium">
                      {getCurrentMessage()}
                    </p>
                    {isTyping && (
                      <div className="absolute -bottom-1 right-0 flex space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-rare/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-rare/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-rare/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Options de réponse */}
        {getCurrentOptions().length > 0 && showOptions && (
          <div className="flex flex-wrap gap-3 animate-slide-up ml-14">
            {getCurrentOptions().map((option, index) => (
              <div key={option.id} className="relative">
                {!userType && (
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 animate-bounce">
                    <svg 
                      className="w-4 h-4 text-rare/70" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
                <button
                  onClick={() => handleOptionSelect(option.id)}
                  className={`group relative transform hover:-translate-y-0.5 transition-all duration-300 ${
                    !userType ? 'animate-glow-border' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-button/20 via-button/10 to-button/5 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className={`relative inline-flex items-center px-5 py-2.5 bg-gradient-to-br from-black/40 via-black/30 to-black/20 rounded-full border transition-all duration-300 text-left group-hover:bg-black/40 hover:shadow-xl backdrop-blur-sm ${
                    !userType ? 'border-rare/50' : 'border-white/5 hover:border-button/30'
                  }`}>
                    <span className="text-xl mr-3 transform group-hover:scale-110 transition-transform duration-300">{option.icon}</span>
                    <span className="text-sm font-medium text-white group-hover:text-button transition-colors">
                        {option.title}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Réponse de l'utilisateur */}
        {userType && (
          <div className="flex items-start space-x-4 justify-end animate-fade-in">
            <div className="flex-1 max-w-[85%]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-button/20 via-button/10 to-button/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-button/10 via-button/5 to-transparent rounded-2xl p-4 shadow-lg backdrop-blur-sm border border-white/5 hover:border-button/20 transition-all duration-300">
                  <p className="text-gray-200 text-sm leading-relaxed font-medium">
                    {userType === 'solopreneur' ? 'Je suis un entrepreneur individuel' : 'Je dirige une équipe'}
                    {businessStage && `, ${businessStage === 'debutant' ? 'je débute' : businessStage === 'intermediaire' ? 'je commence à avoir des résultats' : 'j\'ai une base solide'}`}
                    {mainGoal && `, et ${mainGoal === 'mindset' ? 'je manque de confiance' : mainGoal === 'offre' ? 'mon offre ne convainc pas' : mainGoal === 'acquisition' ? 'je ne trouve pas assez de clients' : mainGoal === 'contenu' ? 'je ne convertis pas assez' : mainGoal === 'vente' ? 'mes ventes ne décollent pas' : 'je n\'arrive pas à passer à l\'échelle'}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-button via-button/50 to-button/20 flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-300">
                <span className="text-button text-sm font-medium">👤</span>
            </div>
          </div>
        )}

        {/* Modules recommandés */}
        {getRecommendedModules().length > 0 && showOptions && (
          <div className="flex items-start space-x-4 animate-slide-up">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rare via-rare/50 to-rare/20 flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-300">
              <span className="text-rare text-sm font-medium">Tom</span>
            </div>
            <div className="flex-1 max-w-[85%]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rare/20 via-rare/10 to-rare/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-rare/10 via-rare/5 to-transparent rounded-2xl p-5 shadow-lg backdrop-blur-sm border border-white/5 hover:border-rare/20 transition-all duration-300">
                  <p className="text-gray-200 text-sm leading-relaxed font-medium mb-5">
                    {getCurrentMessage()}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {getRecommendedModules().map((module, index) => (
                      <button
                        key={module.id}
                        className="group relative transform hover:-translate-y-0.5 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => router.push(module.href)}
                        type="button"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-button/20 via-button/10 to-button/5 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative inline-flex items-center px-5 py-2.5 bg-gradient-to-br from-black/40 via-black/30 to-black/20 rounded-full border border-white/5 hover:border-button/30 transition-all duration-300 group-hover:bg-black/40 backdrop-blur-sm">
                          <span className="text-xl mr-3 transform group-hover:scale-110 transition-transform duration-300" style={{ color: module.color }}>{module.icon}</span>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-white group-hover:text-button transition-colors">
                              {module.title}
                            </span>
                            <span className="text-xs text-gray-400 opacity-80 group-hover:opacity-100 transition-opacity">
                              {module.description}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {getRecommendedModules().length > 0 && (
                    <button
                      className="relative group w-full transform hover:-translate-y-0.5 transition-all duration-300"
                      onClick={() => {
                        const firstModule = getRecommendedModules()[0];
                        if (firstModule) router.push(firstModule.href);
                      }}
                      type="button"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-button/20 via-button/10 to-button/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative w-full btn bg-gradient-to-r from-button via-button/90 to-button/80 text-white px-6 py-3 rounded-xl hover:from-button/90 hover:via-button/80 hover:to-button/70 transition-all duration-300 hover:shadow-xl text-sm font-semibold">
                        Commencer
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bouton retour - déplacé en dessous */}
        {currentStep !== 'initial' && (
          <div className="flex justify-start pt-2">
            <button
              onClick={goBack}
              className="group relative transform hover:-translate-y-0.5 transition-all duration-300 opacity-60 hover:opacity-100"
              type="button"
            >
              <div className="relative inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors">
                <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l'étape précédente
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Historique des conversations */}
      {savedChats.length > 0 && (
        <div className="mt-6 pt-4 border-t border-white/5">
          <div className="px-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Conversations précédentes</h3>
              <span className="text-xs text-gray-500">{savedChats.length} conversation{savedChats.length > 1 ? 's' : ''}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {savedChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => loadChat(chat.id)}
                  className={`group relative transform hover:-translate-y-0.5 transition-all duration-300 ${
                    currentChatId === chat.id ? 'ring-1 ring-button/30' : ''
                  }`}
                >
                  <div className="relative inline-flex items-center px-3 py-1.5 bg-black/20 hover:bg-black/30 rounded-full border border-white/5 hover:border-white/10 transition-all duration-300 text-left backdrop-blur-sm">
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors flex items-center">
                      <span className="mr-1.5 opacity-75">{chat.state.userType === 'solopreneur' ? '👤' : '👥'}</span>
                      {new Date(chat.lastUpdated).toLocaleDateString()}
                      {currentChatId === chat.id && (
                        <span className="ml-1.5 text-button text-[10px]">• Actif</span>
                      )}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteChat(chat.id);
                      }}
                      className="ml-1.5 text-gray-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      ×
                    </button>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in {
          from { 
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes glow-border {
          0% {
            box-shadow: 0 0 0 0 rgba(var(--color-rare-rgb), 0.4);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(var(--color-rare-rgb), 0.2);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(var(--color-rare-rgb), 0.4);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-glow-border {
          animation: glow-border 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 