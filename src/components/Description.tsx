const Description = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/3">
            <div className="bg-[#f3f3f3]/40 backdrop-blur-md rounded-2xl shadow-sm p-4">
              <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
                <p className="text-gray-500 text-sm">Photo de Maître Anger-Bourez</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 font-aptos">
            <h2 className="text-3xl text-navy mb-8">
              À propos de <span className="font-bold">Pauline Anger-Bourez</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Avocate depuis 2016, Pauline ANGER-BOUREZ accompagne les employeurs publics et
                les agents publics dans leurs problématiques liées au droit de la fonction publique.
              </p>
              <p>
                Le cabinet place ses clients au centre de son travail et de ses préoccupations. Alliant écoute et
                compétences juridiques dans le domaine de la fonction publique, le cabinet s'attache à trouver des
                solutions adaptées à vos problématiques, répondant à vos attentes et pragmatiques, dans le respect
                des procédures et de vos besoins.
              </p>
              <p>
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