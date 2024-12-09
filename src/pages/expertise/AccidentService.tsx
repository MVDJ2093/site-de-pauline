import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AccidentService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
              alt="Accident de service"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-navy/50 rounded-lg" />
            <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              Accident de Service
            </h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                Accident de service dans la fonction publique
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  L'accident de service est l'équivalent de l'accident du travail dans la fonction publique. Il s'agit d'un accident survenu dans l'exercice ou à l'occasion de l'exercice des fonctions.
                </p>
                <p>
                  La reconnaissance de l'imputabilité au service d'un accident permet à l'agent public de bénéficier :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Du maintien de l'intégralité de son traitement jusqu'à la reprise de service ou mise à la retraite</li>
                  <li>Du remboursement des honoraires et frais médicaux</li>
                  <li>D'une allocation temporaire d'invalidité en cas de séquelles</li>
                </ul>
                <p>
                  Notre cabinet vous accompagne dans toutes les étapes de la procédure :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Déclaration de l'accident</li>
                  <li>Constitution du dossier</li>
                  <li>Expertise médicale</li>
                  <li>Recours en cas de refus de reconnaissance</li>
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

export default AccidentService;