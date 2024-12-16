import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Informations pratiques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-lightGray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Adresse</h3>
            <p>123 Rue de la Loi, Lille, France</p>
          </div>
          <div className="bg-lightGray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className="bg-lightGray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p>contact@paulineangerbourez.fr</p>
          </div>
          <div className="bg-lightGray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Horaires</h3>
            <p>Lundi - Vendredi: 9h - 18h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
