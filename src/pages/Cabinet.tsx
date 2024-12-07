import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cabinet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Le Cabinet</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Le cabinet PAB AVOCAT est spécialisé en droit de la fonction publique. Notre expertise nous permet d'accompagner les agents publics dans toutes leurs démarches juridiques.
            </p>
            {/* Contenu à compléter selon les besoins */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cabinet;