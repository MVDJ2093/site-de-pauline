
import { useState } from "react";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "LE CABINET", path: "/cabinet" },
    {
      label: "FONCTION PUBLIQUE",
      children: [
        { label: "EMPLOYEUR PUBLIC", path: "/employeurs-publics" },
        { label: "AGENT PUBLIC", path: "/agents-publics" },
      ],
    },
    { label: "AUTRES DOMAINES D'EXPERTISE", path: "/autres-domaines-d-expertise" },
    { label: "HONORAIRES", path: "/honoraires" },
    { label: "ACTUALITÉS", path: "/actualites" },
    { label: "CONTACT", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm animate-header-slide-down">
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/home"
            className={`text-[16px] ${isActive('/home') ? 'text-white' : 'text-navy'} hover:text-white transition-all duration-300 whitespace-nowrap flex items-center gap-2`}
          >
            <Home size={20} className={isActive('/home') ? "brightness-0 invert" : "brightness-0"} />
            <span className="md:inline">ACCUEIL</span>
          </Link>
          
          <div className="w-24 mt-6"></div>
          
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
                  <button className={`text-[16px] ${item.children.some(child => isActive(child.path)) ? 'text-white' : 'text-navy'} hover:text-white transition-all duration-300 whitespace-nowrap flex items-center gap-1`}>
                    {item.label}
                    <ChevronDown size={20} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 py-2 min-w-[200px] bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className={`block px-6 py-2 ${isActive(child.path) ? 'text-white' : 'text-navy'} hover:text-white hover:bg-white/10 transition-all duration-300`}
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
                  className={`text-[16px] ${isActive(item.path) ? 'text-white' : 'text-navy'} hover:text-white transition-all duration-300 whitespace-nowrap`}
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
                    className={`w-full text-left py-2 ${item.children.some(child => isActive(child.path)) ? 'text-white' : 'text-navy'} hover:text-white transition-all duration-300 flex items-center justify-between`}
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
                          className={`block py-2 ${isActive(child.path) ? 'text-white' : 'text-navy'} hover:text-white transition-all duration-300`}
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
                  className={`block py-2 ${isActive(item.path) ? 'text-white' : 'text-navy'} hover:text-white transition-all duration-300`}
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
