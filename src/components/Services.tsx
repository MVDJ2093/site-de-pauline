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
    <section id="services" className="py-20 bg-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: "url('/lovable-uploads/65140cf6-56cc-4a61-813e-65c723927adb.png')"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
          DOMAINES D'EXPERTISE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise) => (
            <Link
              key={expertise.title}
              to={expertise.link}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 hover:border-gold/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <expertise.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {expertise.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;