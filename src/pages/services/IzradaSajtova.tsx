import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Crown, Globe, Clock, Shield, Target, Users, Smartphone, Search, TrendingUp, ArrowRight } from "lucide-react";

const IzradaSajtova = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">Naša glavna usluga</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Izrada sajtova
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Od 50€ do kompletnih web rešenja. Brzo, kvalitetno i pristupačno za sve tipove biznisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" asChild>
                <Link to="/cene">Pogledaj pakete</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/kontakt">Besplatna konsultacija</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Završenih sajtova</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50€</div>
              <div className="text-muted-foreground">Počinje od</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5 dana</div>
              <div className="text-muted-foreground">Prosečno vreme</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Responsive dizajn</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Šta nudimo u izradi sajtova?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kompletan servis od ideje do gotovog sajta koji radi i privlači klijente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Kompletan web sajt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Od jednostranih landing page-ova do kompleksnih sajtova sa više strana i funkcionalnosti.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Profesionalan dizajn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Optimizovan sadržaj</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Moderna tehnologija</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Responsive dizajn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Sajt koji savršeno radi na svim uređajima - telefoni, tableti, desktop računari.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mobile-first pristup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Touch optimizacija</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Brzo učitavanje</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Search className="w-12 h-12 text-primary mb-4" />
                <CardTitle>SEO optimizacija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Optimizacija za Google pretragu da vas klijenti mogu lako da pronađu online.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Meta tagovi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Optimizovane slike</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Strukturirani podaci</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Bezbednost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  SSL sertifikati, sigurnost podataka i zaštita od malware-a i hakerskih napada.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>SSL sertifikat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Redovni backup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Zaštićene forme</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Brzina</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Optimizovano za brzinu učitavanja - važno za korisničko iskustvo i Google rangiranje.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Kompresovane slike</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Minifikovan kod</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>CDN integracija</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Konverzije</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dizajnirano da privuče posetiоce i pretvori ih u klijente sa jasnim call-to-action elementima.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Kontakt forme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Jasni CTA dugmad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Optimizovan UX</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Kako funkcioniše proces izrade?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jednostavan i transparentan proces od početka do kraja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Konsultacije</h3>
              <p className="text-muted-foreground">
                Razgovaramo o vašim potrebama, ciljevima i viziji sajta.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planiranje</h3>
              <p className="text-muted-foreground">
                Kreiramo strukturu, dizajn i funkcionalnosti sajta.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Razvoj</h3>
              <p className="text-muted-foreground">
                Programiramo sajt koristeći najnovije tehnologije.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Lansiranje</h3>
              <p className="text-muted-foreground">
                Testiramo, optimizujemo i puštamo sajt uživo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naši paketi za izradu sajtova
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Od osnovnih sajtova do kompleksnih rešenja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative hover:shadow-elegant transition-all duration-300 border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                Najpopularniji
              </Badge>
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">Osnovni Paket</CardTitle>
                <div className="text-4xl font-bold text-foreground">€50</div>
                <p className="text-muted-foreground">Savršen za startupe</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">1 strana ili do 3 manje strane</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Besplatan domen (.online/.store/.shop)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Hosting na 1 godinu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Responzivan dizajn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Osnovna SEO optimizacija</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link to="/cene">Poruči sada</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <CardTitle className="text-2xl">Mikro Sajtovi</CardTitle>
                <div className="text-4xl font-bold text-foreground">€200</div>
                <p className="text-muted-foreground">5 sajtova za cenu jednog</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">5 manjih sajtova</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">5 domena uključeno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Hosting na 1 godinu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Jednokratna isporuka</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Idealno za više projekata</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/cene">Saznaj više</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Crown className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <CardTitle className="text-2xl">Kompleksniji sajtovi</CardTitle>
                <div className="text-4xl font-bold text-foreground">Kontakt</div>
                <p className="text-muted-foreground">Potpuno prilagođeno</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Web aplikacije</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Mobilne aplikacije</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Napredne integracije</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Personalizovane ponude</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Stručni tim eksperata</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/kontakt">Kontaktiraj nas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/cene">
                Pogledaj sve pakete
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Zašto odabrati nas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Brza isporuka</h3>
              <p className="text-muted-foreground text-sm">
                Osnovni sajtovi gotovi za 3-5 dana
              </p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Dokazani rezultati</h3>
              <p className="text-muted-foreground text-sm">
                200+ uspešno završenih projekata
              </p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Stručan tim</h3>
              <p className="text-muted-foreground text-sm">
                Iskusni developeri i dizajneri
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Garancija kvaliteta</h3>
              <p className="text-muted-foreground text-sm">
                100% zadovoljstvo ili vraćamo novac
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
              Spremni da počnete svoj online put?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju za vaš projekat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Početak odmah</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-primary hover:bg-white hover:text-primary">
                <Link to="/cene">Pogledaj cene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IzradaSajtova;