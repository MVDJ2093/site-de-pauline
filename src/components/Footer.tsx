import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-navy rounded-2xl shadow-lg p-8">
          <div className="flex items-start">
            <h3 className="text-2xl font-semibold text-white">
              <span className="text-gold">PAB</span> AVOCAT
            </h3>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800/50 flex justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link to="/honoraires" className="text-gray-300 hover:text-gold transition-colors">
                Honoraires
              </Link>
              <Link to="/mentions-legales" className="text-gray-300 hover:text-gold transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;