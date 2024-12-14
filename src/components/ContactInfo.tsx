import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-white to-[#F8F7FF] shadow-xl border border-gold/30 animate-fadeIn backdrop-blur-sm">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-navy/40 to-gold/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-gold/30 to-navy/30 rounded-full blur-3xl" />
        
        <div className="relative space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-aptos font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-gold tracking-tight">
              Informations pratiques
            </h2>
            <div className="flex items-center space-x-3">
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-navy rounded-full" />
              <div className="w-3 h-1 bg-gold/50 rounded-full" />
              <div className="w-3 h-1 bg-gold/30 rounded-full" />
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
            <p className="text-lg">50 rue Gustave Delory<br />59800 Lille</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-gold shrink-0" />
            <p className="text-lg">+33 7 65 78 99 12</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-gold shrink-0" />
            <a 
              href="mailto:pauline.anger-bourez@avocat.fr" 
              className="text-lg hover:text-gold transition-colors"
            >
              pauline.anger-bourez@avocat.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
