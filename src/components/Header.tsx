import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Le cabinet", path: "/cabinet" },
    { label: "Fonction publique", path: "/fonction-publique" },
    { label: "Autres domaines d'expertise", path: "/autres-domaines-d-expertise" },
    { label: "Honoraires", path: "/honoraires" },
    { label: "Actualités", path: "/actualites" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed w-full flex justify-center px-4 py-6 z-50">
      <div className="w-full max-w-[1000px] bg-[#f3f3f3]/40 backdrop-blur-md rounded-2xl px-6 py-4 transition-all duration-500 hover:shadow-lg">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold text-navy transition-all duration-500">
            <span className="text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-[#E5C49B]">PAB</span> AVOCAT
          </Link>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-navy hover:text-gold transition-all duration-300 whitespace-nowrap text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block py-2 text-navy hover:text-gold transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;