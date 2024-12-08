import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cabinet from "./pages/Cabinet";
import Expertises from "./pages/Expertises";
import Actualites from "./pages/Actualites";
import Honoraires from "./pages/Honoraires";
import RendezVous from "./pages/RendezVous";
import Contact from "./pages/Contact";
import DroitFonctionPublique from "./pages/expertise/DroitFonctionPublique";
import ContentieuxAdministratif from "./pages/expertise/ContentieuxAdministratif";
import ProtectionStatutaire from "./pages/expertise/ProtectionStatutaire";
import Discipline from "./pages/expertise/Discipline";
import CarriereRemuneration from "./pages/expertise/CarriereRemuneration";
import ConseilAssistance from "./pages/expertise/ConseilAssistance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/honoraires" element={<Honoraires />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertise/droit-fonction-publique" element={<DroitFonctionPublique />} />
          <Route path="/expertise/contentieux-administratif" element={<ContentieuxAdministratif />} />
          <Route path="/expertise/protection-statutaire" element={<ProtectionStatutaire />} />
          <Route path="/expertise/discipline" element={<Discipline />} />
          <Route path="/expertise/carriere-remuneration" element={<CarriereRemuneration />} />
          <Route path="/expertise/conseil-assistance" element={<ConseilAssistance />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;