import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, TrendingUp, Users, Globe, CheckCircle, Star, Clock, Eye, BarChart, Mail, Send, Zap, Award, Calendar, User, ArrowLeft, MessageSquare, Heart, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle12 = () => {
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
              <Badge variant="secondary">Email Marketing</Badge>
              <span className="text-sm text-muted-foreground">15 min čitanja</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Email Marketing za Male Biznise - Kako Izgraditi Lojalne Klijente i Povećati Prodaju
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Otkrijte kako email marketing može da donese ROI od 4200% za vaš mali biznis. Praktičan vodič kroz strategije koje koriste najuspešnije kompanije.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>30. januar 2025</span>
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
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Email marketing strategija"
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

              {/* Introduction */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  "Email is dead" - čujemo ovo već godinama. Ipak, email marketing i dalje generiše jedan od najvećih ROI od svih marketing kanala - prosečno 42 dolara za svaki uloženi dolar. Za male biznise u Srbiji, to može biti razlika između preživljavanja i napredovanja.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Problem je što većina malih preduzetnika tretira email marketing kao "nice to have" umesto kao ključnu business strategiju. Šalju generičke biltene bez jasne strategije, pa se pitaju zašto nema rezultata.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  U ovom detaljnom vodiču ćemo pokazati kako da kreirate email marketing strategiju koja ne samo što generiše prodaju, već gradi dugoročne odnose sa klijentima koji se vraćaju godinama. Od automatizovanih sekvenci do personalizovanih kampanja - naučićete sve što koriste najuspešniji biznisi.
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Zašto je email marketing kritičan za male biznise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>ROI od 4200% - najveći od svih marketing kanala</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Vlasništvo nad publikom - nema algoritama kao na društvenim mrežama</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Personalizovane poruke koji povećavaju lojalnost klijenata</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Automatizacija koja radi 24/7 bez vašeg prisustva</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Direktna komunikacija sa najzainteresovanijim klijentima</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Merljivi rezultati sa preciznim analytics</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Email Marketing Foundations */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Osnove email marketinga koje morate znati</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Prije nego što počnete sa kampainama, važno je razumeti fundamentalne principe email marketinga. Ovo nije samo slanje mejlova - to je građenje odnosa kroz vredan sadržaj i strateško nurturing.
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        1. Izgradnja email liste od nule
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Kvalitetna email lista je temelj uspešnog email marketinga. Bolje je imati 100 zainteresovanih pretplatnika nego 10.000 koji ne otvaraju mejlove.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Efikasni lead magneti:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Besplatni PDF vodiči i checkliste</li>
                            <li>• Ekskluzivni popusti za nove pretplatnike</li>
                            <li>• Besplatni webinari i online kursevi</li>
                            <li>• Templates i alati za vašu industriju</li>
                            <li>• Industry izvešatji i istraživanja</li>
                            <li>• Besplatne konsultacije ili auditi</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Mesta za prikupljanje email adresa:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Pop-up forme na web sajtu (exit intent)</li>
                            <li>• Inline forme u blog postovima</li>
                            <li>• Dedicated landing page za lead magnet</li>
                            <li>• Footer i sidebar signup forme</li>
                            <li>• Društvene mreže i bio linkovi</li>
                            <li>• Offline eventi i networking</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                        2. Kreiranje sadržaja koji generiše rezultate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Uspešan email nije samo o tome šta govorite, već kako to govorite. Svaki mejl mora da pruži vrednost i motiviše čitaoca na akciju.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Formula za efikasne subject lines:</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="font-medium text-center mb-3">[Urgency/Curiosity] + [Benefit] + [Personalization]</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="font-medium text-green-600 mb-1">Dobri primeri:</p>
                                <ul className="space-y-1">
                                  <li>• "Marko, 48h do isteka 30% popusta"</li>
                                  <li>• "5 grešaka koje koštaju vaš biznis novac"</li>
                                  <li>• "Vaša konkretna izmena je završena"</li>
                                  <li>• "Ana, ovo će vam uštediti 10 sati nedeljno"</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium text-red-600 mb-1">Loši primeri:</p>
                                <ul className="space-y-1">
                                  <li>• "Newsletter - Januar 2025"</li>
                                  <li>• "Naše nove usluge"</li>
                                  <li>• "Mesečni bilten"</li>
                                  <li>• "Važne informacije"</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Struktura email sadržaja:</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">1. Hook (prvih 2-3 rečenice)</h5>
                              <p className="text-sm text-muted-foreground">Uhvatite pažnju odmah - postavite pitanje, podelite zanimljivu statistiku, ili spomenite problem koji čitalac prepoznaje.</p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">2. Value delivery (glavni deo)</h5>
                              <p className="text-sm text-muted-foreground">Pružite obećanu vrednost - savete, informacije, rešenja. Budite konkretni i praktični.</p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">3. Clear call-to-action</h5>
                              <p className="text-sm text-muted-foreground">Jedan jasn poziv na akciju - šta tačno želite da čitalac uradi nakon čitanja.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-purple-600" />
                        3. Segmentacija i personalizacija
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Slanje istog mejla svima je najbrži način da završite u spam folderu. Personalizacija povećava otvaranje za 26% i klikove za 14%.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h5 className="font-semibold mb-2">Demografska segmentacija</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Lokacija (Beograd vs Novi Sad)</li>
                            <li>• Starost i pol</li>
                            <li>• Pozicija u kompaniji</li>
                            <li>• Veličina biznisa</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h5 className="font-semibold mb-2">Bihevioralna segmentacija</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Kupovna istorija</li>
                            <li>• Engagement sa mejlovima</li>
                            <li>• Aktivnost na sajtu</li>
                            <li>• Faza u customer journey</li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h5 className="font-semibold mb-2">Psihografska segmentacija</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Interesovanja i hobiji</li>
                            <li>• Vrednosti i motivacije</li>
                            <li>• Pain points i izazovi</li>
                            <li>• Način donošenja odluka</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Email Automation Strategies */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Automatizovane email sekvence koje rade dok spavate</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Email automatizacija je ono što razlikuje profesionalce od početnika. Jednom kada postavite dobre sekvence, one rade 24/7 bez vašeg angažmana i generiše konstantan prihod.
                </p>

                <div className="space-y-6">
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-xl">Welcome Series - Prva impresija je ključna</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Welcome series je sekvenca mejlova koja se šalje novim pretplatnicima. Ovo je vaša prilika da napravite odličan prvi utisak i postavite osnovu za dugoročan odnos.
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold">7-email welcome sekvenca za male biznise:</h4>

                        <div className="space-y-3">
                          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                            <h5 className="font-semibold text-green-700 mb-2">Email 1: Instant poslanje (0 min)</h5>
                            <p className="text-sm text-green-800 mb-2"><strong>Subject:</strong> "Marko, evo vašeg besplatnog PDF-a + bonus"</p>
                            <p className="text-sm">Isporučite obećani lead magnet + kratko predstavite sebe/kompaniju + postavite očekivanja šta sledi.</p>
                          </div>

                          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                            <h5 className="font-semibold text-blue-700 mb-2">Email 2: Dan 2</h5>
                            <p className="text-sm text-blue-800 mb-2"><strong>Subject:</strong> "Najveća greška koju prave 90% naših klijenata"</p>
                            <p className="text-sm">Edukovani sadržaj koji pozicionira vašu ekspertizu + social proof (testimonial ili case study).</p>
                          </div>

                          <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                            <h5 className="font-semibold text-purple-700 mb-2">Email 3: Dan 4</h5>
                            <p className="text-sm text-purple-800 mb-2"><strong>Subject:</strong> "Moja priča i zašto radim ono što radim"</p>
                            <p className="text-sm">Personal story - kako ste došli do ovog biznisa, vaši izazovi, misija kompanije.</p>
                          </div>

                          <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                            <h5 className="font-semibold text-orange-700 mb-2">Email 4: Dan 7</h5>
                            <p className="text-sm text-orange-800 mb-2"><strong>Subject:</strong> "Top 5 alata koje koristim svaki dan"</p>
                            <p className="text-sm">Praktično vredne informacije - tools, resources, tips koji ih čine boljim u onome što rade.</p>
                          </div>

                          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                            <h5 className="font-semibold text-red-700 mb-2">Email 5: Dan 10</h5>
                            <p className="text-sm text-red-800 mb-2"><strong>Subject:</strong> "Kako smo pomogli Ani da uveća promet za 300%"</p>
                            <p className="text-sm">Detailed case study sa konkretnim rezultatima + meki uvod u vaše usluge.</p>
                          </div>

                          <div className="border border-indigo-200 rounded-lg p-4 bg-indigo-50">
                            <h5 className="font-semibold text-indigo-700 mb-2">Email 6: Dan 14</h5>
                            <p className="text-sm text-indigo-800 mb-2"><strong>Subject:</strong> "FAQ: Najčešća pitanja koja dobijam"</p>
                            <p className="text-sm">Odgovorite na objections i pitanja + predstavite svoje usluge/proizvode.</p>
                          </div>

                          <div className="border border-teal-200 rounded-lg p-4 bg-teal-50">
                            <h5 className="font-semibold text-teal-700 mb-2">Email 7: Dan 21</h5>
                            <p className="text-sm text-teal-800 mb-2"><strong>Subject:</strong> "Spremni za sledeći korak? Evo kako možemo da radimo zajedno"</p>
                            <p className="text-sm">Soft sales email - predstavite svoje usluge sa clear call-to-action za konsultaciju ili kupovinu.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-xl">Napuštena korpa (Abandoned Cart) sekvenca</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        70% online kupaca napusti korpu bez kupovine. Abandoned cart email sekvence mogu da reture 15-25% tih kupaca i generiše značajan dodatni prihod.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <h5 className="font-semibold mb-2">Email 1: 1 sat</h5>
                          <p className="text-sm text-muted-foreground mb-2"><strong>"Zaboravili ste nešto u korpi"</strong></p>
                          <p className="text-xs">Gentle reminder sa slikama proizvoda + social proof</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h5 className="font-semibold mb-2">Email 2: 1 dan</h5>
                          <p className="text-sm text-muted-foreground mb-2"><strong>"Još uvek razmišljate?"</strong></p>
                          <p className="text-xs">Dodatkve informacije + urgency + customer reviews</p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h5 className="font-semibold mb-2">Email 3: 3 dana</h5>
                          <p className="text-sm text-muted-foreground mb-2"><strong>"Poslednja šansa za 10% popust"</strong></p>
                          <p className="text-xs">Discount kod + scarcity + FOMO elements</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-xl">Post-Purchase sekvenca za lojalnost klijenata</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Kupovina nije kraj - to je početak odnosa. Post-purchase sekvence povećavaju customer lifetime value i generiše repeat kupce.
                      </p>

                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Dan 0: Order confirmation + expect email</h5>
                          <p className="text-sm text-muted-foreground">Potvrda porudžbine + kada očekivati dostavu + customer service info</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Dan 3: Hvorto use your purchase</h5>
                          <p className="text-sm text-muted-foreground">Tutorial, setup guide, tips for getting the most value</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Dan 7: Are you happy? (feedback request)</h5>
                          <p className="text-sm text-muted-foreground">Review request + customer satisfaction survey</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Dan 14: Complementary products/upsell</h5>
                          <p className="text-sm text-muted-foreground">Predlog dodatnih proizvoda koji se uklapaju u njihovu kupovinu</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Dan 30: Loyalty program invite</h5>
                          <p className="text-sm text-muted-foreground">Poziv u VIP program + exclusive offers za repeat customers</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Advanced Strategies */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Napredne strategije za maksimizaciju rezultata</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Kada savladate osnove, vreme je da pođete na sledeći nivo. Ove napredne tehnike koriste najveće svetske kompanije za ostvarivanje izuzetnih rezultata.
                </p>

                <div className="space-y-6">
                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader>
                      <CardTitle className="text-yellow-800">A/B testiranje za kontinuirano poboljšanje</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-yellow-800">
                        Samo A/B testiranje može povećati email performance za 20-30%. Testirajte sve, merite rezultate, optimizujte.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-yellow-700">Elementi za testiranje:</h4>
                          <div className="space-y-2">
                            <div className="bg-white p-3 rounded border">
                              <h5 className="font-medium text-sm">Subject lines</h5>
                              <p className="text-xs text-muted-foreground">Test različite pristupe: urgency vs curiosity, kratko vs dugačko, emoji vs bez emoji</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <h5 className="font-medium text-sm">Send time</h5>
                              <p className="text-xs text-muted-foreground">Testirajte različite dane i vremena - utorak 10h vs četvrtak 14h</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <h5 className="font-medium text-sm">CTA buttons</h5>
                              <p className="text-xs text-muted-foreground">Boja, tekst, veličina, pozicija - sve može da uticaj na klik rate</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                              <h5 className="font-medium text-sm">Email length</h5>
                              <p className="text-xs text-muted-foreground">Kratko i slatko vs detaljno i educativno - različite audience preferiraju različito</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-yellow-700">A/B test metodologija:</h4>
                          <div className="bg-white p-4 rounded border">
                            <ol className="list-decimal list-inside space-y-2 text-sm">
                              <li>Definiše hipotezu (npr. "emoji u subject line povećavaju open rate")</li>
                              <li>Testirajte samo jedan element po testu</li>
                              <li>Pošaljite test 10-20% liste, najbolji variant ostatku</li>
                              <li>Čekajte statistički značajne rezultate (minimum 1000 mejlova)</li>
                              <li>Merite prave metrike (ne samo open rate već i konverzije)</li>
                              <li>Implementirati winner i planirati sledeći test</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-xl">Behavioral triggers i dynamic content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">
                        Moderna email platforme omogućavaju slanje mejlova based na korisničkom ponašanju u real-time. Ovo generiše neverovatno relevantne i timely poruke.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Behavioral triggers:</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">Website activity</h5>
                              <p className="text-sm text-muted-foreground">Pošaljite mejl kada neko provodi 5+ minuta na pricing stranici</p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">Email engagement</h5>
                              <p className="text-sm text-muted-foreground">Posebne sekvence za high-engaged vs low-engaged subscribers</p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">Purchase behavior</h5>
                              <p className="text-sm text-muted-foreground">Automatski upsell/cross-sell based na kupovnoj istoriji</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Dynamic content:</h4>
                          <div className="space-y-3">
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">Lokacija-based sadržaj</h5>
                              <p className="text-sm text-muted-foreground">Različite offers za Beograd vs Novi Sad subscribers</p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">Personal recommendations</h5>
                              <p className="text-sm text-muted-foreground">Proizvodi/usluge based na browsing istoriji</p>
                            </div>
                            <div className="border rounded-lg p-3">
                              <h5 className="font-medium">Weather-triggered content</h5>
                              <p className="text-sm text-muted-foreground">Seasonal offers kada temperatura padne ispod 5°C</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-xl">Re-engagement kampainje za neaktivne pretplatnike</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        20-30% vaše email liste će postati neaktivno tokom vremena. Re-engagement kampaije mogu da "vrati" 10-15% tih pretplatnika i omogući vam da održite zdravu listu.
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold">5-mejl re-engagement sekvenca:</h4>

                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium">Email 1: "Nedostajete nam"</h5>
                            <p className="text-sm text-muted-foreground">Nostalgic tone + recap vrednosti koje ste pružali + pitanje šta ih zanima</p>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium">Email 2: "Šta ste propustili"</h5>
                            <p className="text-sm text-muted-foreground">Highlights najboljih sadržaja/offers iz poslednja 3 meseca</p>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium">Email 3: "Ekskluzivni povratnički bonus"</h5>
                            <p className="text-sm text-muted-foreground">Special offer samo za neaktivne pretplatnike + urgency</p>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-3">
                            <h5 className="font-medium">Email 4: "Promenimo frequency"</h5>
                            <p className="text-sm text-muted-foreground">Ponudite opciju za manje česte mejlove umesto unsubscribe</p>
                          </div>

                          <div className="border border-red-200 rounded-lg p-3 bg-red-50">
                            <h5 className="font-medium text-red-700">Email 5: "Poslednja šansa"</h5>
                            <p className="text-sm text-red-600">Ultimatum mejl - ostajanje vs automatsko uklanjanje sa liste</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Tools and Platforms */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Alati i platforme za male biznise</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Izbor prave email marketing platforme može značiti razliku između uspeha i neuspeha. Evo pregleda najboljih opcija za male biznise u Srbiji.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-600">Mailchimp</CardTitle>
                      <CardDescription>Najbolja platforma za početnike</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Cena:</strong> Besplatno do 2.000 kontakata, od $10/mesec</div>
                        <div><strong>Prednosti:</strong> Jednostavno za korišćenje, mnoshtvo template-a, dobra automatizacija</div>
                        <div><strong>Mane:</strong> Skuplje za veće liste, ograničene napredne funkcije</div>
                        <div><strong>Najbolje za:</strong> Početne i nove kompanije</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-600">ConvertKit</CardTitle>
                      <CardDescription>Fokusiran na kreatore sadržaja</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Cena:</strong> Od $29/mesec za 1.000 kontakata</div>
                        <div><strong>Prednosti:</strong> Powerful automation, tagging sistem, landing page</div>
                        <div><strong>Mane:</strong> Skuplji od Mailchimp, manje template opcija</div>
                        <div><strong>Najbolje za:</strong> Content marketere, coaches, online kursevi</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-600">ActiveCampaign</CardTitle>
                      <CardDescription>Napredne automation mogućnosti</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Cena:</strong> Od $15/mesec za 500 kontakata</div>
                        <div><strong>Prednosti:</strong> Najbolja automatizacija, CRM integracija, split testing</div>
                        <div><strong>Mane:</strong> Kompleksnije za početnike, learning curve</div>
                        <div><strong>Najbolje za:</strong> Growing businesses sa complex funnels</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-600">GetResponse</CardTitle>
                      <CardDescription>All-in-one marketing rešenje</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Cena:</strong> Od $19/mesec za 1.000 kontakata</div>
                        <div><strong>Prednosti:</strong> Landing pages, webinars, autoresponders, CRM</div>
                        <div><strong>Mane:</strong> Ne excell u nijednom pojedinačnom elementu</div>
                        <div><strong>Najbolje za:</strong> Mali biznisi koji žele sve-u-jednom</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-blue-50 border-blue-200 mb-8">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Naša preporuka za srpski tržište</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg border">
                        <h4 className="font-semibold text-green-600">Početnici</h4>
                        <p className="text-sm text-muted-foreground mb-2">Do 1.000 kontakata</p>
                        <p className="font-medium">Mailchimp</p>
                        <p className="text-xs text-muted-foreground">Besplatno + lako za početak</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border">
                        <h4 className="font-semibold text-blue-600">Rastući biznis</h4>
                        <p className="text-sm text-muted-foreground mb-2">1.000-5.000 kontakata</p>
                        <p className="font-medium">ConvertKit</p>
                        <p className="text-xs text-muted-foreground">Automation + tagging</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg border">
                        <h4 className="font-semibold text-purple-600">Napredni</h4>
                        <p className="text-sm text-muted-foreground mb-2">5.000+ kontakata</p>
                        <p className="font-medium">ActiveCampaign</p>
                        <p className="text-xs text-muted-foreground">Advanced automation + CRM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Metrics and Analytics */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Merenje uspera i optimizacija performansi</h2>
                <p className="text-lg leading-relaxed mb-6">
                  "What gets measured gets managed." Bez pravilnog merenje rezultata, email marketing postaje pogađanje u mraku. Evo ključnih metrika koje trebate da pratite.
                </p>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Ključne email marketing metrike</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-green-600">Primary metrike (osnovne):</h4>
                        <div className="space-y-3">
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Open Rate</h5>
                            <p className="text-sm text-muted-foreground">% ljudi koji otvorili mejl | Dobar: 20-25% | Odličan: 25%+</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Click Rate (CTR)</h5>
                            <p className="text-sm text-muted-foreground">% ljudi koji kliknuli link | Dobar: 2-3% | Odličan: 3%+</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Unsubscribe Rate</h5>
                            <p className="text-sm text-muted-foreground">% ljudi koji se odjavili | Dobar: &lt;0.5% | Alarm: &gt;1%</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Bounce Rate</h5>
                            <p className="text-sm text-muted-foreground">% neispručenih mejlova | Dobar: &lt;2% | Alarm: &gt;5%</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600">Business metrike (napredne):</h4>
                        <div className="space-y-3">
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Conversion Rate</h5>
                            <p className="text-sm text-muted-foreground">% emailova koji rezultuje kupovinom | Target: 1-5%</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Revenue per Email</h5>
                            <p className="text-sm text-muted-foreground">Prosečan prihod po poslatom mejlu | Cilj: $1+ RPE</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Customer Lifetime Value</h5>
                            <p className="text-sm text-muted-foreground">Ukupna vrednost klijenta kroz email kanal</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">ROI</h5>
                            <p className="text-sm text-muted-foreground">Return on Investment | Industry average: 4200%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-800">Email deliverability - Kako da izbegnete spam folder</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-yellow-800">
                      Najbolji mejl na svetu neće pomoći ako završi u spam folderu. Deliverability je kritičan za uspeh email marketinga.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-yellow-700">Best practices za dobru deliverability:</h4>
                        <div className="bg-white p-4 rounded border space-y-2">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Koristite double opt-in za nove pretplatnike</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Redovno čistite neaktivne email adrese</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Postavite SPF, DKIM i DMARC records</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Koristite reputable email service provider</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                              <span>Izbegavajte spam trigger reči u subject lines</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-yellow-700">Red flags koji vode u spam:</h4>
                        <div className="bg-white p-4 rounded border space-y-2">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                              <span>Purchased email liste</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                              <span>Previše promocijski sadržaj (&gt;20%)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                              <span>Visok bounce rate (&gt;5%)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                              <span>Spam complaints (&gt;0.1%)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                              <span>Inconsistent sending patterns</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quiz Section */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Testirajte svoje znanje o email marketingu</h2>
                <Quiz
                  questions={[
                    {
                      question: "Koliki je prosečni ROI email marketinga?",
                      options: [
                        "2100%",
                        "3200%",
                        "4200%",
                        "5200%"
                      ],
                      correct: 2,
                      explanation: "Email marketing ima prosečni ROI od 4200%, što znači 42 dolara zarada za svaki uloženi dolar. Ovo ga čini jednim od najprofitabilnijih marketing kanala."
                    },
                    {
                      question: "Kada treba poslati prvi mejl u welcome sekvenci?",
                      options: [
                        "Odmah (0 minuta)",
                        "Za 1 sat",
                        "Za 24 sata",
                        "Za 3 dana"
                      ],
                      correct: 0,
                      explanation: "Prvi mejl u welcome sekvenci treba poslati odmah (0 minuta) da isporučite obećani lead magnet i napravite odličan prvi utisak dok je vaš brand još uvek fresh u njihovoj glavi."
                    },
                    {
                      question: "Koliki procenat kupaca napušta korpu bez kupovine?",
                      options: [
                        "50%",
                        "60%",
                        "70%",
                        "80%"
                      ],
                      correct: 2,
                      explanation: "70% online kupaca napušta korpu bez kupovine, što čini abandoned cart email sekvence kritičnim za obnavljanje 15-25% tih kupaca."
                    },
                    {
                      question: "Koja je dobra open rate za email kampanje?",
                      options: [
                        "15-20%",
                        "20-25%",
                        "25-30%",
                        "30-35%"
                      ],
                      correct: 1,
                      explanation: "Dobra open rate je 20-25%, dok se 25%+ smatra odličnom. Ovo zavisi od industrije, ali ovo su dobri benchmark brojevi za većinu biznisa."
                    },
                    {
                      question: "Šta je najvažnije za email deliverability?",
                      options: [
                        "Dobar subject line",
                        "Kvalitetna email lista sa engaged pretplatnicima",
                        "Dobre slike u mejlu",
                        "Kratak sadržaj"
                      ],
                      correct: 1,
                      explanation: "Kvalitetna email lista sa engaged pretplatnicima je najvažnija za deliverability. Engaged audience otvara mejlove, što signalizira email provajderima da je vaš sadržaj vredan."
                    }
                  ]}
                />
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground mt-12">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Spremni da izgradite email listu koja donosi rezultate?</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Naš tim će vam pomoći da postavite email marketing sistemе koji rade 24/7 i generiše konstantan prihod.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/cene">Pogledaj email marketing pakete</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white text-primary hover:bg-white">
                      <Link to="/kontakt">Besplatna strategijska sesija</Link>
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

export default BlogArticle12;