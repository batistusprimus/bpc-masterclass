'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import OptinForm from "@/components/OptinForm";
import { motion } from 'framer-motion';

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
}

interface Rubrique {
  title: string;
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
  workbookUrl: string;
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

// Structure des données de la masterclass avec des tags et couleurs
const masterclassContent: MasterclassContent = {
  introduction: {
    title: "Introduction - Commence ici",
    description: "Bienvenue dans la Masterclass BPC. Commence ton parcours ici!",
    videoUrl: "/videos/introduction.mp4",
    workbookUrl: "/workbooks/introduction-masterclass.pdf",
  },
  modules: [
    {
      id: 0,
      title: "Mindset",
      description: "Le mindset à adopter pour réussir",
      icon: "🧠",
      color: "#9F99EB", // Purple
      workbookUrl: "https://notion.bpcorp.eu/Workbook-Module-0-Mindset-1ceb44663e10806cbe6bc0fcad82f930?pvs=4",
      paliers: [
        {
          id: "0.1",
          title: "Briser ses barrières mentales",
          videoUrl: "/videos/0-1-barrieres-mentales.mp4",
          tags: ["mindset", "débutant", "psychologie"],
          moduleId: 0
        },
        {
          id: "0.2",
          title: "Mindset de croissance",
          videoUrl: "/videos/0-2-mindset-croissance.mp4",
          tags: ["mindset", "développement", "croissance"],
          moduleId: 0
        },
        {
          id: "0.3",
          title: "L'extrémistant",
          videoUrl: "/videos/0-3-extremistant.mp4",
          tags: ["mindset", "action", "motivation"],
          moduleId: 0
        },
        {
          id: "0.4",
          title: "Comment prendre de bonnes décisions ?",
          videoUrl: "/videos/0-4-bonnes-decisions.mp4",
          tags: ["mindset", "décision", "stratégie"],
          moduleId: 0
        },
        {
          id: "0.5",
          title: "La vérité sur l'argent",
          videoUrl: "/videos/0-5-verite-argent.mp4",
          tags: ["mindset", "argent", "finance"],
          moduleId: 0
        },
        {
          id: "0.6",
          title: "Le 1% vs les 99%",
          videoUrl: "/videos/0-6-1-pourcent.mp4",
          tags: ["mindset", "performance", "excellence"],
          moduleId: 0
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
          id: "1.0",
          title: "Introduction : pourquoi, mathématiquement ta boîte va fermer ?",
          videoUrl: "/videos/1-0-introduction-offre.mp4",
          tags: ["offre", "finance", "business model"],
          moduleId: 1
        },
        {
          id: "1.1",
          title: "Choisir un marché",
          videoUrl: "/videos/1-1-offre-ideale.mp4",
          tags: ["offre", "marché", "positionnement"],
          moduleId: 1
        },
        {
          id: "1.2",
          title: "Devenir un monopole",
          videoUrl: "/videos/1-2-monopole.mp4",
          tags: ["offre", "différenciation", "stratégie"],
          moduleId: 1
        },
        {
          id: "1.3",
          title: "Le PaaS",
          videoUrl: "/videos/1-3-paas.mp4",
          tags: ["offre", "service", "modèle économique"],
          moduleId: 1
        },
        {
          id: "1.4",
          title: "Nouveau pricing model",
          videoUrl: "/videos/1-4-pricing-model.mp4",
          tags: ["offre", "prix", "monétisation"],
          moduleId: 1
        },
        {
          id: "1.5",
          title: "Délivrer ton offre",
          videoUrl: "/videos/1-5-delivrer-offre.mp4",
          tags: ["offre", "livraison", "satisfaction client"],
          moduleId: 1
        },
        {
          id: "1.6",
          title: "Créer son MRR",
          videoUrl: "/videos/1-6-creer-mrr.mp4",
          tags: ["offre", "revenu récurrent", "abonnement"],
          moduleId: 1
        },
        {
          id: "1.7",
          title: "Les composantes de ton offre",
          videoUrl: "/videos/1-7-composantes-offre.mp4",
          tags: ["offre", "structure", "valeur"],
          moduleId: 1
        },
        {
          id: "1.8",
          title: "Créer son cross-downsell",
          videoUrl: "/videos/1-8-cross-downsell.mp4",
          tags: ["offre", "vente additionnelle", "stratégie commerciale"],
          moduleId: 1
        }
      ]
    },
    {
      id: 2,
      title: "Toute l'acquisition",
      description: "Volume + Relations + Valeur = €. Tout ce dont tu as besoin pour trouver des prospects est ici.",
      icon: "🚀",
      color: "#4CAF50", // Green
      workbookUrl: "/workbooks/2-acquisition.pdf",
      rubriques: [
        {
          title: "Fondamentaux",
          paliers: [
            {
              id: "2.0",
              title: "Checklist de launch des campagnes",
              videoUrl: "/videos/2-0-checklist-launch.mp4",
              tags: ["acquisition", "campagnes", "lancement"],
              moduleId: 2,
              rubrique: "Fondamentaux"
            },
            {
              id: "2.1",
              title: "Optimiser ses profils",
              videoUrl: "/videos/2-1-optimiser-profils.mp4",
              tags: ["acquisition", "profils", "optimisation"],
              moduleId: 2,
              rubrique: "Fondamentaux"
            }
          ]
        },
        {
          title: "Process Ads",
          paliers: [
            {
              id: "2.2.1",
              title: "Bien comprendre l'importance des ads",
              videoUrl: "/videos/2-2-1-importance-ads.mp4",
              tags: ["acquisition", "publicité", "stratégie"],
              moduleId: 2,
              rubrique: "Process Ads"
            },
            {
              id: "2.2.2",
              title: "Setup son business manager META",
              videoUrl: "/videos/2-2-2-business-manager.mp4",
              tags: ["acquisition", "facebook", "technique"],
              moduleId: 2,
              rubrique: "Process Ads"
            },
            {
              id: "2.2.3",
              title: "La stratégie Ads globale",
              videoUrl: "/videos/2-2-3-strategie-ads.mp4",
              tags: ["acquisition", "ads", "stratégie"],
              moduleId: 2,
              rubrique: "Process Ads"
            },
            {
              id: "2.2.4",
              title: "Les Ads Textuelles",
              videoUrl: "/videos/2-2-4-ads-textuelles.mp4",
              tags: ["acquisition", "ads", "copywriting"],
              moduleId: 2,
              rubrique: "Process Ads"
            },
            {
              id: "2.2.5",
              title: "Les Ads VTH et Loom",
              videoUrl: "/videos/2-2-5-ads-vth-loom.mp4",
              tags: ["acquisition", "ads", "vidéo"],
              moduleId: 2,
              rubrique: "Process Ads"
            },
            {
              id: "2.2.6",
              title: "Les Ads VSL",
              videoUrl: "/videos/2-2-6-ads-vsl.mp4",
              tags: ["acquisition", "ads", "vidéo"],
              moduleId: 2,
              rubrique: "Process Ads"
            }
          ]
        },
        {
          title: "La prospection",
          paliers: [
            {
              id: "2.3.1",
              title: "Pourquoi prospecter et tâches respectives",
              videoUrl: "/videos/2-3-1-pourquoi-prospecter.mp4",
              tags: ["acquisition", "prospection", "stratégie"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.2",
              title: "Trouver une cible prête à acheter",
              videoUrl: "/videos/2-3-2-cible-prete-acheter.mp4",
              tags: ["acquisition", "prospection", "ciblage"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.3",
              title: "7 Principes de prospection à internaliser",
              videoUrl: "/videos/2-3-3-principes-prospection.mp4",
              tags: ["acquisition", "prospection", "principes"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.4",
              title: "Créer de bons messages",
              videoUrl: "/videos/2-3-4-bons-messages.mp4",
              tags: ["acquisition", "prospection", "messages"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.5",
              title: "Prospecter les 100 leads",
              videoUrl: "/videos/2-3-5-prospecter-100-leads.mp4",
              tags: ["acquisition", "prospection", "leads"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.6",
              title: "Prospecter via la recherche booléenne",
              videoUrl: "/videos/2-3-6-recherche-booleenne.mp4",
              tags: ["acquisition", "prospection", "recherche"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.7",
              title: "Prospecter la communauté pour générer des rendez-vous",
              videoUrl: "/videos/2-3-7-prospecter-communaute.mp4",
              tags: ["acquisition", "prospection", "communauté"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.8",
              title: "Utiliser ses concurrents pour générer des rendez-vous",
              videoUrl: "/videos/2-3-8-utiliser-concurrents.mp4",
              tags: ["acquisition", "prospection", "concurrents"],
              moduleId: 2,
              rubrique: "La prospection"
            },
            {
              id: "2.3.9",
              title: "Lancer ses campagnes de prospection avec Lemlist",
              videoUrl: "/videos/2-3-9-campagnes-lemlist.mp4",
              tags: ["acquisition", "prospection", "automation"],
              moduleId: 2,
              rubrique: "La prospection"
            }
          ]
        },
        {
          title: "Le contenu",
          paliers: [
            {
              id: "2.4.0",
              title: "Pourquoi le contenu est important ?",
              videoUrl: "/videos/2-4-0-importance-contenu.mp4",
              tags: ["acquisition", "contenu", "stratégie"],
              moduleId: 2,
              rubrique: "Le contenu"
            },
            {
              id: "2.4.1",
              title: "Créer sa stratégie de contenu & idéation",
              videoUrl: "/videos/2-4-1-strategie-ideation.mp4",
              tags: ["acquisition", "contenu", "stratégie"],
              moduleId: 2,
              rubrique: "Le contenu"
            },
            {
              id: "2.4.2",
              title: "LinkedIn Mastery",
              videoUrl: "/videos/2-4-2-linkedin-mastery.mp4",
              tags: ["acquisition", "contenu", "linkedin"],
              moduleId: 2,
              rubrique: "Le contenu"
            },
            {
              id: "2.4.3",
              title: "Création des contenus",
              videoUrl: "/videos/2-4-3-creation-contenus.mp4",
              tags: ["acquisition", "contenu", "création"],
              moduleId: 2,
              rubrique: "Le contenu"
            },
            {
              id: "2.4.4",
              title: "Créer son groupe privé",
              videoUrl: "/videos/2-4-4-groupe-prive.mp4",
              tags: ["acquisition", "contenu", "communauté"],
              moduleId: 2,
              rubrique: "Le contenu"
            }
          ]
        },
        {
          title: "Les partenariats",
          paliers: [
            {
              id: "2.5",
              title: "Leverage les partenariats",
              videoUrl: "/videos/2-5-leverage-partenariats.mp4",
              description: "Pourquoi les partenariats sont puissants ? Comment trouver des partenaires ? Quel message leur envoyer ?",
              tags: ["acquisition", "partenariats", "stratégie"],
              moduleId: 2,
              rubrique: "Les partenariats"
            }
          ]
        },
        {
          title: "BONUS",
          paliers: [
            {
              id: "2.6",
              title: "Signe 3 clients cette semaine",
              videoUrl: "/videos/2-6-signe-3-clients.mp4",
              tags: ["acquisition", "vente", "conversion"],
              moduleId: 2,
              rubrique: "BONUS"
            }
          ]
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
          title: "Pourquoi avoir un groupe privé ?",
          videoUrl: "/videos/3-0-pourquoi-groupe-prive.mp4",
          tags: ["communauté", "audience", "stratégie"],
          moduleId: 3
        },
        {
          id: "3.1",
          title: "Créer son groupe privé",
          videoUrl: "/videos/3-1-creer-groupe-prive.mp4",
          tags: ["communauté", "groupe", "engagement"],
          moduleId: 3
        },
        {
          id: "3.2",
          title: "Envoyer des emails à sa liste",
          videoUrl: "/videos/3-2-emails-liste.mp4",
          tags: ["email", "marketing", "communication"],
          moduleId: 3
        },
        {
          id: "3.3",
          title: "Comment faire une séquence de bienvenue ?",
          videoUrl: "/videos/3-3-sequence-bienvenue.mp4",
          tags: ["email", "automation", "onboarding"],
          moduleId: 3
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
          videoUrl: "/videos/4-0-sophistication-marche.mp4",
          tags: ["éducation", "marché", "stratégie"],
          moduleId: 4
        },
        {
          id: "4.1",
          title: "Comment s'enregistrer ?",
          videoUrl: "/videos/4-1-comment-enregistrer.mp4",
          tags: ["éducation", "technique", "contenu"],
          moduleId: 4
        },
        {
          id: "4.2",
          title: "Obtenir des case studies",
          videoUrl: "/videos/4-2-obtenir-case-studies.mp4",
          tags: ["éducation", "social proof", "conversion"],
          moduleId: 4
        },
        {
          id: "4.3",
          title: "Comment faire une thank you page ?",
          videoUrl: "/videos/4-3-thank-you-page.mp4",
          tags: ["éducation", "conversion", "web"],
          moduleId: 4
        },
        {
          id: "4.4",
          title: "Qualifier et préchauffer ses prospects",
          videoUrl: "/videos/4-4-qualifier-prechauffer-prospects.mp4",
          tags: ["éducation", "conversion", "qualification"],
          moduleId: 4
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
              id: "5.1.0",
              title: "Intro à voir absolument",
              videoUrl: "/videos/5-1-0-intro-vsl.mp4",
              tags: ["VSL", "introduction", "vidéo"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.1",
              title: "Le plan de ta SL",
              videoUrl: "/videos/5-1-1-plan-sl.mp4",
              tags: ["VSL", "plan", "structure"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.2",
              title: "Comment s'organiser pour écrire sa sales letter ?",
              videoUrl: "/videos/5-1-2-organiser-sales-letter.mp4",
              tags: ["VSL", "organisation", "sales letter"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.3",
              title: "Comment écrire une bonne headline / Un bon titre ?",
              videoUrl: "/videos/5-1-3-headline-titre.mp4",
              tags: ["VSL", "headline", "titre"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.4",
              title: "Comment avoir de la social proof",
              videoUrl: "/videos/5-1-4-social-proof.mp4",
              tags: ["VSL", "social proof", "témoignages"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.5",
              title: "Identification du prospect en début de VSL",
              videoUrl: "/videos/5-1-5-identification-prospect.mp4",
              tags: ["VSL", "identification", "persona"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.6",
              title: "Introduire le core concept",
              videoUrl: "/videos/5-1-6-core-concept.mp4",
              tags: ["VSL", "concept", "proposition"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.7",
              title: "J'ai un background",
              videoUrl: "/videos/5-1-7-background.mp4",
              tags: ["VSL", "crédibilité", "autorité"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.8",
              title: "Apporter de la valeur et présenter les IUU",
              videoUrl: "/videos/5-1-8-valeur-iuu.mp4",
              tags: ["VSL", "valeur", "IUU"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.9",
              title: "Apporter ta solution et booker un call",
              videoUrl: "/videos/5-1-9-solution-call.mp4",
              tags: ["VSL", "solution", "conversion"],
              moduleId: 5,
              rubrique: "La théorie"
            },
            {
              id: "5.1.10",
              title: "Optimiser sa VSL",
              videoUrl: "/videos/5-1-10-optimiser-vsl.mp4",
              tags: ["VSL", "optimisation", "amélioration"],
              moduleId: 5,
              rubrique: "La théorie"
            }
          ]
        },
        {
          title: "La pratique",
          paliers: [
            {
              id: "5.2.1",
              title: "Template de VSL long-form",
              videoUrl: "/videos/5-2-1-template-long-form.mp4",
              tags: ["VSL", "template", "long-form"],
              moduleId: 5,
              rubrique: "La pratique"
            },
            {
              id: "5.2.2",
              title: "Template de VSL short-form",
              videoUrl: "/videos/5-2-2-template-short-form.mp4",
              tags: ["VSL", "template", "short-form"],
              moduleId: 5,
              rubrique: "La pratique"
            },
            {
              id: "5.2.3",
              title: "Comment s'enregistrer ?",
              videoUrl: "/videos/5-2-3-enregistrement.mp4",
              tags: ["VSL", "technique", "enregistrement"],
              moduleId: 5,
              rubrique: "La pratique"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Cours de setting",
      description: "⚙️ Paramètre tous tes outils pour une efficacité maximale",
      icon: "⚙️",
      color: "#607D8B", // Blue Grey
      workbookUrl: "/workbooks/6-setting.pdf",
      paliers: [
        {
          id: "6.1",
          title: "Le process à suivre étape par étape pour le setting Inbound to Outbound",
          videoUrl: "/videos/6-1-process-setting-inbound-outbound.mp4",
          tags: ["setting", "process", "inbound", "outbound"],
          moduleId: 6
        },
        {
          id: "6.2",
          title: "KPI Sales & contraintes",
          videoUrl: "/videos/6-2-kpi-sales-contraintes.mp4",
          tags: ["setting", "KPI", "sales", "mesure"],
          moduleId: 6
        },
        {
          id: "6.3",
          title: "Les data pour déléguer le setting",
          videoUrl: "/videos/6-3-data-deleguer-setting.mp4",
          tags: ["setting", "délégation", "data", "équipe"],
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
          title: "Prévendre avant le call",
          videoUrl: "/videos/7-0-prevendre-call.mp4",
          tags: ["vente", "préparation", "call"],
          moduleId: 7
        },
        {
          id: "7.1",
          title: "Introduction au call",
          videoUrl: "/videos/7-1-introduction-call.mp4",
          tags: ["vente", "call", "structure"],
          moduleId: 7
        },
        {
          id: "7.2",
          title: "Questions de qualification",
          videoUrl: "/videos/7-2-questions-qualification.mp4",
          tags: ["vente", "qualification", "découverte"],
          moduleId: 7
        },
        {
          id: "7.3",
          title: "Le pitch Superstars",
          videoUrl: "/videos/7-3-pitch-superstars.mp4",
          tags: ["vente", "pitch", "persuasion"],
          moduleId: 7
        },
        {
          id: "7.4",
          title: "Comment pitcher avec le pitch Superstars ?",
          videoUrl: "/videos/7-4-comment-pitcher.mp4",
          tags: ["vente", "pitch", "technique"],
          moduleId: 7
        },
        {
          id: "7.5",
          title: "Closer avec un Google Docs / Notion",
          videoUrl: "/videos/7-5-closer-docs.mp4",
          tags: ["vente", "outils", "closing"],
          moduleId: 7
        },
        {
          id: "7.6",
          title: "Phase de closing",
          videoUrl: "/videos/7-6-phase-closing.mp4",
          tags: ["vente", "closing", "conversion"],
          moduleId: 7
        },
        {
          id: "7.7",
          title: "Collecter le paiement",
          videoUrl: "/videos/7-7-collecter-paiement.mp4",
          tags: ["vente", "paiement", "transaction"],
          moduleId: 7
        },
        {
          id: "7.8",
          title: "Follow-up et objections",
          videoUrl: "/videos/7-8-followup-objections.mp4",
          tags: ["vente", "follow-up", "objections"],
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
          title: "Créer sa customer journey",
          videoUrl: "/videos/8-0-customer-journey.mp4",
          tags: ["satisfaction", "client", "parcours"],
          moduleId: 8
        },
        {
          id: "8.1",
          title: "Comment créer des process ?",
          videoUrl: "/videos/8-1-creer-process.mp4",
          tags: ["satisfaction", "process", "organisation"],
          moduleId: 8
        },
        {
          id: "8.2",
          title: "Comment onboarder un client rapidement ?",
          videoUrl: "/videos/8-2-onboarder-client.mp4",
          tags: ["satisfaction", "onboarding", "intégration"],
          moduleId: 8
        },
        {
          id: "8.3",
          title: "Structure d'offboarding",
          videoUrl: "/videos/8-3-structure-offboarding.mp4",
          tags: ["satisfaction", "offboarding", "fidélisation"],
          moduleId: 8
        },
        {
          id: "8.4",
          title: "Créer son propre programme",
          videoUrl: "/videos/8-4-creer-programme.mp4",
          tags: ["satisfaction", "programme", "fidélisation"],
          moduleId: 8
        },
        {
          id: "8.5",
          title: "Améliorer son produit grâce à ses clients",
          videoUrl: "/videos/8-5-ameliorer-produit.mp4",
          tags: ["satisfaction", "feedback", "amélioration"],
          moduleId: 8
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
          <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl mb-8">
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
                <video 
                  className="w-full h-full object-cover" 
                  controls
                  poster="/video-placeholder.jpg"
                >
                  <source src={activeContent.videoUrl} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
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
                    setActiveModuleId(-1);
                    setActivePalierId(null);
                    setViewMode('focus');
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
                  <video 
                    className="w-full h-full object-cover" 
                    controls
                    poster="/video-placeholder.jpg"
                  >
                    <source src={activeContent.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
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
                  <div className="flex items-center space-x-6 p-6 bg-surfaceLight/50 backdrop-blur-sm rounded-xl border border-white/5">
                    <div className="flex items-center relative">
                      <div className="absolute inset-0 bg-button/20 blur-xl"></div>
                      <svg className="w-12 h-12 text-button relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                      <svg className="w-6 h-6 text-accent -ml-4 -mt-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <div className="flex-1">
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

// Composant pour le mode d'affichage Explorer (vue d'ensemble)
type ViewMode = 'focus' | 'explore';

interface ExploreModeProps {
  setActiveModuleId: (id: number) => void;
  setActivePalierId: (id: string | null) => void;
  setViewMode: (mode: ViewMode) => void;
}

function ExploreMode({ setActiveModuleId, setActivePalierId, setViewMode }: ExploreModeProps) {
  const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({});
  const [expandedRubriques, setExpandedRubriques] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Palier[]>([]);

  const toggleModule = (moduleId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };
  
  const toggleRubrique = (moduleId: number, rubriqueName: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = `${moduleId}-${rubriqueName}`;
    setExpandedRubriques(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const handleModuleClick = (moduleId: number, palierId?: string) => {
    setActiveModuleId(moduleId);
    setActivePalierId(palierId || null);
    setViewMode('focus');
  };
  
  return (
    <div className="space-y-8 p-8">
      {/* Introduction */}
      <motion.div 
        className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-button/20 rounded-full blur-[100px] opacity-30" />
        
        <div className="relative">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-button/20 to-primary/20 flex items-center justify-center shadow-xl"
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </motion.div>
            
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 mb-4"
              >
                Commence ton parcours d'excellence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-300 text-lg leading-relaxed mb-8"
              >
                Découvre une formation complète qui t'accompagnera pas à pas vers la réussite de ton business.
              </motion.p>
        </div>
        
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
            <Button 
              size="lg" 
                onClick={() => {
                  setActiveModuleId(-1);
                  setActivePalierId(null);
                  setViewMode('focus');
                }}
                className="min-w-[250px] text-lg py-6 bg-gradient-to-r from-button to-button/80 hover:from-button/90 hover:to-button/70 transform hover:scale-[1.02] transition-all duration-200 shadow-xl"
              >
                <span className="flex items-center space-x-2">
                  <span>Commencer maintenant</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
            </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Liste des modules */}
      <div className="space-y-6">
        {masterclassContent.modules.map((module, index) => (
          <motion.div 
            key={module.id} 
            className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-button/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <button 
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 relative"
              onClick={(e) => toggleModule(module.id, e)}
            >
              <div className="flex items-center space-x-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${module.color}20` }}
                >
                  {module.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-button transition-colors duration-300">
                    Module {module.id}
                  </h3>
                  <h4 className="text-lg text-gray-300">{module.title}</h4>
                </div>
              </div>
              <div className="text-gray-400 transition-transform duration-300" style={{
                transform: expandedModules[module.id] ? 'rotate(-180deg)' : 'rotate(0deg)'
              }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
              </div>
            </button>
            
            {expandedModules[module.id] && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-white/5 bg-surfaceDark/50"
              >
                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">{module.description}</p>
                
                {/* Contenu du module */}
                  <div className="space-y-4">
                  {module.rubriques ? (
                    module.rubriques.map((rubrique, rubriqIndex) => {
                      const rubriqKey = `${module.id}-${rubrique.title}`;
                      const isRubriqueExpanded = expandedRubriques[rubriqKey];
                      
                      return (
                          <div key={rubriqIndex} className="border border-white/5 rounded-xl overflow-hidden bg-surfaceMedium/30 transition-all duration-300 hover:border-white/10">
                          <button
                              className="w-full py-4 px-6 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                            onClick={(e) => toggleRubrique(module.id, rubrique.title, e)}
                          >
                              <h5 className="text-lg font-medium text-white flex items-center space-x-3">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                                      style={{ backgroundColor: `${module.color}20` }}>
                                  {rubriqIndex + 1}
                                </span>
                                <span>{rubrique.title}</span>
                              </h5>
                              <div className="text-gray-400 transition-transform duration-300" style={{
                                transform: isRubriqueExpanded ? 'rotate(-180deg)' : 'rotate(0deg)'
                              }}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                          </button>
                          
                          {isRubriqueExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-white/5 divide-y divide-white/5"
                              >
                              {rubrique.paliers.map((palier) => (
                                <button
                                  key={palier.id}
                                    className="w-full text-left p-4 hover:bg-white/5 transition-all duration-300 flex items-center space-x-4 group"
                                  onClick={() => handleModuleClick(module.id, palier.id)}
                                >
                                    <span className="text-gray-400 text-sm min-w-[2.5rem]">{palier.id}</span>
                                    <span className="text-white flex-1 group-hover:text-button transition-colors duration-300">
                                      {palier.title}
                                    </span>
                                    <svg className="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" 
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                              ))}
                              </motion.div>
                          )}
                        </div>
                      );
                    })
                  ) : module.paliers ? (
                      <div className="space-y-2 bg-surfaceMedium/30 rounded-xl overflow-hidden border border-white/5">
                      {module.paliers.map((palier) => (
                        <button
                          key={palier.id}
                            className="w-full text-left p-4 hover:bg-white/5 transition-all duration-300 flex items-center space-x-4 group"
                          onClick={() => handleModuleClick(module.id, palier.id)}
                        >
                            <span className="text-gray-400 text-sm min-w-[2.5rem]">{palier.id}</span>
                            <span className="text-white flex-1 group-hover:text-button transition-colors duration-300">
                              {palier.title}
                            </span>
                            <svg className="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" 
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
                
                  <div className="mt-6">
                <Button 
                  onClick={() => handleModuleClick(module.id)}
                  fullWidth
                  variant="outline"
                      className="bg-white/5 hover:bg-white/10 border-white/10 group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Explorer ce module</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                </Button>
              </div>
          </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Composant principal de la page Masterclass
export default function MasterclassPage() {
  const [activeModuleId, setActiveModuleId] = useState<number>(-1);
  const [activePalierId, setActivePalierId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'focus' | 'explore'>('focus');
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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-primary via-primary/90 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-primary/20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-button/30 rounded-full blur-[120px] opacity-50" />
        
        {/* Content */}
        <motion.div 
          className="container-custom relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight"
            >
              La Masterclass BPC
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Notre produit ultime, mis à disposition gratuitement pour les entrepreneurs et solopreneurs du B2B.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg"
                onClick={() => {
                setActiveModuleId(-1);
                setActivePalierId(null);
                setViewMode('focus');
                }}
                className="min-w-[200px] text-lg py-6 bg-button hover:bg-button/90 transform hover:scale-[1.02] transition-all duration-200"
              >
                Commencer maintenant
              </Button>
              <Button 
                variant="outline"
                size="lg"
                href="#roadmap"
                className="min-w-[200px] text-lg py-6 border-2 hover:bg-white/10 transform hover:scale-[1.02] transition-all duration-200"
              >
                Obtenir ma roadmap
              </Button>
            </motion.div>
            </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="container-custom relative mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mb-4 text-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
          </div>
              <div className="text-3xl font-bold text-white mb-2">+2000</div>
              <div className="text-gray-300">Entrepreneurs formés</div>
        </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mb-4 text-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">+10M€</div>
              <div className="text-gray-300">Générés par nos clients</div>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mb-4 text-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Taux de satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </section>

      {/* Masterclass Content Section */}
      <section className="py-16" ref={contentRef}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <ViewModeToggle 
              viewMode={viewMode} 
              setViewMode={setViewMode}
            />
            
            {/* Barre de recherche */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Rechercher un module, palier ou sujet..."
                className="w-full bg-surfaceLight border border-border rounded-full px-5 py-2 text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textMuted"
                onClick={() => setSearchQuery('')}
                aria-label="Effacer la recherche"
              >
                {searchQuery ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>
              
              {/* Résultats de recherche */}
              {searchResults.length > 0 && (
                <div className="absolute w-full bg-surfaceLight mt-2 rounded-md shadow-lg z-10 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    <h3 className="text-sm text-textMuted px-3 py-2">
                      {searchResults.length} résultat(s) trouvé(s)
                    </h3>
                    {searchResults.map((palier) => {
                      // Trouver le module parent
                      const parentModule = masterclassContent.modules.find(m => 
                        (m.paliers && m.paliers.some(p => p.id === palier.id)) ||
                        (m.rubriques && m.rubriques.some(r => r.paliers.some(p => p.id === palier.id)))
                      );
                      
                      return (
                        <button
                          key={palier.id}
                          className="block w-full text-left px-3 py-2 hover:bg-surfaceMedium rounded transition-colors"
                          onClick={() => {
                            if (parentModule) {
                              setActiveModuleId(parentModule.id);
                              setActivePalierId(palier.id);
                              setSearchQuery('');
                              setSearchResults([]);
                              setViewMode('focus');
                              
                              // Supprimer le défilement automatique
                              // window.scrollTo({
                              //   top: 0,
                              //   behavior: 'smooth'
                              // });
                            }
                          }}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3" 
                                 style={{ backgroundColor: parentModule?.color || COLORS.primary, color: '#FFF' }}>
                              {parentModule?.icon}
                            </div>
                            <div>
                              <span className="text-accent">{parentModule?.title}</span>
                              <p className="text-textPrimary">{palier.title}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-surfaceMedium rounded-lg overflow-hidden shadow-lg">
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
      </section>
      
      {/* Roadmap CTA */}
      <section id="roadmap" className="relative py-32 bg-gradient-to-b from-surfaceDark via-surfaceDark to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[150px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Obtiens ta Roadmap Personnalisée
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Réponds à quelques questions pour recevoir une roadmap adaptée à ton business et tes objectifs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-button/20 blur-xl"></div>
                  <svg className="w-16 h-16 text-button relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
          <OptinForm 
                className="p-0 max-w-2xl mx-auto"
            title=""
            subtitle=""
            buttonText="Recevoir ma roadmap"
          />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
          >
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mb-4 text-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rapide</h3>
              <p className="text-gray-400">Obtiens ta roadmap en moins de 2 minutes</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mb-4 text-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personnalisée</h3>
              <p className="text-gray-400">Adaptée à ton business et tes objectifs</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 mb-4 text-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Actionnable</h3>
              <p className="text-gray-400">Des étapes concrètes à suivre</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 via-surfaceDark to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-button/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-surfaceMedium/50 backdrop-blur-sm rounded-2xl p-12 border border-white/5 shadow-2xl text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-button/50 to-transparent" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                    Accéder au Catalogue Complet
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Pour une expérience optimale, découvre l'intégralité de nos ressources dans notre catalogue structuré et navigue plus efficacement dans la Masterclass.
          </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                  <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 mb-4 text-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Accélère ta Croissance</h3>
                    <p className="text-gray-400">Résultats 3x plus rapides</p>
                  </div>

                  <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 mb-4 text-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Impact Maximal</h3>
                    <p className="text-gray-400">Deviens leader du marché</p>
                  </div>

                  <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-12 h-12 mb-4 text-button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cash Flow x10</h3>
                    <p className="text-gray-400">Multiplie tes revenus</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-12"
                >
                  <Button 
                    size="lg"
                    href="/catalogue"
                    className="min-w-[250px] text-lg py-6 bg-button hover:bg-button/90 transform hover:scale-[1.02] transition-all duration-200 shadow-xl"
                  >
                    <span className="flex items-center">
              Explorer le catalogue
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
            </Button>
                </motion.div>
          </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 