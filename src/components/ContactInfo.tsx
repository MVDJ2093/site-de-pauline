import React from "react";

const ContactInfo = () => {
  return (
    <div className="space-y-8 p-6 bg-[#F1F0FB] rounded-lg shadow-sm">
      <h2 className="text-3xl font-aptos font-semibold text-navy tracking-tight">
        Contact
      </h2>
      <h3 className="text-2xl font-aptos text-[#8E9196] leading-relaxed">
        Le Cabinet est là pour vous accompagner
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        Une fois votre formulaire envoyé, nous prenons en compte votre demande et nous ferons le nécessaire pour vous apporter l'aide et les ressources dont nous disposons.
      </p>
    </div>
  );
};

export default ContactInfo;