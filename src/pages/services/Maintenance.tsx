import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Settings,
  Check,
  Shield,
  Zap,
  BarChart,
  Clock,
  AlertTriangle,
  HeadphonesIcon
} from "lucide-react";

const Maintenance = () => {
  const features = [
    {
      icon: Shield,
      title: "Sigurnosna ažuriranja",
      description: "Redovno ažuriranje sistema i pluginova za maksimalnu sigurnost vašeg sajta"
    },
    {
      icon: Zap,
      title: "Optimizacija performansi",
      description: "Kontinuirano poboljšanje brzine učitavanja i optimizacija baze podataka"
    },
    {
      icon: BarChart,
      title: "Monitoring i analitika",
      description: "24/7 praćenje rada sajta i mesečni izveštaji o performansama"
    },
    {
      icon: Clock,
      title: "Redovni backup",
      description: "Automatski backup sajtova sa mogućnoscu brzog vraćanja u slučaju problema"
    },
    {
      icon: AlertTriangle,
      title: "Brzo rešavanje problema",
      description: "Hitna intervencija u slučaju pada sajta ili tehničkih problema"
    },
    {
      icon: HeadphonesIcon,
      title: "Tehnička podrška",
      description: "Direktna linija sa našim timom za sva pitanja i zahteve"
    }
  ];

  const maintenanceServices = [
    {
      category: "Sigurnost",
      services: [
        "Redovna sigurnosna ažuriranja",
        "Malware scanning i čišćenje",
        "SSL sertifikat održavanje",
        "Firewall konfiguracija",
        "Monitoring napada",
        "Sigurnosni audit"
      ]
    },
    {
      category: "Performanse",
      services: [
        "Optimizacija brzine učitavanja",
        "Database čišćenje i optimizacija",
        "Cache optimizacija",
        "Image compression",
        "Code minification",
        "CDN podešavanje"
      ]
    },
    {
      category: "Sadržaj",
      services: [
        "Ažuriranje sadržaja",
        "Blog post objave",
        "SEO optimizacija",
        "Meta tags ažuriranje",
        "Dodavanje novih stranica",
        "Content review"
      ]
    },
    {
      category: "Tehnička podrška",
      services: [
        "Email podrška",
        "Telefonska podrška",
        "Remote pristup i rešavanje",
        "Obuka korisnika",
        "Dokumentacija",
        "Konsultacije"
      ]
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "20€",
      period: "mesečno",
      description: "Osnovno održavanje",
      features: [
        "Sigurnosna ažuriranja",
        "Mesečni backup",
        "Basic monitoring",
        "Email podrška",
        "Mesečni izveštaj"
      ],
      responseTime: "48h"
    },
    {
      name: "Pro",
      price: "50€",
      period: "mesečno",
      description: "Kompletno održavanje",
      features: [
        "Sve iz Basic paketa",
        "Nedeljni backup",
        "24/7 monitoring",
        "Performance optimizacija",
        "Priority podrška",
        "Telefon podrška"
      ],
      popular: true,
      responseTime: "12h"
    },
    {
      name: "Enterprise",
      price: "100€",
      period: "mesečno",
      description: "Premium održavanje",
      features: [
        "Sve iz Pro paketa",
        "Dnevni backup",
        "Dedicated support",
        "SLA ugovor",
        "Custom razvoj (2h mesečno)",
        "On-site podrška"
      ],
      responseTime: "2h"
    }
  ];

  const benefits = [
    {
      title: "Ušteda vremena",
      description: "Fokusirajte se na svoj biznis dok mi brinemo o tehničkim aspektima",
      icon: Clock
    },
    {
      title: "Sigurnost podataka",
      description: "Redovni backup i sigurnosne mere štite vaše važne podatke",
      icon: Shield
    },
    {
      title: "Bolje performanse",
      description: "Optimizovan sajt znači bolje korisničko iskustvo i veću konverziju",
      icon: Zap
    },
    {
      title: "Profesionalna podrška",
      description: "Tim eksperata dostupan za sva vaša pitanja i potrebe",
      icon: HeadphonesIcon
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">Kontinuirana podrška</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Profesionalno održavanje web sajtova
            </h1>
            <p className="text-xl text-muted-foreground">
              Osigurajte da vaš sajt uvek radi besprekorno sa našim uslugama održavanja.
              Sigurnost, brzina i pouzdanost - sve što vam je potrebno na jednom mestu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Počni održavanje</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/cene">Pogledaj pakete</Link>
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
              Šta uključuje naše održavanje?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletna briga o vašem sajtu da biste se vi fokusirali na biznis
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

      {/* Services Detail Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Detaljne usluge održavanja
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletna lista usluga koje nudimo u našim paketima održavanja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceServices.map((category, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Paketi održavanja
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Odaberite paket koji najbolje odgovara vašim potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
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
                      <span className="text-lg text-muted-foreground font-normal">/{pkg.period}</span>
                    </div>
                    <Badge variant="outline" className="mt-2">
                      Odgovor: {pkg.responseTime}
                    </Badge>
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Zašto je održavanje važno?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prednosti redovnog održavanja web sajta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Često postavljana pitanja
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Da li mogu da otkažem uslugu?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Da, možete otkazati uslugu u bilo kom trenutku uz obaveštenje od 30 dana.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Šta ako moj sajt bude hakovan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Imamo protokol za brzo vraćanje sajta iz backup-a i potpunu sigurnosnu sanaciju.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Da li mogu da menjam paket?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Da, možete menjati paket u bilo kom trenutku. Razlika u ceni se naplaćuje ili refundira.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Da li radite sa svim vrstama sajtova?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Da, radimo sa WordPress, custom sajtovima, e-commerce platformama i svim popularnim CMS sistemima.
                </p>
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
              Početak je besplatan!
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas za besplatnu procenu stanja vašeg sajta i preporuke za poboljšanje
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Besplatna procena</Link>
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

export default Maintenance;