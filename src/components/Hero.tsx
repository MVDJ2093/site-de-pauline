const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy text-white pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80')",
          opacity: 0.2,
        }}
      />
      <div className="container mx-auto px-4 relative z-10 animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold">Pauline Anger-Bourez</span>
            <br />
            Avocat en droit de la fonction publique
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expertise et accompagnement personnalisé pour les agents de la fonction publique
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-navy px-8 py-3 rounded-md hover:bg-white transition-colors duration-300"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;