import { Briefcase, Shield, DollarSign, Gavel, UserX, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const expertises = [
  {
    icon: Briefcase,
    title: "Carrière",
    description: "Mobilité, notation, avancement, disponibilité, détachement, inaptitude, reclassement, congés",
    link: "/expertise/carriere-remuneration"
  },
  {
    icon: Shield,
    title: "Accident de service-CITIS/ Maladie professionnelle",
    description: "Accompagnement dans la reconnaissance et la gestion des accidents de service et maladies professionnelles",
    link: "/expertise/accident-service"
  },
  {
    icon: DollarSign,
    title: "Rémunération",
    description: "Conseil et assistance pour toutes questions relatives à votre rémunération",
    link: "/expertise/carriere-remuneration"
  },
  {
    icon: Gavel,
    title: "Discipline",
    description: "Défense et accompagnement dans les procédures disciplinaires",
    link: "/expertise/discipline"
  },
  {
    icon: UserX,
    title: "Cessation des fonctions",
    description: "Licenciement, rupture conventionnelle, fin de contrat",
    link: "/expertise/carriere-remuneration"
  },
  {
    icon: Clock,
    title: "Temps de travail",
    description: "Questions relatives à l'organisation et aux droits liés au temps de travail",
    link: "/expertise/carriere-remuneration"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/lovable-uploads/65140cf6-56cc-4a61-813e-65c723927adb.png')"
        }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
          DOMAINES D'EXPERTISE
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