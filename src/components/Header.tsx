import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", path: "/" },
    {
      label: "Expertises",
      path: "#",
      submenu: [
        { label: "Employeurs publics", path: "/employeurs-publics" },
        { label: "Agents publics", path: "/agents-publics" },
        { label: "Autres domaines d'expertise", path: "/autres-domaines-d-expertise" },
      ]
    },
    { label: "Le cabinet", path: "/cabinet" },
    { label: "Honoraires", path: "/honoraires" },
    { label: "Actualités", path: "/actualites" }
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
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
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <div 
                    className="flex items-center cursor-pointer text-navy hover:text-gold transition-colors"
                    onMouseEnter={() => setExpertiseOpen(true)}
                    onMouseLeave={() => setExpertiseOpen(false)}
                  >
                    <span className="text-sm">{item.label}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                    {expertiseOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 hover:text-gold"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-sm text-navy hover:text-gold transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-gold text-white rounded-md text-sm hover:bg-opacity-90 transition-colors"
            >
              Nous contacter
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setExpertiseOpen(!expertiseOpen)}
                      className="w-full text-left py-2 text-navy hover:text-gold transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transform ${expertiseOpen ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    {expertiseOpen && (
                      <div className="pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block py-2 text-navy hover:text-gold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 text-navy hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-2 px-6 py-2 bg-gold text-white text-center rounded-md hover:bg-opacity-90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nous contacter
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;