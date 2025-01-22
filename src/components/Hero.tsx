const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy text-white overflow-hidden">
      <div className="absolute left-0 top-0 md:top-44 w-full md:w-auto md:transform md:-translate-y-1/4">
        <img 
          src="/lovable-uploads/2b5188f9-d7fa-4ec6-949c-cc7b1dc61eba.png" 
          alt="PAB Avocat Background" 
          className="w-full md:w-auto h-auto md:h-[528px] brightness-0 invert opacity-10 mt-20 md:mt-0"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-aptos opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A87D] via-[#E5D5B7] to-[#C6A87D] whitespace-nowrap">
              AVOCAT
            </span>
            <span className="text-2xl md:text-3xl block opacity-0 animate-[fadeIn_1.5s_ease-in-out_0.8s_forwards] tracking-wide mt-16 md:mt-4">
              Droit de la fonction publique
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;