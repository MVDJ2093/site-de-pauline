import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";

const YouAre = () => {
  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-navy mb-12">VOUS ÊTES</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/employeurs-publics"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
          >
            <Building2 className="w-16 h-16 mx-auto mb-4 text-gold group-hover:text-navy transition-colors" />
            <h3 className="text-2xl font-semibold text-navy mb-2">EMPLOYEUR PUBLIC</h3>
          </Link>
          
          <Link
            to="/agents-publics"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
          >
            <User className="w-16 h-16 mx-auto mb-4 text-gold group-hover:text-navy transition-colors" />
            <h3 className="text-2xl font-semibold text-navy mb-2">AGENT PUBLIC</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YouAre;