import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AwardsCourtesy from "./pages/AwardsCourtesy";
import Positions from "./pages/Positions";
import WealthManagement from "./pages/WealthManagement";
import NextGenPro from "./pages/NextGenPro";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Block indexing on non-primary domains (e.g. lovable.app preview/published URLs).
 * Only shijinvarghese.in should be indexed by search engines.
 */
const useNoIndexNonPrimary = () => {
  useEffect(() => {
    if (window.location.hostname !== "shijinvarghese.in" && window.location.hostname !== "www.shijinvarghese.in") {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow";
      document.head.appendChild(meta);
      return () => { document.head.removeChild(meta); };
    }
  }, []);
};

const App = () => {
  useNoIndexNonPrimary();
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/awards-courtesy" element={<AwardsCourtesy />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/wealth-management" element={<WealthManagement />} />
          <Route path="/nextgen-pro" element={<NextGenPro />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
