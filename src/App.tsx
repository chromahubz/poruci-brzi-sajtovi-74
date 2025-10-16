import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { PageTransition } from "./components/PageTransition";
import NotFound from "./pages/NotFound";
import BlogArticle1 from "./pages/blog/BlogArticle1";
import BlogArticle2 from "./pages/blog/BlogArticle2";
import BlogArticle3 from "./pages/blog/BlogArticle3";
import BlogArticle4 from "./pages/blog/BlogArticle4";
import BlogArticle5 from "./pages/blog/BlogArticle5";
import BlogArticle6 from "./pages/blog/BlogArticle6";
import BlogArticle7 from "./pages/blog/BlogArticle7";
import BlogArticle8 from "./pages/blog/BlogArticle8";
import BlogArticle9 from "./pages/blog/BlogArticle9";
import BlogArticle10 from "./pages/blog/BlogArticle10";
import BlogArticle11 from "./pages/blog/BlogArticle11";
import BlogArticle12 from "./pages/blog/BlogArticle12";
import BlogArticle13 from "./pages/blog/BlogArticle13";
import BlogArticle14 from "./pages/blog/BlogArticle14";
import BlogArticle15 from "./pages/blog/BlogArticle15";
import BlogArticle16 from "./pages/blog/BlogArticle16";
import BlogArticle17 from "./pages/blog/BlogArticle17";
import BlogArticle18 from "./pages/blog/BlogArticle18";
import BlogArticle19 from "./pages/blog/BlogArticle19";
import BlogArticle20 from "./pages/blog/BlogArticle20";
import BlogArticle21 from "./pages/blog/BlogArticle21";
import BlogArticle22 from "./pages/blog/BlogArticle22";
import BlogArticle23 from "./pages/blog/BlogArticle23";
import BlogArticle24 from "./pages/blog/BlogArticle24";
import BlogArticle25 from "./pages/blog/BlogArticle25";
import BlogArticle26 from "./pages/blog/BlogArticle26";
import BlogArticle27 from "./pages/blog/BlogArticle27";
import BlogArticle28 from "./pages/blog/BlogArticle28";
import BlogArticle29 from "./pages/blog/BlogArticle29";
import BlogArticle30 from "./pages/blog/BlogArticle30";
import BlogArticle31 from "./pages/blog/BlogArticle31";
import BlogArticle32 from "./pages/blog/BlogArticle32";
import BlogArticle33 from "./pages/blog/BlogArticle33";
import BlogArticle34 from "./pages/blog/BlogArticle34";
import BlogArticle35 from "./pages/blog/BlogArticle35";
import BlogArticle36 from "./pages/blog/BlogArticle36";
import BlogArticle37 from "./pages/blog/BlogArticle37";
import BlogArticle38 from "./pages/blog/BlogArticle38";
import BlogArticle39 from "./pages/blog/BlogArticle39";
import BlogArticle40 from "./pages/blog/BlogArticle40";
import BlogArticle41 from "./pages/blog/BlogArticle41";
import BlogArticle42 from "./pages/blog/BlogArticle42";
import BlogArticle43 from "./pages/blog/BlogArticle43";
import BlogArticle44 from "./pages/blog/BlogArticle44";
import BlogArticle45 from "./pages/blog/BlogArticle45";
import BlogArticle46 from "./pages/blog/BlogArticle46";
import BlogArticle47 from "./pages/blog/BlogArticle47";
import BlogArticle48 from "./pages/blog/BlogArticle48";
import WebDevelopment from "./pages/services/WebDevelopment";
import WebDesign from "./pages/services/WebDesign";
import Ecommerce from "./pages/services/Ecommerce";
import Maintenance from "./pages/services/Maintenance";
import MobileApps from "./pages/services/MobileApps";
import SEOOptimization from "./pages/services/SEOOptimization";
import RestoranVila from "./pages/portfolio/RestoranVila";
import TechStore from "./pages/portfolio/TechStore";
import AdvokatskaPetrovic from "./pages/portfolio/AdvokatskaPetrovic";
import BeautyShop from "./pages/portfolio/BeautyShop";
import FitnessPro from "./pages/portfolio/FitnessPro";
import HealthCareApp from "./pages/portfolio/HealthCareApp";
import CryptoTrading from "./pages/portfolio/CryptoTrading";
import GamingClan from "./pages/portfolio/GamingClan";
import TravelBlog from "./pages/portfolio/TravelBlog";
import KafeteriaBalkan from "./pages/portfolio/KafeteriaBalkan";
import SalonElegance from "./pages/portfolio/SalonElegance";
import AutoServisMilos from "./pages/portfolio/AutoServisMilos";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="poruci-sajt-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/o-nama" element={<PageTransition><About /></PageTransition>} />
              <Route path="/usluge" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/usluge/izrada-sajtova" element={<PageTransition><WebDevelopment /></PageTransition>} />
              <Route path="/usluge/web-dizajn" element={<PageTransition><WebDesign /></PageTransition>} />
              <Route path="/usluge/e-commerce" element={<PageTransition><Ecommerce /></PageTransition>} />
              <Route path="/usluge/odrzavanje-sajtova" element={<PageTransition><Maintenance /></PageTransition>} />
              <Route path="/usluge/mobilne-aplikacije" element={<PageTransition><MobileApps /></PageTransition>} />
              <Route path="/usluge/seo-optimizacija" element={<PageTransition><SEOOptimization /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/cene" element={<PageTransition><Pricing /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/blog/1" element={<PageTransition><BlogArticle1 /></PageTransition>} />
              <Route path="/blog/2" element={<PageTransition><BlogArticle2 /></PageTransition>} />
              <Route path="/blog/3" element={<PageTransition><BlogArticle3 /></PageTransition>} />
              <Route path="/blog/4" element={<PageTransition><BlogArticle4 /></PageTransition>} />
              <Route path="/blog/5" element={<PageTransition><BlogArticle5 /></PageTransition>} />
              <Route path="/blog/6" element={<PageTransition><BlogArticle6 /></PageTransition>} />
              <Route path="/blog/7" element={<PageTransition><BlogArticle7 /></PageTransition>} />
              <Route path="/blog/8" element={<PageTransition><BlogArticle8 /></PageTransition>} />
              <Route path="/blog/9" element={<PageTransition><BlogArticle9 /></PageTransition>} />
              <Route path="/blog/10" element={<PageTransition><BlogArticle10 /></PageTransition>} />
              <Route path="/blog/11" element={<PageTransition><BlogArticle11 /></PageTransition>} />
              <Route path="/blog/12" element={<PageTransition><BlogArticle12 /></PageTransition>} />
              <Route path="/blog/13" element={<PageTransition><BlogArticle13 /></PageTransition>} />
              <Route path="/blog/14" element={<PageTransition><BlogArticle14 /></PageTransition>} />
              <Route path="/blog/15" element={<PageTransition><BlogArticle15 /></PageTransition>} />
              <Route path="/blog/16" element={<PageTransition><BlogArticle16 /></PageTransition>} />
              <Route path="/blog/17" element={<PageTransition><BlogArticle17 /></PageTransition>} />
              <Route path="/blog/18" element={<PageTransition><BlogArticle18 /></PageTransition>} />
              <Route path="/blog/19" element={<PageTransition><BlogArticle19 /></PageTransition>} />
              <Route path="/blog/20" element={<PageTransition><BlogArticle20 /></PageTransition>} />
              <Route path="/blog/21" element={<PageTransition><BlogArticle21 /></PageTransition>} />
              <Route path="/blog/22" element={<PageTransition><BlogArticle22 /></PageTransition>} />
              <Route path="/blog/23" element={<PageTransition><BlogArticle23 /></PageTransition>} />
              <Route path="/blog/24" element={<PageTransition><BlogArticle24 /></PageTransition>} />
              <Route path="/blog/25" element={<PageTransition><BlogArticle25 /></PageTransition>} />
              <Route path="/blog/26" element={<PageTransition><BlogArticle26 /></PageTransition>} />
              <Route path="/blog/27" element={<PageTransition><BlogArticle27 /></PageTransition>} />
              <Route path="/blog/28" element={<PageTransition><BlogArticle28 /></PageTransition>} />
              <Route path="/blog/29" element={<PageTransition><BlogArticle29 /></PageTransition>} />
              <Route path="/blog/30" element={<PageTransition><BlogArticle30 /></PageTransition>} />
              <Route path="/blog/31" element={<PageTransition><BlogArticle31 /></PageTransition>} />
              <Route path="/blog/32" element={<PageTransition><BlogArticle32 /></PageTransition>} />
              <Route path="/blog/33" element={<PageTransition><BlogArticle33 /></PageTransition>} />
              <Route path="/blog/34" element={<PageTransition><BlogArticle34 /></PageTransition>} />
              <Route path="/blog/35" element={<PageTransition><BlogArticle35 /></PageTransition>} />
              <Route path="/blog/36" element={<PageTransition><BlogArticle36 /></PageTransition>} />
              <Route path="/blog/37" element={<PageTransition><BlogArticle37 /></PageTransition>} />
              <Route path="/blog/38" element={<PageTransition><BlogArticle38 /></PageTransition>} />
              <Route path="/blog/39" element={<PageTransition><BlogArticle39 /></PageTransition>} />
              <Route path="/blog/40" element={<PageTransition><BlogArticle40 /></PageTransition>} />
              <Route path="/blog/41" element={<PageTransition><BlogArticle41 /></PageTransition>} />
              <Route path="/blog/42" element={<PageTransition><BlogArticle42 /></PageTransition>} />
              <Route path="/blog/43" element={<PageTransition><BlogArticle43 /></PageTransition>} />
              <Route path="/blog/44" element={<PageTransition><BlogArticle44 /></PageTransition>} />
              <Route path="/blog/45" element={<PageTransition><BlogArticle45 /></PageTransition>} />
              <Route path="/blog/46" element={<PageTransition><BlogArticle46 /></PageTransition>} />
              <Route path="/blog/47" element={<PageTransition><BlogArticle47 /></PageTransition>} />
              <Route path="/blog/48" element={<PageTransition><BlogArticle48 /></PageTransition>} />
              <Route path="/portfolio/restoran-vila" element={<PageTransition><RestoranVila /></PageTransition>} />
              <Route path="/portfolio/techstore" element={<PageTransition><TechStore /></PageTransition>} />
              <Route path="/portfolio/advokatska-petrovic" element={<PageTransition><AdvokatskaPetrovic /></PageTransition>} />
              <Route path="/portfolio/beautyshop" element={<PageTransition><BeautyShop /></PageTransition>} />
              <Route path="/portfolio/fitnesspro" element={<PageTransition><FitnessPro /></PageTransition>} />
              <Route path="/portfolio/healthcareapp" element={<PageTransition><HealthCareApp /></PageTransition>} />
              <Route path="/portfolio/cryptotrading" element={<PageTransition><CryptoTrading /></PageTransition>} />
              <Route path="/portfolio/gamingclan" element={<PageTransition><GamingClan /></PageTransition>} />
              <Route path="/portfolio/travelblog" element={<PageTransition><TravelBlog /></PageTransition>} />
              <Route path="/portfolio/kafeteria-balkan" element={<PageTransition><KafeteriaBalkan /></PageTransition>} />
              <Route path="/portfolio/salon-elegance" element={<PageTransition><SalonElegance /></PageTransition>} />
              <Route path="/portfolio/auto-servis-milos" element={<PageTransition><AutoServisMilos /></PageTransition>} />
              <Route path="/kontakt" element={<PageTransition><Contact /></PageTransition>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
