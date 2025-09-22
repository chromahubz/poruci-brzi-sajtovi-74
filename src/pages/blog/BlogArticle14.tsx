import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, TrendingUp, MapPin, Star, Search, Smartphone, FileText, Users, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle14 = () => {
  const quizQuestions = [
    {
      question: "Koji procenat pretrage na Google-u je lokalno orijentisano?",
      options: [
        "25% svih pretarga",
        "46% svih pretarga",
        "60% svih pretarga",
        "80% svih pretarga"
      ],
      correct: 1,
      explanation: "Istraživanja pokazuju da 46% svih Google pretarga ima lokalnu nameru, što čini Local SEO ključnim za mala preduzeća."
    },
    {
      question: "Koliko ljudi traži 'blizu mene' usluge na mobilnim uređajima?",
      options: [
        "15% mobilnih korisnika",
        "35% mobilnih korisnika",
        "76% mobilnih korisnika",
        "90% mobilnih korisnika"
      ],
      correct: 2,
      explanation: "76% korisnika koji pretražuju lokalne usluge na mobilnim uređajima poseti radnju u roku od 24 sata."
    },
    {
      question: "Koliko negativnih recenzija može značajno da umanji broj klijenata?",
      options: [
        "1-2 negativne recenzije nemaju uticaj",
        "3-5 negativnih recenzija može smanjiti broj klijenata za 20%",
        "Tek 10+ negativnih recenzija ima uticaj",
        "Samo prosečna ocena ispod 3 zvezdice ima uticaj"
      ],
      correct: 1,
      explanation: "Već 3-5 negativnih recenzija bez odgovora može značajno da smanji broj potencijalnih klijenata za 20-40%."
    },
    {
      question: "Koja je optimalna dužina Google My Business opisa?",
      options: [
        "50-100 karaktera",
        "100-200 karaktera",
        "200-750 karaktera",
        "750+ karaktera"
      ],
      correct: 2,
      explanation: "Google My Business opis treba da bude između 200-750 karaktera da bi bio dovoljno informativan a da ne bude skraćen."
    },
    {
      question: "Koliko često treba ažurirati Google My Business profil?",
      options: [
        "Jednom godišnje je dovoljno",
        "Svakih 6 meseci",
        "Mesečno sa novim sadržajem",
        "Nedeljno sa fotografijama i postovima"
      ],
      correct: 3,
      explanation: "Redovno ažuriranje (mesečno) sa novim fotografijama, postovima i informacijama poboljšava Local SEO rangiranje."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 px-4 bg-gradient-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="secondary" className="text-sm">
                Lokalni SEO
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Poruči Sajt Tim</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>5. februar 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>22 min čitanja</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Local SEO za Srpske Biznise - Kako Biti Prvi na Google Maps u 2025
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Kompletni vodič kroz Local SEO optimizaciju za mala preduzeća u Srbiji. Google My Business, lokalne recenzije, citati i sve što trebate za dominaciju lokalnih pretarga.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Local SEO optimizacija za srpske biznise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Kada neko u Beogradu, Novom Sadu ili bilo kom gradu u Srbiji traži "frizerski salon blizu mene" ili "advokat u Nišu", da li se vaš biznis pojavljuje u prvim rezultatima? Ako ne, gubite ogromnu priliku.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Local SEO (lokalna SEO optimizacija) je ključ uspeha za sve biznise koji pružaju usluge na određenoj geografskoj lokaciji. U ovom detaljnom vodiču ćemo vam objasniti kako da optimizujete svoj biznis za lokalne pretrage i postanete dominantni u vašoj oblasti.
              </p>
            </div>

            {/* Key Statistics Card */}
            <Card className="my-12 bg-gradient-to-r from-green-50 to-blue-50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Ključne Local SEO Statistike 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Lokalne pretrage</span>
                    <span className="text-2xl font-bold text-green-600">46%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Mobile "blizu mene"</span>
                    <span className="text-2xl font-bold text-blue-600">76%</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Poseta u 24h</span>
                    <span className="text-2xl font-bold text-purple-600">88%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">GMB uticaj na odluku</span>
                    <span className="text-2xl font-bold text-orange-600">90%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chapter 1: Šta je Local SEO */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Search className="w-8 h-8 text-primary" />
                Šta je Local SEO i Zašto je Ključan za Srpske Biznise
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Definicija Local SEO</h3>
              <p className="mb-6 leading-relaxed">
                Local SEO je skup tehnika optimizacije koji pomaže vašem biznisu da se bolje rangira u lokalnim pretragama. Kada neko traži uslugu u vašem gradu, Local SEO osigurava da se vaš biznis pojavi među prvim rezultatima na Google-u i Google Maps-u.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Zašto je Local SEO Kritičan u Srbiji?</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      Rast Mobilnih Pretarga
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">U Srbiji sve više ljudi koristi mobilne uređaje za pretrage:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        72% pretarga se vrši sa mobilnih
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        "Blizu mene" pretrage porasle 300%
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Trenutna lokacija je ključna
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Ponašanje Srpskih Potrošača
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Specifičnosti lokalnog tržišta:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        85% proveri recenzije pre odluke
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Preferiraju lokalne preporuke
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Važni su radno vreme i kontakt
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Primer Lokalnih Pretarga u Srbiji</h3>
              <Card className="mb-8 bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">Tipične pretrage srpskih korisnika:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Beograd:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• "zubar Vračar"</li>
                        <li>• "frizerski salon Zemun"</li>
                        <li>• "autoservic Novi Beograd"</li>
                        <li>• "advokat za nekretnine Beograd"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Ostali gradovi:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• "kafić Novi Sad centar"</li>
                        <li>• "veterinarska stanica Niš"</li>
                        <li>• "računovodstvena agencija Kragujevac"</li>
                        <li>• "fotografska usluga Subotica"</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 2: Google My Business Optimizacija */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-primary" />
                Google My Business - Temelj Local SEO Strategije
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Google My Business (GMB) je besplatni alat koji je ključan za Local SEO uspeh. Pravilno podešen GMB profil može drastično da poveća vašu vidljivost u lokalnim pretragama.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Korak 1: Kreiranje i Verifikacija GMB Profila</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Osnovne Informacije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Naziv biznisa:</strong> Koristite tačan naziv kao što je registrovan<br/>
                          <span className="text-sm text-muted-foreground">Primer: "Frizerski salon Martina" (ne "Najbolji frizerski salon u Beogradu")</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Kategorija:</strong> Odaberite primarnu kategoriju koja najbolje opisuje vaš biznis<br/>
                          <span className="text-sm text-muted-foreground">Primer: "Hair salon" za frizerske salone</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Adresa:</strong> Tačna adresa sa brojem ulice i poštanskim brojem<br/>
                          <span className="text-sm text-muted-foreground">Primer: "Knez Mihailova 15, 11000 Beograd"</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Kontakt Informacije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Telefon:</strong> Lokalni broj sa pozivnim brojem<br/>
                          <span className="text-sm text-muted-foreground">Primer: +381 11 123 4567</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Sajt:</strong> URL vašeg zvaničnog sajta<br/>
                          <span className="text-sm text-muted-foreground">Primer: https://www.vasbizniss.rs</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Radno vreme:</strong> Precizne sate rada za svaki dan<br/>
                          <span className="text-sm text-muted-foreground">Uključite i specifične satnice za praznike</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Korak 2: Optimizacija GMB Opisa</h3>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Šablon za GMB Opis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Primer za frizerski salon:</h4>
                    <p className="text-sm leading-relaxed">
                      "Frizerski salon Martina u centru Beograda pruža profesionalne usluge šišanja, farbi ranja i tretmana kose za žene i muškarce. Sa 15 godina iskustva, naš tim sertifikovanih frizera koristi najkvalitetnije proizvode L'Oreal i Schwarzkopf. Specijalizujemo se za moderne frizure, balayage tehnike i keratinski tretman. Radimo ponedeljak-subota 9-19h. Rezervacije na 011/123-4567 ili online rezervacija dostupna."
                    </p>
                  </div>
                  <h4 className="font-semibold mb-2">Ključni elementi:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Naziv lokacije (Beograd, centar)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Ključne usluge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Godine iskustva i ekspertiza</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Brendovi koje koristite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Specijalizacije</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Radno vreme i kontakt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Korak 3: Fotografije i Virtuelna Tura</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Obavezne Fotografije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Logo (kvadratni format 720x720px)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Naslovna fotografija (1024x576px)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Eksterijer lokala (minimum 3 fotografije)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Interijer (minimum 5 fotografija)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Tim/zaposleni (minimum 2 fotografije)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Dodatne Fotografije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Proizvodi/usluge u akciji</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Zadovoljni klijenti (uz dozvolu)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Radni proces</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Specijalne ponude</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>360° virtuelna tura</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 3: Upravljanje Recenzijama */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-primary" />
                Upravljanje Recenzijama - Izgradnja Poverenja
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Recenzije su jedan od najvažnijih faktora Local SEO rangiranja. 90% potrošača čita recenzije pre donošenja odluke, a čak i jedna negativna recenzija može značajno da utiče na vaš biznis.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Strategija Prikupljanja Pozitivnih Recenzija</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Aktivno Traženje Recenzija</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Najbolji momenti za traženje recenzije:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Odmah nakon uspešno završene usluge</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Kada klijent izrazi zadovoljstvo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Putem email-a 24h nakon usluge</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Preko SMS-a sa direktnim linkom</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Šablon za Traženje Recenzije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Email šablon:</h4>
                      <p className="text-sm leading-relaxed mb-4">
                        "Poštovana/i [IME],<br/><br/>
                        Hvala vam što ste posetili naš [VRSTA BIZNISA] juče. Nadamo se da ste zadovoljni našom uslugom.<br/><br/>
                        Vaše mišljenje je veoma važno za nas i buduće klijente. Da li biste mogli da podelite svoje iskustvo u kratkoj recenziji na Google-u?<br/><br/>
                        Link za recenziju: [GOOGLE REVIEW LINK]<br/><br/>
                        Hvala unapred!<br/>
                        Tim [NAZIV BIZNISA]"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Odgovaranje na Recenzije</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Pozitivne Recenzije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Šablon odgovora:</p>
                    <div className="bg-green-50 p-3 rounded text-sm">
                      "Hvala vam puno, [IME]! Drago nam je što ste zadovoljni našom uslugom. Vaša preporuka nam mnogo znači i radujemo se vašoj sledećoj poseti. Tim [NAZIV]"
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Odgovorite u roku od 24h</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Personalizujte odgovor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Pozovite na ponovnu posetu</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Negativne Recenzije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Šablon odgovora:</p>
                    <div className="bg-red-50 p-3 rounded text-sm">
                      "Izvinjemo se što niste zadovoljni našom uslugom, [IME]. Vaše povratne informacije su važne za nas. Molimo vas kontaktirajte nas na [TELEFON] da bismo rešili ovaj problem. Tim [NAZIV]"
                    </div>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <span>Odgovorite u roku od 2h</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <span>Budite profesionalni</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <span>Ponudite rešenje</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 4: Lokalni Citati i NAP */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Lokalni Citati (NAP) - Konzistentnost je Ključ
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                NAP (Name, Address, Phone) konzistentnost je kritična za Local SEO. Google mora da "vidi" iste informacije o vašem biznisu na internetu da bi vam verovao i bolje vas rangirao.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Glavni Direktorijumi za Srpske Biznise</h3>

              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Lokalni Direktorijumi (Obavezni)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Besplatni direktorijumi:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 011info.com (Beograd)</li>
                          <li>• mojgrad.rs</li>
                          <li>• gradsubotica.co.rs</li>
                          <li>• infokg.rs (Kragujevac)</li>
                          <li>• vojvodinainfo.rs</li>
                          <li>• kraljevo.rs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Specijalizovani:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• zeltipages.rs</li>
                          <li>• businessdirectory.rs</li>
                          <li>• industrybg.com</li>
                          <li>• mojabaza.rs</li>
                          <li>• firmama.rs</li>
                          <li>• ekapija.com</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Međunarodni Direktorijumi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Glavni:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Bing Places</li>
                          <li>• Apple Maps</li>
                          <li>• Yelp</li>
                          <li>• Foursquare</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Društvene mreže:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Facebook Page</li>
                          <li>• Instagram Business</li>
                          <li>• LinkedIn Company</li>
                          <li>• YouTube Channel</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Industrija-specifični:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• TripAdvisor (ugostiteljstvo)</li>
                          <li>• Booking.com (smeštaj)</li>
                          <li>• Zdravlje.rs (zdravstvo)</li>
                          <li>• Pravnikov.rs (pravo)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">NAP Konzistentnost - Ček Lista</h3>
              <Card className="mb-8 bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">Proverite da su isti na svim lokacijama:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Naziv biznisa:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>✓ "Frizerski salon Martina"</li>
                        <li>✗ "Salon Martina"</li>
                        <li>✗ "Martina - frizerski salon"</li>
                        <li>✗ "Frizerski salon Martina DOO"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Adresa:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>✓ "Knez Mihailova 15, 11000 Beograd"</li>
                        <li>✗ "Knez Mihailova br.15, Beograd"</li>
                        <li>✗ "Knez Mihailova 15, Stari grad"</li>
                        <li>✗ "K. Mihailova 15, Beograd 11000"</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 5: Lokalne Ključne Reči */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Lokalne Ključne Reči - Strategija za Srpsko Tržište
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Tipovi Lokalnih Ključnih Reči</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Geo + Usluga</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Kombinovanje usluge sa lokacijom:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Primeri:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "frizerski salon Beograd"</li>
                          <li>• "zubar Novi Sad"</li>
                          <li>• "advokat Niš"</li>
                          <li>• "autoservic Kragujevac"</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Specifičnije opcije:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "frizerski salon Vračar"</li>
                          <li>• "zubar Petrovaradin"</li>
                          <li>• "advokat Mediana"</li>
                          <li>• "autoservic Aerodrom"</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. "Blizu mene" i Slični Izrazi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Mobilne pretrage sa namerom neposredne posete:</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Osnovno:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "frizerski salon blizu mene"</li>
                          <li>• "zubar u blizini"</li>
                          <li>• "najbliži autoservic"</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Sa vremenom:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "frizerski salon otvoren sada"</li>
                          <li>• "zubar neđeljom"</li>
                          <li>• "autoservic 24h"</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Sa uslugom:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "šišanje blizu mene"</li>
                          <li>• "plombiranje zuba blizu"</li>
                          <li>• "popravka kočnica blizu"</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Komercijalne Lokalne Ključne Reči</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Ključne reči sa kupovnom namerom:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Cena-orijentisane:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "jeftini frizerski salon Beograd"</li>
                          <li>• "cena šišanja Novi Sad"</li>
                          <li>• "povoljni zubar Niš"</li>
                          <li>• "popust autoservic Kragujevac"</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Kvalitet-orijentisane:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• "najbolji frizerski salon Beograd"</li>
                          <li>• "profesionalni zubar Novi Sad"</li>
                          <li>• "pouzdani autoservic Niš"</li>
                          <li>• "iskusni advokat Kragujevac"</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Kako Implementirati Lokalne Ključne Reči</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Na Sajtu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Title tag:</strong><br/>
                          <span className="text-sm">"Frizerski Salon Martina - Šišanje i Farbanje | Vračar, Beograd"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>H1 naslov:</strong><br/>
                          <span className="text-sm">"Profesionalni Frizerski Salon u Beogradu"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Meta opis:</strong><br/>
                          <span className="text-sm">"Frizerski salon Martina u centru Beograda. Profesionalno šišanje, farbanje i tretmani kose. Rezervišite termin ☎ 011/123-4567"</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">U Sadržaju</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Stranica "O nama":</strong><br/>
                          <span className="text-sm">Pomenuti lokaciju i okolne četvrti</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Stranica usluga:</strong><br/>
                          <span className="text-sm">Kombinovati usluge sa lokacijom</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Blog članci:</strong><br/>
                          <span className="text-sm">Pisati o lokalnim trendovima i događajima</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 6: Tehnička Local SEO Optimizacija */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Tehnička Local SEO Optimizacija
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Schema Markup za Lokalne Biznise</h3>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>LocalBusiness Schema - Obavezno</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-xs"><code>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Frizerski Salon Martina",
  "image": "https://www.salon-martina.rs/images/logo.jpg",
  "telephone": "+381-11-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Knez Mihailova 15",
    "addressLocality": "Beograd",
    "addressRegion": "Grad Beograd",
    "postalCode": "11000",
    "addressCountry": "RS"
  },
  "openingHours": [
    "Mo-Fr 09:00-19:00",
    "Sa 09:00-15:00"
  ],
  "url": "https://www.salon-martina.rs",
  "priceRange": "$$"
}`}</code></pre>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Mobilna Optimizacija</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Brzina Učitavanja</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Sajt mora da se učita za manje od 3 sekunde</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Optimizujte slike (WebP format)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Koristite CDN za brže učitavanje</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Minimizirajte CSS i JavaScript</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Korisničko Iskustvo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Velike dugmad za poziv (min 44px)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Lako dostupne kontakt informacije</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Click-to-call funkcionalnost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Google Maps integracija</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 7: Merenje i Praćenje Rezultata */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Merenje Local SEO Rezultata
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Ključne Metrike za Praćenje</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Google My Business Metrike</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Broj pregleda profila</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Pozivi sa profila</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Zahtevi za rute/pravac</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Klik na sajt</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Pretrage po brende vs kategoriji</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Rangiranje Ključnih Reči</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Pozicije za geo+usluga kombinacije</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>"Blizu mene" rangiranje</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Google Maps pozicije</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Local pack appearanse</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Voice search optimizacija</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Alati za Local SEO Praćenje</h3>
              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Besplatni Alati</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Google Alati:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Google My Business Insights</li>
                          <li>• Google Analytics</li>
                          <li>• Google Search Console</li>
                          <li>• Google Trends</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Rangiranje:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• LocalFalcon (osnovni plan)</li>
                          <li>• BrightLocal (trial)</li>
                          <li>• Moz Local (ograničeno)</li>
                          <li>• SERPs.com</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Recenzije:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Google notifikacije</li>
                          <li>• ReviewTrackers (trial)</li>
                          <li>• Podium (osnovni)</li>
                          <li>• Manual tracking</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 8: Česte Greške */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                10 Najčešćih Local SEO Grešaka u Srbiji
              </h2>

              <div className="space-y-4">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">1. Nekonzistentni NAP Podaci</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Različite adrese i brojevi telefona na različitim lokacijama</p>
                    <p><strong>Rešenje:</strong> Napravite NAP audit i standardizujte sve informacije</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">2. Ignorisanje Negativnih Recenzija</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Ne odgovaranje na negativne recenzije ili defensivni ton</p>
                    <p><strong>Rešenje:</strong> Profesionalno i brzo odgovoriti na svaku recenziju</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">3. Nepotpun Google My Business Profil</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Manjkaju fotografije, radno vreme, opis ili kategorije</p>
                    <p><strong>Rešenje:</strong> Popuniti 100% GMB profil sa svim dostupnim opcijama</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">4. Zanemarivanje Mobilne Optimizacije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Sajt nije optimizovan za mobilne uređaje</p>
                    <p><strong>Rešenje:</strong> 76% lokalnih pretarga je sa mobilnih - prioritet broj 1</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">5. Falsifikovanje Recenzija</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Kupovanje lažnih recenzija ili traženje od rođaka</p>
                    <p><strong>Rešenje:</strong> Google može da kaznni biznis - fokus na organske recenzije</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Action Plan */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">30-Dnevni Action Plan za Local SEO</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Nedelja 1: Osnove</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Kreirati/optimizovati Google My Business profil</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Dodati 10+ fotografija (interijer, eksterijer, tim)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Napisati optimizovan GMB opis (200-750 karaktera)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Podesiti tačno radno vreme i kontakt informacije</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Nedelja 2: Citati i Direktorijumi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Registrovati biznis u 10 glavnih lokalnih direktorijuma</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Osigurati NAP konzistentnost na svim lokacijama</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Kreirati/optimizovati Facebook Business stranicu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Dodati biznis na Bing Places i Apple Maps</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Nedelja 3: Sajt Optimizacija</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Optimizovati title tagove sa lokalnim ključnim rečima</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Dodati LocalBusiness Schema markup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Kreirati "Lokacija" ili "Kako do nas" stranicu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Proveriti i ubrzati mobilno učitavanje sajta</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">Nedelja 4: Recenzije i Praćenje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Implementirati sistem za traženje recenzija</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Postaviti Google Analytics i Search Console</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Kreirati spreadsheet za praćenje rangiranja</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Pokrenuti Google Ads kampanju za prioritetne ključne reči</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quiz Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Testirajte Svoje Local SEO Znanje</h2>
              <Quiz questions={quizQuestions} />
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="text-center py-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">
                    Spremni da dominirate lokalne pretrage?
                  </h2>
                  <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                    Naš tim Local SEO stručnjaka može da implementira ovu strategiju za vaš biznis. Garantujemo poboljšanje pozicija u roku od 60 dana ili vraćamo novac.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link to="/kontakt">
                        Počnite Local SEO Optimizaciju
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/cene">
                        Pogledajte Cene Local SEO
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle14;