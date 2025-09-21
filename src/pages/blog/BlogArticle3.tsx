import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, CheckCircle, Star, Smartphone, Tablet, Monitor, TrendingUp, Users, ShoppingCart, AlertTriangle, Target, Search } from "lucide-react";
import { Quiz } from "@/components/Quiz";

const BlogArticle3 = () => {
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
              <Badge variant="secondary">Web dizajn</Badge>
              <span className="text-sm text-muted-foreground">5 min čitanja</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Responsive sajt dizajn - Zašto je mobilni prikaz ključan za prodaju
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              90% korisnika koristi mobilne uređaje. Otkrijte kako responsive dizajn povećava konverzije i Google rangiranje vašeg sajta.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>10. januar 2025</span>
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
              src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Responsive dizajn na različitim uređajima"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Šta je responsive dizajn?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Responsive dizajn</strong> znači da se vaš sajt automatski prilagođava svim veličinama ekrana -
                  od malih telefona do velikih desktop računara. Umesto da imate odvojen "mobilni sajt",
                  imate jedan sajt koji savršeno radi na svim uređajima.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  U 2025. godini, ovo nije više opcija - to je <strong>obavezno</strong>. Google kažnjava sajtove
                  koji nisu responsive, a vaši klijenti jednostavno neće koristiti sajt koji ne radi na telefonu.
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Statistike koje govore sve
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>92% korisnika pristupa internetu preko mobilnih</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>75% ljudi napušta sajt ako nije mobile-friendly</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Google favorizuje mobile-first sajtove</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>61% korisnika neće se vratiti na loš mobilni sajt</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>40% povećanje konverzije sa dobrim responsive dizajnom</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>50% online kupovina se dešava na mobilnim</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Kako responsive dizajn utiče na vaš biznis?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Responsive dizajn direktno utiče na sve ključne metrike vašeg biznisa:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-green-600" />
                        Povećava prodaju
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Korisnici koji mogu lako da se kreću po sajtu na telefonu su 67% više skloni da kupe.
                      </p>
                      <div className="text-sm space-y-1">
                        <div>• Lakši pristup informacijama</div>
                        <div>• Brža navigacija</div>
                        <div>• Jednostavan checkout proces</div>
                        <div>• Bolje korisničko iskustvo</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-blue-600" />
                        Bolje Google rangiranje
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Google koristi "mobile-first indexing" - prvo gleda kako sajt radi na telefonu.
                      </p>
                      <div className="text-sm space-y-1">
                        <div>• Viša pozicija u pretrazi</div>
                        <div>• Više organskog saobraćaja</div>
                        <div>• Bolji Core Web Vitals</div>
                        <div>• Manje bounce rate</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Zadržava posetioce
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Ljudi provode 2x više vremena na responsive sajtovima.
                      </p>
                      <div className="text-sm space-y-1">
                        <div>• Duže sesije na sajtu</div>
                        <div>• Više pregledanih strana</div>
                        <div>• Veća verovatnoća povratka</div>
                        <div>• Bolje angažovanje</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-600" />
                        Gradi kredibilitet
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Profesionalan responsive sajt utiče na percepciju brenda.
                      </p>
                      <div className="text-sm space-y-1">
                        <div>• Moderniji izgled</div>
                        <div>• Profesionalniji utisak</div>
                        <div>• Veće poverenje korisnika</div>
                        <div>• Bolja reputacija</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Različiti uređaji, različiti pristupi</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Svaki tip uređaja ima svoje specifičnosti koje responsive dizajn mora da podrži:
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-blue-600" />
                        Mobilni telefoni (320px - 768px)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Najkritičniji uređaji - 60% vašeg saobraćaja dolazi odavde.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Šta mora da radi:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Jednostupčani layout</li>
                            <li>• Velika, klikabilna dugmad</li>
                            <li>• Brzо učitavanje (3 sekunde max)</li>
                            <li>• Touch-friendly navigacija</li>
                            <li>• Čitljiv tekst bez zumiranja</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Specifičnosti:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Hamburger meni umesto klasičnog</li>
                            <li>• Vertikalno slanje slika</li>
                            <li>• Skrivanje manje važnih elemenata</li>
                            <li>• Optimizovan za one-hand korišćenje</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Tablet className="w-5 h-5 text-green-600" />
                        Tableti (768px - 1024px)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Hibrid između mobilnog i desktop iskustva.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Ključne karakteristike:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Dvostupčani ili trostupčani layout</li>
                            <li>• Veći sadržaj po stranici</li>
                            <li>• Touch i keyboard kombinacija</li>
                            <li>• Prosečna brzina interneta</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Optimizacije:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Kombinacija hamburger + klasičnog menija</li>
                            <li>• Adaptive slike (portrait/landscape)</li>
                            <li>• Hover efekti se zadržavaju</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Monitor className="w-5 h-5 text-purple-600" />
                        Desktop računari (1024px+)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Još uvek važni, posebno za B2B biznise i e-commerce.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Prednosti:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Pun dizajn sa svim elementima</li>
                            <li>• Hover efekti i animacije</li>
                            <li>• Brža Internet konekcija</li>
                            <li>• Lakše popunjavanje formi</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Fokus na:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Detaljne informacije</li>
                            <li>• Kompleksnije interakcije</li>
                            <li>• Multi-tasking podrška</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Česte greške u responsive dizajnu</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Evo najčešćih grešaka koje uništavaju korisničko iskustvo na mobilnim uređajima:
                </p>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        1. Presitni tekst i dugmad
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Problem:</strong> Tekst manji od 16px, dugmad manja od 44px.
                      </p>
                      <p className="text-green-700">
                        <strong>Rešenje:</strong> Minimum 16px za tekst, 44px x 44px za dugmad.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        2. Sporo učitavanje slika
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Problem:</strong> Velike desktop slike se učitavaju na telefonu.
                      </p>
                      <p className="text-green-700">
                        <strong>Rešenje:</strong> Adaptive slike i lazy loading.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        3. Horizontalno skrolovanje
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Problem:</strong> Sadržaj "štrči" van ekrana, korisnik mora da pomera levo-desno.
                      </p>
                      <p className="text-green-700">
                        <strong>Rešenje:</strong> Flexbox i CSS Grid za adaptivan layout.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        4. Neupotrebljivi meni
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Problem:</strong> Desktop meni se samo smanji bez pravog prilagođavanja.
                      </p>
                      <p className="text-green-700">
                        <strong>Rešenje:</strong> Hamburger meni sa logičnom hierarhijom.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        5. Teške forme za popunjavanje
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Problem:</strong> Sitna polja, loša tipografija, ne koriste se prava input tipovi.
                      </p>
                      <p className="text-green-700">
                        <strong>Rešenje:</strong> Velika polja, auto-complete, pravilni keyboard tipovi.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Kako testirati responsive dizajn?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Pre nego što sajt ode uživo, obavezno testirajte na različitim uređajima:
                </p>

                <div className="space-y-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Besplatni online alati</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Google Mobile-Friendly Test</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Chrome DevTools Device Simulator</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Responsive Design Checker</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>BrowserStack (free trial)</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Stvarni uređaji</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Ništa ne zamenjuje testiranje na stvarnim uređajima:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Testirati obavezno:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• iPhone (Safari)</li>
                            <li>• Android telefon (Chrome)</li>
                            <li>• iPad ili Android tablet</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Šta proveravati:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Brzina učitavanja</li>
                            <li>• Touch interakcije</li>
                            <li>• Čitljivost teksta</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Česte probleme:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• iOS Safari specifičnosti</li>
                            <li>• Android Chrome font rendering</li>
                            <li>• Orientation promene</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Zašto svi naši sajtovi dolaze responsive?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  U Poruči Sajt, <strong>svaki sajt koji napravimo je automatski responsive</strong>.
                  Evo zašto ovo nije dodatna usluga kod nas:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Standard, ne opcija</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        U 2025. godini, neresponsive sajt jednostavno ne funkcioniše.
                        Zato je responsive dizajn standardan deo svakog našeg paketa.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Testirano na svim uređajima</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Svaki sajt testiramo na iOS, Android, tablet i desktop pre isporuke.
                        Garantujemo da radi savršeno svugde.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Google optimizovan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Koristimo najnovije tehnike za mobile-first indexing i
                        Core Web Vitals optimizaciju.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Budućnost-proof</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Naši sajtovi rade na svim trenutnim uređajima i spremni su
                        za buduće tehnologije.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">Šta dobijate u svakom paketu:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Mobile-first dizajn pristup</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Touch-optimized interface</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Brzo učitavanje na svim uređajima</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Google Core Web Vitals optimizacija</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Cross-browser kompatibilnost</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Testiranje na realnim uređajima</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Da li responsive dizajn košta dodatno?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ne! Responsive dizajn je standardan deo svih naših paketa. Od Osnovnog Paketa za 50€
                        do najpompleksnijih rešenja - sve je responsive.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mogu li naknadno da napravim sajt responsive?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Tehnički da, ali često je lakše napraviti novi sajt. Adaptacija postojećeg može biti
                        skuplija i manje efikasna od nove izrade.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Kako mogu da proverim da li je moj sajt responsive?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Najlakše na telefonu otvorite vaš sajt. Ako morate da zum irate da vidite tekst ili
                        da pomerate levo-desno, sajt nije responsive. Google-ov Mobile-Friendly Test takođe pomaže.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Quiz Section */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Testirajte svoje znanje o responsive dizajnu</h2>
                <Quiz
                  questions={[
                    {
                      question: "Koji je minimum preporučene veličine dugmadi za mobilne uređaje?",
                      options: [
                        "28px x 28px",
                        "36px x 36px",
                        "44px x 44px",
                        "52px x 52px"
                      ],
                      correct: 2,
                      explanation: "Minimum preporučene veličine dugmadi za mobilne uređaje je 44px x 44px. Ova veličina omogućava lako i precizno tapiranje prstom bez slučajnih klikova na susedne elemente."
                    },
                    {
                      question: "Koliko korisnika koristi mobilne uređaje za pristup internetu?",
                      options: [
                        "75%",
                        "82%",
                        "87%",
                        "92%"
                      ],
                      correct: 3,
                      explanation: "92% korisnika koristi mobilne uređaje za pristup internetu. Ova statistika jasno pokazuje zašto je responsive dizajn obavezan, a ne opcija u modernom web developmentu."
                    },
                    {
                      question: "Šta je 'mobile-first indexing' kod Google-a?",
                      options: [
                        "Google favorizuje mobile aplikacije",
                        "Google prvo indeksira mobilnu verziju sajta",
                        "Google rangira samo responsive sajtove",
                        "Google prikazuje samo mobile rezultate"
                      ],
                      correct: 1,
                      explanation: "Mobile-first indexing znači da Google najpre gleda i indeksira mobilnu verziju vašeg sajta. Ako sajt nije responsive ili mobilna verzija nije dobra, to direktno utiče na rangiranje u pretrazi."
                    },
                    {
                      question: "Koliko povećanje konverzije može doneti dobar responsive dizajn?",
                      options: [
                        "20%",
                        "30%",
                        "40%",
                        "50%"
                      ],
                      correct: 2,
                      explanation: "Dobar responsive dizajn može doneti do 40% povećanja konverzije. Korisnici koji mogu lako da navigiraju sajt na mobilnim uređajima značajno su skloniji da izvrše željenu akciju."
                    },
                    {
                      question: "Koji je breakpoint za tablete u responsive dizajnu?",
                      options: [
                        "480px - 768px",
                        "600px - 900px",
                        "768px - 1024px",
                        "800px - 1200px"
                      ],
                      correct: 2,
                      explanation: "Standardni breakpoint za tablete je 768px - 1024px. Na ovoj veličini ekrana koristimo hibridni pristup između mobilnog i desktop dizajna, često sa dvostupčanim ili trostupčanim layoutom."
                    }
                  ]}
                />
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground mt-12">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Spremni za responsive sajt?</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Svi naši paketi dolaze sa potpuno responsive dizajnom. Bez dodatnih troškova, bez kompromisa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/cene">Pogledaj pakete</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white text-primary hover:bg-white">
                      <Link to="/kontakt">Testiraj moj trenutni sajt</Link>
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

export default BlogArticle3;