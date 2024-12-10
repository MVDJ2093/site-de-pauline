import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-navy rounded-2xl shadow-lg p-8">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-semibold text-white">
              <span className="text-gold">PAB</span> AVOCAT
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/honoraires" className="text-gray-300 hover:text-gold transition-colors">
                Honoraires
              </Link>
              <Link to="/mentions-legales" className="text-gray-300 hover:text-gold transition-colors">
                Mentions légales
              </Link>
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