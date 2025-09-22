import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Monitor,
  Check,
  Zap,
  Shield,
  Search,
  Smartphone,
  Code,
  Palette
} from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: Monitor,
      title: "Responzivan dizajn",
      description: "Sajt koji savršeno izgleda na svim uređajima - od telefona do desktop računara"
    },
    {
      icon: Zap,
      title: "Brza brzina učitavanja",
      description: "Optimizovani kod i resursi za maksimalne performanse i SEO"
    },
    {
      icon: Search,
      title: "SEO optimizacija",
      description: "Ugrađena SEO optimizacija za bolje rangiranje na Google pretragama"
    },
    {
      icon: Shield,
      title: "Sigurnost",
      description: "Implementacija najboljih sigurnosnih praksi i SSL sertifikata"
    },
    {
      icon: Code,
      title: "Čist kod",
      description: "Kvalitetan, održiv kod koji poštuje web standarde"
    },
    {
      icon: Palette,
      title: "Moderni dizajn",
      description: "Savremeni dizajn prilagođen vašem brendu i ciljanoj publici"
    }
  ];

  const packages = [
    {
      name: "Osnovni sajt",
      price: "50€",
      originalPrice: "200€",
      description: "Idealno za manje biznise",
      features: [
        "1 strana sa sekcijama ili do 3 manje strane",
        "Responzivan dizajn",
        "Osnovna SEO optimizacija",
        "Kontakt forma",
        "Domen i hosting na 1 godinu"
      ],
      popular: true
    },
    {
      name: "Poslovni sajt",
      price: "150€",
      originalPrice: "500€",
      description: "Za etablirane kompanije",
      features: [
        "Do 10 stranica",
        "Napredni dizajn",
        "CMS sistem",
        "Blog sekcija",
        "Analitika i izveštaji",
        "Premium podrška"
      ]
    },
    {
      name: "Enterprise rešenje",
      price: "Kontakt",
      description: "Za velike organizacije",
      features: [
        "Neograničen broj stranica",
        "Napredne funkcionalnosti",
        "Integracije sa sistemima",
        "Dedicated podrška",
        "SLA ugovor",
        "Custom development"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">Najtraženija usluga</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Profesionalna izrada web sajtova
            </h1>
            <p className="text-xl text-muted-foreground">
              Kreiramo moderne, responzivne i SEO optimizovane web sajtove koji će predstaviti
              vaš biznis u najboljem svetlu i privući nove klijente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Poruči sajt sada</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/portfolio">Pogledaj portfolio</Link>
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
              Zašto izabrati nas za izrada sajta?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kombinujemo najnovije tehnologije sa dugogodišnjim iskustvom da bi kreirali sajt koji će raditi za vas 24/7
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
              Naši paketi za izradu sajtova
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Odaberite paket koji najbolje odgovara vašim potrebama i budžetu
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
                      {pkg.price === "Kontakt" ? (
                        <span className="text-2xl">Kontakt za ponudu</span>
                      ) : (
                        <>
                          {pkg.originalPrice && (
                            <div className="flex items-center justify-center gap-2">
                              <span className="line-through text-muted-foreground text-2xl">{pkg.originalPrice}</span>
                              <span>{pkg.price}</span>
                            </div>
                          )}
                          {!pkg.originalPrice && <span>{pkg.price}</span>}
                        </>
                      )}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-destructive font-medium mt-1">
                        🎉 Promo cena samo do kraja meseca!
                      </div>
                    )}
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
                    <Link to={pkg.price === "Kontakt" ? "/kontakt" : "/cene"}>
                      {pkg.price === "Kontakt" ? 'Kontaktiraj nas' : 'Poruči sada'}
                    </Link>
                  </Button>
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
              Naš proces rada
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparentan i efikasan proces od ideje do gotovog sajta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Konsultacija",
                description: "Analiziramo vaše potrebe i ciljeve, definišemo zahteve i funkcionalnosti"
              },
              {
                step: "02",
                title: "Dizajn",
                description: "Kreiramo wireframe i vizuelni dizajn koji odražava vaš brend"
              },
              {
                step: "03",
                title: "Razvoj",
                description: "Programiramo sajt koristeći najnovije tehnologije i best practices"
              },
              {
                step: "04",
                title: "Lansiranje",
                description: "Testiramo, optimizujemo i puštamo sajt u produkciju sa vašim domenom"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Spremni za novi profesionalni sajt?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju. Vaš novi sajt može biti spreman za 48 sati!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Kontaktiraj nas</Link>
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

export default WebDevelopment;