import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, TrendingUp, Users, Globe, CheckCircle, Star, Clock, Eye, BarChart, MousePointer, Zap, Award, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle11 = () => {
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
              <Badge variant="secondary">Landing stranice</Badge>
              <span className="text-sm text-muted-foreground">16 min čitanja</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Landing stranica koja prodaje - Kako napraviti stranu koja konvertuje posetioce u kupce
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Kompletni vodič kroz kreiranje visoko-konvertirajućih landing stranica. Naučite kako da svaki posetilac postane potencijalni kupac.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>25. januar 2025</span>
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Landing stranica optimizacija"
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
                  Zamislite da imate fizičku radnju gde 95% ljudi samo prošeta kroz i ode bez kupovine. Brže-bolje biste je zatvorili, zar ne? Pa ipak, većina kompanija prihvata upravo ovakve rezultate na svojoj web stranici. Prosečna konverzija landing stranica je samo 2-5%, što znači da od 100 posetilaca, samo 2-5 napravi željenu akciju.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Ali što ako vam kažem da najbolje landing stranice postižu konverzije od 20%, 30%, pa čak i 40%? Razlika između uspešne i neuspešne landing stranice nije u budžetu, dizajnu ili tehnologiji - već u razumevanju psihologije korisnika i preciznoj optimizaciji svakog elementa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  U ovom detaljnom vodiču ćemo analizirati svaki element koji čini landing stranicu uspešnom. Od psycho-manipulacije naslova do preciznog pozicioniranja dugmadi - naučićete sve što koriste najuspešniji marketerani sveta da pretvore posetioce u kupce.
                </p>

                <Card className="bg-primary/5 border-primary/20 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Zašto su landing stranice kritične za uspeh
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Povećavaju konverzije za 300-500% u odnosu na generičke stranice</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Snižavaju troškove po konverziji za 50-80%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Omogućavaju precizno A/B testiranje svakoga elementa</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Pružaju bolje korisničko iskustvo sa fokusiranim sadržajem</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Omogućavaju lakše praćenje i merenje rezultata</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Povećavaju vrednost svakog dolara uloženog u marketing</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Landing Page Anatomy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Anatomija savršene landing stranice</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Svaka uspešna landing stranica prati specifičnu strukturu koja je optimizovana za ljudsku psihologiju i ponašanje online. Ova struktura nije slučajna - rezultat je hiljade A/B testova i psiholoških studija koje su pokazale šta najbolje funkcioniše.
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-600" />
                        1. Hero sekcija - Prvi utisak koji odlučuje sve
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Hero sekcija je najvažniji deo landing stranice jer se prikazuje first-fold (ne zahteva skrolovanje). Korisnici donose odluku o ostajanju ili odlasku za 3-5 sekundi, i hero sekcija mora da im da sve potrebne informacije u tom kratkom vremenu.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Ključni elementi:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Snažan, benefit-focused naslov</li>
                            <li>• Kratak podnaslov koji objašnjava vrednost</li>
                            <li>• Prominentan CTA dugme</li>
                            <li>• Relevantna hero slika ili video</li>
                            <li>• Trust indicatori (logovi, sertifikati)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Psihološki principi:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Clarity beats cleverness (jasnoća pobeduje kreativnost)</li>
                            <li>• Benefit-oriented messaging (fokus na korist)</li>
                            <li>• Visual hierarchy (hijerarhija važnosti)</li>
                            <li>• Immediate value proposition</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-600" />
                        2. Social proof - Psihološka validacija
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Ljudi su socijalna bića koja donose odluke based na ponašanju drugih. Social proof je jedan od najmoćnijih psiholoških trigera koji možete koristiti. Istraživanja pokazuju da social proof može povećati konverzije za 15-30%.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Customer testimonials</h5>
                          <p className="text-sm text-muted-foreground">Specifične izjave real klijenata sa imenima i fotografijama</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Case studies</h5>
                          <p className="text-sm text-muted-foreground">Detaljni success stories sa konkretnim rezultatima</p>
                        </div>
                        <div className="border rounded-lg p-3">
                          <h5 className="font-medium">Review ratings</h5>
                          <p className="text-sm text-muted-foreground">Zvezdice, brojevi, third-party review platforme</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        3. Benefit-focused copy - Govorite jezikom koristi
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Većina kompanija pravi grešku fokusiranju na features umesto na benefits. Korisnici ne kupuju proizvod - kupuju rešenje za svoj problem ili način da postignu željeni ishod. Vaš copy mora da govori njihovim jezikom.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-red-200 rounded-lg p-4">
                          <h5 className="font-medium text-red-600 mb-2">Pogrešno (Features):</h5>
                          <ul className="text-sm space-y-1">
                            <li>• "Naš software ima 50+ integracija"</li>
                            <li>• "Koristimo najnoviju AI tehnologiju"</li>
                            <li>• "24/7 customer support"</li>
                            <li>• "Enterprise-level sigurnost"</li>
                          </ul>
                        </div>
                        <div className="border border-green-200 rounded-lg p-4">
                          <h5 className="font-medium text-green-600 mb-2">Ispravno (Benefits):</h5>
                          <ul className="text-sm space-y-1">
                            <li>• "Povezujemo sve vaše alate u jedan dashboard"</li>
                            <li>• "Uštedite 10 sati nedeljno automatizacijom"</li>
                            <li>• "Dobijte odgovor na pitanje za manje od 2 minuta"</li>
                            <li>• "Nikad se ne brinite o sigurnosti podataka"</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MousePointer className="w-5 h-5 text-orange-600" />
                        4. Strategija poziva na akciju (CTA)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        CTA dugme je možda najvažniji single element na landing stranici. Jedan A/B test CTA dugmeta može povećati konverzije za 20-40%. Svaki detal - boja, tekst, veličina, pozicija - ima dramatičan uticaj na rezultate.
                      </p>

                      <div className="space-y-4">
                        <h5 className="font-semibold">CTA Copy Formula koja uvek radi:</h5>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-center">[Action Verb] + [Value Proposition] + [Urgency/Incentive]</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h6 className="font-medium text-green-600 mb-2">Dobar CTA copy:</h6>
                            <ul className="text-sm space-y-1">
                              <li>• "Pošaljite mi besplatan audit"</li>
                              <li>• "Registrujte se za 14-dnevni trial"</li>
                              <li>• "Preuzmite besplatan template"</li>
                              <li>• "Zakazajte demos poziv danas"</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-medium text-red-600 mb-2">Loš CTA copy:</h6>
                            <ul className="text-sm space-y-1">
                              <li>• "Kliknite ovde"</li>
                              <li>• "Saznajte više"</li>
                              <li>• "Submit"</li>
                              <li>• "Pošaljite"</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Conversion Psychology */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Psihologija konverzije - Kako mislite vaši korisnici</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Razumevanje korisničke psihologije je ključ kreiranja landing stranica koje konvertuju. Ljudi ne donose racionalne odluke - oni donose emocionalne odluke koje naknadno racionalizuju. Vaša landing stranica mora da appuje i na emotion i na logic.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Principle of Scarcity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Kada mislimo da nešto postaje nedostupno, želimo to još više. Scarcity pospešuje decision-making.
                      </p>
                      <div className="text-sm space-y-1">
                        <div><strong>Implementacija:</strong></div>
                        <div>• "Samo 5 mesta ostalo"</div>
                        <div>• "Ponuda važi do kraja dana"</div>
                        <div>• "Limited time offer"</div>
                        <div>• Stock counters</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Principe of Reciprocity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Kada neko nama da nešto besplatno, oseščamo potrebu da uzvratimo.
                      </p>
                      <div className="text-sm space-y-1">
                        <div><strong>Implementacija:</strong></div>
                        <div>• Besplatni e-book ili template</div>
                        <div>• Free trial ili demo</div>
                        <div>• Besplatan audit ili consultation</div>
                        <div>• Exclusive content</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Loss Aversion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Ljudi više mrze da izgube nešto nego što vole da dobiju nešto iste vrednosti.
                      </p>
                      <div className="text-sm space-y-1">
                        <div><strong>Implementacija:</strong></div>
                        <div>• "Ne propustite priliku"</div>
                        <div>• "Poslednja šansa"</div>
                        <div>• Cost of inaction</div>
                        <div>• Risk reversal guarantees</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Authority Principle</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Ljudи prirodno slede lidere i ekspertise. Authority povećava trust i credibility.
                      </p>
                      <div className="text-sm space-y-1">
                        <div><strong>Implementacija:</strong></div>
                        <div>• Expert testimonials</div>
                        <div>• Media mentions</div>
                        <div>• Industry awards</div>
                        <div>• Client logos</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* A/B Testing Strategy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">A/B testing strategija za kontinuirano poboljšanje</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Čak i najbolje kreirana landing stranica može biti poboljšana. A/B testing je jedini način da znate šta stvarno radi, umesto da se oslanjate na mišljenja ili "best practices". Systematic A/B testing može povećati konverzije za 50-200% tokom vremena.
                </p>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">A/B testing prioritization framework</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">High-impact elementi za testiranje (sortirani po prioritetu):</h4>
                      <div className="space-y-3">
                        <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                          <h5 className="font-semibold text-green-700">1. Headlines (70% uticaja na konverziju)</h5>
                          <p className="text-sm text-muted-foreground">Test benefit vs feature, emocija vs logika, kratko vs dugo</p>
                        </div>
                        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                          <h5 className="font-semibold text-blue-700">2. CTA buttons (50% uticaja)</h5>
                          <p className="text-sm text-muted-foreground">Boja, tekst, veličina, pozicija, broj CTA dugmadi</p>
                        </div>
                        <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                          <h5 className="font-semibold text-purple-700">3. Value proposition (40% uticaja)</h5>
                          <p className="text-sm text-muted-foreground">Kako objašnjavate vrednost, benefiti vs features</p>
                        </div>
                        <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                          <h5 className="font-semibold text-orange-700">4. Social proof placement (30% uticaja)</h5>
                          <p className="text-sm text-muted-foreground">Pozicija testimonials, broj reviews, format prikaza</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">A/B testing methodology:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h5 className="font-medium text-green-600">Faza 1: Foundation (nedelje 1-4)</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Test main headline</li>
                            <li>• Test primary CTA button</li>
                            <li>• Test hero image</li>
                            <li>• Establish baseline metrics</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-blue-600">Faza 2: Optimization (nedelje 5-8)</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Test form length</li>
                            <li>• Test social proof variations</li>
                            <li>• Test page layout</li>
                            <li>• Test trust indicators</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-purple-600">Faza 3: Fine-tuning (nedelje 9-12)</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Test micro-copy</li>
                            <li>• Test color schemes</li>
                            <li>• Test animation effects</li>
                            <li>• Test mobile optimizations</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-medium text-orange-600">Faza 4: Advanced (nedelje 13+)</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Multivariate testing</li>
                            <li>• Personalization tests</li>
                            <li>• Device-specific optimizations</li>
                            <li>• Traffic source optimizations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Mobile Optimization */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Mobilna optimizacija - 70% vašeg saobraćaja</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Sa preko 70% web saobraćaja koji dolazi sa mobilnih uređaja, mobilna optimizacija nije opcija - to je neophodno. Mobilni korisnici imaju drugačije ponašanje, potrebe i ograničenja u odnosu na desktop korisnike.
                </p>

                <Card className="mb-8 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Mobilne conversion challenges</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-blue-700">Tipični mobilni problemi:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <span className="text-sm">Sitni text koji zahteva zoom</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <span className="text-sm">Dugmad preblizu jedan drugome</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <span className="text-sm">Forme previše kompleksne za thumb typing</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <span className="text-sm">Sporo učitavanje na mobilnim konekcijama</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <span className="text-sm">Horizontalno skrolovanje</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-blue-700">Mobilne conversion rešenja:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Minimum 16px font size za lako čitanje</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">44px minimum touch target size</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Single-column layout sa jasnim hijerarhijama</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Optimizovane slike i lazy loading</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Auto-focus na prvo form polje</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Analytics and Measurement */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Merenje i analytics - You can't improve what you don't measure</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Kreiranje landing stranice je samo početak. Pravi rad počinje kada stavite stranicu uživo i počnete da analizirate podatke. Ključ je tracking the right metrics i razumevanje šta brojevi stvarno znače.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-600">Primary KPI</CardTitle>
                      <CardDescription>Najvažnije metrike za praćenje</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Conversion Rate:</strong> % visitors koji izvrše željenu akciju</div>
                        <div><strong>Cost per Conversion:</strong> Marketing trošak po konverziji</div>
                        <div><strong>Revenue per Visitor:</strong> Prosečna vrednost po posetu</div>
                        <div><strong>Customer Lifetime Value:</strong> Dugoročna vrednost klijenta</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-600">Secondary KPI</CardTitle>
                      <CardDescription>Metrike za optimizaciju</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Bounce Rate:</strong> % korisnika koji odmah odlaze</div>
                        <div><strong>Time on Page:</strong> Vreme provedeno na stranici</div>
                        <div><strong>Scroll Depth:</strong> Koliko daleko korisnici skroluju</div>
                        <div><strong>Form Abandonment:</strong> Gde korisnici napuštaju formu</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-600">Advanced KPI</CardTitle>
                      <CardDescription>Napredne metrike za analizu</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm space-y-2">
                        <div><strong>Heat maps:</strong> Gde korisnici kližu i kliktu</div>
                        <div><strong>Session Recordings:</strong> Kako se korisnici ponašaju</div>
                        <div><strong>Form Analytics:</strong> Problemi sa specific poljima</div>
                        <div><strong>Device Performance:</strong> Desktop vs mobile rezultati</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Quiz Section */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Testirajte svoje znanje o landing stranicama</h2>
                <Quiz
                  questions={[
                    {
                      question: "Koja je prosečna konverzija landing stranica?",
                      options: [
                        "1-3%",
                        "2-5%",
                        "5-8%",
                        "8-12%"
                      ],
                      correct: 1,
                      explanation: "Prosečna konverzija landing stranica je samo 2-5%, što znači da od 100 posetilaca, samo 2-5 napravi željenu akciju. Najbolje stranice postižu 20-40% konverziju."
                    },
                    {
                      question: "Koliko vremena imrnu korisnici da donesu odluku o ostajanju na stranici?",
                      options: [
                        "1-2 sekunde",
                        "3-5 sekundi",
                        "5-10 sekundi",
                        "10-15 sekundi"
                      ],
                      correct: 1,
                      explanation: "Korisnici donose odluku o ostajanju ili odlasku za 3-5 sekundi, zato hero sekcija mora da pruži sve potrebne informacije u tom kratkom vremenu."
                    },
                    {
                      question: "Koji element ima najveći uticaj na konverziju prilikom A/B testiranja?",
                      options: [
                        "Boja dugmeta",
                        "Headline",
                        "Slike",
                        "Font"
                      ],
                      correct: 1,
                      explanation: "Headlines imaju najveći uticaj na konverziju (do 70%), jer su prvi element koji korisnici čitaju i koji određuje da li će nastaviti da čitaju stranicu."
                    },
                    {
                      question: "Koliko procenata web saobraćaja dolazi sa mobilnih uređaja?",
                      options: [
                        "60%",
                        "65%",
                        "70%",
                        "75%"
                      ],
                      correct: 2,
                      explanation: "Preko 70% web saobraćaja dolazi sa mobilnih uređaja, što čini mobilnu optimizaciju kritičnom za uspeh landing stranica."
                    },
                    {
                      question: "Koja je minimum preporučena veličina za touch targets na mobilnim uređajima?",
                      options: [
                        "32px",
                        "38px",
                        "44px",
                        "50px"
                      ],
                      correct: 2,
                      explanation: "Minimum preporučena veličina za touch targets je 44px, što omogućava precizno tapiranje prstom bez slučajnih klikova na susedne elemente."
                    }
                  ]}
                />
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground mt-12">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Spremni da kreirate landing stranicu koja donosi rezultate?</h2>
                  <p className="text-lg opacity-90 mb-6">
                    Naš tim će vam pomoći da napravite landing stranicu optimizovanu za maksimalne konverzije.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/cene">Pogledaj pakete</Link>
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

export default BlogArticle11;