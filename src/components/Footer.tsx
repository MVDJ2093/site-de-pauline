import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-black/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-[#f1f1f1]">
          <Link to="/" className="text-2xl font-semibold hover:text-gold transition-colors mb-4 md:mb-0">
            <span className="text-gold">PAB</span> AVOCAT
          </Link>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link to="/honoraires" className="hover:text-gold transition-colors">
              Honoraires
            </Link>
            <Link to="/mentions-legales" className="hover:text-gold transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-[#f1f1f1] text-center md:text-left">
          <p>© {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;