import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, ExternalLink, CheckCircle, Star, Lightbulb, Target, AlertTriangle, Repeat, Rocket, Zap, DollarSign } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle1 = () => {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="secondary">Izrada sajtova</Badge>
              <span className="text-sm text-muted-foreground">8 min čitanja</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Izrada sajta za 50€ - Kompletni vodič za mala preduzeća 2025
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Saznajte kako da napravite profesionalan sajt za samo 50€. Sve o doménima, hostingu i dizajnu koji privlači klijente. Besplatni saveti uključeni!
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15. januar 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=80"
              alt="Izrada profesionalnog sajta za mala preduzeća"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Zašto vaš biznis treba profesionalan sajt?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  U 2025. godini, <strong>85% korisnika prvo traži informacije o firmi na internetu</strong> pre nego što donese odluku o kupovini.
                  Ako nemate sajt ili imate loš sajt, gubite potencijalne klijente svakodnevno.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Dobra vest je što više ne morate da plaćate hiljade evra za profesionalan sajt. Sa našim paketom od 50€,
                  dobijate sve što je potrebno za uspešno predstavljanje vašeg biznisa online.
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Brza statistika
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>75% korisnika sudi o kredibilnosti firme na osnovu dizajna sajta</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>50% malih biznisa još uvek nema profesionalan sajt</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Sajt povećava prodaju u proseku za 30-40%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Šta dobijate za 50€?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Naš <strong>Osnovni Paket za 50€</strong> je posebno dizajniran za mala preduzeća i preduzetnike
                  koji žele brz i efikasan ulazak u digitalni svet. Evo detaljnog pregleda:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Dizajn i sadržaj
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>• 1 glavna strana sa svim sekcijama</li>
                        <li>• Ili do 3 manje odvojene strane</li>
                        <li>• Responzivan dizajn (prilagođava se mobilnim)</li>
                        <li>• Moderan, profesionalan izgled</li>
                        <li>• Kontakt forma koja radi</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Tehnički deo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>• Besplatan domen (.online/.store/.shop)</li>
                        <li>• Hosting za 1 godinu uključen</li>
                        <li>• SSL sertifikat (sajt je siguran)</li>
                        <li>• Osnovna SEO optimizacija</li>
                        <li>• Do 10.000 poseta mesečno</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Važna napomena o ceni
                  </h3>
                  <p className="text-lg leading-relaxed mb-4">
                    <strong>50€ je cena ako vi dostavljate materijal</strong> (tekstove, slike, boje koje želite).
                    Ovo uključuje:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>• Opisan sadržaj koji želite na sajtu</li>
                    <li>• Slike koje želite da se koriste</li>
                    <li>• Boje i stil koji vam se dopada</li>
                    <li>• Logo (ako ga imate)</li>
                  </ul>
                  <p className="text-lg leading-relaxed">
                    <strong>Ako nemate materijal, mi ćemo ga napraviti za 100€</strong> (uključuje 1 besplatnu reviziju).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Korak po korak: Kako funkcioniše proces?</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Popunjavate formu</h3>
                      <p className="text-lg leading-relaxed">
                        Kliknete na "Poruči" dugme, popunjavate našu detaljnu formu sa svim informacijama
                        o vašem biznisu i sajtu koji želite.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pošaljete materijal</h3>
                      <p className="text-lg leading-relaxed">
                        U roku od 24 sata kontaktiramo vas i objašnjavamo tačno šta nam je potrebno.
                        Vi pripremite materijal i pošaljete nam u jednom mejlu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pravimo sajt</h3>
                      <p className="text-lg leading-relaxed">
                        Naš tim pravi sajt prema vašim specifikacijama. Običajno traje 3-5 radnih dana
                        u zavisnosti od složenosti.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pregled i odobravanje</h3>
                      <p className="text-lg leading-relaxed">
                        Šaljemo vam privremeni link da vidite sajt. Ako je sve u redu, odobravate.
                        Ako nisu, govorite šta da promenimo.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sajt ide uživo!</h3>
                      <p className="text-lg leading-relaxed">
                        Povezujemo domen, sajt ide uživo i vi dobijate sve potrebne informacije
                        za pristup i upravljanje.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Zašto je naš pristup drugačiji?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Brzina</h3>
                      <p className="text-muted-foreground">
                        Jedna isporuka, bez beskrajnih revizija. Efikasno i brzo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Transparentnost</h3>
                      <p className="text-muted-foreground">
                        Bez skrivenih troškova. Cena koju vidite je cena koju plaćate.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Fokus na rezultat</h3>
                      <p className="text-muted-foreground">
                        Sajt koji radi, privlači klijente i povećava prodaju.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Šta se dešava nakon prve godine?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Prva godina (domen + hosting) je uključena u cenu od 50€. Nakon toga, imate opcije:
                </p>

                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Repeat className="w-5 h-5" />
                        Standardna obnova - 50€/godišnje
                      </h3>
                      <p className="text-muted-foreground">
                        Produžavate domen i hosting. Sajt nastavlja da radi normalno. Idealno za osnovne potrebe.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <Rocket className="w-5 h-5" />
                        Pro plan - 300€/godišnje
                      </h3>
                      <p className="text-muted-foreground">
                        Za veći promet (preko 10.000 poseta mesečno), bolje performanse i dodatne resurse.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Važno upozorenje
                  </h3>
                  <p className="text-red-700">
                    Ako se sajt ne obnovi, prestaje da bude dostupan na internetu.
                    Obavestićemo vas 30 dana unapred o isteku.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Dodatne usluge koje možete dodati</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Osnovni paket pokriva sve najważnije, ali možete dodati i dodatne funkcionalnosti:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="border border-border p-4 rounded-lg">
                    <h4 className="font-semibold">Logo dizajn - 50€</h4>
                    <p className="text-sm text-muted-foreground">Profesionalan logo + boje i fontovi</p>
                  </div>
                  <div className="border border-border p-4 rounded-lg">
                    <h4 className="font-semibold">Dodatna strana - 20€</h4>
                    <p className="text-sm text-muted-foreground">Galerija, O nama, ili bilo šta drugo</p>
                  </div>
                  <div className="border border-border p-4 rounded-lg">
                    <h4 className="font-semibold">SEO Start paket - 50€</h4>
                    <p className="text-sm text-muted-foreground">Napredna optimizacija za Google</p>
                  </div>
                  <div className="border border-border p-4 rounded-lg">
                    <h4 className="font-semibold">Premium domen - 30€</h4>
                    <p className="text-sm text-muted-foreground">.com, .net, .org, .rs domeni</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Često postavljana pitanja</h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Da li mogu da menjam sajt nakon što je gotov?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Možete, ali se naplaćuje. Mala izmena (broj telefona, slika) košta 10€.
                        Paket od 5 izmena košta 30€. Sve veće izmene se naplaćuju po cenovniku.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Šta ako ne znam šta hoću na sajtu?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Zato imamo opciju da mi napravimo sadržaj za 100€. Analiziraćemo vašu delatnost
                        i napraviti profesionalan sadržaj koji privlači klijente.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Da li sajt radi na mobilnim telefonima?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Da, svi naši sajtovi su responsive - automatski se prilagođavaju svim uređajima
                        (telefoni, tableti, računari).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Quiz Section */}
              <div className="mb-12">
                <Quiz
                  title="Testirajte vaše znanje o izradi sajtova"
                  description="Proverite koliko ste naučili o procesu kreiranja web sajta za 50€"
                  questions={[
                    {
                      question: "Koliko vremena je potrebno za izradu osnovnog sajta?",
                      options: [
                        "1 dan",
                        "48 sati",
                        "7 dana",
                        "Mesec dana"
                      ],
                      correctAnswer: 1,
                      explanation: "Osnovni sajt se pravi za 48 sati, što je jedan od glavnih prednosti našeg paketa za 50€."
                    },
                    {
                      question: "Šta je uključeno u paket od 50€?",
                      options: [
                        "Samo dizajn sajta",
                        "Hosting + domen + responsive dizajn + SSL",
                        "Samo programiranje",
                        "Samo hosting"
                      ],
                      correctAnswer: 1,
                      explanation: "Paket od 50€ uključuje hosting, domen, responsive dizajn i SSL sertifikat - sve što je potrebno za funkcionalni sajt."
                    },
                    {
                      question: "Da li sajt radi na mobilnim telefonima?",
                      options: [
                        "Ne, potrebna je dodatna optimizacija",
                        "Da, svi sajtovi su responsive",
                        "Samo na određenim telefonima",
                        "To košta dodatno"
                      ],
                      correctAnswer: 1,
                      explanation: "Svi naši sajtovi su responsive i automatski se prilagođavaju svim uređajima (telefoni, tableti, računari)."
                    },
                    {
                      question: "Koliko košta mala izmena na sajtu?",
                      options: [
                        "Besplatno je",
                        "5€",
                        "10€",
                        "50€"
                      ],
                      correctAnswer: 2,
                      explanation: "Mala izmena kao što je promena broja telefona ili slike košta 10€, dok paket od 5 izmena košta 30€."
                    },
                    {
                      question: "Šta ako ne znam šta hoću na sajtu?",
                      options: [
                        "Moram sam da napravim sadržaj",
                        "Mi možemo napraviti sadržaj za 100€",
                        "To nije moguće",
                        "Sajt se ne može napraviti"
                      ],
                      correctAnswer: 1,
                      explanation: "Nudimo opciju da mi napravimo kompletan sadržaj za 100€ - analiziraćemo vašu delatnost i napraviti profesionalan sadržaj."
                    }
                  ]}
                />
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground mt-12">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Spremni za vaš novi sajt?</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Pridružite se stotinama zadovoljnih klijenata koji su povećali svoju prodaju sa našim sajtovima.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/cene">Poruči sajt za 50€</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white text-primary hover:bg-white">
                      <Link to="/kontakt">Besplatna konsultacija</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle1;