import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gold/20">
          <h2 className="text-3xl font-bold text-center text-navy mb-6">Contact</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Le Cabinet est là pour vous accompagner. Une fois votre formulaire envoyé, nous prendrons en compte votre demande et ferons le nécessaire afin de vous apporter l'aide et les ressources dont nous disposons.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
              <p className="text-lg">50 rue Gustave Delory 59800 Lille</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0" />
              <p className="text-lg">+33 7 65 78 99 12</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gold flex-shrink-0" />
              <a 
                href="mailto:pauline.anger-bourez@avocat.fr" 
                className="text-lg hover:text-gold transition-colors"
              >
                pauline.anger-bourez@avocat.fr
              </a>
            </div>
          </div>
          
          <div className="h-[500px] w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8885714149386!2d3.0639297!3d50.6336213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58d87da5b6b%3A0x537c250ab9c76a51!2s50%20Rue%20Gustave%20Delory%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1624921234567!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;