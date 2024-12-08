const Description = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Espace réservé pour la photo */}
          <div className="md:w-1/3">
            <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center">
              <p className="text-gray-500 text-sm">Photo de Maître Anger-Bourez</p>
            </div>
          </div>
          
          {/* Description */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-navy mb-8">Au service de vos intérêts</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Avocat depuis 2016, Maître Pauline Anger-Bourez consacre son activité au droit de la fonction publique, discipline passionnante, en constante évolution et humainement enrichissante.
              </p>
              <p>
                Le cabinet intervient en conseil comme en contentieux auprès de tous les agents publics, qu'ils relèvent des trois fonctions publiques (de l'Etat, territoriale et hospitalière) ou de statuts particuliers (praticiens hospitaliers, agents consulaires, assistants familiaux et maternels, …).
              </p>
              <p>
                Maître Anger-Bourez peut vous représenter devant l'ensemble des juridictions et commissions administratives de France.
              </p>
              <p>
                Elle peut vous recevoir à son cabinet de Lille mais également vous accompagner partout en France, notamment dans le cadre de téléconsultations en visioconférence.
              </p>
              <p>
                Passionné, déterminé et pragmatique, Maître Anger-Bourez s'engage à vos côtés au service de vos intérêts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;