import { useEffect, useState } from "react";
import { toast } from "sonner";
import CookieBanner from "./cookie/CookieBanner";
import CookieDetails from "./cookie/CookieDetails";
import { CookiePreferences, defaultPreferences } from "./cookie/CookieTypes";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences");
    const savedTimestamp = localStorage.getItem("cookieTimestamp");
    
    if (savedPreferences && savedTimestamp) {
      const timestamp = parseInt(savedTimestamp);
      const thirteenMonthsInMs = 13 * 30 * 24 * 60 * 60 * 1000;
      
      if (Date.now() - timestamp > thirteenMonthsInMs) {
        localStorage.removeItem("cookiePreferences");
        localStorage.removeItem("cookieTimestamp");
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    localStorage.setItem("cookieTimestamp", Date.now().toString());
    setShowBanner(false);
    toast.success("Vos préférences ont été enregistrées");
    console.log("Préférences cookies sauvegardées:", prefs);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      ...defaultPreferences,
      functional: true,
      analytics: true,
      performance: true,
      advertising: true,
      unclassified: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    savePreferences(defaultPreferences);
  };

  const handleSaveChoices = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[400px] md:max-w-[400px] w-[calc(100%-2rem)] md:w-auto bg-white rounded-lg shadow-lg">
      <div className="p-4 md:p-6">
        {!showDetails ? (
          <CookieBanner
            onShowDetails={() => setShowDetails(true)}
            onRejectAll={handleRejectAll}
            onAcceptAll={handleAcceptAll}
          />
        ) : (
          <CookieDetails
            preferences={preferences}
            onPreferencesChange={setPreferences}
            onBack={() => setShowDetails(false)}
            onSave={handleSaveChoices}
          />
        )}
      </div>
    </div>
  );
};

export default CookieConsent;