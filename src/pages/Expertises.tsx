import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Expertises = () => {
  const expertises = [
    {
      title: "Avocat en droit de la fonction publique",
      description: "Expertise juridique spécialisée pour les agents de la fonction publique."
    },
    {
      title: "Maladie professionnelle",
      description: "Accompagnement dans la reconnaissance et la gestion des maladies professionnelles."
    },
    {
      title: "Accident de service",
      description: "Assistance juridique pour les accidents survenus dans le cadre du service."
    },
    {
      title: "Sanction disciplinaire ou insuffisance professionnelle",
      description: "Défense des agents face aux procédures disciplinaires."
    },
    {
      title: "Inaptitude et reclassement",
      description: "Conseil et accompagnement dans les procédures de reclassement."
    },
    {
      title: "Harcèlement moral",
      description: "Protection et défense des agents victimes de harcèlement moral."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Expertises fonction publique</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((expertise, index) => (
              <div key={index} className="bg-lightGray p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-navy mb-4">{expertise.title}</h2>
                <p className="text-gray-700">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Expertises;