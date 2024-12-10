import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-navy rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy/50 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                <span className="text-gold">PAB</span> AVOCAT
              </h3>
              <div className="space-y-2">
                <Link to="/honoraires" className="block text-gray-300 hover:text-gold transition-colors">
                  Honoraires
                </Link>
                <Link to="/mentions-legales" className="block text-gray-300 hover:text-gold transition-colors">
                  Mentions légales
                </Link>
              </div>
            </div>
            
            <div className="bg-navy/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <p className="flex items-center text-gray-300 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 mr-2 text-gold" />
                  <a href="tel:+33100000000">
                    01 00 00 00 00
                  </a>
                </p>
                <p className="flex items-center text-gray-300 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 mr-2 text-gold" />
                  <a href="mailto:contact@pab-avocat.fr">
                    contact@pab-avocat.fr
                  </a>
                </p>
                <p className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-gold" />
                  <span>Paris, France</span>
                </p>
              </div>
            </div>
            
            <div className="bg-navy/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-white">Horaires</h4>
              <p className="text-gray-300">
                Du lundi au vendredi
                <br />
                9h00 - 18h00
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;