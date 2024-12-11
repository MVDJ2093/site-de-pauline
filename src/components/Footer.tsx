import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center px-4 py-6">
      <div className="w-full max-w-[1920px] bg-[#1A1F2C]/90 backdrop-blur-md rounded-2xl px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <Link to="/" className="text-2xl font-semibold text-[#f1f1f1] hover:text-gold transition-colors mb-4 md:mb-0">
              <span className="text-gold">PAB</span> AVOCAT
            </Link>
            
            <div className="flex flex-col space-y-2 text-[#f1f1f1]">
              <Link to="/honoraires" className="hover:text-gold transition-colors text-right">
                Honoraires
              </Link>
              <Link to="/mentions-legales" className="hover:text-gold transition-colors text-right">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-[#f1f1f1] text-center text-sm">
          <p>© {new Date().getFullYear()} Cabinet PAB Avocat. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;