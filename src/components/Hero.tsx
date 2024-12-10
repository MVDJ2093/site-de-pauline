const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/2587e9b0-2dbb-4a9d-b829-a597ba0a5202.png')",
          opacity: 0.125,
        }}
      />
      <div className="container mx-auto px-4 relative z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-aptos">
            <span className="text-gold tracking-wide">Pauline Anger-Bourez</span>
            <br />
            <span className="text-3xl md:text-4xl">Avocate en droit de la fonction publique</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-aptos">
            Expertise et accompagnement personnalisé pour les agents de la fonction publique et leurs Administrations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;