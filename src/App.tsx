import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Cabinet from "./pages/Cabinet";
import EmployeursPublics from "./pages/EmployeursPublics";
import AgentsPublics from "./pages/AgentsPublics";
import Expertises from "./pages/Expertises";
import Actualites from "./pages/Actualites";
import Honoraires from "./pages/Honoraires";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import CookieConsent from "./components/CookieConsent";
import Carriere from "./pages/expertise/Carriere";
import Remuneration from "./pages/expertise/Remuneration";
import CessationFonctions from "./pages/expertise/CessationFonctions";
import TempsTravail from "./pages/expertise/TempsTravail";
import AccidentService from "./pages/expertise/AccidentService";
import Discipline from "./pages/expertise/Discipline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route path="/employeurs-publics" element={<EmployeursPublics />} />
          <Route path="/agents-publics" element={<AgentsPublics />} />
          <Route path="/autres-domaines-d-expertise" element={<Expertises />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/honoraires" element={<Honoraires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-cookies" element={<PolitiqueCookies />} />
          <Route path="/expertise/carriere" element={<Carriere />} />
          <Route path="/expertise/remuneration" element={<Remuneration />} />
          <Route path="/expertise/cessation-des-fonctions" element={<CessationFonctions />} />
          <Route path="/expertise/temps-de-travail" element={<TempsTravail />} />
          <Route path="/expertise/accident-service" element={<AccidentService />} />
          <Route path="/expertise/discipline" element={<Discipline />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;