import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Services from "@/components/Services";
import YouAre from "@/components/YouAre";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="mt-[60vh]">
        <Description />
        <Services />
        <YouAre />
        <RdvButton />
        <Footer />
      </div>
    </div>
  );
};

export default Index;