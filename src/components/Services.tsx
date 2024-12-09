import { Shield, HeartPulse, Users, Scale, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const expertises = [
  {
    icon: Scale,
    title: "Accident de service",
    description: "Protection de vos droits suite à un accident de service",
    link: "/expertise/contentieux-administratif"
  },
  {
    icon: HeartPulse,
    title: "Maladie professionnelle",
    description: "Accompagnement dans la reconnaissance et la gestion de votre maladie professionnelle",
    link: "/expertise/contentieux-administratif"
  },
  {
    icon: Shield,
    title: "Harcèlement moral",
    description: "Protection et défense contre toute forme de harcèlement au travail",
    link: "/expertise/contentieux-administratif"
  },
  {
    icon: Users,
    title: "Inaptitude physique & reclassement",
    description: "Accompagnement dans les procédures d'inaptitude et de reclassement",
    link: "/expertise/contentieux-administratif"
  },
  {
    icon: FileText,
    title: "Sanction disciplinaire ou insuffisance professionnelle",
    description: "Défense de vos intérêts face aux procédures disciplinaires",
    link: "/expertise/contentieux-administratif"
  },
  {
    icon: Phone,
    title: "Autres situations",
    description: "Contactez-nous pour toute autre situation nécessitant notre expertise",
    link: "/contact"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524522173746-f628baad3644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80')"
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
          EXPERTISE FONCTION PUBLIQUE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise) => (
            <Link
              key={expertise.title}
              to={expertise.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <expertise.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">
                {expertise.title}
              </h3>
              <p className="text-gray-600">{expertise.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;