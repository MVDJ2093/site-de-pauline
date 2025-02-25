import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const EmployeursPublics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Helmet>
        <title>Avocat Employeurs Publics Lille | Cabinet Anger-Bourez | Droit de la Fonction Publique</title>
        <meta name="description" content="Cabinet d'avocat spécialisé en droit de la fonction publique à Lille. Maître Anger-Bourez accompagne les employeurs publics dans la gestion de leurs agents et le contentieux administratif." />
        <meta name="keywords" content="avocat employeurs publics, avocat fonction publique, conseil juridique collectivités, contentieux administratif lille, avocat collectivités territoriales, conseil juridique établissements publics" />
        <link rel="canonical" href="https://angerbourezavocat.fr/employeurs-publics" />
      </Helmet>

      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-[position:50%_65%] brightness-[0.7]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-2xl md:text-[2.4rem] font-extralight tracking-wide text-center">Employeurs Publics</h1>
          </div>
        </div>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Accompagnement juridique des employeurs publics</h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Le Cabinet Anger-Bourez, situé à Lille, est spécialisé dans le conseil et la représentation des employeurs publics en matière de droit de la fonction publique. Notre expertise s'étend à l'ensemble du territoire français, permettant d'accompagner les collectivités territoriales, établissements publics et administrations dans la gestion de leurs ressources humaines et le contentieux administratif.
              </p>
              
              <h3 className="text-2xl font-semibold text-navy mb-4">Nos domaines d'intervention</h3>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>Gestion des ressources humaines publiques</li>
                <li>Procédures disciplinaires</li>
                <li>Contentieux de la fonction publique</li>
                <li>Restructurations et réorganisations de services</li>
                <li>Accompagnement dans les procédures de recrutement</li>
                <li>Conseil en matière de rémunération et avantages</li>
              </ul>

              <h3 className="text-2xl font-semibold text-navy mb-4">Notre approche</h3>
              <p className="text-lg leading-relaxed mb-6">
                Nous proposons un accompagnement personnalisé et adapté aux spécificités de chaque structure publique. Notre cabinet assure une veille juridique constante pour garantir une expertise actualisée en droit de la fonction publique et droit administratif.
              </p>

              <div className="bg-gold/10 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-navy mb-3">Expertise territoriale</h4>
                <p className="text-lg leading-relaxed">
                  Basé à Lille dans le Nord (59), notre cabinet intervient sur l'ensemble du territoire français. Cette mobilité nous permet d'accompagner efficacement les employeurs publics, quelle que soit leur localisation.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-navy mb-4">Contactez notre cabinet</h3>
            <p className="text-lg leading-relaxed mb-6">
              Pour toute demande de conseil ou d'accompagnement juridique, n'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais pour étudier votre situation et vous proposer un accompagnement adapté.
            </p>
          </section>
        </article>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default EmployeursPublics;
