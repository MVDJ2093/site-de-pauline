const ContactInfo = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy">
          Informations pratiques
        </h2>
        <div className="text-lg text-gray-700">
          <p>Adresse : 123 Rue de la Loi, Lille, France</p>
          <p>Téléphone : +33 1 23 45 67 89</p>
          <p>Email : contact@cabinetpab.fr</p>
          <p>Horaires : Lundi - Vendredi, 9h - 17h</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
