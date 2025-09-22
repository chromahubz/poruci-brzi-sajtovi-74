import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, TrendingUp, Users, Target, BarChart3, Smartphone, Globe, FileText, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle13 = () => {
  const quizQuestions = [
    {
      question: "Koji procenat malih preduzeća koristi kombinaciju online i offline marketing strategija?",
      options: [
        "35% koristi kombinovanu strategiju",
        "65% koristi kombinovanu strategiju",
        "50% koristi kombinovanu strategiju",
        "80% koristi kombinovanu strategiju"
      ],
      correct: 1,
      explanation: "Prema najnovijim istraživanjima, 65% malih preduzeća kombinuje online i offline marketing kanale za maksimalan doseg i efikasnost."
    },
    {
      question: "Koji je glavni razlog zašto online marketing ima niže troškove od offline marketinga?",
      options: [
        "Nema potrebe za dizajnom i kreativom",
        "Precizno ciljanje i automatizacija procesa",
        "Manje je popularan pa je jeftiniji",
        "Koristi se samo besplatne platforme"
      ],
      correct: 1,
      explanation: "Online marketing omogućava precizno targetiranje specifične publike i automatizaciju procesa, što značajno smanjuje troškove u odnosu na tradicionalne medije."
    },
    {
      question: "Koliko vremena u proseku treba da se vide rezultati online marketing kampanje?",
      options: [
        "1-2 nedelje za sve tipove kampanja",
        "6-12 meseci bez obzira na strategiju",
        "1-3 meseca za većinu strategija",
        "Rezultati su trenutni uvek"
      ],
      correct: 2,
      explanation: "Većina online marketing strategija pokazuje značajne rezultate u periodu od 1-3 meseca, mada neki kanali kao što su plaćene reklame mogu dati brže rezultate."
    },
    {
      question: "Koja je glavna prednost offline marketinga u odnosu na online?",
      options: [
        "Jeftiniji je od online marketinga",
        "Lakši je za merenje rezultata",
        "Gradi veći lični odnos i poverenje",
        "Dostiže mlađe generacije bolje"
      ],
      correct: 2,
      explanation: "Offline marketing gradi dublji lični odnos sa klijentima kroz direktan kontakt, što povećava poverenje i lojalnost brenda više nego digitalni kanali."
    },
    {
      question: "Koji model je najefektivniji za mala preduzeća u Srbiji?",
      options: [
        "Isključivo online marketing",
        "Kombinovani pristup (online + offline)",
        "Isključivo offline marketing",
        "Zavisi samo od budžeta kompanije"
      ],
      correct: 1,
      explanation: "Kombinovani pristup koji koristi prednosti oba modela je najefektivniji - online za doseg i merljivost, offline za dublje odnose i lokalno prisustvo."
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
                Marketing Strategije
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Poruči Sajt Tim</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>2. februar 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>20 min čitanja</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Online vs Offline Marketing - Kompletno Poređenje za Mala Preduzeća u Srbiji 2025
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Detaljno poređenje online i offline marketing strategija sa praktičnim savetima za kombinovani pristup koji maksimizuje ROI. Otkrijte koji model je najbolji za vaš biznis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Online vs Offline Marketing poređenje"
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
                U današnjem poslovnom svetu, mala preduzeća se suočavaju sa ključnim pitanjem: da li da investiraju u online ili offline marketing? Odgovor nije jednostavan crno-beli izbor. Svaki pristup ima svoje prednosti i mane, a najuspešnije kompanije kombinuju oba modela za maksimalnu efikasnost.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                U ovom detaljnom vodiču ćemo analizirati sve aspekte online i offline marketinga, od troškova do rezultata, i pokazati vam kako da kreirate strategiju koja savršeno odgovara vašem biznisu i budžetu.
              </p>
            </div>

            {/* Key Statistics Card */}
            <Card className="my-12 bg-gradient-to-r from-blue-50 to-purple-50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <BarChart3 className="w-5 h-5" />
                  Ključne Statistike 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Online marketing ROI</span>
                    <span className="text-2xl font-bold text-green-600">4:1</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Kombinovani pristup efikasnost</span>
                    <span className="text-2xl font-bold text-blue-600">+78%</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Offline konverzija stopa</span>
                    <span className="text-2xl font-bold text-purple-600">8.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Mala preduzeća kombinuje oba</span>
                    <span className="text-2xl font-bold text-orange-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chapter 1: Online Marketing */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Online Marketing - Digitalna Revolucija
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Šta je Online Marketing?</h3>
              <p className="mb-6 leading-relaxed">
                Online marketing obuhvata sve marketing aktivnosti koje se izvode putem interneta i digitalnih platformi. To uključuje društvene mreže, Google reklame, email marketing, content marketing, SEO, i mnogu drugih strategija koje omogućavaju precizno ciljanje i merenje rezultata.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Glavne Prednosti Online Marketinga</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-600" />
                      Precizno Ciljanje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Možete da ciljate tačno određenu demografiju:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Godine (18-25, 26-35, 36-50...)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Lokacija (grad, opština, radius)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Interesovanja i ponašanje
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Prihod i obrazovanje
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      Merljivost Rezultata
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Sve je transparentno i merljivo:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Broj pregleda (impressions)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Kliktovi i CTR stopa
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        Konverzije i prodaja
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        ROI u realnom vremenu
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Glavni Online Marketing Kanali</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Google Ads (Plaćene Pretrage)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 20-200 RSD po kliku (zavisi od industrije)</p>
                    <p className="mb-4"><strong>Rezultati:</strong> Trenutni - pojavljujete se na vrhu Google pretrage</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> Biznise sa jasno definisanim uslugama/proizvodima</p>
                    <p><strong>Primer:</strong> Frizerski salon u Beogradu može da se pojavi kad neko traži "frizerski salon Vračar"</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Facebook i Instagram Reklame</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 300-1000 RSD dnevno za manje kampanje</p>
                    <p className="mb-4"><strong>Rezultati:</strong> 1-2 nedelje za optimizaciju, 1-3 meseca za značajne rezultate</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> B2C biznise, restorani, maloprodaja, usluge</p>
                    <p><strong>Primer:</strong> Restoran može da promovira novu jelovnicu sa vizuelnim sadržajem</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. SEO (Organsko Rangiranje)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 30.000-100.000 RSD mesečno (usluge agencije)</p>
                    <p className="mb-4"><strong>Rezultati:</strong> 3-6 meseci za prva poboljšanja, 6-12 meseci za značajne rezultate</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> Dugoročnu strategiju, biznise sa stručnim sadržajem</p>
                    <p><strong>Primer:</strong> Advokatska kancelarija može da rangira za "advokat za nekretnine Beograd"</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Email Marketing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 2.000-10.000 RSD mesečno (zavisno od broja kontakata)</p>
                    <p className="mb-4"><strong>Rezultati:</strong> Trenutni za postojeće kontakte</p>
                    <p className="mb-4"><strong>ROI:</strong> Najbolji od svih kanala - do 4200% ROI</p>
                    <p><strong>Primer:</strong> Online prodavnica šalje newsletter sa popustima postojećim kupcima</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Mane Online Marketinga</h3>
              <Card className="bg-red-50 border-red-200 mb-8">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Visoka konkurencija:</strong> Sve više biznisa se prebacuje online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Stalna optimizacija:</strong> Algoritmi se menjaju, potrebno je stalno prilagođavanje</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Digitalna zasićenost:</strong> Ljudi postaju imunn na online reklame</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Tehnička složenost:</strong> Potrebno je znanje ili stručni tim</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 2: Offline Marketing */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Offline Marketing - Tradicionalni Ali Efikasan
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Šta je Offline Marketing?</h3>
              <p className="mb-6 leading-relaxed">
                Offline marketing obuhvata sve tradicionalne marketing aktivnosti koje se ne izvode putem interneta. To uključuje štampane materijale, radio i TV reklame, outdoor reklame, direktan marketing, sajmove, eventi i lični kontakt sa klijentima.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Glavne Prednosti Offline Marketinga</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Lični Odnos i Poverenje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Ništa ne može da zameni lični kontakt:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Direktna komunikacija licem u lice
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Mogućnost demonstracije proizvoda
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Trenutno rešavanje prigovora
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        Emotivna povezanost sa brendom
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                      Veća Konverzija Stopa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Offline kontakt ima višu konverziju:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        Lični kontakt: 8-15% konverzija
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        Telefon: 5-10% konverzija
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        Direktna pošta: 3-5% konverzija
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        Online prosek: 2-3% konverzija
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Glavni Offline Marketing Kanali</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Direktan Marketing (Posete i Pozivi)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 50.000-150.000 RSD mesečno (plata + troškovi)</p>
                    <p className="mb-4"><strong>Rezultati:</strong> Trenutni - možete da zatvorite prodaju na licu mesta</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> B2B prodaju, skupe proizvode/usluge, lokalne biznise</p>
                    <p><strong>Primer:</strong> IT kompanija direktno obilazi preduzeća i nudi svoje usluge</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Štampani Materijal (Flajeri, Brošure)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 10.000-50.000 RSD za 1000 komada flajera</p>
                    <p className="mb-4"><strong>Rezultati:</strong> 1-2 nedelje, zavisi od distribucije</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> Lokalne usluge, eventi, restorani, maloprodaju</p>
                    <p><strong>Primer:</strong> Pizza dostava deli flajere po ulazima zgrada</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Radio i Lokalne TV Stanice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 100.000-500.000 RSD mesečno (zavisi od stanice i vremena)</p>
                    <p className="mb-4"><strong>Rezultati:</strong> 2-4 nedelje za prepoznatljivost brenda</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> Lokalne biznise sa većim budžetom, masovne usluge</p>
                    <p><strong>Primer:</strong> Autoservisi, klinike, prodavnice nameštaja</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Sajmovi i Eventi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Troškovi:</strong> 200.000-1.000.000 RSD po događaju</p>
                    <p className="mb-4"><strong>Rezultati:</strong> Trenutni kontakti, dugoročni efekti 1-6 meseci</p>
                    <p className="mb-4"><strong>Najbolje za:</strong> B2B networking, promociju novih proizvoda</p>
                    <p><strong>Primer:</strong> IT kompanija izlaže na sajmu tehnologije</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Mane Offline Marketinga</h3>
              <Card className="bg-orange-50 border-orange-200 mb-8">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Visoki troškovi:</strong> Štampa, distribucija, ljudski resursi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Teško merenje:</strong> Nemoguće je precizno pratiti rezultate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Ograničen doseg:</strong> Uglavnom lokalni ili regionalni doseg</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Sporiji rezultati:</strong> Potrebno je vreme za izgradnju svesti o brendu</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 3: Direktno Poređenje */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                Direktno Poređenje - Online vs Offline
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-4 text-left font-semibold">Aspekt</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-blue-600">Online Marketing</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-purple-600">Offline Marketing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Početni Troškovi</td>
                      <td className="border border-gray-300 p-4">10.000-50.000 RSD</td>
                      <td className="border border-gray-300 p-4">50.000-200.000 RSD</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Mesečni Budžet</td>
                      <td className="border border-gray-300 p-4">20.000-100.000 RSD</td>
                      <td className="border border-gray-300 p-4">100.000-500.000 RSD</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Vremenska Efikasnost</td>
                      <td className="border border-gray-300 p-4">Brza implementacija (1-7 dana)</td>
                      <td className="border border-gray-300 p-4">Sporija implementacija (2-4 nedelje)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Merljivost</td>
                      <td className="border border-gray-300 p-4">100% merljivo u realnom vremenu</td>
                      <td className="border border-gray-300 p-4">Teško za precizno merenje</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Doseg Publike</td>
                      <td className="border border-gray-300 p-4">Globalno, precizno ciljanje</td>
                      <td className="border border-gray-300 p-4">Lokalno/regionalno, širok doseg</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Konverzija Stopa</td>
                      <td className="border border-gray-300 p-4">2-5% prosek</td>
                      <td className="border border-gray-300 p-4">8-15% za direktan kontakt</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Personalizacija</td>
                      <td className="border border-gray-300 p-4">Visoka, automatizovana</td>
                      <td className="border border-gray-300 p-4">Maksimalna, lični pristup</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Dugoročni Efekti</td>
                      <td className="border border-gray-300 p-4">Stalni rad na održavanju</td>
                      <td className="border border-gray-300 p-4">Dugotrajni relationship building</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Chapter 4: Kombinovani Pristup */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Kombinovani Pristup - Najbolje od Oba Sveta
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Najuspešnije kompanije u Srbiji koriste kombinovani pristup koji leverages prednosti oba marketing modela. Evo kako da implementirate hibridnu strategiju:
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Model za Mala Preduzeća (Budžet: 50.000-150.000 RSD mesečno)</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Online Deo (60% budžeta)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Google Ads - 40% budžeta</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Facebook/Instagram - 30% budžeta</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Email marketing - 20% budžeta</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>SEO optimizacija - 10% budžeta</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Offline Deo (40% budžeta)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Direktan kontakt - 50% budžeta</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Štampani materijal - 30% budžeta</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Lokalni eventi - 20% budžeta</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Praktičan Primer: Frizerski Salon</h3>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">Online Strategija:</h4>
                      <ul className="space-y-2">
                        <li>• Instagram sa slikama radova (@20.000 RSD/mesec)</li>
                        <li>• Google Ads za "frizerski salon Vračar" (@15.000 RSD/mesec)</li>
                        <li>• Email newsletter sa promocijama (@3.000 RSD/mesec)</li>
                        <li>• Google My Business optimizacija (besplatno)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-600">Offline Strategija:</h4>
                      <ul className="space-y-2">
                        <li>• Flajeri u stambenim zgradama (@10.000 RSD/mesec)</li>
                        <li>• Vizit karte u kafiće i ordinacije (@5.000 RSD/mesec)</li>
                        <li>• Lični kontakt sa klijentima (besplatno)</li>
                        <li>• Word-of-mouth program sa popustima (besplatno)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="font-semibold text-green-800">Rezultat: Ukupan budžet 53.000 RSD mesečno za kompletnu marketing strategiju</p>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Sinergije Između Online i Offline</h3>
              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Retargeting Offline Kontakata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Svaki offline kontakt unesite u CRM sistem i dodajte u email listu za dalje nego gađanje putem online kanala.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. QR Kodovi na Štampanim Materijalima</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Na svaki flajers dodajte QR kod koji vodi na landing stranicu sa posebnim popustom, tako možete da merite offline kampanje.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Social Proof iz Offline Iskustava</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Fotografišite zadovoljne klijente i koristite sadržaj na društvenim mrežama (uz dozvolu).</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Online Kreiranje Svesti, Offline Zatvaranje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Koristite online kanale za kreiranje svesti o brendu, a onda pozovite ljude da dođu u vaš lokal ili zakažu sastanak.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 5: Kako Odabrati Pravi Pristup */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                Kako Odabrati Pravi Pristup za Vaš Biznis
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Biznisi koji treba da fokusiraju na ONLINE (70-80%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>E-commerce i online prodavnice</strong> - digitalni proizvodi, dostava</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>SaaS i IT usluge</strong> - web development, digitalne agencije</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>Online edukacija</strong> - kursevi, konsultacije, koučing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>B2B usluge sa definisanom nišom</strong> - accounting, PR, marketing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Biznisi koji treba da fokusiraju na OFFLINE (70-80%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <span><strong>Lokalne usluge</strong> - frizerski saloni, autoservisi, veterinarske stanice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <span><strong>Tradicionalni B2B</strong> - građevina, proizvodnja, veleprodaja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <span><strong>Luksuzni proizvodi</strong> - nakits, umetnička dela, premium usluge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <span><strong>Zdravstvene usluge</strong> - ordinacije, klinike, wellness centri</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Biznisi koji treba da koriste KOMBINOVANI pristup (50-50)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Restorani i kafić</strong> - lokalni i turistički</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Maloprodajne radnje</strong> - odeća, obuća, kozmetika</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Fitness i wellness</strong> - teretane, spa centri, pilates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Nekretninske agencije</strong> - potreban i online i offline pristup</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 6: Tipične Greške */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                10 Najčešćih Grešaka u Marketing Strategiji
              </h2>

              <div className="space-y-4">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">1. "Sve ili Ništa" Mentalitet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Mislite da morate da birate između online ili offline</p>
                    <p><strong>Rešenje:</strong> Kombinujte oba pristupa prema vašem budžetu i ciljanoj publici</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">2. Kopiranje Konkurencije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Kopirate sve što radi vaša konkurencija</p>
                    <p><strong>Rešenje:</strong> Analizirajte šta radi za vas specifično, testirajte i optimizujte</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">3. Nemeravanje Rezultata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Ne pratite koja strategija donosi najbolje rezultate</p>
                    <p><strong>Rešenje:</strong> Postavite trackovanje za sve kanale, merite ROI mesečno</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">4. Prečesto Menjanje Strategije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Menjate pristup svake 2-3 nedelje</p>
                    <p><strong>Rešenje:</strong> Dajte svakoj strategiji minimum 3-6 meseci da pokaže rezultate</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">5. Zanemarivanje Lokalnog SEO</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Greška:</strong> Ne optimizujete Google My Business profil</p>
                    <p><strong>Rešenje:</strong> Ovo je besplatno i često najvažniji deo online prisutnosti</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Zaključak</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Nema univerzalnog odgovora na pitanje online vs offline marketing. Najbolja strategija je ona koja se prilagođava vašem specifičnom biznisu, budžetu, ciljanoj publici i ciljevima.
                </p>

                <p className="text-lg leading-relaxed">
                  Ključne preporuke za 2025:
                </p>

                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Počnite sa kombinovanim pristupom</strong> - 60% online, 40% offline kao polazna tačka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Merite sve</strong> - bez podataka ne možete da optimizujete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Fokusirajte se na kvalitet, ne kvantitet</strong> - bolje manje kanala, ali dobro optimizovanih</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Prilagođavajte se kontinuirano</strong> - marketing se stalno razvija</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed">
                  Zapamtite: najvažnije je da počnete. Savršene strategije ne postoje, ali kroz testiranje i optimizaciju ćete pronaći ono što najbolje radi za vas.
                </p>
              </div>
            </section>

            {/* Quiz Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Testirajte Svoje Znanje</h2>
              <Quiz questions={quizQuestions} />
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="text-center py-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">
                    Spremni da kreirate svoju marketing strategiju?
                  </h2>
                  <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                    Naš tim stručnjaka može da vam pomogne da odaberete pravi mix online i offline strategija za vaš biznis. Besplatna konsultacija uključena!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link to="/kontakt">
                        Zakažite Besplatnu Konsultaciju
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/cene">
                        Pogledajte Cene Usluga
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

export default BlogArticle13;