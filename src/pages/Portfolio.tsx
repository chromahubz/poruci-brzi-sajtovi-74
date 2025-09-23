import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Monitor, ShoppingCart, Smartphone } from "lucide-react";
import healthcareImage from "@/assets/healthcare-app-thumbnail.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Restoran Vila",
      description: "Elegantna web prezentacija restorana sa online rezervacijama",
      category: "Web sajt",
      technologies: ["React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      type: "restaurant",
      icon: Monitor
    },
    {
      title: "TechStore",
      description: "Moderna e-commerce platforma za prodaju elektronike",
      category: "E-commerce",
      technologies: ["React", "Stripe", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      type: "ecommerce",
      icon: ShoppingCart
    },
    {
      title: "FitnessPro",
      description: "Mobilna aplikacija za praćenje treninga i ishrane",
      category: "Mobilna app",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      type: "mobile",
      icon: Smartphone
    },
    {
      title: "Advokatska kancelarija Petrović",
      description: "Profesionalna web prezentacija sa sistemom za zakazivanje",
      category: "Web sajt",
      technologies: ["React", "TypeScript", "Supabase"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
      type: "corporate",
      icon: Monitor
    },
    {
      title: "BeautyShop",
      description: "Online prodavnica kozmetike sa integrisanim plaćanjem",
      category: "E-commerce",
      technologies: ["React", "PayPal", "MongoDB"],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop",
      type: "ecommerce",
      icon: ShoppingCart
    },
    {
      title: "HealthCare App",
      description: "Aplikacija za praćenje zdravlja i komunikaciju sa lekarima",
      category: "Mobilna app",
      technologies: ["Flutter", "Firebase", "Node.js"],
      image: healthcareImage,
      type: "mobile",
      icon: Smartphone
    }
  ];

  const categories = ["Svi", "Web sajt", "E-commerce", "Mobilna app"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Naš portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              Pogledajte neke od naših najuspešnijih projekata i vidite što možemo uraditi za vas
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Završenih projekata</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">300+</div>
              <div className="text-muted-foreground">Zadovoljnih klijenata</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">E-commerce sajtova</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Mobilnih aplikacija</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Izdvojeni projekti
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Svaki projekat je posebna priča uspešne digitalne transformacije
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.title === "Restoran Vila" ? (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/portfolio/restoran-vila">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Pogledaj sajt
                        </Link>
                      </Button>
                    ) : project.title === "TechStore" ? (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/portfolio/techstore">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Pogledaj sajt
                        </Link>
                      </Button>
                    ) : project.title === "Advokatska kancelarija Petrović" ? (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/portfolio/advokatska-petrovic">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Pogledaj sajt
                        </Link>
                      </Button>
                    ) : project.title === "BeautyShop" ? (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/portfolio/beautyshop">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Pogledaj sajt
                        </Link>
                      </Button>
                    ) : project.title === "FitnessPro" ? (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/portfolio/fitnesspro">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Pogledaj app
                        </Link>
                      </Button>
                    ) : project.title === "HealthCare App" ? (
                      <Button variant="secondary" size="sm" asChild>
                        <Link to="/portfolio/healthcareapp">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Pogledaj app
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Pogledaj sajt
                      </Button>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Šta kažu naši klijenti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardDescription className="italic">
                  "Izuzetno profesionalan pristup i brza isporuka. Naš sajt je prevazišao sva očekivanja!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">Marko Petrović</div>
                <div className="text-sm text-muted-foreground">Vlasnik restorana Vila</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription className="italic">
                  "Odličan tim koji razume potrebe malih preduzetnika. Preporučujem svima!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">Ana Jovanović</div>
                <div className="text-sm text-muted-foreground">Vlasnica TechStore</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription className="italic">
                  "Aplikacija je tačno ono što smo zamislili. Korisnici su oduševljeni!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold">Stefan Nikolić</div>
                <div className="text-sm text-muted-foreground">Osnivač FitnessPro</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Vaš projekat može biti sledeći
            </h2>
            <p className="text-lg opacity-90">
              Pridružite se stotinama zadovoljnih klijenata i ostvarite svoju digitalnu viziju
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link to="/kontakt">Započnimo projekat</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;