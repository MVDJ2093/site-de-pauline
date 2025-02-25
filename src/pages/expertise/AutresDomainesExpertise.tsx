
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const AutresDomainesExpertise = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-2xl md:text-[2.4rem] font-thin tracking-widest text-right ml-[20%]">Domaines d'expertise</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-navy mb-4">Nos autres domaines d'expertise</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Contenu à venir...
            </p>
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default AutresDomainesExpertise;
