import { Calendar } from "lucide-react";

const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:top-1/2 md:right-8 md:-translate-y-1/2 bottom-4 right-4 bg-gradient-to-r from-[#D4B483]/90 to-[#1A1F2C]/90 hover:from-[#D4B483] hover:to-[#1A1F2C] text-white px-2.5 py-1.5 rounded-md flex items-center gap-1.5 shadow-lg hover:shadow-xl transition-all duration-300 z-50 text-xs font-bold backdrop-blur-sm"
    >
      <Calendar className="w-3.5 h-3.5" />
      <div className="flex flex-col">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
    </a>
  );
};

export default RdvButton;