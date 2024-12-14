import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const RdvButton = () => {
  return (
    <Link
      to="/rendez-vous"
      className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-gradient-to-r from-navy to-gold text-white px-4 py-3 rounded-xl flex flex-col items-center space-y-1 shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-sm font-normal"
    >
      <span>Prendre</span>
      <span>rendez-vous</span>
      <Calendar className="w-4 h-4 mt-1" />
    </Link>
  );
};

export default RdvButton;