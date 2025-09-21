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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      id: 2,
      title: "Domen za sajt - Kako odabrati najbolje ime za vaš biznis",
      excerpt: "Vodič kroz odabir domena: .com vs .rs vs .online. Proverite dostupnost, cene i SEO uticaj. Besplatna provera domena uključena!",
      author: "Poruči Sajt Tim",
      date: "12. januar 2025",
      category: "Domeni",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      id: 3,
      title: "Responsive sajt dizajn - Zašto je mobilni prikaz ključan za prodaju",
      excerpt: "90% korisnika koristi mobilne uređaje. Otkrijte kako responsive dizajn povećava konverzije i Google rangiranje vašeg sajta.",
      author: "Poruči Sajt Tim",
      date: "10. januar 2025",
      category: "Web dizajn",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      id: 4,
      title: "SEO optimizacija sajta - Kako biti prvi na Google-u",
      excerpt: "Praktični SEO saveti za bolje rangiranje. Meta tagovi, ključne reči, brzina sajta - sve što trebate za više poseta iz Google pretrage.",
      author: "Poruči Sajt Tim",
      date: "8. januar 2025",
      category: "SEO",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      id: 5,
      title: "Brz sajt = više prodaje: Optimizacija brzine učitavanja",
      excerpt: "Jedan sekund kašnjenja = 7% manje prodaje. Naučite kako da ubrzate sajt i zadržite posetioce. Besplatni alati za merenje brzine.",
      author: "Poruči Sajt Tim",
      date: "5. januar 2025",
      category: "Optimizacija",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      id: 6,
      title: "E-commerce sajt za male biznise - Od 150€ do online prodavnice",
      excerpt: "Kompletni vodič za pokretanje online prodavnice. Plaćanje, dostava, proizvodi - sve što trebate za uspešnu e-commerce strategiju.",
      author: "Poruči Sajt Tim",
      date: "3. januar 2025",
      category: "E-commerce",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
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