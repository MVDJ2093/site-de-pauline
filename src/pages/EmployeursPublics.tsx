
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";
import { Building2, FileText, Scale } from "lucide-react";

const EmployeursPublics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Avocat Employeurs Publics Lille | Cabinet Anger-Bourez | Droit de la Fonction Publique</title>
        <meta name="description" content="Cabinet d'avocat spécialisé en droit de la fonction publique à Lille. Maître Anger-Bourez accompagne les employeurs publics dans la gestion de leurs agents et le contentieux administratif." />
        <meta name="keywords" content="avocat employeurs publics, avocat fonction publique, conseil juridique collectivités, contentieux administratif lille, avocat collectivités territoriales, conseil juridique établissements publics" />
        <link rel="canonical" href="https://angerbourezavocat.fr/employeurs-publics" />
      </Helmet>

      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-[position:50%_65%] brightness-[0.7]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-2xl md:text-[2.4rem] font-extralight tracking-wide text-center">Employeurs Publics</h1>
          </div>
        </div>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <div className="prose max-w-none">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-110">
                      <Building2 className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-navy/90 transition-colors duration-500">
                      Collectivités territoriales
                    </h3>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-110">
                      <FileText className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-navy/90 transition-colors duration-500">
                      Centres hospitaliers
                    </h3>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-all duration-500 transform group-hover:scale-110">
                      <Scale className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-navy/90 transition-colors duration-500">
                      Etablissements publics
                    </h3>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-navy mb-4 underline text-left">MES SERVICES :</h3>
              
              <div className="space-y-8">
                <div className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20">
                  <h4 className="text-xl font-semibold text-navy mb-3">CONSEIL / AIDE A LA DECISION :</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Audit : de vos procédures et actes (contrat, délibération, arrêtés, conventions)</li>
                    <li>Enquête administrative</li>
                    <li>Consultations / Consultation en urgence</li>
                  </ul>
                </div>

                <div className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20">
                  <h4 className="text-xl font-semibold text-navy mb-3">ACCOMPAGNEMENT DANS VOS PROCEDURES :</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Procédure disciplinaire</li>
                    <li>Reclassements, aménagement de poste</li>
                    <li>Mutations dans l'intérêt du service</li>
                    <li>Négociations dans le cadre d'une rupture conventionnelle</li>
                    <li>Médiation/ transaction</li>
                  </ul>
                </div>

                <div className="group bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 border border-gray-100/50 hover:border-gold/20">
                  <h4 className="text-xl font-semibold text-navy mb-3">DEFENSE DE VOS INTERETS DEVANT LES INSTANCES ET LES JURIDICTIONS :</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>devant le conseil de discipline</li>
                    <li>devant les juridictions administratives et judiciaires</li>
                  </ul>
                </div>
              </div>

              <div className="my-8 space-y-4">
                <p>Le cabinet accompagne, conseille et défend l'ensemble des acteurs publics dans leurs problématiques qui relèvent du droit de la fonction publique et leurs problématiques RH : Collectivités territoriales, centres hospitaliers, établissements publics (syndicats mixtes, centres de gestion).</p>
                <p>Qu'il s'agisse d'un conflit avec un agent, de décisions individuelles, de choix stratégiques en matière RH, le cabinet vous accompagne et vous apporte des outils d'aide à la décision en tenant compte de vos contraintes et du cadre légal.</p>
                <p>Le cabinet se veut d'être un <span className="font-bold">véritable partenaire dans les décisions et réflexions des employeurs publics qui concernent les ressources humaines</span> :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-bold">Recrutement</span></li>
                  <li><span className="font-bold">Gestion de la carrière des agents publics</span> : avancement, disponibilité, mise à disposition, détachement, cumul d'activités, mutation, évaluation professionnelle, déroulement de carrières, temps de travail, rémunération, formation professionnelle, régimes des contractuels, des stagiaires</li>
                  <li><span className="font-bold">Rémunération</span> des agents</li>
                  <li><span className="font-bold">Discipline</span></li>
                  <li><span className="font-bold">Incidents de carrière</span> : Maladie, inaptitude, reclassement, mise à la retraite d'office, protection fonctionnelle</li>
                  <li><span className="font-bold">Cessation des fonctions</span> : licenciement, démission, rupture conventionnelle, suppression d'emploi, fin de contrat</li>
                </ul>
              </div>

              <div className="mb-8">
                <p><span className="font-bold">Des questions ?</span> Le cabinet vous propose une première rencontre sur place ou en visio afin de faire le point sur vos dossiers en cours, vos besoins et établir un devis.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-navy mb-4 underline">Droit des collectivités territoriales :</h3>
                <p>Le cabinet assiste également les élus et les collectivités territoriales (communes, intercommunalité, métropoles, départements, régions) afin de sécuriser juridiquement leurs décisions et les actions qui en découlent en dehors des problématiques RH :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rédaction/Elaboration des actes : délibérations/arrêtés</li>
                  <li>Police administrative</li>
                  <li>Responsabilité</li>
                  <li>Droit des élus</li>
                  <li>Services publics</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default EmployeursPublics;
