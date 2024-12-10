import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Services from "@/components/Services";
import YouAre from "@/components/YouAre";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-offWhite">
      <Header />
      <Hero />
      <Description />
      <Services />
      <YouAre />
      <RdvButton />
      <Footer />
    </main>
  );
};

export default Index;