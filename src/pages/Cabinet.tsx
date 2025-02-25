import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";
import { Card, CardContent } from "@/components/ui/card";

const Cabinet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-2xl md:text-[2.4rem] font-extralight tracking-wide">Le Cabinet</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-[1200px]">
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Pauline ANGER-BOUREZ a fait le choix d'un cabinet à taille humaine dédié au droit de la fonction publique avec pour ambition de répondre aux problématiques RH et individuelles des employeurs et agents publics, par un accompagnement et des réponses personnalisées et pragmatiques.
            </p>
            
            <p className="text-lg">
              Avant d'intégrer la profession d'avocat, Pauline ANGER-BOUREZ a exercé les fonctions d'attachée territoriale en qualité de responsable d'un service d'une collectivité de plus de 30.000 habitants dans le territoire des Hauts-de France.
            </p>
            
            <p className="text-lg">
              Après 2 années de formations à l'Ecole des avocats du nord-ouest, l'obtention du Certification d'aptitude à la profession d'avocat (CAPA) et une prestation de serment en 2016, Maître Pauline ANGER-BOUREZ a intégré un cabinet d'avocats spécialisé en droit public avec l'intention d'exercer la profession d'avocat au service des acteurs publics, employeurs et agents publics,
            </p>
            
            <p className="text-lg">
              En 2024, Pauline ANGER-BOUREZ a créé un cabinet spécialement dédié au conseil juridique et au contentieux de la fonction publique.
            </p>
            
            <p className="text-lg">
              En lien avec ce parcours, Maître Pauline ANGER-BOUREZ vous propose une approche pragmatique en mettant à profit sa maîtrise du fonctionnement interne des administrations et son expertise dans le domaine de la fonction publique.
            </p>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 underline text-center">LA PHILOSOPHIE DU CABINET</h2>
              <p className="text-lg text-center max-w-4xl mx-auto">
                Instaurer une <strong>relation de confiance</strong> dans le respect des principes de la profession d'avocat (confidentialité, secret professionnel) afin d'apporter une réponse juridique claire et adaptée à vos besoins.
              </p>
            </div>
            
            <div className="flex flex-col space-y-6 mt-12 max-w-3xl mx-auto">
              <Card className="p-4 w-full transition-shadow duration-300 hover:shadow-lg bg-white">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">Ecoute et expertise</h3>
                  <p className="text-lg">
                    Chaque situation est particulière, l'objectif du cabinet est de mettre au service de vos besoins son expertise et de construire avec vous des solutions juridiques adaptées
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 w-full transition-shadow duration-300 hover:shadow-lg bg-white">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">Clarté et pédagogie</h3>
                  <p className="text-lg">
                    Le cabinet s'efforce de conseiller et de défendre ses clients en toute transparence, en l'informant des chances de succès en amont et en l'accompagnant à chaque étape de la procédure, amiable ou contentieuse
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 w-full transition-shadow duration-300 hover:shadow-lg bg-white">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">Règlement amiable</h3>
                  <p className="text-lg">
                    Plus rapides et apaisées, le cabinet privilégie les solutions juridiques amiables avec l'accord de son client lorsque la situation et les circonstances le permettent
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 underline">Nos valeurs :</h2>
              <p className="text-lg italic">
                « Je jure comme Avocat d'exercer mes fonctions avec dignité, conscience, indépendance, probité et humanité »
              </p>
            </div>
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Cabinet;
