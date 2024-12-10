import React from "react";

const ContactBanner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px]">
      <div className="absolute inset-0 bg-navy/50 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')" 
        }}
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-aptos text-white tracking-wide">
          Nous Contacter
        </h1>
      </div>
    </div>
  );
};

export default ContactBanner;