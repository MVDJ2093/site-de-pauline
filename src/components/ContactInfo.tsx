const ContactInfo = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy">
          Informations pratiques
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy mb-4">Adresse</h3>
            <p className="text-gray-700">123 Rue de l'Exemple, 75000 Paris, France</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy mb-4">Téléphone</h3>
            <p className="text-gray-700">+33 1 23 45 67 89</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy mb-4">Email</h3>
            <p className="text-gray-700">contact@anger-bourez-avocat.fr</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-navy mb-4">Horaires</h3>
            <p className="text-gray-700">Lundi - Vendredi: 9h - 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
