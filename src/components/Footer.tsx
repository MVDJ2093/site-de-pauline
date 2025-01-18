import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1F2C] py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo column */}
          <div className="pt-0">
            <Link to="/" className="block">
              <img 
                src="/lovable-uploads/2b5188f9-d7fa-4ec6-949c-cc7b1dc61eba.png" 
                alt="PAB Avocat" 
                className="h-40 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* First menu column */}
          <div className="flex flex-col space-y-4">
            <Link to="/cabinet" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Le cabinet
            </Link>
            <Link to="/fonction-publique" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Fonction publique
            </Link>
            <Link to="/autres-domaines-d-expertise" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Autres domaines d'expertise
            </Link>
          </div>

          {/* Second menu column */}
          <div className="flex flex-col space-y-4">
            <Link to="/honoraires" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Honoraires
            </Link>
            <Link to="/actualites" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Actualités
            </Link>
            <Link to="/contact" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Third menu column */}
          <div className="flex flex-col space-y-4">
            <Link to="/mentions-legales" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Mentions légales
            </Link>
            <Link to="/politique-cookies" className="text-[#f1f1f1] hover:text-gold transition-all duration-300">
              Politique des cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Background logo */}
      <div className="absolute right-0 bottom-0 transform translate-y-1/2">
        <img 
          src="/lovable-uploads/2b5188f9-d7fa-4ec6-949c-cc7b1dc61eba.png" 
          alt="PAB Avocat Background" 
          className="h-[800px] w-auto brightness-0 invert opacity-10"
        />
      </div>
    </footer>
  );
};

export default Footer;