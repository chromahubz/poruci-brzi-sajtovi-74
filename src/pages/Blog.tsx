import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  // Sample blog articles data
  const articles = [
    {
      id: 1,
      title: "5 ključnih SEO faktora za 2024. godinu",
      excerpt: "Otkrijte najvažnije SEO strategije koje će vam pomoći da poboljšate rangiranje vašeg sajta u 2024. godini.",
      author: "Marko Petrović",
      date: "15. decembar 2024",
      category: "SEO",
      readTime: "5 min",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Kako odabrati pravi domen za vaš biznis",
      excerpt: "Kompletni vodič kroz proces odabira imena domena koji će reprezentovati vaš brend na najbolji način.",
      author: "Ana Milić",
      date: "12. decembar 2024", 
      category: "Web Development",
      readTime: "7 min",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Responsive dizajn: Zašto je važan za vaš sajt",
      excerpt: "Razumite zašto je responsive dizajn ključan za uspeh vašeg sajta u današnjem mobilnom svetu.",
      author: "Stefan Jovanović",
      date: "10. decembar 2024",
      category: "Design",
      readTime: "4 min",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Google Analytics 4: Početni vodič",
      excerpt: "Sve što trebate da znate o GA4 i kako da ga postavite za praćenje performansi vašeg sajta.",
      author: "Milica Stojanović",
      date: "8. decembar 2024",
      category: "Analytics",
      readTime: "6 min",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Optimizacija brzine sajta za bolje performanse",
      excerpt: "Praktični saveti za poboljšanje brzine učitavanja vašeg sajta i korisničkog iskustva.",
      author: "Nikola Đorđević",
      date: "5. decembar 2024",
      category: "Performance",
      readTime: "8 min",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "E-commerce trendovi za 2025. godinu",
      excerpt: "Otkrijte najnovije trendove u online prodaji i pripremite se za budućnost e-commerce-a.",
      author: "Jelena Nikolić",
      date: "3. decembar 2024",
      category: "E-commerce",
      readTime: "10 min",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Blog i saveti
            </h1>
            <p className="text-xl text-muted-foreground">
              Korisni članci, saveti i trendovi iz sveta web developmenta i digitalnog marketinga
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