import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen w-full bg-offWhite">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl font-bold text-navy mb-8">Mentions Légales</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">Maître Pauline Anger-Bourez</h2>
            <p>Adresse : 50 Rue Gustave Delory 59800 LILLE</p>
            <p>Numéro de SIREN : 824354815</p>
            <p>Téléphone : +33 7 65 78 99 12</p>
            <p>Email : <a href="mailto:pauline.anger-bourez@avocat.fr" className="text-navy hover:text-gold transition-colors">pauline.anger-bourez@avocat.fr</a></p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">CRÉDITS</h2>
            <p>Logo : </p>
            <p>Illustration : </p>
            <p>Création du site web : </p>
            <p>Hébergement : </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">PROTECTION DES DONNÉES PERSONNELLES</h2>
            <p>
              Conformément aux dispositions de la Loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, 
              les utilisateurs du site disposent d'un droit d'accès, de consultation, de modification, de retrait des données à caractère 
              privé qui pourraient, lors de l'utilisation du site, être collectées.
            </p>
            <p>Ce droit s'exerce par voie postale ou électronique.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">CONDITIONS D'UTILISATION</h2>
            <p>
              Toutes les informations figurant sur le site sont données à titre indicatif, sont non exhaustives et sont susceptibles d'évoluer. 
              Les informations sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne. 
              Elles ne sont en aucun cas contractuelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-navy mb-4">PROPRIÉTÉ INTELLECTUELLE</h2>
            <p>
              Tout le contenu du présent site est la propriété exclusive de Pauline Anger-Bourez, à l'exception des marques, logos, 
              illustrations ou contenus appartenant à d'autres auteurs.
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents 
              éléments est strictement interdite sans l'autorisation expresse de Maître Pauline Anger-Bourez.
            </p>
          </section>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default MentionsLegales;
