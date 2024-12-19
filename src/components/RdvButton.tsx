import { Calendar } from "lucide-react";

const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:top-1/2 md:right-8 md:-translate-y-1/2 bottom-4 right-4 bg-gradient-to-r from-gold/90 to-[#8B6B42]/90 hover:from-gold hover:to-[#8B6B42] text-white px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-xs md:text-sm font-medium backdrop-blur-sm"
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