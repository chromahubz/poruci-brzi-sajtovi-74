import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Search,
  Check,
  TrendingUp,
  BarChart,
  Target,
  Zap,
  Eye,
  Globe
} from "lucide-react";

const SEOOptimization = () => {
  const features = [
    {
      icon: Search,
      title: "Keyword research",
      description: "Analiza ključnih reči koje vaša ciljna publika koristi za pretragу"
    },
    {
      icon: TrendingUp,
      title: "On-page SEO",
      description: "Optimizacija sadržaja, meta tagova i strukture stranice"
    },
    {
      icon: BarChart,
      title: "Technical SEO",
      description: "Optimizacija brzine, mobile-friendliness i crawlability"
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Optimizacija za lokalne pretrage i Google My Business"
    },
    {
      icon: Eye,
      title: "Competitor analiza",
      description: "Analiza konkurencije i identifikovanje mogućnosti"
    },
    {
      icon: Globe,
      title: "Link building",
      description: "Kreiranje kvalitetnih backlink-ova za bolje rangiranje"
    }
  ];

  const seoPackages = [
    {
      name: "SEO Start",
      description: "Osnovna SEO optimizacija",
      features: [
        "Keyword research (10 ključnih reči)",
        "On-page optimizacija",
        "Meta tagovi optimizacija",
        "Google Analytics setup",
        "Google Search Console",
        "Mesečni izveštaj"
      ],
      price: "100€",
      duration: "mesečno",
      popular: true
    },
    {
      name: "SEO Pro",
      description: "Napredna SEO optimizacija",
      features: [
        "Keyword research (25 ključnih reči)",
        "Kompletna on-page optimizacija",
        "Technical SEO audit",
        "Local SEO optimizacija",
        "Content optimizacija",
        "Backlink building",
        "Nedeljni izveštaji"
      ],
      price: "250€",
      duration: "mesečno"
    },
    {
      name: "SEO Enterprise",
      description: "Potpuna SEO strategija",
      features: [
        "Unlimited keyword tracking",
        "Kompletna SEO strategija",
        "Content marketing plan",
        "Competitor monitoring",
        "Advanced analytics",
        "Dedicated SEO manager",
        "Daily monitoring"
      ],
      price: "500€",
      duration: "mesečno"
    }
  ];

  const seoAudits = [
    {
      category: "Technical SEO",
      checks: [
        "Site speed analysis",
        "Mobile-friendliness test",
        "Crawlability check",
        "Sitemap validation",
        "Robots.txt review",
        "Schema markup"
      ]
    },
    {
      category: "On-Page SEO",
      checks: [
        "Title tags optimization",
        "Meta descriptions review",
        "Header tags structure",
        "Content quality analysis",
        "Internal linking",
        "Image optimization"
      ]
    },
    {
      category: "Off-Page SEO",
      checks: [
        "Backlink profile analysis",
        "Domain authority check",
        "Social signals review",
        "Local citations audit",
        "Brand mentions tracking",
        "Competitor backlinks"
      ]
    },
    {
      category: "Content SEO",
      checks: [
        "Keyword density analysis",
        "Content freshness review",
        "Duplicate content check",
        "Topic clustering",
        "User intent matching",
        "Content gap analysis"
      ]
    }
  ];

  const results = [
    {
      metric: "Povećanje organskog saobraćaja",
      value: "150%",
      description: "U proseku naši klijenti beleže povećanje organskih poseta za 150% u prva 6 meseci",
      icon: TrendingUp
    },
    {
      metric: "Bolje pozicije u pretragama",
      value: "Top 10",
      description: "85% target ključnih reči ulazi u top 10 rezultata na Google-u",
      icon: Search
    },
    {
      metric: "Povećanje konverzija",
      value: "75%",
      description: "Optimizovani sadržaj i bolje pozicije rezultuju većim brojem konverzija",
      icon: Target
    },
    {
      metric: "ROI na SEO investiciju",
      value: "400%",
      description: "Svaki evro uložen u SEO donosi 4 evra povratka kroz povećane prodaje",
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">Digital marketing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Profesionalna SEO optimizacija
            </h1>
            <p className="text-xl text-muted-foreground">
              Poboljšajte poziciju vašeg sajta na Google pretragama i privucite više
              potencijalnih kupaca kroz organsko rangiranje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Poruči SEO analizu</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/cene">Pogledaj SEO pakete</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naše SEO usluge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletna SEO strategija za maksimalne rezultate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              SEO paketi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Odaberite paket koji odgovara vašim potrebama i budžetu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {seoPackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 flex flex-col h-full ${pkg.popular ? 'border-primary scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                    Najpopularniji
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-foreground">
                      {pkg.price}
                      <span className="text-lg text-muted-foreground font-normal">/{pkg.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow space-y-6">
                  <ul className="space-y-3 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mt-auto"
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/kontakt">Poruči paket</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Besplatna SEO analiza
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detaljno analiziramo vaš sajt i identifikujemo područja za poboljšanje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoAudits.map((audit, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{audit.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {audit.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{check}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/kontakt">Zatražite besplatnu analizu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Rezultati koje postižemo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brojevi govore sami za sebe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <result.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                  <CardTitle className="text-lg">{result.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {result.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naš SEO proces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strukturiran pristup za dugoročne rezultate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "SEO Audit",
                description: "Detaljno analiziramo trenutno stanje vašeg sajta i identifikujemo probleme"
              },
              {
                step: "02",
                title: "Strategija",
                description: "Kreiramo customizovanu SEO strategiju na osnovu vaših ciljeva i konkurencije"
              },
              {
                step: "03",
                title: "Implementacija",
                description: "Primenjujemo optimizacije na sajtu i kreiramo kvalitetan SEO sadržaj"
              },
              {
                step: "04",
                title: "Monitoring",
                description: "Pratimo rezultate i kontinuirano optimizujemo za bolje performanse"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Spremni da poboljšate SEO?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu SEO analizu vašeg sajta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Besplatna SEO analiza</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20">
                <Link to="/cene" className="text-white">Pogledaj sve cene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimization;