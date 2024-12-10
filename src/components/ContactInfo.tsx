const ContactInfo = () => {
  return (
    <div className="space-y-8 p-8 bg-gradient-to-br from-[#F1F0FB] to-white rounded-xl shadow-lg border border-purple-100/50 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-4xl font-aptos font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-[#7E69AB]">
          Contact
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gold to-[#9b87f5]" />
      </div>
      
      <h3 className="text-2xl font-aptos text-[#1A1F2C] leading-relaxed font-semibold">
        Le Cabinet est là pour vous accompagner
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-lg font-light">
        Une fois votre formulaire envoyé, nous prenons en compte votre demande et nous ferons le nécessaire pour vous apporter l'aide et les ressources dont nous disposons.
      </p>
    </div>
  );
};

export default ContactInfo;