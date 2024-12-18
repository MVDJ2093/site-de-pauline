import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Services from "@/components/Services";
import YouAre from "@/components/YouAre";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-offWhite">
      <Header />
      <Hero />
      <Description />
      <Services />
      <YouAre />
      <ContactInfo isHomePage={true} />
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Home;