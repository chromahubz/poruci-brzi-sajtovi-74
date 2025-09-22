import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Check,
  CreditCard,
  Package,
  BarChart,
  Shield,
  Truck,
  Users
} from "lucide-react";

const Ecommerce = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Kompletna prodavnica",
      description: "Potpuno funkcionalna online prodavnica sa svim potrebnim funkcijama"
    },
    {
      icon: CreditCard,
      title: "Sigurna plaćanja",
      description: "Integracija sa PayPal, Stripe i domaćim sistemima plaćanja"
    },
    {
      icon: Package,
      title: "Upravljanje inventarom",
      description: "Sistem za praćenje zaliha, automatska obaveštenja o niskim zalihama"
    },
    {
      icon: BarChart,
      title: "Analitika prodaje",
      description: "Detaljni izveštaji o prodaji, najpopularnijim proizvodima i klijentima"
    },
    {
      icon: Shield,
      title: "SSL sigurnost",
      description: "Potpuna sigurnost transakcija i zaštita podataka kupaca"
    },
    {
      icon: Truck,
      title: "Sistem dostave",
      description: "Integracija sa kurirskim službama i praćenje pošiljaka"
    }
  ];

  const packages = [
    {
      name: "Shop Start",
      price: "150€",
      originalPrice: "500€",
      description: "Osnovna online prodavnica",
      features: [
        "Do 10 proizvoda",
        "Forma za naručivanje",
        "Pouzeće, lično preuzimanje",
        "Notifikacija na e-mail",
        "Responzivan dizajn",
        "Osnovna SEO optimizacija"
      ],
      popular: true,
      note: "Promo cena samo do kraja meseca!"
    },
    {
      name: "Shop Pro",
      price: "700€",
      description: "Napredna online prodavnica",
      features: [
        "Do 50 proizvoda",
        "Kartična plaćanja",
        "Kuponi i popusti",
        "Notifikacije i newsletteri",
        "Napredna analitika",
        "Prioritetna podrška",
        "Neograničen broj poseta"
      ]
    },
    {
      name: "Enterprise Shop",
      price: "Kontakt",
      description: "Kompletno e-commerce rešenje",
      features: [
        "Neograničen broj proizvoda",
        "Multi-vendor sistem",
        "Napredne integracije",
        "Custom funkcionalnosti",
        "Dedicated podrška",
        "SLA ugovor"
      ]
    }
  ];

  const ecommerceFeatures = [
    {
      category: "Osnove",
      features: [
        "Katalog proizvoda sa kategorijama",
        "Pretragaj i filtriranje",
        "Korpa za kupovinu",
        "Checkout proces",
        "Korisnički nalozi",
        "Wishlist funkcionalnost"
      ]
    },
    {
      category: "Plaćanja",
      features: [
        "PayPal integracija",
        "Stripe kartična plaćanja",
        "Pouzeće",
        "Bankarski transfer",
        "Crypto plaćanja (na zahtev)",
        "Installment planovi"
      ]
    },
    {
      category: "Upravljanje",
      features: [
        "Admin panel za upravljanje",
        "Upravljanje zalihama",
        "Upravljanje narudžbinama",
        "Kuponi i promocije",
        "Izveštaji o prodaji",
        "Export podataka"
      ]
    },
    {
      category: "Marketing",
      features: [
        "SEO optimizacija",
        "Newsletter integracija",
        "Social media linkovi",
        "Recenzije proizvoda",
        "Related products",
        "Cross-selling"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">E-commerce rešenja</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Profesionalne online prodavnice
            </h1>
            <p className="text-xl text-muted-foreground">
              Kreiramo kompletne e-commerce rešenja koja će omogućiti vašem biznisu
              da prodaje online 24/7 sa sigurnim plaćanjima i profesionalnim izgledom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Poruči shop sada</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/portfolio">Pogledaj shop primere</Link>
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
              Funkcionalnosti naših online prodavnica
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sve što vam je potrebno za uspešno online poslovanje na jednom mestu
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
              E-commerce paketi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Odaberite paket koji odgovara veličini vašeg biznisa
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
                    {pkg.note && (
                      <div className="text-sm text-destructive font-medium mt-1">
                        🎉 {pkg.note}
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

      {/* Features Detail Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Detaljne funkcionalnosti
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompletna lista funkcija koje dobijate u našim e-commerce rešenjima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceFeatures.map((category, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Zašto odabrati naša e-commerce rešenja?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">200+ zadovoljnih klijenata</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Preko 200 uspešno lansiranih online prodavnica različitih veličina
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <BarChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Povećanje prodaje za 150%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  U proseku naši klijenti beleže povećanje online prodaje za 150% u prvoj godini
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">100% sigurne transakcije</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SSL sertifikati, sigurna plaćanja i potpuna zaštita podataka kupaca
                </CardDescription>
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
              Spremni da započnete online prodaju?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju za vašu online prodavnicu
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

export default Ecommerce;