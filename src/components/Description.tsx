const Description = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/3 transform transition-all duration-300 hover:scale-[1.02] opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
            <div className="bg-gradient-to-br from-[#f3f3f3]/80 to-white/40 backdrop-blur-md rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden">
                <p className="text-gray-500 text-sm">Photo de Maître Anger-Bourez</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 font-aptos opacity-0 animate-[fadeIn_1s_ease-in-out_0.3s_forwards]">
            <h2 className="text-3xl text-navy mb-8 transform transition-all duration-500 group-hover:translate-x-2 tracking-tight">
              À propos de <span className="font-bold text-navy">Pauline Anger-Bourez</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="transform transition-all duration-500 hover:translate-x-2">
                Avocate depuis 2016, Pauline ANGER-BOUREZ accompagne les employeurs publics et
                les agents publics dans leurs problématiques liées au droit de la fonction publique.
              </p>
              <p className="transform transition-all duration-500 hover:translate-x-2">
                Le cabinet place ses clients au centre de son travail et de ses préoccupations. Alliant écoute et
                compétences juridiques dans le domaine de la fonction publique, le cabinet s'attache à trouver des
                solutions adaptées à vos problématiques, répondant à vos attentes et pragmatiques, dans le respect
                des procédures et de vos besoins.
              </p>
              <p className="transform transition-all duration-500 hover:translate-x-2">
                Forte d'une expérience en collectivité territoriale, Pauline ANGER-BOUREZ vous accompagne à
                chaque étape, amiable, conseil, contentieux, pour devenir un véritable partenaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;