import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen w-full bg-offWhite">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl font-bold text-navy mb-8">Politique des Cookies</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site web. 
              Il permet au site de mémoriser des informations sur votre visite, comme vos préférences de langue et d'autres paramètres.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Les cookies que nous utilisons</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3">Cookies essentiels (obligatoires)</h3>
            <p className="mb-4">
              Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. 
              Ils permettent notamment de :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Mémoriser vos préférences de cookies</li>
              <li>Assurer la sécurité du site</li>
              <li>Permettre l'accès aux différentes pages du site</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">Cookies analytiques</h3>
            <p className="mb-4">
              Ces cookies nous permettent de mesurer l'audience de notre site et d'analyser la façon dont les visiteurs l'utilisent.
              Les données collectées sont anonymisées et nous aident à :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Comprendre comment les visiteurs naviguent sur le site</li>
              <li>Identifier les pages les plus consultées</li>
              <li>Améliorer l'expérience utilisateur</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">Cookies marketing</h3>
            <p className="mb-4">
              Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. 
              L'intention est d'afficher des publicités pertinentes et intéressantes pour l'utilisateur.
              Ils permettent de :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Afficher des publicités personnalisées</li>
              <li>Mesurer l'efficacité des campagnes publicitaires</li>
              <li>Limiter le nombre d'affichages d'une même publicité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Gestion des cookies</h2>
            <p>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies en utilisant le bandeau de consentement 
              accessible depuis le bas de page de notre site. Vous pouvez également supprimer les cookies déjà déposés sur 
              votre terminal via les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Durée de conservation</h2>
            <p>
              Les cookies que nous utilisons ont une durée de vie maximale de 13 mois conformément aux recommandations de la CNIL.
              À l'issue de ce délai, votre consentement sera à nouveau recueilli.
            </p>
          </section>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default PolitiqueCookies;