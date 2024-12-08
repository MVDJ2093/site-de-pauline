import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ProtectionStatutaire = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              alt="Protection Statutaire"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Protection Statutaire
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                La protection statutaire des agents publics
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  La protection statutaire est un droit fondamental des agents publics, garantissant leur protection par l'administration dans l'exercice de leurs fonctions. Maître Anger-Bourez vous accompagne dans toutes les démarches liées à la protection fonctionnelle.
                </p>
                <p>
                  Cette protection s'applique notamment dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menaces, violences, voies de fait, injures, diffamations ou outrages</li>
                  <li>Harcèlement moral ou sexuel</li>
                  <li>Discrimination</li>
                  <li>Mise en cause pénale pour des faits commis dans l'exercice des fonctions</li>
                </ul>
                <p>
                  Le cabinet vous assiste dans :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>La demande de protection fonctionnelle</li>
                  <li>Le recours contre un refus de protection</li>
                  <li>La mise en œuvre effective de la protection</li>
                  <li>Les procédures judiciaires associées</li>
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

export default ProtectionStatutaire;