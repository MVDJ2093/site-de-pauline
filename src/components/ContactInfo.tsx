import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-aptos text-navy mb-6">Coordonnées</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <p className="font-medium">Cabinet PAB Avocat</p>
              <p className="text-gray-600">123 rue de la Justice</p>
              <p className="text-gray-600">75000 Paris</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-gold shrink-0" />
            <a href="tel:+33100000000" className="hover:text-gold transition-colors">
              01 00 00 00 00
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-gold shrink-0" />
            <a href="mailto:pab@avocat.fr" className="hover:text-gold transition-colors">
              pab@avocat.fr
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-aptos text-navy mb-6">Horaires d'ouverture</h2>
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
          <div className="space-y-2">
            <p>Du lundi au vendredi</p>
            <p className="text-gray-600">9h00 - 12h30 | 14h00 - 18h00</p>
            <p className="text-sm text-gray-500 mt-2">
              Consultations sur rendez-vous uniquement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;