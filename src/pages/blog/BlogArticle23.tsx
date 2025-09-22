import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Tag, Mail, Target, Users, TrendingUp, Calendar, Eye, BarChart3, Zap, CheckCircle, Star, Shield } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle23 = () => {
  const quizQuestions = [
    {
      question: "Koliki je ROI email marketinga u poređenju sa drugim kanalima?",
      options: [
        "4200% povrat investicije (42:1)",
        "2000% povrat investicije (20:1)",
        "1000% povrat investicije (10:1)",
        "500% povrat investicije (5:1)"
      ],
      correct: 0,
      explanation: "Email marketing ima najjači ROI od svih digitalnih kanala - 4200%, što znači 42 dinara povrata za svaki uloženi dinar. Ovo ga čini najisplativijim marketing kanalom."
    },
    {
      question: "Koliko ljudi u Srbiji aktivno koristi email?",
      options: [
        "2.5 miliona ljudi",
        "4.2 miliona ljudi",
        "5.8 miliona ljudi",
        "6.9 miliona ljudi"
      ],
      correct: 2,
      explanation: "U Srbiji 5.8 miliona ljudi aktivno koristi email, što predstavlja 83% populacije starije od 16 godina. Ovo čini email vrlo efikasnim kanalom za dosezanje srpske publike."
    },
    {
      question: "Koja je optimalna učestalost slanja newsletter-a za mala preduzeća?",
      options: [
        "Jednom mesečno",
        "Jednom nedeljno",
        "2-3 puta nedeljno",
        "Svaki dan"
      ],
      correct: 1,
      explanation: "Za mala preduzeća, jednom nedeljno je optimalna učestalost. Omogućava konzistentnost bez zasićenosti, dajući vreme za kreiranje kvalitetnog sadržaja."
    },
    {
      question: "Koliko košta profesionalan email marketing platform za malo preduzeće u Srbiji?",
      options: [
        "1,000-3,000 dinara mesečno",
        "3,000-8,000 dinara mesečno",
        "10,000-20,000 dinara mesečno",
        "25,000+ dinara mesečno"
      ],
      correct: 1,
      explanation: "Profesionalni email platform kao Mailchimp ili GetResponse košta 3,000-8,000 dinara mesečno za mala preduzeća (do 2,000 kontakata). Iznos zavisi od broja pretplatnika."
    },
    {
      question: "Koja je prosečna stopa otvaranja email-ova u Srbiji?",
      options: [
        "12-18%",
        "20-25%",
        "28-35%",
        "40-50%"
      ],
      correct: 1,
      explanation: "Prosečna stopa otvaranja email-ova u Srbiji je 20-25%, što je u skladu sa globalnim prosekom. Kvalitetan naslov i relevantan sadržaj mogu povećati ovu stopu na 30%+."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Nazad na blog</span>
            </Link>
          </Button>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>45 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Email Marketing</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Email Marketing za Mala Preduzeća - Kompletan Vodič za Gradnju Liste i Povećanje Prodaje 2025
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da izgradite email listu od 0 do 5000+ pretplatnika, kreirate kampanje koje donose prodaju i automatizujete komunikaciju sa klijentima. Sve što trebate za uspešan email marketing u Srbiji.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Email Marketing Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-primary" />
                <span>Zašto je Email Marketing i Dalje Najjači Digitalni Kanal?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                U eri društvenih mreža i instant poruka, email marketing ostaje nepobitno najjači i najisplativiji digitalni marketing kanal. Za mala preduzeća u Srbiji, email predstavlja direktni put do klijenata koji ne zavisi od algoritma društvenih mreža ili promena u politici platformi.
              </p>
              <p>
                Email je jedini kanal koji u potpunosti posedujete - vaša lista pretplatnika je vaš najveći digitalni kapital. Bez obzira na to što se dešava sa Facebook-om, Instagram-om ili Google-om, vašu email listu niko ne može da vam oduzme.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Email Marketing Statistike za 2025:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• <strong>4200% ROI</strong> - najviši povrat investicije među digitalnim kanalima</li>
                    <li>• <strong>5.8 miliona</strong> aktivnih email korisnika u Srbiji</li>
                    <li>• <strong>50x efikasniji</strong> od Facebook-a za privlačenje klijenata</li>
                    <li>• <strong>87% marketara</strong> koristi email za distribuciju sadržaja</li>
                    <li>• <strong>81% malih preduzeća</strong> oslanja se na email kao primarni kanal</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• <strong>99%</strong> potrošača proverava email svaki dan</li>
                    <li>• <strong>20-25%</strong> prosečna stopa otvaranja u Srbiji</li>
                    <li>• <strong>3.2%</strong> prosečna stopa klika na linkove</li>
                    <li>• <strong>40x češće</strong> email privlači klijente od društvenih mreža</li>
                    <li>• <strong>174% veći</strong> doseg od organskih Facebook objava</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Marketing Benefits for Serbian SMEs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Prednosti Email Marketinga za Srpska Mala Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Marketing u Srpskom Kontekstu</h3>
                <p className="mb-4">
                  U Srbiji, gde digitalna pismenost raste, a potrošači su postali oprezniji sa ličnim podacima, email marketing nudi pouzdanu alternativu skupim reklamama. Srpski korisnici cenę personalizovanu komunikaciju i direktan pristup.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Finansijske Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Nizak startup trošak:</strong> 3,000-8,000 din/mesec</li>
                      <li>• <strong>Visok ROI:</strong> 42 dinara za svaki uložen dinar</li>
                      <li>• <strong>Skaliralnost:</strong> Isti trud, više klijenata</li>
                      <li>• <strong>Predvidivi troškovi:</strong> Fiksna mesečna cena</li>
                      <li>• <strong>Merljivi rezultati:</strong> Precizna analitika</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Marketing Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Direktna komunikacija:</strong> Bez posrednika</li>
                      <li>• <strong>Personalizacija:</strong> Prilagođeni sadržaj za svakog</li>
                      <li>• <strong>Segmentacija:</strong> Precizno ciljanje grupa</li>
                      <li>• <strong>Automatizacija:</strong> Radi 24/7 bez intervencije</li>
                      <li>• <strong>Brand building:</strong> Redovan kontakt sa klijentima</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Poslovne Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Vlasništvo liste:</strong> Nezavisan od platformi</li>
                      <li>• <strong>Dugoročna vrednost:</strong> Lista raste tokom vremena</li>
                      <li>• <strong>Fleksibilnost:</strong> Brza reakcija na tržišne promene</li>
                      <li>• <strong>Korisnička podrška:</strong> Direktna komunikacija sa klijentima</li>
                      <li>• <strong>Konkura prednost:</strong> Većina konkurenata ne koristi dobro</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Marketing vs Ostali Kanali u Srbiji</h3>
                <p className="mb-4">
                  Da bismo razumeli pravu vrednost email marketinga, važno je porediti ga sa drugim dostupnim kanalima na srpskom tržištu.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Poređenje Troškova i Efikasnosti (mesečno za 1000 people reach):</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 p-2 text-left">Kanal</th>
                            <th className="border border-gray-300 p-2 text-left">Mesečni Trošak</th>
                            <th className="border border-gray-300 p-2 text-left">Conversion Rate</th>
                            <th className="border border-gray-300 p-2 text-left">Vlasništvo Auditorijuma</th>
                            <th className="border border-gray-300 p-2 text-left">ROI</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">Email Marketing</td>
                            <td className="border border-gray-300 p-2">5,000 din</td>
                            <td className="border border-gray-300 p-2">3-6%</td>
                            <td className="border border-gray-300 p-2">✅ Potpuno</td>
                            <td className="border border-gray-300 p-2">4200%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">Facebook Ads</td>
                            <td className="border border-gray-300 p-2">25,000 din</td>
                            <td className="border border-gray-300 p-2">1-2%</td>
                            <td className="border border-gray-300 p-2">❌ Nema</td>
                            <td className="border border-gray-300 p-2">400%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">Google Ads</td>
                            <td className="border border-gray-300 p-2">30,000 din</td>
                            <td className="border border-gray-300 p-2">2-4%</td>
                            <td className="border border-gray-300 p-2">❌ Nema</td>
                            <td className="border border-gray-300 p-2">800%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">SMS Marketing</td>
                            <td className="border border-gray-300 p-2">15,000 din</td>
                            <td className="border border-gray-300 p-2">5-8%</td>
                            <td className="border border-gray-300 p-2">⚠️ Ograničeno</td>
                            <td className="border border-gray-300 p-2">2000%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Zašto Email Pobeduje na Srpskom Tržištu:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Poverenje:</strong> Srpski korisnici više veruju email komunikaciji nego društvenim mrežama</p>
                      <p><strong>Profesionalnost:</strong> Email se percepira kao ozbiljniji kanal komunikacije</p>
                      <p><strong>Privatnost:</strong> Manje invazivan od telefonskih poziva ili SMS poruka</p>
                      <p><strong>Sadržaj:</strong> Omogućava detaljno objašnjavanje proizvoda i usluga</p>
                      <p><strong>Arhiviranje:</strong> Korisnici mogu da sačuvaju i kasnije pregleddaju ponude</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Building Email List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Gradnja Email Liste od Nule - Strategije za Srpska Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Lead Magneti - Mamci za Prikupljanje Email Adresa</h3>
                <p className="mb-4">
                  Lead magnet je besplatan, vredan sadržaj koji nudite u zamenu za email adresu. Za srpska mala preduzeća, lead magnet mora biti praktičan i rešavati konkretan problem vaše ciljne grupe.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Digitalni Lead Magneti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>PDF vodići:</strong> "Kompletna lista PDV obaveza 2025"</li>
                      <li>• <strong>Checkliste:</strong> "15 koraka za pokretanje biznisa u Srbiji"</li>
                      <li>• <strong>Templejti:</strong> Gotovi Excel ili Word dokumenti</li>
                      <li>• <strong>eBooks:</strong> Sveobuhvatni vodići (30+ strana)</li>
                      <li>• <strong>Video kursevi:</strong> Besplatni mini-kursevi</li>
                      <li>• <strong>Kalkulatori:</strong> Online alati za izračun troškova</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Ekskluzivni Sadržaji</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Insider izveštaji:</strong> Analitika industrije</li>
                      <li>• <strong>Case studies:</strong> Detaljni primeri uspeha</li>
                      <li>• <strong>Webinar snimci:</strong> Edukativne prezentacije</li>
                      <li>• <strong>Podcast epizode:</strong> Ekskluzivni intervjui</li>
                      <li>• <strong>Šabloni:</strong> Ugovori, proposal templejti</li>
                      <li>• <strong>Swipe files:</strong> Najbolji primeri iz industrije</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Interaktivni Lead Magneti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Kvizovi:</strong> "Koja vrsta sajta vam treba?"</li>
                      <li>• <strong>Assessments:</strong> Procena trenutnog stanja</li>
                      <li>• <strong>ROI kalkulatori:</strong> Računanje povrata investicije</li>
                      <li>• <strong>Personality tests:</strong> Zabavni sadržaji</li>
                      <li>• <strong>Surveys:</strong> Istraživanja sa rezultatima</li>
                      <li>• <strong>Challenges:</strong> 7-day email izazovi</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Opt-in Forme i Strategije Konverzije</h3>
                <p className="mb-4">
                  Pozicioniranje i dizajn opt-in formi direktno utiče na broj pretplatnika. Na srpskom tržištu, važno je balansirati agresivnost zahteva sa poštovanjem korisničke zalihe.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Najbolje Pozicije za Opt-in Forme:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Exit-intent popup:</strong> 15-30% conversion rate</li>
                        <li>• <strong>Header sticky bar:</strong> Permanentno vidljiva ponuda</li>
                        <li>• <strong>End of blog post:</strong> Kada je korisnik završio čitanje</li>
                        <li>• <strong>Footer:</strong> Nenametljiva ali dostupna opcija</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Sidebar widget:</strong> Za desktop korisnike</li>
                        <li>• <strong>In-line content:</strong> U sredini blog članka</li>
                        <li>• <strong>About page:</strong> Za ljude koji žele da saznaju više</li>
                        <li>• <strong>Contact form:</strong> Alternative za kontakt</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Opt-in Form Copywriting:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Naslov:</strong> Jasna vrednost u 5-7 reči</li>
                        <li>• <strong>Korist:</strong> Što korisnik dobija (ne šta vi želite)</li>
                        <li>• <strong>Call-to-action:</strong> "Preuzmite besplatno", "Pošaljite mi"</li>
                        <li>• <strong>Social proof:</strong> "Više od 1000 ljudi već koristi"</li>
                        <li>• <strong>Urgentnost:</strong> "Ograničeno vreme" ili "Ekskluzivno"</li>
                        <li>• <strong>Privatnost:</strong> "Neću deliti vašu email adresu"</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">A/B Testing Elementi:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Headlines:</strong> Testiraпи različite ponude vrednosti</li>
                        <li>• <strong>CTA button:</strong> Boja, tekst, veličina</li>
                        <li>• <strong>Form fields:</strong> Samo email vs više polja</li>
                        <li>• <strong>Timing:</strong> Kada se popup prikazuje</li>
                        <li>• <strong>Images:</strong> Sa slikom vs bez slike</li>
                        <li>• <strong>Colors:</strong> Branding vs high-contrast</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Offline to Online - Prikupljanje Email-ova u Fizičkom Svetu</h3>
                <p className="mb-4">
                  Za mala preduzeća u Srbiji koja imaju fizičku lokaciju, kombinovanje online i offline strategija može značajno ubrzati rast email liste.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Retail/Prodavnica:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>QR kodovi:</strong> Na kas uji i posterima</li>
                      <li>• <strong>Tableti:</strong> Za jednostavnu registraciju</li>
                      <li>• <strong>Popusti:</strong> "10% za first email signup"</li>
                      <li>• <strong>Loyalty program:</strong> Email kao uslov učešća</li>
                      <li>• <strong>Receipt marketing:</strong> Ponuda na računu</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Uslužni Biznis:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Konsultacije:</strong> Email za booking</li>
                      <li>• <strong>Follow-up:</strong> "Želim update o projektu"</li>
                      <li>• <strong>Edukacija:</strong> "Pošaljite mi tips & tricks"</li>
                      <li>• <strong>Newsletter:</strong> Mesečni industry insights</li>
                      <li>• <strong>Events:</strong> Pozivnice za seminare</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Eventi/Konferencije:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Registracija:</strong> Email kao deo sign-up proces</li>
                      <li>• <strong>Networking:</strong> Digitalna razmena kartica</li>
                      <li>• <strong>Prezentacije:</strong> "Pošaljite mi slajdove"</li>
                      <li>• <strong>Contest:</strong> Email za učešće u nagradnoj igri</li>
                      <li>• <strong>Follow-up:</strong> Post-event komunikacija</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Partnerships:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Cross-promotion:</strong> Deljenje listi sa partnerima</li>
                      <li>• <strong>Guest content:</strong> Pisanje za partner blog-ove</li>
                      <li>• <strong>Joint webinars:</strong> Saradnja na prezentacijama</li>
                      <li>• <strong>Referral program:</strong> Награде za preporuke</li>
                      <li>• <strong>Co-marketing:</strong> Zajedničke kampanje</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Email Campaign Types */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>Tipovi Email Kampanja i Strategije Sadržaja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter - Temelj Email Komunikacije</h3>
                <p className="mb-4">
                  Newsletter je regularна email komunikacija koja gradi odnos sa vašom audience tokom vremena. Za srpska mala preduzeća, newsletter je šansa da pokažete stručnost i ostanete u svesti klijenata.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Newsletter Content Strategy:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>80/20 pravilo:</strong> 80% korisnog sadržaja, 20% promocije</li>
                      <li>• <strong>Konsistentnost:</strong> Isti dan i vreme slanja</li>
                      <li>• <strong>Struktura:</strong> Intro, glavni sadržaj, akcija, outro</li>
                      <li>• <strong>Personalizacija:</strong> Korišćenje imena pretplatnika</li>
                      <li>• <strong>Lokalizacija:</strong> Srpske reference i primeri</li>
                      <li>• <strong>Mobile optimization:</strong> 70% čita na telefonu</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Newsletter Template Structure:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="border-l-4 border-blue-500 pl-3">
                        <strong>Header:</strong> Logo + naslov newsletter-a
                      </div>
                      <div className="border-l-4 border-green-500 pl-3">
                        <strong>Intro:</strong> Kratko poздrav i najava sadržaja
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-3">
                        <strong>Feature Article:</strong> Glavni sadržaj sa CTA
                      </div>
                      <div className="border-l-4 border-purple-500 pl-3">
                        <strong>Quick Tips:</strong> 3-5 kratких saveta
                      </div>
                      <div className="border-l-4 border-red-500 pl-3">
                        <strong>Footer:</strong> Kontakt, unsubscribe, social links
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Promocije Email Kampanje</h3>
                <p className="mb-4">
                  Promocije email-ovi su direktni sales tool koji treba pažljivo balansirati da ne zasitite pretplatnike. Ključ je u kreiranju ponuда koje su genuinski korisne za vašu audience.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4 border-green-200">
                      <h4 className="font-semibold mb-3 text-green-700">Product Launch Email-ovi</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Teaser (7 dana pre):</strong> "Nešto važno stiže..."</li>
                        <li>• <strong>Announcement (dan X):</strong> Zvaničn najava</li>
                        <li>• <strong>Features highlight:</strong> Ključne karakteristike</li>
                        <li>• <strong>Social proof:</strong> Beta testovi ili recenzije</li>
                        <li>• <strong>Last chance:</strong> Finalni poziv na akciju</li>
                        <li>• <strong>Thank you:</strong> Zahvalnica kupcima</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-blue-200">
                      <h4 className="font-semibold mb-3 text-blue-700">Seasonal Campaigns</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Nova godina:</strong> Rezolusije i planovi</li>
                        <li>• <strong>Prolece:</strong> Novi početci, osvežavanje</li>
                        <li>• <strong>Leto:</strong> Odmor, opuštanje, putovanja</li>
                        <li>• <strong>Jesen:</strong> Pripreme, planiranje, organizacija</li>
                        <li>• <strong>Zima:</strong> Toplina, porodica, planiranje godine</li>
                        <li>• <strong>Black Friday:</strong> Specijalne ponude</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-purple-200">
                      <h4 className="font-semibold mb-3 text-purple-700">Retention Campaigns</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Welcome series:</strong> 5-7 email-ova za nove</li>
                        <li>• <strong>Re-engagement:</strong> "Nedostaješ nam" kampanje</li>
                        <li>• <strong>Upsell/Cross-sell:</strong> Dopunski proizvodi</li>
                        <li>• <strong>Anniversary:</strong> Godišnjica saradnje</li>
                        <li>• <strong>Loyalty rewards:</strong> Nagrade za vernost</li>
                        <li>• <strong>Feedback requests:</strong> Mišljenja i ocene</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Email Copy Formula za Promocije:</h4>
                    <div className="grid md:grid-cols-4 gap-3 mt-3">
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">ATTENTION</h5>
                        <p className="text-xs mt-1">Subject line koji privlači</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">INTEREST</h5>
                        <p className="text-xs mt-1">Korist za čitaoca</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">DESIRE</h5>
                        <p className="text-xs mt-1">Emocionalni razlozi</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">ACTION</h5>
                        <p className="text-xs mt-1">Jasan poziv na kupovinu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Automated Email Sequences</h3>
                <p className="mb-4">
                  Email automatizacija omogućava da kreirate sekvence koje rade samostalno, negovaju leadove i konvertuju ih u klijente dok vi spavate. Ovo je posebно korisno za mala preduzeća sa ograničenim vremenom.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Welcome Email Series (7 dana):</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li><strong>Dan 1:</strong> Dobrodošlica + dostava lead magneta</li>
                      <li><strong>Dan 2:</strong> Vaša priča - zašto ste pokrenuli biznis</li>
                      <li><strong>Dan 3:</strong> Case study - kako ste pomogli klijentu</li>
                      <li><strong>Dan 4:</strong> Korisni saveti ili resources</li>
                      <li><strong>Dan 5:</strong> Društvene mreže i community</li>
                      <li><strong>Dan 6:</strong> FAQ - česta pitanja i odgovori</li>
                      <li><strong>Dan 7:</strong> Specijalna ponuda za nove pretplatnike</li>
                    </ol>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Abandoned Cart Sequence (3 email-a):</h4>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li><strong>1 sat posle:</strong> "Zaboravili ste nešto u korpi"</li>
                      <li><strong>24 sata posle:</strong> Social proof + urgentnost</li>
                      <li><strong>72 sata posle:</strong> Last chance + možda popust</li>
                    </ol>
                    <div className="mt-3 text-sm">
                      <strong>Rezultati:</strong> 15-25% recovery rate, što može značajno povećati prihode e-commerce bizniså.
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Quiz */}
          <Quiz questions={quizQuestions} />

          {/* Email Design and Deliverability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary" />
                <span>Dizajn Email-ova i Deliverability</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Design Best Practices</h3>
                <p className="mb-4">
                  Dobar dizajn email-a nije samo o lepoti - to je o funkcionalnosti, čitljivosti i konverziji. U Srbiji, gde većina ljudi čita email-ove na mobilnim uređajima, responsive design je neophodan.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Mobile-First Design:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Single column layout:</strong> Jednostavniji za mobilne</li>
                      <li>• <strong>Font size:</strong> Minimum 14px za čitljivost</li>
                      <li>• <strong>Touch-friendly buttons:</strong> 44px minimum height</li>
                      <li>• <strong>Compressed images:</strong> Brže učitavanje</li>
                      <li>• <strong>Short subject lines:</strong> 30-50 karaktera</li>
                      <li>• <strong>Preview text:</strong> Optimizing prva dva reda</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Visual Hierarchy:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Headline:</strong> Najveći font, bold, centriran</li>
                      <li>• <strong>Subheadlines:</strong> Pomažu skimming</li>
                      <li>• <strong>White space:</strong> Daje prostora za disanje</li>
                      <li>• <strong>Contrasting CTA:</strong> Button koji se izdvaja</li>
                      <li>• <strong>Consistent branding:</strong> Logo, boje, fontovi</li>
                      <li>• <strong>Progressive disclosure:</strong> Od osnovnog ka detaljima</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Deliverability - Kako Stići do Inbox-a</h3>
                <p className="mb-4">
                  Najbolji email u svetu neće vam pomoći ako završi u spam folderu. Deliverability je najteži tehnički aspekt email marketinga, ali i najkritičniji za uspeh.
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Česti Spam Triggers u Srbiji:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Spam reči:</strong> "Besplatno", "Garantovano", "Brzo"</li>
                        <li>• <strong>CAPS LOCK:</strong> Pisanje velikimi slovima</li>
                        <li>• <strong>Previše uzručnih znakova!!!</strong></li>
                        <li>• <strong>Previše linkova:</strong> Više od 3-4 po email</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Skriveni tekst:</strong> Beli tekst na beloj pozadini</li>
                        <li>• <strong>Loše kodiranje HTML:</strong> Nestandard kod</li>
                        <li>• <strong>Kratkoružen URL-ovi:</strong> bit.ly linkovi</li>
                        <li>• <strong>No-reply adrese:</strong> Koriscite pravi email</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Authentication Setup:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>SPF record:</strong> Verifie sender identity</li>
                        <li>• <strong>DKIM:</strong> Digital signature za emails</li>
                        <li>• <strong>DMARC:</strong> Policy za authentication failures</li>
                        <li>• <strong>Dedicated IP:</strong> Za veće volume (10k+ emails)</li>
                        <li>• <strong>Domain reputation:</strong> Koriscite svoj domain</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">List Hygiene:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Double opt-in:</strong> Confirmation email</li>
                        <li>• <strong>Regular cleaning:</strong> Uklanjanje neaktivnih</li>
                        <li>• <strong>Bounce handling:</strong> Automatsko uklanjanje</li>
                        <li>• <strong>Engagement tracking:</strong> Identifikacija aktivnih</li>
                        <li>• <strong>Suppresion list:</strong> Ne slajte unsubscribed</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Sending Practices:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Consistent schedule:</strong> Regular sending pattern</li>
                        <li>• <strong>Volume ramping:</strong> Postupno povećanje broja</li>
                        <li>• <strong>Segmentation:</strong> Targeted poruke</li>
                        <li>• <strong>Engagement focus:</strong> Slajte angažovannima</li>
                        <li>• <strong>Monitor metrics:</strong> Pratite bounce i complaint rate</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Email Marketing Tools and Platforms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-primary" />
                <span>Email Marketing Platforme i Alati</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Izbor Platforme za Srpska Mala Preduzeća</h3>
                <p className="mb-4">
                  Selection email marketing platforme je jedna od najvažnijih odluka. Treba balansirati funkcionalnost, cenu i jednostavnost korišćenja, posebno za početnikè u email marketingu.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Za Početnike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Mailchimp:</strong> 0-4,000 din/mesec</li>
                      <li>• <strong>GetResponse:</strong> 2,000-6,000 din/mesec</li>
                      <li>• <strong>Moosend:</strong> 1,000-4,000 din/mesec</li>
                      <li>• <strong>MailerLite:</strong> 1,500-5,000 din/mesec</li>
                      <li className="text-green-600 font-medium">Jednostavno za početnike</li>
                      <li className="text-green-600 font-medium">Dobra dokumentacija na srpskom</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Za Srednje Biznise</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>ActiveCampaign:</strong> 4,000-15,000 din/mesec</li>
                      <li>• <strong>ConvertKit:</strong> 3,500-12,000 din/mesec</li>
                      <li>• <strong>Drip:</strong> 5,000-18,000 din/mesec</li>
                      <li>• <strong>Klaviyo:</strong> 6,000-25,000 din/mesec</li>
                      <li className="text-blue-600 font-medium">Advanced automation</li>
                      <li className="text-blue-600 font-medium">CRM integration</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Za Enterprise</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>HubSpot:</strong> 15,000-100,000+ din/mesec</li>
                      <li>• <strong>Pardot:</strong> 150,000+ din/mesec</li>
                      <li>• <strong>Marketo:</strong> Custom pricing</li>
                      <li>• <strong>Eloqua:</strong> Custom pricing</li>
                      <li className="text-purple-600 font-medium">Advanced analytics</li>
                      <li className="text-purple-600 font-medium">Enterprise features</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">За E-commerce</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Klaviyo:</strong> Best за online prodavnice</li>
                      <li>• <strong>Omnisend:</strong> 2,000-10,000 din/mesec</li>
                      <li>• <strong>Privy:</strong> 3,000-8,000 din/mesec</li>
                      <li>• <strong>Mailchimp:</strong> WooCommerce integration</li>
                      <li className="text-orange-600 font-medium">Product recommendations</li>
                      <li className="text-orange-600 font-medium">Abandoned cart recovery</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Platform Poređenje za Srpsko Tržište</h3>
                <p className="mb-4">
                  Detaljno poređenje najpopularnijih platformi sa fokus na potrebe srpskih malih preduzeća.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2 text-left">Platform</th>
                        <th className="border border-gray-300 p-2 text-left">Free Plan</th>
                        <th className="border border-gray-300 p-2 text-left">Paid Od</th>
                        <th className="border border-gray-300 p-2 text-left">Automation</th>
                        <th className="border border-gray-300 p-2 text-left">Support</th>
                        <th className="border border-gray-300 p-2 text-left">Srpski Interface</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Mailchimp</td>
                        <td className="border border-gray-300 p-2">2,000 kontakata</td>
                        <td className="border border-gray-300 p-2">1,200 din/mesec</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">GetResponse</td>
                        <td className="border border-gray-300 p-2">30 dana trial</td>
                        <td className="border border-gray-300 p-2">2,300 din/mesec</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">ActiveCampaign</td>
                        <td className="border border-gray-300 p-2">14 dana trial</td>
                        <td className="border border-gray-300 p-2">4,700 din/mesec</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">MailerLite</td>
                        <td className="border border-gray-300 p-2">1,000 kontakata</td>
                        <td className="border border-gray-300 p-2">1,200 din/mesec</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                        <td className="border border-gray-300 p-2">⭐⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">💡 Preporuke za Srpska Mala Preduzeća:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Početnici (0-500 kontakata):</strong> Mailchimp Free ili MailerLite</li>
                    <li>• <strong>Growing business (500-2,000):</strong> GetResponse ili Mailchimp Essentials</li>
                    <li>• <strong>Established SME (2,000+):</strong> ActiveCampaign ili ConvertKit</li>
                    <li>• <strong>E-commerce focus:</strong> Klaviyo ili Omnisend</li>
                    <li>• <strong>B2B companies:</strong> HubSpot или ActiveCampaign</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Email Analytics and Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Email Analytics i Merenje Performansi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Email Metrike za Srpska Preduzeća</h3>
                <p className="mb-4">
                  Pravilno merenje email performansi omogućava optimizaciju kampanja i povećanje ROI. Važno je fokusirati se na metrike koje direktno utiču na poslovne rezultate.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Delivery Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Delivery Rate:</strong> 95%+ je dobra</li>
                      <li>• <strong>Bounce Rate:</strong> &lt;5% maksimalno</li>
                      <li>• <strong>Spam Rate:</strong> &lt;0.1% idealno</li>
                      <li>• <strong>Unsubscribe:</strong> &lt;2% prihvatljivo</li>
                      <li>• <strong>List Growth:</strong> 10-25% mesečno</li>
                      <li>• <strong>Inbox Placement:</strong> 80%+ u inbox</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Engagement Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Open Rate:</strong> 20-25% prosek</li>
                      <li>• <strong>Click Rate:</strong> 3-5% dobro</li>
                      <li>• <strong>Click-to-Open:</strong> 15-25%</li>
                      <li>• <strong>Forward Rate:</strong> 0.5-1%</li>
                      <li>• <strong>Time Spent:</strong> 10+ sekundi</li>
                      <li>• <strong>Social Sharing:</strong> 0.1-0.3%</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Conversion Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Conversion Rate:</strong> 1-5% prihvatljivo</li>
                      <li>• <strong>Revenue per Email:</strong> Zavisi od industrije</li>
                      <li>• <strong>Average Order Value:</strong> AOV iz email-a</li>
                      <li>• <strong>Customer Lifetime Value:</strong> CLV email subscribers</li>
                      <li>• <strong>Cost per Conversion:</strong> Trošak po konverziji</li>
                      <li>• <strong>ROI:</strong> 1:42 email marketing prosek</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">List Health Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>List Decay:</strong> 22% godišnje prirodno</li>
                      <li>• <strong>Engagement Rate:</strong> % aktivnih pretplatnika</li>
                      <li>• <strong>Subscriber Quality:</strong> Source performance</li>
                      <li>• <strong>Segmentation:</strong> Performance po grupama</li>
                      <li>• <strong>Re-engagement:</strong> Success rate reaktivacije</li>
                      <li>• <strong>Churn Rate:</strong> Stopa odlaska pretplatnika</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Email A/B Testing Strategije</h3>
                <p className="mb-4">
                  A/B testing je ključ za kontinuirano poboljšanje email performansi. Testiranje jednog elementa po času omogućava tačno identifikovanje šta utiče na rezultate.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Subject Line Testing:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Duažina:</strong> Kratki vs dugi naslovi</li>
                        <li>• <strong>Personalizacija:</strong> Sa imenom vs bez</li>
                        <li>• <strong>Emojis:</strong> 1-2 vs bez emoji</li>
                        <li>• <strong>Urgency:</strong> "Danas" vs "Ograničeno vreme"</li>
                        <li>• <strong>Pitanja:</strong> Statement vs pitanje</li>
                        <li>• <strong>Numbers:</strong> "5 načina" vs opisna imena</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Content Testing:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>CTA tekst:</strong> "Kupi sada" vs "Saznaj više"</li>
                        <li>• <strong>CTA boja:</strong> Crvena vs plava vs zelena</li>
                        <li>• <strong>Images:</strong> Sa slikama vs text only</li>
                        <li>• <strong>Duažina:</strong> Kratki vs detaljan sadržaj</li>
                        <li>• <strong>Layout:</strong> Single vs multi-column</li>
                        <li>• <strong>Social proof:</strong> Sa testimonials vs bez</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Timing Testing:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Dan u nedelji:</strong> Utorak vs četvrtak</li>
                        <li>• <strong>Vreme slanja:</strong> 9h vs 14h vs 18h</li>
                        <li>• <strong>Učestalost:</strong> Nedeljno vs bi-weekly</li>
                        <li>• <strong>Timezone:</strong> CET оптимизација za Srbiju</li>
                        <li>• <strong>Seasonal:</strong> Početak vs kraj meseca</li>
                        <li>• <strong>Holiday:</strong> Pre vs posle praznika</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">A/B Testing Best Practices za Srbiju:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Sample size:</strong> Minimum 1,000 pretplatnika po grupi</li>
                        <li>• <strong>Test duration:</strong> 7 dana za statistical significance</li>
                        <li>• <strong>Single variable:</strong> Testirajte jedan element po času</li>
                        <li>• <strong>Clear hypothesis:</strong> "Personalizovani subject će pobediti"</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Document results:</strong> Vodite beleške o testovima</li>
                        <li>• <strong>Statistical significance:</strong> 95% confidence level</li>
                        <li>• <strong>Winner implementation:</strong> Primenite pobednu варијantu</li>
                        <li>• <strong>Continuous testing:</strong> 20% email-ova testirajte</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Legal Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span>Pravni Aspekti Email Marketinga u Srbiji</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">GDPR i Zakon o Zaštiti Podataka u Srbiji</h3>
                <p className="mb-4">
                  Srbija je usvojila Zakon o zaštiti podataka o ličnosti koji je usklađen sa GDPR regulatorom. Ovo znači da mala preduzeća moraju voditi računa o načinu prikupljanja i korišćenja email adresa.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">GDPR Compliance Checklist:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Explicit consent:</strong> Jasna dozvola za slanje email-ova</li>
                      <li>• <strong>Double opt-in:</strong> Potvrda email adrese</li>
                      <li>• <strong>Clear privacy policy:</strong> Objašnjenje korišćenja podataka</li>
                      <li>• <strong>Easy unsubscribe:</strong> Jedan-klik odjava</li>
                      <li>• <strong>Data retention:</strong> Brisanje neaktivnih kontakata</li>
                      <li>• <strong>Right to access:</strong> Korisnik može da zatraži svoje podatke</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Anti-Spam Pravila u Srbiji:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Opt-in required:</strong> Ne slati без dozvole</li>
                      <li>• <strong>Clear sender identity:</strong> Ko šalje email</li>
                      <li>• <strong>Physical address:</strong> Adresa preduzeća u email-u</li>
                      <li>• <strong>Honest subject lines:</strong> Ne lagati u naslovu</li>
                      <li>• <strong>Unsubscribe options:</strong> Mogućnost odjave</li>
                      <li>• <strong>Honor opt-outs:</strong> 10 dana za procesiranje odjave</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Best Practices za Legal Compliance</h3>
                <p className="mb-4">
                  Pažljivo poštovanje pravila nije samo legalna obaveza - to gradi poverenje sa klijentima i poboljšava deliverability.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Email Footer Template za Srpska Preduzeća:</h4>
                  <div className="text-sm bg-white p-3 mt-3 border rounded">
                    <p className="font-medium">Ova poruka je poslata sa [Company Name]</p>
                    <p>Adresa: [Puna adresa preduzeća]</p>
                    <p>PIB: [PIB broj] | Matični broj: [Matični broj]</p>
                    <p className="mt-2">
                      <strong>Odjava:</strong> Ako ne želite da primaте ovakve email-ove, možete se
                      <a href="#" className="text-blue-600 underline">odjaviti ovde</a>
                    </p>
                    <p className="mt-1 text-gray-600 text-xs">
                      Vaši podaci su bezbедni i neće biti deljeni sa trećim stranama.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>90-Day Email Marketing Action Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Vaš Put do Uspešnog Email Marketinga</h3>
                <p className="mb-4">
                  Sledite ovaj struktuiran pristup za pokretanje email marketing strategije koja donosi реалне rezultate za vaše preduzeће.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Mesec 1: Setup (Dani 1-30)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Odabir email marketing platformе</li>
                      <li>• ✅ Account setup i domain authentication</li>
                      <li>• ✅ Design email templejta i branding</li>
                      <li>• ✅ Kreiranje prvog lead magneta</li>
                      <li>• ✅ Opt-in forme na sajtu (3-5 lokacija)</li>
                      <li>• ✅ Welcome email sekvenca (5 email-ova)</li>
                      <li>• ✅ Privacy policy i GDPR compliance</li>
                      <li>• ✅ Prvi newsletter (test small group)</li>
                      <li>• ✅ Analytics i tracking setup</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Mesec 2: Grownth (Dani 31-60)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Lead generation campaigns (social media)</li>
                      <li>• ✅ Content upgrade za postojeće blog članke</li>
                      <li>• ✅ Referral program za postojece klijente</li>
                      <li>• ✅ Email signature opt-in ponude</li>
                      <li>• ✅ Prvi automated sequence (nurture campaign)</li>
                      <li>• ✅ Segmentation setup (behavior, demographics)</li>
                      <li>• ✅ A/B testing prvog newsletter-a</li>
                      <li>• ✅ Guest posting sa email collection</li>
                      <li>• ✅ Prvi promotional email campaign</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Mesec 3: Optimization (Dani 61-90)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Advanced automation workflows</li>
                      <li>• ✅ Re-engagement campaign za inactive</li>
                      <li>• ✅ Customer lifecycle email series</li>
                      <li>• ✅ Advanced segmentation i personalization</li>
                      <li>• ✅ ROI analysis i performance review</li>
                      <li>• ✅ List cleaning i deliverability optimization</li>
                      <li>• ✅ Multi-channel integration (social, web)</li>
                      <li>• ✅ Team training i workflow documentation</li>
                      <li>• ✅ Q4 email strategy planning</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Start Email Ideas</h3>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">10 Email-ova koji Uvek Rade u Srbiji:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>• 📧 <strong>Welcome email:</strong> "Dobrodošli u [Company] porodicu"</li>
                      <li>• 📚 <strong>Educational:</strong> "5 grešaka koje prave srpski preduzetnici"</li>
                      <li>• 🎯 <strong>Case study:</strong> "Kako je [Klijent] povećao prodaju za 150%"</li>
                      <li>• 💡 <strong>Tips email:</strong> "Nedeljni saveti za vaš biznis"</li>
                      <li>• 🎉 <strong>Milestone:</strong> "Slavimo 1000 zadovoljnih klijenata"</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• 🔥 <strong>Promotional:</strong> "Ekskluzivna ponuda za pretplatnike"</li>
                      <li>• ❓ <strong>Survey:</strong> "Pomozite nam da se poboljšamo"</li>
                      <li>• 📅 <strong>Event invite:</strong> "Poziv na besplatan webinar"</li>
                      <li>• 🎁 <strong>Freebie:</strong> "Besplatan template za vaš biznis"</li>
                      <li>• 💬 <strong>Personal story:</strong> "Moja priča pokretanja biznisa"</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Pokrenite Email Marketing koji Donosi Rezultate!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Email marketing je najjači alat za direktnu komunikaciju sa klijentima. Započnite gradnju liste danas i vidite kako svaki email može da donosi novu prodaju.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Email Marketing Setup</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/cene">Pogledaj Email Pakete</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BlogArticle23;