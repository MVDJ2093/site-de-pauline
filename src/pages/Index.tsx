import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    const result = prompt("Veuillez entrer le mot de passe :");

    if (result === "C0ffr3") {
      navigate("/home");
    } else {
      toast.error("Mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen w-full bg-offWhite flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 cursor-pointer" onClick={handleTitleClick}>
          <span className="text-gold">PAB</span>
          <span className="text-navy">AVOCAT</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-navy mb-8 font-light">
          Cabinet d'avocat en droit de la fonction publique
        </h2>
        
        <p className="text-lg text-gray-600 mb-6">
          Notre nouveau site est en cours de développement et sera bientôt disponible.
        </p>
      </div>
    </div>
  );
};

export default Index;