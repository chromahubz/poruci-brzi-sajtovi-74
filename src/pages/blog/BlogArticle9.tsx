import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, DollarSign, Target, BarChart3, Lightbulb, CheckCircle, TrendingUp, Mail, MessageCircle } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle9 = () => {
  const quizQuestions = [
    {
      question: "Koji je najbolji početni budžet za online marketing malih biznisa u Srbiji?",
      options: [
        "500-1000 dinara mesečno",
        "3000-5000 dinara mesečno",
        "10000-15000 dinara mesečno",
        "20000+ dinara mesečno"
      ],
      correctAnswer: 1,
      explanation: "3000-5000 dinara mesečno je optimal za početak. Omogućava vam da testirate Facebook reklame, GMB oglašavanje i osnovni content marketing bez velikog rizika."
    },
    {
      question: "Koja je najjeftinija strategija online marketinga koja donosi najbolje rezultate?",
      options: [
        "Google Ads",
        "Facebook reklame",
        "Email marketing",
        "YouTube oglašavanje"
      ],
      correctAnswer: 2,
      explanation: "Email marketing ima ROI od 42:1 - za svaki dinar uložen, dobijate 42 dinara nazad. Troškovi su minimalni (100-500 dinara mesečno) a rezultati odlični."
    },
    {
      question: "Koliko treba da izdvojite za kreiranje kvalitetnog sadržaja mesečno?",
      options: [
        "0 dinara - sve mogu sam",
        "1000-2000 dinara",
        "3000-5000 dinara",
        "10000+ dinara"
      ],
      correctAnswer: 1,
      explanation: "1000-2000 dinara za alate kao što su Canva Pro, stock fotografije i osnovni software pokriva potrebe malih biznisa za kreiranje profesionalnog sadržaja."
    },
    {
      question: "Kada treba da počnete da reinvestirate u veći marketing budžet?",
      options: [
        "Odmah, što više to bolje",
        "Kada ostvarite 3:1 ROI na početni budžet",
        "Posle 6 meseci bez obzira na rezultate",
        "Kada konkurencija povećava budžet"
      ],
      correctAnswer: 1,
      explanation: "3:1 ROI znači da za svaki dinar uložen dobijate 3 dinara nazad. To je znak da vaša strategija funkcioniše i da je vreme za scaling up."
    },
    {
      question: "Šta je najvažnije za uspešan budget marketing?",
      options: [
        "Veliki broj kanala marketinga",
        "Najnoviji trendovi",
        "Merenje i optimizacija",
        "Skupi dizajn i brending"
      ],
      correctAnswer: 2,
      explanation: "Bez merenja ne znate šta funkcioniše. Budget marketing zahteva precizno praćenje svake potrošene pare i kontinuiranu optimizaciju na osnovu podataka."
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
                <span>14 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Budget Marketing</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Online Marketing sa Malim Budžetom - Maksimalni ROI za Mala Preduzeća
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da ostvarite velike rezultate u online marketingu sa ograničenim sredstvima. Praktični vodič sa konkretnim strategijama,
              alatima i budget planovima za uspešan digitalni marketing u Srbiji.
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
                <DollarSign className="w-6 h-6 text-primary" />
                <span>Zašto je Budget Marketing Zapravo Prednost?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Mali budžet vas primorava da budete kreativni, fokusirani i strateški. Dok velike kompanije „bacaju" novac na skupo oglašavanje
                u nadi da će nešto "uhvatiti", vi morate da budete precizni sa svakim dinarom. To vas čini boljim marketerom.
              </p>
              <p>
                U Srbiji, 78% malih preduzeća ima marketing budžet manji od 50.000 dinara mesečno, a mnogi počinju sa samo 5.000-10.000 dinara.
                Dobra vest je da sa odličnom strategijom, malim budžetom možete da ostvarite rezultate koje veće kompanije postižu sa 10x većim troškovima.
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Prednosti malg budget marketinga:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Fokus na ROI:</strong> Svaki dinar mora da se vrati</li>
                  <li>• <strong>Kreativnost:</strong> Primorani ste da pronađete neočekivana rešenja</li>
                  <li>• <strong>Personalizacija:</strong> Mali budžet = manje kupaca = bolje poznavanje svakog</li>
                  <li>• <strong>Agilnost:</strong> Brzo možete da menjate strategiju kad nešto ne radi</li>
                  <li>• <strong>Autentičnost:</strong> Manje "poliranja", više iskrenog komuniciranja</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Budget Planning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Planiranje Budžeta: Od 3.000 do 30.000 Dinara</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Starter Budžet: 3.000-5.000 RSD/mesec</h3>
                <p className="mb-4">
                  Ovaj budžet je dovoljan za početak i testiranje osnovnih strategija. Fokus je na besplatnim ili jeftinom kanalima
                  sa povremenim malim ulaganjima u plaćene reklame.
                </p>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Raspodela Starter budžeta:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Facebook/Instagram Ads: 2.000 RSD</strong></p>
                      <p>Test kampanje, mala publika, lokalni targeting</p>
                    </div>
                    <div>
                      <p><strong>Alati i Software: 1.000 RSD</strong></p>
                      <p>Canva Pro, scheduling tool, email servis</p>
                    </div>
                    <div>
                      <p><strong>Sadržaj (stock photos): 500 RSD</strong></p>
                      <p>Freepik ili Unsplash+ premium fotografije</p>
                    </div>
                    <div>
                      <p><strong>Rezerva za testiranje: 1.500 RSD</strong></p>
                      <p>Google Ads test, influencer saradnja</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Šta možete da očekujete sa 5.000 RSD:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 200-500 dosegnute osobe dnevno kroz social media</li>
                    <li>• 10-25 novih pratilaca na Instagram/Facebook nedeljno</li>
                    <li>• 20-50 klikova na sajt iz social media</li>
                    <li>• 2-5 novih lead-ova mesečno</li>
                    <li>• 1-3 novih kupca (zavisno od cene proizvoda)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Growth Budžet: 10.000-15.000 RSD/mesec</h3>
                <p className="mb-4">
                  Kada starter strategija počne da donosi rezultate, vreme je za scaling. Ovaj budžet omogućava reserjoznije oglašavanje
                  i investiranje u kvalitetnieji sadržaj.
                </p>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Raspodela Growth budžeta:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Facebook/Instagram Ads: 6.000 RSD</strong></p>
                      <p>Conversion campaigns, retargeting, lookalike audiences</p>
                    </div>
                    <div>
                      <p><strong>Google Ads: 4.000 RSD</strong></p>
                      <p>Search ads za high-intent ključne reči</p>
                    </div>
                    <div>
                      <p><strong>Content Creation: 2.000 RSD</strong></p>
                      <p>Freelance dizajner, bolje fotografije, video</p>
                    </div>
                    <div>
                      <p><strong>Email Marketing: 500 RSD</strong></p>
                      <p>Mailchimp/MailerLite premium, automation</p>
                    </div>
                    <div>
                      <p><strong>Analytics i Tools: 1.500 RSD</strong></p>
                      <p>Google Analytics premium, Hootsuite, tracking</p>
                    </div>
                    <div>
                      <p><strong>Influencer/partnerships: 1.000 RSD</strong></p>
                      <p>Mikro-influencer saradnje, cross-promotion</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Rezultati sa 15.000 RSD budžetom:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 1.000-2.500 dosegnute osobe dnevno</li>
                    <li>• 50-100 novih pratilaca nedeljno</li>
                    <li>• 100-300 website posetilaca iz reklama</li>
                    <li>• 10-25 novih lead-ova mesečno</li>
                    <li>• 5-15 novih kupaca mesečno</li>
                    <li>• ROI 3:1 do 5:1 moguć posle 3 meseca optimizacije</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Scale Budžet: 25.000-50.000 RSD/mesec</h3>
                <p className="mb-4">
                  Ovaj budžet omogućava ozbiljno skaliranje uspešnih strategija i testiranje novih kanala marketinga.
                  Rezervisan je za biznise koji su već dokazali da se marketing isplati.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Paid Advertising</h4>
                    <p className="text-sm mb-2">15.000-20.000 RSD</p>
                    <ul className="text-xs space-y-1">
                      <li>• Facebook/Instagram komplex funnels</li>
                      <li>• Google Ads wider campaigns</li>
                      <li>• YouTube pre-roll ads</li>
                      <li>• LinkedIn za B2B</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Content & Creative</h4>
                    <p className="text-sm mb-2">5.000-8.000 RSD</p>
                    <ul className="text-xs space-y-1">
                      <li>• Profesionalní fotografije</li>
                      <li>• Video produkcija</li>
                      <li>• Graficki dizajn</li>
                      <li>• Copywriting</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Tools & Analytics</h4>
                    <p className="text-sm mb-2">3.000-5.000 RSD</p>
                    <ul className="text-xs space-y-1">
                      <li>• Advanced analytics</li>
                      <li>• Marketing automation</li>
                      <li>• CRM integracije</li>
                      <li>• A/B testing tools</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Free Strategies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span>Besplatne Strategije koje Funkcionišu</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Marketing sa Nula Dinara</h3>
                <p className="mb-4">
                  Kvalitetan sadržaj je najjeftinији način da privučete i zadržite klijente. Jedini trošak je vaše vreme,
                  a rezultati mogu biti fenomenalni.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Blog/Video strategija:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Što pisati/snimati:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Odgovore na česta pitanja klijenata</li>
                          <li>Tutoriale i how-to vodičе</li>
                          <li>Case studies uspešnih projekata</li>
                          <li>Iza scene content</li>
                          <li>Industry news i trendove</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Gde deliti:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Vaš sajt/blog</li>
                          <li>YouTube kanal</li>
                          <li>LinkedIn članci</li>
                          <li>Facebook grupe</li>
                          <li>Instagram IGTV/Reels</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Pro tip za content marketing:</h4>
                    <p className="text-sm">
                      Napravite jedan dobar sadržaj i repurpose-ujte ga u 10 različitih formata:
                      blog post → video → podcast → Instagram post → LinkedIn clanak → Twitter thread → email newsletter → PDF vodič
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">SEO Optimizacija bez Troškova</h3>
                <p className="mb-4">
                  SEO je možda najjeftiniji marketing kanal dugoročno. Jedna dobro optimizovana strana može da vam donosi
                  klijente godinama bez dodatnih troškova.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">On-Page SEO (potpuno besplatno):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Optimizacija title tag-ova</li>
                      <li>• Meta descriptions za svaku stranu</li>
                      <li>• H1, H2, H3 struktura sadržaja</li>
                      <li>• Alt text za sve slike</li>
                      <li>• Internal linking strategija</li>
                      <li>• Schema markup (structured data)</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Local SEO (ključno za lokalne biznise):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Google My Business optimizacija</li>
                      <li>• NAP konzistentnost širom interneta</li>
                      <li>• Customer reviews strategija</li>
                      <li>• Lokalne ključne reči u content-u</li>
                      <li>• Citations u lokalnim direktorijumima</li>
                      <li>• Community involvement online</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">🎯 Quick wins za lokalni SEO:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Dodajte lokalne ključne reči u title sajta: "Pekara Marić - Beograd Dorćol"</li>
                    <li>• Napravite stranu "O nama" sa pričom i fotografijama tima</li>
                    <li>• Dodajte customer testimonials sa imenima i fotografijama</li>
                    <li>• Registrujte biznis u Žuto.rs, 011info.com i drugim direktorijumima</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Networking i Partnerstva</h3>
                <p className="mb-4">
                  Saradnja sa drugim biznsima često donosi bolje rezultate od plaćenih reklama - a potpuno je besplatna.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Tipovi korisnih partnerstava:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Cross-promotion:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Deljenje objava komplementarnih biznisa</li>
                          <li>Guest posting na tuđim blogovima</li>
                          <li>Zajedničke giveaway akcije</li>
                          <li>Referral programi</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Content collaboration:</strong></p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Zajedničke video sadržaje</li>
                          <li>Podcast guest appearances</li>
                          <li>Co-authored blog članci</li>
                          <li>Joint webinars ili events</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Primer uspešne saradnje:</h4>
                    <p className="text-sm italic">
                      Web dizajner i fotograf se dogovore: dizajner pravi sajt fotografu besplatno, fotograf slikata 5 projekata
                      dizajnera profesionalono. Svako dobije portfolio sadržaj + reference. Both win, zero troškova.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Paid Strategies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Budget-Friendly Plaćeni Marketing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Facebook/Instagram Ads sa Minimalним Budžetom</h3>
                <p className="mb-4">
                  Facebook reklame su idealne za male budžete jer možete da počnete sa 50 dinara dnevno (1.500 mesečno)
                  i da gledate rezultate u realnom vremenu.
                </p>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Mikro-budget strategija (50-100 RSD/dan):</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p><strong>Week 1-2: Testing</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>3-4 različita ad creative-a</li>
                        <li>Audience aged 25-55, 10km radius</li>
                        <li>Objective: Traffic ili Engagement</li>
                        <li>Budget: 50 RSD/dan, split između ad-ova</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Week 3-4: Optimization</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Zaustavite worst performing ads</li>
                        <li>Povećajte budžet za best performing</li>
                        <li>Test nove audiences na winner ad</li>
                        <li>Budget: 75-100 RSD/dan na winner</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Što radi za male budžete:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Lokalni targeting (5-15km radius)</li>
                      <li>• Uzast od interests targeting</li>
                      <li>• Single image/video ads</li>
                      <li>• Clear call-to-action</li>
                      <li>• Mobile-optimized content</li>
                      <li>• Autentične fotografije, ne stock</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-red-600">Što izbegavati sa malim budžetom:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Conversion campaigns (potreban je veći budžet)</li>
                      <li>• Video view campaigns</li>
                      <li>• Broad targeting (preskup)</li>
                      <li>• Carousel ads (complex za test)</li>
                      <li>• Multiple objectives istovremeno</li>
                      <li>• Boosting posts umesto Ads Manager</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Google Ads za Lokalne Biznise</h3>
                <p className="mb-4">
                  Google Ads mogu biti skupi, ali su eficasni ako se fokusirate na visoko-intent ključne reči sa lokalnim modifikatorima.
                </p>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Starter Google Ads strategija (100-200 RSD/dan):</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Kampanja tip:</strong> Search Network samo</p>
                      <p><strong>Location:</strong> 10-15km radius around biznisa</p>
                      <p><strong>Ključne reči:</strong> 5-10 high-intent + lokacija</p>
                      <p><strong>Match type:</strong> Exact match only</p>
                    </div>
                    <div>
                      <p><strong>Ad copy:</strong> Jasny value proposition</p>
                      <p><strong>Landing page:</strong> Relevant za ključne reči</p>
                      <p><strong>Extensions:</strong> Location, call, sitelinks</p>
                      <p><strong>Bidding:</strong> Manual CPC, conservative bids</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Primer budžeting za zubarsku ordinaciju:</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>Ključne reči:</strong> "zubar novi sad", "stomatolog novi sad", "izbeljivanje zuba novi sad"</p>
                    <p><strong>Daily budget:</strong> 150 RSD (~30 USD/mesečno za testiranje)</p>
                    <p><strong>Očekivani rezultati:</strong> 10-20 klikova mesečno, 1-3 telefona, 1 novi pacijent</p>
                    <p><strong>ROI:</strong> Jeden nova pacijent = 10.000+ RSD value → ROI 3:1+</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Marketing - Najbolji ROI</h3>
                <p className="mb-4">
                  Email marketing ima ROI od 42:1 i košta praktično ništa. Za male biznise, to je najisplativiji marketing kanal.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Setup troškovi (jednokratno):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>MailChimp/MailerLite:</strong> 0-500 RSD/mesec</li>
                      <li>• <strong>Canva Pro za templates:</strong> 1.000 RSD/mesec</li>
                      <li>• <strong>Landing page builder:</strong> 0-1.500 RSD/mesec</li>
                      <li>• <strong>Lead magnet (PDF vodič):</strong> Vaše vreme</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Monthly routine:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Weekly newsletter:</strong> 30min pisanja</li>
                      <li>• <strong>Promotional emails:</strong> 2-3 mesečno</li>
                      <li>• <strong>Automation setup:</strong> Početno 2-3 sata</li>
                      <li>• <strong>List building:</strong> Continuous effort</li>
                    </ul>
                  </Card>
                </div>

                <div className="space-y-4 mt-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Email marketing funnel za restoran:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Lead magnet:</strong> "Besplatne recepti naših najpopularnijih jela" PDF</p>
                      <p><strong>Welcome series:</strong> 3 email-a - intro, recept #1, special offer za prvi visit</p>
                      <p><strong>Weekly newsletter:</strong> Nova jela, events, behind-scenes</p>
                      <p><strong>Rezultat:</strong> 15-30% email subscribers postane customers</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Tools and Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Budget-friendly Alati i Resursi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Besplatni ili Jeftini Alati</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Design & Content</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p><strong>Canva (besplatno):</strong></p>
                        <p>Social media graphics, presentations</p>
                      </div>
                      <div>
                        <p><strong>Unsplash (besplatno):</strong></p>
                        <p>Stock fotografije profesionalnog kvaliteta</p>
                      </div>
                      <div>
                        <p><strong>GIMP (besplatno):</strong></p>
                        <p>Alternative za Photoshop</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Social Media</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p><strong>Later (5€/mesec):</strong></p>
                        <p>Schedule Instagram/Facebook posts</p>
                      </div>
                      <div>
                        <p><strong>Facebook Creator Studio (besplatno):</strong></p>
                        <p>Native scheduling za FB/IG</p>
                      </div>
                      <div>
                        <p><strong>Hashtag apps (besplatno):</strong></p>
                        <p>Research najboljih hashtag-ova</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Analytics & SEO</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p><strong>Google Analytics (besplatno):</strong></p>
                        <p>Website traffic analysis</p>
                      </div>
                      <div>
                        <p><strong>Google Search Console (besplatno):</strong></p>
                        <p>SEO performance tracking</p>
                      </div>
                      <div>
                        <p><strong>Ubersuggest (besplatno limit):</strong></p>
                        <p>Keyword research</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Optimalni Tech Stack za Mali Budžet</h3>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Complete marketing stack za manje od 3.000 RSD mesečno:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p><strong>Website & Email:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>WordPress + hosting: 1.500 RSD/mesec</li>
                        <li>MailChimp (do 2000 kontakata): besplatno</li>
                        <li>Google Workspace: 600 RSD/mesec</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Marketing tools:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Canva Pro: 1.000 RSD/mesec</li>
                        <li>Later scheduling: 400 RSD/mesec</li>
                        <li>Facebook Ads account: besplatno</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 font-medium">Total monthly cost: 3.500 RSD - kompletna marketing infrastruktura!</p>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">DIY vs Outsourcing - Kada Šta</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Radite sami (DIY):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Social media posting:</strong> 30min/dan</li>
                      <li>• <strong>Basic graphic design:</strong> Canva templates</li>
                      <li>• <strong>Email marketing:</strong> Dragndrop builders</li>
                      <li>• <strong>Content writing:</strong> Vaše ekspertise</li>
                      <li>• <strong>Customer service:</strong> Personal touch</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-600">Outsource-ujte:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Professional fotografije:</strong> 5.000 RSD/sesija</li>
                      <li>• <strong>Video production:</strong> 10.000 RSD/video</li>
                      <li>• <strong>Advanced PPC management:</strong> 8.000 RSD/mesec</li>
                      <li>• <strong>Website development:</strong> 50.000 RSD once</li>
                      <li>• <strong>SEO audit:</strong> 15.000 RSD once</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">💰 Rule of thumb za outsourcing:</h4>
                  <p className="text-sm">
                    Ako nešto košta more od 20% vašeg mesečnog marketing budžeta, verojatno treba da sacekate.
                    Primjer: budžet 10.000 RSD → maksimalno 2.000 RSD za pojedinačne services.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Measurement and ROI */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Merenje Rezultata i ROI Optimizacija</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Metrike za Male Biznise</h3>
                <p className="mb-4">
                  Sa malim budžetom, ne možete da pratite sve. Fokusirajte se na metrike koje direktno utiču na prihod.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Traffic metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Website visitors:</strong> Mesečni trend</li>
                      <li>• <strong>Traffic sources:</strong> Organic vs paid vs social</li>
                      <li>• <strong>Pages per session:</strong> Engagement quality</li>
                      <li>• <strong>Bounce rate:</strong> Content relevantnost</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Engagement metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Email open rate:</strong> Subject line quality</li>
                      <li>• <strong>Social media engagement:</strong> Content resonance</li>
                      <li>• <strong>Time on site:</strong> Content value</li>
                      <li>• <strong>Return visitors:</strong> Brand loyalty</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Conversion metrike</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Lead cost (CPL):</strong> Efikasnost kanala</li>
                      <li>• <strong>Customer acquisition cost:</strong> CAC</li>
                      <li>• <strong>Conversion rate:</strong> Website/campaign performance</li>
                      <li>• <strong>Customer lifetime value:</strong> LTV</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ROI Calculation za Male Budžete</h3>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Simple ROI formula:</h4>
                  <div className="bg-gray-100 p-4 rounded text-center">
                    <p className="text-lg font-mono">
                      ROI = (Prihod od Marketinga - Marketing Troškovi) / Marketing Troškovi × 100
                    </p>
                  </div>
                  <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Primer pozitivnog ROI:</strong></p>
                      <p>Marketing budet: 10.000 RSD</p>
                      <p>Nova customers revenue: 35.000 RSD</p>
                      <p>ROI = (35.000-10.000)/10.000 × 100 = 250%</p>
                    </div>
                    <div>
                      <p><strong>Minimalni acceptable ROI:</strong></p>
                      <p>100% = break-even</p>
                      <p>200% = dobra performance</p>
                      <p>300%+ = excellent, scale up!</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🎯 ROI benchmarks po industriji:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Local services (frizer, majstor):</strong> 400-600%</p>
                      <p><strong>Restaurants/food:</strong> 200-400%</p>
                      <p><strong>Retail/e-commerce:</strong> 300-500%</p>
                    </div>
                    <div>
                      <p><strong>Professional services:</strong> 500-800%</p>
                      <p><strong>Fitness/beauty:</strong> 300-500%</p>
                      <p><strong>Real estate:</strong> 200-1000%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tracking Setup za 0 Dinara</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Google Analytics 4 setup:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Essential events za tracking:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Contact form submissions</li>
                        <li>Phone number clicks</li>
                        <li>Email clicks</li>
                        <li>File downloads (PDF, brochures)</li>
                        <li>Video completion rates</li>
                      </ul>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Facebook Pixel setup:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Standard events to track:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Page views</li>
                        <li>Add to cart (e-commerce)</li>
                        <li>Initiate checkout</li>
                        <li>Lead/Contact submissions</li>
                        <li>Custom conversions</li>
                      </ul>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">UTM parameter tracking:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Campaign tagging strategy:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>utm_source: facebook, google, email</li>
                        <li>utm_medium: social, search, newsletter</li>
                        <li>utm_campaign: summer_sale, new_product</li>
                        <li>Google UTM Builder: free tool</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Scaling Up */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Kada i Kako da Skalitaje Budžet</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Znaci da je Vreme za Scaling</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Green lights za povećanje budžeta:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Consistent ROI 3:1+ preko 3 meseca</strong></li>
                      <li>• Marketing channels are profitable</li>
                      <li>• You understand što funkcioniše</li>
                      <li>• Have budget tracking processes</li>
                      <li>• Team može handle više lead-ova</li>
                      <li>• Cash flow allows investment</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-red-600">Red flags - DON'T scale yet:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Inconsistent ili negative ROI</li>
                      <li>• Ne znate koje campaigns donose customers</li>
                      <li>• Operational capacity is maxed out</li>
                      <li>• Cash flow issues</li>
                      <li>• Scaling iz desperacije, ne iz data</li>
                      <li>• Targeting issues still present</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Scaling Strategija</h3>

                <Card className="p-4 mb-4">
                  <h4 className="font-semibold mb-3">Gradual scaling approach:</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p><strong>Step 1: Double najbolji performing campaigns</strong></p>
                      <p>Ako Facebook reklama donose ROI 4:1 sa 3.000 RSD, testirajte sa 6.000 RSD</p>
                    </div>
                    <div>
                      <p><strong>Step 2: Expand audiences</strong></p>
                      <p>Lookalike audiences, similar demographics, broader interests</p>
                    </div>
                    <div>
                      <p><strong>Step 3: Add new channels</strong></p>
                      <p>Ako social media radi, dodajte Google Ads ili email marketing</p>
                    </div>
                    <div>
                      <p><strong>Step 4: Premium content creation</strong></p>
                      <p>Professional photography, video production, better copy</p>
                    </div>
                  </div>
                </Card>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">⚠️ Common scaling mistakes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Povećavanje budžeta za 300%+ overnight</li>
                    <li>• Adding too many new channels odjednom</li>
                    <li>• Assuming što radi sa malim budžetom će raditi sa velikim</li>
                    <li>• Zaboravljanje da prate performance tokom scaling</li>
                    <li>• Ne pripremajanje operacional capacity za više customers</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Long-term Budget Planning</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">12-mesečni marketing budget plan:</h4>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p><strong>Q1 (Jan-Mar):</strong></p>
                        <p>Testiranje i setup</p>
                        <p>Budget: 5.000-8.000 RSD/mesec</p>
                        <p>Focus: Pronalažene шта radi</p>
                      </div>
                      <div>
                        <p><strong>Q2 (Apr-Jun):</strong></p>
                        <p>Optimizacija</p>
                        <p>Budget: 8.000-12.000 RSD/mesec</p>
                        <p>Focus: Poboljšanje performance</p>
                      </div>
                      <div>
                        <p><strong>Q3 (Jul-Sep):</strong></p>
                        <p>Growth</p>
                        <p>Budget: 12.000-20.000 RSD/mesec</p>
                        <p>Focus: Scaling успешnih campaigns</p>
                      </div>
                      <div>
                        <p><strong>Q4 (Oct-Dec):</strong></p>
                        <p>Profitabilnost</p>
                        <p>Budget: 15.000-30.000 RSD/mesec</p>
                        <p>Focus: Maximum ROI</p>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Pro tip za budžet planning:</h4>
                    <p className="text-sm">
                      Uvek držite 20% budžeta za testiranje novih stvari. Даже када imate uspešne campaigns,
                      industrija se menja i treba to испітати нове приступе before your current strategy stops working.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Case Studies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Case Study: Od 5.000 do 50.000 RSD/mesec</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Lokalna Frizerka - 12 Mesečna Transformacija</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Početna situacija:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Biznis:</strong> Frizerski salon u Novom Sadu, 2 zaposlene</p>
                      <p><strong>Problem:</strong> Zavisi od walk-in klijenata, nepredvidljiv prihod</p>
                      <p><strong>Budget:</strong> 5.000 RSD/mesec za marketing</p>
                      <p><strong>Goal:</strong> Povećanje broja stalnih klijenata za 50%</p>
                    </div>
                  </Card>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Mesec 1-3: Foundation</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>Budget:</strong> 5.000 RSD</p>
                        <p><strong>Actions:</strong></p>
                        <ul className="list-disc list-inside ml-4">
                          <li>Instagram business profil</li>
                          <li>Google My Business setup</li>
                          <li>Basic Facebook reklame</li>
                          <li>Customer referral program</li>
                        </ul>
                        <p><strong>Results:</strong> +25 novih klijenata</p>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Mesec 4-6: Growth</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>Budget:</strong> 12.000 RSD</p>
                        <p><strong>Actions:</strong></p>
                        <ul className="list-disc list-inside ml-4">
                          <li>Professional fotografije</li>
                          <li>Conversion campaigns</li>
                          <li>Email marketing automation</li>
                          <li>Google Ads testing</li>
                        </ul>
                        <p><strong>Results:</strong> +45 novih klijenata</p>
                      </div>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Mesec 7-12: Scale</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>Budget:</strong> 25.000 RSD</p>
                        <p><strong>Actions:</strong></p>
                        <ul className="list-disc list-inside ml-4">
                          <li>Video content production</li>
                          <li>Influencer partnerships</li>
                          <li>Loyalty program</li>
                          <li>Cross-sell services</li>
                        </ul>
                        <p><strong>Results:</strong> +80 нових klijenata</p>
                      </div>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Final results posle 12 meseci:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>New customers:</strong> +150 unique visitors</p>
                        <p><strong>Revenue increase:</strong> +180% year-over-year</p>
                        <p><strong>Average ROI:</strong> 4.2:1 across all channels</p>
                      </div>
                      <div>
                        <p><strong>Repeat customer rate:</strong> 65% (original 30%)</p>
                        <p><strong>Average transaction:</strong> +25% due to upselling</p>
                        <p><strong>Monthly marketing spend:</strong> 25.000 RSD (5x initial)</p>
                      </div>
                    </div>
                    <p className="mt-3 font-medium">Marketing went from cost to profit center - now hiring third employee!</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Lekcije iz Case Study</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-600">Што је funkcionalo odlično:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Local targeting:</strong> 5km radius perfect for hair salon</li>
                      <li>• <strong>Before/after photos:</strong> Visual proof works best</li>
                      <li>• <strong>Customer testimonials:</strong> Word-of-mouth amplified online</li>
                      <li>• <strong>Booking integration:</strong> Reduced friction for appointments</li>
                      <li>• <strong>Gradual budget increase:</strong> Scaled only when ROI proven</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-orange-600">Challenges i lessons:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Seasonal variations:</strong> December slow, March busy</li>
                      <li>• <strong>Capacity management:</strong> Too many bookings = poor service</li>
                      <li>• <strong>Competition reaction:</strong> Others started copying strategy</li>
                      <li>• <strong>Staff training:</strong> Had to invest in customer service skills</li>
                      <li>• <strong>Premium pricing:</strong> Could charge more due to demand</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Vaš 30-Dana Budget Marketing Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div className="grid md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Week 1: Setup</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Define target customer</li>
                    <li>• Set up Google Analytics</li>
                    <li>• Create social media accounts</li>
                    <li>• Install Facebook Pixel</li>
                    <li>• Design lead magnet</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Week 2: Content</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Create 20 social media posts</li>
                    <li>• Write first blog article</li>
                    <li>• Design email templates</li>
                    <li>• Take product photographs</li>
                    <li>• Plan content calendar</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Week 3: Launch</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Start social media posting</li>
                    <li>• Launch first FB ad campaign</li>
                    <li>• Begin email collection</li>
                    <li>• Optimize Google My Business</li>
                    <li>• Start networking locally</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Week 4: Optimize</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Analyze first results</li>
                    <li>• Pause underperforming ads</li>
                    <li>• Double down on winners</li>
                    <li>• Collect customer feedback</li>
                    <li>• Plan month 2 budget</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h4 className="font-semibold mb-3">🚀 Success Checklist za Prvi Mesec:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Measurements:</strong></p>
                    <ul className="space-y-1">
                      <li>□ Website traffic +50%</li>
                      <li>□ Social media followers +25</li>
                      <li>□ Email subscribers +10</li>
                      <li>□ Lead generation started</li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Systems:</strong></p>
                    <ul className="space-y-1">
                      <li>□ Analytics tracking works</li>
                      <li>□ Social posting scheduled</li>
                      <li>□ Email automation active</li>
                      <li>□ Customer database started</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Počnite sa Budget Marketingom Danas!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Ne treba vam veliki budžet da ostvarite velike rezultate. Potrebna vam je prava strategija,
                disciplina i fokus na ROI. Krenite sa 3.000 RSD i gradite svoj marketing empire!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/kontakt">Besplatna konsultacija</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/blog">Još marketing saveta</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Section */}
          <Quiz
            title="Test Vašeg Znanja: Budget Online Marketing"
            description="Proverite koliko ste naučili o uspešnom marketingu sa malim budžetom"
            questions={quizQuestions}
          />

        </div>
      </main>
    </div>
  );
};

export default BlogArticle9;