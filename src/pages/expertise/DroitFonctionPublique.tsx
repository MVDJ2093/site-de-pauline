import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const DroitFonctionPublique = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
              alt="Justice"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Droit de la Fonction Publique
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Notre expertise en droit de la fonction publique
              </h2>
              <p className="text-gray-700 mb-4">
                Maître Anger-Bourez accompagne les agents publics dans tous les aspects de leur carrière. Son expertise couvre l'ensemble des problématiques liées au statut de fonctionnaire et aux droits des agents publics.
              </p>
              <p className="text-gray-700 mb-4">
                Le cabinet intervient notamment dans les domaines suivants :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Recrutement et titularisation</li>
                <li>Évolution de carrière</li>
                <li>Rémunération et indemnités</li>
                <li>Mutation et mobilité</li>
                <li>Protection fonctionnelle</li>
                <li>Contentieux administratif</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DroitFonctionPublique;