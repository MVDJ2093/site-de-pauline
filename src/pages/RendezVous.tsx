import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RendezVous = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Prendre rendez-vous</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Pour prendre rendez-vous, veuillez remplir le formulaire ci-dessous ou nous contacter directement.
            </p>
            {/* Formulaire de prise de RDV à ajouter */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RendezVous;