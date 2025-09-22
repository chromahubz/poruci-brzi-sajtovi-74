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
