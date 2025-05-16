'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AssistantChat from '@/components/AssistantChat';
import Testimonials from '@/components/Testimonials';
import LogoMarquee from '@/components/LogoMarquee';
import RoundedAvatar from '@/components/RoundedAvatar';
import { useRouter } from 'next/navigation';
import RoadmapCTA from '@/components/RoadmapCTA';

// Définition des types
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
  id?: number; // Rendu optionnel
  title: string;
  description?: string; // Rendu optionnel
  icon?: string; // Rendu optionnel
  color?: string; // Rendu optionnel
  workbookUrl?: string; // Rendu optionnel
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

interface Introduction {
  title: string;
  description: string;
  videoUrl: string;
  workbookUrl?: string; // Rendu optionnel
}

interface MasterclassContent {
  introduction: Introduction;
  modules: Module[];
}

// Couleurs du thème
const COLORS = {
  background: '#000000',
  surfaceLight: '#121212',
  surfaceMedium: '#1E1E1E',
  surfaceDark: '#0A0A0A',
  primary: '#9F99EB', // Button purple
  secondary: '#99E5EB', // Cyan
  accent: '#FFF1DE', // Beige
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textAccent: '#9F99EB', // Purple
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
      // Convertir l'URL de vidéo Tella en URL d'intégration
      return url.replace('/video/', '/embed/');
    } else if (url.includes('youtube.com')) {
      // Convertir l'URL YouTube en URL d'intégration
      const parts = url.split('v=');
      if (parts.length < 2) return url;
      const videoId = parts[1].split('&')[0]; // Gérer les paramètres supplémentaires
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    } else if (url.includes('youtu.be')) {
      // Gérer les URLs YouTube courtes
      const parts = url.split('youtu.be/');
      if (parts.length < 2) return url;
      const videoId = parts[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
    } else if (url.includes('loom.com/share')) {
      // Convertir l'URL Loom en URL d'intégration
      return url.replace('share', 'embed');
    }
    return url;
  } catch (error) {
    console.error('Error formatting video URL:', error);
    return url;
  }
}

// Structure des données de la masterclass avec des tags et couleurs
const masterclassContent: MasterclassContent = {
  introduction: {
    title: "Introduction - Commence ici",
    description: "Bienvenue dans la Masterclass BPC. Commence ton parcours ici!",
    videoUrl: formatVideoUrl("https://www.tella.tv/video/introduction-hg5d"),
    // workbookUrl: "/workbooks/introduction-masterclass.pdf", // Retiré car pas de workbook pour l'introduction
  },
  modules: [
    {
      id: 0,
      title: "Mindset",
      description: "Le mindset à adopter pour réussir",
      icon: "🧠",
      color: "#9F99EB", // Purple
      workbookUrl: "/workbooks/0-mindset.pdf", // URL locale au lieu de Notion
      paliers: [
        {
          id: "0.0",
          title: "Introduction au Mindset",
          videoUrl: "https://www.tella.tv/video/introduction-module-0-mindset-9h23",
          tags: ["mindset", "introduction", "fondamentaux"],
          moduleId: 0,
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
          id: "0.1",
          title: "Briser ses barrières mentales",
          videoUrl: "https://www.tella.tv/video/01-briser-ses-barrieres-mentales-hlwo",
          tags: ["mindset", "débutant", "psychologie"],
          moduleId: 0,
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
          id: "0.2",
          title: "Mindset de croissance",
          videoUrl: "/videos/0-2-mindset-croissance.mp4",
          tags: ["mindset", "développement", "croissance"],
          moduleId: 0,
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
          id: "0.3",
          title: "Audit de ton business actuel",
          videoUrl: "https://www.tella.tv/video/03-audit-de-ton-business-cvxq",
          tags: ["mindset", "audit", "business"],
          moduleId: 0,
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
          id: "0.4",
          title: "L'extrémistant",
          videoUrl: "https://www.tella.tv/video/04-lextremistant-7las",
          tags: ["mindset", "action", "motivation"],
          moduleId: 0,
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
          id: "0.5",
          title: "Comment prendre de bonnes décisions stratégiques ?",
          videoUrl: "/videos/0-5-bonnes-decisions.mp4",
          tags: ["mindset", "décision", "stratégie"],
          moduleId: 0,
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
          id: "0.6",
          title: "La vérité sur l'argent",
          videoUrl: "https://www.tella.tv/video/module-0-mindset-06-1-cjel",
          tags: ["mindset", "argent", "finance"],
          moduleId: 0,
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
          id: "0.7",
          title: "Le 1% vs les 99%",
          videoUrl: "https://www.tella.tv/video/07-le-1-vs-les-99-38eq",
          tags: ["mindset", "performance", "excellence"],
          moduleId: 0,
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
    },
    {
      id: 1,
      title: "Créer son offre irrésistible",
      description: "Tout commence ici. Cette phase est la base de tout. Si elle est mal exécutée, le reste du plan tombe à l'eau. On doit mettre 100 % de focus sur cette partie.",
      icon: "💎",
      color: "#FF9800", // Orange
      workbookUrl: "/workbooks/1-offre-irresistible.pdf",
      paliers: [
        {
          id: "1",
          title: "Introduction à la création d'offre",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/introduction-module-1-41lx"),
          tags: ["offre", "introduction", "fondamentaux"],
          moduleId: 1,
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
          id: "1.0",
          title: "Choisir un marché",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/10-1-42fn"),
          tags: ["offre", "marché", "positionnement"],
          moduleId: 1,
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
          id: "1.1",
          title: "Devenir un monopole",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/devenir-un-monopole-percu-0i2m"),
          tags: ["offre", "différenciation", "stratégie"],
          moduleId: 1,
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
          id: "1.2",
          title: "Le PaaS",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/securisez-votre-entreprise-avec-le-paas-1xi1"),
          tags: ["offre", "service", "modèle économique"],
          moduleId: 1,
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
          id: "1.3",
          title: "Nouveau pricing model",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/valoriser-ton-expertise-8gm9"),
          tags: ["offre", "prix", "monétisation"],
          moduleId: 1,
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
          id: "1.4",
          title: "Délivrer ton offre",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/livraison-d-excellence-et-leverage-88sb"),
          tags: ["offre", "livraison", "satisfaction client"],
          moduleId: 1,
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
          id: "1.5",
          title: "Créer son MRR",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/creer-un-modele-de-revenus-recurrents-8ijc"),
          tags: ["offre", "revenu récurrent", "abonnement"],
          moduleId: 1,
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
          id: "1.6",
          title: "Les composantes de ton offre",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/creez-une-offre-irresistible-06ms"),
          tags: ["offre", "structure", "valeur"],
          moduleId: 1,
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
          id: "1.7",
          title: "Créer son cross-downsell",
          videoUrl: formatVideoUrl("https://www.tella.tv/video/creer-un-cross-downsell-strategique-5okv"),
          tags: ["offre", "vente additionnelle", "stratégie commerciale"],
          moduleId: 1,
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
    },
    {
      id: 2,
      title: "Acquisition",
      description: "Comment acquérir des clients de manière prédictible",
      icon: "🎯",
      color: "#4CAF50", // Green
      workbookUrl: "/workbooks/2-acquisition.pdf",
      rubriques: [
        {
          title: "Introduction",
          paliers: [
            {
              id: "2",
              title: "Introduction à l'acquisition",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/introduction-module-2-59so"),
              tags: ["acquisition", "introduction", "fondamentaux"],
              moduleId: 2,
              rubrique: "Introduction",
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
        },
        {
          title: "Fondamentaux",
          paliers: [
            {
              id: "2.0",
              title: "Checklist de launch des campagnes",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/20-auml"),
              tags: ["acquisition", "campagnes", "lancement"],
              moduleId: 2,
              rubrique: "Fondamentaux",
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
              id: "2.1",
              title: "Optimiser ses profils",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/21-1-gbk5"),
              tags: ["acquisition", "profils", "optimisation"],
              moduleId: 2,
              rubrique: "Fondamentaux",
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
        },
        {
          id: 2.2,
          title: "Process Ads",
          description: "Comment créer des campagnes publicitaires qui convertissent",
          icon: "📱",
          color: "#4CAF50", // Green
          workbookUrl: "/workbooks/2-2-ads.pdf", // URL locale
          paliers: [
            {
              id: "2.2.1",
              title: "Pourquoi les publicités sont indispensables à ton acquisition B2B",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/221-hqiv"),
              tags: ["acquisition", "publicité", "stratégie"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.2",
              title: "Guide de Configuration des Business Manager pour tes Campagnes Publicitaires",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/222-cjor"),
              tags: ["acquisition", "facebook", "technique"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.3",
              title: "Lancer des Publicités qui Convertissent sur Meta",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/223-92ro"),
              tags: ["acquisition", "ads", "stratégie"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.4",
              title: "Lancer des Publicités qui Convertissent sur LinkedIn",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/224-99vi"),
              tags: ["acquisition", "ads", "copywriting"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.5",
              title: "Lancer des Publicités qui Convertissent sur Google Ads",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/225-gd0j"),
              tags: ["acquisition", "ads", "vidéo"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.6",
              title: "Créer des ads textuelles qui convertissent en 48h",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/226-cbio"),
              tags: ["acquisition", "ads", "vidéo"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.7",
              title: "Créer des Ads VTH et Loom qui convertissent",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/227-0euh"),
              tags: ["acquisition", "ads", "vidéo"],
              moduleId: 2,
              rubrique: "Process Ads",
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
              id: "2.2.8",
              title: "Les Ads VSL",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/228-8yox"),
              tags: ["acquisition", "ads", "vidéo"],
              moduleId: 2,
              rubrique: "Process Ads",
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
        },
        {
          title: "La prospection",
          workbookUrl: "/workbooks/2-3-prospection.pdf", // URL locale
          paliers: [
            {
              id: "2.3.1",
              title: "Fondamentaux de la Prospection B2B",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/231-giro"),
              tags: ["acquisition", "prospection", "stratégie"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.2",
              title: "Trouver une cible prête à acheter",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/232-e7sc"),
              tags: ["acquisition", "prospection", "ciblage"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.3",
              title: "Les 7 principes fondamentaux de la prospection B2B",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/233-1eq9"),
              tags: ["acquisition", "prospection", "principes"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.4",
              title: "L'Art et la Science des Messages de Prospection qui Convertissent",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/234-6qy1"),
              tags: ["acquisition", "prospection", "messages"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.6",
              title: "Maîtriser la prospection via la recherche booléenne",
              videoUrl: formatVideoUrl("https://www.youtube.com/watch?v=Vu7g-x1lDRw"),
              tags: ["acquisition", "prospection", "recherche"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.7",
              title: "Prospecter la communauté pour générer des rendez-vous",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/237-9mhk"),
              tags: ["acquisition", "prospection", "communauté"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.8",
              title: "Utiliser ses concurrents pour générer des rendez-vous",
              videoUrl: formatVideoUrl("https://www.youtube.com/watch?v=QhDPycCHpQs"),
              tags: ["acquisition", "prospection", "concurrents"],
              moduleId: 2,
              rubrique: "La prospection",
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
              id: "2.3.9",
              title: "Lancer ses campagnes de prospection avec Lemlist",
              videoUrl: formatVideoUrl("https://www.tella.tv/video/239-huf9"),
              tags: ["acquisition", "prospection", "automation"],
              moduleId: 2,
              rubrique: "La prospection",
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
        },
        {
          title: "Les partenariats",
          paliers: [
            {
              id: "2.4.1",
              title: "Pourquoi les partenariats sont si puissants ?",
              videoUrl: "https://www.tella.tv/video/240-9e31",
              tags: ["acquisition", "partenariats", "stratégie"],
              moduleId: 2,
              rubrique: "Les partenariats",
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
              id: "2.4.2",
              title: "Comment trouver des partenaires stratégiques ?",
              videoUrl: "https://www.tella.tv/video/242-1-bdaj",
              tags: ["acquisition", "partenariats", "recherche"],
              moduleId: 2,
              rubrique: "Les partenariats",
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
              id: "2.4.3",
              title: "Quel message envoyer à tes partenaires potentiels",
              videoUrl: "https://www.tella.tv/video/243-9gm9",
              tags: ["acquisition", "partenariats", "communication"],
              moduleId: 2,
              rubrique: "Les partenariats",
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
        },
        {
          title: "BONUS",
          paliers: [
            {
              id: "2.5",
              title: "Signe 3 clients cette semaine",
              videoUrl: "https://www.tella.tv/video/bonus-signez-3-clients-cette-semaine-devo",
              tags: ["acquisition", "vente", "conversion"],
              moduleId: 2,
              rubrique: "BONUS",
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
        }
      ]
    },
    {
      id: 2.5,
      title: "Module Unique - Le contenu",
      description: "🎯 Créer du contenu qui convertit",
      icon: "📝",
      color: "#FF5722", // Deep Orange
      workbookUrl: "/workbooks/module-unique-contenu.pdf",
      paliers: [
        {
          id: "2.5.0",
          title: "Module en développement",
          videoUrl: "",
          description: "Nous travaillons sur ce module pour t'offrir la meilleure expérience disponible sur le marché Francophone.",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          },
          tags: ["contenu", "développement"],
          moduleId: 2.5
        }
      ]
    },
    {
      id: 3,
      title: "Newsletter & Communauté",
      description: "👥 Crée une audience qui t'appartient",
      icon: "📧",
      color: "#2196F3", // Blue
      workbookUrl: "/workbooks/3-newsletter-communaute.pdf",
      paliers: [
        {
          id: "3.0",
          title: "Introduction à la Newsletter & Communauté",
          videoUrl: "https://www.tella.tv/video/30-7d49",
          tags: ["communauté", "introduction", "fondamentaux"],
          moduleId: 3,
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
          id: "3.1",
          title: "Créer son groupe privé",
          videoUrl: "https://www.tella.tv/video/31-cyos",
          tags: ["communauté", "groupe", "engagement"],
          moduleId: 3,
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
          id: "3.2",
          title: "Envoyer des emails à sa liste",
          videoUrl: "https://www.tella.tv/video/32-as2z",
          tags: ["email", "marketing", "communication"],
          moduleId: 3,
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
          id: "3.3",
          title: "Comment faire une séquence de bienvenue ?",
          videoUrl: "https://www.tella.tv/video/33-1-60zi",
          tags: ["email", "automation", "onboarding"],
          moduleId: 3,
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
    },
    {
      id: 4,
      title: "Éduquer ses prospects",
      description: "🧑‍🏫 Avoir des utilisateurs éduqués",
      icon: "📚",
      color: "#E91E63", // Pink
      workbookUrl: "/workbooks/4-eduquer-prospects.pdf",
      paliers: [
        {
          id: "4.0",
          title: "Sophistication de marché",
          videoUrl: "https://www.tella.tv/video/40-1-bt03",
          tags: ["éducation", "marché", "stratégie"],
          moduleId: 4,
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
          id: "4.1",
          title: "Structure d'un tunnel d'éducation",
          videoUrl: "https://www.tella.tv/video/41-d0k4",
          tags: ["éducation", "tunnel", "stratégie"],
          moduleId: 4,
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
          id: "4.2",
          title: "Comment s'enregistrer ?",
          videoUrl: "https://www.tella.tv/video/42-d085",
          tags: ["éducation", "technique", "contenu"],
          moduleId: 4,
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
          id: "4.3",
          title: "Obtenir des case studies",
          videoUrl: "https://www.tella.tv/video/43-1-e0bm",
          tags: ["éducation", "social proof", "conversion"],
          moduleId: 4,
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
          id: "4.4",
          title: "Comment faire une thank you page ?",
          videoUrl: "https://www.tella.tv/video/44-5qvo",
          tags: ["éducation", "conversion", "web"],
          moduleId: 4,
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
          id: "4.5",
          title: "Qualifier et préchauffer ses prospects",
          videoUrl: "https://www.tella.tv/video/45-1-9v5z",
          tags: ["éducation", "conversion", "qualification"],
          moduleId: 4,
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
    },
    {
      id: 5,
      title: "L'art de faire des VSL",
      description: "🎬 Crée des vidéos de vente qui convertissent",
      icon: "🎥",
      color: "#9C27B0", // Purple
      workbookUrl: "/workbooks/5-art-vsl.pdf",
      rubriques: [
        {
          title: "La théorie",
          paliers: [
            {
              id: "5",
              title: "Intro à lire absolument",
              videoUrl: "https://www.tella.tv/video/5-9i7f",
              tags: ["VSL", "introduction", "fondamentaux"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.0",
              title: "Comment s'organiser pour écrire sa sales letter ?",
              videoUrl: "https://www.tella.tv/video/50-e8pc",
              tags: ["VSL", "organisation", "sales letter"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.1",
              title: "Comment écrire une bonne headline / Un bon titre ?",
              videoUrl: "https://www.tella.tv/video/51-1-253j",
              tags: ["VSL", "headline", "copywriting"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.2",
              title: "Comment avoir de la social proof",
              videoUrl: "https://www.tella.tv/video/52-gq11",
              tags: ["VSL", "social proof", "témoignages"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.3",
              title: "Identification du prospect en début de VSL",
              videoUrl: "https://www.tella.tv/video/53-euz9",
              tags: ["VSL", "identification", "persona"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.4",
              title: "Introduire le core concept",
              videoUrl: "https://www.tella.tv/video/54-5jjw",
              tags: ["VSL", "concept", "stratégie"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.5",
              title: "\"J'ai un background\"",
              videoUrl: "https://www.tella.tv/video/55-5wdr",
              tags: ["VSL", "crédibilité", "autorité"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.6",
              title: "Apporter de la valeur avec tes IUU (Insights Uniques et Utiles)",
              videoUrl: "https://www.tella.tv/video/56-f83f",
              tags: ["VSL", "valeur", "insights"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.7",
              title: "Apporter ta solution et booker un call",
              videoUrl: "https://www.tella.tv/video/57-9ioj",
              tags: ["VSL", "solution", "conversion"],
              moduleId: 5,
              rubrique: "La théorie",
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
              id: "5.8",
              title: "Optimiser sa VSL",
              videoUrl: "https://www.tella.tv/video/58-94q1",
              tags: ["VSL", "optimisation", "amélioration"],
              moduleId: 5,
              rubrique: "La théorie",
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
        },
        {
          title: "La pratique",
          paliers: [
            {
              id: "5.9",
              title: "Template de VSL long-form",
              videoUrl: "https://www.loom.com/share/f83bffab0d424366a38e252a1a12145e?sid=92b9df6f-a182-409f-8c74-e955058abf93",
              tags: ["VSL", "template", "long-form"],
              moduleId: 5,
              rubrique: "La pratique",
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
              id: "5.10",
              title: "Template de VSL short-form",
              videoUrl: "https://www.loom.com/share/435c286b566a4154ae690936dbcafa8f?sid=35a73ac7-5a84-4fc2-bbf2-f995c94d13b0",
              tags: ["VSL", "template", "short-form"],
              moduleId: 5,
              rubrique: "La pratique",
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
              id: "5.11",
              title: "Checklist d'une bonne VSL",
              videoUrl: "https://www.tella.tv/video/checklist-dune-bonne-vsl-erxm",
              tags: ["VSL", "checklist", "qualité"],
              moduleId: 5,
              rubrique: "La pratique",
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
        }
      ]
    },
    {
      id: 6,
      title: "Setting",
      description: "📅 Organise tes rendez-vous de manière efficace",
      icon: "⚡️",
      color: "#795548", // Brown
      workbookUrl: "/workbooks/6-setting.pdf",
      paliers: [
        {
          id: "6.0",
          title: "Module en développement",
          videoUrl: "",
          description: "Nous travaillons sur ce module pour t'offrir la meilleure expérience disponible sur le marché Francophone.",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          },
          tags: ["setting", "développement"],
          moduleId: 6
        }
      ]
    },
    {
      id: 7,
      title: "Tout pour closer en B2B",
      description: "📞 Tout ce dont tu as besoin pour vendre à n'importe qui",
      icon: "🤝",
      color: "#673AB7", // Deep Purple
      workbookUrl: "/workbooks/7-closer-b2b.pdf",
      paliers: [
        {
          id: "7.0",
          title: "Module en développement",
          videoUrl: "",
          description: "Nous travaillons sur ce module pour t'offrir la meilleure expérience disponible sur le marché Francophone.",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          },
          tags: ["vente", "développement"],
          moduleId: 7
        }
      ]
    },
    {
      id: 8,
      title: "Satisfaire ses clients",
      description: "🛠️ Tout ce dont tu as besoin pour avoir des clients satisfaits",
      icon: "🌟",
      color: "#FFC107", // Amber
      workbookUrl: "/workbooks/8-satisfaction-clients.pdf",
      paliers: [
        {
          id: "8.0",
          title: "Module en développement",
          videoUrl: "",
          description: "Nous travaillons sur ce module pour t'offrir la meilleure expérience disponible sur le marché Francophone.",
          callToAction: {
            explore: {
              text: "Consulter les modules disponibles",
              href: "/masterclass?viewMode=explore"
            },
            newsletter: {
              text: "S'inscrire à la newsletter",
              href: "/media#newsletter"
            }
          },
          tags: ["satisfaction", "développement"],
          moduleId: 8
        }
      ]
    },
    {
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
    }
  ]
};

// Fonction pour aplatir tous les paliers en une seule liste
function getAllPaliers(): Palier[] {
  let allPaliers: Palier[] = [];
  
  masterclassContent.modules.forEach(module => {
    if (module.paliers) {
      allPaliers = [...allPaliers, ...module.paliers.map(p => ({...p, moduleId: module.id}))];
    }
    
    if (module.rubriques) {
      module.rubriques.forEach(rubrique => {
        allPaliers = [...allPaliers, ...rubrique.paliers.map(p => ({...p, moduleId: module.id, rubrique: rubrique.title}))];
      });
    }
  });
  
  // Trier par ID
  return allPaliers.sort((a, b) => {
    const aIdParts = a.id.split('.').map(Number);
    const bIdParts = b.id.split('.').map(Number);
    
    for (let i = 0; i < Math.min(aIdParts.length, bIdParts.length); i++) {
      if (aIdParts[i] !== bIdParts[i]) {
        return aIdParts[i] - bIdParts[i];
      }
    }
    
    return aIdParts.length - bIdParts.length;
  });
}

// Fonction pour trouver le module par l'ID de palier
function findModuleByPalierId(palierId: string): Module | null {
  for (const module of masterclassContent.modules) {
    if (module.paliers?.some(p => p.id === palierId)) {
      return module;
    }
    
    if (module.rubriques?.some(r => r.paliers.some(p => p.id === palierId))) {
      return module;
    }
  }
  
  return null;
}

// Fonction pour trouver le palier suivant ou précédent
function getAdjacentPalier(palierId: string, direction: 'next' | 'prev'): Palier | null {
  const allPaliers = getAllPaliers();
  const currentIndex = allPaliers.findIndex(p => p.id === palierId);
  
  if (currentIndex === -1) return null;
  
  const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
  
  if (targetIndex < 0 || targetIndex >= allPaliers.length) {
    return null;
  }
  
  return allPaliers[targetIndex];
}

// Composant pour basculer entre les modes d'affichage
interface ViewModeToggleProps {
  viewMode: 'focus' | 'explore';
  setViewMode: (mode: 'focus' | 'explore') => void;
}

function ViewModeToggle({ viewMode, setViewMode }: ViewModeToggleProps) {
  return (
    <div className="flex items-center bg-surfaceMedium/50 backdrop-blur-sm rounded-full p-1.5 w-fit border border-white/5 shadow-lg">
      <motion.button
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center relative ${
          viewMode === 'focus' 
            ? 'text-white' 
            : 'text-textSecondary hover:text-white'
        }`}
        onClick={() => setViewMode('focus')}
        aria-label="Mode Focus"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {viewMode === 'focus' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-button/90 to-button/70 rounded-full shadow-lg"
            layoutId="activeMode"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="flex items-center relative z-10">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Focus
        </span>
      </motion.button>
      <motion.button
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center relative ${
          viewMode === 'explore' 
            ? 'text-white' 
            : 'text-textSecondary hover:text-white'
        }`}
        onClick={() => setViewMode('explore')}
        aria-label="Mode Explorer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {viewMode === 'explore' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-button/90 to-button/70 rounded-full shadow-lg"
            layoutId="activeMode"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="flex items-center relative z-10">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Explorer
        </span>
      </motion.button>
    </div>
  );
}

// Composant pour afficher les tags
interface TagsDisplayProps {
  tags?: string[];
}

function TagsDisplay({ tags }: TagsDisplayProps) {
  // Ne plus afficher les tags
  return null;
}

// Composant pour le mode d'affichage Focus (navigation organique)
interface FocusModeProps {
  activeModuleId: number;
  activePalierId: string | null;
  setActiveModuleId: (id: number) => void;
  setActivePalierId: (id: string | null) => void;
  activeContent: Palier | Introduction | null;
  module: Module | null;
  setViewMode: (mode: 'focus' | 'explore') => void;
}

function FocusMode({ 
  activeModuleId, 
  activePalierId, 
  setActiveModuleId, 
  setActivePalierId, 
  activeContent, 
  module,
  setViewMode
}: FocusModeProps) {
  // Ajouter une référence pour le scroll
  const contentRef = useRef<HTMLDivElement>(null);

  // Fonction pour scroller vers le haut du contenu
  const scrollToTop = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  // Navigation vers le palier suivant ou précédent
  const navigateToPalier = (direction: 'next' | 'prev') => {
    if (!activePalierId) return;
    
    const nextPalier = getAdjacentPalier(activePalierId, direction);
    if (!nextPalier) return;
    
    const nextModule = findModuleByPalierId(nextPalier.id);
    if (nextModule) {
      setActiveModuleId(nextModule.id);
      setActivePalierId(nextPalier.id);
    }
  };
  
  // Pour l'introduction, afficher un design spécial
  if (activeModuleId === -1) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-2xl">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">À propos de la Masterclass</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Notre Masterclass te guide pas à pas à travers tous les aspects essentiels pour réussir en B2B.
            </p>
            <div className="space-y-3">
              {masterclassContent.modules.map((m) => (
                <motion.button
                  key={m.id}
                  className="w-full text-left p-4 rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center group"
                  style={{
                    backgroundColor: `${m.color}10`,
                    border: `1px solid ${m.color}20`
                  }}
                  onClick={() => {
                    setActiveModuleId(m.id);
                    setActivePalierId(null);
                  }}
                  whileHover={{ scale: 1.02, backgroundColor: `${m.color}20` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mr-4 transition-colors"
                    style={{ backgroundColor: `${m.color}20` }}
                  >
                    {m.icon}
                  </div>
                  <span className="font-medium text-white group-hover:text-white transition-colors">{m.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div ref={contentRef} className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-4">
                {activeContent?.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {activeContent?.description}
              </p>
            
            {/* Lecteur vidéo */}
              <div className="aspect-video relative bg-surfaceLight rounded-xl overflow-hidden mb-8 shadow-2xl border border-white/5">
              {activeContent?.videoUrl ? (
                <iframe
                  src={formatVideoUrl(activeContent.videoUrl)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9' }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-400">Vidéo en cours de préparation</p>
                </div>
              )}
            </div>
            
            {/* Bouton Vidéo Suivante pour l'introduction */}
              <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => {
                    setActiveModuleId(0);
                    setActivePalierId("0.1");
                    setViewMode('focus');
                    scrollToTop();
                  }}
                  className="min-w-[250px] text-lg py-6 bg-button hover:bg-button/90 transform hover:scale-[1.02] transition-all duration-200 shadow-xl"
                >
                  <span className="flex items-center">
                    Commencer maintenant
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
              </Button>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  // Pour un module normal, afficher le contenu du module
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar avec navigation */}
      <div className="lg:col-span-1 space-y-6">
        {/* Panel de navigation entre modules */}
        <div className="bg-surfaceMedium rounded-lg p-6 shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <button 
              className="p-2 rounded-full bg-surfaceLight text-textSecondary hover:text-textPrimary transition-colors"
              onClick={() => {
                setActiveModuleId(-1);
                setActivePalierId(null);
              }}
              aria-label="Retour à l'introduction"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-accent">Modules</h2>
          </div>
          
          <div className="space-y-2">
            {masterclassContent.modules.map((m) => (
              <button
                key={m.id}
                className={`w-full text-left p-3 rounded-md transition-colors flex items-center ${
                  m.id === activeModuleId 
                    ? '' 
                    : 'hover:bg-surfaceLight border-l-4 border-transparent'
                }`}
                onClick={() => {
                  setActiveModuleId(m.id);
                  setActivePalierId(null);
                }}
                style={m.id === activeModuleId ? {
                  backgroundColor: `${m.color}15`,
                  borderLeft: `4px solid ${m.color}`
                } : {}}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3`}
                  style={{ backgroundColor: m.color || COLORS.primary }}
                >
                  {m.icon}
                </div>
                <span className={`font-medium ${m.id === activeModuleId ? '' : 'text-textPrimary'}`}
                      style={m.id === activeModuleId ? {color: m.color} : {}}>
                  {m.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Panel avec le palier actif et la navigation */}
        {module && activePalierId && (
          <div className="bg-surfaceMedium rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-bold text-accent mb-4">Progression</h3>
            
            {/* Si le module a des rubriques, les afficher */}
            {module.rubriques ? (
              <div className="space-y-6">
                {module.rubriques.map((rubrique, index) => {
                  const hasPalierInRubrique = rubrique.paliers.some(p => p.id === activePalierId);
                  
                  return (
                    <div key={index} className={`space-y-2 ${hasPalierInRubrique ? '' : 'opacity-70'}`}>
                      <h4 className="font-medium text-textSecondary">{rubrique.title}</h4>
                      
                      {rubrique.paliers.map((palier) => (
                        <button
                          key={palier.id}
                          className={`w-full text-left p-3 rounded-md transition-colors ${
                            palier.id === activePalierId 
                              ? '' 
                              : 'hover:bg-surfaceLight text-textSecondary'
                          }`}
                          onClick={() => setActivePalierId(palier.id)}
                          style={palier.id === activePalierId ? {
                            backgroundColor: `${module.color}15`,
                            borderLeft: `4px solid ${module.color}`
                          } : {}}
                        >
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2"
                                  style={{
                                    backgroundColor: palier.id === activePalierId ? module.color : 'var(--color-surface-light)',
                                    color: palier.id === activePalierId ? 'white' : 'var(--color-text-secondary)'
                                  }}>
                              {palier.id}
                            </span>
                            <span className={palier.id === activePalierId ? 'text-textPrimary font-medium' : ''}>
                              {palier.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-2">
                {module.paliers?.map((palier) => (
                  <button
                    key={palier.id}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      palier.id === activePalierId 
                        ? '' 
                        : 'hover:bg-surfaceLight text-textSecondary'
                    }`}
                    onClick={() => setActivePalierId(palier.id)}
                    style={palier.id === activePalierId ? {
                      backgroundColor: `${module.color}15`,
                      borderLeft: `4px solid ${module.color}`
                    } : {}}
                  >
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2"
                            style={{
                              backgroundColor: palier.id === activePalierId ? module.color : 'var(--color-surface-light)',
                              color: palier.id === activePalierId ? 'white' : 'var(--color-text-secondary)'
                            }}>
                        {palier.id}
                      </span>
                      <span className={palier.id === activePalierId ? 'text-textPrimary font-medium' : ''}>
                        {palier.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            {/* Navigation précédent/suivant */}
            <div className="flex justify-between mt-6 pt-4 border-t border-border">
              <button
                className="px-3 py-1 bg-surfaceLight rounded-md text-textSecondary hover:text-textPrimary flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => navigateToPalier('prev')}
                disabled={!getAdjacentPalier(activePalierId, 'prev')}
                style={{
                  backgroundColor: module ? `${module.color}15` : 'var(--color-surface-light)',
                  border: module ? `1px solid ${module.color}30` : 'none'
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: module ? module.color : 'currentColor'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span style={{color: module ? module.color : 'var(--color-text-secondary)'}}>Précédent</span>
              </button>
              <button
                className="px-3 py-1 bg-surfaceLight rounded-md text-textSecondary hover:text-textPrimary flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => navigateToPalier('next')}
                disabled={!getAdjacentPalier(activePalierId, 'next')}
                style={{
                  backgroundColor: module ? `${module.color}15` : 'var(--color-surface-light)',
                  border: module ? `1px solid ${module.color}30` : 'none'
                }}
              >
                <span style={{color: module ? module.color : 'var(--color-text-secondary)'}}>Suivant</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: module ? module.color : 'currentColor'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Contenu principal */}
      <div className="lg:col-span-2 space-y-6">
        {activeContent ? (
          <>
            {/* Fil d'Ariane */}
            <div className="bg-surfaceLight px-4 py-2 rounded-md text-sm text-textSecondary flex items-center">
              <button 
                className="hover:text-textPrimary transition-colors"
                onClick={() => setActiveModuleId(-1)}
              >
                Accueil
              </button>
              <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <button 
                className="hover:text-textPrimary transition-colors"
                onClick={() => {
                  setActiveModuleId(module?.id || 0);
                  setActivePalierId(null);
                }}
              >
                {module?.title}
              </button>
              {(activeContent as Palier)?.rubrique && (
                <>
                  <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{(activeContent as Palier).rubrique}</span>
                </>
              )}
              <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-textPrimary">{activeContent.title}</span>
            </div>
            
            {/* Contenu du palier */}
            <div className="bg-surfaceMedium rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-button/5 rounded-full blur-[100px] opacity-30" />
              
              <div className="relative">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 mb-4"
                >
                  {activeContent.title}
                </motion.h2>
              
              {/* Tags pour les paliers */}
              {(activeContent as Palier).tags && (
                <TagsDisplay tags={(activeContent as Palier).tags} />
              )}
              
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-300 my-6 leading-relaxed"
                >
                  {activeContent.description}
                </motion.p>
              
              {/* Lecteur vidéo */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="aspect-video relative bg-surfaceLight rounded-xl overflow-hidden mb-8 shadow-2xl border border-white/5"
                >
                {activeContent.videoUrl ? (
                  <iframe
                    src={formatVideoUrl(activeContent.videoUrl)}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ aspectRatio: '16/9' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-textMuted">Vidéo en cours de préparation</p>
                  </div>
                )}
                </motion.div>
              
              {/* Bouton Vidéo Suivante */}
              {activePalierId && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center mb-6"
                  >
                  <Button
                    size="lg"
                    onClick={() => navigateToPalier('next')}
                    disabled={!getAdjacentPalier(activePalierId, 'next')}
                      className={`min-w-[200px] text-lg py-6 bg-button hover:bg-button/90 transform hover:scale-[1.02] transition-all duration-200 ${
                        !getAdjacentPalier(activePalierId, 'next') ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    <span className="flex items-center">
                      Vidéo Suivante
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Téléchargement du workbook */}
            {module && module.workbookUrl && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-surfaceMedium rounded-2xl p-8 shadow-lg mt-6 relative overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 mb-6">Ressources</h3>
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-surfaceLight/50 backdrop-blur-sm rounded-xl border border-white/5">
                    <div className="flex items-center relative">
                      <div className="absolute inset-0 bg-button/20 blur-xl"></div>
                      <svg className="w-12 h-12 text-button relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <svg className="w-6 h-6 text-accent -ml-4 -mt-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-xl font-medium text-white mb-1">Workbook: {module.title}</h4>
                      <p className="text-gray-400">PDF - Téléchargement gratuit</p>
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={module.workbookUrl} 
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-button/10 border border-button/30 text-white rounded-xl hover:bg-button/20 transition-all duration-200 flex items-center space-x-2"
                  >
                      <span>Télécharger</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </motion.a>
                </div>
              </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="bg-surfaceMedium rounded-lg p-6 shadow-lg text-center">
            <svg className="w-16 h-16 text-textMuted mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-textPrimary">Sélectionne un module pour commencer ton apprentissage</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Ajout des types pour les catégories de modules
type ModuleCategory = 'foundation' | 'acquisition' | 'conversion' | 'scale';

interface ModuleCategoryInfo {
  label: string;
  description: string;
  color: string;
}

// Fonction utilitaire pour compter le nombre total de leçons dans un module
function getTotalLessons(module: Module): number {
  let count = 0;
  if (module.paliers) {
    count += module.paliers.length;
  }
  if (module.rubriques) {
    module.rubriques.forEach(rubrique => {
      count += rubrique.paliers.length;
    });
  }
  return count;
}

const MODULE_CATEGORIES: Record<ModuleCategory, ModuleCategoryInfo> = {
  foundation: {
    label: "Fondations",
    description: "Les bases essentielles pour construire ton business solide",
    color: "#9F99EB"
  },
  acquisition: {
    label: "Acquisition",
    description: "Tout pour attirer et convertir tes premiers clients",
    color: "#4CAF50"
  },
  conversion: {
    label: "Conversion",
    description: "Transforme tes prospects en clients payants",
    color: "#FF9800"
  },
  scale: {
    label: "Scale",
    description: "Passe à l'échelle et optimise ton business",
    color: "#2196F3"
  }
};

// Mapping des modules vers leurs catégories avec le nombre exact de leçons
const MODULE_LESSONS_COUNT: Record<number, number> = {
  0: 4,  // Mindset
  1: 8,  // Créer son offre
  2: 25, // Acquisition (incluant toutes les sous-rubriques)
  2.5: 1, // Module Unique - Le contenu
  3: 4,  // Newsletter & Communauté
  4: 6,  // Éduquer ses prospects
  5: 14, // L'art de faire des VSL
  6: 1,  // Setting
  7: 1,  // Tout pour closer en B2B
  8: 1,  // Satisfaire ses clients
  9: 25  // BONUS - Les clés du Scale
};

// Mapping des modules avec leur nombre d'entrepreneurs formés (nombres réduits)
const MODULE_ENTREPRENEURS_FORMED: Record<number, number> = {
  0: 420, // Mindset
  1: 380, // Créer son offre
  2: 450, // Acquisition
  2.5: 0, // Module Unique - Le contenu (1 leçon)
  3: 320, // Newsletter & Communauté
  4: 280, // Éduquer ses prospects
  5: 410, // L'art de faire des VSL
  6: 0,   // Setting (1 leçon)
  7: 0,   // Tout pour closer en B2B (1 leçon)
  8: 0,   // Satisfaire ses clients (1 leçon)
  9: 520  // BONUS - Les clés du Scale
};

// Mapping des modules populaires avec leur nombre d'entrepreneurs formés (nombres réduits)
const POPULAR_MODULES: Record<number, number> = {
  0: 850, // Mindset
  2: 920, // Acquisition
  5: 780  // VSL
};

// Mapping des modules vers leurs catégories
const MODULE_CATEGORY_MAPPING: Record<number, ModuleCategory> = {
  0: 'foundation', // Mindset
  1: 'foundation', // Créer son offre
  2: 'acquisition', // Acquisition
  2.5: 'acquisition', // Module Unique - Le contenu
  3: 'acquisition', // Newsletter & Communauté
  4: 'conversion', // Éduquer ses prospects
  5: 'conversion', // L'art de faire des VSL
  6: 'conversion', // Setting
  7: 'conversion', // Tout pour closer en B2B
  8: 'scale', // Satisfaire ses clients
  9: 'scale' // BONUS - Les clés du Scale
};

// Composant pour le mode d'affichage Explorer (vue d'ensemble)
type ViewMode = 'focus' | 'explore';

interface ExploreModeProps {
  setActiveModuleId: (id: number) => void;
  setActivePalierId: (id: string | null) => void;
  setViewMode: (mode: ViewMode) => void;
}

function ExploreMode({ setActiveModuleId, setActivePalierId, setViewMode }: ExploreModeProps) {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ModuleCategory | 'all'>('all');
  const router = useRouter();

  // Grouper les modules par catégorie avec typage correct
  const modulesByCategory = masterclassContent.modules.reduce((acc, module) => {
    const category = MODULE_CATEGORY_MAPPING[module.id] || 'foundation';
    if (!acc[category]) acc[category] = [];
    acc[category].push(module);
    return acc;
  }, {} as Record<ModuleCategory, Module[]>);

  const handleModuleClick = (moduleId: number) => {
    const module = masterclassContent.modules.find(m => m.id === moduleId);
    if (!module) return;

    let firstPalierId: string | null = null;
    if (module.paliers && module.paliers.length > 0) {
      firstPalierId = module.paliers[0].id;
    } else if (module.rubriques && module.rubriques.length > 0) {
      const firstRubrique = module.rubriques[0];
      if (firstRubrique.paliers && firstRubrique.paliers.length > 0) {
        firstPalierId = firstRubrique.paliers[0].id;
      }
    }

    // Correction du format de l'URL pour les modules avec des points
    const moduleUrl = moduleId.toString().replace('.', '-');
    
    if (firstPalierId) {
      localStorage.setItem('selectedPalierId', firstPalierId);
      router.push(`/masterclass/module${moduleUrl}`);
    } else {
      router.push(`/masterclass/module${moduleUrl}`);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Introduction Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 bg-gradient-to-br from-surfaceMedium via-surfaceDark to-surfaceDark rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-30" />
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
              >
                {masterclassContent.introduction.title}
              </motion.h2>
            </div>

            {masterclassContent.introduction.videoUrl && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-surfaceLight"
              >
                <iframe
                  src={formatVideoUrl(masterclassContent.introduction.videoUrl)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Filtres de catégories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-button/10 text-white border border-button/30'
                : 'bg-surfaceLight/50 text-textSecondary hover:text-white hover:bg-surfaceLight'
            }`}
          >
            Tous les modules
          </motion.button>
          
          {Object.entries(MODULE_CATEGORIES).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(key as ModuleCategory)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === key
                  ? 'bg-opacity-10 text-white border'
                  : 'bg-surfaceLight/50 text-textSecondary hover:text-white hover:bg-surfaceLight'
              }`}
              style={{
                backgroundColor: selectedCategory === key ? `${category.color}15` : undefined,
                borderColor: selectedCategory === key ? `${category.color}40` : undefined
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modules Grid avec catégories */}
      <div className="space-y-12">
        {Object.entries(MODULE_CATEGORIES).map(([categoryKey, category]) => {
          const modules = modulesByCategory[categoryKey as ModuleCategory] || [];
          if (selectedCategory !== 'all' && selectedCategory !== categoryKey) return null;

          return (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* En-tête de catégorie - Plus subtil */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 md:p-6 rounded-2xl border border-white/5"
                   style={{ backgroundColor: `${category.color}05` }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ backgroundColor: `${category.color}15` }}>
                    <span className="text-2xl">{
                      categoryKey === 'foundation' ? '🏗️' :
                      categoryKey === 'acquisition' ? '🎯' :
                      categoryKey === 'conversion' ? '💎' :
                      '📈'
                    }</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{category.label}</h3>
                    <p className="text-textSecondary text-sm md:text-base">{category.description}</p>
                  </div>
                </div>
                <div className="md:ml-auto flex items-center gap-2">
                  <span className="text-sm text-textSecondary">
                    {modules.length} module{modules.length > 1 ? 's' : ''}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-textSecondary/50"></span>
                  <span className="text-sm text-textSecondary">
                    {modules.reduce((acc, m) => acc + (MODULE_LESSONS_COUNT[m.id] || 0), 0)} leçons
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {modules.map((module, index) => {
                  const totalLessons = MODULE_LESSONS_COUNT[module.id] || 0;
                  const entrepreneursFormed = MODULE_ENTREPRENEURS_FORMED[module.id] || 0;
                  const showEntrepreneursCount = totalLessons > 1;
                  
                  return (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
                      onClick={() => handleModuleClick(module.id)}
                      style={{
                        background: `linear-gradient(135deg, ${module.color || category.color}10, ${COLORS.surfaceDark}99)`,
                        border: `1px solid ${module.color || category.color}20`
                      }}
                    >
                      <motion.div 
                        className="relative p-6 h-full flex flex-col"
                        whileHover={{ 
                          backgroundColor: `${module.color || category.color}15`,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                            style={{ backgroundColor: `${module.color || category.color}20` }}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {module.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-200">
                              {module.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-sm text-textSecondary group-hover:text-textPrimary transition-colors duration-200">
                                {totalLessons} leçon{totalLessons > 1 ? 's' : ''}
                              </span>
                              {module.workbookUrl && (
                                <motion.span 
                                  className="text-xs px-2 py-1 rounded-full bg-button/20 text-button border border-button/30"
                                  whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: 'rgba(159, 153, 235, 0.3)',
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  Workbook inclus
                                </motion.span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-textSecondary flex-1 mb-4 text-sm md:text-base group-hover:text-textPrimary transition-colors duration-200">
                          {module.description}
                        </p>
                        
                        <motion.div 
                          className="mt-auto pt-4 border-t border-white/5"
                          whileHover={{ 
                            borderColor: `${module.color || category.color}40`,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <motion.span 
                                className="text-sm text-textAccent font-medium"
                                whileHover={{ 
                                  color: module.color || category.color,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                Commencer maintenant
                              </motion.span>
                              {showEntrepreneursCount && entrepreneursFormed > 0 && (
                                <span className="text-xs text-textSecondary">
                                  • {entrepreneursFormed.toLocaleString()} entrepreneurs formés
                                </span>
                              )}
                            </div>
                            <motion.div
                              animate={{ x: hoveredModule === module.id ? 5 : 0 }}
                              className="text-textAccent"
                              whileHover={{ 
                                color: module.color || category.color,
                                x: 8,
                                transition: { duration: 0.2 }
                              }}
                            >
                              →
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Composant principal de la page Masterclass
export default function MasterclassPage() {
  const [activeModuleId, setActiveModuleId] = useState<number>(-1);
  const [activePalierId, setActivePalierId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('explore');
  const [showOptin, setShowOptin] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());
  const [expandedRubriques, setExpandedRubriques] = useState<Map<number, Set<string>>>(new Map());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Palier[]>([]);

  // Références pour le scrolling
  const contentRef = useRef<HTMLDivElement>(null);

  // Charger le module sélectionné depuis localStorage
  useEffect(() => {
    const selectedModuleId = localStorage.getItem('selectedModuleId');
    if (selectedModuleId) {
      const moduleId = parseInt(selectedModuleId, 10);
      setActiveModuleId(moduleId);
      
      // Nettoyer le localStorage après utilisation
      localStorage.removeItem('selectedModuleId');
    }
  }, []);

  // Fonction pour réinitialiser le palier actif
  const resetPalier = () => {
    setActivePalierId(null);
  };

  // Effet pour la recherche
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const allPaliers = getAllPaliers();
    
    const results = allPaliers.filter(palier => {
      // Recherche dans le titre
      if (palier.title.toLowerCase().includes(query)) return true;
      
      // Recherche dans la description
      if (palier.description?.toLowerCase().includes(query)) return true;
      
      // Recherche dans les tags
      if (palier.tags?.some(tag => tag.toLowerCase().includes(query))) return true;
      
      return false;
    });
    
    setSearchResults(results);
  }, [searchQuery]);

  // Déterminer le contenu actif
  let activeContent: Palier | Introduction | null = null;
  let currentModule: Module | null = null;
  
  if (activeModuleId === -1) {
    // Introduction
    activeContent = masterclassContent.introduction;
  } else {
    // Un module spécifique
    currentModule = masterclassContent.modules.find(m => m.id === activeModuleId) || null;
    
    if (currentModule) {
      if (activePalierId) {
        // Chercher dans les paliers directs
        const modulePaliers = currentModule.paliers || [];
        const palier = modulePaliers.find(p => p.id === activePalierId);
        if (palier) activeContent = palier;
        
        // Chercher dans les rubriques
        if (currentModule.rubriques && !activeContent) {
          for (const rubrique of currentModule.rubriques) {
            const palier = rubrique.paliers.find(p => p.id === activePalierId);
            if (palier) {
              activeContent = palier;
              break;
            }
          }
        }
      }
      
      // Si aucun palier n'est sélectionné, prendre le premier
      if (!activeContent) {
        const modulePaliers = currentModule.paliers || [];
        if (modulePaliers.length > 0) {
          activeContent = modulePaliers[0];
          setActivePalierId(modulePaliers[0].id);
        } else if (currentModule.rubriques && currentModule.rubriques.length > 0) {
          const firstRubrique = currentModule.rubriques[0];
          const rubriquePaliers = firstRubrique.paliers || [];
          
          if (rubriquePaliers.length > 0) {
            activeContent = rubriquePaliers[0];
            setActivePalierId(rubriquePaliers[0].id);
          }
        }
      }
    }
  }

  return (
    <div className="bg-background min-h-screen text-textPrimary">
      {/* Hero Section avec le Chat */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-primary via-primary/90 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-primary/20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-button/30 rounded-full blur-[120px] opacity-50" />
        
        {/* Chat Component avec Titres */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* Sur-titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full bg-button/10 border border-button/20 mb-6"
            >
              <span className="text-button text-sm font-medium tracking-wider uppercase">
                Masterclass B2B Premium
              </span>
            </motion.div>

            {/* Titre Principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight"
            >
              Transforme ton Business B2B en Machine à Cash
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Notre IA analyse ta situation et te propose un parcours sur-mesure pour résoudre tes défis spécifiques. Tom, ton coach business, te guide pas à pas vers tes objectifs.
            </motion.p>
          </div>

          {/* Chat Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AssistantChat />
          </motion.div>
        </div>
      </section>

      {/* Section Preuves Sociales */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900">
        <div className="container-custom">
          {/* Logos des clients */}
          <div className="mb-12">
            <LogoMarquee className="opacity-50 hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Stats rapides avec avatars */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              <div className="relative pb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">+2000</div>
                  <div className="text-sm text-gray-400">Entrepreneurs formés</div>
                </div>
                {/* Avatars en cercle */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex -space-x-2">
                  <RoundedAvatar src="/Yann Grosjean.jpeg" alt="Yann Grosjean" size="sm" className="ring-2 ring-gray-900" />
                  <RoundedAvatar src="/anais-remaoun.webp" alt="Anaïs R." size="sm" className="ring-2 ring-gray-900" />
                  <RoundedAvatar src="/Caroline rousset.jpg" alt="Caroline Rousset" size="sm" className="ring-2 ring-gray-900" />
                  <RoundedAvatar src="/jean_michel_ly_v2.png" alt="Jean Michel Ly" size="sm" className="ring-2 ring-gray-900" />
                  <div className="w-8 h-8 rounded-full bg-button/20 flex items-center justify-center text-xs font-medium text-button ring-2 ring-gray-900">
                    +1.9k
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">+10M€</div>
                <div className="text-sm text-gray-400">Générés par nos clients</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-sm text-gray-400">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reste du contenu */}
      <div className="container-custom py-12">
        {viewMode === 'focus' ? (
          <FocusMode
            activeModuleId={activeModuleId}
            activePalierId={activePalierId}
            setActiveModuleId={setActiveModuleId}
            setActivePalierId={setActivePalierId}
            activeContent={activeContent}
            module={currentModule}
            setViewMode={setViewMode}
          />
        ) : (
          <ExploreMode
            setActiveModuleId={setActiveModuleId}
            setActivePalierId={setActivePalierId}
            setViewMode={setViewMode}
          />
        )}
      </div>
    </div>
  );
} 