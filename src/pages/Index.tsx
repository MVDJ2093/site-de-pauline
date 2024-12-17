import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-offWhite flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gold">PAB</span>
          <span className="text-navy">AVOCAT</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-navy mb-8 font-light">
          Cabinet d'avocat spécialisé en droit de la fonction publique
        </h2>
        
        <p className="text-lg text-gray-600 mb-6">
          Notre nouveau site est en cours de développement et sera bientôt disponible.
        </p>
        
        <div className="text-sm text-gray-500">
          Pour toute demande urgente, vous pouvez nous contacter par email :
          <a 
            href="mailto:contact@pab-avocat.fr" 
            className="text-gold hover:text-navy transition-colors ml-2"
          >
            contact@pab-avocat.fr
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;