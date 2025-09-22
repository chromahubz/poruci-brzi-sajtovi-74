import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ShoppingCart, Target, TrendingUp, BarChart3, Users, Building2, CheckCircle, Calendar, Award, Zap, Eye, MousePointer, DollarSign, Share2, Settings, Phone, Lightbulb, Globe, Palette, Sofa, Sun, Crown, Coins, Percent, Repeat, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle26 = () => {
  const quizQuestions = [
    {
      question: "Šta karakteriše high-ticket dropshipping u odnosu na tradicionalni?",
      options: [
        "Proizvodi do 100€",
        "Proizvodi od 500€ naviše",
        "Samo digitalni proizvodi",
        "Samo uvozni proizvodi"
      ],
      correctAnswer: 1,
      explanation: "High-ticket dropshipping fokusira se na skupe proizvode (500€+) gde je profit po prodaji značajno veći."
    },
    {
      question: "Koji je najbolji pristup za EMD u e-commerce mikrosajtovima?",
      options: [
        "Samo naziv brenda",
        "Lokacija + ključna reč proizvoda",
        "Nasumični kreativni naziv",
        "Brojevi i simboli"
      ],
      correctAnswer: 1,
      explanation: "EMD strategija kombinuje lokaciju sa ključnom reči proizvoda (npr. beogradnameštaj.rs) za najbolje SEO rezultate."
    },
    {
      question: "Koliko mikrosajtova treba kreirati za efikasnu strategiju?",
      options: [
        "1-2 sajta",
        "5-10 sajtova",
        "20-50 sajtova",
        "100+ sajtova"
      ],
      correctAnswer: 2,
      explanation: "Optimalno je 20-50 mikrosajtova koji pokrivaju različite proizvode i lokacije, što omogućava dominaciju u pretragama."
    },
    {
      question: "Kakav je optimalni profit po prodaji u high-ticket dropshipping-u?",
      options: [
        "10-50€",
        "100-200€",
        "500-5000€",
        "Zavisi od proizvoda"
      ],
      correctAnswer: 2,
      explanation: "High-ticket proizvodi omogućavaju profit od 500-5000€ po prodaji, što čini strategiju izuzetno profitabilnom."
    },
    {
      question: "Koja je ključna razlika u customer expectations za high-ticket proizvode?",
      options: [
        "Iste kao za jeftine proizvode",
        "Značajno veće očekivanje kvaliteta i servisa",
        "Manje očekivanja",
        "Fokus samo na cenu"
      ],
      correctAnswer: 1,
      explanation: "Kupci skupih proizvoda imaju veća očekivanja za kvalitet, servis, garanciju i celokupno iskustvo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Nazad na blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              E-commerce
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              E-commerce Mikrosajtovi: High-Ticket Dropshipping Strategija za Srbiju
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Otkrijte kako da zaradite 500-5000€ po prodaji kroz strategiju e-commerce mikrosajtova i high-ticket dropshipping u partnerstvu sa lokalnim proizvođačima
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                24. septembar 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                20 min čitanja
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                E-commerce strategija
              </div>
            </div>
          </header>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="E-commerce mikrosajtovi - online prodaja"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>

          <div className="prose prose-lg max-w-none">

            {/* Uvod */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8 border-l-4 border-orange-500">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Zašto je ovo budućnost e-commerce-a?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dok se većina fokusira na prodaju jeftinih proizvoda sa profitom od 10-50€, postoji strategija koja omogućava zarade od 500-5000€ po transakciji. E-commerce mikrosajtovi kombinovani sa high-ticket dropshipping-om predstavljaju revoluciju u online prodaji, posebno u Srbiji gde je konkurencija još uvek mala.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Zaboravite sve što znate o e-commerce-u. Umesto jednog sajta koji prodaje sve, kreiraćete mrežu specijalizovanih sajtova koji svaki targetira specifičan skup proizvod ili geografsku oblast. Umesto borbe za prodaju proizvoda od 20-100€, fokusiraćete se na premium kategorije gde jedna prodaja može da vam donese više nego što neki zarađuju mesečno.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              U ovom vodiču, otkićete kako da partnerirate sa lokalnim zanatlijama i proizvođačima u Srbiji, kreirate mrežu mikrosajtova koja dominira u Google pretragama, i postavite automatizovane sisteme koji rade za vas 24/7. Ovo nije teorija - ovo je dokazana strategija koja već donosi rezultate.
            </p>

            {/* Statistike */}
            <Card className="mb-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  E-commerce mikrosajtovi u brojkama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">20x</div>
                      <span className="text-gray-700">veći profit po prodaji od tradicionalnog dropshipping-a</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4-5</div>
                      <span className="text-gray-700">pozicija u top 10 Google rezultata istovremeno</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">50+</div>
                      <span className="text-gray-700">mikrosajtova može upravljati jedan tim</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">80%</div>
                      <span className="text-gray-700">manje konkurencije u high-ticket kategorijama</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">24/7</div>
                      <span className="text-gray-700">automatizovano generisanje lead-ova</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">ROI</div>
                      <span className="text-gray-700">povraćaj investicije za 60-90 dana</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Šta su e-commerce mikrosajtovi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <ShoppingCart className="w-8 h-8 mr-3 text-orange-600" />
                Šta su e-commerce mikrosajtovi?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                E-commerce mikrosajtovi su specijalizovani online prodavnice koje se fokusiraju na određenu kategoriju proizvoda ili geografsku oblast. Za razliku od tradicionalnih e-commerce sajtova koji pokušavaju da prodaju sve, mikrosajtovi su laser-fokusirani na specifičnu niču.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Primer transformacije:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-3">❌ Tradicionalni pristup:</h4>
                    <p className="text-sm text-gray-600 mb-2">Jedan sajt: "SerbijaProdaja.rs"</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Prodaje sve (odeća, tehnika, nameštaj, igračke)</li>
                      <li>• Borba sa velikim brendovima</li>
                      <li>• Niska margin (5-15%)</li>
                      <li>• Veliki troškovi marketinga</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-3">✅ Mikrosajt pristup:</h4>
                    <p className="text-sm text-gray-600 mb-2">Mreža specijalizovanih sajtova:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• vojvodinanameštaj.rs</li>
                      <li>• beogradsolarni.rs</li>
                      <li>• novisadkeramika.rs</li>
                      <li>• kragujevacdrvo.rs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">High-ticket vs. tradicionalni dropshipping</h3>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Coins className="w-5 h-5 mr-2" />
                      Poređenje profitabilnosti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Karakteristika</th>
                            <th className="text-left py-2">Tradicionalni Dropshipping</th>
                            <th className="text-left py-2">High-Ticket Dropshipping</th>
                          </tr>
                        </thead>
                        <tbody className="space-y-2">
                          <tr className="border-b">
                            <td className="py-2 font-medium">Cena proizvoda</td>
                            <td className="py-2 text-red-600">€10 - €100</td>
                            <td className="py-2 text-green-600">€500 - €20,000</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Profit po prodaji</td>
                            <td className="py-2 text-red-600">€5 - €20</td>
                            <td className="py-2 text-green-600">€200 - €5,000</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Prodaja potrebna za €5,000</td>
                            <td className="py-2 text-red-600">250-1000 proizvoda</td>
                            <td className="py-2 text-green-600">1-25 proizvoda</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Customer service</td>
                            <td className="py-2 text-red-600">Visok volumen, niska cena</td>
                            <td className="py-2 text-green-600">Niži volumen, premium servis</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-medium">Konkurencija</td>
                            <td className="py-2 text-red-600">Izuzetno visoka</td>
                            <td className="py-2 text-green-600">Značajno manja</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Ključna razlika u expectations</h4>
                    <p className="text-yellow-700">
                      Kada neko potroši €30, očekuju osnovnu uslugu. Kada potroše €3,000, očekuju premium iskustvo, detaljne konsultacije, garanciju i vrhunski servis. Ovo zahteva drugačiji pristup marketingu i customer service-u, ali omogućava i značajno veće maržine.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* High-ticket proizvodi u Srbiji */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Crown className="w-8 h-8 mr-3 text-purple-600" />
                High-ticket prilike u Srbiji
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Srbija ima bogatu tradiciju zanatstva i proizvodnje kvalitetnih proizvoda. Mnogi tradicionalni zanatlije i mali proizvođači prave izuzetne proizvode, ali im nedostaju digitalne veštine za online prodaju. Tu je vaša prilika.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Najperpsektivnije kategorije</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Sofa className="w-5 h-5 mr-2" />
                      Nameštaj i enterijer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-blue-700">Proizvodi:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• Nameštaj po meri (€1,000-€10,000)</li>
                          <li>• Rustični nameštaj od drveta</li>
                          <li>• Kuhinje po narudžbini</li>
                          <li>• Luksuzni spavaći setovi</li>
                          <li>• Unikatni komadni nameštaja</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="text-xs text-blue-700">
                          <strong>Profit margin:</strong> 30-50% | <strong>Primer:</strong> vojvodinanameštaj.rs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Sun className="w-5 h-5 mr-2" />
                      Obnovljiva energija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-green-700">Proizvodi:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Solarni sistemi (€3,000-€15,000)</li>
                          <li>• Toplotne pumpe</li>
                          <li>• Sistemi za grejanje</li>
                          <li>• Smart home rešenja</li>
                          <li>• Energetska efikasnost</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs text-green-700">
                          <strong>Profit margin:</strong> 25-40% | <strong>Primer:</strong> beogradsolarni.rs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Palette className="w-5 h-5 mr-2" />
                      Umetnost i zanatstvo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-purple-700">Proizvodi:</h5>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• Keramika i grnčarija (€500-€5,000)</li>
                          <li>• Umetničke skulpture</li>
                          <li>• Tradicionalna tkanina</li>
                          <li>• Ručno rađeni nakit</li>
                          <li>• Unikatne slike i dekor</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-2 rounded">
                        <p className="text-xs text-purple-700">
                          <strong>Profit margin:</strong> 40-60% | <strong>Primer:</strong> novosadumetnost.rs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Building2 className="w-5 h-5 mr-2" />
                      Građevinski materijali
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-orange-700">Proizvodi:</h5>
                        <ul className="text-sm space-y-1 text-orange-600">
                          <li>• Prirodni kamen (€2,000-€20,000)</li>
                          <li>• Premium opeka</li>
                          <li>• Drvo za konstutkciju</li>
                          <li>• Luksuzne pločice</li>
                          <li>• Izolacioni materijali</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <p className="text-xs text-orange-700">
                          <strong>Profit margin:</strong> 20-35% | <strong>Primer:</strong> srbijagradnja.rs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Case study: Partnerstvo sa zanatlijama</h3>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-green-800 mb-4">Primer: Stolarski zanat u Vojvodini</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">Situacija:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Marko, iskusan stolar iz Novog Sada</li>
                      <li>• Pravi kvalitetan nameštaj 15 godina</li>
                      <li>• Radi samo za lokalne klijente</li>
                      <li>• Nema website ni online prisustvo</li>
                      <li>• Mesečno 3-5 narudžbi (€80,000 godišnje)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">Partnerstvo:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Kreirate 5 mikrosajtova za različite gradove</li>
                      <li>• Marko pravi nameštaj, vi dovodite kupce</li>
                      <li>• Podela: 70% Marko, 30% vi</li>
                      <li>• Mesečno 15-25 narudžbi</li>
                      <li>• Vaš prihod: €50,000-€80,000 godišnje</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded border-l-4 border-green-500">
                  <p className="text-sm text-green-700">
                    <strong>Ključ uspeha:</strong> Marko dobija više posla nego što može da završi, vi zarađujete bez investicije u materijal ili radnu snagu. Win-win situacija.
                  </p>
                </div>
              </div>
            </section>

            {/* Kreiranje mikrosajtova */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-gray-600" />
                Kreiranje e-commerce mikrosajtova
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Strategija e-commerce mikrosajtova zahteva drugačiji pristup od tradicionalnog e-commerce-a. Umesto da se fokusirate na jedan veliki sajt, kreićete mrežu povezanih, ali nezavisnih sajtova.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 1: Kreiranje glavne brand stranice</h3>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-4">Glavni e-commerce sajt:</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-700">Funkcionalnosti glavnog sajta:</h5>
                    <ul className="text-sm space-y-1 text-blue-600 mt-2">
                      <li>• Kompletnu plaćajnu infrastrukturu</li>
                      <li>• SSL sertifikat i sigurnost</li>
                      <li>• Inventory management sistem</li>
                      <li>• Customer support portal</li>
                      <li>• Order tracking sistem</li>
                      <li>• Return/refund politike</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-700">Primer glavnog brand sajta:</h5>
                    <div className="bg-white p-3 rounded border mt-2">
                      <p className="text-sm font-mono text-blue-600">
                        <strong>Domain:</strong> premijumvojvodina.rs<br />
                        <strong>Focus:</strong> Premium proizvodi iz Vojvodine<br />
                        <strong>Funkcija:</strong> Payment processing, order fulfillment, customer service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 2: EMD mikrosajtovi strategija</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Target className="w-5 h-5 mr-2" />
                      Lokacija + proizvod
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-green-700">Nameštaj kategorija:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• beogradnameštaj.rs</li>
                          <li>• novisadkuhinje.rs</li>
                          <li>• zemunspavaonice.rs</li>
                          <li>• vračardečijsobe.rs</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs text-green-700">
                          Svaki sajt targetira specifičnu kombinaciju grada i vrste nameštaja
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Sun className="w-5 h-5 mr-2" />
                      Proizvod + region
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-blue-700">Solarni sistemi:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• vojvodinasolarni.rs</li>
                          <li>• srbijapaneli.rs</li>
                          <li>• sumadijagrejanje.rs</li>
                          <li>• bačkasolar.rs</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="text-xs text-blue-700">
                          Regionalni pristup pokriva veće geografske oblasti
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 3: Istraživanje domena</h3>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold mb-4">EMD research proces:</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">1. Keyword research:</h5>
                    <p className="text-sm text-gray-600 mb-2">Koristite Google Keyword Planner ili SEMrush</p>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-xs font-mono">
                        "nameštaj beograd" - 2,400 pretaga/mesec<br />
                        "solarni paneli srbija" - 1,800 pretaga/mesec<br />
                        "keramika novi sad" - 480 pretaga/mesec
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">2. Domain availability check:</h5>
                    <p className="text-sm text-gray-600 mb-2">Proverite dostupnost .rs i .com domena</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-100 p-2 rounded">
                        <p className="text-xs text-green-700">✅ Dostupni domeni</p>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>• vojvodinanameštaj.rs</li>
                          <li>• beogradsolarni.rs</li>
                          <li>• novisadkeramika.rs</li>
                        </ul>
                      </div>
                      <div className="bg-red-100 p-2 rounded">
                        <p className="text-xs text-red-700">❌ Zauzeti domeni</p>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>• beogradnameštaj.rs</li>
                          <li>• srbijasolar.rs</li>
                          <li>• nameštajnovisad.rs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 4: Funnel strategija</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Kako mikrosajtovi usmeravaju na glavni brand</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Tok korisnika:</h5>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="bg-blue-100 px-2 py-1 rounded">1. Google pretraga</span>
                          <ArrowRight className="w-4 h-4" />
                          <span className="bg-green-100 px-2 py-1 rounded">2. Mikrosajt landing</span>
                          <ArrowRight className="w-4 h-4" />
                          <span className="bg-purple-100 px-2 py-1 rounded">3. Product showcase</span>
                          <ArrowRight className="w-4 h-4" />
                          <span className="bg-orange-100 px-2 py-1 rounded">4. Glavni sajt checkout</span>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Ključni elementi mikrosajta:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Hero sekcija:</strong> Fokusirana na specifičan proizvod/lokaciju</li>
                          <li>• <strong>Galerija:</strong> High-quality fotografije proizvoda</li>
                          <li>• <strong>Testimonials:</strong> Lokalne reference i recenzije</li>
                          <li>• <strong>CTA:</strong> "Poručite sada" dugme koje vodi na glavni sajt</li>
                          <li>• <strong>Contact:</strong> Lokalni broj telefona i informacije</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Monetizacija */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-8 h-8 mr-3 text-green-600" />
                Monetizacija strategije
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                E-commerce mikrosajtovi omogućavaju nekoliko različitih modela zarade. Možete birati između direktne prodaje, partnerstva sa proizvođačima, ili pak lead generation modela.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Model 1: Direktni dropshipping sa proizvođačima</h3>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-4">Partnership struktura:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-3">Vaše odgovornosti:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Kreiranje i održavanje mikrosajtova</li>
                      <li>• Digital marketing i SEO</li>
                      <li>• Lead generation i customer acquisition</li>
                      <li>• Order management i customer service</li>
                      <li>• Payment processing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-3">Proizvođač odgovornosti:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Proizvodnja i kvalitet proizvoda</li>
                      <li>• Inventory management</li>
                      <li>• Packaging i shipping</li>
                      <li>• Post-sale support i garancija</li>
                      <li>• Product photography za marketing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded border-l-4 border-blue-500">
                  <h5 className="font-medium text-blue-700 mb-2">Profit sharing model:</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p><strong>Vi:</strong> 25-35%</p>
                      <p className="text-xs text-gray-600">Marketing, sales, customer service</p>
                    </div>
                    <div>
                      <p><strong>Proizvođač:</strong> 60-70%</p>
                      <p className="text-xs text-gray-600">Materials, production, shipping</p>
                    </div>
                    <div>
                      <p><strong>Platform fee:</strong> 3-5%</p>
                      <p className="text-xs text-gray-600">Payment processing, hosting</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Model 2: Lead generation za lokalne proizvođače</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Phone className="w-5 h-5 mr-2" />
                      Per-lead pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-green-700">Cenovnik po kategorijama:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Nameštaj: €50-€200 po lead-u</li>
                          <li>• Solarni sistemi: €100-€500 po lead-u</li>
                          <li>• Keramika/umetnost: €30-€150 po lead-u</li>
                          <li>• Građevinski materijali: €80-€300 po lead-u</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <p className="text-xs text-green-700">
                          <strong>Prednosti:</strong> Predvidiv prihod, nema inventory risk
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Percent className="w-5 h-5 mr-2" />
                      Commission-based
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-orange-700">Procenat od finalne prodaje:</h5>
                        <ul className="text-sm space-y-1 text-orange-600">
                          <li>• 8-15% za high-value items (&gt;€5,000)</li>
                          <li>• 15-25% za mid-range items (€1,000-€5,000)</li>
                          <li>• 25-35% za lower-price items (&lt;€1,000)</li>
                          <li>• Bonus za volume (&gt;10 sales/mesec)</li>
                        </ul>
                      </div>
                      <div className="bg-orange-100 p-2 rounded">
                        <p className="text-xs text-orange-700">
                          <strong>Prednosti:</strong> Veći potencijal zarade, dugoročno partnerstvo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Model 3: Private label proizvodi</h3>

              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-purple-800 mb-4">Kreiranje vlastitog brenda:</h4>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Investiciona strategija:</h5>
                      <ul className="text-sm space-y-1 text-purple-600">
                        <li>• Partnerirate sa proizvođačem ekskluzivno</li>
                        <li>• Kreirate vlastiti brand i dizajn</li>
                        <li>• Kontrolišete kvalitet i specifikacije</li>
                        <li>• Veća margin (40-60%)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Primer implementacije:</h5>
                      <ul className="text-sm space-y-1 text-purple-600">
                        <li>• Brand: "Vojvodina Premium Furniture"</li>
                        <li>• Proizvođač: Lokalni stolar iz Novog Sada</li>
                        <li>• Investicija: €10,000-€50,000</li>
                        <li>• ROI period: 12-18 meseci</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-purple-700 mb-2">Finansijska projekcija (godišnje):</h5>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p><strong>Prodaja:</strong> €200,000</p>
                      </div>
                      <div>
                        <p><strong>COGS:</strong> €120,000 (60%)</p>
                      </div>
                      <div>
                        <p><strong>Marketing:</strong> €30,000 (15%)</p>
                      </div>
                      <div>
                        <p><strong>Profit:</strong> €50,000 (25%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Automatizacija */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-600" />
                Automatizacija i skaliranje
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Ključ uspešnog skaliranja e-commerce mikrosajtova je automatizacija procesa. Od lead generation-a do customer service-a, sve može biti automatizirano da radi 24/7.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI customer service sistem</h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-4">High-ticket AI agent karakteristike:</h4>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Capabilities za high-ticket prodaju:</h5>
                      <ul className="text-sm space-y-1 text-blue-600">
                        <li>• Detaljno konsultovanje o proizvodu</li>
                        <li>• Scheduling za in-person demos</li>
                        <li>• Price customization diskusije</li>
                        <li>• Financing options objašnjavanje</li>
                        <li>• Follow-up sekvence</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Integration sa sistemima:</h5>
                      <ul className="text-sm space-y-1 text-blue-600">
                        <li>• CRM integration (HubSpot, Pipedrive)</li>
                        <li>• Calendar booking (Calendly)</li>
                        <li>• Email marketing (ActiveCampaign)</li>
                        <li>• SMS sequences (Twilio)</li>
                        <li>• Payment processing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h5 className="font-medium text-blue-700 mb-2">Primer AI konverzacije za nameštaj:</h5>
                    <div className="text-sm space-y-1 text-gray-600">
                      <p><strong>AI:</strong> "Dobro jutro! Vidim da ste zainteresovani za naš nameštaj po meri. Kakav prostor planirate da ukrašavate?"</p>
                      <p><strong>Kupac:</strong> "Trebam kompletnu dnevnu sobu, oko 25m2"</p>
                      <p><strong>AI:</strong> "Odličó! Za dnevnu sobu od 25m2 imamo nekoliko opcija. Da li preferirate moderan ili rustičan stil? I kakav je vaš budžet range?"</p>
                      <p><strong>Kupac:</strong> "Moderan, budžet oko 3000-4000€"</p>
                      <p><strong>AI:</strong> "Savršeno! U tom range-u mogu da vam pokažem naše premium kolekcije. Želite li da zakažemo konsultacije da vidite uzorke? Dostupan sam sutra u 14h ili preksutra u 10h."</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Lead scoring i nurturing</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Target className="w-5 h-5 mr-2" />
                      Lead scoring kriterijumi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">High-intent signals (80-100 bodova):</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Zahtev za price quote</li>
                          <li>• Downloading product catalogs</li>
                          <li>• Pitanja o customization</li>
                          <li>• Financing options inquiries</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Medium-intent (40-79 bodova):</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Multiple page visits</li>
                          <li>• Video tutorials gledanje</li>
                          <li>• Email subscribe</li>
                          <li>• Social media engagement</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Repeat className="w-5 h-5 mr-2" />
                      Automated nurturing sequences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">High-ticket nurturing timeline:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• <strong>Dan 0:</strong> Welcome email + product showcase</li>
                          <li>• <strong>Dan 2:</strong> Educational content + customer stories</li>
                          <li>• <strong>Dan 5:</strong> Special offer + scheduling CTA</li>
                          <li>• <strong>Dan 10:</strong> FAQ addressing objections</li>
                          <li>• <strong>Dan 15:</strong> Urgency-based final offer</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="text-xs text-blue-700">
                          <strong>Napomena:</strong> High-ticket sales cycle je 2-12 nedelja
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Order management automatizacija</h3>

              <div className="bg-orange-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-orange-800 mb-4">End-to-end workflow:</h4>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-3 rounded border text-center">
                      <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <p className="text-sm font-medium">Order received</p>
                      <p className="text-xs text-gray-600">Automatski email konfirmacija</p>
                    </div>
                    <div className="bg-white p-3 rounded border text-center">
                      <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <p className="text-sm font-medium">Producer notification</p>
                      <p className="text-xs text-gray-600">SMS + email sa detaljima</p>
                    </div>
                    <div className="bg-white p-3 rounded border text-center">
                      <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <p className="text-sm font-medium">Production tracking</p>
                      <p className="text-xs text-gray-600">Timeline updates kupcu</p>
                    </div>
                    <div className="bg-white p-3 rounded border text-center">
                      <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <p className="text-sm font-medium">Delivery & feedback</p>
                      <p className="text-xs text-gray-600">Review request automation</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-orange-700 mb-2">Alati za automatizaciju:</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p><strong>Zapier/Make.com:</strong></p>
                        <p className="text-xs text-gray-600">Workflow automation između aplikacija</p>
                      </div>
                      <div>
                        <p><strong>Shopify/WooCommerce:</strong></p>
                        <p className="text-xs text-gray-600">E-commerce infrastruktura</p>
                      </div>
                      <div>
                        <p><strong>Custom dashboard:</strong></p>
                        <p className="text-xs text-gray-600">Real-time order tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Analitika i optimizacija */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-indigo-600" />
                Analitika i optimizacija performansi
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                U high-ticket e-commerce-u, svaki lead i svaka konverzija su izuzetno vredni. Zato je kritično da pratite prave metrike i optimizujete na osnovu podataka.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key performance indicators (KPIs)</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Sales metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Average Order Value (AOV):</strong> €2,500-€8,000</li>
                      <li>• <strong>Conversion Rate:</strong> 2-8% (vs 1-3% standardno)</li>
                      <li>• <strong>Sales Cycle Length:</strong> 14-90 dana</li>
                      <li>• <strong>Customer Lifetime Value:</strong> €5,000-€25,000</li>
                      <li>• <strong>Profit Margin:</strong> 25-60%</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <MousePointer className="w-5 h-5 mr-2" />
                      Marketing metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Cost Per Lead (CPL):</strong> €50-€200</li>
                      <li>• <strong>Cost Per Acquisition (CPA):</strong> €300-€1,500</li>
                      <li>• <strong>Return on Ad Spend (ROAS):</strong> 3:1 do 15:1</li>
                      <li>• <strong>Lead to Sale Conversion:</strong> 15-40%</li>
                      <li>• <strong>Email Open Rate:</strong> 25-45%</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Eye className="w-5 h-5 mr-2" />
                      Traffic metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>Organic CTR:</strong> 15-25% (vs 2-5% standardno)</li>
                      <li>• <strong>Bounce Rate:</strong> 30-50%</li>
                      <li>• <strong>Session Duration:</strong> 3-8 minuta</li>
                      <li>• <strong>Pages per Session:</strong> 4-12</li>
                      <li>• <strong>Return Visitor Rate:</strong> 40-70%</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Profitability metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Gross Profit Margin:</strong> 40-60%</li>
                      <li>• <strong>Net Profit Margin:</strong> 15-35%</li>
                      <li>• <strong>Payback Period:</strong> 2-8 meseci</li>
                      <li>• <strong>Revenue per Visitor:</strong> €25-€150</li>
                      <li>• <strong>Monthly Recurring Revenue:</strong> €10,000-€100,000</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">A/B testing strategije za high-ticket</h3>

              <div className="bg-white p-6 rounded-xl mb-8 border border-gray-200">
                <h4 className="font-semibold text-yellow-800 mb-4">Ključni elementi za testiranje:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-yellow-700 mb-3">Landing page elementi:</h5>
                    <ul className="text-sm space-y-1 text-yellow-600">
                      <li>• <strong>Headlines:</strong> Value proposition clarity</li>
                      <li>• <strong>Hero images:</strong> Product showcase vs lifestyle</li>
                      <li>• <strong>CTA buttons:</strong> "Zakaži konsultacije" vs "Zatraži ponudu"</li>
                      <li>• <strong>Social proof:</strong> Testimonials vs case studies</li>
                      <li>• <strong>Price display:</strong> Transparent vs contact-based</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-yellow-700 mb-3">Email campaign elementi:</h5>
                    <ul className="text-sm space-y-1 text-yellow-600">
                      <li>• <strong>Subject lines:</strong> Direct vs curiosity-based</li>
                      <li>• <strong>Send timing:</strong> Weekday vs weekend</li>
                      <li>• <strong>Content length:</strong> Short vs detailed</li>
                      <li>• <strong>Personalization:</strong> Name vs behavior-based</li>
                      <li>• <strong>Frequency:</strong> Daily vs weekly sequences</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-white p-4 rounded border">
                  <h5 className="font-medium text-yellow-700 mb-2">Testing methodology:</h5>
                  <div className="text-sm text-yellow-600">
                    <p><strong>Sample size:</strong> Minimum 100 visitors/emails per variant</p>
                    <p><strong>Duration:</strong> 2-4 nedelje (zbog dužeg sales cycle-a)</p>
                    <p><strong>Significance:</strong> 95% confidence level</p>
                    <p><strong>Primary metric:</strong> Qualified leads, ne samo clicks</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">ROI tracking po mikrosajtu</h3>

              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Individual mikrosite performance dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Mikrosajt</th>
                            <th className="text-left py-2">Monthly Traffic</th>
                            <th className="text-left py-2">Leads</th>
                            <th className="text-left py-2">Sales</th>
                            <th className="text-left py-2">Revenue</th>
                            <th className="text-left py-2">ROI</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">beogradnameštaj.rs</td>
                            <td className="py-2">2,400</td>
                            <td className="py-2">24</td>
                            <td className="py-2">6</td>
                            <td className="py-2">€18,000</td>
                            <td className="py-2 text-green-600">450%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">vojvodinasolar.rs</td>
                            <td className="py-2">1,800</td>
                            <td className="py-2">18</td>
                            <td className="py-2">3</td>
                            <td className="py-2">€21,000</td>
                            <td className="py-2 text-green-600">525%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">novisadkeramika.rs</td>
                            <td className="py-2">960</td>
                            <td className="py-2">12</td>
                            <td className="py-2">4</td>
                            <td className="py-2">€6,000</td>
                            <td className="py-2 text-green-600">200%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Buducnost strategije */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                Budućnost e-commerce mikrosajtova
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                E-commerce mikrosajtovi predstavljaju tek početak evolucije online prodaje. Sa napretkom AI tehnologija i promenama u potrošačkom ponašanju, ova strategija će postati još efikasnija.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Zap className="w-5 h-5 mr-2" />
                      AI personalizacija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>Dynamic content:</strong> Sadržaj prilagođen lokaciji korisnika</li>
                      <li>• <strong>Behavioral AI:</strong> Predviđanje potreba na osnovu browsing patterns</li>
                      <li>• <strong>Voice commerce:</strong> "Alexa, poruči nameštaj za dnevnu sobu"</li>
                      <li>• <strong>Visual AI:</strong> Upload fotografije prostora za personalizovane preporuke</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-gradient-to-br from-green-50 to-teal-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Globe className="w-5 h-5 mr-2" />
                      Blockchain i transparentnost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Supply chain tracking:</strong> Od proizvođača do kupca</li>
                      <li>• <strong>Quality verification:</strong> Blockchain certificates</li>
                      <li>• <strong>Smart contracts:</strong> Automatski payment release</li>
                      <li>• <strong>NFT certificates:</strong> Za unikatne umetničke proizvode</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Eye className="w-5 h-5 mr-2" />
                      AR/VR integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>Virtual showrooms:</strong> 3D pregled proizvoda</li>
                      <li>• <strong>AR placement:</strong> Kako bi nameštaj izgledao u vašem domu</li>
                      <li>• <strong>VR consultations:</strong> Virtuelni sastanci sa proizvođačima</li>
                      <li>• <strong>Interactive catalogs:</strong> Immersive product experience</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Users className="w-5 h-5 mr-2" />
                      Community commerce
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>Local maker networks:</strong> Direktna povezanost sa zanatlijama</li>
                      <li>• <strong>Social proof integration:</strong> Real-time customer experiences</li>
                      <li>• <strong>Group buying:</strong> Kolektivne narudžbe za bolje cene</li>
                      <li>• <strong>Maker stories:</strong> Transparency o proizvodnom procesu</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border-l-4 border-indigo-400">
                <h4 className="font-semibold text-indigo-800 mb-4">Strategija za narednih 3-5 godina:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Tehnološke investicije:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• AI customer service platforms</li>
                      <li>• AR/VR showcase technologies</li>
                      <li>• Blockchain verification systems</li>
                      <li>• Advanced analytics i machine learning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Business development:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Expanding u regional markets</li>
                      <li>• Private label development</li>
                      <li>• Vertical integration opportunities</li>
                      <li>• International partnership building</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Zaključak */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-gold-600" />
                Zaključak i sledeći koraci
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8 border-l-4 border-green-500">
                <p className="text-lg text-gray-700 mb-6">
                  E-commerce mikrosajtovi kombinovani sa high-ticket dropshipping strategijom predstavljaju revoluciju u online prodaji. Umesto borbe sa velikim brendovima na jeftinim proizvodima, fokusiraćete se na premium niše gde je konkurencija manja, a profit značajno veći.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  Srbija je idealno mesto za implementaciju ove strategije. Bogata tradicija zanatstva, kvalitetni lokalni proizvođači i još uvek mala digitalna konkurencija čine perfect storm za uspeh. Jedan dobro implementiran mikrosajt može da generiše više prihoda nego što mnogi zarađuju u godini dana.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Vaš akcioni plan za narednih 90 dana</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-center text-green-800">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      Dani 1-30
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-green-700 mb-2">Research i planiranje:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Identifikacija niše i proizvođača</li>
                      <li>• Keyword research za EMD domene</li>
                      <li>• Konkurentska analiza</li>
                      <li>• Registracija 5-10 domena</li>
                      <li>• Initial contact sa proizvođačima</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-center text-blue-800">
                      <Target className="w-8 h-8 mx-auto mb-2" />
                      Dani 31-60
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-blue-700 mb-2">Development i setup:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Kreiranje glavnog e-commerce sajta</li>
                      <li>• Development prva 3 mikrosajta</li>
                      <li>• Partnership agreements</li>
                      <li>• Payment processing setup</li>
                      <li>• Basic SEO i content creation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-center text-purple-800">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                      Dani 61-90
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-purple-700 mb-2">Launch i optimizacija:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• Go-live sa prvim mikrosajtovima</li>
                      <li>• AI customer service implementation</li>
                      <li>• Paid advertising campaigns</li>
                      <li>• Performance tracking i optimization</li>
                      <li>• Scaling na dodatne mikrosajtove</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Ključni faktori za uspeh</h4>
                    <ul className="text-yellow-700 space-y-2">
                      <li>• <strong>Fokus na kvalitet:</strong> High-ticket kupci očekuju premium iskustvo</li>
                      <li>• <strong>Lokalni partnerships:</strong> Najbolji proizvodi dolaze od lokalnih majstora</li>
                      <li>• <strong>Patient approach:</strong> High-ticket sales cycle je duži, budite strpljivi</li>
                      <li>• <strong>Continuous optimization:</strong> A/B testirajte sve i optimizujte na osnovu podataka</li>
                      <li>• <strong>Scale gradually:</strong> Počnite sa 3-5 mikrosajtova pa dodajte</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Spremni ste za high-ticket e-commerce revoluciju?</h4>
                <p className="text-lg mb-6">
                  Sa strategijom e-commerce mikrosajtova možete da transformišete lokalnu privredu i ostvarite profits koji prevazilaze tradicionalne e-commerce modele.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Započnite strategiju
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-100 hover:text-orange-600">
                    <Share2 className="w-4 h-4 mr-2" />
                    Podelite članak
                  </Button>
                </div>
              </div>
            </section>

            {/* Quiz sekcija */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Testirajte vaše znanje!</h3>
                <p className="text-gray-600">Proverite koliko ste razumeli e-commerce mikrosajtove strategiju</p>
              </div>

              <Quiz questions={quizQuestions} />
            </div>

            {/* CTA sekcija */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Trebate pomoć sa implementacijom e-commerce mikrosajtova?</h3>
              <p className="text-lg mb-6">
                Naš tim može da vam pomogne da identifikujete najbolje proizvođače, kreirate mikrosajtove i postavite automatizovane sisteme koji donose high-ticket sales 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Zakažite strategiju call
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-black hover:bg-gray-100 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Pošaljite upit
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle26;