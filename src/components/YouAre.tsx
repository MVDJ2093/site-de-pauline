import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";

const YouAre = () => {
  return (
    <section className="py-20 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 transform transition-all duration-500 hover:scale-105 text-navy">
          VOUS ÊTES
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/employeurs-publics"
            className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-110">
                <Building2 className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-2 group-hover:text-navy/90 transition-colors duration-500">
                EMPLOYEUR PUBLIC
              </h3>
            </div>
          </Link>
          
          <Link
            to="/agents-publics"
            className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-110">
                <User className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-2 group-hover:text-navy/90 transition-colors duration-500">
                AGENT PUBLIC
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YouAre;