import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertising: boolean;
  unclassified: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: false,
    analytics: false,
    performance: false,
    advertising: false,
    unclassified: false,
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (!savedPreferences) {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setShowBanner(false);
    toast.success("Vos préférences ont été enregistrées");
    console.log("Préférences cookies sauvegardées:", prefs);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      performance: true,
      advertising: true,
      unclassified: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = {
      essential: true,
      functional: false,
      analytics: false,
      performance: false,
      advertising: false,
      unclassified: false,
    };
    savePreferences(allRejected);
  };

  const handleSaveChoices = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[400px] bg-white rounded-lg shadow-lg">
      <div className="p-6">
        {!showDetails ? (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy">Nous respectons votre vie privée</h3>
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic. 
              En cliquant sur « Tout accepter », vous consentez à notre utilisation des cookies. Pour plus d'informations, consultez notre{" "}
              <Link to="/politique-cookies" className="text-gold hover:underline">
                politique des cookies
              </Link>
              .
            </p>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => setShowDetails(true)}
                className="w-full"
              >
                Personnaliser
              </Button>
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="w-full"
              >
                Tout refuser
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="w-full bg-gradient-to-r from-navy to-gold hover:from-navy/90 hover:to-gold/90"
              >
                Tout accepter
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-navy">Personnaliser les préférences en matière de consentement</h3>
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour vous aider à naviguer efficacement et à exécuter certaines fonctionnalités. 
              Vous trouverez des informations détaillées sur tous les cookies sous chaque catégorie de consentement ci-dessous.
            </p>
            <p className="text-sm text-gray-600">
              Les cookies qui sont catégorisés comme « nécessaires » sont stockés sur votre navigateur car ils sont essentiels pour permettre les fonctionnalités de base du site.
            </p>
            <p className="text-sm text-gray-600">
              Nous utilisons également des cookies tiers qui nous aident à analyser la façon dont vous utilisez ce site web, 
              à enregistrer vos préférences et à vous fournir le contenu et les publicités qui vous sont pertinents.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-navy">Nécessaire</h4>
                  <p className="text-xs text-gray-500">Toujours actif</p>
                </div>
                <Checkbox checked disabled />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-navy">Fonctionnelle</h4>
                  <p className="text-xs text-gray-500">Permet d'exécuter certaines fonctionnalités</p>
                </div>
                <Checkbox checked disabled />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-navy">Analytique</h4>
                  <p className="text-xs text-gray-500">Comprendre l'interaction des visiteurs</p>
                </div>
                <Checkbox
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked as boolean })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-navy">Performance</h4>
                  <p className="text-xs text-gray-500">Analyse des performances du site</p>
                </div>
                <Checkbox checked disabled />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-navy">Publicité</h4>
                  <p className="text-xs text-gray-500">Publicités personnalisées</p>
                </div>
                <Checkbox checked disabled />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-navy">Non classé</h4>
                  <p className="text-xs text-gray-500">Cookies en cours d'analyse</p>
                </div>
                <Checkbox
                  checked={preferences.unclassified}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, unclassified: checked as boolean })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => setShowDetails(false)}
                className="w-full"
              >
                Retour
              </Button>
              <Button
                onClick={handleSaveChoices}
                className="w-full bg-gradient-to-r from-navy to-gold hover:from-navy/90 hover:to-gold/90"
              >
                Enregistrer mes choix
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;