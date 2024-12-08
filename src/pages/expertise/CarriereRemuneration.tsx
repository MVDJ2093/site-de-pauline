import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CarriereRemuneration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
              alt="Carrière et Rémunération"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Carrière et Rémunération
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Gestion de carrière et rémunération des agents publics
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  La gestion de carrière et la rémunération sont des aspects essentiels de la vie professionnelle des agents publics. Maître Anger-Bourez vous conseille et vous accompagne dans toutes vos démarches.
                </p>
                <p>
                  Nos domaines d'intervention :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avancement et promotion</li>
                  <li>Évaluation professionnelle</li>
                  <li>Régime indemnitaire</li>
                  <li>Nouvelle Bonification Indiciaire (NBI)</li>
                  <li>Temps de travail et congés</li>
                </ul>
                <p>
                  Le cabinet vous assiste notamment pour :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Les recours en matière d'évaluation</li>
                  <li>Les contestations de calcul de rémunération</li>
                  <li>Les demandes de reconnaissance de droits</li>
                  <li>Les mobilités et détachements</li>
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

export default CarriereRemuneration;