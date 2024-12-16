import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const RdvButton = () => {
  return (
    <Link
      to="/rendez-vous"
      className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-gradient-to-r from-navy to-gold text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-sm font-bold"
    >
      <Calendar className="w-4 h-4" />
      <div className="flex flex-col">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
    </Link>
  );
};

export default RdvButton;