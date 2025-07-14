export default function IncubateurPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Titre principal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-black px-6 py-4 mb-6 leading-tight">
            Comment j'ai speedrun le business de service B2B et généré +17M€ de C.A*
          </h1>

          {/* Note de bas de page */}
          <p className="text-sm text-gray-600 mb-8 italic">
            *C.A global estimé généré par mes entreprises ainsi que par les systèmes mis en place chez les clients partenaires de BPC GROUP et de ses associés entre 2021 et 2025.
          </p>

          {/* Description */}
          <div className="prose prose-lg text-gray-700 leading-relaxed mb-8">
            <p>
              Découvre comment, en 4 ans je suis passé d'étudiant fêtard (2021), à freelance à 5k$/mois (2022), puis solopreneur à 15k$/mois et 4h de travail/jour (2023) avant de fonder une agence à 75k$/mois (2024) pour enfin être à la tête de BPC group (2025), le premier écosystème pour les entrepreneurs B2B qui répond à toutes leurs problématiques, peu importe leur niveau.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-900 font-medium">Écrit par Baptiste Piocelle</p>
            <p className="text-sm text-gray-600">📍Budapest, Hongrie. CEO & Growth Marketer</p>
          </div>
        </div>
      </section>

      {/* Section Images */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/Incubateur/capture-ecran-2024-06-13-18-10-16.png" 
                alt="Un cigar lounge avec des amis qui font 100k€/mois à 20 ans." 
                className="w-full h-64 md:h-80 object-contain"
              />
              <p className="text-center text-sm text-gray-700">Un cigar lounge avec des amis qui font 100k€/mois à 20 ans.</p>
            </div>
            <div>
              <img 
                src="/Incubateur/f04ef2f5-d987-4cbe-ae04-b0ab8f3e8ec8.jpg" 
                alt="Après avoir invité mes Grand-Parents pour un voyage à Budapest." 
                className="w-full h-64 md:h-80 object-contain"
              />
              <p className="text-center text-sm text-gray-700">Après avoir invité mes Grand-Parents pour un voyage à Budapest.</p>
            </div>
            <div>
              <img 
                src="/Incubateur/IMG_8116.jpeg" 
                alt="4Seasons avec mon Frère et des amis." 
                className="w-full h-64 md:h-80 object-contain"
              />
              <p className="text-center text-sm text-gray-700">4Seasons avec mon Frère et des amis.</p>
            </div>
            <div>
              <img 
                src="/Incubateur/IMG_6227.jpeg" 
                alt="Avec une compagne à Santorin, pour 10 jours de repos." 
                className="w-full h-64 md:h-80 object-contain"
              />
              <p className="text-center text-sm text-gray-700">Avec une compagne à Santorin, pour 10 jours de repos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Texte sous les images */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <p className="text-center italic text-gray-600 text-base">
          Je suis pas là pour te vendre du lifestyle de rêve, tu vaux mieux que ça. Je suis là pour te montrer que l'argent fait le bonheur, et qu'il te faut plus d'argent. Et que tout ça est possible car j'ai quelque chose qui a marché pour moi, et qui me permet de faire ce que j'aime.
        </p>
      </div>

      {/* Section Preuves de paiement */}
      <section className="pb-24 px-4">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Colonne gauche : virement.png */}
            <div className="flex items-center justify-center h-full">
              <img 
                src="/Incubateur/virement.png" 
                alt="Preuve de paiement Virement"
                className="w-full h-auto max-h-[700px] object-contain"
              />
            </div>
            {/* Colonne droite : stripe.png en haut, account.png en bas */}
            <div className="flex flex-col gap-4 h-full justify-center" style={{height: '700px'}}>
              <img 
                src="/Incubateur/stripe.png" 
                alt="Preuve de paiement Stripe"
                className="w-full h-1/2 object-contain flex-1"
                style={{height: '50%'}}
              />
              <img 
                src="/Incubateur/account.png" 
                alt="Preuve de paiement Account"
                className="w-full h-1/2 object-contain flex-1"
                style={{height: '50%'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Stats */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center justify-center py-10 px-4">
              <span className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">+4.000</span>
              <span className="text-lg text-gray-700 text-center">leads générés en 2024.</span>
            </div>
            {/* Stat 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center justify-center py-10 px-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50k€/client/an</span>
              <span className="text-lg text-gray-700 text-center">Méthode pour signer jusqu'à<br />50k€/client/an.</span>
            </div>
            {/* Stat 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col items-center justify-center py-10 px-4">
              <span className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">+150</span>
              <span className="text-lg text-gray-700 text-center">clients B2B servis en 4 ans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Copy storytelling */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <p className="italic text-gray-700 mb-6">
            J'ai structuré des systèmes pour plus de 150 entreprises B2B entre 100k€ et 10M€ de C.A annuel.
          </p>
          <p className="text-gray-700 mb-6">
            À chaque fois, on a restructuré leur positionnement, construit une machine d'acquisition, et installé les bons process.
          </p>
          <p className="text-gray-700 mb-6">
            J'ai vendu ces résultats entre <span className="font-bold">2.000€ et 150.000€</span>, selon le niveau d'exécution et le profil du client.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
            Pas de produit. Pas de logiciel. Pas d'équipe.<br />
            <br />
            Juste des connaissances structurées, des systèmes concrets, et des résultats mesurables.
          </blockquote>
          <p className="text-gray-700 mb-6">
            Et si tu fais le calcul, ça fait environ <span className="font-bold">500.000€ générés</span> en travaillant quasiment seul, sans salarié, sans bureau, sans emprunt bancaire.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pourquoi je partage ça aujourd'hui</h3>
          <p className="text-gray-700 mb-6">
            En 2020, je bossais dans un bar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <img src="/Incubateur/Barman.png" alt="Baptiste barman" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/Incubateur/bulletin.jpg" alt="mon bulletin de salaire à l'époque" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
              <p className="italic text-gray-500 text-center mt-2">mon bulletin de salaire à l'époque</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            Un soir, mon patron m'a dit :
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
            "Ton avenir, il est pas ici, Baptiste."
          </blockquote>
          <p className="text-gray-700 mb-6">
            Je ne savais pas quoi faire.
          </p>
          <p className="text-gray-700 mb-6">
            Mais j'ai compris un truc :
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
            si je voulais sortir du lot, je devais résoudre des problèmes.<br />
            <br />
            Les miens. Puis ceux des autres.
          </blockquote>
          <p className="text-gray-700 mb-6">
            C'est comme ça que j'ai commencé à créer des systèmes.<br />
            Pour moi d'abord.<br />
            Puis pour +150 autres entrepreneurs B2B.
          </p>
        </div>
      </section>

      {/* Section double case : partage & background */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Case 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col justify-center p-8 lg:p-10">
              <p className="text-gray-900 text-xl lg:text-2xl font-semibold mb-6 leading-relaxed">Aujourd'hui, je partage ce que j'ai appris dans les business de services, tu vas tout comprendre.</p>
              <div className="space-y-3">
                <p className="text-gray-700">Parce que personne ne t'apprend à structurer un business quand tu démarres seul.</p>
                <p className="text-gray-700">Parce que trop de solopreneurs stagnent aux 10k€/mois.</p>
                <p className="text-gray-700">Parce que tu ne manques pas de volonté,</p>
                <p className="text-gray-900 font-bold text-lg">tu manques de cadre.</p>
              </div>
            </div>
            {/* Case 2 - Background amélioré */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 border-2 border-gray-200 rounded-2xl shadow-2xl flex flex-col justify-between p-8 lg:p-10 relative overflow-hidden min-h-[500px]">
              <span className="absolute top-6 left-6 bg-black text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">Background</span>
              <div className="mt-8">
                <p className="text-gray-900 text-xl lg:text-2xl font-semibold mb-6">Background :</p>
                <ul className="text-gray-700 space-y-3 mb-8 list-none">
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">18</span>
                    <span>1er business (tourisme… covid… 0€)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">21</span>
                    <span>je lance mon podcast et part viral (2M vues)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">22</span>
                    <span>1er client LinkedIn et premier 5k€ net par mois.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">23</span>
                    <span>15k€/mois en solo, 4h/j</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">24</span>
                    <span>je monte une agence → 120k€ en 6 mois, j'arrête</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">25</span>
                    <span>je lance BPC, notre incubateur pour scaler des indépendants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full mr-3 mt-1 min-w-[40px] text-center">Now</span>
                    <span>35M de vues, 500k€ générés en solo (plusieurs millions pour mes clients), une obsession : <span className="font-bold">les systèmes</span></span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end items-end mt-6">
                <img 
                  src="/Incubateur/founder1.jpg" 
                  alt="Fondateur" 
                  className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Offre Irrésistible */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">1) Créer une offre si bonne que les prospects se sentent stupides de la refuser</h2>
          <p className="text-gray-700 mb-4">C'est l'une des décisions les plus importantes que tu peux prendre dans ton business.</p>
          <p className="text-gray-700 mb-4"><span className="font-bold">L'offre est plus importante</span> que ton service et ton expertise. Pour générer des dizaines de milliers d'euros chaque mois, tu dois avoir cette offre avec cette <span className="font-bold">clarté & ce pouvoir de conversion.</span></p>
          <p className="text-gray-700 mb-4">Les meilleures offres répondent à des problèmes universels <span className="italic">(ex: générer plus de revenus, économiser du temps, réduire les risques, automatiser les processus)</span></p>
          <p className="text-gray-700 mb-4">Si tu captures seulement 0.1% d'un marché avec une offre solide, tu auras probablement un <span className="font-bold">business à 6-7 chiffres.</span> Là où la plupart échouent, c'est qu'ils créent des offres floues, sans valeur claire & sans système de revenus récurrents. <span className="italic">(typique des freelances qui vendent "du conseil" 🫠)</span></p>

          <div className="mb-6">
            <p className="font-bold mb-2">Exemple d'offre faible vs offre puissante :</p>
            <ul className="space-y-2">
              <li><span className="font-bold">Offre faible :</span> "Je fais du marketing digital pour les entreprises"</li>
              <li><span className="font-bold">Offre puissante :</span> "Je génère 50+ leads qualifiés/mois pour les cabinets comptables via LinkedIn avec garantie de résultats"</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-4">Le truc génial c'est que ça <span className="font-bold">fonctionne dans tous les secteurs.</span> Et la plupart n'ont aucune vraie concurrence structurée.</p>

          {/* Cas concret */}
          <div className="mb-2">
            <p className="font-bold text-lg text-gray-900 mb-4">Cas concret : La structure d'offres de Christophe</p>
          </div>
          <div className="flex flex-col gap-6 mb-8">
            <img src="/Incubateur/channels4_profile.jpg" alt="Christophe 1" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/offres christophe.png" alt="Christophe 2" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/close alassane.png" alt="Christophe 3" className="w-full max-h-[400px] object-contain" />
          </div>

          {/* Callout */}
          <div className="bg-blue-600 border-l-8 border-blue-800 p-8 rounded-2xl mb-10">
            <p className="font-bold text-white text-lg mb-3">Qu'est-ce qui rend une offre irrésistible ?</p>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Le problème résolu est <span className="font-bold">critique pour une large audience</span> dans ton marché</li>
              <li><span className="font-bold">Volume élevé de prospects</span> qui cherchent cette solution quotidiennement</li>
              <li>Il existe <span className="font-bold">des entreprises prêtes à payer</span> pour ce résultat</li>
              <li><span className="font-bold">Pas limité géographiquement</span> - applicable en remote ou à l'échelle</li>
              <li>Tu peux <span className="font-bold">prouver tes résultats</span> avec des cas concrets et mesurables</li>
              <li>Le <span className="font-bold">ticket moyen est au-dessus de 5000€, idéalement 10.000€+</span></li>
              <li>Tu proposes <span className="font-bold">des revenus récurrents</span> (MRR) pas juste du one-shot</li>
            </ul>
          </div>

          {/* Vidéo embed */}
          <div className="w-full mb-8" style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
            <iframe
              src="https://www.tella.tv/embed/temoignage-joris-9r0m"
              title="Témoignage Joris"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-700 italic mb-8">Joris a monté son agence à 100k€/an</p>
        </div>
      </section>

      {/* Section Système d'acquisition prédictible */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">2) Créer un système d'acquisition prédictible</h2>
          <p className="text-gray-700 mb-4">T'as une vraie offre.</p>
          <p className="text-gray-700 mb-4">Go trouver des clients qui te payent entre 10.000€ et 100.000€ par an, sans que t'aie à vendre au TJM comme un esclave (oups salarié) déguisé.</p>
          <img src="/Incubateur/yann.png" alt="Yann" className="w-full max-h-[400px] object-contain mb-8" />
          <p className="text-center text-gray-700 italic mb-8">Avec Yann on a généré 20k€ sur son premier lancement.</p>

          <p className="font-bold text-gray-900 mb-2">Souvent, c'est ici que ça bloque pour les solopreneurs car il se passe une de ces deux choses :</p>
          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
            <li><span className="font-bold">Tu ne priorises pas l'acquisition.</span> Tu es focus sur la livraison, donc tu cherches de nouveaux clients quand t'as le temps. Résultats ton business est en dent de scie.</li>
            <li><span className="font-bold">Tu n'as pas de système.</span> Donc tu n'es pas capable d'obtenir des leads qualifiés sur demande, et ça provoque l'épuisement de ton business et l'obligation d'être dépendant du bouche à oreille.</li>
          </ol>

          <p className="text-gray-700 mb-2">Tu peux obtenir des clients de 4 façons différentes :</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Les reco.</li>
            <li>Le contenu.</li>
            <li>La publicité.</li>
            <li>La prospection.</li>
          </ul>

          <p className="text-gray-700 mb-4">Juste avec un canal tu dois être capable de generer au moins 10 leads par mois.</p>

          <p className="text-gray-900 font-bold mb-2">Un lead qualifié c'est ça :</p>
          <table className="w-full text-sm text-left border border-gray-200 mb-6 text-gray-900">
            <thead className="bg-gray-100 text-gray-900">
              <tr>
                <th className="px-4 py-2 font-bold">Filtre</th>
                <th className="px-4 py-2 font-bold">Seuil minimal</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-t">
                <td className="px-4 py-2 font-bold">Identité vérifiée</td>
                <td className="px-4 py-2">Email pro et/ou numéro direct valides</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-bold">Fit ICP</td>
                <td className="px-4 py-2">Secteur + fonction décisionnaire + taille d'entreprise alignés à la cible du client</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-bold">Intérêt explicite</td>
                <td className="px-4 py-2">A exprimé un besoin ou une curiosité claire ("Oui, envoyez-moi plus d'info" / a rempli un quiz / a cliqué sur une offre)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-bold">Budget indicatif</td>
                <td className="px-4 py-2">Budget déclaratif ≥ seuil client (ou champ "Budget" complété)</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700 mb-4">Avec nos campagnes, on génère jusqu'à 500 prospects/mois en B2B pour un CPL entre 0€ et 12€. En général, nôtre coût par rdv est autour des 100€</p>

          <p className="text-gray-700 mb-4">Rapide calcul conservateur :</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>500 prospects à 6€ en médiane = 3.000€</li>
            <li>10% de prise de rendez-vous = 50 rdv = 5.000€</li>
            <li>30% de taux de conversation en rendez-vous = 15 ventes.</li>
            <li>Produit minimum à 5.000€ = 75.000€.</li>
          </ul>

          <img src="/Incubateur/ROI.png" alt="ROI" className="w-full max-h-[400px] object-contain mb-8" />
          <p className="text-gray-900 font-bold mb-4">ROI X9,4.</p>
          <p className="text-gray-700 mb-4">Et ça, c'est pour les agences bien en place, si t'es solopreneur tu peux diviser les CPL par 2, et faire autant de chiffre car tu closes plus.</p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">534 leads et 87 rendez-vous en 3 mois pour Alassane :</h3>
          <div className="flex flex-col gap-6 mb-8">
            <img src="/Incubateur/LEads Alassane.png" alt="Leads Alassane" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/Whatsapp Booking.png" alt="Whatsapp Booking" className="w-full max-h-[400px] object-contain" />
          </div>

          <p className="text-gray-700 mb-4">Lire un script, négocier, contrer les objections, relancer… c'est pas mon truc.</p>
          <p className="text-gray-700 mb-4">C'est toujours à prendre ou à laisser, et si t'en veux pas, d'autres voudront.</p>
          <p className="text-gray-700 mb-4">L'avantage (normalement) quand t'es un prestataire de service bien structuré c'est que ton temps est limité, donc naturellement, ton prix doit augmenter constamment, et t'es pas censé courrir après les clients.</p>
          <p className="text-gray-700 mb-4">C'est comme ça que j'ai appris à vendre des contrats à plusieurs dizaines de milliers d'euros sur WhatsApp.</p>
          <p className="text-gray-700 mb-4">Tout ce que ça demande c'est ce qu'on a déjà vu :</p>
          <p className="text-gray-900 font-bold mb-2">Offre + Volume + Valeur = Vente</p>
          <p className="text-gray-700 mb-4">Peu importe le canal.</p>
          <p className="text-gray-700 mb-4">Et moi qui deteste les appels de vente, ça me permet quand même de…</p>

          <img src="/Incubateur/IMG_2627.HEIC.jpg" alt="Lieu de vie" className="w-full max-h-[400px] object-contain mb-2" />
          <p className="text-gray-700 text-center italic">Vivre et travailler dans ce genre de lieu… (4.000€/mois).</p>
        </div>
      </section>

      {/* Section 3 : Éduquer et qualifier tes prospects */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">3) <span className="font-bold">Éduquer</span> et qualifier tes prospects pour vendre encore plus facilement.</h2>
          <p className="text-gray-700 mb-4">Si t'es bon, t'as même pas besoin de cette étape pour taper 50.000€/mois.</p>
          <p className="text-gray-700 mb-4">Mais j'aime bien maximiser mes chances, mon ROI et ma rentabilité.</p>
          <p className="text-gray-700 mb-4">Et pour sortir de la masse, c'est ici que ça se joue.</p>
          <p className="text-gray-700 mb-4">Car la majorité des prestataires ont la flemme de faire cette étape.</p>
          <p className="text-gray-700 mb-4">Mais t'es pas un flemmard pas vrai ?</p>
          <p className="text-gray-700 mb-4">Le but du jeu, c'est que ton prospect soit convaincu que tu es la seule et la meilleure solution pour résoudre tout ses problèmes.</p>
          <p className="text-gray-700 mb-4">C'est possible en éduquant tes prospects avec :</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Du contenu.</li>
            <li>Des études de cas.</li>
            <li>Des VSL ou des SL.</li>
            <li>Des séquences de nurturing.</li>
            <li>Des systèmes.</li>
          </ul>
          <p className="text-gray-700 mb-4">Tu doubles tes taux de conversion en plus de réduire tes coûts par leads.</p>

          <div className="flex flex-col gap-6 mb-8">
            <img src="/Incubateur/Leads 285.png" alt="Leads 285" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/12M C.A.png" alt="12M C.A" className="w-full max-h-[400px] object-contain" />
          </div>

          <p className="text-gray-900 font-bold mb-2">La PRÉCISION est la clé de la conversion.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Tu veux envoyer le bon contenu au bon prospect au bon moment.</li>
            <li>Pour que lorsque il arrive au moment d'acheter, il n'ai plus aucun doute.</li>
            <li>Tu es la seule et la meilleure personne avec qui il doit travailler pour ce projet.</li>
          </ul>
          <p className="text-gray-700 mb-4">C'est comme ça que tu peux closer des deals à 50k€/an sans équipe commerciale.</p>

          <div className="flex flex-col gap-6 mb-8">
            <img src="/Incubateur/WA VUES.png" alt="WA VUES" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/Vues LinkedIn.png" alt="Vues LinkedIn" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/Followers LinkedIn 1.png" alt="Followers LinkedIn 1" className="w-full max-h-[400px] object-contain" />
            <img src="/Incubateur/Followers LinkedIn 2.png" alt="Followers LinkedIn 2" className="w-full max-h-[400px] object-contain" />
          </div>

          {/* Vidéo YouTube embed */}
          <div className="w-full mb-8" style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
            <iframe
              src="https://www.youtube.com/embed/al1OJeYur9Y?start=692"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 4 : Livre ton service, facture et recommence */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">4) Livre ton service, facture et recommence</h2>
          <p className="text-gray-700 mb-4">Maintenant que tu as vendu, il faut livrer.</p>
          <p className="text-gray-700 mb-4">Les solopreneurs pensent que vendre c'est le plus dur. <span className="font-bold">Erreur.</span></p>
          <p className="font-bold text-gray-900 mb-2">La livraison, c'est ce qui détermine si tu auras :</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Des clients qui recommandent</li>
            <li>Des témoignages qui vendent à ta place</li>
            <li>Des contrats renouvelés</li>
            <li>Ou des remboursements et du bad buzz</li>
          </ul>
          <p className="italic text-gray-900 font-bold mb-4">Le secret ? Industrialiser ta livraison comme tu as industrialisé ton acquisition.</p>
          <p className="font-bold text-gray-900 mb-2">Chez nous, chaque projet suit le même process :</p>
          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">
            <li><span className="font-bold">Kick-off call</span> dans les 48h après signature</li>
            <li><span className="font-bold">Roadmap détaillée</span> envoyée sous 7 jours</li>
            <li><span className="font-bold">Points d'étapes</span> toutes les semaines.</li>
            <li><span className="font-bold">Livrables intermédiaires</span> pour maintenir l'engagement</li>
            <li><span className="font-bold">Bilan final</span> + plan d'optimisation</li>
          </ol>
          <p className="font-bold text-gray-900 mb-2">Les 3 erreurs fatales en livraison :</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><span className="font-bold">Pas de communication régulière</span> → le client pense que tu ne fais rien</li>
            <li><span className="font-bold">Pas de process défini</span> → tu réinventes la roue à chaque projet (tu dois suivre des process incrémentaux)</li>
            <li><span className="font-bold">Pas de mesure des résultats</span> → impossible de prouver ta valeur</li>
          </ul>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl mb-4">
            <p className="font-bold text-yellow-900">Ma règle d'or : "Under promise, over deliver"</p>
            <p className="text-yellow-900">Si tu promets 50 leads, livre-en 65. Si tu promets 4 semaines, finis en 3.</p>
          </div>
          <p className="text-gray-700 mb-2">Théophile est resté chez moi 3 ans grâce à ce système, et nous a fait confiance pour le lancement de son SaaS en 2025.</p>
          <p className="text-gray-700 mb-6">Sandrine, Davy, Fabien, Guillaume, m'ont recontacté après parfois 2 ans pour qu'on bosse ensemble.</p>
        </div>
      </section>

      {/* Section 5 : Gagne plus d'argent avec chaque client */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">5) Gagne plus d'argent avec chaque client</h2>
          <p className="text-gray-700 mb-4">À cette étape tu as une offre banger, une acquisition stable, un C.A en croissance et des clients heureux.</p>
          <p className="text-gray-700 mb-4">Bravo, t'as juste fait le strict minimum, on va voir comment faire plus.</p>
          <p className="text-gray-700 mb-4">Ton objectif doit maintenant être de maximiser ta LTV (Life Time Value) donc l'argent généré par un seul client.</p>
          <p className="text-gray-700 mb-4">Ton monde change quand tu passes de "un client me rapporte 2.000€" à "Un client me rapporte 100.000€".</p>
          <p className="text-gray-700 mb-4">Tu penses que c'est pas possible ?</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-4">
            <p className="font-bold text-blue-900 mb-2">Voici comment j'ai triplé mon CA sans tripler mes clients :</p>
            <h3 className="font-bold text-blue-900 mt-2 mb-1">A) Les upsells naturels</h3>
            <ul className="list-disc list-inside text-blue-900 mb-2">
              <li>Installation de nouveaux systèmes.</li>
              <li>Formation des équipes en interne.</li>
              <li>Coaching à l'heure.</li>
            </ul>
            <p className="italic text-blue-900 mb-2">Résultat : Les clients en re-demandent.</p>
            <h3 className="font-bold text-blue-900 mt-4 mb-1">B) Les contrats récurrents</h3>
            <ul className="list-disc list-inside text-blue-900 mb-2">
              <li>Maintenance système et support hebdo.</li>
              <li>Abonnement d'optimisation.</li>
              <li>Abonnement de contenu.</li>
            </ul>
            <p className="italic text-blue-900 mb-2">Un client qui paye 5000€ une fois peut devenir un client qui paye 15000€ sur l'année.</p>
            <h3 className="font-bold text-blue-900 mt-4 mb-1">C) Les partenariats stratégiques</h3>
            <ul className="list-disc list-inside text-blue-900 mb-2">
              <li>Commission sur les références (10-20%)</li>
              <li>Co-création d'offres spécialisées</li>
              <li>Association.</li>
            </ul>
            <p className="italic text-blue-900 mb-2">Quand tes clients deviennent tes associés tu as terminé le game.</p>
          </div>
          <p className="text-gray-700 mb-4">Et c'est ce qu'on fait avec l'incubateur.</p>
          <p className="text-gray-700 mb-4">On s'associe avec certains de nos clients pour maximiser leur C.A et les propulser jusqu'au million de C.A</p>
          <p className="text-gray-700 mb-4">Pour nous rejoindre prend un rdv avec mon équipe ou envoie moi un message sur WhatsApp : <span className="font-bold">+33.6.53.90.27.11</span></p>
          <p className="text-gray-700 mb-4">Si t'es pas ambitieux ou que t'es pas prêt, va te former gratuitement ici <a href="https://masterclass.bpcorp.eu/module0" className="text-blue-600 underline">masterclass.bpcorp.eu/module0</a></p>
          <p className="text-gray-900 font-bold text-lg mt-6">Arrête de courir après de nouveaux clients avant d'avoir optimisé la valeur de tes clients actuels.</p>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl mt-4">
            <p className="font-bold text-green-900">Un portefeuille de 20 clients récurrents qui payent 2000€/mois chacun = <span className="text-2xl">480k€ de CA annuel garanti.</span></p>
          </div>
        </div>
      </section>

      {/* Section Est-ce que ça fonctionne ? */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">Est-ce que ça fonctionne ?</h2>
          
          <div className="flex items-center mb-6">
            <img src="/Incubateur/Branson.jpeg" alt="Richard Branson" className="w-16 h-16 object-cover rounded-full mr-4" />
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
              "Ne vous contentez pas de ce que vous pouvez faire. Identifiez ce que vous faites mieux que quiconque, et concentrez-vous là-dessus."
              <footer className="font-bold text-gray-900 mt-2">— Richard Branson</footer>
            </blockquote>
          </div>

          <p className="text-gray-700 mb-6">
            Oui, se concentrer sur son coeur de service, ça fonctionne.
          </p>
          <p className="text-gray-700 mb-8">
            J'ai fait tout ça, tout en voyageant et en créant mon réseau à l'aide de mes contenus.
          </p>

          {/* Témoignage Guillaume */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-start mb-4">
              <img src="/Incubateur/Guillaume.png" alt="Guillaume Moubeche" className="w-16 h-16 object-cover rounded-full mr-4" />
              <div>
                <h3 className="font-bold text-gray-900">Guillaume Moubeche, rencontré il y a 4 ans.</h3>
                <p className="text-gray-600 font-semibold">CEO, Lemlist.</p>
              </div>
            </div>
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
              "Je connais Baptiste depuis qu'il a commencé à créer du contenu et c'est impressionnant de voir sa courbe d'apprentissage ! Il a réussi à trouver la formule secrète pour faire du contenu qui fonctionne tout en se créant une audience authentique - en plus de ça c'est un mec ultra sympa!"
            </blockquote>
          </div>

          <img src="/Incubateur/Booking.png" alt="Booking" className="w-full max-h-[400px] object-contain mb-8" />

          <p className="text-gray-700 mb-6">
            Ça fait 5 ans que je fais du business en ligne, j'ai travaillé avec +150 entreprises B2B qui génèrent des dizaines de millions en cumulé chaque année. Mes clients tels que BeTech, Audit & Coverage, RECSI GROUP, Lugus, Linkup Coaching, … sont tous reconnus sur leur marché.
          </p>

          {/* Exemples de clients */}
          <div className="space-y-8 mb-8">
            {/* Yann */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <div className="flex items-start mb-4">
                <img src="/Incubateur/Yannphoto.png" alt="Yann" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Yann</h3>
                  <p className="text-gray-600">Agency Factory</p>
                </div>
              </div>
              <p className="text-gray-700">
                Avec qui je travaille depuis +3 ans, sur LinkedIn on a réalisé des millions de vues, et avec son programme Agency Factory on a formé des dizaines de dev à monter leur agence.
              </p>
            </div>

            {/* Anais */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <div className="flex items-start mb-4">
                <img src="/Incubateur/Anais.webp" alt="Anais" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Anais</h3>
                  <p className="text-gray-600">Fondatrice et CEO d'Audit&Coverage</p>
                </div>
              </div>
              <p className="text-gray-700">
                Avec qui, en seulement quelques semaines, on a réalisé des millions de vues sur LinkedIn donc un post qui a généré des centaines de milliers d'euros de C.A potentiel. Sa boîte est en constante croissance et elle est juste devenue LA référence de la dette immobilière en France.
              </p>
            </div>

            {/* Théophile */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <div className="flex items-start mb-4">
                <img src="/Incubateur/Théophile.jpeg" alt="Théophile" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Théophile</h3>
                  <p className="text-gray-600">CEO de Linkup</p>
                </div>
              </div>
              <p className="text-gray-700">
                Qui est un de mes premiers clients. On a réalisé +2 millions de vues ensemble sur LinkedIn et maintenant, on l'accompagne dans le lancement de son SaaS afin de l'aider à atteindre les 5.000 utilisateurs et les 2.000.000€ d'ARR.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            Sans parler de Michelle, Christophe, Alassane, Jean-Marc…
          </p>

          {/* Photos des autres clients */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img src="/Incubateur/Michelle.jpeg" alt="Michelle" className="w-full h-32 object-cover rounded-lg" />
            <img src="/Incubateur/channels4_profile.jpg" alt="Christophe" className="w-full h-32 object-cover rounded-lg" />
            <img src="/Incubateur/Alassane.jpeg" alt="Alassane" className="w-full h-32 object-cover rounded-lg" />
            <img src="/Incubateur/JM.jpg" alt="Jean-Marc" className="w-full h-32 object-cover rounded-lg" />
          </div>

          <p className="text-gray-700 mb-6">
            J'ai également une entreprise d'événementiel, nommée BPS, on organise des événements privés pour entrepreneurs ambitieux à travers toute l'Europe.
          </p>
          <p className="text-gray-700 mb-6">
            Lors de dîners, de soirées et de voyages, des entrepreneurs de haute voltige se rassemblent, échangent, connectent et font du business.
          </p>

          <img src="/Incubateur/Party.jpg" alt="Événement BPS" className="w-full max-h-[400px] object-contain mb-8" />

          {/* Podcasts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img src="/Incubateur/podcast 1.png" alt="Podcast 1" className="w-full h-auto object-contain" />
            <img src="/Incubateur/Podcast 2.png" alt="Podcast 2" className="w-full h-auto object-contain" />
            <img src="/Incubateur/Podcast 3.png" alt="Podcast 3" className="w-full h-auto object-contain" />
            <img src="/Incubateur/Podcast 4.png" alt="Podcast 4" className="w-full h-auto object-contain" />
            <img src="/Incubateur/Podcast 5.png" alt="Podcast 5" className="w-full h-auto object-contain" />
            <img src="/Incubateur/Podcast 6.png" alt="Podcast 6" className="w-full h-auto object-contain" />
            <img src="/Incubateur/Podcast 7.png" alt="Podcast 7" className="w-full h-auto object-contain" />
          </div>
          <p className="italic text-gray-500 text-center mt-2">Certains intervenants de mon podcast depuis 2020</p>

          {/* Témoignage Wallerand */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            <div className="flex items-start mb-4">
              <img src="/Incubateur/WMB.png" alt="Wallerand Moullé-Berteaux" className="w-16 h-16 object-cover rounded-full mr-4" />
              <div>
                <h3 className="font-bold text-gray-900">Wallerand Moullé-Berteaux en 2022.</h3>
                <p className="text-gray-600 font-semibold">CEO Le Crayon, associé à Xavier Niel.</p>
              </div>
            </div>
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
              "Baptiste est un de ces copywriters que je suis et qui m'inspire dans ma propre création de contenu. Depuis les près de 18 mois que je le connais sa courbe de progression est vertigineuse et la suite sera terrible. Je recommande !"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section FAQ/Objections */}
      <section className="pb-20 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-black px-6 py-4 mb-6">"Ok, mais si j'ai aucune experience en vente et marketing ?"</h2>
          
          <p className="text-gray-700 mb-4 font-bold">
            Soyons sérieux… Si tu sais pas vendre t'es pas entrepreneur.
          </p>
          <p className="text-gray-700 mb-6">
            Et le propre d'un entrepreneur c'est de toujours apprendre, chaque jour.
          </p>
          <p className="text-gray-700 mb-6">
            Mais ok, soit, tu veux pas développer de nouvelles compétences, et bien ça fait rien, car :
          </p>
          
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Tu peux recruter des personnes pour faire les tâches à ta place (je peux te montrer comment faire pour quelques centaines d'euros.)</li>
            <li>Tu peux maintenant automatiser et IAiser 90% de ces tâches marketing.</li>
            <li>Et ça fonctionne quand même, regarde Joris, il avait rien :</li>
          </ul>

          {/* Vidéo Joris déplacée */}
          <div className="w-full mb-8" style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
            <iframe
              src="https://www.tella.tv/embed/temoignage-joris-9r0m"
              title="Témoignage Joris"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-700 italic mb-8">Joris a monté son agence à 100k€/an</p>

          {/* C'est pas pour toi si */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl mb-8">
            <h3 className="font-bold text-red-900 text-lg mb-4">C'est pas pour toi si :</h3>
            <ul className="list-disc list-inside text-red-900 space-y-2">
              <li>T'as aucune ambition.</li>
              <li>T'es pas prêt à travailler.</li>
              <li>Tu veux pas faire 1M€/an.</li>
              <li>Tu jamais rien vendu sur internet.</li>
            </ul>
          </div>

          {/* C'est pour toi si */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-xl mb-8">
            <h3 className="font-bold text-green-900 text-lg mb-4">C'est pour toi si :</h3>
            <ul className="list-disc list-inside text-green-900 space-y-2">
              <li>T'es prêt à bosser.</li>
              <li>Tu veux plus que ce que tu as déjà.</li>
              <li>Tu veux être entouré d'entrepreneurs solides qui savent quoi faire.</li>
              <li>T'es capable de prendre la responsabilité de ton existence et de ton business.</li>
            </ul>
          </div>

          {/* Que faire si tu veux en apprendre plus */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Que faire si tu veux en apprendre plus ?</h3>
            <p className="text-blue-900 mb-4">
              On selectionne que 12 profil par an pour l'incubateur.
            </p>
            <p className="text-blue-900 mb-4 font-bold">
              EN 2025, 6 ont déjà rejoins le programme.
            </p>
            <p className="text-blue-900 mb-6">
              Il reste donc 6 places et tu peux candidater ici :
            </p>
            <div className="text-center mb-6">
              <a 
                href="https://api.leadconnectorhq.com/widget/bookings/bp-scaling-implementation" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Candidater à l'incubateur
              </a>
            </div>
            <p className="text-blue-900 mb-4">
              On va juste échanger sur ton projet et voir ce qu'on peut faire avec toi.
            </p>
            <p className="text-blue-900 mb-4">
              Tu seras en mesure de parler avec mon équipe, mais si tu préfères, tu peux m'envoyer un message sur WhatsApp : 
              <span className="font-bold"> +33.6.53.90.27.11</span> (que des gens serieux pas de SPAM svp.)
            </p>
            <p className="text-blue-900">
              Si tu penses qu'il vaut mieux être seul que bien accompagné : 
              <a href="https://masterclass.bpcorp.eu" className="text-blue-600 underline font-bold"> masterclass.bpcorp.eu</a>
            </p>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Comment obtenir des leads de qualité ?</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Créer du contenu.</li>
                <li>Lancer des campagnes ads (uniquement si tu as du cash)</li>
                <li>Faire de la prospection multicanale.</li>
                <li>Utiliser tout ton réseau.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Quel investissement initial ?</h4>
              <p className="text-gray-700">
                Nous allons t'orienter vers la meilleure solution pour toi, 99% de notre contenu est accessible gratuitement, nous sommes justes là pour t'aider à implementer tout ça dans ton business.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Combien de temps pour le premier client ?</h4>
              <p className="text-gray-700 mb-2">
                Le business, c'est pas du temps, c'est des maths. Pour obtenir ton premier client sur ta nouvelle offre, il te faut : 500 messages de prospections, 10% de réponses (50), 10% de rendez-vous (5), 30% de closing (2 nouveaux clients). Tu peux faire tout ça en 48h.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Quel revenu par client ?</h4>
              <p className="text-gray-700 font-bold">
                Entre 3.000€ et 150.000€
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Et si je n'ai pas d'expérience ?</h4>
              <p className="text-gray-700">
                C'est le moyen le plus rapide et le plus efficace d'en acquérir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://api.leadconnectorhq.com/widget/bookings/bp-scaling-implementation"
          className="inline-block bg-black text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre 1:1 RDV avec l'équipe de Baptiste
        </a>
      </div>
    </div>
  );
} 