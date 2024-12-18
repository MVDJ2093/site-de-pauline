import { Calendar } from "lucide-react";

const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:top-1/2 md:right-8 md:-translate-y-1/2 bottom-4 right-4 bg-gradient-to-r from-gold to-[#E5C49B] hover:from-[#E5C49B] hover:to-gold text-white px-3 py-2 md:px-4 md:py-2 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-xs md:text-sm font-medium"
    >
      <Calendar className="w-4 h-4" />
      <div className="flex flex-col">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
    </a>
  );
};

export default RdvButton;