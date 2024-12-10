import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Actualites = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Actualités</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Articles à ajouter */}
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