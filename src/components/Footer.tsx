import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center px-4 py-2">
      <div className="w-full max-w-[1200px] bg-[#1A1F2C]/90 backdrop-blur-md rounded-2xl px-6 py-2 transition-all duration-500 hover:shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-72">
            <Link to="/" className="transition-all duration-500">
              <img 
                src="/lovable-uploads/2b5188f9-d7fa-4ec6-949c-cc7b1dc61eba.png" 
                alt="PAB Avocat" 
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            
            <div className="flex items-center space-x-24 text-[#f1f1f1]">
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
        
        <div className="mt-1 text-[#f1f1f1] text-center text-sm">
          <p className="opacity-80 hover:opacity-100 transition-opacity duration-300">
            © {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;