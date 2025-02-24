
const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-navy text-white overflow-hidden">
      <div className="absolute left-0 top-0 md:top-36 w-full md:w-auto md:transform md:-translate-y-1/4">
        <img 
          src="/lovable-uploads/3dca0b14-18d4-43f4-aefe-1fe49b2eee3b.png" 
          alt="PAB Avocat Background" 
          className="w-full md:w-auto h-auto md:h-[538px] brightness-0 invert opacity-10 mt-16 md:mt-0"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mt-16">
          <h1 className="text-3xl md:text-5xl mb-6 font-aptos opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards] tracking-tight font-light ml-[20%]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A87D] via-[#E5D5B7] to-[#C6A87D] whitespace-nowrap block text-right">
              AVOCAT EN DROIT PUBLIC
            </span>
            <span className="text-2xl md:text-[2.4rem] block opacity-0 animate-[fadeIn_1.5s_ease-in-out_0.8s_forwards] tracking-wide mt-6 md:mt-4 font-extralight text-right">
              Fonction publique
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
