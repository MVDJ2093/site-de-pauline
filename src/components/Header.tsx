import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { label: "Le cabinet", path: "/cabinet" },
    {
      label: "Fonction publique",
      children: [
        { label: "Employeur public", path: "/employeurs-publics" },
        { label: "Agent public", path: "/agents-publics" },
      ],
    },
    { label: "Autres domaines d'expertise", path: "/autres-domaines-d-expertise" },
    { label: "Honoraires", path: "/honoraires" },
    { label: "Actualités", path: "/actualites" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed w-full flex justify-center px-4 py-3 z-50">
      <div className="w-full bg-[#f3f3f3]/30 backdrop-blur-md px-6 py-2 transition-all duration-500 hover:shadow-lg rounded-2xl">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <Link to="/" className="transition-all duration-500">
            <img 
              src="/lovable-uploads/ae7e83cc-65e2-46d7-abf9-d728f1f74f6a.png" 
              alt="PAB Avocat" 
              className="h-24 w-auto"
            />
          </Link>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            {menuItems.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="text-base text-navy hover:text-gold transition-all duration-300 whitespace-nowrap flex items-center gap-1">
                    {item.label}
                    <ChevronDown size={20} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 py-2 min-w-[200px] bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-6 py-2 text-black hover:text-gold hover:bg-gray-50 transition-all duration-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-base text-navy hover:text-gold transition-all duration-300 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {menuItems.map((item) => (
              item.children ? (
                <div key={item.label}>
                  <button 
                    className="w-full text-left py-2 text-navy hover:text-gold transition-all duration-300 flex items-center justify-between"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.label}
                    <ChevronDown size={20} />
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block py-2 text-navy hover:text-gold transition-all duration-300"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block py-2 text-navy hover:text-gold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;