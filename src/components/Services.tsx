import { Shield, Scale, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Protection statutaire",
    description: "Défense de vos droits et garanties statutaires en tant qu'agent public",
  },
  {
    icon: Scale,
    title: "Contentieux administratif",
    description: "Représentation devant les juridictions administratives",
  },
  {
    icon: BookOpen,
    title: "Conseil juridique",
    description: "Accompagnement et conseil sur vos droits et obligations",
  },
  {
    icon: Users,
    title: "Carrière & Mobilité",
    description: "Assistance dans l'évolution de votre carrière administrative",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
          Domaines d'expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;