import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, MapPin, Phone, Mail, Star, Users, Coffee, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const KafeteriaBalkan = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-8 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
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
                  Kafić / Restoran
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Kafeteria Balkan
                </h1>
                <p className="text-xl text-muted-foreground">
                  Autentična balkanska atmosfera sa modernim web prisustvom. Kreirana je kompletna digitalna prezentacija koja odražava duh tradicije i gostoprimstvo.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Online rezervacije</Badge>
                <Badge variant="outline">Responsive design</Badge>
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
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Kafeteria Balkan"
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
                <Coffee className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Online meni</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interaktivan meni sa fotografijama jela, cenama i opisima tradicionalnih balkanskih specijaliteta.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Rezervacije</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sistem online rezervacija stolova sa kalendarom dostupnosti i automatskim potvrdama.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Lokacija i mapa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrisana Google mapa sa tačnom lokacijom, smernicama za dolazak i parking informacijama.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Recenzije</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sekcija za korisničke recenzije i ocene, povezana sa Google Reviews za veću credibilnost.
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
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Homepage design"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Početna stranica</h3>
              <p className="text-muted-foreground">
                Topla i pozivna početna stranica koja odmah dočarava balkansku atmosferu sa autentičnim fotografijama i pozivom na akciju.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Menu page"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Stranica menija</h3>
              <p className="text-muted-foreground">
                Elegantno organizovan meni sa kategorijama, fotografijama jela i detaljnim opisima tradicionalnih recepata.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Reservation system"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Sistem rezervacija</h3>
              <p className="text-muted-foreground">
                Intuitivan kalendar za biranje datuma i vremena, sa opcijama za broj osoba i specijalne zahteve.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Contact and location"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <h3 className="text-xl font-semibold">Kontakt i lokacija</h3>
              <p className="text-muted-foreground">
                Kompletne kontakt informacije sa interaktivnom mapom, radnim vremenima i vezama za društvene mreže.
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
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Responsive dizajn</h3>
                    <p className="text-muted-foreground text-sm">
                      Sajt se savršeno prilagođava svim uređajima - od mobilnih telefona do desktop računara.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">SEO optimizacija</h3>
                    <p className="text-muted-foreground text-sm">
                      Kompletna optimizacija za pretražače, meta tagovi, strukturirani podaci za lokalne biznise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Brzo učitavanje</h3>
                    <p className="text-muted-foreground text-sm">
                      Optimizovane slike, lazy loading i moderan bundling za maksimalnu brzinu učitavanja.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Admin panel</h3>
                    <p className="text-muted-foreground text-sm">
                      Jednostavan CMS za ažuriranje menija, cena, radnog vremena i najava bez tehničkog znanja.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Rezultati projekta</h2>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-amber-600">300%</div>
                  <div className="text-sm text-muted-foreground">Povećanje online rezervacija</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-amber-600">85%</div>
                  <div className="text-sm text-muted-foreground">Više mobilnih poseta</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-amber-600">4.8★</div>
                  <div className="text-sm text-muted-foreground">Prosečna ocena korisnika</div>
                </Card>

                <Card className="text-center p-4">
                  <div className="text-2xl font-bold text-amber-600">45%</div>
                  <div className="text-sm text-muted-foreground">Rast prometa u restoranu</div>
                </Card>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Klijent o projektu:</h3>
                <p className="text-muted-foreground italic">
                  "Sajt je превазишао sva naša očekivanja. Broj rezervacija se utrostručio, a gosti često komentarišu kako im se dopada što mogu da vide meni unapred. Jednostavan je za korišćenje i odlično predstavlja atmosferu našeg kafića."
                </p>
                <div className="mt-3 text-sm font-medium">
                  - Milica Stojanović, vlasnica Kafeteria Balkan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Želite sličan sajt za vaš biznis?
            </h2>
            <p className="text-lg opacity-90">
              Kreirajmo zajedno digitalnu prezentaciju koja će privući nove kupce i povećati vašu prodaju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Započnimo projekat</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600" asChild>
                <Link to="/portfolio">Pogledaj više radova</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KafeteriaBalkan;