import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const RdvButton = () => {
  return (
    <Link
      to="/rendez-vous"
      className="fixed bottom-8 right-8 bg-gradient-to-r from-navy to-gold text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <Calendar className="w-5 h-5" />
      <span className="font-normal">Prendre rendez-vous</span>
    </Link>
  );
};

export default RdvButton;