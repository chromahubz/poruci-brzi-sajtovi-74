import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, CheckCircle, Star, Globe, Search, DollarSign, AlertTriangle, Crown, Shield, Zap, Target } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle2 = () => {
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
              <Badge variant="secondary">Domeni</Badge>
              <span className="text-sm text-muted-foreground">6 min čitanja</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Domen za sajt - Kako odabrati najbolje ime za vaš biznis
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Vodič kroz odabir domena: .com vs .rs vs .online. Proverite dostupnost, cene i SEO uticaj. Besplatna provera domena uključena!
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>12. januar 2025</span>
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
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Odabir najboljih domena za biznis sajt"
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Šta je domen i zašto je važan?</h2>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Domen je adresa vašeg sajta na internetu</strong> - poput vasafirma.com ili vasbiznis.rs.
                  To je prva stvar koju vaši klijenti vide i pamte o vašem online prisustvu.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Dobar domen može značajno uticati na uspeh vašeg biznisa jer utiče na:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Search className="w-5 h-5 text-primary" />
                        SEO i Google rangiranje
                      </h3>
                      <p className="text-muted-foreground">
                        Google više voli kratke, jasne domene koji odgovaraju sadržaju sajta.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Kredibilnost i poverenje
                      </h3>
                      <p className="text-muted-foreground">
                        Profesionalan domen uvećava poverenje klijenata u vaš biznis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Brandiranje i prepoznatljivost
                      </h3>
                      <p className="text-muted-foreground">
                        Lako pamtljiv domen pomaže da se vaš brend bolje zapamti.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Brzina pristupa
                      </h3>
                      <p className="text-muted-foreground">
                        Kratak, jasan domen je lakše ukucati i podeliti sa drugima.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Različite vrste domena - Šta odabrati?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Postoji više tipova domena, a svaki ima svoje prednosti i mane. Evo detaljnog pregleda:
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Crown className="w-5 h-5 text-green-600" />
                        .com domeni - Zlatni standard
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Prednosti:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Najpopularniji i najprepoznatljiviji</li>
                            <li>• Najbolji za SEO i Google rangiranje</li>
                            <li>• Globalno prihvaćen i pouzdan</li>
                            <li>• Lako pamtljiv za korisnike</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Mane:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Najskuplji (30€ godišnje)</li>
                            <li>• Većina dobrih imena je zauzeta</li>
                            <li>• Velika konkurencija za imena</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800">
                          <strong>Preporučeno za:</strong> Ozbiljne biznise koji planiraju dugotrajni rast i imaju budžet za premium domen.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-600" />
                        .rs domeni - Srpski izbor
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Prednosti:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Pokazuje da ste domaća firma</li>
                            <li>• Bolje rangiranje za srpske pretrage</li>
                            <li>• Umeren po ceni (30€ godišnje)</li>
                            <li>• Veći izbor dostupnih imena</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Mane:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Ograničen na srpsko tržište</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Preporučeno za:</strong> Lokalne biznise koji rade isključivo u Srbiji i žele da naglase regionalnost.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-purple-600" />
                        .online / .store / .shop - Moderna alternativa
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-2">Prednosti:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Besplatno u našim paketima</li>
                            <li>• Opisno ime (.store za prodavnice)</li>
                            <li>• Veliki izbor dostupnih imena</li>
                            <li>• Moderna i kreativna rešenja</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Mane:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Manje poznati kod korisnika</li>
                            <li>• Nepoznat SEO uticaj</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-purple-800">
                          <strong>Preporučeno za:</strong> Startupe i mala preduzeća koji žele unikatno ime bez dodatnih troškova.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Kako odabrati savršeno ime domena?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Odabir imena domena je jedan od najvažnijih odluka za vaš online biznis. Evo pravila koja uvek funktcionišu:
                </p>

                <div className="space-y-6">
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Šta TREBA da radite
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <strong>Kratko i jasno</strong> - Idealno 6-14 karaktera
                            <p className="text-sm text-muted-foreground">Primer: pekara-ana.com umesto pekara-ana-milic-novi-sad.com</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <strong>Koristite ime brenda</strong> - Ako imate prepoznatljivo ime
                            <p className="text-sm text-muted-foreground">Primer: markoelectric.rs za "Marko Electric" firmu</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <strong>Dodajte ključnu reč</strong> - Opišite šta radite
                            <p className="text-sm text-muted-foreground">Primer: bgvodoinstalater.rs za vodoinstalatera u Beogradu</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <strong>Lako za izgovor</strong> - Mora se lako reći i napisati
                            <p className="text-sm text-muted-foreground">Test: Mogu li da ga kažem preko telefona bez greške?</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-red-800 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Šta NIKAD ne treba da radite
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                          <div>
                            <strong>Brojevi i crtice</strong> - Teški za pamćenje
                            <p className="text-sm text-muted-foreground">Loše: auto-servis-123.com, Bolje: autoservispetar.rs</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                          <div>
                            <strong>Komplikovana imena</strong> - Teška za kucanje
                            <p className="text-sm text-muted-foreground">Loše: elektrotehnicko-preduzece-milojevic.rs</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                          <div>
                            <strong>Slična postojećim brendovima</strong> - Može dovesti do tužbe
                            <p className="text-sm text-muted-foreground">Loše: googlesrbija.com, mcdonaldsbg.rs</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                          <div>
                            <strong>Regionalne skraćenice</strong> - Ograničavaju rast
                            <p className="text-sm text-muted-foreground">Loše: firmans.com (ako planirate širenje van Novog Sada)</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Cene domena - Koliko košta?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Cene domena se razlikuju u zavisnosti od ekstenzije. Evo trenutnih cena na tržištu:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center justify-center gap-2">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        Besplatno
                      </CardTitle>
                      <p className="text-muted-foreground">.online / .store / .shop</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Uključeno u naše pakete za prvu godinu. Nakon toga 20€ godišnje.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center justify-center gap-2">
                        <DollarSign className="w-6 h-6 text-blue-600" />
                        30€
                      </CardTitle>
                      <p className="text-muted-foreground">.rs / .co.rs</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Srpski domeni. Dodatna naknada ako ga želite umesto besplatnog.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center justify-center gap-2">
                        <DollarSign className="w-6 h-6 text-purple-600" />
                        30€
                      </CardTitle>
                      <p className="text-muted-foreground">.com / .net / .org</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Premium globalni domeni. Najbolji izbor za ozbiljan biznis.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 border-blue-200 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Naša preporuka za različite tipove biznisa:
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Startapi i mali biznisi:</strong> Počnite sa besplatnim (.online/.store/.shop)
                      </div>
                      <div>
                        <strong>Lokalni biznisi:</strong> .rs domeni za lokalno prepoznavanje
                      </div>
                      <div>
                        <strong>Ozbiljni biznisi:</strong> Investirajte u .com za profesionalnost
                      </div>
                      <div>
                        <strong>E-commerce:</strong> .store je savršen za online prodavnice
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Kako proveriti da li je domen dostupan?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Pre nego što se odlučite za ime, obavezno proverite dostupnost:
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-primary" />
                      Besplatna provera domena
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Koristite ove besplatne alate za proveru dostupnosti:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <a
                          href="https://lookup.icann.org/en/lookup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          ICANN Lookup - Oficijelna provera
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Kontaktirajte nas - Besplatno proveravamo za vas</span>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        <strong>Savet:</strong> Ako je vaše željeno ime zauzeto, pokušajte sa dodavanjem grada ili delatnosti
                        (npr. pekarabeograd.rs umesto pekara.rs)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Najčešće greške kod odabira domena</h2>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2">1. Kasno registrovanje</h3>
                      <p className="text-muted-foreground">
                        Mnogi čekaju da završe sajt pa tek onda registruju domen. Do tada može biti zauzet!
                        <strong> Registrujte domen čim odlučite o imenu.</strong>
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2">2. Zaboravljanje obnove</h3>
                      <p className="text-muted-foreground">
                        Domen se mora obnavljati svake godine. Ako zaboravite, možete izgubiti domen zauvek!
                        <strong> Postavite podsetnike ili automatsku obnovu.</strong>
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-700 mb-2">3. Previše složeno ime</h3>
                      <p className="text-muted-foreground">
                        "auto-delovi-i-servis-marko-petrovic-bg.rs" je previše kompleksno.
                        <strong> Kraće je uvek bolje.</strong>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Šta posle registracije domena?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Kada registrujete domen, evo šta treba da sleduje:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Registracija i verifikacija</h3>
                      <p className="text-lg leading-relaxed">
                        Domen se registruje i verifikuje (obično 24-48 sati). Dobićete email potvrdu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Povezivanje sa hostingom</h3>
                      <p className="text-lg leading-relaxed">
                        Domen se povezuje sa hostingom gde će biti smešten vaš sajt. Mi ovo radimo za vas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">SSL sertifikat</h3>
                      <p className="text-lg leading-relaxed">
                        Instalira se SSL sertifikat za bezbednost (sajt radi na https://).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Postavljanje sajta</h3>
                      <p className="text-lg leading-relaxed">
                        Najzad, postavlja se sajt i postaje dostupan svima na internetu!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quiz Section */}
              <div className="mb-12">
                <Quiz
                  title="Testirajte vaše znanje o domenima"
                  description="Proverite koliko ste naučili o odabiru pravog domena za vaš biznis"
                  questions={[
                    {
                      question: "Koji je najbolji izbor za lokalni biznis u Srbiji?",
                      options: [
                        ".com domen",
                        ".rs domen",
                        ".org domen",
                        ".net domen"
                      ],
                      correctAnswer: 1,
                      explanation: ".rs domen je najbolji za lokalne biznise u Srbiji jer pokazuje geografsku pripadnost i može poboljšati local SEO."
                    },
                    {
                      question: "Šta je najvažnije kod naziva domena?",
                      options: [
                        "Da bude što duži",
                        "Da sadrži što više ključnih reči",
                        "Da bude kratak, jasan i lako za pamćenje",
                        "Da sadrži brojeve i specijalne znakove"
                      ],
                      correctAnswer: 2,
                      explanation: "Domen treba da bude kratak, jasan i lako za pamćenje - tako će korisnici lakše da ga upamte i ukucaju."
                    },
                    {
                      question: "Koliko košta .rs domen godišnje?",
                      options: [
                        "2000 RSD",
                        "5000 RSD",
                        "1000-1500 RSD",
                        "Besplatan je"
                      ],
                      correctAnswer: 2,
                      explanation: ".rs domen košta između 1000-1500 RSD godišnje, što je pristupačno za većinu biznisa."
                    },
                    {
                      question: "Da li .online domeni mogu biti dobri za biznis?",
                      options: [
                        "Ne, nikad nisu dobri",
                        "Da, mogu biti dobri ako odgovaraju brendu",
                        "Samo za hobby projekte",
                        "Samo za međunarodne kompanije"
                      ],
                      correctAnswer: 1,
                      explanation: ".online domeni mogu biti odličan izbor ako odgovaraju vašem brendu i biznisu, posebno za tech i online servise."
                    },
                    {
                      question: "Šta je važno proveriti pre kupovine domena?",
                      options: [
                        "Samo da li je dostupan",
                        "Dostupnost, istoriju, trademark konflikte",
                        "Samo cenu",
                        "Ništa posebno"
                      ],
                      correctAnswer: 1,
                      explanation: "Važno je proveriti dostupnost, istoriju domena (da nije bio kažnjen), i da ne krši trademark prava."
                    }
                  ]}
                />
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground mt-12">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Trebate pomoć oko odabira domena?</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Naš tim će vam besplatno pomoći da odaberete savršen domen za vaš biznis.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/cene">Poruči sajt sa domenom</Link>
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

export default BlogArticle2;