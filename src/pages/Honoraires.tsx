import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Honoraires = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Honoraires</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Nos honoraires sont établis en toute transparence, en fonction de la complexité de votre dossier et du temps nécessaire à son traitement.
            </p>
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Honoraires;