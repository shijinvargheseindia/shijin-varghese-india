import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import AwardsCourtesy from "./pages/AwardsCourtesy";
import Positions from "./pages/Positions";
import WealthManagement from "./pages/WealthManagement";
import NextGenPro from "./pages/NextGenPro";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/awards-courtesy" element={<PageTransition><AwardsCourtesy /></PageTransition>} />
        <Route path="/positions" element={<PageTransition><Positions /></PageTransition>} />
        <Route path="/wealth-management" element={<PageTransition><WealthManagement /></PageTransition>} />
        <Route path="/nextgen-pro" element={<PageTransition><NextGenPro /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
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
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
