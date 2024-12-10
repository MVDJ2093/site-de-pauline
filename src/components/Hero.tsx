const Hero = () => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 h-[60vh] flex items-center justify-center bg-navy text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/2587e9b0-2dbb-4a9d-b829-a597ba0a5202.png')",
          opacity: 0.2,
        }}
      />
      <div className="container mx-auto px-4 relative z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold">Pauline Anger-Bourez</span>
            <br />
            Avocat en droit de la fonction publique
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Expertise et accompagnement personnalisé pour les agents de la fonction publique
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;