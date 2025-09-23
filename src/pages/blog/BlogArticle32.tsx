import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Globe, Search, TrendingUp, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle32 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <Badge variant="secondary" className="w-fit">
              SEO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              SEO za lokalne biznise u Srbiji: Kompletna strategija za 2025.
            </h1>
            <p className="text-xl text-muted-foreground">
              Kako da pozicionirate svoj lokalni biznis na vrh Google pretrage i privučete više kupaca iz vaše okoline
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>4. januar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Nikola Jovanović</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min čitanja</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Podeli
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
              alt="Local SEO strategy and Google Maps optimization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <p className="text-lg leading-relaxed mb-6">
              Lokalni SEO je ključan za biznise koji žele da privuku kupce iz svoje okoline.
              76% ljudi koji pretražuju lokalne usluge na mobilnom telefonu poseti biznis u roku od 24 sata.
              Evo kako da iskoristite ovu mogućnost.
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Search className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Statistike lokalnog SEO-a</h3>
                  <div className="text-green-700 text-sm space-y-1">
                    <p>• 46% svih Google pretaga traži lokalne informacije</p>
                    <p>• 72% korisnika koji traže lokalne usluge poseti fizičku lokaciju</p>
                    <p>• 97% korisnika koristi internet da pronađe lokalne biznise</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Google My Business optimizacija</h2>

            <p className="mb-4">
              Google My Business (GMB) je najvažniji faktor lokalnog SEO-a. Optimizovani GMB profil može
              dramatično povećati vašu vidljivost u lokalnim pretragama.
            </p>

            <div className="space-y-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    Kompletni profil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div>• <strong>Naziv:</strong> Koristite zvanični naziv bez keyword stuffing-a</div>
                    <div>• <strong>Kategorija:</strong> Izaberite najrelevantniju primarnu kategoriju</div>
                    <div>• <strong>Adresa:</strong> Tačna adresa koja se koristi na sajtu i drugim platformama</div>
                    <div>• <strong>Telefon:</strong> Lokalni broj telefona, ne call center</div>
                    <div>• <strong>Radno vreme:</strong> Ažurno i tačno radno vreme</div>
                    <div>• <strong>Website:</strong> Link na optimizovanu landing stranicu</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    Fotografije i virtuelni tur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div>• Dodajte minimum 10 kvalitetnih fotografija</div>
                    <div>• Uključite logo, enterijer, eksterijer, proizvode/usluge</div>
                    <div>• Redovno dodajte nove fotografije (mesečno)</div>
                    <div>• Razmislite o 360° virtuelnom turu</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    Opis i proizvodi/usluge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <div>• Napišite privlačan opis do 750 karaktera</div>
                    <div>• Uključite ključne reči prirodno</div>
                    <div>• Dodajte sve proizvode/usluge sa cenama</div>
                    <div>• Koristite atribute (parking, Wi-Fi, pristupačnost)</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Lokalne ključne reči i content strategija</h2>

            <p className="mb-4">
              Identifikovanje pravih lokalnih ključnih reči je osnova uspešne lokalne SEO strategije.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Tipovi lokalnih ključnih reči:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Eksplicitno lokalne:</strong>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    <li>• "frizerski salon Beograd"</li>
                    <li>• "zubar Novi Sad"</li>
                    <li>• "restoran Kragujevac"</li>
                  </ul>
                </div>
                <div>
                  <strong>Implicitno lokalne:</strong>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    <li>• "frizerski salon u blizini"</li>
                    <li>• "najbolji zubar"</li>
                    <li>• "restoran otvoreno sada"</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Content strategija za lokalni SEO</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Lokalne landing stranice:</strong> Kreirajte stranice za svaki grad/opštinu gde poslujete
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Lokalni blog sadržaj:</strong> "Top 10 restorana u Beogradu", "Vodič kroz Novi Sad"
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Event coverage:</strong> Pokrijte lokalne dogažaje i aktivnosti
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Customer stories:</strong> Priče zadovoljnih lokalnih kupaca
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Lokalne citacije i NAP konzistentnost</h2>

            <p className="mb-4">
              NAP (Name, Address, Phone) konzistentnost kroz web je kritična za lokalni SEO.
              Google mora videti identične informacije na svim platformama.
            </p>

            <Card className="bg-yellow-50 border-yellow-200 mb-6">
              <CardContent className="p-4">
                <p className="text-yellow-800 text-sm">
                  ⚠️ <strong>Važno:</strong> Jedna različita cifra u broju telefona ili adrese može
                  značajno uticati na vaše lokalne pozicije u pretragama.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mt-6 mb-3">Ključne platforme za citacije u Srbiji</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Opšte platforme</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>• <strong>Facebook Business:</strong> Najpopularnija u Srbiji</div>
                  <div>• <strong>Yelp:</strong> Međunarodna prepoznatljivost</div>
                  <div>• <strong>TripAdvisor:</strong> Za turizam i ugostiteljstvo</div>
                  <div>• <strong>PlanPlus Online:</strong> Lokalni biznis direktorijum</div>
                  <div>• <strong>InfoKg:</strong> Za Kragujevac i okolinu</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Specijalizovane platforme</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>• <strong>Wellness:</strong> Za spa i fitness centre</div>
                  <div>• <strong>Restorater:</strong> Za restorane</div>
                  <div>• <strong>Lalafo:</strong> Lokalni oglasi</div>
                  <div>• <strong>HaloOglasi:</strong> Najpoznatiji oglas portal</div>
                  <div>• <strong>KupujemProdajem:</strong> E-commerce fokus</div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Online recenzije i reputation management</h2>

            <p className="mb-4">
              Online recenzije su među top 3 ranking faktora za lokalni SEO.
              91% korisnika čita recenzije pre posete biznisu.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Strategija za upravljanje recenzijama:</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>1. Aktivno traži recenzije:</strong>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    <li>• Pošaljite email sa linkom nakon usluge</li>
                    <li>• QR kod na računu koji vodi na Google reviews</li>
                    <li>• Lična molba zadovoljnim kupcima</li>
                  </ul>
                </div>
                <div>
                  <strong>2. Odgovarajte na sve recenzije:</strong>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    <li>• Pozitivne: Zahvalite se i pozovite na povratak</li>
                    <li>• Negativne: Izvinjenje i ponuda rešenja offline</li>
                    <li>• Odgovorite u roku od 24 sata</li>
                  </ul>
                </div>
                <div>
                  <strong>3. Monitorirajte reputaciju:</strong>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    <li>• Postavite Google Alerts za ime brenda</li>
                    <li>• Redovno proveravajte sve platforme</li>
                    <li>• Analizirajte feedback za poboljšanja</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Tehnički lokalni SEO</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Schema Markup za lokalne biznise</h3>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Ključni schema tipovi:</h4>
              <pre className="text-sm overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Frizerski salon Stil",
  "image": "https://salon-stil.rs/logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Knez Mihailova 15",
    "addressLocality": "Beograd",
    "postalCode": "11000",
    "addressCountry": "RS"
  },
  "telephone": "+381114567890",
  "url": "https://salon-stil.rs",
  "openingHours": ["Mo-Fr 09:00-20:00", "Sa 09:00-15:00"]
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Mobilna optimizacija</h3>

            <p className="mb-4">
              Preko 60% lokalnih pretaga dolazi sa mobilnih uređaja. Mobilna optimizacija je obavezna.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Responsive design koji radi na svim uređajima</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Brzina učitavanja manja od 3 sekunde</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Veliki touch targets (min 44px)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Lako dostupni kontakt informacije</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Click-to-call funkcionalnost</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Praćenje rezultata lokalnog SEO-a</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Google Analytics metrike
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>• Organski lokalni saobraćaj</div>
                  <div>• Konverzije iz lokalnih pretaga</div>
                  <div>• Bounce rate za lokalne stranice</div>
                  <div>• Pozivi sa sajta (call tracking)</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Google My Business Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>• Impression-i u pretragama</div>
                  <div>• Klikovi na sajt</div>
                  <div>• Zahtevi za direkcije</div>
                  <div>• Pozivi direktno iz GMB-a</div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Česti problemi i rešenja</h2>

            <div className="space-y-4 mb-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">Problem: Nizak ranking u "near me" pretragama</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenja:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Poboljšajte Google My Business kompletnost</li>
                    <li>• Povećajte broj pozitivnih recenzija</li>
                    <li>• Dodajte više lokalnih citacija</li>
                    <li>• Optimizujte za mobilne uređaje</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800">Problem: GMB profil se ne pojavljuje u Maps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenja:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Verifikujte profil poštom ili telefonom</li>
                    <li>• Proverite NAP konzistentnost</li>
                    <li>• Uklonite duplikate profila</li>
                    <li>• Kontaktirajte Google support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Akcijski plan za 30 dana</h2>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-blue-800">Nedela 1-2: Osnove</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Optimizujte Google My Business profil</li>
                <li>• Audit NAP konzistentnosti</li>
                <li>• Instaliranje Google Analytics i Search Console</li>
                <li>• Kreiranje lokalnih landing stranica</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-green-800">Nedela 3-4: Ekspanzija</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Dodavanje citacija na ključne platforme</li>
                <li>• Implementacija schema markup-a</li>
                <li>• Pokretanje strategije za recenzije</li>
                <li>• Kreiranje lokalnog blog sadržaja</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Zaključak</h2>

            <p className="mb-6">
              Lokalni SEO je maraton, ne sprint. Rezultati se obično vide nakon 3-6 meseci konzistentnog rada.
              Fokusirajte se na kvalitet pre kvantiteta - bolje je imati 50 kvalitetnih citacija nego 200 nekvalitetnih.
            </p>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-green-800">🎯 Prioritet akcija</h3>
                <p className="text-green-700 mb-4">
                  Počnite sa Google My Business optimizacijom - to je najbrži način da vidite rezultate.
                  Zatim fokus na recenzije i lokalne citacije. Tehnički SEO dolazi nakon ovih osnova.
                </p>
                <div className="text-sm text-green-600">
                  💡 Pro tip: Jedna dobra lokalna recenzija nedeljno je bolja od 10 recenzija mesečno.
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Slični članci</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Content Marketing</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/31" className="hover:text-primary transition-colors">
                      Content Marketing za lokalne biznise: Strategije koje rade
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Kako kreirati sadržaj koji privlači lokalne kupce
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Google Ads</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/30" className="hover:text-primary transition-colors">
                      Google Ads za lokalne biznise: Kompletni vodič
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Kako pokrenuti uspešne lokalne Google Ads kampanje
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Potrebna vam je lokalna SEO strategija?</h2>
            <p className="text-lg opacity-90">
              Pomozićemo vam da se pojavite na vrhu lokalnih pretaga i privučete više kupaca
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Zatražite SEO analizu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle32;