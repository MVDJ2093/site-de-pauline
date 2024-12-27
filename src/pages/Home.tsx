import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Services from "@/components/Services";
import YouAre from "@/components/YouAre";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Avocat Fonction Publique Lille | Cabinet Anger-Bourez</title>
        <meta name="description" content="Cabinet d'avocat à Lille spécialisé en droit de la fonction publique. Maître Anger-Bourez accompagne les agents publics et employeurs publics dans toute la France." />
        <link rel="canonical" href="https://angerbourezavocat.fr" />
      </Helmet>
      <div className="min-h-screen w-full bg-offWhite">
        <Header />
        <main>
          <Hero />
          <Description />
          <Services />
          <YouAre />
          <ContactInfo isHomePage={true} />
          <RdvButton />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;