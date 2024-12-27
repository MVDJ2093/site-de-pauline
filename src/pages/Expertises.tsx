import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Expertises = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Helmet>
        <title>Expertises Droit Fonction Publique | Cabinet Anger-Bourez Avocat Lille</title>
        <meta name="description" content="Cabinet d'avocat spécialisé en droit de la fonction publique à Lille. Expertise en contentieux administratif, protection statutaire, carrière des agents publics et conseil aux employeurs publics." />
        <meta name="keywords" content="expertise fonction publique, avocat spécialisé fonction publique, contentieux administratif lille, conseil juridique fonction publique, avocat droit public lille" />
        <link rel="canonical" href="https://angerbourezavocat.fr/expertises" />
      </Helmet>

      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-aptos">Domaines d'expertise</h1>
          </div>
        </div>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Nos domaines d'expertise en droit de la fonction publique</h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Le Cabinet Anger-Bourez, situé à Lille, dispose d'une expertise pointue en droit de la fonction publique. Notre pratique couvre l'ensemble des problématiques juridiques rencontrées tant par les agents publics que par les employeurs publics.
              </p>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy mb-4">Contentieux administratif</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Recours pour excès de pouvoir</li>
                    <li>Recours de plein contentieux</li>
                    <li>Référés administratifs</li>
                    <li>Médiation préalable obligatoire</li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy mb-4">Carrière des agents</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Avancement et promotion</li>
                    <li>Mutation et mobilité</li>
                    <li>Évaluation professionnelle</li>
                    <li>Formation et reconversion</li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy mb-4">Protection statutaire</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Harcèlement moral ou sexuel</li>
                    <li>Discrimination</li>
                    <li>Protection fonctionnelle</li>
                    <li>Accidents de service</li>
                  </ul>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-navy mb-4">Conseil aux employeurs</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Gestion des RH publiques</li>
                    <li>Procédures disciplinaires</li>
                    <li>Réorganisation des services</li>
                    <li>Dialogue social</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gold/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-navy mb-3">Une expertise nationale</h4>
                <p className="text-lg leading-relaxed">
                  Basé à Lille dans le Nord (59), le Cabinet Anger-Bourez intervient sur l'ensemble du territoire français. Cette mobilité nous permet d'accompagner efficacement nos clients, qu'ils soient agents ou employeurs publics, partout en France.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-navy mb-4">Contactez notre cabinet</h3>
            <p className="text-lg leading-relaxed mb-6">
              Pour bénéficier de notre expertise en droit de la fonction publique ou pour toute demande de conseil, n'hésitez pas à nous contacter. Nous vous proposerons un accompagnement personnalisé adapté à votre situation.
            </p>
          </section>
        </article>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Expertises;