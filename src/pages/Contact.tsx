import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import RdvButton from "@/components/RdvButton";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <RdvButton />
      <Footer />
    </div>
  );
};

export default Contact;