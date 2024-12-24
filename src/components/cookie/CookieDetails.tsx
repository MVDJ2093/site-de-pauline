import { Button } from "@/components/ui/button";
import CookieOption from "./CookieOption";
import { CookiePreferences } from "./CookieTypes";

interface CookieDetailsProps {
  preferences: CookiePreferences;
  onPreferencesChange: (preferences: CookiePreferences) => void;
  onBack: () => void;
  onSave: () => void;
}

const CookieDetails = ({ preferences, onPreferencesChange, onBack, onSave }: CookieDetailsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-navy">Personnaliser les préférences en matière de consentement</h3>
      <div className="space-y-4">
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
      </div>

      <div className="space-y-4">
        <CookieOption
          title="Nécessaire"
          description="Toujours actif"
          checked={true}
          disabled={true}
        />
        <CookieOption
          title="Fonctionnelle"
          description="Permet d'exécuter certaines fonctionnalités"
          checked={true}
          disabled={true}
        />
        <CookieOption
          title="Analytique"
          description="Comprendre l'interaction des visiteurs"
          checked={preferences.analytics}
          onChange={(checked) => onPreferencesChange({ ...preferences, analytics: checked })}
        />
        <CookieOption
          title="Performance"
          description="Analyse des performances du site"
          checked={true}
          disabled={true}
        />
        <CookieOption
          title="Publicité"
          description="Publicités personnalisées"
          checked={true}
          disabled={true}
        />
        <CookieOption
          title="Non classé"
          description="Cookies en cours d'analyse"
          checked={preferences.unclassified}
          onChange={(checked) => onPreferencesChange({ ...preferences, unclassified: checked })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={onBack} className="w-full">
          Retour
        </Button>
        <Button onClick={onSave} className="w-full bg-gradient-to-r from-navy to-gold hover:from-navy/90 hover:to-gold/90">
          Enregistrer mes choix
        </Button>
      </div>
    </div>
  );
};

export default CookieDetails;