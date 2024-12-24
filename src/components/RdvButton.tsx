import { Calendar } from "lucide-react";

const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:top-1/2 md:right-8 md:-translate-y-1/2 bottom-4 right-4 bg-gradient-to-r from-navy to-gold hover:from-navy/90 hover:to-gold/90 text-white rounded-md flex items-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 md:max-w-[200px] md:max-h-[60px] md:px-4 md:py-3 px-4 py-2.5"
    >
      <Calendar className="md:w-5 md:h-5 w-4 h-4" />
      <div className="hidden md:flex flex-col items-start ml-3 text-sm font-medium">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </div>
      <span className="flex md:hidden text-sm font-medium ml-2">RDV</span>
    </a>
  );
};

export default RdvButton;