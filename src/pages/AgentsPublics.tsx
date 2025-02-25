import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const AgentsPublics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Helmet>
        <title>Avocat Agents Publics Lille | Cabinet Anger-Bourez | Défense des Fonctionnaires</title>
        <meta name="description" content="Cabinet d'avocat spécialisé dans la défense des agents publics à Lille. Maître Anger-Bourez accompagne les fonctionnaires et agents publics dans leurs démarches et contentieux administratifs." />
        <meta name="keywords" content="avocat fonctionnaires, avocat agents publics, défense agents publics, contentieux administratif lille, avocat fonction publique lille, protection juridique fonctionnaires" />
        <link rel="canonical" href="https://angerbourezavocat.fr/agents-publics" />
      </Helmet>

      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-2xl md:text-[2.4rem] font-extralight tracking-wide text-center">Agents Publics</h1>
          </div>
        </div>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Défense et accompagnement des agents publics</h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Le Cabinet Anger-Bourez, basé à Lille, est spécialisé dans la défense et l'accompagnement des agents publics. Notre expertise couvre l'ensemble des problématiques liées à la carrière des fonctionnaires et agents publics, avec une intervention possible sur tout le territoire français.
              </p>
              
              <h3 className="text-2xl font-semibold text-navy mb-4">Nos domaines d'intervention</h3>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Protection fonctionnelle et statutaire</li>
                <li>Défense en cas de procédure disciplinaire</li>
                <li>Accompagnement dans l'évolution de carrière</li>
                <li>Contentieux liés à la rémunération</li>
                <li>Accidents de service et maladies professionnelles</li>
                <li>Harcèlement moral ou discriminations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-navy mb-4">Notre engagement</h3>
              <p className="text-lg leading-relaxed mb-6">
                Nous mettons notre expertise juridique au service des agents publics pour défendre leurs droits et intérêts. Notre connaissance approfondie du droit de la fonction publique nous permet d'apporter des solutions adaptées à chaque situation.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-navy mb-3">Expertise nationale</h4>
                <p className="text-lg leading-relaxed">
                  Bien qu'installé à Lille dans le Nord (59), notre cabinet intervient dans toute la France pour défendre les droits des agents publics. Cette mobilité nous permet d'assurer un accompagnement efficace, quelle que soit votre localisation.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-navy mb-4">Contactez notre cabinet</h3>
            <p className="text-lg leading-relaxed mb-6">
              Pour toute question concernant votre situation professionnelle ou pour une demande de conseil, n'hésitez pas à nous contacter. Nous étudierons votre dossier avec attention pour vous proposer la meilleure stratégie de défense.
            </p>
          </section>
        </article>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default AgentsPublics;
