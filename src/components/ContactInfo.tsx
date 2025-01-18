import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  return (
    <section className={`py-16 ${isHomePage ? 'bg-white' : 'bg-offWhite'} mb-32`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Informations Pratiques</h2>
        <p className="text-center mb-4">Pour toute question, n'hésitez pas à nous contacter.</p>
        <Link to="/contact" className="block text-center text-gold hover:underline">
          Contactez-nous
        </Link>
      </div>
    </section>
  );
};

export default ContactInfo;
