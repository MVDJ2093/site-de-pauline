import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Me contacter</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-6">Coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-gold mr-4" />
                  <span>01 00 00 00 00</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-gold mr-4" />
                  <span>contact@pab-avocat.fr</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gold mr-4" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-6">Formulaire de contact</h2>
              {/* Formulaire de contact à ajouter */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;