const ContactInfo = () => {
  return (
    <div className="max-w-[1200px] mx-auto h-full">
      <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-white to-[#F8F7FF] shadow-xl border border-gold/30 animate-fadeIn backdrop-blur-sm h-full">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-navy/40 to-gold/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-gold/30 to-navy/30 rounded-full blur-3xl" />
        
        <div className="relative space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-aptos font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-gold tracking-tight">
              Informations pratiques
            </h2>
            <p className="text-lg text-gray-700">
              Pour toute demande d'information, n'hésitez pas à nous contacter via le formulaire ci-dessous ou par téléphone.
            </p>
            <p className="text-lg text-gray-700">
              Adresse : 123 Rue de la Loi, 75001 Paris, France
            </p>
            <p className="text-lg text-gray-700">
              Téléphone : +33 1 23 45 67 89
            </p>
            <p className="text-lg text-gray-700">
              Email : contact@anger-bourez.fr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
