const Services = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-navy">
          DOMAINES D'EXPERTISE
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-navy mb-2">Droit Public</h3>
            <p className="text-gray-600">
              Expertise en droit public, conseils et contentieux.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-navy mb-2">Droit Administratif</h3>
            <p className="text-gray-600">
              Assistance dans les litiges administratifs et les recours.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-navy mb-2">Droit de la Fonction Publique</h3>
            <p className="text-gray-600">
              Accompagnement des agents et employeurs publics.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-navy mb-2">Droit Fiscal</h3>
            <p className="text-gray-600">
              Conseils en matière de fiscalité publique et contentieux.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-navy mb-2">Droit Social</h3>
            <p className="text-gray-600">
              Assistance en droit du travail et des relations sociales.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-navy mb-2">Droit Pénal</h3>
            <p className="text-gray-600">
              Défense en matière pénale et assistance juridique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
