import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Target, TrendingUp, Users, Globe, CheckCircle, Star, Clock, Eye, BarChart, CreditCard, Package, Smartphone, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Quiz } from "@/components/Quiz";

const BlogArticle6 = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-sm font-medium">E-COMMERCE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              E-commerce sajt - Kako pokrenuti uspešnu online prodavnicu
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kompletan vodič kroz kreiranje profitabilne online prodavnice. Od izbora platforme do marketing strategija koje garantuju uspeh.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>18 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>Poslednje ažuriranje: Januar 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                E-commerce revolucija je u punom jeku. Dok su fizičke prodavnice bile primorane da zatvaraju tokom pandemije, online prodavnice su doživele eksponencijalni rast. U Srbiji je e-commerce tržište naraslo za preko 40% u poslednje tri godine, a procenjuje se da će do 2027. dostići vrednost od 2.8 milijardi evra.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Da li ste spremni da iskoristite ovu priliku? Kreiranje uspešne online prodavnice nije samo tehnički zadatak - to je kombinacija pravog planiranja, tehnologije, marketinga i korisničkog iskustva. U ovom detaljnom vodiču ćemo pokriti sve što trebate da znate da pokrenete profitabilnu e-commerce business.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Od izbora prave platforme do optimizacije konverzija, od logistike do customer service - naučićete sve praktične korake koje uspešni e-commerce biznisi koriste da generiše milione evra godišnjeg prihoda.
              </p>
            </div>

            {/* E-commerce Statistics */}
            <Card className="mb-12 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-800">
                  <BarChart className="w-6 h-6" />
                  <span>E-commerce tržište u brojkama</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-800 font-medium">
                  Ove statistike pokazuju ogroman potencijal e-commerce biznisa:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-700">Globalne tendencije:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm">E-commerce će dostići $8.1 triliona do 2026</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm">15.5% godišnji rast e-commerce industrije</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 text-green-600" />
                        <span className="text-sm">72% online kupovina se dešava na mobilnim uređajima</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm">2.64 milijarde ljudi kupuju online</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-700">Srpsko tržište:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm">1.2 milijarde evra vrednost srpskog e-commerce-a</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm">40% rast tokom poslednje 3 godine</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm">68% Srba kupuje online</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Package className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Prosečna porudžbina: 4,200 dinara</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-green-800 text-sm">
                  Ovi brojevi jasno pokazuju da e-commerce nije trend - to je budućnost trgovine. Pitanje nije da li da pokrenete online prodavnicu, već kada i kako.
                </p>
              </CardContent>
            </Card>

            {/* Platform Selection */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Globe className="w-8 h-8 text-primary" />
                <span>Izbor prave e-commerce platforme</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Izbor platforme je jedna od najvažnijih odluka koju ćete doneti. Pogrešan izbor može da vas košta hiljade evra i mesece rada. Svaka platforma ima svoje prednosti i mane, a izbor zavisi od vašeg budžeta, tehničkih znanja, i vrsta proizvoda koje prodajete.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-700 flex items-center space-x-2">
                      <Package className="w-6 h-6" />
                      <span>Shopify</span>
                    </CardTitle>
                    <CardDescription>Najpopularnija SaaS e-commerce platforma</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">Prednosti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Jednostavno za početak - ne treba tehničko znanje</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Bogata app store sa 6000+ dodataka</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Odličan hosting i sigurnost</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Mobilno optimizovano</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600">Mane:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Mesečni troškovi ($29-299+)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Transaction fees (0.5-2%)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Ograničena customization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-blue-700 font-medium">Najbolje za: Početnice, mala i srednja preduzeća</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-purple-700 flex items-center space-x-2">
                      <Globe className="w-6 h-6" />
                      <span>WooCommerce</span>
                    </CardTitle>
                    <CardDescription>WordPress plugin za e-commerce</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">Prednosti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Potpuno besplatan (open source)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Potpuna kontrola nad sajt</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Hiljade besplatnih tema i pluginova</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>SEO friendly</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600">Mane:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Potrebno tehničko znanje</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Hosting, security, backup na vama</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Može biti sporo bez optimizacije</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-purple-700 font-medium">Najbolje za: Developere, custom rešenja, content marketing</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700 flex items-center space-x-2">
                      <CreditCard className="w-6 h-6" />
                      <span>Magento</span>
                    </CardTitle>
                    <CardDescription>Enterprise e-commerce rešenje</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">Prednosti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Napredne B2B funkcionalnosti</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Multi-store management</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Skalabilnost za velike prodavnice</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Napredna SEO alati</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600">Mane:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Kompleksno za setup i održavanje</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Skup hosting i development</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Potreban specijalizovan tim</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-orange-700 font-medium">Najbolje za: Velike kompanije, B2B, complex workflows</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-teal-200">
                  <CardHeader>
                    <CardTitle className="text-teal-700 flex items-center space-x-2">
                      <Smartphone className="w-6 h-6" />
                      <span>PrestaShop</span>
                    </CardTitle>
                    <CardDescription>Evropska open-source platforma</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">Prednosti:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Besplatna osnovna verzija</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Dobra podrška za EU standarde</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Intuitivan admin panel</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1" />
                          <span>Multi-language support</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-600">Mane:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Manje popularna od Shopify/WooCommerce</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Plaćeni dodaci mogu biti skupi</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                          <span>Potrebno tehničko znanje za customization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-teal-700 font-medium">Najbolje za: Evropske kompanije, multilingual prodavnice</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Naša preporuka za srpski tržište</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <h4 className="font-semibold text-green-600">Početnici</h4>
                      <p className="text-sm text-muted-foreground mb-2">Do 50 proizvoda</p>
                      <p className="font-medium">Shopify</p>
                      <p className="text-xs text-muted-foreground">Jednostavno, brzo, pouzdano</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <h4 className="font-semibold text-blue-600">Srednji nivo</h4>
                      <p className="text-sm text-muted-foreground mb-2">50-500 proizvoda</p>
                      <p className="font-medium">WooCommerce</p>
                      <p className="text-xs text-muted-foreground">Fleksibilno, ekonomično, SEO</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <h4 className="font-semibold text-purple-600">Enterprise</h4>
                      <p className="text-sm text-muted-foreground mb-2">500+ proizvoda</p>
                      <p className="font-medium">Magento/Custom</p>
                      <p className="text-xs text-muted-foreground">Skalabilno, napredne funkcije</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Strategy */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Package className="w-8 h-8 text-primary" />
                <span>Strategija proizvoda i cenova</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Tehnologija je samo alat - pravi uspeh e-commerce business-a leži u pravilnoj strategiji proizvoda. Šta prodavati, kako postaviti cene, kako prezentovati proizvode - ovo su odluke koje određuju da li ćete zarađivati ili gubiti novac.
              </p>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Istraživanje tržišta i proizvoda</CardTitle>
                  <CardDescription>
                    Kako pronaći profitabilne proizvode za srpsko tržište
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Trending kategorije u Srbiji</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg border">
                        <h5 className="font-medium text-sm">Elektronika</h5>
                        <p className="text-xs text-green-600">+45% rast</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg border">
                        <h5 className="font-medium text-sm">Moda</h5>
                        <p className="text-xs text-blue-600">+38% rast</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg border">
                        <h5 className="font-medium text-sm">Dom & bašta</h5>
                        <p className="text-xs text-purple-600">+52% rast</p>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg border">
                        <h5 className="font-medium text-sm">Sport</h5>
                        <p className="text-xs text-orange-600">+41% rast</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Kriterijumi za izbor proizvoda</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium text-green-600">Dobri indikatori:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Visoka marža (preko 50%)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Mala velika konkurencija</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Potrebna za problem solving</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Lako pakovanje i dostava</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-sm">Rastući trend potražnje</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-medium text-red-600">Crvene zastavice:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                            <span className="text-sm">Niska marža (ispod 30%)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                            <span className="text-sm">Prenapućena kategorija</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                            <span className="text-sm">Sezonski proizvod</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                            <span className="text-sm">Kompleksno za dostavu</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                            <span className="text-sm">Opadajući trend</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Pricing strategije za srpsko tržište</h4>
                    <p className="text-muted-foreground">
                      Srpski potrošači su ceno-svesni, ali su spremni da plate više za kvalitet i pogodnost. Ključ je u pravilnom balansu vrednosti i cene.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border-blue-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-blue-700">Competitive Pricing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-xs text-muted-foreground">Cene jednake ili niže od konkurencije</p>
                          <p className="text-xs"><strong>Prednosti:</strong> Brzo zadovoljstvo tržišta</p>
                          <p className="text-xs"><strong>Mane:</strong> Niska marža, cena wars</p>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-green-700">Value-Based Pricing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-xs text-muted-foreground">Cena based na percepiju value</p>
                          <p className="text-xs"><strong>Prednosti:</strong> Visoka marža, loyal customers</p>
                          <p className="text-xs"><strong>Mane:</strong> Sporiji growth, niche market</p>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm text-purple-700">Psychological Pricing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-xs text-muted-foreground">1999 RSD umesto 2000 RSD</p>
                          <p className="text-xs"><strong>Prednosti:</strong> Povećava konverzije</p>
                          <p className="text-xs"><strong>Mane:</strong> Može delovati jeftino</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Experience & Conversion */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Users className="w-8 h-8 text-primary" />
                <span>Optimizacija korisničkog iskustva za konverzije</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Prosečna konverzija e-commerce sajta je samo 2.86%. To znači da od 100 posetilaca, samo 3 će kupiti nešto. Ali najbolji e-commerce sajtovi postižu konverzije od 10-15%. Razlika leži u korisničkom iskustvu i optimizaciji conversion funnela.
              </p>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Kritični elementi za konverziju</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-blue-600">Homepage optimizacija</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1" />
                          <span className="text-sm">Jasna value proposition u prvih 5 sekundi</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1" />
                          <span className="text-sm">Featured proizvodi sa jasnim CTA</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1" />
                          <span className="text-sm">Social proof (testimonials, reviews)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1" />
                          <span className="text-sm">Trust badges (sigurnost, garancija)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-green-600">Product page optimizacija</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Kvalitetne slike sa zoom funkcijom</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Detaljni opisi sa benefit-based copy</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Customer reviews i Q&A sekcija</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Related/cross-sell proizvodi</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-purple-600">Checkout optimizacija</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-purple-500 mt-1" />
                          <span className="text-sm">Single-page ili progress indicator</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-purple-500 mt-1" />
                          <span className="text-sm">Multiple payment options</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-purple-500 mt-1" />
                          <span className="text-sm">Guest checkout opcija</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-purple-500 mt-1" />
                          <span className="text-sm">Security badges i SSL indicators</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-orange-600">Mobile optimizacija</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Smartphone className="w-4 h-4 text-orange-500 mt-1" />
                          <span className="text-sm">Touch-friendly design (44px+ dugmad)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Smartphone className="w-4 h-4 text-orange-500 mt-1" />
                          <span className="text-sm">Brza loading vremena (pod 3s)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Smartphone className="w-4 h-4 text-orange-500 mt-1" />
                          <span className="text-sm">Jednostavna navigacija (hamburger menu)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Smartphone className="w-4 h-4 text-orange-500 mt-1" />
                          <span className="text-sm">Auto-fill informacije za brži checkout</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800">A/B testing za conversion optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-yellow-800">
                    Nikad ne pogađajte šta radi - testirajte. A/B testing može povećati konverzije za 20-30% uz minimalne izmene.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm mb-2">CTA dugmad</h4>
                      <p className="text-xs text-muted-foreground">Testirajte boje, veličine, tekst, poziciju</p>
                      <p className="text-xs text-green-600 font-medium">Tipična poboljšanja: 15-25%</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm mb-2">Product images</h4>
                      <p className="text-xs text-muted-foreground">Lifestyle vs product shots, broj slika</p>
                      <p className="text-xs text-green-600 font-medium">Tipična poboljšanja: 10-20%</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-sm mb-2">Checkout flow</h4>
                      <p className="text-xs text-muted-foreground">Single vs multi-step, polja, payment options</p>
                      <p className="text-xs text-green-600 font-medium">Tipična poboljšanja: 20-35%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-primary text-primary-foreground mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gotovi da pokrenete uspešnu online prodavnicu?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Naš tim e-commerce stručnjaka će vam pomoći da pokrenete profitabilnu online business
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm opacity-90">
                  Kontaktirajte nas za besplatnu konsultaciju o vašoj e-commerce ideji i saznajte kako možemo pomoći.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" asChild size="lg">
                    <Link to="/kontakt">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Besplatna e-commerce konsultacija
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild size="lg" className="text-blue-800 hover:text-blue-900">
                    <Link to="/cene">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Pogledaj cene
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quiz Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Testirajte svoje znanje o e-commerce biznu</h2>
              <Quiz
                questions={[
                  {
                    question: "Za koliko procenata je naraslo e-commerce tržište u Srbiji u poslednje tri godine?",
                    options: [
                      "30%",
                      "35%",
                      "40%",
                      "45%"
                    ],
                    correct: 2,
                    explanation: "E-commerce tržište u Srbiji je naraslo za preko 40% u poslednje tri godine, što jasno pokazuje ogroman potencijal ovog sektora za budući rast."
                  },
                  {
                    question: "Koja je prosečna konverzija e-commerce sajtova?",
                    options: [
                      "1.86%",
                      "2.86%",
                      "3.86%",
                      "4.86%"
                    ],
                    correct: 1,
                    explanation: "Prosečna konverzija e-commerce sajta je samo 2.86%, što znači da od 100 posetilaca, samo 3 će kupiti nešto. Najbolji sajtovi postižu 10-15% konverziju."
                  },
                  {
                    question: "Koliko posto online kupovina se dešava na mobilnim uređajima?",
                    options: [
                      "68%",
                      "70%",
                      "72%",
                      "74%"
                    ],
                    correct: 2,
                    explanation: "72% online kupovina se dešava na mobilnim uređajima, što naglašava kritičnost mobilne optimizacije za e-commerce uspeh."
                  },
                  {
                    question: "Koja je preporučena minimum marža za e-commerce proizvode?",
                    options: [
                      "30%",
                      "40%",
                      "50%",
                      "60%"
                    ],
                    correct: 2,
                    explanation: "Preporučena marža za e-commerce proizvode je preko 50%. Ovo omogućava pokrivanje marketing troškova, operativnih troškova i još uvek ostvariti profit."
                  },
                  {
                    question: "Koja platforma je najbolja za početnike u e-commerce-u?",
                    options: [
                      "WooCommerce",
                      "Magento",
                      "Shopify",
                      "PrestaShop"
                    ],
                    correct: 2,
                    explanation: "Shopify je najbolja platforma za početnike jer je jednostavna za pokretanje, ne zahteva tehničko znanje, a ima odličnu podršku i hosting uključen u cenu."
                  }
                ]}
              />
            </div>

            {/* Conclusion */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Zaključak</h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                E-commerce nije više budućnost - to je sadašnjost. Kompanije koje se neće adaptirati digital transformaciji će jednostavno izumreti. Ali ovo ne znači da je lako - uspešna online prodavnica zahteva strateško razmišljanje, tehnička znanja, i konstantnu optimizaciju.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Ključ uspeha leži u razumevanju da e-commerce nije samo o tehnologiji - to je o korisnicima. Svaki element, od izbora platforme do customer service-a, mora biti optimizovan za najbolje moguće korisničko iskustvo. Kompanije koje ovo razumeju i implementiraju biće nagrađene lojalnim klijentima i rastućim prihodima.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Srpsko e-commerce tržište je još uvek u razvoju, što znači da postoji ogromna prilika za early adopters. Sada je pravo vreme da pokrenete online business. Uložite u pravu strategiju, tehnologiju, i tim - i nagrade mogu biti neverovatne.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Zapamtite: svaka velika kompanija je jednom bila startup. Amazon je počeo kao online knjižara, Shopify je započeo kao snowboard shop. Vaša e-commerce priča može započeti danas - pitanje je samo kada ćete napraviti prvi korak.
              </p>
            </div>

          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Povezani članci
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Saznajte više o web razvoju i digitalnom marketingu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/5" className="hover:text-primary transition-colors">
                    Brzina sajta - Zašto svaka sekunda kašnjenja košta novac
                  </Link>
                </CardTitle>
                <CardDescription>
                  Kompletan vodič kroz optimizaciju performansi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/5">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/4" className="hover:text-primary transition-colors">
                    SEO optimizacija sajta - Kako biti prvi na Google-u
                  </Link>
                </CardTitle>
                <CardDescription>
                  Vodič kroz optimizaciju za search engine rangiranje
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/4">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/3" className="hover:text-primary transition-colors">
                    Responsive sajt dizajn - Zašto je mobilni prikaz ključan
                  </Link>
                </CardTitle>
                <CardDescription>
                  Sve o mobile-first pristupu u web dizajnu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/3">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle6;