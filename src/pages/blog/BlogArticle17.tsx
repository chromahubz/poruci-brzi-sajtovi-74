import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, TrendingUp, BarChart3, Target, Eye, MousePointer, Smartphone, Globe, Settings, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle17 = () => {
  const quizQuestions = [
    {
      question: "Šta je bounce rate i šta znači ako je visok?",
      options: [
        "Procenat posetilaca koji kliknu na reklame",
        "Procenat posetilaca koji napuste sajt sa samo jedne stranice",
        "Procenat posetilaca koji se registruju",
        "Procenat posetilaca koji kupe proizvod"
      ],
      correct: 1,
      explanation: "Bounce rate je procenat posetilaca koji napuste sajt bez gledanja drugih stranica. Visok bounce rate (preko 70%) obično znači da sadržaj nije relevantan ili je sajt spor."
    },
    {
      question: "Koliko treba da traje prosečno vreme na stranici za dobar engagement?",
      options: [
        "Manje od 30 sekundi",
        "1-2 minuta",
        "3-5 minuta",
        "Više od 10 minuta"
      ],
      correct: 1,
      explanation: "Za blog sadržaj 1-2 minuta je dobar pokazatelj. Za prodajne stranice dovoljno je 30-90 sekundi ako posetilac preduzme željenu akciju."
    },
    {
      question: "Šta pokazuje 'Direct' traffic u Google Analytics?",
      options: [
        "Saobraćaj sa društvenih mreža",
        "Saobraćaj sa Google pretrage",
        "Posetioce koji su ukucali URL direktno ili koristili bukmark",
        "Saobraćaj sa plaćenih reklama"
      ],
      correct: 2,
      explanation: "'Direct' traffic predstavlja posetioce koji su ukucali vaš URL direktno u browser ili koristili saved bookmark. Takođe može uključivati unknown sources."
    },
    {
      question: "Koji conversion rate se smatra dobrim za B2B sajtove?",
      options: [
        "1-2%",
        "2-5%",
        "5-10%",
        "10%+"
      ],
      correct: 1,
      explanation: "Za B2B sajtove conversion rate od 2-5% se smatra dobrim. B2C sajtovi obično imaju niže stope (1-3%) zbog impulse buying nature."
    },
    {
      question: "Koliko često treba proveravati Google Analytics podatke?",
      options: [
        "Svaki dan",
        "Jednom nedeljno",
        "Jednom mesečno",
        "Kvartalno"
      ],
      correct: 1,
      explanation: "Za optimalne rezultate, proveravajte ključne metrike jednom nedeljno, a detaljnu analizu radite mesečno. Dnevni monitoring je potreban tokom kampanja."
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
                Google Analytics
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Poruči Sajt Tim</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>12. februar 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>28 min čitanja</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Google Analytics za Početnike - Kompletni Vodič za Srpske Biznise 2025
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Naučite kako da postavite, koristite i tumačite Google Analytics 4. Od osnovnih metrika do naprednih analiza - sve što trebate za data-driven odluke.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Google Analytics dashboard za početnike"
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
                "Koliko ljudi posećuje moj sajt? Odakle dolaze? Šta rade kada dođu?" - ova pitanja su ključna za svaki biznis, a Google Analytics vam daje sve odgovore. Besplatno.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                U ovom vodiču ćete naučiti kako da postavite Google Analytics 4 (GA4), razumete najvažnije metrike i koristite podatke za povećanje prodaje. Napisano je za početnike - bez tehničkog žargona.
              </p>
            </div>

            {/* Key Benefits Card */}
            <Card className="my-12 bg-gradient-to-r from-green-50 to-blue-50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <BarChart3 className="w-5 h-5" />
                  Zašto Vam Treba Google Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Besplatan alat</span>
                    <span className="text-2xl font-bold text-green-600">0 RSD</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">ROI poboljšanje</span>
                    <span className="text-2xl font-bold text-blue-600">+40%</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Data za odluke</span>
                    <span className="text-2xl font-bold text-purple-600">24/7</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Competitive advantage</span>
                    <span className="text-2xl font-bold text-orange-600">Veliki</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chapter 1: Šta je Google Analytics */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                Šta je Google Analytics i Zašto Vam Treba
              </h2>

              <h3 className="text-2xl font-semibold mb-6 text-primary">Google Analytics 4 (GA4) - Nova Generacija</h3>
              <p className="mb-8 leading-relaxed">
                Google Analytics 4 je najnovija verzija Google-ovog besplatnog web analytics alata. Zamenio je Universal Analytics (stari GA) u julu 2023. godine i fokusiran je na praćenje korisničkog putovanja kroz različite uređaje i platforme.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Šta GA4 Može Da Vam Kaže
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Ko posećuje sajt:</strong><br/>
                          <span className="text-sm">Grad, zemlja, godine, pol, interesovanja</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Odakle dolaze:</strong><br/>
                          <span className="text-sm">Google pretraga, Facebook, direktno, email</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Šta rade na sajtu:</strong><br/>
                          <span className="text-sm">Koje stranice čitaju, koliko vremena provode</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <strong>Da li kupuju/kontaktiraju:</strong><br/>
                          <span className="text-sm">Conversions, goals, e-commerce praćenje</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Praktični Primeri Upotrebe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Frizerski salon:</strong><br/>
                          <span className="text-sm">Vidi da 80% poziva dolazi nakon blog čitanja</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>E-commerce:</strong><br/>
                          <span className="text-sm">Otkriva da mobilni korisnici napuštaju na checkout-u</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>B2B kompanija:</strong><br/>
                          <span className="text-sm">Vidi da LinkedIn generiše najbolje leadove</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-500 mt-1" />
                        <div>
                          <strong>Restoran:</strong><br/>
                          <span className="text-sm">Otkriva da jelovnik stranica ima najveći bounce rate</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-primary">GA4 vs Universal Analytics - Šta je Novo?</h3>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">Stari GA (Universal Analytics)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Fokus na sesije i page views</li>
                        <li>• Desktop-centric praćenje</li>
                        <li>• Kompleksno podešavanje goals</li>
                        <li>• Ograničeno cross-device praćenje</li>
                        <li>• Prestao da radi 1. jula 2023</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Novi GA4</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Event-based model</li>
                        <li>• Mobile-first approach</li>
                        <li>• Lakše podešavanje conversions</li>
                        <li>• Napredni cross-device i cross-platform</li>
                        <li>• AI-powered insights</li>
                        <li>• Bolji privacy controls</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Chapter 2: Postavka GA4 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-primary" />
                Kako Postaviti Google Analytics 4 - Korak po Korak
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Korak 1: Kreiranje Google Analytics Naloga</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded font-bold">1</span>
                        <div>
                          <p><strong>Idite na:</strong> <a href="https://analytics.google.com" className="text-blue-600 underline">analytics.google.com</a></p>
                          <p className="text-sm text-gray-600">Koristite isti Google nalog koji imate za Gmail ili Google Ads</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded font-bold">2</span>
                        <div>
                          <p><strong>Kliknite "Start measuring"</strong></p>
                          <p className="text-sm text-gray-600">Ako već imate GA nalog, kliknite "Admin" pa "Create Account"</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded font-bold">3</span>
                        <div>
                          <p><strong>Unesite Account Name:</strong> "Naziv Vaše Kompanije"</p>
                          <p className="text-sm text-gray-600">Primer: "Frizerski salon Martina" ili "Auto servis Miloš"</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Korak 2: Kreiranje Property (Svojstvo)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded font-bold">1</span>
                        <div>
                          <p><strong>Property name:</strong> Naziv vašeg sajta</p>
                          <p className="text-sm text-gray-600">Primer: "www.salon-martina.rs" ili "Glavni sajt"</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded font-bold">2</span>
                        <div>
                          <p><strong>Vremenska zona:</strong> (GMT+01:00) Belgrade</p>
                          <p className="text-sm text-gray-600">Važno za tačne vremenske analize</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded font-bold">3</span>
                        <div>
                          <p><strong>Currency:</strong> Serbian Dinar (RSD)</p>
                          <p className="text-sm text-gray-600">Za e-commerce praćenje</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Korak 3: Podešavanje Data Stream</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded font-bold">1</span>
                        <div>
                          <p><strong>Odaberite platform:</strong> "Web"</p>
                          <p className="text-sm text-gray-600">Za praćenje web sajta (ne app)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded font-bold">2</span>
                        <div>
                          <p><strong>Website URL:</strong> https://www.vašsajt.rs</p>
                          <p className="text-sm text-gray-600">Bez "/" na kraju. Koristite https://</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded font-bold">3</span>
                        <div>
                          <p><strong>Stream name:</strong> "Web data stream" ili naziv sajta</p>
                          <p className="text-sm text-gray-600">Dobićete Measurement ID (G-XXXXXXXXXX)</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">Korak 4: Instaliranje Tracking Koda</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Opcija A: WordPress Plugin (najlakše)</h4>
                        <ol className="space-y-2 text-sm">
                          <li>1. Instaliraj "Site Kit by Google" plugin</li>
                          <li>2. Aktiviraj i povezuj GA4 nalog</li>
                          <li>3. Unesi Measurement ID iz GA4</li>
                          <li>4. Plugin automatski dodaje kod</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Opcija B: Google Tag Manager (preporučeno)</h4>
                        <ol className="space-y-2 text-sm">
                          <li>1. Kreiraj GTM nalog na tagmanager.google.com</li>
                          <li>2. Dodaj GTM kod u &lt;head&gt; i &lt;body&gt; sajta</li>
                          <li>3. Kreiraj GA4 tag u GTM-u</li>
                          <li>4. Publish changes</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Opcija C: Direktno dodavanje (zahteva kodiranje)</h4>
                        <div className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                          <code>{`<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`}</code>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Zameniti G-XXXXXXXXXX sa vašim Measurement ID</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 3: Ključne Metrike */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                Najvažnije Metrike Koje Morate Razumeti
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                GA4 prati hiljade različitih metrika, ali za početak trebate razumeti samo 8-10 najvažnijih. Evo objašnjenja za svaku:
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">👥 Users (Korisnici)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta znači:</strong> Broj jedinstvenih ljudi koji su posetili sajt</p>
                        <p className="mb-3"><strong>Kako se računa:</strong> Jedan korisnik = jedna osoba, bez obzira koliko puta dolazi</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje koliko ljudi dosežete</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Benchmarks:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Lokalni biznis:</strong> 100-1000/mesec</li>
                          <li>• <strong>E-commerce:</strong> 1000-10.000/mesec</li>
                          <li>• <strong>Blog:</strong> 500-5000/mesec</li>
                          <li>• <strong>B2B:</strong> 200-2000/mesec</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">📊 Sessions (Sesije)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta znači:</strong> Broj poseta vašem sajtu</p>
                        <p className="mb-3"><strong>Kako se računa:</strong> Nova sesija počinje kad neko dođe na sajt</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje aktivnost i ponavljanje poseta</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Sessions vs Users odnos:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>1.0-1.2:</strong> Malo ponavljanja</li>
                          <li>• <strong>1.3-1.5:</strong> Dobar returning visitors</li>
                          <li>• <strong>1.6+:</strong> Odlična lojalnost</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">📈 Page Views (Pregledi Stranica)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta znači:</strong> Ukupan broj stranica koje su pogledane</p>
                        <p className="mb-3"><strong>Kako se računa:</strong> Svaki put kad neko učita stranicu</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje engagement i navigaciju po sajtu</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Pages per Session:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>1.0-1.5:</strong> Loš engagement</li>
                          <li>• <strong>1.5-2.5:</strong> Prosečan engagement</li>
                          <li>• <strong>2.5-4.0:</strong> Dobar engagement</li>
                          <li>• <strong>4.0+:</strong> Odličan engagement</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">⏱️ Average Session Duration (Prosečno Vreme Sesije)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta znači:</strong> Prosečno vreme koje korisnik provede na sajtu</p>
                        <p className="mb-3"><strong>Kako se računa:</strong> Ukupno vreme / broj sesija</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje da li sadržaj zadržava pažnju</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Benchmarks po industriji:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Blog/News:</strong> 2-4 minuta</li>
                          <li>• <strong>E-commerce:</strong> 1-3 minuta</li>
                          <li>• <strong>B2B:</strong> 2-5 minuta</li>
                          <li>• <strong>Lokalni biznis:</strong> 1-2 minuta</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">🚪 Bounce Rate (Stopa Odbačaja)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta znači:</strong> Procenat korisnika koji napuste sajt sa samo jedne stranice</p>
                        <p className="mb-3"><strong>Kako se računa:</strong> (Single-page sessions / Total sessions) × 100</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje relevantnost sadržaja</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Šta znače različite stope:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>&lt;40%:</strong> Odličan engagement</li>
                          <li>• <strong>40-55%:</strong> Prosečan</li>
                          <li>• <strong>55-65%:</strong> Zabrinjavajući</li>
                          <li>• <strong>&gt;65%:</strong> Problem sa sadržajem/UX</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 4: Navigation kroz GA4 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Kako Navigirati kroz GA4 Interface
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                GA4 interface može da bude zbunjujući na početku. Evo detaljnog vodiča kroz najvažnije sekcije:
              </p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">📊 Home Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p><strong>Šta vidite:</strong> Pregled najvažnijih metrika za poslednjih 7 dana</p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2">Ključni kartoni:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Users - broj korisnika</li>
                            <li>• New users - novi korisnici</li>
                            <li>• Sessions - broj sesija</li>
                            <li>• Bounce rate - stopa odbačaja</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Insights kartoni:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Top acquisition channels</li>
                            <li>• Most popular pages</li>
                            <li>• User demographics</li>
                            <li>• Real-time activity</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm"><strong>Saviet:</strong> Koristite Home kao quick health check svaki put kad otvorite GA4.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">📈 Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Reports Snapshot</h4>
                        <p className="text-sm mb-3">Brzi pregled svih ključnih metrika u jednom mestu</p>
                        <ul className="text-sm space-y-1">
                          <li>• User acquisition - odakle dolaze korisnici</li>
                          <li>• Audience insights - demografija korisnika</li>
                          <li>• Page views and screen views - najpopularnije stranice</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Realtime</h4>
                        <p className="text-sm mb-3">Šta se dešava na sajtu UPRAVO SADA</p>
                        <ul className="text-sm space-y-1">
                          <li>• Broj aktivnih korisnika</li>
                          <li>• Koje stranice trenutno čitaju</li>
                          <li>• Odakle dolaze (traffic sources)</li>
                          <li>• Geografska lokacija</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Audience (Publika)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Demographics:</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Godine korisnika</li>
                              <li>• Pol</li>
                              <li>• Interesovanja</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Tech:</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Browser (Chrome, Safari...)</li>
                              <li>• Device (Desktop, Mobile)</li>
                              <li>• Operating System</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Acquisition (Pribavljanje)</h4>
                        <p className="text-sm mb-3">Najvažnija sekcija - odakle dolaze vaši korisnici</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Traffic Sources:</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Organic Search (Google)</li>
                              <li>• Direct (ukucali URL)</li>
                              <li>• Social (Facebook, Instagram)</li>
                              <li>• Email</li>
                              <li>• Paid Search (Google Ads)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Key Metrics:</h5>
                            <ul className="text-xs space-y-1">
                              <li>• Users po source-u</li>
                              <li>• Conversion rate po kanalu</li>
                              <li>• Revenue per source</li>
                              <li>• Bounce rate po kanalu</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Engagement</h4>
                        <p className="text-sm mb-3">Kako se korisnici ponašaju na vašem sajtu</p>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Pages and screens:</strong> Najpopularnije stranice</li>
                          <li>• <strong>Events:</strong> Akcije koje korisnici rade (kliktovi, download...)</li>
                          <li>• <strong>Conversions:</strong> Goal completions i ključne akcije</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">🎯 Explore</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p><strong>Napredni alati za customizovane analize</strong></p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2">Free Form:</h5>
                          <p className="text-sm mb-2">Kreiranje custom izveštaja sa bilo kojim metrikama i dimensijama</p>
                          <p className="text-xs text-gray-600">Primer: "Koliko korisnika iz Beograda kupuje proizvod X?"</p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Funnel Exploration:</h5>
                          <p className="text-sm mb-2">Analiza koraka u conversion funnel-u</p>
                          <p className="text-xs text-gray-600">Primer: Home → Product Page → Cart → Checkout</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm"><strong>Saviet:</strong> Explore koristite kad osnovni izveštaji ne daju odgovor na vaše pitanje.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 5: Analiza Traffic Sources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Razumevanje Traffic Sources - Odakle Dolaze Korisnici
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Analiza traffic sources je ključ za razumevanje koje marketing strategije funkcionišu. GA4 grupiše saobraćaj u nekoliko glavnih kategorija:
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">🔍 Organic Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta je:</strong> Korisnici koji su vas našli preko Google, Bing pretrage (besplatno)</p>
                        <p className="mb-3"><strong>Kako prepoznati:</strong> Source = "google", Medium = "organic"</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje uspeh SEO strategije</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Šta treba analizirati:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Koje ključne reči donose saobraćaj</li>
                          <li>• Conversion rate organic traffic-a</li>
                          <li>• Landing pages sa najboljim performansama</li>
                          <li>• Bounce rate za organic posetioce</li>
                        </ul>
                        <div className="bg-green-50 p-2 rounded text-xs mt-3">
                          <strong>Benchmark:</strong> Organic treba da čini 40-60% ukupnog saobraćaja
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">🔗 Direct</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta je:</strong> Korisnici koji su ukucali vaš URL direktno ili koristili bookmark</p>
                        <p className="mb-3"><strong>Kako prepoznati:</strong> Source = "direct", Medium = "(none)"</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje brand awareness i lojalnost</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Stvarni sources "Direct" saobraćaja:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Ukucali URL u browser</li>
                          <li>• Bookmark/favorites</li>
                          <li>• Emails bez UTM tagova</li>
                          <li>• Mobile apps (WhatsApp, Viber)</li>
                          <li>• Dark social (privatne poruke)</li>
                        </ul>
                        <div className="bg-blue-50 p-2 rounded text-xs mt-3">
                          <strong>Benchmark:</strong> Direct treba da čini 20-40% ukupnog saobraćaja
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">📱 Social</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta je:</strong> Saobraćaj sa društvenih mreža (Facebook, Instagram, LinkedIn)</p>
                        <p className="mb-3"><strong>Kako prepoznati:</strong> Source = "facebook.com", Medium = "social"</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Pokazuje engagement na social media</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Koje platforme pratiti:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Facebook:</strong> Najbolji za lokalne biznise</li>
                          <li>• <strong>Instagram:</strong> Vizuelni sadržaj, mlađa publika</li>
                          <li>• <strong>LinkedIn:</strong> B2B, profesionalci</li>
                          <li>• <strong>YouTube:</strong> Video content</li>
                        </ul>
                        <div className="bg-purple-50 p-2 rounded text-xs mt-3">
                          <strong>Napomena:</strong> Social traffic često ima visok bounce rate
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">📧 Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta je:</strong> Korisnici koji su kliknuli link u email-u</p>
                        <p className="mb-3"><strong>Kako prepoznati:</strong> Medium = "email"</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Najveći ROI od svih kanala</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Kako pravilno tagirati email linkove:</h5>
                        <div className="bg-gray-100 p-2 rounded text-xs">
                          <code>
                            https://yoursite.com?utm_source=newsletter&utm_medium=email&utm_campaign=february_promo
                          </code>
                        </div>
                        <div className="bg-orange-50 p-2 rounded text-xs mt-3">
                          <strong>Tip:</strong> Email traffic ima najbolji conversion rate (3-5%)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">💰 Paid Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-3"><strong>Šta je:</strong> Plaćene reklame na Google, Bing</p>
                        <p className="mb-3"><strong>Kako prepoznati:</strong> Medium = "cpc" ili "ppc"</p>
                        <p className="mb-3"><strong>Zašto je važno:</strong> Direktna kontrola nad saobraćajem</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Ključne metrike za praćenje:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Cost per click (CPC)</li>
                          <li>• Conversion rate</li>
                          <li>• Cost per conversion</li>
                          <li>• Return on ad spend (ROAS)</li>
                        </ul>
                        <div className="bg-red-50 p-2 rounded text-xs mt-3">
                          <strong>Cilj:</strong> Paid search treba da ima conversion rate 2x veći od organic
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 6: Postavljanje Conversions */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MousePointer className="w-8 h-8 text-primary" />
                Postavljanje Conversions - Praćenje Poslovnih Ciljeva
              </h2>

              <p className="mb-8 text-lg leading-relaxed">
                Conversions su najvažnija metrika jer pokazuju da li sajt stvarno doprinosi vašem biznisu. GA4 automatski prati neke events, ali trebate podesiti specifične za vaš biznis.
              </p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">🎯 Automatski Events (već rade)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">Enhanced Measurement Events:</h5>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span><strong>page_view:</strong> Kad neko učita stranicu</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span><strong>scroll:</strong> Kad neko scroll-uje 90% stranice</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span><strong>click:</strong> Kliktovi na outbound linkove</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span><strong>file_download:</strong> Download PDF-ova, slika</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">Video Events (YouTube):</h5>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>video_start:</strong> Početak video reprodukcije</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>video_progress:</strong> 10%, 25%, 50%, 75%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                            <span><strong>video_complete:</strong> Gledanje do kraja</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">📞 Custom Events za Srpske Biznise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Lokalni Biznis (Frizerski salon, Auto servis...)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Conversion Events:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>phone_call:</strong> Klik na telefon</li>
                              <li>• <strong>contact_form:</strong> Poslat kontakt formu</li>
                              <li>• <strong>location_click:</strong> Klik na mapu/adresu</li>
                              <li>• <strong>hours_check:</strong> Pregled radnog vremena</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Engagement Events:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>gallery_view:</strong> Pregled galerije</li>
                              <li>• <strong>services_view:</strong> Pregled usluga</li>
                              <li>• <strong>testimonial_read:</strong> Čitanje recenzija</li>
                              <li>• <strong>about_visit:</strong> Poseta "O nama"</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">E-commerce</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Purchase Events:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>add_to_cart:</strong> Dodavanje u korpu</li>
                              <li>• <strong>begin_checkout:</strong> Početak checkout-a</li>
                              <li>• <strong>purchase:</strong> Završena kupovina</li>
                              <li>• <strong>add_to_wishlist:</strong> Wishlist dodavanje</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Product Events:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>view_item:</strong> Pregled proizvoda</li>
                              <li>• <strong>view_item_list:</strong> Pregled kategorije</li>
                              <li>• <strong>search:</strong> Pretraga proizvoda</li>
                              <li>• <strong>select_item:</strong> Klik na proizvod</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">B2B Kompanija</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Lead Generation:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>generate_lead:</strong> Kontakt forma</li>
                              <li>• <strong>request_quote:</strong> Zahtev za ponudu</li>
                              <li>• <strong>download_brochure:</strong> Download materijala</li>
                              <li>• <strong>schedule_demo:</strong> Zakazivanje demo-a</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Engagement:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• <strong>case_study_read:</strong> Case study</li>
                              <li>• <strong>pricing_view:</strong> Pregled cena</li>
                              <li>• <strong>team_view:</strong> Pregled tima</li>
                              <li>• <strong>testimonial_view:</strong> Klijenti</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">⚙️ Kako Podesiti Custom Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Metod 1: Google Tag Manager (Preporučeno)</h4>
                        <ol className="space-y-3 text-sm">
                          <li className="flex items-start gap-3">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">1</span>
                            <span>Idite u GTM → Variables → New → Variable Type: "Click Element"</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">2</span>
                            <span>Kreirajte Trigger: Click → All Elements → neki selector (npr. phone number)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">3</span>
                            <span>Kreirajte Tag: GA4 Event → Event Name: "phone_call"</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">4</span>
                            <span>Connect Tag sa Trigger-om</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">5</span>
                            <span>Test u Preview mode, pa Publish</span>
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Metod 2: Hardcode Event</h4>
                        <p className="text-sm mb-3">Dodajte ovo na dugme/link:</p>
                        <div className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                          <code>{`<a href="tel:+38111234567"
   onclick="gtag('event', 'phone_call', {
     'event_category': 'contact',
     'event_label': 'header_phone'
   });">
   011/123-4567
</a>`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Metod 3: Contact Form Tracking</h4>
                        <p className="text-sm mb-3">Za WordPress Contact Form 7:</p>
                        <div className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                          <code>{`document.addEventListener( 'wpcf7mailsent', function( event ) {
  gtag('event', 'generate_lead', {
    'event_category': 'contact',
    'event_label': 'contact_form_7'
  });
});`}</code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">🎯 Označavanje Events kao Conversions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p><strong>Kada kreirate event, možete ga označiti kao Conversion:</strong></p>
                      <ol className="space-y-2 text-sm">
                        <li>1. Idite u GA4 → Admin → Events</li>
                        <li>2. Pronađite vaš custom event u listi</li>
                        <li>3. Toggle "Mark as conversion" prekidač</li>
                        <li>4. Event će se pojaviti u Conversions reports</li>
                      </ol>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm"><strong>Važno:</strong> Označite kao conversion samo events koji imaju poslovnu vrednost (poziv, kupovina, lead).</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 7: Tipični Problemi */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-primary" />
                Česti Problemi i Kako ih Rešiti
              </h2>

              <div className="space-y-6">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">1. GA4 Ne Prikazuje Podatke</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Mogući uzroci:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Tracking kod nije pravilno instaliran</li>
                          <li>• Measurement ID je pogrešan</li>
                          <li>• Blocker reklamna (AdBlock) blokira tracking</li>
                          <li>• Potrebno je 24-48h za prve podatke</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Kako proveriti:</h5>
                        <ol className="text-sm space-y-1">
                          <li>1. Idite u Realtime → pregledajte da li se vi vidite</li>
                          <li>2. Chrome DevTools → Network tab → proverite gtag pozive</li>
                          <li>3. Google Tag Assistant Chrome extension</li>
                          <li>4. GA4 DebugView (ako je debug_mode uključen)</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-600">2. Premalo ili Previše "Direct" Traffic-a</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-red-600">Previše Direct (preko 50%)</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Problem:</strong> UTM parametri nisu podešeni</li>
                          <li>• <strong>Rešenje:</strong> Tagirati email i social linkove</li>
                          <li>• <strong>Rezultat:</strong> Bolje razumevanje source-a</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-green-600">Premalo Direct (ispod 15%)</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Problem:</strong> Slab brand awareness</li>
                          <li>• <strong>Rešenje:</strong> Offline marketing, branding</li>
                          <li>• <strong>Rezultat:</strong> Ljudi će se sećati vašeg sajta</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardHeader>
                    <CardTitle className="text-yellow-600">3. Visok Bounce Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Ako je bounce rate preko 70%:</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h6 className="font-medium mb-2">Tehnički problemi:</h6>
                            <ul className="space-y-1">
                              <li>• Spor sajt (preko 3 sek)</li>
                              <li>• Loš mobilni prikaz</li>
                              <li>• 404 greške</li>
                              <li>• Problemi sa hostingom</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium mb-2">Sadržaj problemi:</h6>
                            <ul className="space-y-1">
                              <li>• Sadržaj nije relevantan</li>
                              <li>• Nema jasnog CTA</li>
                              <li>• Konfuzan navigation</li>
                              <li>• Previše teksta</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-600">4. Conversions Se Ne Prikazuju</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Česta greška:</h5>
                        <p className="text-sm mb-3">Event je kreiran ali nije označen kao Conversion</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Kako rešiti:</h5>
                        <ol className="text-sm space-y-1">
                          <li>1. Admin → Events → pronađite vaš event</li>
                          <li>2. Uključite "Mark as conversion" toggle</li>
                          <li>3. Sačekajte 24h da se pojavi u Conversions reports</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-purple-600">5. Podaci Ne Odgovaraju Drugim Alatima</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2">Normalno je da se razlikuju:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Google Ads vs GA4:</strong> Različiti attribution models</li>
                          <li>• <strong>Facebook vs GA4:</strong> iOS 14.5+ privacy changes</li>
                          <li>• <strong>Email tools vs GA4:</strong> Ad blockers, pixel blocks</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Focus na trend, ne tačne brojeve:</h5>
                        <p className="text-sm">Koristite GA4 kao glavni source of truth za website behavior, a ostale alate za platform-specific metrics.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Chapter 8: Action Plan */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Prvi Mesec sa Google Analytics - Action Plan</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Nedelja 1: Setup i Osnove</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Kreirajte GA4 nalog i property</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Instalirajte tracking kod (plugin ili GTM)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proverite da rade osnovne metrike u Realtime</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proučite Home dashboard svaki dan</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Nedelja 2: Traffic Sources Analiza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Analizirajte Acquisition → Traffic acquisition report</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Identifikujte top 3 traffic source-a</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Dodajte UTM parametre na email i social linkove</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Proverite bounce rate po source-u</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Nedelja 3: Conversions Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Defini te 3 ključne akcije za vaš biznis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Kreirajte custom events (phone_call, contact_form)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Označite events kao conversions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span>Testirajte da li rade (GTM Preview ili DebugView)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">Nedelja 4: Optimizacija i Analiza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Analizirajte Engagement → Pages and screens</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Identifikujte stranice sa visokim bounce rate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Kreirajte prvi mesečni izveštaj</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        <span>Planirajte poboljšanja na osnovu podataka</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quiz Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-primary">Testirajte Svoje Google Analytics Znanje</h2>
              <Quiz questions={quizQuestions} />
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="text-center py-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">
                    Trebate pomoć sa postavkom Google Analytics?
                  </h2>
                  <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                    Naš tim može da postavi GA4, kreirate custom events i naučimo vas da tumačite podatke. Uključujemo i mesečne izveštaje sa preporukama.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link to="/kontakt">
                        Postavite Mi Google Analytics
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/cene">
                        Pogledajte Cene Analytics Setup-a
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

export default BlogArticle17;