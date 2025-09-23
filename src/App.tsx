import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nama" element={<About />} />
              <Route path="/usluge" element={<Services />} />
              <Route path="/usluge/izrada-sajtova" element={<WebDevelopment />} />
              <Route path="/usluge/web-dizajn" element={<WebDesign />} />
              <Route path="/usluge/e-commerce" element={<Ecommerce />} />
              <Route path="/usluge/odrzavanje-sajtova" element={<Maintenance />} />
              <Route path="/usluge/mobilne-aplikacije" element={<MobileApps />} />
              <Route path="/usluge/seo-optimizacija" element={<SEOOptimization />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/cene" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/1" element={<BlogArticle1 />} />
              <Route path="/blog/2" element={<BlogArticle2 />} />
              <Route path="/blog/3" element={<BlogArticle3 />} />
              <Route path="/blog/4" element={<BlogArticle4 />} />
              <Route path="/blog/5" element={<BlogArticle5 />} />
              <Route path="/blog/6" element={<BlogArticle6 />} />
              <Route path="/blog/7" element={<BlogArticle7 />} />
              <Route path="/blog/8" element={<BlogArticle8 />} />
              <Route path="/blog/9" element={<BlogArticle9 />} />
              <Route path="/blog/10" element={<BlogArticle10 />} />
              <Route path="/blog/11" element={<BlogArticle11 />} />
              <Route path="/blog/12" element={<BlogArticle12 />} />
              <Route path="/blog/13" element={<BlogArticle13 />} />
              <Route path="/blog/14" element={<BlogArticle14 />} />
              <Route path="/blog/15" element={<BlogArticle15 />} />
              <Route path="/blog/16" element={<BlogArticle16 />} />
              <Route path="/blog/17" element={<BlogArticle17 />} />
              <Route path="/blog/18" element={<BlogArticle18 />} />
              <Route path="/blog/19" element={<BlogArticle19 />} />
              <Route path="/blog/20" element={<BlogArticle20 />} />
              <Route path="/blog/21" element={<BlogArticle21 />} />
              <Route path="/blog/22" element={<BlogArticle22 />} />
              <Route path="/blog/23" element={<BlogArticle23 />} />
              <Route path="/blog/24" element={<BlogArticle24 />} />
              <Route path="/blog/25" element={<BlogArticle25 />} />
              <Route path="/blog/26" element={<BlogArticle26 />} />
              <Route path="/blog/27" element={<BlogArticle27 />} />
              <Route path="/blog/28" element={<BlogArticle28 />} />
              <Route path="/blog/29" element={<BlogArticle29 />} />
              <Route path="/blog/30" element={<BlogArticle30 />} />
              <Route path="/blog/31" element={<BlogArticle31 />} />
              <Route path="/blog/32" element={<BlogArticle32 />} />
              <Route path="/portfolio/restoran-vila" element={<RestoranVila />} />
              <Route path="/portfolio/techstore" element={<TechStore />} />
              <Route path="/portfolio/advokatska-petrovic" element={<AdvokatskaPetrovic />} />
              <Route path="/portfolio/beautyshop" element={<BeautyShop />} />
              <Route path="/portfolio/fitnesspro" element={<FitnessPro />} />
              <Route path="/portfolio/healthcareapp" element={<HealthCareApp />} />
              <Route path="/kontakt" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
