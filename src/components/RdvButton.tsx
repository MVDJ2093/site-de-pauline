import { Calendar } from "lucide-react";

const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:top-1/2 md:right-8 md:-translate-y-1/2 bottom-4 right-4 bg-gradient-to-r from-[#1A1F2C]/90 to-[#D4B483]/90 hover:from-[#1A1F2C] hover:to-[#D4B483] text-white px-4 py-1 rounded-md flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-xs font-bold backdrop-blur-sm"
    >
      <Calendar className="w-3.5 h-3.5" />
      <div className="flex flex-row gap-1">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
    </a>
  );
};

export default RdvButton;