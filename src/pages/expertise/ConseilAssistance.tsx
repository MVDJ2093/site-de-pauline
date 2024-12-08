import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ConseilAssistance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Conseil et Assistance"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Conseil et Assistance
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Conseil et assistance juridique pour les agents publics
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Maître Anger-Bourez propose un accompagnement personnalisé pour tous les aspects de votre carrière dans la fonction publique, en privilégiant une approche préventive et constructive.
                </p>
                <p>
                  Nos services de conseil comprennent :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'analyse de situation et diagnostic juridique</li>
                  <li>La rédaction de courriers et recours administratifs</li>
                  <li>L'assistance dans les négociations</li>
                  <li>La veille juridique personnalisée</li>
                </ul>
                <p>
                  Le cabinet vous accompagne notamment pour :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Les questions statutaires</li>
                  <li>Les droits et obligations</li>
                  <li>Les procédures administratives</li>
                  <li>La prévention des contentieux</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConseilAssistance;