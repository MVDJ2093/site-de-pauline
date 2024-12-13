import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">Informations pratiques</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-gold" />
              <p className="text-lg">50 rue Gustave Delory 59800 Lille</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gold" />
              <p className="text-lg">+33 7 65 78 99 12</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gold" />
              <p className="text-lg">pauline.anger-bourez@avocat.fr</p>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
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