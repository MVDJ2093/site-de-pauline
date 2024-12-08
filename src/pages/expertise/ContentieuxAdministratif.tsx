import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ContentieuxAdministratif = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
              alt="Justice administrative"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Contentieux Administratif
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Notre expertise en contentieux administratif
              </h2>
              <p className="text-gray-700 mb-4">
                Le cabinet vous accompagne dans tous vos contentieux devant les juridictions administratives. Maître Anger-Bourez met son expertise au service de votre défense pour tous types de litiges avec l'administration.
              </p>
              <p className="text-gray-700 mb-4">
                Nos domaines d'intervention incluent :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Recours pour excès de pouvoir</li>
                <li>Recours de plein contentieux</li>
                <li>Référés administratifs</li>
                <li>Contentieux de la responsabilité</li>
                <li>Contentieux de la fonction publique</li>
                <li>Procédures d'urgence</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentieuxAdministratif;