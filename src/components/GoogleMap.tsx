import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[300px] mt-6 rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8326460208477!2d3.0639297768064666!3d50.63561577760964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58d87da5b6b%3A0x537c5fc0c1d59d82!2s50%20Rue%20Gustave%20Delory%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1710347161043!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;