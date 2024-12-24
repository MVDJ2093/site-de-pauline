import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const CessationFonctions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Cessation des fonctions</h1>
          {/* Contenu à venir */}
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default CessationFonctions;