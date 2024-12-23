import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Toujours true car obligatoire
    analytics: false,
    marketing: false,
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
    
    // Log pour debug
    console.log("Préférences cookies sauvegardées:", prefs);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = {
      essential: true, // Toujours accepté
      analytics: false,
      marketing: false,
    };
    savePreferences(allRejected);
  };

  const handleSaveChoices = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy">Paramètres des cookies</h3>
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez personnaliser vos choix ci-dessous.
              Pour plus d'informations, consultez notre <a href="/politique-cookies" className="text-gold hover:underline">politique des cookies</a>.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox checked disabled />
              <label className="text-sm font-medium">
                Cookies essentiels (obligatoires)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked as boolean })
                }
              />
              <label htmlFor="analytics" className="text-sm">
                Cookies analytiques (mesure d'audience)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked as boolean })
                }
              />
              <label htmlFor="marketing" className="text-sm">
                Cookies marketing (publicités personnalisées)
              </label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-end">
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="w-full md:w-auto"
            >
              Tout refuser
            </Button>
            <Button
              variant="outline"
              onClick={handleSaveChoices}
              className="w-full md:w-auto"
            >
              Enregistrer mes choix
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="w-full md:w-auto bg-gradient-to-r from-navy to-gold hover:from-navy/90 hover:to-gold/90"
            >
              Tout accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;