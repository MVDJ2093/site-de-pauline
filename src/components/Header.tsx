import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Le cabinet", path: "/cabinet" },
    { label: "Employeurs publics", path: "/employeurs-publics" },
    { label: "Agents publics", path: "/agents-publics" },
    { label: "Autres domaines d'expertise", path: "/autres-domaines-d-expertise" },
    { label: "Honoraires", path: "/honoraires" },
    { label: "Actualités", path: "/actualites" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed w-full flex justify-center px-4 py-6 z-50">
      <div className="w-full max-w-7xl bg-[#f3f3f3]/40 backdrop-blur-md rounded-2xl shadow-sm px-6 py-4 transition-all duration-300">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold text-navy">
            <span className="text-gold">PAB</span> AVOCAT
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-navy hover:text-gold transition-colors whitespace-nowrap text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block py-2 text-navy hover:text-gold transition-colors"
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