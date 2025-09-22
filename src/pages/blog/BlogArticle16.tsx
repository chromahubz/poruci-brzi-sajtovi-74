import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, TrendingUp, PenTool, Target, Heart, Zap, Users, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle16 = () => {
  const quizQuestions = [
    {
      question: "Koja je najvažnija komponenta copywriting-a koji prodaje?",
      options: [
        "Kreativne i duhovite fraze",
        "Fokus na korist za kupca",
        "Komplikovani stručni termini",
        "Dužina teksta"
      ],
      correct: 1,
      explanation: "Copywriting koji prodaje se fokusira na koristi koje kupac dobija, ne na karakteristike proizvoda. Ljudi kupuju rešenja za svoje probleme."
    },
    {
      question: "Koliko procenata ljudi čita samo naslov i nikad ne pročita ostatak teksta?",
      options: [
        "20% ljudi",
        "40% ljudi",
        "60% ljudi",
        "80% ljudi"
      ],
      correct: 3,
      explanation: "Čak 80% ljudi čita samo naslov, zato je kreiranje privlačnog naslova kritično za uspeh bilo kog sadržaja."
    },
    {
      question: "Šta je 'social proof' u copywriting-u?",
      options: [
        "Dokaz da pratite društvene mreže",
        "Svedočanstva i recenzije zadovoljnih kupaca",
        "Broj followers na Instagram-u",
        "Učešće u društvenim događajima"
      ],
      correct: 1,
      explanation: "Social proof su svedočanstva, recenzije, broj zadovoljnih kupaca - sve što pokazuje da drugi ljudi veruju vašem proizvodu/usluzi."
    },
    {
      question: "Koji je najefektivniji način da napišete call-to-action (CTA)?",
      options: [
        "Opšte pozive kao 'Kliknite ovde'",
        "Dugačke opise šta će se desiti",
        "Specifične akcije sa benefitom",
        "Pasivne predloge"
      ],
      correct: 2,
      explanation: "Najbolji CTA je specifičan i govori tačno koju korist kupac dobija. Primer: 'Preuzmite besplatnu analizu' umesto 'Kliknite ovde'."
    },
    {
      question: "Koliko reči treba da ima idealan naslov za blog ili reklamu?",
      options: [
        "3-5 reči",
        "6-10 reči",
        "11-15 reči",
        "Više od 20 reči"
      ],
      correct: 1,
      explanation: "Idealan naslov ima 6-10 reči. Dovoljno je kratak da se brzo pročita, a dovoljno dugačak da objasni vrednost."
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
                Copywriting
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Poruči Sajt Tim</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>10. februar 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>26 min čitanja</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Kako Pisati Sadržaj Koji Prodaje - Copywriting Vodič za Srpske Biznise 2025
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Kompletni vodič kroz copywriting tehnike koje stvarno funkcionišu. Od psihologije kupaca do konkretnih formula za naslove, opise i call-to-action pozive.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Copywriting - sadržaj koji prodaje"
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
                "Naš proizvod je najbolji na tržištu!" - ovakav sadržaj vidite svugde, a retko nekoga ubedi da kupi. Zašto? Jer ne govori o onome što kupci stvarno žele da čuju.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                U ovom vodiču ćete naučiti kako da pišete sadržaj koji ne samo što privlači pažnju, već i pokreće ljude na akciju. Bez obzira da li pišete za sajt, blog, društvene mreže ili reklame - ovi principi će vam pomoći da povećate prodaju.
              </p>
            </div>

            {/* Key Statistics Card */}
            <Card className="my-12 bg-gradient-to-r from-purple-50 to-pink-50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  Copywriting Statistike Koje Morate Znati
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Čita samo naslov</span>
                    <span className="text-2xl font-bold text-purple-600">80%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Odlučuje za 8 sekundi</span>
                    <span className="text-2xl font-bold text-pink-600">90%</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Uticaj social proof</span>
                    <span className="text-2xl font-bold text-blue-600">+92%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Personalizovan sadržaj</span>
                    <span className="text-2xl font-bold text-green-600">+74%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chapter 1: Psihologija Kupovine */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Psihologija Kupovine - Zašto Ljudi Kupuju
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Emocije vs Logika</h3>
              <p className="mb-8 leading-relaxed">
                Ljudi donose odluke srcem, a opravdavaju ih umom. Istraživanja pokazuju da 95% kupovnih odluka se donosi podsvesno, na emotivnom nivou. Tek onda tražimo logične razloge zašto je ta odluka dobra.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      Emotivni Okidači
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <div>
                          <strong>Strah od gubitka (FOMO):</strong><br/>
                          <span className="text-sm">"Samo danas 50% popusta!"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <div>
                          <strong>Želja za statusom:</strong><br/>
                          <span className="text-sm">"Pridružite se eliti koja koristi..."</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <div>
                          <strong>Potreba za sigurnošću:</strong><br/>
                          <span className="text-sm">"Garantovan rezultat ili povraćaj novca"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <div>
                          <strong>Želja za pripadnošću:</strong><br/>
                          <span className="text-sm">"Više od 10.000 zadovoljnih korisnika"</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Logičko Opravdanje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Činjenice i brojevi:</strong><br/>
                          <span className="text-sm">"Povećava produktivnost za 40%"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Sertifikati i nagrade:</strong><br/>
                          <span className="text-sm">"Sertifikovano ISO 9001 standardom"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Studije i istraživanja:</strong><br/>
                          <span className="text-sm">"Dokazano u nezavisnoj studiji"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Garantije i politike:</strong><br/>
                          <span className="text-sm">"30 dana garancije vraćanja novca"</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">6 Glavnih Kupovnih Motiva</h3>
              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Strah (Fear)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3"><strong>Kako koristiti:</strong> Pokažite šta se dešava ako ne kupe vaš proizvod/uslugu.</p>
                    <p className="text-sm bg-red-50 p-3 rounded">
                      <strong>Primer:</strong> "Bez sigurnosnog backup sistema, gubite 2 godine rada za samo 5 minuta kada vam propadne disk. Naši klijenti nikad nisu izgubili podatke."
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Pohlepa (Greed)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3"><strong>Kako koristiti:</strong> Pokažite koliko mogu da uštede ili zarade.</p>
                    <p className="text-sm bg-green-50 p-3 rounded">
                      <strong>Primer:</strong> "Investicija od 50.000 RSD se vraća za 2 meseca kroz uštedu vremena. Naši klijenti štede prosečno 200.000 RSD godišnje."
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Ponos (Pride)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3"><strong>Kako koristiti:</strong> Pokažite kako će se osećati bolje o sebi.</p>
                    <p className="text-sm bg-purple-50 p-3 rounded">
                      <strong>Primer:</strong> "Kada klijenti vide vaš novi sajt, znaće da sarađuju sa ozbiljnom kompanijom. Prvi utisak se pravi samo jednom."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 2: AIDA Formula */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                AIDA Formula - Struktura Savršenog Copywriting-a
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                AIDA je najpoznatija copywriting formula koja postoji više od 100 godina i još uvek funkcioniše. Svaki sadržaj koji prodaje mora da prođe kroz ova 4 koraka:
              </p>

              <div className="space-y-8 mb-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-red-600">A - Attention (Pažnja)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Cilj:</strong> Privući pažnju u prva 3 sekunde.</p>
                    <h4 className="font-semibold mb-3">Tehnike za privlačenje pažnje:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <span><strong>Kontroverzni naslov:</strong> "Zašto 90% sajtova u Srbiji gubi novac"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <span><strong>Brojevi i statistike:</strong> "Ovaj trik povećava prodaju za 287%"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <span><strong>Direktno pitanje:</strong> "Da li gubite klijente zbog sporog sajta?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1" />
                        <span><strong>Obećanje koristili:</strong> "Kako da udvostručite prodaju za 30 dana"</span>
                      </li>
                    </ul>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Primeri dobrih naslova za srpsko tržište:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• "Zašto beogradski frizerski saloni zarađuju 3x više od novosadskih"</li>
                        <li>• "Ovaj restoran u Nišu ima 95% popunjenih stolova svaku večer"</li>
                        <li>• "Kako je auto-servis iz Kragujevca pretruko u lančanu franšizu"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-orange-600">I - Interest (Interesovanje)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Cilj:</strong> Zadržati pažnju kroz relevantan sadržaj.</p>
                    <h4 className="font-semibold mb-3">Kako zadržati interesovanje:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                        <span><strong>Ispričajte priču:</strong> Konkretni primer kako je neko rešio problem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                        <span><strong>Pokažite problem:</strong> Opišite situaciju u kojoj se nalaze</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                        <span><strong>Dajte podatke:</strong> Brojevi, statistike, istraživanja</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                        <span><strong>Postavite hipotezu:</strong> "Šta ako postoji način da..."</span>
                      </li>
                    </ul>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Primer story-telling pristupa:</h5>
                      <p className="text-sm">
                        "Marko je imao frizerski salon u centru Beograda. Uprkos odličnoj lokaciji, jedva je pokrivao kiriju. Problem? Njegovi potencijalni klijenti nisu mogli da ga pronađu na internetu. Kada je neko tražilo 'frizerski salon Terazije', Marko se pojavio tek na 3. strani Google rezultata..."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-blue-600">D - Desire (Želja)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Cilj:</strong> Kreirati snažnu želju za rešenjem.</p>
                    <h4 className="font-semibold mb-3">Tehnike kreiranja želje:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Benefiti, ne karakteristike:</strong> "Štedi 2 sata dnevno" umesto "Automatizovane funkcije"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Social proof:</strong> Svedočanstva, broj korisnika, slučajevi uspehe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Vizuelizacija rezultata:</strong> "Zamislite da svaki dan dobijate 10 novih poziva"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <span><strong>Kontrast sa trenutnim stanjem:</strong> "Umesto 2 klijenta dnevno, imaćete 8"</span>
                      </li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Karakteristike vs Benefiti:</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h6 className="font-medium text-red-600">❌ Karakteristike (loše):</h6>
                          <ul className="space-y-1">
                            <li>• "Responzivni dizajn"</li>
                            <li>• "SEO optimizovan"</li>
                            <li>• "SSL sertifikat"</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-medium text-green-600">✅ Benefiti (dobro):</h6>
                          <ul className="space-y-1">
                            <li>• "Savršen prikaz na mobilnom"</li>
                            <li>• "Prvo mesto na Google pretragama"</li>
                            <li>• "Klijenti veruju vašoj bezbednosti"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-green-600">A - Action (Akcija)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4"><strong>Cilj:</strong> Pokrenuti na konkretnu akciju.</p>
                    <h4 className="font-semibold mb-3">Elemenati dobrog Call-to-Action:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>Jasan i specifičan:</strong> "Zakažite besplatnu analizu" umesto "Kontaktirajte nas"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>Kreiral hitnost:</strong> "Samo 3 mesta ostalo ovog meseca"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>Smanjiti rizik:</strong> "Besplatno, bez obaveze"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span><strong>Benefit u CTA:</strong> "Počnite da zarađujete više već sutra"</span>
                      </li>
                    </ul>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Primeri dobrih CTA za srpske biznise:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• "Zaradite 100.000 RSD više ovog meseca - Pozovite sada"</li>
                        <li>• "Preuzmite besplatnu analizu vrednu 15.000 RSD"</li>
                        <li>• "Postanite prvi na Google-u za 30 dana - Garantovano"</li>
                        <li>• "Udvostručite broj poziva za 7 dana ili vraćamo novac"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 3: Napredne Tehnike */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <PenTool className="w-8 h-8 text-primary" />
                Napredne Copywriting Tehnike
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">1. PAS Formula (Problem-Agitate-Solution)</h3>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Problem (Identifikujte problem)</h4>
                      <p className="text-sm bg-red-50 p-3 rounded">
                        "Da li vaš sajt izgleda kao da je napravljen 2010. godine? Možda imate osećaj da izgubite klijente pre nego što su vas uopšte kontaktirali?"
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Agitate (Pogoršate problem)</h4>
                      <p className="text-sm bg-orange-50 p-3 rounded">
                        "Svaki dan kada čekate da 'popravite' sajt, vaši konkurenti privlače klijente koji su trebali da budu vaši. Jedan mesec kašnjenja može da košta 50.000 RSD izgubljene zarade."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Solution (Ponudite rešenje)</h4>
                      <p className="text-sm bg-green-50 p-3 rounded">
                        "Naš tim može da napravi profesionalan sajt koji privlači klijente već za 2 nedelje. Rezultat: sajt koji radi za vas 24/7 i dovodi nove klijente dok spavate."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-primary">2. Before vs After Technique</h3>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">PRE (trenutno stanje)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>❌ Niko ne može da vas pronađe na Google-u</li>
                        <li>❌ Sajt se sporo učitava na mobilnom</li>
                        <li>❌ Posetnioci odlaze za 5 sekundi</li>
                        <li>❌ Gubite 70% potencijalnih klijenata</li>
                        <li>❌ Konkurencija vam "krade" kupce</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">POSLE (buduće stanje)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>✅ Prvi ste na lokalnim pretragama</li>
                        <li>✅ Sajt se učitava za manje od 1 sekunde</li>
                        <li>✅ Posetníci provode 3+ minuta na sajtu</li>
                        <li>✅ 40% više poziva i upita</li>
                        <li>✅ Vi privlačite konkurentove kupce</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold mb-6 text-primary">3. Social Proof Framework</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Tipovi Social Proof-a</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Brojevi korisnika:</strong><br/>
                          <span className="text-sm">"Više od 500 zadovoljnih klijenata"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Svedočanstva sa imenima:</strong><br/>
                          <span className="text-sm">"Marko P. iz Beograda povećao promet za 150%"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Prepoznatljive kompanije:</strong><br/>
                          <span className="text-sm">"Koristì nas Telekom, AIK, Coffee Dream"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                        <div>
                          <strong>Medijska pokrivenost:</strong><br/>
                          <span className="text-sm">"Preporučuje Blic Biznis i Startit"</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Kako Kreirati Credible Social Proof</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Specifični detalji:</strong><br/>
                          <span className="text-sm">Ne "odličan", već "povećao prodaju za 40%"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Video svedočanstva:</strong><br/>
                          <span className="text-sm">Mnogo veći uticaj od teksta</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Before/after fotografije:</strong><br/>
                          <span className="text-sm">Vizuelni dokaz rezultata</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Kontaktni podaci:</strong><br/>
                          <span className="text-sm">Ime, grad, kompanija ili pozicija</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">4. Objection Handling u Copywriting-u</h3>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Najčešće Prigovore i Kako ih Rešiti</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-red-600 mb-2">Prigovor: "Previše je skupo"</h5>
                      <p className="text-sm mb-2"><strong>Odgovor:</strong> Pokažite ROI i troškove neakcije.</p>
                      <p className="text-sm bg-gray-50 p-2 rounded">
                        "Investicija od 80.000 RSD se vrati za 2 meseca kroz dodatne klijente. Koštanje nepostojanja professionnog sajta: 300.000+ RSD izgubljene zarade godišnje."
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-red-600 mb-2">Prigovor: "Nemam vremena"</h5>
                      <p className="text-sm mb-2"><strong>Odgovor:</strong> Pokažite da štede vreme dugoročno.</p>
                      <p className="text-sm bg-gray-50 p-2 rounded">
                        "Investirate 2 sata nedeljno u prvom mesecu, a štedite 10 sati mesečno nakon toga. Mi radimo sve tehničke stvari, vi samo odobravljate."
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-red-600 mb-2">Prigovor: "Neće mi to raditi"</h5>
                      <p className="text-sm mb-2"><strong>Odgovor:</strong> Social proof i garancije.</p>
                      <p className="text-sm bg-gray-50 p-2 rounded">
                        "Naši prošli klijenti su mi rekli isto pre početka. Evo šta kaže Marko nakon 3 meseca: [konkretno svedočanstvo]. Plus imate garanciju vraćanja novca."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 4: Copywriting za Različite Kanale */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Copywriting za Različite Kanale
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">1. Website Copy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Homepage struktura:</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Headline:</strong> Glavna vrednost u 10 reči</li>
                          <li><strong>Subheadline:</strong> Objašnjenje u 20 reči</li>
                          <li><strong>Hero CTA:</strong> Primaran poziv na akciju</li>
                          <li><strong>Social proof:</strong> Brojevi, logoi, recenzije</li>
                          <li><strong>Benefiti:</strong> 3 glavne prednosti</li>
                          <li><strong>How it works:</strong> 3 koraka procesa</li>
                          <li><strong>Objection handling:</strong> FAQ sekcija</li>
                          <li><strong>Final CTA:</strong> Poslednja prilika za akciju</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Primer homepage headline-a:</h4>
                        <div className="space-y-3 text-sm">
                          <div className="bg-green-50 p-3 rounded">
                            <p><strong>✅ Dobro:</strong> "Sajt koji privlači klijente dok spavate"</p>
                          </div>
                          <div className="bg-red-50 p-3 rounded">
                            <p><strong>❌ Loše:</strong> "Profesionalni web development servisi"</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded">
                            <p><strong>✅ Dobro:</strong> "Prvo mesto na Google-u za 60 dana ili besplatno"</p>
                          </div>
                          <div className="bg-red-50 p-3 rounded">
                            <p><strong>❌ Loše:</strong> "SEO optimizacija i internet marketing"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">2. Social Media Copy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Facebook/Instagram:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Hook u prva 3 reda</li>
                          <li>• Kratki paragrafi (1-2 reda)</li>
                          <li>• Emoji za pažnju (umreno)</li>
                          <li>• Jasan CTA na kraju</li>
                          <li>• Hashtag maksimalno 5</li>
                        </ul>
                        <div className="bg-purple-50 p-3 rounded mt-3">
                          <p className="text-xs">
                            <strong>Primer:</strong><br/>
                            "3 greške koje koštaju 100.000 RSD mesečno 💸<br/><br/>
                            Velika greška #1: Spor sajt<br/>
                            Greška #2: Bez Google My Business<br/>
                            Greška #3: Nema call-to-action<br/><br/>
                            Mi rešavamo sve 3 za 30 dana.<br/>
                            👆 Link u bio za besplatnu analizu"
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">LinkedIn (B2B):</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Profesionalni ton</li>
                          <li>• Industrijski insights</li>
                          <li>• Podatci i trendovi</li>
                          <li>• Poziv na networking</li>
                          <li>• Dodeli value before selling</li>
                        </ul>
                        <div className="bg-blue-50 p-3 rounded mt-3">
                          <p className="text-xs">
                            <strong>Primer:</strong><br/>
                            "92% B2B kupaca započinje istraživanje na internetu.<br/><br/>
                            Ako vaša kompanija nije vidljiva u prva 3 Google rezultata, gubite 68% potencijalnih klijenata.<br/><br/>
                            Evo kako da se pozicionirate kao industry leader..."
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Instagram Stories:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Vertikalni format</li>
                          <li>• Interactive elementi</li>
                          <li>• Behind-the-scenes</li>
                          <li>• Quick tips</li>
                          <li>• Swipe up/link in bio</li>
                        </ul>
                        <div className="bg-pink-50 p-3 rounded mt-3">
                          <p className="text-xs">
                            <strong>Primer:</strong><br/>
                            "Ovaj simple trik povećava prodaju za 40% ⬆️<br/><br/>
                            Glasuj 👆<br/>
                            A) Dodaj urgency u CTA<br/>
                            B) Promeni boju dugmeta<br/><br/>
                            Odgovor sutra u 19h!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">3. Email Marketing Copy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Subject Line Formule:</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h5 className="font-medium mb-2">High-Converting Patterns:</h5>
                            <ul className="space-y-1">
                              <li>• "Re: [topic]" - izgleda kao reply</li>
                              <li>• "[Name], quick question" - personalizovano</li>
                              <li>• "Problem sa vašim [industry]" - problem-focused</li>
                              <li>• "Case study: kako je [rezultat]" - social proof</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Srpski Primeri:</h5>
                            <ul className="space-y-1">
                              <li>• "Marko, da li vaš sajt radi za vas?"</li>
                              <li>• "Re: Analiza vašeg sajta"</li>
                              <li>• "3 greške koje vas koštaju klijente"</li>
                              <li>• "Kako je frizerka povećala prihod za 180%"</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Email Body Struktura:</h4>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="space-y-3 text-sm">
                            <div>
                              <strong>Prvi red:</strong> Personalizovani hook<br/>
                              <span className="text-gray-600">"Marko, primetio sam da vaš sajt nema SSL sertifikat..."</span>
                            </div>
                            <div>
                              <strong>Problem:</strong> Objasni važnost problema<br/>
                              <span className="text-gray-600">"Ovo znači da Google rangira vaš sajt niže i klijenti ne veruju bezbednosti..."</span>
                            </div>
                            <div>
                              <strong>Rešenje:</strong> Kako možete pomoći<br/>
                              <span className="text-gray-600">"Mi možemo da to rešimo za 24h i poboljšamo vam rangiranje..."</span>
                            </div>
                            <div>
                              <strong>CTA:</strong> Jedan jasan poziv na akciju<br/>
                              <span className="text-gray-600">"Da zakazujemo 15-minutni poziv sutra u 10h?"</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 5: A/B Testing Copy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                A/B Testiranje Copywriting-a
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Čak i najbolji copywriter-i ne mogu da predvide koji tekst će najbolje raditi. A/B testiranje vam omogućava da na osnovu podataka optimizujete svoj copywriting.
              </p>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Šta Testirati Prvi</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Najveći Uticaj na Konverzije</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded font-bold">1</span>
                        <div>
                          <strong>Headline:</strong> Može da povećakonverzije 100%+<br/>
                          <span className="text-sm text-gray-600">Testiraj benefit vs. feature focus</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold">2</span>
                        <div>
                          <strong>CTA button tekst:</strong> 20-50% poboljšanje<br/>
                          <span className="text-sm text-gray-600">"Pocnite besplatno" vs "Registrujte se"</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold">3</span>
                        <div>
                          <strong>Social proof pozicija:</strong> 15-30% poboljšanje<br/>
                          <span className="text-sm text-gray-600">Na vrhu vs u sredini vs na dnu</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">4</span>
                        <div>
                          <strong>Value proposition:</strong> 10-25% poboljšanje<br/>
                          <span className="text-sm text-gray-600">Različito benefit highlighting</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Primer A/B Test Setup-a</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded p-3">
                        <h5 className="font-semibold mb-2">Test: Homepage Headline</h5>
                        <div className="space-y-2 text-sm">
                          <div className="bg-red-50 p-2 rounded">
                            <strong>Varijanta A:</strong> "Profesionalni web sajt za vaš biznis"
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <strong>Varijanta B:</strong> "Sajt koji donosi 5+ novih klijenata mesečno"
                          </div>
                        </div>
                      </div>
                      <div className="border rounded p-3">
                        <h5 className="font-semibold mb-2">Metrika: Conversion Rate</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Varijanta A: 2.1% conversion</li>
                          <li>• Varijanta B: 4.8% conversion</li>
                          <li>• <strong>Pobeda: +128% poboljšanje!</strong></li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">A/B Test Best Practices</h3>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">✅ Dobro Testiranje</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Test samo jednu promennu po testu</li>
                        <li>• Minimum 1000 posetnicev po varijanti</li>
                        <li>• Pusti test da traje minimum 7 dana</li>
                        <li>• Testiraj veliki elementi prvo (headline, CTA)</li>
                        <li>• Imaj hipotezu pre test-a</li>
                        <li>• Statistical significance minimum 95%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">❌ Loše Testiranje</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Tesairanje više stvari istovremeno</li>
                        <li>• Prekratak sample size (manje od 100)</li>
                        <li>• Zaustavljanje test-a nakon 1-2 dana</li>
                        <li>• Testiranje boja pre sadržaja</li>
                        <li>• Testiranje bez hipoteze</li>
                        <li>• Donošene odluke na osnovu 80% confidence</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 6: Česte Greške */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-primary" />
                10 Najčešćih Copywriting Grešaka u Srbiji
              </h2>

              <div className="space-y-4">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">1. Fokus na Karakteristike umesto na Benefite</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="mb-2"><strong className="text-red-600">❌ Loše:</strong></p>
                        <p className="text-sm bg-red-50 p-3 rounded">"Naš sajt ima responzivni dizajn, SSL sertifikat i SEO optimizaciju."</p>
                      </div>
                      <div>
                        <p className="mb-2"><strong className="text-green-600">✅ Dobro:</strong></p>
                        <p className="text-sm bg-green-50 p-3 rounded">"Vaši klijenti će vas lako pronaći na Google-u i verovati vašoj bezbednosti na svakom uređaju."</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">2. Generički Headline-ovi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="mb-2"><strong className="text-red-600">❌ Loše:</strong></p>
                        <p className="text-sm bg-red-50 p-3 rounded">"Dobrodošli na naš sajt. Mi smo najbolji u oblasti web development-a."</p>
                      </div>
                      <div>
                        <p className="mb-2"><strong className="text-green-600">✅ Dobro:</strong></p>
                        <p className="text-sm bg-green-50 p-3 rounded">"Povećajte prodaju za 40% sa sajtom koji privlači klijente 24/7"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">3. Slabi Call-to-Action</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="mb-2"><strong className="text-red-600">❌ Loše:</strong></p>
                        <p className="text-sm bg-red-50 p-3 rounded">"Kontaktirajte nas", "Kliknite ovde", "Saznajte više"</p>
                      </div>
                      <div>
                        <p className="mb-2"><strong className="text-green-600">✅ Dobro:</strong></p>
                        <p className="text-sm bg-green-50 p-3 rounded">"Zakažite besplatnu analizu vrednu 15.000 RSD", "Počnite da zarađujete više već sutra"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">4. Nedostatak Social Proof-a</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Problem:</strong> Nijedan spominju rezultate klijenata, brojeve, svedočanstva</p>
                    <p className="mb-2"><strong>Rešenje:</strong> Dodati konkretne brojeve i imenovana svedočanstva</p>
                    <p className="text-sm bg-green-50 p-3 rounded">
                      "Više od 200 sajta napravljenih, 95% klijenata preporučuje nas. Marko iz Beograda: 'Broj poziva se povećao za 3x u prva 2 meseca'"
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">5. Previše Teksta, Premalo Skeniranjih</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>Problem:</strong> Dugački paragrafi, nema bullet point-ova, nema boldovanih ključnih fraza</p>
                    <p className="mb-2"><strong>Rešenje:</strong> Kratki paragrafi (1-3 reda), bullet point liste, highlight ključne koristi</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Wins Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">5 Quick Wins za Bolje Copywriting</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Danas Možete Implementirati</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">1</span>
                        <div>
                          <h4 className="font-semibold">Dodajte brojeve u headline</h4>
                          <p className="text-sm text-gray-600">Umesto "povećava prodaju" → "povećava prodaju za 40%"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">2</span>
                        <div>
                          <h4 className="font-semibold">Promenite CTA da bude specifičniji</h4>
                          <p className="text-sm text-gray-600">Umesto "Kontakt" → "Zakazujte besplatnu analizu"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">3</span>
                        <div>
                          <h4 className="font-semibold">Dodajte jedan konkretan social proof</h4>
                          <p className="text-sm text-gray-600">Broj klijenata, procenat zadovoljnih, konkretno svedočanstvo</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Sledeće Nedelje Implementirajte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">4</span>
                        <div>
                          <h4 className="font-semibold">Napišite benefit-focused descriptions</h4>
                          <p className="text-sm text-gray-600">Za svaku uslugu objasnite konkretnu korist za klijenta</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">5</span>
                        <div>
                          <h4 className="font-semibold">Napravite objection-handling sekiju</h4>
                          <p className="text-sm text-gray-600">FAQ koja rešava 5 najčešćih razloga zašto ljudi ne kupuju</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quiz Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Testirajte Svoje Copywriting Znanje</h2>
              <Quiz questions={quizQuestions} />
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="text-center py-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">
                    Spremni da napišete sadržaj koji stvarno prodaje?
                  </h2>
                  <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                    Naš tim može da napiše copywriting za vaš sajt, reklame i email kampanje. Koristimo dokazane tehnike koje povećavaju konverzije za 50%+.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link to="/kontakt">
                        Napravi Mi Sadržaj Koji Prodaje
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/cene">
                        Pogledaj Cene Copywriting Usluga
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

export default BlogArticle16;