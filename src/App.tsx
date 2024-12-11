import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cabinet from "./pages/Cabinet";
import EmployeursPublics from "./pages/EmployeursPublics";
import AgentsPublics from "./pages/AgentsPublics";
import Expertises from "./pages/Expertises";
import Actualites from "./pages/Actualites";
import Honoraires from "./pages/Honoraires";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";

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
          <Route path="/employeurs-publics" element={<EmployeursPublics />} />
          <Route path="/agents-publics" element={<AgentsPublics />} />
          <Route path="/autres-domaines-d-expertise" element={<Expertises />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/honoraires" element={<Honoraires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;