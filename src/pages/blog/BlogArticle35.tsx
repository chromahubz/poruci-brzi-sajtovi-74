import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle35 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">UX/UI</Badge>
              <Badge className="bg-white/20 text-white border-0">Web Design</Badge>
              <Badge className="bg-white/20 text-white border-0">Psihologija</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Psihologija boja u web dizajnu: Kako boje utiču na konverzije 2025
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>13. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Stefan Nikolić</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Boje nisu samo estetski element - one su moćan psihološki alat koji može povećati konverzije za do 80%.
                Istraživanja pokazuju da 85% kupaca donosi odluku na osnovu boje. Evo kompletnog vodiča o psihologiji boja u web dizajnu.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto su boje toliko važne?</h2>

              <p className="text-gray-600 mb-6">
                Naš mozak obrađuje vizuelne informacije 60,000 puta brže od teksta, a boje su prvi elementi koje primećujemo.
                U web dizajnu, boje utiču na:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Percepciju brenda:</strong> 90% brzih sudova o brendu bazira se na boji</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Prepoznatljivost:</strong> Boja povećava prepoznatljivost brenda za 80%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Emocije:</strong> Direktno utiču na raspoloženje i ponašanje</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Akcije:</strong> Mogu povećati klik-through rate za 40%</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Psihologija osnovnih boja</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    Crvena - Boja akcije i hitnosti
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Psihološki efekti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Povećava puls i krvni pritisak</li>
                        <li>• Stvara osećaj hitnosti</li>
                        <li>• Stimuliše apetit</li>
                        <li>• Asocira se sa strašću i energijom</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Najbolje za:</p>
                      <ul className="text-sm space-y-1">
                        <li>• CTA dugmad</li>
                        <li>• Sale i popusti</li>
                        <li>• Food & beverage sajtovi</li>
                        <li>• Emergency ili urgent akcije</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3"><strong>Primeri brendova:</strong> Coca-Cola, Netflix, YouTube, KFC</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    Plava - Boja poverenja i stabilnosti
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Psihološki efekti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Smiruje i opušta</li>
                        <li>• Povećava fokus i produktivnost</li>
                        <li>• Asocira se sa pouzdanošću</li>
                        <li>• Smanjuje stres</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Najbolje za:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Banke i finansijske institucije</li>
                        <li>• Tehnološke kompanije</li>
                        <li>• Zdravstvene organizacije</li>
                        <li>• B2B sajtovi</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3"><strong>Primeri brendova:</strong> Facebook, LinkedIn, IBM, Ford</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    Zelena - Boja rasta i prirode
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Psihološki efekti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Pozitivno utiče na kreativnost</li>
                        <li>• Asocira se sa zdravljem</li>
                        <li>• Simbolizuje novac i prosperitet</li>
                        <li>• Stvara osećaj balansa</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Najbolje za:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Eko i organski proizvodi</li>
                        <li>• Finansijski sajtovi</li>
                        <li>• Wellness i fitness</li>
                        <li>• "Go" ili "Start" dugmad</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3"><strong>Primeri brendova:</strong> Spotify, WhatsApp, Starbucks, Android</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    Narandžasta - Boja optimizma i kreativnosti
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Psihološki efekti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Stimuliše mentalna aktivnost</li>
                        <li>• Povećava entuzijazam</li>
                        <li>• Privlači pažnju bez agresivnosti</li>
                        <li>• Asocira se sa pristupačnošću</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Najbolje za:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Subscribe dugmad</li>
                        <li>• Kreativne agencije</li>
                        <li>• Dečiji proizvodi</li>
                        <li>• Call-to-action elementi</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3"><strong>Primeri brendova:</strong> Amazon, Fanta, Firefox, VLC</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    Ljubičasta - Boja luksuza i misterije
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Psihološki efekti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Stimuliše maštu</li>
                        <li>• Asocira se sa ekskluzivnošću</li>
                        <li>• Povećava kreativnost</li>
                        <li>• Simbolizuje kraljevstvo</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Najbolje za:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Luksuzni brendovi</li>
                        <li>• Beauty proizvodi</li>
                        <li>• Premium servisi</li>
                        <li>• Kreativne industrije</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3"><strong>Primeri brendova:</strong> Twitch, Yahoo, Taco Bell, Crown Royal</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    Žuta - Boja optimizma i pažnje
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Psihološki efekti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Povećava koncentraciju</li>
                        <li>• Stimuliše nervni sistem</li>
                        <li>• Asocira se sa srećom</li>
                        <li>• Može izazvati anksioznost u većim količinama</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Najbolje za:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Warning poruke</li>
                        <li>• Highlight elementi</li>
                        <li>• Dečiji sajtovi</li>
                        <li>• Pozitivni CTA</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3"><strong>Primeri brendova:</strong> McDonald's, IKEA, Snapchat, Shell</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Boje i konverzije: Konkretni primeri</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Case Study 1: CTA dugmad</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>HubSpot testiranje:</strong> Promena boje CTA dugmeta sa zelene na crvenu povećala je konverzije za 21%.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="bg-green-500 text-white px-6 py-3 rounded mb-2 inline-block">Zeleno dugme</div>
                    <p className="text-sm">Konverzija: 7.18%</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-500 text-white px-6 py-3 rounded mb-2 inline-block">Crveno dugme</div>
                    <p className="text-sm">Konverzija: 9.0% (+21%)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Case Study 2: E-commerce konverzije</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-4">
                  <strong>Performable testiranje:</strong> Različite boje CTA dugmeta na landing strani:
                </p>
                <ul className="space-y-2">
                  <li><strong>Narandžasto:</strong> Najbolja konverzija (+32.5%)</li>
                  <li><strong>Crveno:</strong> Drugo mesto (+24.8%)</li>
                  <li><strong>Plavo:</strong> Treće mesto (+12.1%)</li>
                  <li><strong>Zeleno:</strong> Najslabije (-5.2%)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Kulturne razlike i lokalizacija</h2>

              <p className="text-gray-600 mb-6">
                Percepcija boja se razlikuje između kultura. Za srpsko tržište važno je znati:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Pozitivne asocijacije u Srbiji:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Plava:</strong> Poveerenje, stabilnost (tradicionalna)</li>
                    <li>• <strong>Bela:</strong> Čistoća, elegancija</li>
                    <li>• <strong>Zlatna:</strong> Luksuz, uspeh</li>
                    <li>• <strong>Zelena:</strong> Priroda, novac</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Potreban oprez:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Crna:</strong> Može asocirati na žalost</li>
                    <li>• <strong>Žuta:</strong> Ponekad negativna percepcija</li>
                    <li>• <strong>Ljubičasta:</strong> Manje popularna u B2B</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Practical tips za primenu</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. 60-30-10 pravilo</h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li><strong>60% - Dominantna boja:</strong> Pozadina, glavni elementi</li>
                  <li><strong>30% - Sekundarna boja:</strong> Navigacija, sekcije</li>
                  <li><strong>10% - Akcentna boja:</strong> CTA dugmad, važni elementi</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Testiranje različitih varijanti</h3>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li>• A/B testirajte boje CTA dugmića</li>
                  <li>• Merite konverzije, ne samo klikove</li>
                  <li>• Testirajte na različitim demografijama</li>
                  <li>• Uzimajte u obzir kontekst stranice</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Kontrast i pristupačnost</h3>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <ul className="space-y-2">
                  <li>• Minimum 4.5:1 kontrast ratio za tekst</li>
                  <li>• Testirajte sa daltonizmom u vidu</li>
                  <li>• Koristite dodatne vizuelne indikatore</li>
                  <li>• Proverite na različitim uređajima</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Tools za rad sa bojama</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Color palette generatori:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Coolors.co:</strong> AI generisane palete</li>
                    <li>• <strong>Adobe Color:</strong> Profesionalni tool</li>
                    <li>• <strong>Paletton:</strong> Color theory baziran</li>
                    <li>• <strong>Material Palette:</strong> Google Material</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Testiranje pristupačnosti:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>WebAIM:</strong> Contrast checker</li>
                    <li>• <strong>Stark:</strong> Plugin za Figma/Sketch</li>
                    <li>• <strong>Colour Contrast:</strong> Chrome extension</li>
                    <li>• <strong>Sim Daltonism:</strong> Colorblind testing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Psihologija boja je moćan alat u web dizajnu koji može značajno uticati na uspeh vašeg sajta.
                Ključ je u razumevanju vaše ciljne grupe, testiranju različitih opcija i pravilnoj primeni
                psiholoških principa.
              </p>

              <p className="text-gray-600 mb-8">
                Zapamtite da ne postoji "magična" boja koja garantuje uspeh - sve zavisi od konteksta,
                brenda i korisnika. Uvek testirajte i merite rezultate.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["psihologija boja", "web dizajn", "konverzije sajt", "CTA dugmad", "color psychology", "UX design", "boje marketing", "A/B testiranje boja"].map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potreban vam je dizajn koji konvertuje?</CardTitle>
              <CardDescription className="text-purple-100">
                Kontaktirajte nas za profesionalno UX/UI dizajniranje
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zaštrajte dizajn
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle35;