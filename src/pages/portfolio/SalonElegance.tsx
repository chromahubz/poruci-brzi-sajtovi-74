import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, Clock, Scissors, Star, Users, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const SalonElegance = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-8 px-4 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="container mx-auto">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link to="/portfolio">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad na portfolio
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Frizerski salon
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Salon Elegance
                </h1>
                <p className="text-xl text-muted-foreground">
                  Luksuzni frizerski salon u centru Beograda sa premium uslugama i modernim online prisustvom. Kompletna digitalna transformacija koja je povećala broj klijenata za 250%.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Online rezervacije</Badge>
                <Badge variant="outline">Instagram integracija</Badge>
                <Badge variant="outline">E-commerce</Badge>
                <Badge variant="outline">Mobile app</Badge>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Pogledaj sajt
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/kontakt">Kontaktiraj nas</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Salon Elegance"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ključne funkcionalnosti</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Online rezervacije</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Napredni sistem rezervacija sa izborom frizera, usluge, datuma i vremena. SMS i email potvrde.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Scissors className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Katalog usluga</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detaljno prikazane sve usluge sa cenama, opisima, trajanjem i prije/posle fotografijama.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Instagram className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Instagram feed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatsko prikazivanje najnovijih Instagram postova direktno na sajtu za svež sadržaj.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Tim frizera</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Profili frizera sa iskustvom, specijalnostima i mogućnostima direktne rezervacije kod željenog frizera.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Prikaz sajta</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Homepage design"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Početna stranica</h3>
              <p className="text-muted-foreground">
                Elegantna početna stranica koja odmah dočarava luksuznu atmosferu salona sa visokorezolucijskim fotografijama.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Services page"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Katalog usluga</h3>
              <p className="text-muted-foreground">
                Detaljno organizovane usluge po kategorijama sa cenama, opisima i realnim fotografijama rezultata.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Booking system"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Sistem rezervacija</h3>
              <p className="text-muted-foreground">
                Intuitivni kalendar sa realnim dostupnostima, mogućnošću izbora frizera i automatskim potvrdama.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Team page"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Tim i galerija</h3>
              <p className="text-muted-foreground">
                Profesionalni profili frizera sa portfolijima radova i integrisana Instagram galerija.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Tehnički detalji</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">PWA aplikacija</h3>
                    <p className="text-muted-foreground text-sm">
                      Progressive Web App koja se može instalirati na telefon kao prava aplikacija.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Instagram API</h3>
                    <p className="text-muted-foreground text-sm">
                      Automatska sinhronizacija sa Instagram profilom za prikazivanje najnovijih radova.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Online plaćanje</h3>
                    <p className="text-muted-foreground text-sm">
                      Integracija sa PayPal i stripe za mogućnost online plaćanja depozita za rezervacije.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">CRM integracija</h3>
                    <p className="text-muted-foreground text-sm">
                      Povezano sa CRM sistemom za praćenje klijenata, history usluga i marketing kampanje.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Rezultati projekta</h2>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-rose-600">250%</div>
                  <div className="text-sm text-muted-foreground">Povećanje broja klijenata</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-rose-600">75%</div>
                  <div className="text-sm text-muted-foreground">Online rezervacije</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-rose-600">4.9★</div>
                  <div className="text-sm text-muted-foreground">Google Reviews ocena</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-rose-600">65%</div>
                  <div className="text-sm text-muted-foreground">Rast prihoda</div>
                </Card>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Vlasnica o projektu:</h3>
                <p className="text-muted-foreground italic">
                  "Sajt je potpuno transformisao naš biznis. Klijenti sada mogu da rezervišu termine online što je ogromno olakšanje. Instagram integracija automatski prikazuje naše najnovije radove, a broj novih klijenata se utrostručio. Profesionalno i moderno!"
                </p>
                <div className="mt-3 text-sm font-medium">
                  - Jelena Marković, vlasnica Salon Elegance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Funkcionalnosti koje su klijenti obožavali</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-rose-600 mb-2" />
                <CardTitle>24/7 rezervacije</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Klijenti mogu da rezervišu termine u bilo koje doba dana, čak i kad salon ne radi. Automatske potvrde SMS-om.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="w-8 h-8 text-rose-600 mb-2" />
                <CardTitle>Loyalty program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrisani sistem lojalnosti sa bodovima, popustima za stalne klijente i specijalne ponude za rođendane.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="w-8 h-8 text-rose-600 mb-2" />
                <CardTitle>Podsetnici</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatski SMS i email podsetnici 24h pre termina smanjuju broj nepojavljivanja za 80%.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trebate sličan sajt za vaš salon?
            </h2>
            <p className="text-lg opacity-90">
              Kreirajmo zajedno digitalnu prezentaciju koja će transformisati vaš biznis i privući nove klijente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Započnimo projekat</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-rose-600" asChild>
                <Link to="/portfolio">Pogledaj više radova</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalonElegance;