import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Discipline = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c"
              alt="Discipline"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Discipline
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Procédures disciplinaires dans la fonction publique
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  La procédure disciplinaire dans la fonction publique est strictement encadrée. Maître Anger-Bourez vous accompagne à chaque étape pour garantir vos droits et assurer votre défense.
                </p>
                <p>
                  Notre expertise couvre :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>La défense lors de l'enquête administrative</li>
                  <li>La préparation du dossier disciplinaire</li>
                  <li>La représentation devant le conseil de discipline</li>
                  <li>Les recours contre les sanctions disciplinaires</li>
                </ul>
                <p>
                  Le cabinet intervient dans tous types de procédures disciplinaires :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Manquements aux obligations professionnelles</li>
                  <li>Fautes de service</li>
                  <li>Comportements inappropriés</li>
                  <li>Non-respect du devoir de réserve</li>
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

export default Discipline;