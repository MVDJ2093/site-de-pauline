import { Link } from "react-router-dom";
import CookieButtons from "./CookieButtons";
import { CookiePreferences } from "./CookieTypes";

interface CookieBannerProps {
  onShowDetails: () => void;
  onRejectAll: () => void;
  onAcceptAll: () => void;
}

const CookieBanner = ({ onShowDetails, onRejectAll, onAcceptAll }: CookieBannerProps) => {
  return (
    <div className="space-y-3 md:space-y-4">
      <h3 className="text-base md:text-lg font-semibold text-navy">Nous respectons votre vie privée</h3>
      <p className="text-xs md:text-sm text-gray-600">
        Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. 
        En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies. Pour plus d'informations, consultez notre{" "}
        <Link to="/politique-cookies" className="text-gold hover:underline">
          politique des cookies
        </Link>
        .
      </p>
      <CookieButtons
        onPersonalize={onShowDetails}
        onRejectAll={onRejectAll}
        onAcceptAll={onAcceptAll}
      />
    </div>
  );
};

export default CookieBanner;