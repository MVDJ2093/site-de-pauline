import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const expertiseItems = [
    "Avocat en droit de la fonction publique",
    "Maladie professionnelle",
    "Accident de service",
    "Sanction disciplinaire ou insuffisance professionnelle",
    "Inaptitude et reclassement",
    "Harcèlement moral"
  ];

  const menuItems = [
    "Le Cabinet",
    "Actualités",
    "Honoraires",
    "RDV en ligne",
    "Me contacter"
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold text-navy">
            <span className="text-gold">PAB</span> AVOCAT
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-navy hover:text-gold transition-colors whitespace-nowrap text-sm"
              >
                {item}
              </a>
            ))}
            
            {/* Expertise dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-navy hover:text-gold">
                    Expertises fonction publique
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {expertiseItems.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <a
                              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                              className="block p-2 text-sm text-navy hover:text-gold hover:bg-gray-50 rounded-md transition-colors"
                            >
                              {item}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="block py-2 text-navy hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="py-2">
              <div className="font-medium text-navy mb-2">Expertises fonction publique</div>
              {expertiseItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="block py-2 pl-4 text-sm text-navy hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;