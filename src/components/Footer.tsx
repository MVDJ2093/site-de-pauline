import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-gold">PAB</span> AVOCAT
            </h3>
            <p className="text-gray-300">
              Cabinet d'avocat spécialisé en droit de la fonction publique
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gold" />
                <a href="tel:+33100000000" className="hover:text-gold transition-colors">
                  01 00 00 00 00
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gold" />
                <a href="mailto:contact@pab-avocat.fr" className="hover:text-gold transition-colors">
                  contact@pab-avocat.fr
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                <span>Paris, France</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Horaires</h4>
            <p className="text-gray-300">
              Du lundi au vendredi
              <br />
              9h00 - 18h00
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;