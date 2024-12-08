import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Description />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;