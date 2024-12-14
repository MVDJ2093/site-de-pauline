import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RdvButton from "@/components/RdvButton";

const EmployeursPublics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-navy/50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-aptos">Employeurs Publics</h1>
          </div>
        </div>
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