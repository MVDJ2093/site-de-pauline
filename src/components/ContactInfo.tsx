const ContactInfo = () => {
  return (
    <div className="relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-white to-[#F8F7FF] shadow-xl border border-purple-100/30 animate-fadeIn backdrop-blur-sm">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-gold/30 to-purple-200/30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-aptos font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy via-[#7E69AB] to-[#9b87f5] tracking-tight">
            Contact
          </h2>
          <div className="flex items-center space-x-3">
            <div className="w-20 h-1 bg-gradient-to-r from-gold via-[#9b87f5] to-[#7E69AB] rounded-full" />
            <div className="w-3 h-1 bg-gold/50 rounded-full" />
            <div className="w-3 h-1 bg-gold/30 rounded-full" />
          </div>
        </div>
        
        <h3 className="text-2xl font-aptos text-[#1A1F2C] leading-relaxed font-semibold tracking-wide">
          Le Cabinet est là pour vous accompagner
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-lg font-light max-w-2xl">
          Une fois votre formulaire envoyé, nous prenons en compte votre demande et nous ferons le nécessaire pour vous apporter l'aide et les ressources dont nous disposons.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;