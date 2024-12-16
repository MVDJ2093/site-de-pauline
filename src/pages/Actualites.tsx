import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Actualites = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop')",
              opacity: 0.125,
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-aptos">Actualités</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Actualités</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-lightGray p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-navy mb-4">
                Dernières actualités du droit de la fonction publique
              </h2>
              <p className="text-gray-700">
                Contenu à venir...
              </p>
            </div>
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Actualites;