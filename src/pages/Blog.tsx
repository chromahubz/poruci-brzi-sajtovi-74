import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
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
      id: 20,
      title: "Video Marketing za Mala Preduzeća - Kompletni Vodič za Kreiranje Sadržaja koji Prodaje 2025",
      excerpt: "Kako da kreirate video sadržaj koji privlači klijente i povećava prodaju. Od strategije do produkcije - sve što trebate da znate o video marketing-u za srpska mala preduzeća.",
      author: "Poruči Sajt Tim",
      date: "20. februar 2025",
      category: "Video Marketing",
      readTime: "35 min",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
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
    }
  ];

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
            {articles.map((article) => (
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