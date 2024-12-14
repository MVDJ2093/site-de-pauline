import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const Honoraires = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-aptos">Honoraires</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-navy mb-4">Nos honoraires</h2>
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
