'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from "@/components/Button";
import WorkbookCard from '@/components/WorkbookCard';
import RoadmapCard from '@/components/RoadmapCard';

// Types
interface Palier {
  id: string;
  title: string;
  videoUrl: string;
  workbookUrl?: string;
  description?: string;
  tags?: string[];
  completed?: boolean;
  moduleId: number;
  rubrique?: string;
  callToAction?: {
    explore: {
      text: string;
      href: string;
    };
    newsletter: {
      text: string;
      href: string;
    };
  };
}

interface Rubrique {
  id?: number;
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  workbookUrl?: string;
  paliers: Palier[];
}

interface Module {
  id: number;
  title: string;
  description: string;
  paliers?: Palier[];
  rubriques?: Rubrique[];
  icon?: string;
  color?: string;
  workbookUrl?: string;
}

// Nouveau type pour la progression
interface Progress {
  current: number;
  total: number;
  percentage: number;
}

// Couleurs du thème
const COLORS = {
  background: '#000000',
  surfaceLight: '#121212',
  surfaceMedium: '#1E1E1E',
  surfaceDark: '#0A0A0A',
  primary: '#9F99EB',
  secondary: '#99E5EB',
  accent: '#FFF1DE',
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textAccent: '#9F99EB',
  textMuted: '#8A8A8A',
  border: '#333333',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
};

// Fonction utilitaire pour formater les URLs des vidéos
function formatVideoUrl(url: string): string {
  if (!url) return '';
  
  try {
    if (url.includes('tella.tv')) {
      return url.replace('/video/', '/embed/');
    } else if (url.includes('youtube.com')) {
      const parts = url.split('v=');
      if (parts.length < 2) return url;
      const videoId = parts[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    } else if (url.includes('youtu.be')) {
      const parts = url.split('youtu.be/');
      if (parts.length < 2) return url;
      const videoId = parts[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    } else if (url.includes('loom.com/share')) {
      return url.replace('share', 'embed');
    }
    return url;
  } catch (error) {
    console.error('Error formatting video URL:', error);
    return url;
  }
}

// Contenu du module
const moduleContent: Module = {
  id: 9,
  title: "BONUS - Les clés du Scale",
  description: "Des vidéos exclusives pour débloquer tes problématiques business une par une.",
  icon: "🎬",
  color: "#FF0000", // Red
  paliers: [
    {
      id: "9.0",
      title: "Comment lancer un business à 1M€ par an - la VRAIE Méthode",
      videoUrl: "https://www.youtube.com/embed/1uIVc0pK008",
      tags: ["business", "scale", "stratégie"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.1",
      title: "Quel type de contenu créer pour attirer ses premiers clients ?",
      videoUrl: "https://www.youtube.com/embed/jeNZeHtO0IY",
      tags: ["contenu", "acquisition", "clients"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.2",
      title: "Pourquoi la plupart des freelances n'atteindront jamais 10K€/mois (et comment faire autrement)",
      videoUrl: "https://www.youtube.com/embed/RtOfuQQx5vI",
      tags: ["freelance", "revenus", "stratégie"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.3",
      title: "Comment construire un TUNNEL en 1 heure pour attirer tes clients",
      videoUrl: "https://www.youtube.com/embed/qospSz9_Glg",
      tags: ["tunnel", "acquisition", "clients"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.4",
      title: "Écrire et publier une VSL pour transformer n'importe qui en client en 2h",
      videoUrl: "https://www.youtube.com/embed/zJwCe0SVle8",
      tags: ["VSL", "conversion", "clients"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.5",
      title: "Comment lancer un bon produit digital ?",
      videoUrl: "https://www.youtube.com/embed/wdUVOjexoAg",
      tags: ["produit", "digital", "lancement"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.6",
      title: "Comment ce freelance est passé de 0 à 2000 par mois en 3 semaines | Témoignage",
      videoUrl: "https://www.youtube.com/embed/K2YsABjkRiE",
      tags: ["freelance", "témoignage", "croissance"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.7",
      title: "Comment ce client a fait 20k€ sur le lancement de sa formation | Témoignage",
      videoUrl: "https://www.youtube.com/embed/al1OJeYur9Y",
      tags: ["formation", "témoignage", "lancement"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.8",
      title: "Adopter le mindset de croissance pour évoluer dans l'entrepreneuriat",
      videoUrl: "https://www.youtube.com/embed/xDXKrPBCck8",
      tags: ["mindset", "croissance", "entrepreneuriat"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.9",
      title: "Étude de cas | Comment faire 1.749.074 vues et 300 000€ en 75 jours et 35 posts",
      videoUrl: "https://www.youtube.com/embed/UkYmi9HNdf4",
      tags: ["étude de cas", "vues", "revenus"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.10",
      title: "Comment choisir le bon marché pour ta future offre ?",
      videoUrl: "https://www.youtube.com/embed/b-TL1y2hU1Q",
      tags: ["marché", "offre", "stratégie"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.11",
      title: "Pourquoi ne PAS créer de contenu te faire perdre de l'argent",
      videoUrl: "https://www.youtube.com/embed/8upOvqJ2tdA",
      tags: ["contenu", "stratégie", "argent"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.12",
      title: "Créer ton personal branding en 10 minutes",
      videoUrl: "https://www.youtube.com/embed/SoprcPQN1ok",
      tags: ["personal branding", "stratégie", "image"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.13",
      title: "Comment je suis passé de 10K€/mois à 83.333€/mois avec mon business de service",
      videoUrl: "https://www.youtube.com/embed/uA9SVQDsSHw",
      tags: ["business", "service", "croissance"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.14",
      title: "Nouveau modèle de pricing en 10 minutes",
      videoUrl: "https://www.youtube.com/embed/7Z2zeo9S1E8",
      tags: ["pricing", "stratégie", "prix"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.15",
      title: "J'ai fait presque 1M en service B2B, je détruis les mythes",
      videoUrl: "https://www.youtube.com/embed/cCIRCOrQFA8",
      tags: ["B2B", "service", "mythes"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.16",
      title: "3 règles essentielles pour performer en copywriting",
      videoUrl: "https://www.youtube.com/embed/SuOh9UhafCc",
      tags: ["copywriting", "règles", "performance"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.17",
      title: "Comment faire 145 000€ avec ce que vous avez déjà",
      videoUrl: "https://www.youtube.com/embed/sT-KiO9FGKs",
      tags: ["revenus", "stratégie", "optimisation"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.18",
      title: "Passer de 0 à 1M€/an avec 99,99% de chances de succès",
      videoUrl: "https://www.youtube.com/embed/AUW_z21Lk4U",
      tags: ["croissance", "stratégie", "succès"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.19",
      title: "A player vs débutants, qui recruter et comment",
      videoUrl: "https://www.youtube.com/embed/nsTbVJKJ5KM",
      tags: ["recrutement", "équipe", "stratégie"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.20",
      title: "Le framework derrière une offre à 3 500€ par mois",
      videoUrl: "https://www.youtube.com/embed/MhrbpRX6y2c",
      tags: ["offre", "framework", "prix"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.21",
      title: "Le business modèle parfait pour 2025 : comment gagner 1M€ sans salariés",
      videoUrl: "https://www.youtube.com/embed/pRtCpiVmJCQ",
      tags: ["business modèle", "scale", "revenus"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.22",
      title: "Pourquoi tu n'arrives pas à scaler (et comment exploser tes revenus en 90 jours)",
      videoUrl: "https://www.youtube.com/embed/nSGA7SzVVP4",
      tags: ["scale", "revenus", "stratégie"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.23",
      title: "Hack LinkedIn à 1M€ : comment exploser ton business avec 1 post par jour",
      videoUrl: "https://www.youtube.com/embed/QbJkaUyKCA4",
      tags: ["LinkedIn", "acquisition", "contenu"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    },
    {
      id: "9.24",
      title: "Comment closer des contrats à 20K€ sans appeler un seul prospect",
      videoUrl: "https://www.youtube.com/embed/Es7A-FY0EyA",
      tags: ["vente", "contrats", "stratégie"],
      moduleId: 9,
      callToAction: {
        explore: {
          text: "Consulter les modules disponibles",
          href: "/masterclass?viewMode=explore"
        },
        newsletter: {
          text: "S'inscrire à la newsletter",
          href: "/media#newsletter"
        }
      }
    }
  ]
};

// Types pour les composants
type ViewMode = 'focus' | 'explore';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

interface FocusModeProps {
  activePalierId: string | null;
  setActivePalierId: (id: string | null) => void;
  activeContent: Palier | null;
  setViewMode: (mode: ViewMode) => void;
}

interface WorkbookCardProps {
  title: string;
  description?: string;
  workbookUrl: string;
  className?: string;
}

interface RoadmapCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

// Composants
function ViewModeToggle({ viewMode, setViewMode }: ViewModeToggleProps) {
  return (
    <div className="flex items-center gap-2 p-1 bg-surfaceDark rounded-lg">
      <button
        onClick={() => setViewMode('focus')}
        className={`px-4 py-2 rounded-md transition-all ${
          viewMode === 'focus'
            ? 'bg-primary text-white'
            : 'text-textSecondary hover:text-white'
        }`}
      >
        Focus
      </button>
      <button
        onClick={() => setViewMode('explore')}
        className={`px-4 py-2 rounded-md transition-all ${
          viewMode === 'explore'
            ? 'bg-primary text-white'
            : 'text-textSecondary hover:text-white'
        }`}
      >
        Explorer
      </button>
    </div>
  );
}

function FocusMode({ 
  activePalierId, 
  setActivePalierId, 
  activeContent,
  setViewMode
}: FocusModeProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [progress, setProgress] = useState<Progress>({
    current: 0,
    total: moduleContent.paliers?.length || 0,
    percentage: 0
  });

  // Mettre à jour la progression en tenant compte des paliers
  useEffect(() => {
    if (activePalierId && moduleContent.paliers) {
      let totalPaliers = 0;
      let currentIndex = 0;
      
      moduleContent.paliers.forEach(palier => {
        totalPaliers++;
        if (palier.id === activePalierId) {
          currentIndex = totalPaliers;
        }
      });

      const percentage = (currentIndex / totalPaliers) * 100;
      setProgress({
        current: currentIndex,
        total: totalPaliers,
        percentage
      });
    }
  }, [activePalierId]);

  // Gestionnaire de raccourcis clavier
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      navigateToPalier('next');
    } else if (event.key === 'ArrowLeft') {
      navigateToPalier('prev');
    }
  }, [activePalierId]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const scrollToTop = () => {
    if (!contentRef.current || !shouldScroll) return;
    
    const rect = contentRef.current.getBoundingClientRect();
    if (rect.top < 0) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
    setShouldScroll(false);
  };

  useEffect(() => {
    if (shouldScroll) {
      scrollToTop();
    }
  }, [activeContent, shouldScroll]);

  const navigateToPalier = (direction: 'next' | 'prev') => {
    if (!activePalierId || !moduleContent.paliers) return;
    
    // Récupérer tous les paliers dans l'ordre
    const allPaliers = moduleContent.paliers;
    
    // Trouver l'index du palier actuel
    const currentIndex = allPaliers.findIndex(palier => palier.id === activePalierId);
    if (currentIndex === -1) return;
    
    // Calculer le nouvel index
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    // Vérifier si le nouvel index est valide
    if (nextIndex >= 0 && nextIndex < allPaliers.length) {
      setShouldScroll(true);
      setActivePalierId(allPaliers[nextIndex].id);
    }
  };

  // Mise à jour de la vérification du dernier palier
  const isLastVideo = activePalierId === moduleContent.paliers?.pop()?.id;

  if (!activeContent) return null;

  return (
    <div className="relative flex flex-col h-full">
      <div className="flex items-center justify-between p-4 bg-surfaceDark border-b border-border">
        <h2 className="text-xl font-bold text-white">{activeContent?.title}</h2>
        <button
          onClick={() => setViewMode('explore')}
          className="px-4 py-2 text-sm text-white bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          Explorer
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Barre de progression */}
        <div className="lg:col-span-3 mb-4">
          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Progression</span>
                <span className="text-sm font-medium text-primary">
                  {progress.current}/{progress.total}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                {Math.round(progress.percentage)}%
              </div>
            </div>
            <div className="h-2 bg-surfaceLight rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80"
                initial={{ width: 0 }}
                animate={{ width: `${progress.percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>Utilise les flèches ← → pour naviguer</span>
              <span>{activeContent?.title}</span>
            </div>
          </div>
        </div>

        {/* Contenu principal - Déplacé en premier pour mobile */}
        <div className="lg:col-span-2 lg:order-2">
          <div ref={contentRef} className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">
                {activeContent.title}
              </h2>
              
              {/* Lecteur vidéo ou message d'attente */}
              <div className="aspect-video relative bg-surfaceLight rounded-xl overflow-hidden mb-8 shadow-2xl border border-white/5">
                {activeContent.videoUrl && !activeContent.videoUrl.includes('/videos/') ? (
                  <iframe
                    src={formatVideoUrl(activeContent.videoUrl)}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ aspectRatio: '16/9' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 mb-6 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Nous travaillons sur ce contenu...
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-md">
                      Ce module est en cours de préparation. Inscris-toi à notre newsletter pour ne pas manquer sa sortie !
                    </p>
                    <Link
                      href="/media#newsletter"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      S'inscrire à la newsletter
                    </Link>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={() => navigateToPalier('prev')}
                  disabled={moduleContent.paliers?.findIndex(p => p.id === activePalierId) === 0}
                  variant="outline"
                  className="min-w-[150px]"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Précédent
                  </span>
                </Button>
                {isLastVideo ? (
                  <Link href="/masterclass/module3">
                    <Button className="min-w-[150px]">
                      <span className="flex items-center">
                        Module suivant
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={() => navigateToPalier('next')}
                    disabled={moduleContent.paliers?.findIndex(p => p.id === activePalierId) === (moduleContent.paliers?.length ?? 0) - 1}
                    className="min-w-[150px]"
                  >
                    <span className="flex items-center">
                      Suivant
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar avec navigation - Déplacé en second pour mobile */}
        <div className="lg:col-span-1 lg:order-1 space-y-6">
          {/* Panel de navigation */}
          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Link 
                href="/masterclass"
                className="p-2 rounded-full bg-surfaceLight text-textSecondary hover:text-textPrimary transition-colors"
                aria-label="Retour à la masterclass"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h2 className="text-xl font-bold text-accent">Progression</h2>
            </div>
            
            <div className="space-y-4">
              {moduleContent.paliers?.map((palier) => (
                <button
                  key={palier.id}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    palier.id === activePalierId 
                      ? '' 
                      : 'hover:bg-surfaceLight border-l-4 border-transparent'
                  }`}
                  onClick={() => {
                    setActivePalierId(palier.id);
                    scrollToTop();
                  }}
                  style={palier.id === activePalierId ? {
                    backgroundColor: `${moduleContent.color}15`,
                    borderLeft: `4px solid ${moduleContent.color}`
                  } : {}}
                >
                  <span className={`font-medium ${palier.id === activePalierId ? '' : 'text-textPrimary'}`}
                        style={palier.id === activePalierId ? {color: moduleContent.color} : {}}>
                    {palier.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Workbook */}
          <WorkbookCard
            title="Workbook du module"
            description="Télécharge le workbook pour suivre ta progression et mettre en pratique les concepts appris."
            workbookUrl={moduleContent.workbookUrl || ''}
          />

          {/* Roadmap personnalisée */}
          <RoadmapCard
            title="Roadmap personnalisée"
            description="Obtenir ma roadmap personnalisée pour aller plus vite dans mon business B2B et atteindre mes objectifs plus rapidement."
            buttonText="Obtenir ma roadmap"
            buttonHref="/roadmap"
          />
        </div>
      </div>
    </div>
  );
}

function ExploreMode({ setActivePalierId, setViewMode }: { 
  setActivePalierId: (id: string | null) => void;
  setViewMode: (mode: ViewMode) => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* En-tête */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link 
            href="/masterclass"
            className="text-primary hover:text-accent transition-colors"
          >
            ← Retour à la masterclass
          </Link>
          <ViewModeToggle viewMode="explore" setViewMode={setViewMode} />
        </div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Module Overview Card */}
          <RoadmapCard
            title="Roadmap personnalisée"
            description="Obtenir ma roadmap personnalisée pour aller plus vite dans mon business B2B et atteindre mes objectifs plus rapidement."
            buttonText="Obtenir ma roadmap"
            buttonHref="/roadmap"
            className="mb-8"
          />

          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">
              {moduleContent.icon} {moduleContent.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {moduleContent.description}
            </p>

            {/* Liste des paliers avec style distinctif */}
            <div className="space-y-8">
              {moduleContent.paliers?.map((palier) => (
                <motion.button
                  key={palier.id}
                  className="w-full text-left p-6 bg-surfaceLight/30 backdrop-blur-sm rounded-xl border border-white/5 shadow-lg hover:bg-surfaceLight/50 transition-all duration-200 group"
                  onClick={() => {
                    setActivePalierId(palier.id);
                    setViewMode('focus');
                    scrollToTop();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                    <h3 className="text-xl font-semibold text-white">{palier.title}</h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Workbook */}
          {moduleContent.workbookUrl && (
            <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">
                Workbook du module
              </h2>
              <p className="text-gray-300 mb-6">
                Télécharge le workbook pour suivre ta progression et mettre en pratique les concepts appris.
              </p>
              <a
                href={moduleContent.workbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger le workbook
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Module9Page() {
  const [activePalierId, setActivePalierId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  
  // Déterminer le contenu actif
  const activeContent = moduleContent.paliers?.find(p => p.id === activePalierId) || null;

  // Récupérer l'ID du palier depuis le localStorage au chargement
  useEffect(() => {
    const storedPalierId = localStorage.getItem('selectedPalierId');
    if (storedPalierId) {
      setActivePalierId(storedPalierId);
      setViewMode('focus');
      // Nettoyer le localStorage après utilisation
      localStorage.removeItem('selectedPalierId');
    }
  }, []);

  // Si aucun palier n'est sélectionné et qu'on est en mode focus, sélectionner le premier
  useEffect(() => {
    if (viewMode === 'focus' && !activePalierId && moduleContent.paliers?.length) {
      setActivePalierId(moduleContent.paliers[0].id);
    }
  }, [viewMode, activePalierId]);

  return (
    <div className="min-h-screen bg-background text-textPrimary p-4 md:p-8">
      {viewMode === 'focus' ? (
        <FocusMode
          activePalierId={activePalierId}
          setActivePalierId={setActivePalierId}
          activeContent={activeContent}
          setViewMode={setViewMode}
        />
      ) : (
        <ExploreMode
          setActivePalierId={setActivePalierId}
          setViewMode={setViewMode}
        />
      )}
    </div>
  );
} 