
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import FastRetailCase from "./pages/FastRetailCase";
import TechSupportProCase from "./pages/TechSupportProCase";
import LogisticaPlusCase from "./pages/LogisticaPlusCase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/contatti" element={<Contacts />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/casi-studio" element={<CaseStudies />} />
          <Route path="/casi-studio/fastretail" element={<FastRetailCase />} />
          <Route path="/casi-studio/techsupportpro" element={<TechSupportProCase />} />
          <Route path="/casi-studio/logisticaplus" element={<LogisticaPlusCase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
