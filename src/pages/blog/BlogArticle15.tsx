import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, TrendingUp, Code, Zap, Shield, Smartphone, DollarSign, Settings, CheckCircle, X, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle15 = () => {
  const quizQuestions = [
    {
      question: "Koliko košta godišnje održavanje WordPress sajta u proséku?",
      options: [
        "500-1.500 RSD godišnje",
        "5.000-15.000 RSD godišnje",
        "15.000-50.000 RSD godišnje",
        "50.000+ RSD godišnje"
      ],
      correct: 2,
      explanation: "WordPress sajt košta između 15.000-50.000 RSD godišnje za hosting, premium teme, plugin-ove, backup i security, što je značajno više od početnih troškova."
    },
    {
      question: "Koliko plugin-ova koristi prosečan WordPress sajt?",
      options: [
        "5-10 plugin-ova",
        "15-25 plugin-ova",
        "30-40 plugin-ova",
        "50+ plugin-ova"
      ],
      correct: 1,
      explanation: "Prosečan WordPress sajt koristi 15-25 plugin-ova, što može značajno usporavati sajt i uvećavati sigurnosne rizike."
    },
    {
      question: "Koje je glavna prednost custom (posebno napravljenog) sajta?",
      options: [
        "Jeftiniji je za pravljenje",
        "Brži je za implementaciju",
        "Potpuna kontrola nad funkcionalnostima",
        "Lakši je za održavanje"
      ],
      correct: 2,
      explanation: "Custom sajt omogućava potpunu kontrolu nad dizajnom, funkcionalnostima i performansama, bez ograničenja tema ili plugin-ova."
    },
    {
      question: "Za koji tip biznisa je WordPress najbolji izbor?",
      options: [
        "E-commerce sa velikim brojem proizvoda",
        "Blog sa čestim ažuriranjem sadržaja",
        "Aplikacije sa složenim funkcionalnostima",
        "Sajt sa strogim sigurnosnim zahtevima"
      ],
      correct: 1,
      explanation: "WordPress je idealan za blogove i sajtove gde netehničko osoblje treba često da ažurira sadržaj zbog jednostavnog CMS-a."
    },
    {
      question: "Koliko traje izrada custom sajta u odnosu na WordPress?",
      options: [
        "Custom je brži - 1-2 nedelje vs 2-4 nedelje za WordPress",
        "Oba traju isto - oko 3 nedelje",
        "WordPress je brži - 1-2 nedelje vs 4-8 nedelja za custom",
        "Custom uvek traje više od 6 meseci"
      ],
      correct: 2,
      explanation: "WordPress sajt se može napraviti za 1-2 nedelje, dok custom sajt traje 4-8 nedelja zbog programiranja od nule."
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
                Web Development
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Poruči Sajt Tim</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>8. februar 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>24 min čitanja</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              WordPress vs Custom Sajt - Kompletno Poređenje za Srpske Biznise 2025
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Detaljno poređenje WordPress-a i custom rešenja sa realnim troškovima, performansama i preporukama za različite tipove biznisa u Srbiji.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="WordPress vs Custom sajt poređenje"
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
                "Da li da pravim sajt na WordPress-u ili da naručim custom sajt?" - ovo je jedno od najčešćih pitanja koje dobijamo od klijenata. Odgovor nije jednostavan jer zavisi od vaših potreba, budžeta i dugoročnih planova.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                U ovom detaljnom vodiču ćemo analizirati sve aspekte oba pristupa - od početnih troškova do dugoročnog održavanja, bezbednosti i performansi. Na kraju ćete znati tačno koji pristup je najbolji za vaš biznis.
              </p>
            </div>

            {/* Quick Comparison Card */}
            <Card className="my-12 bg-gradient-to-r from-blue-50 to-purple-50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  Brzo Poređenje - WordPress vs Custom
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-600">WordPress Sajt</h3>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Početna cena</span>
                    <span className="text-xl font-bold text-blue-600">15.000-80.000 RSD</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Vreme izrade</span>
                    <span className="text-xl font-bold text-blue-600">1-3 nedelje</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Godišnji troškovi</span>
                    <span className="text-xl font-bold text-blue-600">15.000-50.000 RSD</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-purple-600">Custom Sajt</h3>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Početna cena</span>
                    <span className="text-xl font-bold text-purple-600">50.000-300.000 RSD</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Vreme izrade</span>
                    <span className="text-xl font-bold text-purple-600">4-12 nedelja</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Godišnji troškovi</span>
                    <span className="text-xl font-bold text-purple-600">5.000-20.000 RSD</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chapter 1: WordPress Analiza */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                WordPress Sajt - Prednosti i Mane
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Šta je WordPress?</h3>
              <p className="mb-8 leading-relaxed">
                WordPress je CMS (Content Management System) koji pokreće 43% svih sajtova na internetu. To je open-source platforma koja omogućava kreiranje sajtova korišćenjem gotovih tema i plugin-ova.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Prednosti WordPress Sajta</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      Brza Implementacija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Sajt spreman za 1-3 nedelje</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Hiljade gotovih tema dostupno</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Drag & drop page builder-i</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Ne treba programiranje znanje</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-blue-600" />
                      Lako Upravljanje Sadržajem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Intuitivni admin panel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Blog funkcionalnosti ugrađene</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Više korisnika može da uređuje</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>WYSIWYG editor za tekst</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Struktura Troškova WordPress Sajta</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Početni Troškovi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Domen (.rs ili .com)</span>
                        <span className="font-bold">2.000-4.000 RSD/god</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>WordPress hosting</span>
                        <span className="font-bold">6.000-20.000 RSD/god</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Premium tema</span>
                        <span className="font-bold">5.000-15.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Plugin-ovi (premium)</span>
                        <span className="font-bold">10.000-30.000 RSD/god</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Izrada i podešavanje</span>
                        <span className="font-bold">20.000-80.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-100 rounded font-bold">
                        <span>UKUPNO (prva godina)</span>
                        <span className="text-xl">43.000-149.000 RSD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Godišnji Troškovi (nakon prve godine)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Hosting</span>
                        <span className="font-bold">6.000-20.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Domen obnova</span>
                        <span className="font-bold">2.000-4.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Plugin licenci</span>
                        <span className="font-bold">5.000-25.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Backup i security</span>
                        <span className="font-bold">3.000-10.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Održavanje i ažuriranje</span>
                        <span className="font-bold">10.000-30.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-100 rounded font-bold">
                        <span>GODIŠNJE</span>
                        <span className="text-xl">26.000-89.000 RSD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Mane WordPress Sajta</h3>
              <Card className="mb-8 bg-red-50 border-red-200">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-red-700">Sigurnosni Rizici:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Čest target hakera (43% interneta)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Plugin-ovi kao slabe tačke</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Potrebna redovna ažuriranja</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Backup obavezno potreban</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-red-700">Performance Problemi:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Sporiji od custom rešenja</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Višak koda u temama</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Plugin konflikti</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1" />
                          <span>Databaseza može da se zasipi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 2: Custom Sajt Analiza */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                Custom Sajt - Potpuna Kontrola
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Šta je Custom Sajt?</h3>
              <p className="mb-8 leading-relaxed">
                Custom sajt je web sajt koji se pravi "od nule" specifično za vaše potrebe. Koriste se moderne tehnologije kao što su React, Vue, ili čisti HTML/CSS/JavaScript, bez unapred definisanih ograničenja.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Prednosti Custom Sajta</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      Maksimalne Performanse
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Učitavanje ispod 1 sekunde</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Nema nepotrebnog koda</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Optimizovano za SEO</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Savršeno mobilno iskustvo</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Maksimalna Bezbednost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Nema poznate security rupe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Custom security measures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Manje meta za hakere</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Minimalna attack surface</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Struktura Troškova Custom Sajta</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Početni Troškovi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Domen (.rs ili .com)</span>
                        <span className="font-bold">2.000-4.000 RSD/god</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Hosting (može biti jeftiniji)</span>
                        <span className="font-bold">3.000-15.000 RSD/god</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Dizajn (UI/UX)</span>
                        <span className="font-bold">15.000-60.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Frontend development</span>
                        <span className="font-bold">30.000-150.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Backend (ako potrebno)</span>
                        <span className="font-bold">20.000-100.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-100 rounded font-bold">
                        <span>UKUPNO (prva godina)</span>
                        <span className="text-xl">70.000-329.000 RSD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Godišnji Troškovi (nakon prve godine)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Hosting</span>
                        <span className="font-bold">3.000-15.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Domen obnova</span>
                        <span className="font-bold">2.000-4.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Održavanje (opcionalno)</span>
                        <span className="font-bold">0-20.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>Backup (jednostavan)</span>
                        <span className="font-bold">1.000-3.000 RSD</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-100 rounded font-bold">
                        <span>GODIŠNJE</span>
                        <span className="text-xl">6.000-42.000 RSD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Mane Custom Sajta</h3>
              <Card className="mb-8 bg-orange-50 border-orange-200">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-orange-700">Početne Barijere:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Veća početna investicija</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Duže vreme izrade (4-12 nedelja)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Potrebno tehničko znanje</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Sve mora da se programira</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-orange-700">Upravljanje Sadržajem:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Nema ugrađeni CMS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Izmene mogu biti skuplje</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Zavisi od developera</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                          <span>Blog funkcionalnost dodati</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 3: Direktno Poređenje */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Direktno Poređenje - WordPress vs Custom
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-4 text-left font-semibold">Kriterijum</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-blue-600">WordPress</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-purple-600">Custom Sajt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Početni Trošak</td>
                      <td className="border border-gray-300 p-4">15.000-80.000 RSD</td>
                      <td className="border border-gray-300 p-4">50.000-300.000 RSD</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Vreme Izrade</td>
                      <td className="border border-gray-300 p-4">1-3 nedelje</td>
                      <td className="border border-gray-300 p-4">4-12 nedelja</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Godišnji Troškovi</td>
                      <td className="border border-gray-300 p-4">15.000-50.000 RSD</td>
                      <td className="border border-gray-300 p-4">5.000-20.000 RSD</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Brzina Učitavanja</td>
                      <td className="border border-gray-300 p-4">2-5 sekundi</td>
                      <td className="border border-gray-300 p-4">0.5-1.5 sekundi</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Bezbednost</td>
                      <td className="border border-gray-300 p-4">Zahteva pažnju i maintenance</td>
                      <td className="border border-gray-300 p-4">Visok nivo bezbednosti</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Upravljanje Sadržajem</td>
                      <td className="border border-gray-300 p-4">Jednostavno - može svako</td>
                      <td className="border border-gray-300 p-4">Potrebno tehničko znanje</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-medium">Skalabilnost</td>
                      <td className="border border-gray-300 p-4">Ograničena performansama</td>
                      <td className="border border-gray-300 p-4">Neograničena</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-medium">Customizacija</td>
                      <td className="border border-gray-300 p-4">Ograničena temama</td>
                      <td className="border border-gray-300 p-4">Potpuna sloboda</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Chapter 4: Preporuke po Tipovima Biznisa */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-primary" />
                Koji Pristup Odabrati za Vaš Biznis?
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">WordPress je Bolji Izbor za:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Tip Biznisa:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>Blogove i news sajtove</strong> - redovno ažuriranje sadržaja</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>Malu e-commerce</strong> - do 100 proizvoda</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>Portfolio sajtove</strong> - fotografa, dizajnera</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>Lokalne biznise</strong> - restorani, saloni</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Kada je WordPress pravi izbor:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span>Ograničen budžet (ispod 100.000 RSD)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span>Potreba za brzim lansiranjem</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span>Više ljudi treba da uređuje sadržaj</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span>Blog je važan deo strategije</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Custom Sajt je Bolji Izbor za:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Tip Biznisa:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span><strong>SaaS aplikacije</strong> - software as a service</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span><strong>Fintech i banke</strong> - visoki sigurnosni zahtevi</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span><strong>Velika e-commerce</strong> - 500+ proizvoda</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span><strong>Web aplikacije</strong> - kompleksne funkcionalnosti</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Kada je Custom pravi izbor:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span>Budžet preko 100.000 RSD</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span>Performanse su kritične</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span>Jedinstvene funkcionalnosti potrebne</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                            <span>Dugoročna investicija (5+ godina)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 5: Hibridni Pristup */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-primary" />
                Hibridni Pristup - Najbolje od Oba Sveta
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Postoji i treća opcija - hibridni pristup koji kombinuje prednosti oba rešenja. Ovo postaje sve popularniji izbor za biznise koji žele performanse custom sajta sa lakoćom upravljanja.
              </p>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Headless WordPress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">WordPress se koristi samo kao CMS (backend), dok se frontend pravi custom u React/Vue:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Prednosti:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Brzina custom sajta</li>
                          <li>• Lakoća WordPress CMS-a</li>
                          <li>• Bolja bezbednost</li>
                          <li>• Skalabilnost</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Mane:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Kompleksnija implementacija</li>
                          <li>• Veći početni trošak</li>
                          <li>• Potrebno više tehničkog znanja</li>
                          <li>• Hosting može biti skuplji</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Static Site Generators + CMS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Koristi se Jamstack arhitektura - Gatsby/Next.js + Strapi/Contentful:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Prednosti:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Maksimalna brzina</li>
                          <li>• Najbolja bezbednost</li>
                          <li>• CDN optimizacija</li>
                          <li>• Jeftini hosting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Mane:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Složena setup</li>
                          <li>• Ograničene real-time funkcije</li>
                          <li>• Build time za izmene</li>
                          <li>• Specifično znanje potrebno</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 6: 5-Godišnja TCO Analiza */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                5-Godišnja TCO (Total Cost of Ownership) Analiza
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Da bi doneli pravu odluku, bitno je da posmatrate ukupne troškove tokom 5 godina, ne samo početnu investiciju.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">WordPress - 5 Godina</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Početna izrada</span>
                        <span className="font-bold">50.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hosting (5 god × 15.000)</span>
                        <span className="font-bold">75.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Plugin licenci (5 × 15.000)</span>
                        <span className="font-bold">75.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Održavanje (5 × 20.000)</span>
                        <span className="font-bold">100.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Security i backup (5 × 8.000)</span>
                        <span className="font-bold">40.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Redesign (3. godina)</span>
                        <span className="font-bold">30.000 RSD</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>UKUPNO</span>
                        <span className="text-blue-600">370.000 RSD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Custom Sajt - 5 Godina</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Početna izrada</span>
                        <span className="font-bold">150.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hosting (5 god × 8.000)</span>
                        <span className="font-bold">40.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domen (5 × 3.000)</span>
                        <span className="font-bold">15.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backup (5 × 2.000)</span>
                        <span className="font-bold">10.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Manje izmene (5 × 10.000)</span>
                        <span className="font-bold">50.000 RSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Redesign (5. godina)</span>
                        <span className="font-bold">60.000 RSD</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>UKUPNO</span>
                        <span className="text-purple-600">325.000 RSD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-green-800 mb-4">Ključni Nalaz TCO Analize:</h3>
                  <p className="text-green-700">
                    Uprkos većoj početnoj investiciji, custom sajt može biti <strong>45.000 RSD jeftiniji</strong> tokom 5 godina zbog nižih operativnih troškova. Dodatno, dobijate veće performanse, bezbednost i kontrolu.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Decision Framework */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Jednostavan Decision Framework</h2>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Odgovorite na Ova Pitanja:</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">1. Koliki je vaš budžet?</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li>• Ispod 50.000 RSD → <strong className="text-blue-600">WordPress</strong></li>
                        <li>• 50.000-100.000 RSD → <strong className="text-orange-600">Hibridni pristup</strong></li>
                        <li>• Preko 100.000 RSD → <strong className="text-purple-600">Custom sajt</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">2. Koliko brzo treba sajt?</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li>• Manje od mesec dana → <strong className="text-blue-600">WordPress</strong></li>
                        <li>• 1-2 meseca → <strong className="text-orange-600">WordPress ili Hibridni</strong></li>
                        <li>• 2+ meseca → <strong className="text-purple-600">Custom sajt</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">3. Ko će upravljati sadržajem?</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li>• Netehničko osoblje → <strong className="text-blue-600">WordPress</strong></li>
                        <li>• Mešano tehničko/netehničko → <strong className="text-orange-600">Hibridni pristup</strong></li>
                        <li>• Programeri/agencija → <strong className="text-purple-600">Custom sajt</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">4. Koliko su performanse važne?</h4>
                      <ul className="space-y-1 text-sm ml-4">
                        <li>• Osnovne performanse dovoljne → <strong className="text-blue-600">WordPress</strong></li>
                        <li>• Važne ali ne kritične → <strong className="text-orange-600">Hibridni pristup</strong></li>
                        <li>• Kritične za biznis → <strong className="text-purple-600">Custom sajt</strong></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    Još uvek ne znate koji pristup je pravi za vas?
                  </h2>
                  <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                    Naš tim može da analizira vaše potrebe i preporuči najbolje rešenje. Besplatna konsultacija uključuje detaljnu analizu troškova i preporuke.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link to="/kontakt">
                        Zakažite Besplatnu Konsultaciju
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/cene">
                        Pogledajte Cene Oba Pristupa
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

export default BlogArticle15;