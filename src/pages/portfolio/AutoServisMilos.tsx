import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, Wrench, Car, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AutoServisMilos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-8 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
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
                  Auto servis
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Auto servis "Miloš"
                </h1>
                <p className="text-xl text-muted-foreground">
                  Porodični auto servis sa 20-godišnjim iskustvom u Novom Sadu. Digitalizacija koja je dovela do 180% povećanja broja klijenata i potpune modernizacije poslovanja.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Appointment system</Badge>
                <Badge variant="outline">Vehicle tracking</Badge>
                <Badge variant="outline">SMS notifications</Badge>
                <Badge variant="outline">Local SEO</Badge>
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
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Auto servis Miloš"
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
                <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Online zakazivanje</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Napredni sistem zakazivanja pregleda i servisa sa kalendarom i automatskim potvrdama.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Car className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Registar vozila</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digitalni registar svih vozila sa istorijom servisa, delovima i podsetnicima za održavanje.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Katalog usluga</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detaljno opisane sve usluge sa cenama, trajanjem i potrebnim delovima za transparentnost.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">SMS obaveštenja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatska obaveštenja o statusu vozila, završetku rada i podsetnici za redovne servise.
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
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Homepage design"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Početna stranica</h3>
              <p className="text-muted-foreground">
                Profesionalna početna stranica koja odmah prikazuje poverenje i iskustvo sa jasnim pozivima na akciju.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Services page"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Katalog usluga</h3>
              <p className="text-muted-foreground">
                Organizovane usluge po kategorijama vozila sa jasnim cenama i opisima potrebnih radova.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Booking system"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Sistem zakazivanja</h3>
              <p className="text-muted-foreground">
                Intuitivno zakazivanje sa izborom usluge, datuma, vremena i osnovnim podacima o vozilu.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Vehicle tracking"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Praćenje vozila</h3>
              <p className="text-muted-foreground">
                Klijenti mogu da prate status svog vozila u realnom vremenu i prime obaveštenja o napretku.
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
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">VIN decoder integracija</h3>
                    <p className="text-muted-foreground text-sm">
                      Automatsko prepoznavanje vozila preko VIN broja sa specifikacijama i potrebnim delovima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Inventory management</h3>
                    <p className="text-muted-foreground text-sm">
                      Sistem za praćenje delova, naručivanje i automatsko upozoravanje kada nešto ponestaje.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Digital work orders</h3>
                    <p className="text-muted-foreground text-sm">
                      Digitalni radni nalozi sa fotografijama, check-listama i elektronskim potpisima.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Local SEO optimizacija</h3>
                    <p className="text-muted-foreground text-sm">
                      Kompletna optimizacija za lokalne pretrage "auto servis Novi Sad" i srodne ključne reči.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Rezultati projekta</h2>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600">180%</div>
                  <div className="text-sm text-muted-foreground">Povećanje broja klijenata</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600">90%</div>
                  <div className="text-sm text-muted-foreground">Online zakazivanja</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600">4.7★</div>
                  <div className="text-sm text-muted-foreground">Google Reviews ocena</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-blue-600">55%</div>
                  <div className="text-sm text-muted-foreground">Rast prihoda</div>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Vlasnik o projektu:</h3>
                <p className="text-muted-foreground italic">
                  "Nikad nisam verovao da će digitalizacija toliko pomoći mom poslu. Sada ljudi zakazuju termine online, mogu da prate stanje svog vozila, a ja imam potpunu kontrolu nad svim radovima. Broj klijenata se skoro uduplao, a posao je efikasniji nego ikad!"
                </p>
                <div className="mt-3 text-sm font-medium">
                  - Miloš Jovanović, vlasnik Auto servisa "Miloš"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Što su klijenti posebno cenili</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Transparentnost</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Klijenti u svakom momentu znaju na čemu se radi, koliko košta i kada će biti gotovo. Nema iznenađenja.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Car className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Istorija vozila</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digitalna baza podataka o svakom vozilu omogućava bolje planiranje održavanja i brže dijagnoze.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Lokalna reputacija</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optimizacija za lokalne pretrage dovela je do konstantnog priliva novih klijenata iz Novog Sada.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500 to-slate-600 text-white">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Imate auto servis ili slični biznis?
            </h2>
            <p className="text-lg opacity-90">
              Digitalizujmo vaš biznis i povećajmo efikasnost. Kreirajmo sajt koji će privući nove klijente i olakšati vam svakodnevni rad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Započnimo projekat</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/portfolio">Pogledaj više radova</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoServisMilos;