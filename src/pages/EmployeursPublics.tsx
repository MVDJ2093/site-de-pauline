import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const EmployeursPublics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-8">Employeurs Publics</h1>
          {/* Contenu à venir */}
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default EmployeursPublics;