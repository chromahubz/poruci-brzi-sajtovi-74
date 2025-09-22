import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Tag, PenTool, Target, Users, TrendingUp, Calendar, Eye, Share2, BarChart3, Star, CheckCircle, Lightbulb } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle22 = () => {
  const quizQuestions = [
    {
      question: "Koliko sadržaja treba kreirati mesečno za uspešan content marketing?",
      options: [
        "2-3 blog članka mesečno",
        "5-8 različitih sadržaja mesečno",
        "15-20 objava na društvenim mrežama",
        "1 kvalitetan sadržaj nedeljno"
      ],
      correct: 1,
      explanation: "Idealno je kreirati 5-8 različitih sadržaja mesečno kombinujući blog članke, video materijale, infografike i objave na društvenim mrežama. Kvalitet je važniji od količine."
    },
    {
      question: "Koji tip sadržaja ima najveću stopu deljenja na društvenim mrežama?",
      options: [
        "Tekstualni blog članci",
        "Video sadržaj",
        "Infografike i vizuelni sadržaj",
        "Podcast epizode"
      ],
      correct: 2,
      explanation: "Infografike i vizuelni sadržaj se dele 30 puta više od tekstualnih članaka. Vizuelni sadržaj je lakši za konzumiranje i privlačniji za deljenje."
    },
    {
      question: "Koliko vremena prosečan čitalac provede čitajući blog članak?",
      options: [
        "15-30 sekundi",
        "1-2 minuta",
        "3-5 minuta",
        "10+ minuta"
      ],
      correct: 1,
      explanation: "Prosečan čitalac provede samo 1-2 minuta čitajući blog članak. Zato je važno imati privlačan naslov, kratke paragrafe i jasnu strukturu."
    },
    {
      question: "Koja je najvažnija metrika za merenje uspeha content marketinga?",
      options: [
        "Broj pregleda stranice",
        "Vreme provedeno na stranici",
        "Konverzije i generisani kvalifikovani kontakti",
        "Broj komentara i deljenja"
      ],
      correct: 2,
      explanation: "Konverzije i kvalifikovani kontakti su najvažnija metrika jer direktno utiču na poslovne rezultate. Ostale metrike su korisne, ali konverzija je ultimatni cilj."
    },
    {
      question: "Koliko košta kreiranje profesionalnog blog sadržaja u Srbiji?",
      options: [
        "5,000-15,000 dinara po članku",
        "20,000-40,000 dinara po članku",
        "50,000-80,000 dinara po članku",
        "100,000+ dinara po članku"
      ],
      correct: 1,
      explanation: "Profesionalni blog članak od 1500-3000 reči sa istraživanjem i optimizacijom košta 20,000-40,000 dinara. Cena zavisi od složenosti teme i iskustva pisca."
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
                <span>42 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Content Marketing</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Content Marketing za Mala Preduzeća - Kompletni Vodič kroz Kreiranje Sadržaja koji Prodaje 2025
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da kreirate sadržaj koji privlači prave klijente, gradi autoritet i povećava prodaju. Od strategije do realizacije - sve što trebate za uspešan content marketing u Srbiji.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Content Marketing Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PenTool className="w-6 h-6 text-primary" />
                <span>Šta je Content Marketing i Zašto je Ključan za Vaš Uspeh?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Content marketing je strategija kreiranja i distribucije vrednog, relevantnog i konzistentnog sadržaja sa ciljem privlačenja i zadržavanja jasno definisane publike. Za mala preduzeća u Srbiji, ovo predstavlja najisplativiji način gradnje brenda i privlačenja klijenata.
              </p>
              <p>
                Za razliku od tradicionalnog marketinga koji direktno reklamira proizvode, content marketing pruža korisne informacije koje rešavaju probleme vaše ciljne grupe. Ovaj pristup gradi poverenje, pozicionira vas kao stručnjaka u oblasti i na kraju dovodi do prodaje.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Content Marketing u Brojkama za 2025:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• <strong>91% B2B marketara</strong> koristi content marketing</li>
                    <li>• <strong>70% kupaca</strong> radije čita članke nego gleda reklame</li>
                    <li>• <strong>3 puta više kontakata</strong> generiše od tradicionalnog marketinga</li>
                    <li>• <strong>62% niži trošak</strong> po kontaktu od plaćenih reklama</li>
                    <li>• <strong>13 puta veća verovatnoća</strong> za pozitivan povrat investicije</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• <strong>67% B2B kupaca</strong> čita 3-5 sadržaja pre kontakta</li>
                    <li>• <strong>80% poslovnih odluka</strong> utiče kvalitetan sadržaj</li>
                    <li>• <strong>434% više mogućnosti</strong> za visok rang na Google pretragama</li>
                    <li>• <strong>6 puta veća konverzija</strong> kod korisnika koji konzumiraju sadržaj</li>
                    <li>• <strong>300% više saobraćaja</strong> generiše blog od društvenih mreža</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Marketing Benefits for Serbian SMEs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Prednosti Content Marketinga za Srpska Mala Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Zašto je Content Marketing Idealan za Srpski Tržišta</h3>
                <p className="mb-4">
                  U Srbiji, gde je konkurencija u digitalnom prostoru još uvek relativno mala, kvalitetan sadržaj može brzo da pozicionira vaše preduzeće kao lidera u branši. Srpski korisnici cenę autentičan, koristan sadržaj na maternjem jeziku.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Finansijske Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Nizak početni trošak:</strong> Samo vreme i kreativnost</li>
                      <li>• <strong>Dugoročna vrednost:</strong> Sadržaj radi mesecima i godinama</li>
                      <li>• <strong>Visok ROI:</strong> 300% veći povrat od plaćenih reklama</li>
                      <li>• <strong>Smanjeni trošak oglašavanja:</strong> Organiki saobraćaj</li>
                      <li>• <strong>Bolji kvalitet kontakata:</strong> Niži trošak konverzije</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Marketing Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Gradnje autoriteta:</strong> Pozicija stručnjaka u oblasti</li>
                      <li>• <strong>Povećanje svesti o brendu:</strong> Veća prepoznatljivost</li>
                      <li>• <strong>SEO prednosti:</strong> Bolje rangiranje na Google pretragama</li>
                      <li>• <strong>Društvene mreže:</strong> Sadržaj za deljenje i interakciju</li>
                      <li>• <strong>Email marketing:</strong> Vrednost za pretplatnike</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Poslovne Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Privlačenje talenata:</strong> Jača employer brand</li>
                      <li>• <strong>Partnerstva:</strong> Privlačenje poslovnih saradnika</li>
                      <li>• <strong>Korisnička podrška:</strong> Smanjeno opterećenje support tima</li>
                      <li>• <strong>Proizvodni razvoj:</strong> Uvid u potrebe korisnika</li>
                      <li>• <strong>Kompetitivna prednost:</strong> Izdvajanje od konkurencije</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Specifičnosti Srpskog Tržišta za Content Marketing</h3>
                <p className="mb-4">
                  Srpsko tržište ima svoje specifičnosti koje morate uzeti u obzir pri kreiranju content strategije. Razumevanje lokalne kulture, jezika i ponašanja potrošača je ključno za uspeh.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Karakteristike Srpske Publike:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Jezik:</strong> Prioritet sadržaju na srpskom jeziku</li>
                        <li>• <strong>Stil komunikacije:</strong> Direktan, prijateljski pristup</li>
                        <li>• <strong>Lokalni primeri:</strong> Studije slučaja iz Srbije</li>
                        <li>• <strong>Kulturne reference:</strong> Razumevanje lokalnog konteksta</li>
                        <li>• <strong>Poverenje:</strong> Važnost preporuke i recenzija</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Mobilno korišćenje:</strong> 70% pristupi preko telefona</li>
                        <li>• <strong>Društvene mreže:</strong> Facebook i Instagram dominantni</li>
                        <li>• <strong>Video sadržaj:</strong> Rastući trend konzumiranja</li>
                        <li>• <strong>Lokalne informacije:</strong> Zainteresovanost za regionalne vesti</li>
                        <li>• <strong>Praktičnost:</strong> Fokus na korisne, primenljive savete</li>
                      </ul>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Content Marketing Prednosti za Različite Industrije u Srbiji:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>IT i tehnologija:</strong> Tehnički blog članci, case studies, objašnjenja kompleksnih rešenja</p>
                      <p><strong>Uslužni sektor:</strong> Praktični saveti, FAQ sekcije, vodići korak-po-korak</p>
                      <p><strong>Maloprodaja:</strong> Lifestyle sadržaj, produkt recenzije, sezonske kampanje</p>
                      <p><strong>B2B usluge:</strong> Whitepapers, industrijsko iskustvo, regulatorne izmene</p>
                      <p><strong>Lokalni biznisi:</strong> Zajednice fokusiran sadržaj, lokalne vesti, događaji</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Strategy Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Razvoj Content Strategije - Od Ideje do Realizacije</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Definisanje Ciljeva i Ciljne Grupe</h3>
                <p className="mb-4">
                  Uspešan content marketing počinje jasno definisanim ciljevima i dubokima razumevanjem vaše ciljne grupe. Bez ovih osnova, čak i najbolji sadržaj neće dati željena rezultati.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">SMART Ciljevi za Content Marketing:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Povećanje svesti o brendu:</strong> 50% više prepoznatljivosti za 6 meseci</li>
                      <li>• <strong>Generisanje kontakata:</strong> 100 kvalifikovanih kontakata mesečno</li>
                      <li>• <strong>SEO poboljšanja:</strong> Top 5 pozicija za 10 ključnih reči</li>
                      <li>• <strong>Angažovanje publike:</strong> 25% povećanje interakcije</li>
                      <li>• <strong>Konverzije:</strong> 15% povećanje online prodaje</li>
                      <li>• <strong>Autoritet u branši:</strong> Pozicija lidera mišljenja</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Definisanje Buyer Persona:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Demografski podaci:</strong> Uzrast, pol, lokacija, prihodi</li>
                      <li>• <strong>Profesionalny profil:</strong> Pozicija, industrija, veličina kompanije</li>
                      <li>• <strong>Bolni punktovi:</strong> Glavni problemi i izazovi</li>
                      <li>• <strong>Ciljevi:</strong> Šta želi da postigne</li>
                      <li>• <strong>Ponašanje online:</strong> Koje platforme koristi</li>
                      <li>• <strong>Proces odlučivanja:</strong> Kako donosi kupovne odluke</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Audit i Analiza Konkurencije</h3>
                <p className="mb-4">
                  Pre kreiranja novog sadržaja, važno je analizirati postojeći sadržaj i videti šta radi konkurencija. Ova analiza pomaže identifikovati mogućnosti i razlike u pristupu.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Content Audit Korak-po-Korak:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ol className="space-y-1 text-sm list-decimal list-inside">
                        <li>Inventura postojećeg sadržaja (blog, društvene mreže)</li>
                        <li>Analiza performansi (pregledi, deljenja, komentari)</li>
                        <li>Identifikacija najuspešnijih tema i formata</li>
                        <li>Procena kvaliteta i relevantnost sadržaja</li>
                        <li>Prepoznavanje praznina u sadržaju</li>
                      </ol>
                      <ol className="space-y-1 text-sm list-decimal list-inside" start="6">
                        <li>SEO analiza postojećeg sadržaja</li>
                        <li>Evaluacija brand konsistentnosti</li>
                        <li>Pregled user-generated content</li>
                        <li>Analiza engagement metrika</li>
                        <li>Preporuke za poboljšanje</li>
                      </ol>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Analiza Konkurencije:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Identifikacija:</strong> Top 5-10 konkurenata</li>
                        <li>• <strong>Content tipovi:</strong> Blog, video, infografike</li>
                        <li>• <strong>Učestalost:</strong> Koliko često objavljuju</li>
                        <li>• <strong>Engagement:</strong> Koji sadržaj najradi</li>
                        <li>• <strong>Gaps:</strong> Teme koje ne pokrivaju</li>
                        <li>• <strong>Kvalitet:</strong> Procena vrednosti sadržaja</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Alati za Analizu:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>BuzzSumo:</strong> Najpopularniji sadržaj po temama</li>
                        <li>• <strong>SEMrush:</strong> Konkurentski content i ključne reči</li>
                        <li>• <strong>Ahrefs:</strong> Backlink analiza i content gaps</li>
                        <li>• <strong>Social Blade:</strong> Praćenje društvenih mreža</li>
                        <li>• <strong>Google Alerts:</strong> Praćenje spominjanja</li>
                        <li>• <strong>Mention:</strong> Brand monitoring alat</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Analiza Rezultata:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Content themes:</strong> Najpopularnije teme</li>
                        <li>• <strong>Format preferences:</strong> Blog vs video vs infografike</li>
                        <li>• <strong>Posting schedule:</strong> Optimalno vreme objavljivanja</li>
                        <li>• <strong>Engagement patterns:</strong> Tip sadržaja koji generiše interakciju</li>
                        <li>• <strong>Content gaps:</strong> Mogućnosti za differentciju</li>
                        <li>• <strong>Quality benchmarks:</strong> Standardi kvaliteta u industriji</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Types and Formats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span>Tipovi Sadržaja i Formati za Maksimalan Uticaj</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Blog Članci - Temelj Content Strategije</h3>
                <p className="mb-4">
                  Blog članci su osnova svakog content marketing plana. Omogućavaju duboku obradu tema, SEO optimizaciju i pozicioniranje kao autoriteta u branši. U Srbiji, kvalitetni blog sadržaj na srpskom jeziku ima veliku vrednost.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Edukatvni Članci</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>How-to vodići:</strong> Korak-po-korak instrukcije</li>
                      <li>• <strong>Objašnjenja:</strong> Kompleksni koncepti pojednostavljeni</li>
                      <li>• <strong>FAQ članci:</strong> Odgovori na česta pitanja</li>
                      <li>• <strong>Case studies:</strong> Primeri iz prakse</li>
                      <li>• <strong>Beste practices:</strong> Preporučene metode</li>
                      <li>• <strong>Duožina:</strong> 1500-3000 reči</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Industrijski Članci</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Trendovi:</strong> Najave novih kretanja u industriji</li>
                      <li>• <strong>Analize:</strong> Dubinsko razmatranje tema</li>
                      <li>• <strong>Intervjui:</strong> Razgovori sa stručnjacima</li>
                      <li>• <strong>Događanja:</strong> Reportaže sa konferencija</li>
                      <li>• <strong>Predviđanja:</strong> Buduće perspektive</li>
                      <li>• <strong>Duožina:</strong> 2000-4000 reći</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Komercijalni Članci</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Proizvod objašnjenja:</strong> Detaljni opisi funkcionalnosti</li>
                      <li>• <strong>Poređenja:</strong> Vaš proizvod vs konkurencija</li>
                      <li>• <strong>Success stories:</strong> Zadovoljni klijenti</li>
                      <li>• <strong>Update objave:</strong> Nove funkcionalnosti</li>
                      <li>• <strong>Behind-the-scenes:</strong> Pogled u kompaniju</li>
                      <li>• <strong>Duožina:</strong> 800-1500 reći</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Vizuelni Sadržaj - Sila Slike u Digital Eri</h3>
                <p className="mb-4">
                  Vizuelni sadržaj se deli 30 puta više od tekstualnog. U doba skraćene pažnje, infografike, slike i video materijali su esencijalni za privlačenje i zadržavanje pažnje publike.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Infografike i Vizuelne Prezentacije:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Statistike:</strong> Brojke iz industrije vizuelno predstavljene</li>
                        <li>• <strong>Procesi:</strong> Koraci u postupku prikazano šematski</li>
                        <li>• <strong>Poređenja:</strong> Product comparison charts</li>
                        <li>• <strong>Timeline:</strong> Hronološke prezentacije razvoja</li>
                        <li>• <strong>Checklist:</strong> Lista koraka u vizuelnom formatu</li>
                        <li>• <strong>Alati:</strong> Canva, Piktochart, Adobe Illustrator</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Video Sadržaj za Srpsko Tržište:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Objašnjavanje:</strong> Kratki tutorial video klipovi</li>
                        <li>• <strong>Testimoniali:</strong> Zadovoljni klijenti govore</li>
                        <li>• <strong>Behind-the-scenes:</strong> Pogled u rad kompanije</li>
                        <li>• <strong>Live stream:</strong> Real-time interakcija sa publikom</li>
                        <li>• <strong>Animacija:</strong> Kompleksni koncepti animirano objašnjeni</li>
                        <li>• <strong>Optimalna dužina:</strong> 60-90 sekundi za društvene mreže</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Vizuelni Sadržaj Best Practices za Srbiju:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Lokalizacija:</strong> Koristiti srpske elemente i reference</li>
                        <li>• <strong>Boje:</strong> Prilagoditi brand boje ali poštovati kulturne preference</li>
                        <li>• <strong>Tipovi slova:</strong> Čitljive fontove koji podržavaju latinicu</li>
                        <li>• <strong>Veličina:</strong> Optimizovano za mobilne uređaje</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Copyright:</strong> Koristiti besplatne ili kupljene stock foto</li>
                        <li>• <strong>Branding:</strong> Konzistentno korištenje logo i brand elemenata</li>
                        <li>• <strong>Call-to-action:</strong> Jasni pozovi na akciju u vizuelima</li>
                        <li>• <strong>Testiranje:</strong> A/B testiranje različitih vizuelnih pristupa</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Interaktivni i Specializovani Formati</h3>
                <p className="mb-4">
                  Moderni content marketing ide ka interaktivnosti. Kvizovi, ankete, kalkulatori i webinari omogućavaju dublju interakciju sa publikom i prikupljanje vrednih podataka.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Interaktivni Sadržaj:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Kvizovi:</strong> Zabavni načini testiranja znanja</li>
                      <li>• <strong>Ankete:</strong> Prikupljanje mišljenja publike</li>
                      <li>• <strong>Kalkulatori:</strong> ROI ili cost kalkulatori</li>
                      <li>• <strong>Assessment:</strong> Evaluacija trenutnog stanja</li>
                      <li>• <strong>Polls:</strong> Brzi opstioni na društvenim mrežama</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Premium Sadržaj:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>eBooks:</strong> Sveobuhvatni vodići (20+ stranica)</li>
                      <li>• <strong>Whitepapers:</strong> Dubinsko istraživanje teme</li>
                      <li>• <strong>Checklists:</strong> Praktične liste za download</li>
                      <li>• <strong>Templates:</strong> Gotovi šabloni za korisnik</li>
                      <li>• <strong>Toolkits:</strong> Set alata i resursa</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Live Sadržaj:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Webinari:</strong> Educational prezentacije online</li>
                      <li>• <strong>Live Q&A:</strong> Real-time odgovaranje na pitanja</li>
                      <li>• <strong>Live demo:</strong> Produkt demoni u živo</li>
                      <li>• <strong>Intervienti:</strong> Razgovori sa gostima</li>
                      <li>• <strong>Launch događaji:</strong> Predstavljanje novih proizvoda</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Podcast i Audio:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Podcast series:</strong> Regularna audio emisije</li>
                      <li>• <strong>Intervjui:</strong> Razgovori sa industry ekspertima</li>
                      <li>• <strong>Audio blog:</strong> Članci u audio formatu</li>
                      <li>• <strong>Roundtable:</strong> Panel diskusije</li>
                      <li>• <strong>Audio quotes:</strong> Kratke inspirativne poruke</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Calendar and Planning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>Content Kalendar i Planiranje Sadržaja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Kreiranje Efektivnog Content Kalendara</h3>
                <p className="mb-4">
                  Content kalendar je srž organizovane content strategije. Omogućava konzistentno objavljivanje, bolje planiranje resursa i osigurava da pokrivate sve važne teme za vašu publiku.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Mesečni Content Plan - Template:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 p-2 text-left">Nedelja</th>
                            <th className="border border-gray-300 p-2 text-left">Blog Članak</th>
                            <th className="border border-gray-300 p-2 text-left">Social Media</th>
                            <th className="border border-gray-300 p-2 text-left">Email Newsletter</th>
                            <th className="border border-gray-300 p-2 text-left">Video/Visual</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">1.</td>
                            <td className="border border-gray-300 p-2">How-to vodič</td>
                            <td className="border border-gray-300 p-2">5 objava + 3 story</td>
                            <td className="border border-gray-300 p-2">Týgodnji pregled</td>
                            <td className="border border-gray-300 p-2">Tutorial video</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">2.</td>
                            <td className="border border-gray-300 p-2">Industry trend</td>
                            <td className="border border-gray-300 p-2">4 objava + infografik</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2">Behind-the-scenes</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">3.</td>
                            <td className="border border-gray-300 p-2">Case study</td>
                            <td className="border border-gray-300 p-2">6 objava + poll</td>
                            <td className="border border-gray-300 p-2">Mesečni update</td>
                            <td className="border border-gray-300 p-2">Client testimonial</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-medium">4.</td>
                            <td className="border border-gray-300 p-2">Product update</td>
                            <td className="border border-gray-300 p-2">5 objava + Q&A</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2">Product demo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Planiranje po Temama:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Mesečne teme:</strong> Jeden fokus per mesec</li>
                        <li>• <strong>Sezonski sadržaj:</strong> Praznici i specijalni događaji</li>
                        <li>• <strong>Evergreen sadržaj:</strong> Timeless teme koje uvek rade</li>
                        <li>• <strong>Trending topics:</strong> Aktuelne teme iz industrije</li>
                        <li>• <strong>User-generated:</strong> Sadržaj koji stvaraju korisniki</li>
                        <li>• <strong>Promotional:</strong> 20% sadržaja sme biti promocioni</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Content Batch Produkcija:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Istraživanje:</strong> 1 dan nedeljno za research</li>
                        <li>• <strong>Pisanje:</strong> 2-3 dana za kreiranje sadržaja</li>
                        <li>• <strong>Dizajn:</strong> 1 dan za vizuelne elemente</li>
                        <li>• <strong>Editing:</strong> Pregled i korekcija sadržaja</li>
                        <li>• <strong>Scheduling:</strong> Programiranje objava unapred</li>
                        <li>• <strong>Batch size:</strong> 4-6 objava odjednom</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Content Alati za Planiranje:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Trello/Asana:</strong> Projektno upravljanje sadržajem</li>
                        <li>• <strong>Google Calendar:</strong> Vizuelni pregled publikovanja</li>
                        <li>• <strong>CoSchedule:</strong> All-in-one content kalendar</li>
                        <li>• <strong>Hootsuite:</strong> Social media scheduling</li>
                        <li>• <strong>Buffer:</strong> Cross-platform objavljivanje</li>
                        <li>• <strong>Notion:</strong> Content wiki i baza znanja</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Workflow i Timovi</h3>
                <p className="mb-4">
                  Efikasniji content marketing zahteva organizovan workflow i jasnu podelu odgovornosti. Čak i mala preduzeća trebaju strukturiran pristup produkciji sadržaja.
                </p>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Content Production Workflow:</h4>
                  <div className="grid md:grid-cols-5 gap-2 mt-3">
                    <div className="text-center p-2 bg-white rounded border">
                      <h5 className="font-medium text-sm">Ideacija</h5>
                      <p className="text-xs mt-1">Brainstorming tema i koncepata</p>
                    </div>
                    <div className="text-center p-2 bg-white rounded border">
                      <h5 className="font-medium text-sm">Istraživanje</h5>
                      <p className="text-xs mt-1">Pripremama podataka i izvori</p>
                    </div>
                    <div className="text-center p-2 bg-white rounded border">
                      <h5 className="font-medium text-sm">Kreiranje</h5>
                      <p className="text-xs mt-1">Pisanje ili produkcija sadržaja</p>
                    </div>
                    <div className="text-center p-2 bg-white rounded border">
                      <h5 className="font-medium text-sm">Pregled</h5>
                      <p className="text-xs mt-1">Editing i quality control</p>
                    </div>
                    <div className="text-center p-2 bg-white rounded border">
                      <h5 className="font-medium text-sm">Publikovanje</h5>
                      <p className="text-xs mt-1">Objavljivanje i promocija</p>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Quiz */}
          <Quiz questions={quizQuestions} />

          {/* SEO and Content Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary" />
                <span>SEO Optimizacija i Vidljivost Sadržaja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Content SEO za Srpsko Tržište</h3>
                <p className="mb-4">
                  SEO optimizacija sadržaja je ključna za povećanje organske vidljivosti na Google pretragama. U Srbiji, gdzie konkurencija je još uvek niska, dobro optimizovan sadržaj može brzo doći do vrheih pozicija.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Ključne Reči i Istraživanje:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Google Keyword Planner:</strong> Besplatan alat za ključne reči</li>
                      <li>• <strong>Long-tail keywords:</strong> Specifične fraze (3+ reči)</li>
                      <li>• <strong>Local keywords:</strong> "Srbija", "Beograd", "Novi Sad"</li>
                      <li>• <strong>Question keywords:</strong> "kako da", "šta je", "zašto"</li>
                      <li>• <strong>Commercial intent:</strong> "najbolji", "cena", "kupiti"</li>
                      <li>• <strong>Keyword density:</strong> 1-2% prirodna upotreba</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">On-Page SEO Elements:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Title tag:</strong> 50-60 karaktera, ključna reč na početku</li>
                      <li>• <strong>Meta description:</strong> 150-160 karaktera, poziv na akciju</li>
                      <li>• <strong>H1 tag:</strong> Jedan po stranici, sadrži glavnu ključnu reč</li>
                      <li>• <strong>H2/H3 tagovi:</strong> Struktura sadržaja, related keywords</li>
                      <li>• <strong>Internal linking:</strong> Veze između povezanih članaka</li>
                      <li>• <strong>Image alt text:</strong> Opisni tekst za slike</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Optimizacija za Google Featured Snippets</h3>
                <p className="mb-4">
                  Featured snippets se pojavljuju na "poziciji 0" u Google rezultatima i donose značajan saobraćaj. Strukturiran sadržaj ima veću šansu za izbor.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tipovi Featured Snippets i Optimizacija:</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      <div>
                        <h5 className="font-medium mb-1">Paragraf Snippets:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Odgovaraj na pitanja u 40-50 reči</li>
                          <li>• Koristi "Šta je...", "Kako da..." formulate</li>
                          <li>• Početak odgovora odmah posle naslova</li>
                          <li>• Kratki, direktan odgovor</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Lista Snippets:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Numbered ili bullet point liste</li>
                          <li>• "Top 10", "5 načina", "koraci" formati</li>
                          <li>• Jasno struktuirane liste</li>
                          <li>• Logičen redosled stavki</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Tabela Snippets:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Poređenja proizvoda ili servisa</li>
                          <li>• Cene, specifikacije, features</li>
                          <li>• HTML tabele sa jasnim header</li>
                          <li>• Strukturirani data markup</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Schema Markup za Content:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Article schema:</strong> Označava blog članke za Google</p>
                      <p><strong>FAQ schema:</strong> Strukturirane često postavljana pitanja</p>
                      <p><strong>How-to schema:</strong> Korak-po-korak instrukcije</p>
                      <p><strong>Review schema:</strong> Ocene i testimoniјали</p>
                      <p><strong>Organization schema:</strong> Informacije o kompaniji</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Distribution and Promotion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Share2 className="w-6 h-6 text-primary" />
                <span>Distribucija i Promocija Sadržaja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Multi-Channel Distribution Strategy</h3>
                <p className="mb-4">
                  Kreiranje dobrog sadržaja je samo početak. Ključ uspeha je efikasna distribucija preko múltiple kanala da dođete do što veće ciljne publike.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Sopstveni Kanali (Owned)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Blog:</strong> Glavni center sadržaja</li>
                      <li>• <strong>Email newsletter:</strong> Direktna komunikacija</li>
                      <li>• <strong>Website:</strong> Landing stranice sa sadržajem</li>
                      <li>• <strong>Mobile app:</strong> In-app content features</li>
                      <li>• <strong>PDF resources:</strong> Downloadable guides</li>
                      <li>• <strong>Webinari:</strong> Live i recorded presentations</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Zaradani Kanali (Earned)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Social media sharing:</strong> Organska viralnost</li>
                      <li>• <strong>PR i mediji:</strong> Spomeni u medijima</li>
                      <li>• <strong>Influencer partnerships:</strong> Saradnje sa influencerima</li>
                      <li>• <strong>Guest posting:</strong> Pisanje za druge blogove</li>
                      <li>• <strong>Podcast gostovanja:</strong> Učešće u drugim show-ovima</li>
                      <li>• <strong>Awards i priznanja:</strong> Industry recognition</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Plaćeni Kanali (Paid)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Social media ads:</strong> Facebook, Instagram, LinkedIn</li>
                      <li>• <strong>Google Ads:</strong> Content promotion campaigns</li>
                      <li>• <strong>Native advertising:</strong> Sponsored content</li>
                      <li>• <strong>Influencer collaborations:</strong> Plaćene saradnje</li>
                      <li>• <strong>Content syndication:</strong> Distribucija preko mreža</li>
                      <li>• <strong>Retargeting:</strong> Ponovna ciljanja sajta posetioca</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Social Media Content Strategy za Srbiju</h3>
                <p className="mb-4">
                  Društvene mreže su ključne za distribuciju sadržaja u Srbiji. Svaka platforma ima svoja specifičnost i zahteva prilagođen pristup.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Facebook Strategy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Content mix:</strong> 60% value, 30% engagement, 10% promotional</li>
                        <li>• <strong>Post timing:</strong> 19-21h najbolje vreme za Srbiju</li>
                        <li>• <strong>Video content:</strong> Native video ima 10x više reach</li>
                        <li>• <strong>Grupe:</strong> Aktivno učešće u relevant industry grupama</li>
                        <li>• <strong>Live video:</strong> 3x više engagement od regular posts</li>
                        <li>• <strong>Comments:</strong> Brza reakcija na komentare povećava reach</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Instagram Strategy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Visual brand:</strong> Konzistentna visual identity</li>
                        <li>• <strong>Stories:</strong> Daily behind-the-scenes content</li>
                        <li>• <strong>Hashtags:</strong> 5-10 relevant, lokalnih hashtag-a</li>
                        <li>• <strong>IGTV/Reels:</strong> Kratki, engaging video content</li>
                        <li>• <strong>User-generated:</strong> Repost content korisnika sa dozvolom</li>
                        <li>• <strong>Bio link:</strong> Koristiti linktree za više sadržaja</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">LinkedIn B2B Strategy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Professional tone:</strong> Fokus na business value</li>
                        <li>• <strong>Articles:</strong> Long-form thought leadership content</li>
                        <li>• <strong>Industry insights:</strong> Deljenje relevantnih trend-ova</li>
                        <li>• <strong>Employee advocacy:</strong> Team članovi dele company content</li>
                        <li>• <strong>LinkedIn groups:</strong> Aktivna participacija u discussions</li>
                        <li>• <strong>Connection building:</strong> Networking sa industry professional</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">YouTube Strategy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>SEO optimization:</strong> Titles, descriptions, tags na srpskom</li>
                        <li>• <strong>Thumbnail design:</strong> Eye-catching, brand consistent</li>
                        <li>• <strong>Series content:</strong> Multi-part educational videos</li>
                        <li>• <strong>Community tab:</strong> Interaction with subscribers</li>
                        <li>• <strong>Collaborations:</strong> Guest appearance u related channels</li>
                        <li>• <strong>End screens:</strong> Drive traffic to related content</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Content Repurposing Matrix:</h4>
                    <p className="text-sm mb-3">Jedan blog članak može dati 10+ različitih sadržaja za različite platforme:</p>
                    <div className="grid md:grid-cols-4 gap-2 text-xs">
                      <div className="border p-2 rounded bg-white">
                        <strong>Blog članak</strong> → Instagram carousel (10 slajd-ova)
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>Key points</strong> → Twitter thread (8-10 tweet-ova)
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>Statistics</strong> → LinkedIn infografik
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>Tutorial deo</strong> → YouTube kratki video
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>Quotes</strong> → Instagram Stories quote posts
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>Checklist</strong> → Facebook downloadable PDF
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>Case study</strong> → LinkedIn company update
                      </div>
                      <div className="border p-2 rounded bg-white">
                        <strong>FAQ sekcija</strong> → Instagram Story Q&A
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Analytics and Measurement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Merenje i Analitika Content Marketinga</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Metrike i KPI za Content Marketing</h3>
                <p className="mb-4">
                  Merenje uspeha content marketinga zahteva praćenje multiple metrika kroz different stages customer journey. Važno je uspostaviti baseline i redovno pratiti trend-ove.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Awareness Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Organic traffic:</strong> Broj poseta sa Google pretrage</li>
                      <li>• <strong>Social reach:</strong> Broj ljudi koji vide sadržaj</li>
                      <li>• <strong>Brand mentions:</strong> Spominjanje brenda online</li>
                      <li>• <strong>Impressions:</strong> Ukupan broj prikazivanja</li>
                      <li>• <strong>Share of voice:</strong> Procenat mentions u industriji</li>
                      <li>• <strong>Video views:</strong> Pregledi video sadržaja</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Engagement Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Time on page:</strong> Vreme provedeno čitajući sadržaj</li>
                      <li>• <strong>Social engagement:</strong> Likes, comments, shares</li>
                      <li>• <strong>Email click rate:</strong> Kliks u newsletter content</li>
                      <li>• <strong>Comments quality:</strong> Dubina diskusija</li>
                      <li>• <strong>Return visitors:</strong> Povratni posetioci</li>
                      <li>• <strong>Pages per session:</strong> Broj stranica po poseti</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Conversion Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Lead generation:</strong> Broj novih kvalifikovanih kontakata</li>
                      <li>• <strong>Email subscriptions:</strong> Newsletter pretplatе</li>
                      <li>• <strong>Content downloads:</strong> eBook, whitepaper downloads</li>
                      <li>• <strong>Demo requests:</strong> Zahtevi za produktno demo</li>
                      <li>• <strong>Sales attribution:</strong> Prodaja povezane sa sadržajem</li>
                      <li>• <strong>Customer acquisition:</strong> Novi klijenti iz content-a</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">ROI Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Cost per lead:</strong> Trošak po generisanom kontaktu</li>
                      <li>• <strong>Customer lifetime value:</strong> Vrednost klijenta iz content-a</li>
                      <li>• <strong>Content ROI:</strong> Povrat investicije u sadržaj</li>
                      <li>• <strong>Revenue attribution:</strong> Prihod povezan sa sadržajem</li>
                      <li>• <strong>Cost savings:</strong> Uštede od smanjenog ad spend-a</li>
                      <li>• <strong>Efficiency ratios:</strong> Output per input metrics</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Analytics Alati i Setup</h3>
                <p className="mb-4">
                  Proper analytics setup je foundation za data-driven content decisions. Kombinovanje multiple alata daje kompletan uvid u performance.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Website Analytics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Google Analytics 4:</strong> Traffic, behavior, conversions</li>
                        <li>• <strong>Google Search Console:</strong> Organic search performance</li>
                        <li>• <strong>Hotjar:</strong> User behavior heatmaps</li>
                        <li>• <strong>GTM:</strong> Tracking implementation</li>
                        <li>• <strong>Matomo:</strong> Privacy-focused alternative</li>
                        <li>• <strong>Crazy Egg:</strong> Click tracking analysis</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Social Media Analytics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Meta Business Suite:</strong> Facebook/Instagram insights</li>
                        <li>• <strong>LinkedIn Analytics:</strong> Company page performance</li>
                        <li>• <strong>YouTube Analytics:</strong> Video performance details</li>
                        <li>• <strong>Sprout Social:</strong> Cross-platform social reporting</li>
                        <li>• <strong>Hootsuite Analytics:</strong> Scheduled content performance</li>
                        <li>• <strong>Buffer Analytics:</strong> Engagement tracking</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Content-Specific Tools:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>BuzzSumo:</strong> Content performance analysis</li>
                        <li>• <strong>SEMrush:</strong> Content audit i konkurentska analiza</li>
                        <li>• <strong>Ahrefs:</strong> Backlink i organic traffic analysis</li>
                        <li>• <strong>Mention:</strong> Brand tracking i sentiment</li>
                        <li>• <strong>CoSchedule Headline Analyzer:</strong> Title optimization</li>
                        <li>• <strong>Grammarly:</strong> Content quality analysis</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Content Analytics Dashboard Setup:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Google Data Studio:</strong> Besplatan dashboard kreator</li>
                        <li>• <strong>Automated reporting:</strong> Nedeljni/mesečni email izvještaji</li>
                        <li>• <strong>Key metric tracking:</strong> Top 5-7 najvažnijih KPI</li>
                        <li>• <strong>Comparative analysis:</strong> Period-over-period poređenja</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Goal tracking:</strong> Conversion funnels i paths</li>
                        <li>• <strong>Segment analysis:</strong> Performance po audience tipovima</li>
                        <li>• <strong>Content attribution:</strong> Welcher sadržaj dovodi do konverzija</li>
                        <li>• <strong>ROI calculation:</strong> Revenue vs investment tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Team and Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span>Content Tim i Resursi za Srpska Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Gradnja Content Marketing Tima</h3>
                <p className="mb-4">
                  Za mala preduzeća u Srbiji, gradnja dedicated content tima može biti challenging zbog budget ograničenja. Ključ je u pametnom pristupa i postupnom širenju tima.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Solo Creator Approach</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>1 osoba:</strong> Svi content marketing taskovi</li>
                      <li>• <strong>Vreme:</strong> 15-20 sati nedeljno</li>
                      <li>• <strong>Output:</strong> 2-3 blog članka + social media</li>
                      <li>• <strong>Tools:</strong> Canva, Grammarly, Hootsuite</li>
                      <li>• <strong>Budget:</strong> 30,000-60,000 RSD mesečno</li>
                      <li>• <strong>Ideal za:</strong> Startups, very small businesses</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Small Team Setup</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Content Manager:</strong> Strategija + koordinacija</li>
                      <li>• <strong>Writer/Editor:</strong> Blog članci + copy</li>
                      <li>• <strong>Designer:</strong> Part-time vizuelni sadržaj</li>
                      <li>• <strong>Output:</strong> 4-6 blog članka + multimedia</li>
                      <li>• <strong>Budget:</strong> 150,000-300,000 RSD mesečno</li>
                      <li>• <strong>Ideal za:</strong> Small-medium businesses</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Full Content Team</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Content Strategist:</strong> Plani i strategija</li>
                      <li>• <strong>Content Writers (2):</strong> Blog i copy creation</li>
                      <li>• <strong>Visual Designer:</strong> Graphics, infographics</li>
                      <li>• <strong>Video Producer:</strong> Video sadržaj</li>
                      <li>• <strong>Social Media Manager:</strong> Platform management</li>
                      <li>• <strong>Budget:</strong> 500,000+ RSD mesečno</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Outsourcing i Freelancing u Srbiji</h3>
                <p className="mb-4">
                  Za mala preduzeća, kombinacija in-house strategije sa outsourced execution često daje najbolji odnos kvaliteta i cene.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Content Services u Srbiji - Cene i Provideri:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Blog pisanje:</strong> 20,000-40,000 RSD per članak (1500+ reči)</li>
                        <li>• <strong>Content strategija:</strong> 80,000-150,000 RSD per mesec</li>
                        <li>• <strong>Social media content:</strong> 30,000-60,000 RSD per mesec</li>
                        <li>• <strong>Video produkcija:</strong> 100,000-300,000 RSD per video</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Graphic design:</strong> 8,000-15,000 RSD per design</li>
                        <li>• <strong>Email campaigns:</strong> 25,000-50,000 RSD per kampanja</li>
                        <li>• <strong>SEO optimization:</strong> 40,000-80,000 RSD per mesec</li>
                        <li>• <strong>Content audit:</strong> 100,000-200,000 RSD one-time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Freelance Platforme:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Poslovi.rs:</strong> Lokalni freelanceri</li>
                        <li>• <strong>Upwork:</strong> Međunarodna talenta</li>
                        <li>• <strong>Fiverr:</strong> Specific task outsourcing</li>
                        <li>• <strong>99designs:</strong> Design contests i freelanceri</li>
                        <li>• <strong>ProFinder (LinkedIn):</strong> Professional services</li>
                        <li>• <strong>Behance:</strong> Creative professionals</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Content Agencies u Srbiji:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Digital agencies:</strong> Full-service content marketing</li>
                        <li>• <strong>PR agencies:</strong> Content + media relations</li>
                        <li>• <strong>Creative studios:</strong> Visual content specialists</li>
                        <li>• <strong>SEO agencies:</strong> Content + search optimization</li>
                        <li>• <strong>Video production:</strong> Motion graphics i video content</li>
                        <li>• <strong>Translation services:</strong> Localization pomoć</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Content Tools Investment:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Design:</strong> Canva Pro (5,000 RSD/mesec)</li>
                        <li>• <strong>Writing:</strong> Grammarly Premium (1,500 RSD/mesec)</li>
                        <li>• <strong>SEO:</strong> SEMrush/Ahrefs (8,000 RSD/mesec)</li>
                        <li>• <strong>Social:</strong> Hootsuite/Buffer (3,000 RSD/mesec)</li>
                        <li>• <strong>Analytics:</strong> BuzzSumo (12,000 RSD/mesec)</li>
                        <li>• <strong>Stock photos:</strong> Shutterstock (4,000 RSD/mesec)</li>
                      </ul>
                    </Card>
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
                <span>90-Day Content Marketing Action Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Vaš Put do Uspešnog Content Marketinga</h3>
                <p className="mb-4">
                  Follow this structured approach za implementation content marketing strategije koja donosi realní rezultate za vaše preduzeće.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Mesec 1: Foundation (Dani 1-30)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Content audit postojećeg sadržaja</li>
                      <li>• ✅ Definisanje buyer persona i ciljeva</li>
                      <li>• ✅ Keyword research za 20 ključnih reči</li>
                      <li>• ✅ Content calendar kreiranje za 3 meseca</li>
                      <li>• ✅ Blog setup i SEO optimizacija</li>
                      <li>• ✅ Social media strategy development</li>
                      <li>• ✅ Analytics alati setup (GA4, GSC)</li>
                      <li>• ✅ Prva 4 blog članka publikovanje</li>
                      <li>• ✅ Email newsletter list kreiranje</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Mesec 2: Produkcija (Dani 31-60)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ 6-8 high-quality blog članka</li>
                      <li>• ✅ 20+ social media objava</li>
                      <li>• ✅ 3 infografike ili vizuelna sadržaja</li>
                      <li>• ✅ Email newsletter launch</li>
                      <li>• ✅ Guest posting outreach (5 websites)</li>
                      <li>• ✅ Video content eksperiment (2 video)</li>
                      <li>• ✅ Lead magnet kreiranje (eBook ili guide)</li>
                      <li>• ✅ Social media engagement optimization</li>
                      <li>• ✅ Performance tracking i first optimizations</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Mesec 3: Optimizacija (Dani 61-90)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ A/B testing různých content formats</li>
                      <li>• ✅ Advanced SEO optimization implementacija</li>
                      <li>• ✅ Influencer outreach i partnerships</li>
                      <li>• ✅ Content repurposing za maximalan reach</li>
                      <li>• ✅ Paid content promotion campaigns</li>
                      <li>• ✅ Advanced analytics i attribution setup</li>
                      <li>• ✅ Team workflow optimization</li>
                      <li>• ✅ ROI calculation i business case preparation</li>
                      <li>• ✅ Q4 content strategy planning</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Start Content Ideas</h3>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">10 Blog Članaka koji Uvek Rade:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>• 🏆 "Top 10 [tema] za [godina] u Srbiji"</li>
                      <li>• 💡 "Kompletni vodič kroz [complex topic]"</li>
                      <li>• ❓ "5 najčešćih grešaka u [industrija] i kako ih izbeci"</li>
                      <li>• 📊 "Industry benchmark report za [niche]"</li>
                      <li>• 🎯 "Case study: Kako smo postigli [specific result]"</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• 🔍 "[Produkt/Usluga] vs [Konkurencija]: Objekti vs poređenja"</li>
                      <li>• 📚 "Ultimate checklist za [process/project]"</li>
                      <li>• 🚀 "Kako je [trend] menja [industrija] u 2025?"</li>
                      <li>• 💬 "10 pitanja koja svaki [target persona] treba da postavi"</li>
                      <li>• 🛠️ "DIY vodič: Kako sama da [solve common problem]"</li>
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
                Pokrenite Content Marketing Strategiju koja Donosi Rezultate!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Content marketing je najjači alat za gradnju autoriteta, privlačenje klijenata i dugotrajni poslovni uspeh. Počnite danas sa kreiranjem sadržaja koji vaša ciljana grupa stvarno voli.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Content Marketing Konsultacije</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/cene">Pogledaj Content Pakete</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BlogArticle22;