import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, BookOpen, Search, Users, TrendingUp, Target, Lightbulb, BarChart3, Zap } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle10 = () => {
  const quizQuestions = [
    {
      question: "Koliko često treba da objavljujete blog postove za optimalne SEO rezultate?",
      options: [
        "Jednom mesečno",
        "Jednom nedeljno",
        "2-3 puta nedeljno",
        "Svaki dan"
      ],
      correctAnswer: 2,
      explanation: "2-3 puta nedeljno je optimalna frekvencija. Dovoljno često da Google vidi da je sajt aktivan, a ne toliko često da kvalitet pati zbog kvantiteta."
    },
    {
      question: "Šta je najvažnije kod blog sadržaja za privlačenje klijenata?",
      options: [
        "Dužina članaka",
        "Rešavanje konkretnih problema čitalaca",
        "Profesionalne fotografije",
        "SEO optimizacija"
      ],
      correctAnswer: 1,
      explanation: "Rešavanje konkretnih problema čitalaca je najvažnije. Kada ljudi pronađu vredan sadržaj koji im pomaže, prirodno će želeti da saznaju više o vašim uslugama."
    },
    {
      question: "Koji tip blog sadržaja ima najveću šansu da se podeli na društvenim mrežama?",
      options: [
        "Promocijski sadržaj o vašim proizvodima",
        "Edukativni vodići i tutoriali",
        "Novosti o kompaniji",
        "Cenovnici i katalozi"
      ],
      correctAnswer: 1,
      explanation: "Edukativni vodići i tutoriali se najviše dele jer pružaju vrednost čitaocima. Ljudi rado dele korisne informacije sa svojom mrežom."
    },
    {
      question: "Koliko dugačak treba da bude kvalitetan blog post za dobro SEO rangiranje?",
      options: [
        "300-500 reči",
        "500-800 reči",
        "1000-2000 reči",
        "3000+ reči"
      ],
      correctAnswer: 2,
      explanation: "1000-2000 reči je optimalna dužina za većinu blog postova. Dovoljno da pokrije temu detaljno, ali ne toliko da postane dosadno za čitanje."
    },
    {
      question: "Koji je najbolji način da blog privuče lokalne klijente?",
      options: [
        "Pisanje o opštim temama",
        "Uključivanje lokalnih ključnih reči i tema",
        "Korišćenje samo globalnih trendova",
        "Fokus na internacionalne primere"
      ],
      correctAnswer: 1,
      explanation: "Uključivanje lokalnih ključnih reči i tema poput 'najbolji restoran u Beogradu' ili 'web dizajn Novi Sad' pomaže da privučete klijente iz vaše okoline."
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
                <span>12 min čitanja</span>
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
              Zašto je Blog Važan za Vaš Biznis - Kako Specijalizovan Sadržaj Privlači Klijente
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Otkrijte kako blog može da transformiše vaš biznis u authority u vašoj oblasti i dovede kontinuirani tok
              novih klijenata kroz organsko rangiranje i preporuke. Praktični vodič za pokretanje content strategije.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span>Blog kao Najmoćniji Marketing Alat</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Zamislite da svaki mesec na vaš sajt dodje 10.000 novih posetilaca koji aktivno traže upravo ono što vi nudite.
                Zamislite da vas potencijalni klijenti vide kao stručnjaka u vašoj oblasti pre nego što uopšte razmislje o konkurenciji.
                To je moć kvalitetnog blog-a.
              </p>
              <p>
                Blog nije samo "nice to have" - to je strateški marketing alat koji radi 24/7. Dok vi spavate, vaš blog
                edukuje potencijalne klijente, gradi poverenje i navodi ih da vas kontaktiraju. U Srbiji, 73% ljudi čita
                blog postove pre nego što donese odluku o kupovini usluge.
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Moć specijalizovanog blog-a:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Authority building:</strong> Postajete poznati stručnjak u svojoj oblasti</li>
                  <li>• <strong>SEO dominacija:</strong> Google vas rangira bolje od konkurencije</li>
                  <li>• <strong>Lead generation:</strong> Kontinuiran priliv zainteresovanih klijenata</li>
                  <li>• <strong>Brand awareness:</strong> Ljudi se sećaju vašeg imena kada im treba usluga</li>
                  <li>• <strong>Customer education:</strong> Edukovani klijenti su spremniji da plate više</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* SEO Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-6 h-6 text-primary" />
                <span>Kako Blog Dominira Google Pretrage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Long-Tail Keywords Strategy</h3>
                <p className="mb-4">
                  Dok se svi bore za ključne reči kao "web dizajn", vi možete da dominirate sa specifičnim frazama
                  kao "kako napraviti responzivan sajt za restoran u Beogradu". Ove long-tail ključne reči imaju:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Manja Konkurencija</h4>
                    <p className="text-sm text-muted-foreground">
                      Umesto da se borite sa stotinama konkurenata za osnovne termine, fokusirate se na specifične fraze
                      gde imate veće šanse za prvi page Google-a.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Kvalitetniji Traffic</h4>
                    <p className="text-sm text-muted-foreground">
                      Ljudi koji pretražuju "najbolji dizajn sajta za zubarsku ordinaciju" su mnogo bliži kupovini
                      od onih koji pretražuju samo "web dizajn".
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Viša Konverzija</h4>
                    <p className="text-sm text-muted-foreground">
                      Specifični izrazi privlače ljude koji znaju tačno šta žele, što znači da su spremniji
                      da vas kontaktiraju i plate za uslugu.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Primeri Uspešnih Blog Strategija u Srbiji</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Case Study: Stomatološka Ordinacija</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Strategy:</strong> Pisanje detaljnih članaka o dentalnim procedurama</p>
                      <p><strong>Key articles:</strong> "Implanti zuba u Novom Sadu - cena i procedure", "Kako da se pripremite za vadenje zuba"</p>
                      <p><strong>Results:</strong> 300% povećanje organskog traffic-a za 8 meseci, 40% novih pacijenata dolazi preko bloga</p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Case Study: IT Agencija</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Strategy:</strong> Tehnički blog postovi o web development trendovima</p>
                      <p><strong>Key articles:</strong> "React vs Vue - šta odabrati za vaš projekt 2024", "Koliko košta izrada e-commerce sajta"</p>
                      <p><strong>Results:</strong> Pozicionirani kao technology leaders, 50% povećanje B2B inquiries</p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Case Study: Frizerski Salon</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Strategy:</strong> Hair care saveti i trend articles</p>
                      <p><strong>Key articles:</strong> "Najbolje frizure za okruglo lice", "Kako negovati kosu tokom zime"</p>
                      <p><strong>Results:</strong> Instagram pratilaca +500%, bookings preko bloga +200%</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Featured Snippets i Voice Search Optimizacija</h3>
                <p className="mb-4">
                  Sve više ljudi pretražuje glasovno ("Ok Google, gde da napravim sajt u Beogradu?").
                  Blog vam omogućava da dominriate ove pretrage kroz:
                </p>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Voice Search Optimization:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>FAQ format:</strong> "Koliko košta izrada sajta?" umesto "cena web dizajna"</li>
                    <li>• <strong>Natural language:</strong> Pisanje kao što ljudi govore</li>
                    <li>• <strong>Local focus:</strong> "Najbolji web dizajner u Novom Sadu"</li>
                    <li>• <strong>Step-by-step guides:</strong> "Kako da izaberem web dizajnera"</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Lead Generation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Blog kao Lead Generation Mašina</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Funnel Strategija</h3>
                <p className="mb-4">
                  Blog nije samo o traffic-u - cilj je da konvertujete čitaoce u klijente. Ovo se postiže kroz
                  strategično planiran sadržaj koji vodi ljude kroz customer journey.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Top of Funnel - Awareness</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Content type:</strong> Edukativni članci, how-to vodiči, industry insights</p>
                      <p><strong>Primeri:</strong> "5 trendova u web dizajnu 2024", "Kako da povećate prodaju online"</p>
                      <p><strong>Cilj:</strong> Privući što više relevatnog traffic-a i etablirati expertise</p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-600">Middle of Funnel - Consideration</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Content type:</strong> Comparison articles, case studies, detailed guides</p>
                      <p><strong>Primeri:</strong> "DIY vs Professional web dizajn", "Šta košta kvalitetan sajt"</p>
                      <p><strong>Cilj:</strong> Edukovati ljude o opcijama i pozicionirati se kao najbolji izbor</p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-purple-600">Bottom of Funnel - Decision</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Content type:</strong> Service overviews, testimonials, process explanations</p>
                      <p><strong>Primeri:</strong> "Naš proces izrade sajta", "Šta klijenti kažu o nama"</p>
                      <p><strong>Cilj:</strong> Konvertovati zainteresovane ljude u kontakt ili prodaju</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Lead Magnets i Content Upgrades</h3>
                <p className="mb-4">
                  Najvrednije informacije držite iza email gate-a. Ovo vam omogućava da sakupite kontakte
                  zainteresovanih ljudi i nastavite komunikaciju kroz email marketing.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Efikasni Lead Magnets:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Checkliste:</strong> "Web sajt SEO checklist"</li>
                      <li>• <strong>PDF vodići:</strong> "Kompletni vodič za online marketing"</li>
                      <li>• <strong>Templates:</strong> "Email marketing templates za male biznise"</li>
                      <li>• <strong>Kalkulatori:</strong> "Kalkultor cene web sajta"</li>
                      <li>• <strong>Webinari:</strong> "Kako napraviti sajt za 30 minuta"</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Positioning Lead Magnets:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Na kraju relevantnih blog postova</li>
                      <li>• Kao content upgrade za specifične članke</li>
                      <li>• U sidebar-u i footer-u sajta</li>
                      <li>• Popup nakon 60 sekundi na stranici</li>
                      <li>• Exit intent popup kada korisnik hoće da ode</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">💡 Pro tip za lead generation:</h4>
                  <p className="text-sm">
                    Najbolji lead magnets pružaju <strong>immediate value</strong> i rešavaju <strong>specific problem</strong>.
                    Umesto "Preuzmite naš newsletter", ponudite "Preuzmite checklistu za 15-minutnu SEO analizu vašeg sajta".
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Authority Building */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Izgradnja Authority i Thought Leadership</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Postajanje Go-To Stručnjaka u Vašoj Oblasti</h3>
                <p className="mb-4">
                  Kada ljudi imaju problem u vašoj oblasti, da li prvo pomisle na vas? Blog omogućava da se pozicionirate
                  kao prvi izbor kroz konzistentno deljenje expertize i rešavanje problema.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Elementi Thought Leadership-a:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Original insights:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Uniquely perspektiva na industry trends</li>
                          <li>Prediction za buduće razvoje</li>
                          <li>Analysis trenutnih dešavanja</li>
                          <li>Personal experience i lekcije</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Consistent value delivery:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>Redovna publikacija kvalitetnog sadržaja</li>
                          <li>Odgovaranje na pitanja u komentarima</li>
                          <li>Engagement na društvenim mrežama</li>
                          <li>Guest posting na drugim blog-ovima</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Authority Building Timeline:</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Mesec 1-3:</strong> Establish publishing routine, cover basics vašeg polja</p>
                      <p><strong>Mesec 4-6:</strong> Start sharing original insights, industry commentary</p>
                      <p><strong>Mesec 7-12:</strong> Guest posting, speaking opportunities, media mentions</p>
                      <p><strong>12+ meseci:</strong> Recognized expert, ljudi vas kontaktiraju za mišljenje</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Social Proof i Credibility Markers</h3>
                <p className="mb-4">
                  Blog omogućava da showcasе svoju expertizu na način koji direktno gradi povjerenje kod potencijalnih klijenata.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Case Studies</h4>
                    <p className="text-sm text-muted-foreground">
                      Detaljni pregledi projekata sa before/after rezultatima. Pokazujte konkretne rezultate
                      koje ste postigli za klijente.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Process Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      Objasnite kako radite, koje alate koristite, koji je vaš approach. Transparentnost gradi poverenje.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Delite awards, certifikate, media mentions. Ako vas drugi priznaju kao stručnjaka,
                      to povećava kredibilitet.
                    </p>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span>Praktična Content Strategija za Vaš Biznis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Ideas Generator</h3>
                <p className="mb-4">
                  Najveći izazov za blog je stalno pronalaženje novih tema. Evo sistemskog pristupa
                  za generisanje ideja koje će rezonovati sa vašom publikom.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Customer Journey Mapping:</h4>
                    <div className="text-sm space-y-2">
                      <p>Napravite listu svih pitanja koja klijenti pitaju tokom customer journey-ja:</p>
                      <div className="grid md:grid-cols-3 gap-4 mt-3">
                        <div>
                          <p><strong>Pre kupovine:</strong></p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>"Da li uopšte trebam...?"</li>
                            <li>"Koliko košta...?"</li>
                            <li>"Kako da odaberem...?"</li>
                            <li>"Šta da izbegavam...?"</li>
                          </ul>
                        </div>
                        <div>
                          <p><strong>Tokom procesa:</strong></p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>"Kako funkcioniše...?"</li>
                            <li>"Što da očekujem...?"</li>
                            <li>"Koliko dugo traje...?"</li>
                            <li>"Šta da pripremim...?"</li>
                          </ul>
                        </div>
                        <div>
                          <p><strong>Posle kupovine:</strong></p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>"Kako da održavam...?"</li>
                            <li>"Kada da obnovim...?"</li>
                            <li>"Kako da poboljšam...?"</li>
                            <li>"Šta da uradim ako...?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Competitor Content Gap Analysis:</h4>
                    <div className="text-sm space-y-2">
                      <p>Analizirajte šta vaši konkurenti nisu pokrili:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Istražite top 10 konkurenata i njihove blog-ove</li>
                        <li>Napravite listu tema koje oni pokrivaju</li>
                        <li>Identifikujte gaps - teme koje niko nije pokovao</li>
                        <li>Napravite bolje verzije postojećih članaka</li>
                        <li>Dodajte lokalni aspekt ako konkurenti nemaju</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Editorial Calendar i Publishing Schedule</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Monthly Content Mix:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>40% How-to guides</strong> - edukativni sadržaj</li>
                      <li>• <strong>20% Industry news</strong> - commentary na trends</li>
                      <li>• <strong>20% Case studies</strong> - showcasing rezultata</li>
                      <li>• <strong>10% Behind scenes</strong> - company culture</li>
                      <li>• <strong>10% Promotional</strong> - services i offers</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Publishing Schedule:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Mali biznis:</strong> 1-2 posta mesečno</li>
                      <li>• <strong>Growing business:</strong> 1 post nedeljno</li>
                      <li>• <strong>Established company:</strong> 2-3 posta nedeljno</li>
                      <li>• <strong>Best posting days:</strong> Utorak-Četvrtak</li>
                      <li>• <strong>Optimal time:</strong> 9-11h jutro</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Blog Content Calendar Template:</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>Week 1:</strong> How-to guide (targeting top-funnel keywords)</p>
                    <p><strong>Week 2:</strong> Industry insight ili trend analysis</p>
                    <p><strong>Week 3:</strong> Case study ili customer success story</p>
                    <p><strong>Week 4:</strong> FAQ post ili addressing common objections</p>
                    <p className="italic mt-3">Repeat svaki mesec, prilagođavajući teme na seasonality i business needs.</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Measurement and ROI */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Merenje Uspea i ROI Blog Marketinga</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Performance Indicators (KPIs)</h3>
                <p className="mb-4">
                  Blog success se ne meri samo brojem posetilaca. Evo metrika koje zaista pokazuju
                  da li vaš blog doprinosi rastu biznisa.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Traffic Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Organic search traffic</strong></li>
                      <li>• <strong>Direct traffic growth</strong></li>
                      <li>• <strong>Referral traffic from blog</strong></li>
                      <li>• <strong>Pages per session</strong></li>
                      <li>• <strong>Time on page</strong></li>
                      <li>• <strong>Bounce rate</strong></li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Engagement Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Comments per post</strong></li>
                      <li>• <strong>Social media shares</strong></li>
                      <li>• <strong>Email newsletter signups</strong></li>
                      <li>• <strong>Content downloads</strong></li>
                      <li>• <strong>Return visitor percentage</strong></li>
                      <li>• <strong>Video completion rates</strong></li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Business Metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Leads from blog traffic</strong></li>
                      <li>• <strong>Contact form submissions</strong></li>
                      <li>• <strong>Phone calls tracking</strong></li>
                      <li>• <strong>Sales attributed to blog</strong></li>
                      <li>• <strong>Customer acquisition cost</strong></li>
                      <li>• <strong>Customer lifetime value</strong></li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ROI Calculation for Blog Marketing</h3>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Blog ROI Formula:</h4>
                  <div className="bg-gray-100 p-4 rounded text-center mb-4">
                    <p className="text-lg font-mono">
                      ROI = (Revenue from Blog - Blog Costs) / Blog Costs × 100
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Blog Costs include:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Content creation time (your salary cost)</li>
                        <li>Freelance writers (if outsourced)</li>
                        <li>Design i technical costs</li>
                        <li>Tools i software subscriptions</li>
                        <li>Promotion costs (social media ads)</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Revenue Attribution:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Direct sales from blog traffic</li>
                        <li>Leads generated through content</li>
                        <li>Brand awareness lift (harder to measure)</li>
                        <li>Customer retention improvement</li>
                        <li>Upsell opportunities</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Real Example - Web Design Agency:</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>Monthly blog costs:</strong> 20 sati × 2000 RSD/h + 5000 RSD tools = 45.000 RSD</p>
                    <p><strong>Monthly revenue from blog leads:</strong> 2 nova klijenta × 80.000 RSD = 160.000 RSD</p>
                    <p><strong>Monthly ROI:</strong> (160.000 - 45.000) / 45.000 × 100 = <span className="font-bold text-green-600">255% ROI</span></p>
                    <p className="italic">Plus long-term SEO benefits, brand building, i authority positioning!</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Long-term vs Short-term Benefits</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-600">Short-term Benefits (1-6 meseci):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Increased website traffic</li>
                      <li>• Better search engine indexing</li>
                      <li>• Social media content source</li>
                      <li>• Email marketing content</li>
                      <li>• Immediate lead generation</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-purple-600">Long-term Benefits (6+ meseci):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Authority i thought leadership</li>
                      <li>• Compound SEO benefits</li>
                      <li>• Brand recognition i recall</li>
                      <li>• Customer education i trust</li>
                      <li>• Passive lead generation</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Getting Started */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-primary" />
                <span>Kako da Pokrenete Blog za Vaš Biznis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">30-Day Blog Launch Plan</h3>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Week 1: Planning</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Define target audience</li>
                      <li>• Research competitor blogs</li>
                      <li>• Choose blog platform</li>
                      <li>• Set up basic structure</li>
                      <li>• Create content calendar</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Week 2: Content Creation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Write first 3 blog posts</li>
                      <li>• Create lead magnets</li>
                      <li>• Design blog graphics</li>
                      <li>• Set up email capture</li>
                      <li>• Optimize for SEO</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Week 3: Technical Setup</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Install analytics</li>
                      <li>• Set up social sharing</li>
                      <li>• Create comment system</li>
                      <li>• Optimize loading speed</li>
                      <li>• Mobile responsiveness</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Week 4: Launch & Promote</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Publish first posts</li>
                      <li>• Share on social media</li>
                      <li>• Email existing customers</li>
                      <li>• Reach out to networks</li>
                      <li>• Plan ongoing strategy</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Requirements</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Essential Features:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>SEO optimization:</strong> Meta tags, sitemaps, URL structure</li>
                      <li>• <strong>Mobile responsive:</strong> Works on all devices</li>
                      <li>• <strong>Fast loading:</strong> Under 3 seconds load time</li>
                      <li>• <strong>Social sharing:</strong> Easy sharing buttons</li>
                      <li>• <strong>Analytics integration:</strong> Google Analytics setup</li>
                      <li>• <strong>Email capture:</strong> Newsletter signup forms</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Recommended Tools:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Platform:</strong> WordPress ili custom React/Next.js</li>
                      <li>• <strong>Email:</strong> MailChimp ili ConvertKit</li>
                      <li>• <strong>Analytics:</strong> Google Analytics + Search Console</li>
                      <li>• <strong>SEO:</strong> Yoast ili RankMath</li>
                      <li>• <strong>Design:</strong> Canva ili Adobe Creative Suite</li>
                      <li>• <strong>Scheduling:</strong> Buffer ili Hootsuite</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Common Mistakes to Avoid</h3>

                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-700">❌ Blogging Without Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Pisanje bez plana o tome što želite da postignete. Definirajte ciljeve pre nego što krenete.
                    </p>
                  </Card>
                  <Card className="p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-700">❌ Inconsistent Publishing</h4>
                    <p className="text-sm text-muted-foreground">
                      Bolje je objavljivati jednom mesečno konzistentno nego 5 postova u jednom mesecu pa ništa 3 meseca.
                    </p>
                  </Card>
                  <Card className="p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-700">❌ Only Promotional Content</h4>
                    <p className="text-sm text-muted-foreground">
                      90% sadržaja treba da bude educational ili entertaining, samo 10% direktno promotional.
                    </p>
                  </Card>
                  <Card className="p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-700">❌ Ignoring SEO Basics</h4>
                    <p className="text-sm text-muted-foreground">
                      Ne optimizovati za ključne reči, nema meta descriptions, loša URL struktura - osnovne SEO greške.
                    </p>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Spremni da Pokrenete Blog Koji Privlači Klijente?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Blog nije trošak - to je investicija koja se vraća kroz godine. Svaki kvalitetan članak
                radi za vas 24/7, privlači klijente i gradi autoritet u vašoj oblasti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/kontakt">Konsultacija za blog strategiju</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/blog">Čitajte naš blog</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Section */}
          <Quiz
            title="Test Vašeg Znanja: Blog Marketing"
            description="Proverite koliko ste naučili o korišćenju blog-a za privlačenje klijenata"
            questions={quizQuestions}
          />

        </div>
      </main>
    </div>
  );
};

export default BlogArticle10;