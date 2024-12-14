import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Cabinet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow">
        <div 
          className="h-[40vh] relative bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-navy/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Le Cabinet</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-[1200px]">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Le cabinet PAB AVOCAT est spécialisé en droit de la fonction publique. Notre expertise nous permet d'accompagner les agents publics dans toutes leurs démarches juridiques.
            </p>
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Cabinet;