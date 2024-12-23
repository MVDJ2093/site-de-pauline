import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen w-full bg-offWhite">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl font-bold text-navy mb-8">Politique de Cookies</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-600">
              Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. 
              Ces fichiers permettent de mémoriser vos préférences et d'améliorer votre expérience de navigation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Types de cookies utilisés</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-navy">Cookies essentiels</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Finalité : Fonctionnement technique du site</li>
                  <li>Base légale : Intérêt légitime</li>
                  <li>Durée de conservation : Session</li>
                  <li>Caractère obligatoire : Oui</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy">Cookies analytiques</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Finalité : Mesure d'audience et amélioration du site</li>
                  <li>Base légale : Consentement</li>
                  <li>Durée de conservation : 13 mois</li>
                  <li>Caractère obligatoire : Non</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy">Cookies marketing</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Finalité : Personnalisation publicitaire</li>
                  <li>Base légale : Consentement</li>
                  <li>Durée de conservation : 13 mois</li>
                  <li>Caractère obligatoire : Non</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Gestion des cookies</h2>
            <p className="text-gray-600">Vous pouvez à tout moment :</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Modifier vos préférences via la bannière de consentement</li>
              <li>Supprimer les cookies via les paramètres de votre navigateur</li>
              <li>Désactiver les cookies dans les réglages de votre navigateur</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Impact du refus des cookies</h2>
            <p className="text-gray-600">
              Le refus des cookies non essentiels n'affecte pas la navigation sur le site. 
              Seules les fonctionnalités liées aux cookies refusés seront désactivées.
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