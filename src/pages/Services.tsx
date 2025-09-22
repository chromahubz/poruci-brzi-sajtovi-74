import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Settings, 
  Palette,
  Code,
  Shield,
  Zap,
  Check
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Monitor,
      title: "Kreiranje web sajtova",
      description: "Moderni, responzivni sajtovi prilagođeni vašim potrebama",
      features: ["Responzivan dizajn", "SEO optimizacija", "Brzo učitavanje", "Mobile-first pristup"],
      popular: true,
      link: "/usluge/izrada-sajtova"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce rešenja",
      description: "Kompletne online prodavnice sa sistemom plaćanja",
      features: ["Shopping cart", "Integracija plaćanja", "Upravljanje inventarom", "Analytics"],
      link: "/usluge/e-commerce"
    },
    {
      icon: Smartphone,
      title: "Mobilne aplikacije",
      description: "Web aplikacije optimizovane za mobilne uređaje",
      features: ["PWA tehnologija", "Offline pristup", "Push notifikacije", "App store ready"],
      link: "/usluge/mobilne-aplikacije"
    },
    {
      icon: Search,
      title: "SEO optimizacija",
      description: "Poboljšanje pozicije na Google pretragama",
      features: ["Keyword research", "On-page SEO", "Technical SEO", "Performance optimizacija"],
      link: "/usluge/seo-optimizacija"
    },
    {
      icon: Settings,
      title: "Održavanje sajtova",
      description: "Redovno ažuriranje i tehnička podrška",
      features: ["24/7 monitoring", "Security updates", "Backup servisi", "Performance tuning"],
      link: "/usluge/odrzavanje-sajtova"
    },
    {
      icon: Palette,
      title: "Web dizajn",
      description: "Kreativni dizajn koji privlači pažnju",
      features: ["UI/UX dizajn", "Brand identitet", "Wireframing", "Prototyping"],
      link: "/usluge/web-dizajn"
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "Custom razvoj",
      description: "Prilagođena rešenja za specifične potrebe"
    },
    {
      icon: Shield,
      title: "Web bezbednost",
      description: "SSL sertifikati i bezbednosne mere"
    },
    {
      icon: Zap,
      title: "Performance optimizacija",
      description: "Ubrzavanje učitavanja sajta"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Naše usluge
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletna rešenja za vašu digitalnu prisutnost - od dizajna do održavanja
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Glavne usluge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sve što vam je potrebno za uspešnu web prezentaciju
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="relative hover:shadow-elegant transition-all duration-300">
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    Najpopularnija
                  </Badge>
                )}
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Button asChild className="w-full">
                      <Link to={service.link}>Saznaj više</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dodatne usluge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proširite funkcionalnost vašeg sajta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
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
              Naš proces rada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jednostavan i transparentan proces u 4 koraka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Konsultacija</h3>
              <p className="text-muted-foreground">
                Razgovaramo o vašim potrebama i ciljevima
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Planiranje</h3>
              <p className="text-muted-foreground">
                Kreiramo strategiju i dizajn za vaš projekat
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Razvoj</h3>
              <p className="text-muted-foreground">
                Programiramo i dizajniramo vaš sajt
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold">Lansiranje</h3>
              <p className="text-muted-foreground">
                Postavljamo sajt i pružamo obuku
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Potrebna vam je neka od ovih usluga?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas za besplatnu konsultaciju i procenu projekta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Kontaktiraj nas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20">
                <Link to="/cene" className="text-white">Pogledaj cene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;