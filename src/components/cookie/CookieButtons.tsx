import { Button } from "@/components/ui/button";

interface CookieButtonsProps {
  onPersonalize: () => void;
  onRejectAll: () => void;
  onAcceptAll: () => void;
}

const CookieButtons = ({ onPersonalize, onRejectAll, onAcceptAll }: CookieButtonsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        onClick={onPersonalize}
        className="w-full text-xs md:text-sm"
      >
        Personnaliser
      </Button>
      <Button
        variant="outline"
        onClick={onRejectAll}
        className="w-full text-xs md:text-sm"
      >
        Tout refuser
      </Button>
      <Button
        onClick={onAcceptAll}
        className="w-full text-xs md:text-sm bg-gradient-to-r from-navy to-gold hover:from-navy/90 hover:to-gold/90"
      >
        Tout accepter
      </Button>
    </div>
  );
};

export default CookieButtons;