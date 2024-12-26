import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import RdvButton from "@/components/RdvButton";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow pt-32">
        <div className="relative h-[300px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/2bc1cbf1-8abc-4045-b37b-be608289d4d3.png')",
            }}
          >
            <div className="absolute inset-0 bg-navy/70"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold font-aptos">Contact</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
          <div className="w-full">
            <ContactInfo />
          </div>
          <ContactForm />
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Contact;