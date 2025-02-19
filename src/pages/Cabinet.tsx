import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Cabinet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-aptos">Le Cabinet</h1>
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