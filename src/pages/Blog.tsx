import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // SEO-optimized blog articles data
  const articles = [
    {
      id: 1,
      title: "Izrada sajta za 50€ - Kompletni vodič za mala preduzeća 2025",
      excerpt: "Saznajte kako da napravite profesionalan sajt za samo 50€. Sve o doménima, hostingu i dizajnu koji privlači klijente. Besplatni saveti uključeni!",
      author: "Poruči Sajt Tim",
      date: "15. januar 2025",
      category: "Izrada sajtova",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 2,
      title: "Domen za sajt - Kako odabrati najbolje ime za vaš biznis",
      excerpt: "Vodič kroz odabir domena: .com vs .rs vs .online. Proverite dostupnost, cene i SEO uticaj. Besplatna provera domena uključena!",
      author: "Poruči Sajt Tim",
      date: "12. januar 2025",
      category: "Domeni",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 3,
      title: "Responsive sajt dizajn - Zašto je mobilni prikaz ključan za prodaju",
      excerpt: "90% korisnika koristi mobilne uređaje. Otkrijte kako responsive dizajn povećava konverzije i Google rangiranje vašeg sajta.",
      author: "Poruči Sajt Tim",
      date: "10. januar 2025",
      category: "Web dizajn",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 4,
      title: "SEO optimizacija sajta - Kako biti prvi na Google-u",
      excerpt: "Praktični SEO saveti za bolje rangiranje. Meta tagovi, ključne reči, brzina sajta - sve što trebate za više poseta iz Google pretrage.",
      author: "Poruči Sajt Tim",
      date: "8. januar 2025",
      category: "SEO",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 5,
      title: "Brz sajt = više prodaje: Optimizacija brzine učitavanja",
      excerpt: "Jedan sekund kašnjenja = 7% manje prodaje. Naučite kako da ubrzate sajt i zadržite posetioce. Besplatni alati za merenje brzine.",
      author: "Poruči Sajt Tim",
      date: "5. januar 2025",
      category: "Optimizacija",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 6,
      title: "E-commerce sajt za male biznise - Od 150€ do online prodavnice",
      excerpt: "Kompletni vodič za pokretanje online prodavnice. Plaćanje, dostava, proizvodi - sve što trebate za uspešnu e-commerce strategiju.",
      author: "Poruči Sajt Tim",
      date: "3. januar 2025",
      category: "E-commerce",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 7,
      title: "Social Media za Biznis: Instagram i Facebook za Početnike",
      excerpt: "Kompletni vodič za pokretanje biznis profila na društvenim mrežama. Strategije sadržaja, plaćene reklame i merenje rezultata za maksimalan ROI.",
      author: "Poruči Sajt Tim",
      date: "20. januar 2025",
      category: "Social Media",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 8,
      title: "Google My Business - Vodič za Lokalne Biznise u Srbiji",
      excerpt: "Kompletni vodič za optimizaciju Google My Business profila. Naučite kako da privučete lokalne klijente i poboljšate rangiranje u Google Maps pretragama.",
      author: "Poruči Sajt Tim",
      date: "22. januar 2025",
      category: "Lokalni SEO",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 9,
      title: "Online Marketing sa Malim Budžetom - Maksimalni ROI za Mala Preduzeća",
      excerpt: "Kako da ostvarite velike rezultate u online marketingu sa ograničenim sredstvima. Praktični vodič sa konkretnim strategijama i budget planovima.",
      author: "Poruči Sajt Tim",
      date: "25. januar 2025",
      category: "Budget Marketing",
      readTime: "14 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 10,
      title: "Zašto je Blog Važan za Vaš Biznis - Kako Specijalizovan Sadržaj Privlači Klijente",
      excerpt: "Otkrijte kako blog može da transformiše vaš biznis u authority u vašoj oblasti i dovede kontinuirani tok novih klijenata kroz organsko rangiranje.",
      author: "Poruči Sajt Tim",
      date: "28. januar 2025",
      category: "Content Marketing",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 11,
      title: "Landing stranica koja prodaje - Kako napraviti stranu koja konvertuje posetioce u kupce",
      excerpt: "Kompletni vodič kroz kreiranje visoko-konvertirajućih landing stranica. Naučite kako da svaki posetilac postane potencijalni kupac.",
      author: "Poruči Sajt Tim",
      date: "25. januar 2025",
      category: "Conversion Optimization",
      readTime: "16 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 12,
      title: "Email Marketing za Male Biznise - ROI od 4200% Kroz Automatizovane Email Sekvence",
      excerpt: "Kompletni vodič za email marketing strategije koje donose rezultate. Automatizovane sekvence, A/B testiranje i alati za povećanje prodaje.",
      author: "Poruči Sajt Tim",
      date: "30. januar 2025",
      category: "Email Marketing",
      readTime: "18 min",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 13,
      title: "Online vs Offline Marketing - Kompletno Poređenje za Mala Preduzeća u Srbiji 2025",
      excerpt: "Detaljno poređenje online i offline marketing strategija sa praktičnim savetima za kombinovani pristup koji maksimizuje ROI.",
      author: "Poruči Sajt Tim",
      date: "2. februar 2025",
      category: "Marketing Strategije",
      readTime: "20 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 14,
      title: "Local SEO za Srpske Biznise - Kako Biti Prvi na Google Maps u 2025",
      excerpt: "Kompletni vodič kroz Local SEO optimizaciju za mala preduzeća u Srbiji. Google My Business, lokalne recenzije, citati i sve što trebate za dominaciju lokalnih pretarga.",
      author: "Poruči Sajt Tim",
      date: "5. februar 2025",
      category: "Lokalni SEO",
      readTime: "22 min",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 15,
      title: "WordPress vs Custom Sajt - Kompletno Poređenje za Srpske Biznise 2025",
      excerpt: "Detaljno poređenje WordPress-a i custom rešenja sa realnim troškovima, performansama i preporukama za različite tipove biznisa u Srbiji.",
      author: "Poruči Sajt Tim",
      date: "8. februar 2025",
      category: "Web Development",
      readTime: "24 min",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 25,
      title: "Mikrosajtovi za Lokalne Biznise: Kako da Dominirate Google Pretragama u Srbiji",
      excerpt: "Otkrijte moćnu strategiju koja omogućava malim preduzećima da zauzmu više pozicija u Google rezultatima i privuku značajno više kupaca iz svoje lokalne oblasti. Kompletan vodič kroz kreiranje i monetizaciju mikrosajtova.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "Digitalni Marketing",
      readTime: "22 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 26,
      title: "E-commerce Mikrosajtovi: High-Ticket Dropshipping Strategija za Srpske Biznise 2025",
      excerpt: "Otkrijte naprednu strategiju e-commerce mikrosajtova koja omogućava prodaju visoko-vrednih proizvoda sa 300-500% profit maržama. Kompletni vodič kroz partnerstva sa lokalnim proizvođačima i AI automatizaciju.",
      author: "Poruči Sajt Tim",
      date: "22. septembar 2024",
      category: "E-commerce",
      readTime: "28 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 29,
      title: "Web bezbednost: Kako zaštititi svoj sajt od napada",
      excerpt: "Praktični vodič za implementaciju osnovnih bezbednosnih mera na vašem web sajtu. SQL injection, XSS, CSRF - naučite kako da se zaštitite.",
      author: "Stefan Milosavljević",
      date: "10. januar 2025",
      category: "Web Security",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 28,
      title: "Responsive dizajn: Vodič za mobilno prilagođavanje sajta",
      excerpt: "Sve što trebate da znate o kreiranju sajtova koji savršeno rade na svim uređajima. CSS Grid, Flexbox, Media Queries.",
      author: "Ana Jovanović",
      date: "12. januar 2025",
      category: "Responsive Design",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 32,
      title: "SEO za lokalne biznise u Srbiji: Kompletna strategija za 2025.",
      excerpt: "Kako da pozicionirate svoj lokalni biznis na vrh Google pretrage i privučete više kupaca iz vaše okoline. Google My Business, citacije, recenzije.",
      author: "Nikola Jovanović",
      date: "4. januar 2025",
      category: "SEO",
      readTime: "14 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 31,
      title: "UX/UI dizajn za početnike: Kako kreirati intuitivne web interface-e",
      excerpt: "Kompletni vodič kroz principe dizajna korisničkog iskustva i praktične savete za poboljšanje usability vašeg sajta.",
      author: "Jelena Marković",
      date: "6. januar 2025",
      category: "UX/UI Design",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 30,
      title: "AI i automatizacija u digitalnom marketingu: Vodič za 2025.",
      excerpt: "Kako iskoristiti veštačku inteligenciju i automatizaciju da poboljšate marketing rezultate i smanjite troškove.",
      author: "Milica Stojanović",
      date: "8. januar 2025",
      category: "Digital Marketing",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 27,
      title: "Node.js vs Python: Koji backend jezik izabrati u 2025?",
      excerpt: "Detaljno poređenje dva najpoznatija backend jezika za web development sa praktičnim savetima za izbor prave tehnologije.",
      author: "Marko Petrović",
      date: "15. januar 2025",
      category: "Web Development",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 24,
      title: "Lokalni SEO za Mala Preduzeća - Kompletni Vodič za 2024. Godinu",
      excerpt: "Otkrijte kako da pozicionirate vaše lokalno preduzeće na vrh Google pretrage i privučete više kupaca iz vaše okoline. Google My Business, citacije, recenzije i napredne tehnike.",
      author: "Poruči Sajt Tim",
      date: "22. septembar 2024",
      category: "Lokalni SEO",
      readTime: "25 min",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 23,
      title: "Email Marketing za Mala Preduzeća - Kompletan Vodič za Gradnju Liste i Povećanje Prodaje 2025",
      excerpt: "Kako da izgradite email listu od 0 do 5000+ pretplatnika, kreirate kampanje koje donose prodaju i automatizujete komunikaciju sa klijentima. Sve što trebate za uspešan email marketing u Srbiji.",
      author: "Poruči Sajt Tim",
      date: "28. februar 2025",
      category: "Email Marketing",
      readTime: "45 min",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 22,
      title: "Content Marketing za Mala Preduzeća - Kompletni Vodič kroz Kreiranje Sadržaja koji Prodaje 2025",
      excerpt: "Kako da kreirate sadržaj koji privlači prave klijente, gradi autoritet i povećava prodaju. Od strategije do realizacije - sve što trebate za uspešan content marketing u Srbiji.",
      author: "Poruči Sajt Tim",
      date: "25. februar 2025",
      category: "Content Marketing",
      readTime: "42 min",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 21,
      title: "Marketing Automation za Mala Preduzeća - Kompletni Vodič kroz Automatizaciju koja Povećava Prodaju 2025",
      excerpt: "Kako da automatizujete marketing procese i uštedite 30+ sati mesečno dok povećavate konverzije za 50%. Od email automation do kompleksnih customer journeys - sve što trebate za uspešnu automatizaciju.",
      author: "Poruči Sajt Tim",
      date: "22. februar 2025",
      category: "Marketing Automation",
      readTime: "38 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 20,
      title: "Video Marketing za Mala Preduzeća - Kompletni Vodič za Kreiranje Sadržaja koji Prodaje 2025",
      excerpt: "Kako da kreirate video sadržaj koji privlači klijente i povećava prodaju. Od strategije do produkcije - sve što trebate da znate o video marketing-u za srpska mala preduzeća.",
      author: "Poruči Sajt Tim",
      date: "20. februar 2025",
      category: "Video Marketing",
      readTime: "35 min",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 19,
      title: "Cybersecurity za Mala Preduzeća - Kompletni Vodič kroz Zaštitu u Digitalnom Svetu 2025",
      excerpt: "Kako da zaštitite svoje preduzeće od cyber napada koji mogu da koštaju milione dinara. Praktični vodič sa konkretnim koracima, alatima i strategijama za potpunu cyber zaštitu.",
      author: "Poruči Sajt Tim",
      date: "18. februar 2025",
      category: "Cybersecurity",
      readTime: "32 min",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 18,
      title: "Branding za Mala Preduzeća - Kompletni Vodič kroz Brand Identitet u Srbiji 2025",
      excerpt: "Kako da izgradite snažan brend koji se izdvaja od konkurencije, privlači prave klijente i omogućava veće cene. Praktičan vodič sa konkretnim primerima i korak-po-korak instrukcijama.",
      author: "Poruči Sajt Tim",
      date: "15. februar 2025",
      category: "Branding",
      readTime: "28 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 17,
      title: "Google Analytics za Početnike - Kompletni GA4 Vodič za Srpske Biznise 2025",
      excerpt: "Kompletni vodič kroz Google Analytics 4. Naučite kako da instalirate, podešavate i koristite GA4 za praćenje poseta, analizu saobraćaja i povećanje konverzija na vašem sajtu.",
      author: "Poruči Sajt Tim",
      date: "12. februar 2025",
      category: "Analytics",
      readTime: "25 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 16,
      title: "Kako Pisati Sadržaj Koji Prodaje - Copywriting Vodič za Srpske Biznise 2025",
      excerpt: "Kompletni vodič kroz copywriting tehnike koje stvarno funkcionišu. Od psihologije kupaca do konkretnih formula za naslove, opise i call-to-action pozive.",
      author: "Poruči Sajt Tim",
      date: "10. februar 2025",
      category: "Copywriting",
      readTime: "26 min",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 43,
      title: "WordPress Optimizacija 2025: Kako ubrzati sajt za 300% i povećati konverzije",
      excerpt: "Kompletni vodič za WordPress optimizaciju koji može da poveća brzinu vašeg sajta za 300% i konverzije za 40%. Hosting, caching, baza podataka, slike - sve što trebate da znate.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "WordPress",
      readTime: "25 min",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 44,
      title: "Google Ads za lokalne biznise u Srbiji: Kompletna strategija za 2025",
      excerpt: "Kako da pokrenete profitabilne Google Ads kampanje za lokalni biznis u Srbiji. Keyword research, ad copy, landing stranice, tracking - kompletna strategija korak po korak.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "Google Ads",
      readTime: "30 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 45,
      title: "Social Media Marketing za lokalne biznise: Instagram i Facebook strategija 2025",
      excerpt: "Kompletna strategija social media marketinga za lokalne biznise. Content plan, engagement, Instagram Stories, Facebook Ads - sve što trebate za uspeh na društvenim mrežama.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "Social Media",
      readTime: "28 min",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 46,
      title: "Email Marketing 2025: Kako izgraditi lojalne klijente i povećati prodaju za 40%",
      excerpt: "Kako da kreirate email marketing strategiju koja povećava customer lifetime value za 40%. Automatizacija, segmentacija, personalizacija - sve što trebate za uspešan email marketing.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "Email Marketing",
      readTime: "32 min",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 47,
      title: "TikTok Marketing za srpske biznise: Kompletna strategija za 2025",
      excerpt: "Kako kreirati viralni TikTok sadržaj koji privlači srpsku publiku, povećava prodaju i gradi brend koji mladi obožavaju. Kompletni vodič sa realnim primerima iz Srbije.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "TikTok Marketing",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    },
    {
      id: 48,
      title: "AI alati za male biznise 2025: Kako uštedeći 15 sati nedeljno i povećati profit",
      excerpt: "Kompletni vodič kroz AI alate koji mogu da transformišu vaš mali biznis. Od ChatGPT-a do Canva AI - kako da automatizujete zadatke i oslobodite vreme za važne stvari.",
      author: "Poruči Sajt Tim",
      date: "23. septembar 2024",
      category: "AI Tools",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Kako napraviti sajt - Besplatni saveti
            </h1>
            <p className="text-xl text-muted-foreground">
              Stručni saveti za izradu sajtova, SEO optimizaciju i online marketing. Sve što trebate za uspešan web biznis.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <Link to={`/blog/${article.id}`} className="block">
                  <div className="aspect-video bg-secondary rounded-t-lg mb-4 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Prethodna
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Sledeća
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Prijavite se za newsletter
            </h2>
            <p className="text-lg text-muted-foreground">
              Budite u toku sa najnovijim člancima i savetima iz sveta web developmenta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Prijavi se
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;