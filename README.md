# BPC Masterclass

## Description
La masterclass BPC est notre produit ultime, mis à disposition gratuitement et sans inscription pour les entrepreneurs et solopreneurs du B2B. Tu pourras prendre rendez-vous pour rejoindre l'incubateur, acheter des produits pour accélérer ta progression, et t'inscrire pour recevoir ta roadmap personnalisée.

## Structure du site
- **Accueil** - Page principale du site
- **Masterclass** - Détails sur la masterclass
- **Catalogue** - Produits disponibles à l'achat
- **Media** - Contenu média
- **BPC GROUP** - Informations sur le groupe BPC

## Guide de style

### Typographie
- **Titres**: Anton
- **Sous-titres**: Archivo Black
- **Corps**: Montserrat

### Palette de couleurs
- **Couleur principale (fond)**: #000000 (Noir)
- **Contraste**: #FFFFFF (Blanc)
- **Titres**: #FFF1DE (Mocassin)
- **Rare**: #9B8E7D
- **Boutons**: #9F99EB
- **Graphiques**: #99E5EB

### Disposition
- Header flottant et fixe sur toutes les pages
- Footer identique sur toutes les pages

## Technologies utilisées
- Next.js avec App Router
- TypeScript
- React
- Tailwind CSS

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Lancer le serveur de production
npm start
```

## Inspirations
- [Acquisition.com](https://www.acquisition.com/)
- [8figurelicense.com](https://8figurelicense.com/)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Structure du code

```
src/
├── app/                      # Pages et routes de l'application
│   ├── page.tsx             # Page d'accueil
│   ├── masterclass/         # Section masterclass
│   │   └── page.tsx
│   ├── catalogue/           # Section catalogue
│   │   └── page.tsx
│   ├── media/               # Section média
│   │   └── page.tsx
│   └── bpc-group/           # Section BPC GROUP
│       └── page.tsx
│
├── components/              # Composants réutilisables
│   ├── layout/             # Composants de mise en page
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                 # Composants d'interface
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   └── sections/           # Sections de page
│       ├── Hero.tsx
│       ├── Features.tsx
│       └── ...
│
├── lib/                    # Utilitaires et helpers
│   ├── utils.ts
│   └── constants.ts
│
├── styles/                 # Styles globaux
│   └── globals.css
│
└── types/                  # Définitions TypeScript
    └── index.ts

public/                     # Ressources statiques
├── images/
├── fonts/
└── favicon.ico
```

### Description des dossiers

- **app/** : Contient toutes les pages de l'application utilisant le App Router de Next.js
- **components/** : Composants React réutilisables
  - **layout/** : Composants structurels (Header, Footer)
  - **ui/** : Composants d'interface utilisateur de base
  - **sections/** : Sections de page réutilisables
- **lib/** : Fonctions utilitaires et constantes
- **styles/** : Styles globaux et configurations
- **types/** : Définitions TypeScript pour le typage
- **public/** : Ressources statiques accessibles publiquement

### Conventions de nommage

- **Fichiers** : PascalCase pour les composants React, camelCase pour les utilitaires
- **Dossiers** : kebab-case pour les dossiers de pages, camelCase pour les autres
- **Composants** : Un composant par fichier, nommé de la même manière que le fichier

