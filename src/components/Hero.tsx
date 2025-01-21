const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy text-white overflow-hidden">
      {/* Logo transparent en haut à gauche */}
      <div className="absolute left-0 top-0 transform -translate-y-1/4">
        <img 
          src="/lovable-uploads/2b5188f9-d7fa-4ec6-949c-cc7b1dc61eba.png" 
          alt="PAB Avocat Background" 
          className="h-[480px] w-auto brightness-0 invert opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-aptos opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A87D] via-[#E5D5B7] to-[#C6A87D] whitespace-nowrap">
              ANGER-BOUREZ AVOCAT
            </span>
            <span className="text-2xl md:text-3xl mt-4 block opacity-0 animate-[fadeIn_1.5s_ease-in-out_0.8s_forwards] tracking-wide">
              Fonction publique
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 font-aptos opacity-0 animate-[fadeIn_1.5s_ease-in-out_1.2s_forwards] tracking-wide">
            Expertise et accompagnement personnalisé pour les Agents de la fonction publique et les Employeurs publics
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;