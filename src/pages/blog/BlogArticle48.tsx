import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Zap, TrendingUp, DollarSign, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle48 = () => {
  return (
    <article className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad na blog
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">AI Tools</Badge>
              <Badge variant="outline">Automatizacija</Badge>
              <Badge variant="outline">Produktivnost</Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              AI alati za male biznise 2025: Kako uštedeći 15 sati nedeljno i povećati profit
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Kompletni vodič kroz AI alate koji mogu da transformišu vaš mali biznis. Od ChatGPT-a do Canva AI - kako da automatizujete zadatke i oslobodite vreme za važne stvari.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>23. septembar 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min čitanja</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80"
              alt="AI Tools for Small Business"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Zašto AI alati nisu više luksuz već neophodnost?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>U 2025. godini,</strong> mali biznisi koji ne koriste AI alate gube u prosku 15-20 sati nedeljno
                na repetitivne zadatke i zaostaju za konkurencijom za 40-60%. AI nije futuristička tehnologija -
                to je svakodnevna realnost koja može da poveća vašu produktivnost za 300% uz minimalne troškove.
              </p>
            </div>

            {/* Time Savings Calculator */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kalkulator uštede vremena</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">15h</div>
                  <div className="text-gray-600 text-sm">Nedeljno uštede</div>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">780h</div>
                  <div className="text-gray-600 text-sm">Godišnje uštede</div>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">€3,900</div>
                  <div className="text-gray-600 text-sm">Vrednost vremena</div>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-100">
                  <div className="text-3xl font-bold text-amber-600 mb-2">300%</div>
                  <div className="text-gray-600 text-sm">ROI povećanje</div>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Gde gubite vreme bez AI alata:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pisanje email-ova: 3h nedeljno</li>
                    <li>• Kreiranje social media postova: 4h nedeljno</li>
                    <li>• Obrada slika i grafika: 2h nedeljno</li>
                    <li>• Istraživanje konkurencije: 2h nedeljno</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pisanje blog članaka: 6h nedeljno</li>
                    <li>• Customer support: 3h nedeljno</li>
                    <li>• Analiza podataka: 2h nedeljno</li>
                    <li>• Administrativni poslovi: 3h nedeljno</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Essential AI Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">10 najvažnijih AI alata za male biznise</h2>

              <div className="space-y-8">
                {/* ChatGPT */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    <div className="flex items-center gap-3">
                      <Bot className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-xl">1. ChatGPT / Claude</CardTitle>
                        <CardDescription className="text-green-100">Univerzalni AI asistent</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Kako koristiti:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Pisanje email-ova i odgovora klijentima</li>
                          <li>• Kreiranje social media content-a</li>
                          <li>• Brainstorming poslovnih ideja</li>
                          <li>• Pisanje blog članaka i web content-a</li>
                          <li>• Prevodjenje na razne jezike</li>
                          <li>• Izrada business planova</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Konkretni primeri:</h4>
                        <div className="bg-gray-50 p-4 rounded text-sm">
                          <div className="mb-2"><strong>Prompt:</strong></div>
                          <div className="italic text-gray-600 mb-3">"Napiši profesionalan email za klijenta koji kasni sa plaćanjem, ton treba da bude ljubazan ali firm."</div>

                          <div className="mb-2"><strong>Ušteda vremena:</strong></div>
                          <div>15 min → 2 min = 87% uštede</div>
                        </div>

                        <div className="mt-4 text-sm">
                          <strong>Cena:</strong> $20/mesec | <strong>ROI:</strong> 2,000%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Canva AI */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    <div className="flex items-center gap-3">
                      <Zap className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-xl">2. Canva AI</CardTitle>
                        <CardDescription className="text-purple-100">Kreiranje grafika i dizajna</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">AI funkcije:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Magic Design - instant logos i brošure</li>
                          <li>• Background Remover - uklanjanje pozadine</li>
                          <li>• Text to Image - kreiranje slika iz teksta</li>
                          <li>• Magic Resize - prilagođavanje za sve platforme</li>
                          <li>• Beat Sync - video editovanje u ritmu</li>
                          <li>• Brand Kit AI - konsistentnost brenda</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Praktični use cases:</h4>
                        <div className="space-y-3 text-sm">
                          <div className="bg-purple-50 p-3 rounded">
                            <strong>Instagram post:</strong> 30 min → 3 min
                          </div>
                          <div className="bg-pink-50 p-3 rounded">
                            <strong>Logo design:</strong> 5 sati → 20 min
                          </div>
                          <div className="bg-purple-50 p-3 rounded">
                            <strong>Flyer design:</strong> 2 sata → 15 min
                          </div>
                        </div>

                        <div className="mt-4 text-sm">
                          <strong>Cena:</strong> $15/mesec | <strong>ROI:</strong> 1,500%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Grammarly */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-xl">3. Grammarly AI</CardTitle>
                        <CardDescription className="text-blue-100">Pisanje i editovanje teksta</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">AI mogućnosti:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Grammar i spelling check</li>
                          <li>• Tone detection i suggestions</li>
                          <li>• Clarity i conciseness improvements</li>
                          <li>• Plagiarism detection</li>
                          <li>• Writing style adaptation</li>
                          <li>• Email template generation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Business impact:</h4>
                        <div className="space-y-2 text-sm">
                          <div>📧 <strong>Profesionalni email-ovi</strong> - 90% manje grešaka</div>
                          <div>📝 <strong>Proposals i contracts</strong> - 50% brže pisanje</div>
                          <div>🌐 <strong>Website copy</strong> - bolja konverzija</div>
                          <div>📱 <strong>Social media</strong> - konzistentan brand voice</div>
                        </div>

                        <div className="mt-4 text-sm">
                          <strong>Cena:</strong> $12/mesec | <strong>ROI:</strong> 800%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Tools List */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Brza lista ostalih AI alata</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">Customer Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <div>
                      <strong>4. Intercom AI Chatbot</strong>
                      <div className="text-gray-600">Automatski odgovori na 80% customer pitanja</div>
                      <div className="text-xs text-gray-500">$39/mesec • ROI: 400%</div>
                    </div>

                    <div>
                      <strong>5. Tidio AI</strong>
                      <div className="text-gray-600">Live chat sa AI suggestions</div>
                      <div className="text-xs text-gray-500">$18/mesec • ROI: 300%</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">Social Media</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <div>
                      <strong>6. Buffer AI Assistant</strong>
                      <div className="text-gray-600">AI-generated captions i best posting times</div>
                      <div className="text-xs text-gray-500">$6/mesec • ROI: 500%</div>
                    </div>

                    <div>
                      <strong>7. Hootsuite AI</strong>
                      <div className="text-gray-600">Content scheduling i analytics insights</div>
                      <div className="text-xs text-gray-500">$49/mesec • ROI: 250%</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">Email Marketing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <div>
                      <strong>8. Mailchimp AI</strong>
                      <div className="text-gray-600">Smart segmentation i subject line optimization</div>
                      <div className="text-xs text-gray-500">$10/mesec • ROI: 600%</div>
                    </div>

                    <div>
                      <strong>9. ConvertKit AI</strong>
                      <div className="text-gray-600">Automated email sequences</div>
                      <div className="text-xs text-gray-500">$29/mesec • ROI: 400%</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-600">Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <div>
                      <strong>10. Google Analytics AI</strong>
                      <div className="text-gray-600">Automated insights i predictions</div>
                      <div className="text-xs text-gray-500">Besplatno • ROI: ∞</div>
                    </div>

                    <div>
                      <strong>Bonus: Zapier AI</strong>
                      <div className="text-gray-600">Workflow automation između apps</div>
                      <div className="text-xs text-gray-500">$20/mesec • ROI: 800%</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Implementation Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kako implementirati AI u vaš biznis</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-gray-800 mb-3">Korak 1: Identifikujte repetitivne zadatke (Dan 1)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>• Napravite listu svih zadataka koje radite tokom nedelje</div>
                    <div>• Označite one koji se ponavljaju svaki dan/nedelju</div>
                    <div>• Izračunajte koliko vremena trošite na svaki</div>
                    <div>• Prioritizujte na osnovu uštede vremena</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-800 mb-3">Korak 2: Počnite sa osnovama (Dan 2-7)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>• Registrujte se za ChatGPT Plus ($20/mesec)</div>
                    <div>• Instalirajte Grammarly extension</div>
                    <div>• Kreiranje Canva Pro account</div>
                    <div>• Napravite 5 najčešćih prompts za ChatGPT</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-800 mb-3">Korak 3: Automatizujte komunikaciju (Dan 8-14)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>• Setupujte chatbot na website-u</div>
                    <div>• Kreirajte email templates sa AI</div>
                    <div>• Automatizujte social media posting</div>
                    <div>• Implementirajte customer support AI</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="font-semibold text-gray-800 mb-3">Korak 4: Optimizujte i skalirajte (Dan 15-30)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>• Analizirajte rezultate i ROI</div>
                    <div>• Fine-tunujte AI prompt-ove</div>
                    <div>• Dodajte naprednije AI alate</div>
                    <div>• Obučite tim za korišćenje AI-a</div>
                  </div>
                </div>
              </div>
            </section>

            {/* ROI Calculator */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">ROI kalkulacija za AI alate</h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4">Mesečni troškovi vs uštede:</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">💰 Troškovi AI alata:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ChatGPT Plus</span>
                        <span>$20</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Canva Pro</span>
                        <span>$15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Grammarly</span>
                        <span>$12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Chatbot</span>
                        <span>$25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Social Media AI</span>
                        <span>$20</span>
                      </div>
                      <div className="border-t pt-2 font-semibold flex justify-between">
                        <span>UKUPNO:</span>
                        <span>$92/mesec</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">⏰ Vrednost ušteđenog vremena:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>15h nedeljno × $25/h</span>
                        <span>$375</span>
                      </div>
                      <div className="flex justify-between">
                        <span>60h mesečno × $25/h</span>
                        <span>$1,500</span>
                      </div>
                      <div className="border-t pt-2 font-semibold text-green-600 flex justify-between">
                        <span>NETO DOBIT:</span>
                        <span>$1,408/mesec</span>
                      </div>
                      <div className="text-lg font-bold text-green-600 flex justify-between">
                        <span>ROI:</span>
                        <span>1,530%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5 najčešćih grešaka pri uvođenju AI-a</h2>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Greška 1: Očekivanje instant rezultata</h4>
                  <p className="text-sm text-red-700">AI alati trebaju 2-4 nedelje za optimizaciju. Budite strpljivi i testirajte različite pristupe.</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">❌ Greška 2: Pokušaj automatizacije svega odjednom</h4>
                  <p className="text-sm text-orange-700">Počnite sa 1-2 alata, majstorski ih savladajte, pa tek onda dodajte nove.</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">❌ Greška 3: Zanemarivanje kvaliteta zbog brzine</h4>
                  <p className="text-sm text-yellow-700">AI je alat za poboljšanje, ne zamenu ljudske kreativnosti. Uvek proverite i editujte output.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">❌ Greška 4: Neobučavanje tima</h4>
                  <p className="text-sm text-blue-700">Investirajte vreme u obuku zaposlenih. AI alati su efikasniji kada ih ceo tim koristi.</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">❌ Greška 5: Ignorisanje podataka i analitike</h4>
                  <p className="text-sm text-purple-700">Pratite metrije, A/B testirajte i kontinuirano optimizujte vaš AI workflow.</p>
                </div>
              </div>
            </section>

            {/* Action Plan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">30-dnevni action plan</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <h3 className="font-semibold text-blue-600 mb-3">Nedelja 1</h3>
                  <ul className="text-xs space-y-1">
                    <li>• Audit trenutnih procesa</li>
                    <li>• Registracija ChatGPT Plus</li>
                    <li>• Osnovni prompts setup</li>
                    <li>• Prvi AI email templates</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold text-green-600 mb-3">Nedelja 2</h3>
                  <ul className="text-xs space-y-1">
                    <li>• Canva AI dizajni</li>
                    <li>• Social media automation</li>
                    <li>• Grammarly integration</li>
                    <li>• Content calendar AI</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold text-purple-600 mb-3">Nedelja 3</h3>
                  <ul className="text-xs space-y-1">
                    <li>• Chatbot implementacija</li>
                    <li>• Customer support AI</li>
                    <li>• Email marketing AI</li>
                    <li>• Analytics automation</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold text-amber-600 mb-3">Nedelja 4</h3>
                  <ul className="text-xs space-y-1">
                    <li>• ROI analiza</li>
                    <li>• Workflow optimizacija</li>
                    <li>• Tim training</li>
                    <li>• Skaling strategija</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Ključni zaključci</h2>
                <ul className="space-y-2 text-sm">
                  <li>✅ AI alati mogu da uštedie 15+ sati nedeljno za prosečan mali biznis</li>
                  <li>✅ ROI od 1,530% moguć uz pravilnu implementaciju</li>
                  <li>✅ Počnite sa ChatGPT, Canva AI i Grammarly</li>
                  <li>✅ Implementacija treba 30 dana za optimalne rezultate</li>
                  <li>✅ Fokus na automatizaciju repetitivnih zadataka</li>
                </ul>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm">
                    <strong>Poruči Sajt</strong> implementira AI alate u vaš biznis workflow.
                    Kontaktirajte nas za personalizovanu AI strategiju i setup.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </article>
  );
};

export default BlogArticle48;