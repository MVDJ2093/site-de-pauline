import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center px-4 py-6">
      <div className="w-full max-w-[1200px] bg-[#1A1F2C]/90 backdrop-blur-md rounded-2xl px-6 py-4 transition-all duration-500 hover:shadow-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-36">
            <Link to="/" className="text-2xl font-semibold text-[#f1f1f1] hover:text-gold transition-all duration-500">
              <span className="text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-[#E5C49B]">PAB</span>AVOCAT
            </Link>
            
            <div className="flex flex-col space-y-2 text-[#f1f1f1]">
              <Link to="/honoraires" className="hover:text-gold transition-all duration-300">
                Honoraires
              </Link>
              <Link to="/mentions-legales" className="hover:text-gold transition-all duration-300">
                Mentions légales
              </Link>
              <Link to="/politique-cookies" className="hover:text-gold transition-all duration-300">
                Politique des cookies
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-[#f1f1f1] text-center text-sm">
          <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
            © {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;