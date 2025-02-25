
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";
import { Card, CardContent } from "@/components/ui/card";

const Expertises = () => {
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
            <h1 className="text-2xl md:text-[2.4rem] font-extralight tracking-wide text-center">Autres domaines d'expertise</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-[1200px]">
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              Au-delà du droit de la fonction publique, Pauline ANGER-BOUREZ vous accompagne dans d'autres domaines du droit public en lien avec l'administration.
            </p>
            
            <div className="flex flex-col space-y-6 mt-12 max-w-3xl mx-auto">
              <Card className="p-4 w-full transition-shadow duration-300 hover:shadow-lg bg-white">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">Droit des collectivités territoriales</h3>
                  <p className="text-lg">
                    Le cabinet assiste les élus et les collectivités territoriales afin de sécuriser juridiquement leurs décisions et les actions qui en découlent.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 w-full transition-shadow duration-300 hover:shadow-lg bg-white">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">Droit administratif général</h3>
                  <p className="text-lg">
                    Le cabinet vous accompagne dans vos problématiques administratives et les contentieux qui peuvent en découler.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 w-full transition-shadow duration-300 hover:shadow-lg bg-white">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center">Droit électoral</h3>
                  <p className="text-lg">
                    Le cabinet vous conseille et vous assiste en matière de contentieux électoral.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Expertises;

