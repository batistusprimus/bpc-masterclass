'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Button from "@/components/Button";

interface Newsletter {
  id: string;
  title: string;
  date: string;
  content: string;
}

const NEWSLETTERS: Newsletter[] = [
  {
    id: "meilleur-concurrence",
    title: "Comment être meilleur que la concurrence",
    date: "13 Mars 2025",
    content: `
Pour être meilleur que les autres, vous avez deux options :

**Être lʼexpert mondial de votre sujet.**

**Être la personne la plus complète possible.**

## L'expert mondial

Pour devenir l'expert mondial, tu dois dédier 40 ans de ta vie à un seul sujet.
Ne faire que ça. Être le meilleur, puis continuer à l'être face à la nouvelle génération.
Et même là, t'as aucune garantie de succès.

## L'homme complet

Mais si tu choisis la seconde voie, tu ne peux pas perdre.
Parce qu'un homme complet est imbattable sur le long terme.

Pendant un an, je suis tombé dans la roue du business.
Je bossais 15h par jour. J'étais efficace, j'avais des résultats.

**Mais à l'intérieur, c'était vide.**

Je n'existais qu'à travers mon travail.
Si je ne bossais pas, j'avais l'impression de disparaître.

Puis je me suis souvenu de qui j'étais :

**L'homme complet.**

- Le sportif
- L'entrepreneur
- Le fils, le frère, l'ami
- L'homme charismatique
- L'écrivain, le philosophe
- Le vendeur

Je ne serai jamais le meilleur entrepreneur du monde.

**Mais personne ne peut faire ce que je fais.**

- Travailler 4h en deep work le matin
- Déjeuner avec des investisseurs
- Gérer une équipe à 14h
- Vendre l'après-midi
- M'entraîner 2h
- Voir mes amis
- Écrire le soir

## La vraie différenciation

Tu veux être meilleur que la concurrence ?

**Sois complet.**

Bosse comme un fou, quand c'est le moment.
Mais ne deviens pas une simple fonction dans ton agenda.

Tu ne seras jamais le meilleur à leur jeu.

**Par contre, tu es le seul à pouvoir être toi à 100%.**

C'est ta force.

→ **Être un humain complet > Être une simple tâche bien exécutée.**

À demain,

BP
    `
  },
  {
    id: "linkedin-hack",
    title: "Hack LinkedIn à 1M€ : comment exploser ton business avec 1 post par jour",
    date: "14 Mars 2025",
    content: `
Tu n'as pas assez de leads ? Normal. Personne ne sait que tu existes.

Voici la solution : publie sur LinkedIn quotidiennement.

Pourquoi LinkedIn ?

- Le réseau des décisionnaires
- La plateforme avec le plus de cash
- Format texte = zéro investissement matériel
- Encore possible d'y percer sans payer

La règle ? 1 post par jour. 

Pourquoi ?

- L'algorithme préfère la régularité
- Chaque post = une chance de partir viral
- 1 post/semaine = 2 ans pour exploser
- 1 post/jour = 3 mois

Pour débuter immédiatement :

1. Choisis 3 thèmes : pro, perso, service
2. Structure tes posts : hook + valeur + CTA
3. Simplifie ton message (les experts simplifient, les charlatans compliquent)

Ton objectif ? Donner de la dopamine à ton audience.

Plus ils consomment ton contenu, plus l'algorithme te met en avant, plus tu génères de leads qualifiés.

Sois constant. En business comme en sport, tu ne peux pas tricher sur l'investissement.

[Masterclass gratuite sur YouTube](https://www.youtube.com/watch?v=QbJkaUyKCA4)
    `
  },
  {
    id: "jouer-avant-devenir",
    title: "Jouer avant de devenir",
    date: "19 Mars 2024",
    content: `
Personne ne naît entrepreneur millionnaire.
Personne ne naît acteur d'Hollywood.
Personne ne naît artiste peintre.

On le devient en jouant la comédie assez longtemps pour que le rôle devienne notre personnalité.

Et ce rôle, tu dois le jouer chaque jour, devant des dizaines de personnes qui te jugent, se moquent, doutent de toi.

Tu continues malgré les regards, malgré le ridicule, malgré ceux qui veulent que tu arrêtes.
Jusqu'à ce que de nouvelles personnes arrivent et te paient pour ta performance.

**Les anciens spectateurs ne paieront jamais.**

Ils refuseront ton succès. Parce qu'il prouve qu'ils avaient tort.

Ils te traiteront d'imposteur.

Ils diront qu'ils "savent qui tu es vraiment", parce qu'ils t'ont vu jouer, au début, maladroitement.

Mais ce qu'ils ne comprennent pas, c'est qu'un acteur passionné devient son personnage.

Tu n'es plus "le petit gars de cité qui rêve de devenir millionnaire".
**Tu es celui qui a sorti sa mère de la galère.**

Tu n'es plus "l'enfant paumé entre le Calvados et un job de caissier".
**Tu es celui qui a prouvé qu'on pouvait réussir, même en partant de rien.**

Tu n'es plus "la femme à qui personne ne croyait quand elle parlait de sa boîte".
**Tu es l'entrepreneuse que tout le monde appelle pour avoir des conseils.**

Mais avant de devenir cette personne, tu as dû jouer son rôle.

Longtemps.
Avec passion.

Jusqu'à ce que tu l'incarnes.

## Ta vie est un film.

Et comme tout grand acteur :

- Tu choisis tes rôles
- Tu t'entraînes
- Tu deviens le meilleur
- Et tu vas chercher l'Oscar

Ce matin, j'étais bodybuilder.
Ce midi, je suis écrivain.
Ce soir, je suis champion de boxe thaï.

Et si certains trouvent que je joue mal ?
**Alors mon prochain rôle sera Molière.**

À demain,

BP
    `
  },
  {
    id: "briser-plafond-verre",
    title: "Briser son plafond de verre",
    date: "16 Avril 2024",
    content: `
Pendant 1 an, j'ai stagné entre 10.000€ et 15.000€ de MRR.
En parlant avec ma communauté, j'ai compris que beaucoup vivaient la même chose.

Alors, comment passer de 15K€/mois à 83K€/mois sans exploser ta charge, sans embaucher une armée de CDI et sans bosser 6 fois plus ?

## Voici là où j'étais (et peut-être toi aussi) :

- Bloqué à 15K€/mois
- Chaque client = +10 à 20h de taf
- Tu règles un seul problème
- Aucun vrai levier pour augmenter ton MRR

## Voici là où tu veux être :

- Le million annuel
- Chaque client = peu de charge en plus
- Des offres qui génèrent du MRR via des systèmes et de la rétention

## La clé pour y arriver :
→ **Tu dois résoudre TOUS les problèmes de tes clients.**

La plupart des prestataires résolvent un seul truc.
"J'aide à ranker sur Google."
"Je fais des Facebook Ads."
"Je rends visible sur LinkedIn."

Ok. Mais ça te limite.

Ce modèle, c'est parfait pour passer de 0 à 10K€/mois.

Mais pour viser le million sans te cramer, tu dois changer de vision.

## Fais le calcul :

- 2.000€ par client
- 10h de taf par client
→ Il te faut 500 clients/an pour faire 1M€.

Est-ce que tu peux gérer 500 clients ?
**Pas sans recruter. Pas sans complexifier ton biz.**

Or tu veux quoi ?
→ **Un business simple, rentable, avec peu d'opérationnel.**

Donc, tu augmentes ta valeur par client en résolvant l'ensemble de ses problématiques :

- Une meilleure offre
- Un tunnel de conversion qui fonctionne
- Un système d'acquisition prévisible

## L'argent se fait quand tu as :

- Une bonne offre
- Présentée aux bonnes personnes
- Via un process d'achat bien foutu

Si tu veux appliquer cette vision et briser ton plafond, regarde ce training gratuit :
[Découvrir le training gratuit](https://fr.marqueblanche.agency/training)

À demain,

BP
    `
  },
  {
    id: "cheat-code-business",
    title: "Le cheat code du business",
    date: "18 Avril 2024",
    content: `
Je vais te donner un conseil très simple, beaucoup trop sous-côté, et pourtant essentiel si tu veux bâtir un vrai business, avec une vraie communauté :

**Avance. Résous tes problèmes. Analyse. Documente. Partage.**

Tu peux essayer de t'inventer une vie et de résoudre les problèmes de gens que tu ne comprends même pas.

Ou tu peux faire plus simple :

**Aider quelques personnes à devenir comme toi.
Parce qu'elles ont 6 mois ou 1 an de retard.**

C'est ce que je fais.

Je ne prétends pas tout savoir.
Je parle juste de ce qui a fonctionné pour moi.

Et visiblement, ça vous plaît.

## Moralité :

→ **Sois la personne que t'aurais aimé rencontrer il y a un an.**

À demain,

BP
    `
  },
  {
    id: "50-euros-20k",
    title: "De 50€/h à 20K par client",
    date: "2 Juin 2024",
    content: `
Quand j'ai commencé sur LinkedIn en 2021, je vendais 1h de coaching à 50€.

Aujourd'hui, je vends des accompagnements à 20.000€ pour 3 mois.

Depuis, j'ai aidé des centaines de solopreneurs à faire la même chose.
Voici les 3 leçons que j'en tire :

## 1. Le prix est toujours une valeur perçue, pas une valeur réelle.

Sur internet, les prix n'ont aucun sens objectif.
Dans la vraie vie, tu peux dire "cette maison vaut plus que cet appart".

Mais en ligne, ce qui fait le prix c'est :

- Ton expérience
- Tes cas clients
- Ta confiance

## 2. Personne ne sait se pricer.

Pourquoi ? Parce qu'il n'y a pas de "vrai" prix.
Et si tu es bon, les prix de marché sont trop bas pour toi.

Il existe 2 façons de fixer un prix :

- Au hasard, et tu l'augmentes progressivement
- En fonction des bénéfices que tu apportes au client

## 3. Le marché a toujours raison.

Peu importe tes théories, c'est le marché qui décide.
Il fixe la valeur, il valide ou non ton positionnement.

## Mon conseil pour augmenter tes prix :

- Augmente légèrement à chaque call, observe les réactions
- Calcule les bénéfices concrets que tu génères pour ton client
- Ne fixe jamais un tarif "définitif" → adopte un pricing évolutif

**From 50€ to 20K€,
On n'avait pas vu ça depuis le Bitcoin.** 😎

À demain,

BP
    `
  },
  {
    id: "growth-solopreneur",
    title: "Le growth pour solopreneur, c'est quoi ?",
    date: "14 Juin 2024",
    content: `
### En 2023, j'ai observé l'apparition d'un nouveau marché.

→ Celui des solopreneurs, des entrepreneurs sans associés, sans structures complexes, sans réel produit, qui font +100k€ par an seul.

**J'ai compris quelque chose (car j'étais dans cette situation)**

→ Ces solopreneurs ne veulent pas complexifier leur business, mais veulent scale.

**C'est pour ça que j'ai créé MarqueBlanche, la première agence de Growth pour Solopreneur.**

→ On intervient à ce moment-là pour vous aider à structurer votre business, créer votre offre scalable et scale vos revenus avec des méthodes de growth.

**Pourquoi on fait ça ?**

→ Le Growth pour solopreneurs c'est un système **low complexity, low peoples, high margin** qu'on implémente dans le business des clients pour les accompagner jusqu'au million de C.A annuel.

Parce qu'il y a des raisons pour lesquelles les Solopreneurs sont justement seuls :

- Ils ne veulent pas monter de start-up parce qu'ils veulent avoir + que 1% de chances de succès.
- Ils ne veulent pas monter des agences avec des dizaines de salariés et 10% de marge.
- Ils ne veulent pas attendre avant de s'enrichir, ils veulent disposer de leur temps et de leur argent en illimité sans pour autant baisser leur ambition.

**Pour ça, il faut donc un business :**

- Simple.
- Qui marge.
- Sans salariés.

Alors, on a développé cette méthode qui répond à chacun de ces points : La Masterclass
    `
  },
  {
    id: "grossir-10k-100k",
    title: "Grossir de 10k€ à 100k€/mois",
    date: "25 Juin 2024",
    content: `
Grossir de 0k à 10k par mois demande du temps.
Grossir de 10k à 100k par mois demande des process.

Lorsque vous faites moins de 10k€/mois, vous vendez votre temps.
Cʼest normal et cʼest très bien car vous montez en compétences.

Mais ce système a ses limites, et au-delà de 10k€/mois vous ne vendez plus ni votre temps, ni vos compétences.
Vous vendez vos process et vos connaissances marché.

Les process sont suivis par vos équipes et par vos clients.
Et ces process, en sʼaméliorant avec le temps, prennent de la valeur.

Cʼest avant tout un changement dʼétat dʼesprit et de vision de votre propre business.

Une question pour vous : Quel est lʼétat de vos process ?

Si cʼest le chaos et que vous manquez de process pour :

- Acquérir plus de clients
- Convertir plus de prospects
- Recruter des meilleurs talents
- Ne pas baisser votre marge brute
- Créer une offre scalable et solide

Alors cliquez sur ce lien et découvrez la méthode qui permet de structurer vos process :
[Découvrir la méthode](https://page.marqueblanche.agency/)

À demain,

BP
    `
  },
  {
    id: "pas-le-temps",
    title: "J'ai pas le temps",
    date: "9 Août 2024",
    content: `
**"J'ai pas le temps" est la phrase la plus bullshit du monde de l'entrepreneuriat.**

En réalité, ce n'est pas que :

- Tu es sous l'eau.
- Tu es trop occupé.
- Tu as trop de projets.
- "C'est la course en ce moment".

## C'est juste que tu priorises mal.

Si je te partage une solution pour résoudre tes problèmes avec 100% de chances que ça fonctionne, mais que ça te prend 5h par jour, je peux t'assurer que tu vas trouver ces 5h.

Le problème, c'est pas que t'as pas le temps, c'est que tu papillonnes, que tu bosses **dans** ton business et pas **sur** ton business.

Je le sais, j'ai été comme ça pendant longtemps. Maintenant, pour ne plus jamais revivre cette surcharge, je me pose toujours une seule question :

→ **"Je sais que je suis trop occupé lorsque je ne sais pas quelle est la priorité la plus importante du moment."**

Si en 3 secondes je ne suis pas capable de dire "Je dois faire ça", c'est que je fais trop de trucs inutiles qui remplissent mon agenda.
    `
  },
  {
    id: "emanciper-moyenne",
    title: "Votre première étape pour vous émanciper de la moyenne",
    date: "15 Décembre 2023",
    content: `
La plupart des hommes vivent une vie de désespoir silencieux.

Un jour, une personne très proche m'a dit :
"Tu sais, jʼai vu beaucoup dʼhommes très intelligents et très ambitieux, se retrouver bloqués dans leur vingtaine à cause dʼune femme, et des factures qui sʼempilent."

J'avais 16 ans. Et cette phrase m'a marqué.

J'ai toujours su que je voulais devenir entrepreneur et ne pas tomber dans la vie normale.
Mais cette phrase a transformé une envie en devoir.
Et ce devoir est devenu une urgence.

Car si tu ne t'émancipes pas au début de ta vingtaine, ce sera bien plus dur après.

Beaucoup d'hommes suivent ce schéma :

- Mariage précoce
- Maison à payer
- Voiture pour aller au taf
- Factures du foyer, des enfants

Résultat : ils se retrouvent bloqués émotionnellement, affectivement, financièrement.

J'ai donc conçu un mini-cours pour en sortir.

3 mails :

- Mental
- Argent
- Relations

Et aujourd'hui, on commence avec le mental.

## Qu'est-ce que la moyenne ?

Ce n'est ni une CSP, ni un revenu, ni un lieu de vie.

C'est un état d'esprit. Une absence de conscience.

Tu es dans la moyenne si :

- Tu n'es pas heureux
- Tu n'agis dans aucun domaine pour viser le top 1%
- Tu parles de politique comme d'une télé-réalité
- Tu n'as ni valeurs claires ni valeurs assumées
- Tu suis la tendance

Et surtout : **tu ne fais rien de grand**

Mais "grand", ça ne veut pas dire riche, célèbre ou influent.

Être grand, c'est :

- Éduquer ses enfants avec intention
- Créer quelque chose qui dépasse sa propre vie
- Travailler sur la grandeur de son âme

Bref : faire des trucs stylés.

## Étape 1 : Définir ta mission

La majorité avance sans but, sans direction, sans devoir.

Pose-toi cette question :

"Qu'est-ce que je veux le plus dans ma vie, qui est bon pour moi, mes proches, et plus grand que ma simple existence ?"

Ensuite, définis tes actions et tes devoirs.

Exemple perso :

**Mission :** Construire des valeurs fortes, vivre une vie dense, partager avec ceux qui le méritent.

**Actions :** Construire, repousser mes limites, transmettre.

**Devoirs :** Être honnête, bosser plus que tout le monde, sortir de ma zone de confort.

Tu transformes ça en habitudes, en tâches, et tu agis.

## Étape 2 : Faire l'inverse de la majorité

La majorité :

- Cherche le confort
- Craint l'effort
- Suit les autres

Fais l'inverse sur des sujets clés :

- Entreprendre
- T'entraîner 5x/semaine
- Supprimer les réseaux sociaux
- Travailler 60h/semaine
- Te confronter à des idées opposées

Rien que ça, et tu sors déjà de la moyenne.

## Étape 3 : Viser le top 1%

Choisis un domaine, et vise l'excellence.

La moyenne lit 2 livres par an.
La moyenne ne sait pas monter à cheval.
La moyenne n'a aucun domaine d'excellence.

Sois l'opposé.

Exemples où je suis top 1% :

- Calisthénie
- Succès avec les femmes
- Écriture quotidienne
- Création de contenu

Objectifs à venir :

- Boxe Thaï
- Compte bancaire
- Restauration
- Temps avec mes enfants

À toi de jouer.

Sois fier, exigeant, ambitieux.

Demain, on parle d'argent.

À demain,

BP
    `
  }
];

export default function NewsletterPage() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const monthsInFrench: { [key: string]: number } = {
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
    'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
  };

  const parseFrenchDate = (date: string) => {
    const [day, month, year] = date.split(" ");
    const monthIndex = monthsInFrench[month.toLowerCase()];
    return new Date(parseInt(year), monthIndex, parseInt(day));
  };

  const filteredNewsletters = NEWSLETTERS.filter(newsletter =>
    newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsletter.content.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    const dateA = parseFrenchDate(a.date);
    const dateB = parseFrenchDate(b.date);
    return sortOrder === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-primary via-primary/90 to-gray-900 overflow-hidden">
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
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Archives Newsletter
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Retrouve toutes nos newsletters et leur contenu complet
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Inscription à la newsletter en cours de développement');
                }}
                className="flex flex-col md:flex-row gap-4 bg-gray-800/30 backdrop-blur-xl p-6 rounded-2xl border border-gray-700"
              >
                <div className="flex-1 space-y-4 md:space-y-0 md:flex md:gap-4">
                  <input
                    type="text"
                    placeholder="Ton prénom"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Ton email professionnel"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-button hover:bg-button/90 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 whitespace-nowrap shadow-lg shadow-button/20 hover:shadow-xl hover:shadow-button/30 transform hover:scale-[1.02]"
                >
                  Recevoir la newsletter
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4 text-center">
                Tu peux te désabonner à tout moment. Pas de spam.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-900 min-h-screen py-20">
        <div className="container-custom">
          {/* Search and Sort */}
          <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Rechercher dans les newsletters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h2 className="text-lg font-medium text-white">Trier par date :</h2>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                className="bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent"
              >
                <option value="desc">Plus récentes d'abord</option>
                <option value="asc">Plus anciennes d'abord</option>
              </select>
            </div>
          </div>

          {/* Newsletter Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter List */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {filteredNewsletters.map((newsletter) => (
                <motion.button
                  key={newsletter.id}
                  onClick={() => setSelectedNewsletter(newsletter)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    selectedNewsletter?.id === newsletter.id
                      ? 'bg-button/20 border-2 border-button'
                      : 'bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50'
                  }`}
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{newsletter.title}</h3>
                  <p className="text-gray-400">
                    {newsletter.date}
                  </p>
                </motion.button>
              ))}
            </motion.div>

            {/* Newsletter Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="sticky top-32">
                {selectedNewsletter ? (
                  <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-8 border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedNewsletter.title}</h2>
                    <p className="text-gray-400 mb-8">
                      {selectedNewsletter.date}
                    </p>
                    <div className="prose prose-invert max-w-none">
                      {selectedNewsletter.content.split('\n\n').map((paragraph, index) => {
                        // Handle headers (##)
                        if (paragraph.startsWith('##')) {
                          return (
                            <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                              {paragraph.replace('##', '').trim()}
                            </h2>
                          );
                        }
                        
                        // Handle ### headers
                        if (paragraph.startsWith('###')) {
                          return (
                            <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">
                              {paragraph.replace('###', '').trim()}
                            </h3>
                          );
                        }

                        // Handle bold text (**text**)
                        const formattedText = paragraph.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong>$1</strong>'
                        );

                        // Handle lists
                        if (paragraph.trim().startsWith('- ')) {
                          const items = paragraph.split('\n').filter(item => item.trim());
                          return (
                            <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
                              {items.map((item, i) => (
                                <li key={i} className="text-gray-300">
                                  <div 
                                    dangerouslySetInnerHTML={{ 
                                      __html: item.replace('- ', '').replace(
                                        /\*\*(.*?)\*\*/g,
                                        '<strong class="text-white">$1</strong>'
                                      )
                                    }} 
                                  />
                                </li>
                              ))}
                            </ul>
                          );
                        }

                        // Handle numbered lists
                        if (paragraph.match(/^\d+\./)) {
                          const items = paragraph.split('\n').filter(item => item.trim());
                          return (
                            <ol key={index} className="list-decimal pl-6 space-y-2 mb-6 text-gray-300">
                              {items.map((item, i) => (
                                <li key={i} className="text-gray-300">
                                  <div 
                                    dangerouslySetInnerHTML={{ 
                                      __html: item.replace(/^\d+\.\s/, '').replace(
                                        /\*\*(.*?)\*\*/g,
                                        '<strong class="text-white">$1</strong>'
                                      )
                                    }} 
                                  />
                                </li>
                              ))}
                            </ol>
                          );
                        }

                        // Handle links
                        if (paragraph.match(/\[.*?\]\(.*?\)/)) {
                          const titleMatch = paragraph.match(/\[(.*?)\]/);
                          const urlMatch = paragraph.match(/\((.*?)\)/);
                          
                          if (titleMatch && urlMatch) {
                            const linkText = titleMatch[1];
                            const linkUrl = urlMatch[1];
                            return (
                              <a
                                key={index}
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-button hover:underline mb-4"
                              >
                                {linkText}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            );
                          }
                        }

                        // Handle arrows (→)
                        if (paragraph.startsWith('→')) {
                          return (
                            <div key={index} className="mb-4 text-gray-300 pl-6 border-l-2 border-button">
                              <span
                                dangerouslySetInnerHTML={{ 
                                  __html: paragraph.replace(
                                    /\*\*(.*?)\*\*/g,
                                    '<strong class="text-white">$1</strong>'
                                  )
                                }} 
                              />
                            </div>
                          );
                        }

                        // Regular paragraphs
                        return (
                          <div key={index} className="mb-4 text-gray-300">
                            <span
                              dangerouslySetInnerHTML={{ 
                                __html: formattedText.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-white">$1</strong>'
                                )
                              }} 
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-8 border border-gray-700 text-center">
                    <p className="text-gray-400">Sélectionne une newsletter pour voir son contenu</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 