const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-aptos opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A87D] via-[#E5D5B7] to-[#C6A87D] whitespace-nowrap">
              AVOCAT
            </span>
            <span className="text-2xl md:text-3xl mt-4 block opacity-0 animate-[fadeIn_1.5s_ease-in-out_0.8s_forwards] tracking-wide">
              Droit de la Fonction publique
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;