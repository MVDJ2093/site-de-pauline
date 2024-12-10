import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-navy rounded-2xl shadow-lg p-8">
          <div className="flex justify-between">
            <Link to="/" className="text-2xl font-semibold text-white hover:text-gold transition-colors">
              <span className="text-gold">PAB</span> AVOCAT
            </Link>
            <div className="flex flex-col space-y-2">
              <Link to="/honoraires" className="text-gray-300 hover:text-gold transition-colors">
                Honoraires
              </Link>
              <Link to="/mentions-legales" className="text-gray-300 hover:text-gold transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800/50">
            <p className="text-gray-400">© {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;