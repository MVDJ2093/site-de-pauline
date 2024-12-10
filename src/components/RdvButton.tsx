const RdvButton = () => {
  return (
    <a
      href="https://consultation.avocat.fr/avocat-lille/pauline-anger-bourez-39917.html"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-[calc(2rem+theme(spacing.12))] bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold hover:text-black transition-colors duration-300 shadow-lg flex items-center gap-2 font-medium z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
      <span className="flex flex-col text-sm">
        <span>Prendre</span>
        <span>rendez-vous</span>
      </span>
    </a>
  );
};

export default RdvButton;