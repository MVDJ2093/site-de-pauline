import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    const passwordInput = document.createElement("input");
    passwordInput.type = showPassword ? "text" : "password";
    passwordInput.placeholder = "Mot de passe";
    
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = `<span class="flex items-center">${showPassword ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line></svg>' : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>'}</span>`;
    
    const container = document.createElement("div");
    container.className = "flex items-center gap-2 bg-white rounded-md border border-gray-300";
    container.appendChild(passwordInput);
    container.appendChild(toggleButton);

    const result = prompt("Veuillez entrer le mot de passe :", {
      prompt: container.outerHTML,
      type: showPassword ? "text" : "password"
    });

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