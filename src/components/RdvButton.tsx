import { Calendar } from "lucide-react";

const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:top-1/2 md:right-8 md:-translate-y-1/2 bottom-4 right-4 bg-gradient-to-r from-[#1A1F2C]/90 to-[#C6A87D]/95 hover:from-[#1A1F2C] hover:to-[#C6A87D] text-white rounded-md flex items-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 backdrop-blur-sm md:px-4 md:py-2 px-3 py-0.5"
    >
      <Calendar className="md:w-4 md:h-4 w-3 h-3" />
      <div className="hidden md:flex flex-col items-start ml-2.5 text-[13px] font-medium">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
      <div className="flex md:hidden flex-row gap-0.5 text-[11px] font-bold ml-1.5">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
    </a>
  );
};

export default RdvButton;