import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Globe, Search, Target, TrendingUp, BarChart3, Users, Building2, CheckCircle, AlertCircle, Smartphone, Calendar, Award, Zap, Eye, MousePointer, DollarSign, Share2, MessageCircle, ThumbsUp, BookOpen, ChevronRight, PlusCircle, Settings, Filter, Map, Route, Flag, Home, Store, Briefcase, UserCheck, ShieldCheck, CreditCard, Lock, Truck, Package, Mail, Bell, Wifi, Headphones, Monitor, Database, Clock, Star, MapPin, Phone, Lightbulb, ExternalLink, FileText, Camera, Heart, ShoppingBag, Coffee, Car, Navigation, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle25 = () => {
  const quizQuestions = [
    {
      question: "Šta je mikrosajt u kontekstu lokalnog SEO-a?",
      options: [
        "Mali sajt sa malo stranica",
        "Specifičan sajt fokusiran na jednu uslugu i lokaciju",
        "Sajt samo za mobilne uređaje",
        "Deo glavnog sajta"
      ],
      correct: 1,
      explanation: "Mikrosajt je poseban sajt kreiran da targetira specifičnu uslugu u specifičnoj lokaciji, što omogućava bolje rangiranje u lokalnim pretragama."
    },
    {
      question: "Koji tip domena je najefektivniji za mikrosajtove?",
      options: [
        "Brandiran domen",
        "Exact Match Domain (EMD)",
        "Subdomen glavnog sajta",
        "Nasumični naziv"
      ],
      correct: 1,
      explanation: "Exact Match Domain (EMD) koji sadrži ključnu reč i lokaciju (npr. vodovodzemiun.rs) je najefektivniji za lokalno rangiranje."
    },
    {
      question: "Koliko mikrosajtova bi trebalo da ima lokalni biznis?",
      options: [
        "Samo jedan",
        "2-3 maksimalno",
        "10-20 za različite lokacije/usluge",
        "50+ uvek"
      ],
      correct: 2,
      explanation: "Optimalno je imati 10-20 mikrosajtova koji pokrivaju različite kombinacije usluga i lokacija koje vaš biznis opsluže."
    },
    {
      question: "Koja je glavna prednost mikrosajtova?",
      options: [
        "Jeftiniji su od velikih sajtova",
        "Dominacija u lokalnim pretragama",
        "Lakši su za održavanje",
        "Bolje izgledaju"
      ],
      correct: 1,
      explanation: "Glavna prednost je dominacija u lokalnim Google pretragama - možete zauzeti više pozicija za iste ključne reči."
    },
    {
      question: "Kako se postavlja cena za mikrosajt usluge?",
      options: [
        "Fiksna cena uvek",
        "Procenat od vrednosti posla ili fiksna cena po lead-u",
        "Samo po broju posetilaca",
        "Besplatno za dobre klijente"
      ],
      correct: 1,
      explanation: "Cena se postavlja ili kao procenat od vrednosti posla (5-10%) ili kao fiksna cena po kvalifikovanom lead-u (3000-10000 RSD)."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Digitalni Marketing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mikrosajtovi za Lokalne Biznise: Kako da Dominirate Google Pretragama u Srbiji
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Otkrijte moćnu strategiju koja omogućava malim preduzećima da zauzmu više pozicija u Google rezultatima i privuku značajno više kupaca iz svoje lokalne oblasti
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                23. septembar 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                22 min čitanja
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                SEO strategija
              </div>
            </div>
          </header>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Mikrosajtovi za lokalne biznise - digitalna strategija"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>

          <div className="prose prose-lg max-w-none">

            {/* Uvod */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-8 border-l-4 border-purple-500">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Zašto vam je potrebna nova strategija?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dok se vaši konkurenti bore za jednu poziciju na Google-u sa jednim sajtom, postoji način da vi zauzmate 4-5 pozicija istovremeno. Strategija mikrosajtova omogućava lokalnim preduzećima da literalno dominiraju u svojim oblastima i privuku značajno više kupaca nego tradicionalnim pristupom.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Zamislite da kada neko u Beogradu pretražuje "vodovodžija Zemun" ili "električar Novi Beograd", vaše preduzeće se pojavljuje na prvoj stranici ne jednom, već 3-4 puta kroz različite sajtove. Zvuči nemoguće? Upravo to je moć mikrosajtova - strategije koja omogućava da jedna firma zauzme više pozicija u Google rezultatima kroz kreiranje ciljanih, specijalizovanih web stranica.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              U ovom detaljnom vodiču, otkićete kako funkcionišu mikrosajtovi, zašto su toliko efikasni za lokalne biznise u Srbiji, i kako možete implementirati ovu strategiju za svoje preduzeće. Naučićete sve - od tehnične implementacije do cenovnih modela i automatizacije koja čini ceo sistem profitabilnim.
            </p>

            {/* Statistike */}
            <Card className="mb-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Rezultati mikrosajtova u brojkama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4/10</div>
                      <span className="text-gray-700">pozicija u top 10 rezultata može zauzeti jedan biznis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">300%</div>
                      <span className="text-gray-700">povećanje broja kvalifikovanih poziva</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">85%</div>
                      <span className="text-gray-700">lokalnih pretaga rezultuje pozivom ili posetom</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">24/7</div>
                      <span className="text-gray-700">automatizovano generisanje lead-ova</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">ROI</div>
                      <span className="text-gray-700">povraćaj investicije već u prvom mesecu</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">50+</div>
                      <span className="text-gray-700">uspešno implementiranih mikrosajtova</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Šta su mikrosajtovi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-purple-600" />
                Šta su mikrosajtovi i kako funkcionišu?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Mikrosajt je specijalizovan web sajt kreiran da targetira specifičnu kombinaciju usluge i lokacije. Za razliku od tradicionalnog pristupa gde jedna firma ima jedan sajt, strategija mikrosajtova podrazumeva kreiranje više ciljanih sajtova koji pokrivaju različite geografske oblasti ili specifične usluge.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Primer u praksi:</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Tradicionalni pristup:</strong> Jedan sajt "DejanVodovodžija.rs" pokušava da rangira za sve lokacije u Beogradu</p>
                  <p><strong>Mikrosajt pristup:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>vodovodžijazemun.rs</li>
                    <li>vodovodžijanovi-beograd.rs</li>
                    <li>hitni-vodovodžija-vračar.rs</li>
                    <li>vodovod-servis-palilula.rs</li>
                    <li>vodovodžija-zvezdara.rs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ključne karakteristike mikrosajtova</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Target className="w-5 h-5 mr-2" />
                      Hyperlocal fokus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Svaki sajt je optimizovan za specifičnu lokaciju:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Naziv domena sadrži lokaciju</li>
                      <li>• Sadržaj specifičan za kvart/opštinu</li>
                      <li>• Lokalne reference i kontakt podaci</li>
                      <li>• Google My Business za svaki sajt</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Search className="w-5 h-5 mr-2" />
                      EMD strategija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Exact Match Domain za maksimalan SEO efekat:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ključna reč + lokacija u domenu</li>
                      <li>• Instant relevantnost za Google</li>
                      <li>• Veća verovatnoća klika korisnika</li>
                      <li>• Bolje rangiranje u lokalnim pretragama</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Zap className="w-5 h-5 mr-2" />
                      Brza implementacija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Efikasno kreiranje i upravljanje:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Template-based pristup</li>
                      <li>• Automatizovani sistemi</li>
                      <li>• Centralizovano upravljanje</li>
                      <li>• Skalabilno rešenje</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Dominacija rezultata
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Zauzimanje više pozicija:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 4-5 pozicija u top 10 rezultata</li>
                      <li>• Blokiranje konkurencije</li>
                      <li>• Povećana vidljivost brenda</li>
                      <li>• Više putanja do konverzije</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Važna napomena o legalnosti</h4>
                    <p className="text-yellow-700">
                      Kreiranje mikrosajtova je potpuno legalna SEO strategija. Svaki sajt mora da pruža realnu vrednost korisnicima sa originalnim sadržajem i kontakt informacijama. Ključ je u kvalitetu i relevantnosti, ne u manipulaciji.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Zašto su važni za srpsko tržište */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Flag className="w-8 h-8 mr-3 text-red-600" />
                Zašto su mikrosajtovi idealni za srpsko tržište?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Karakteristike srpskog tržišta čine mikrosajtove posebno efikasnim. Lokalna priroda poslovanja, snažne veze sa susedstvom i specifični načini pretrage čine ovu strategiju idealnom za naše uslovno.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Specifičnosti srpskog tržišta</h3>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="bg-gradient-to-r from-red-50 to-blue-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <MapPin className="w-5 h-5 mr-2" />
                      Geografska koncentracija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Velikeni gradovi:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Beograd - 17 opština</li>
                          <li>• Novi Sad - 13 naselja</li>
                          <li>• Niš - 5 gradskih zona</li>
                          <li>• Kragujevac - urbane zone</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Lokalna pretraga:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• "usluga + kvart"</li>
                          <li>• "usluga + opština"</li>
                          <li>• "hitno + lokacija"</li>
                          <li>• "najbolji + grad"</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Ponašanje potrošača:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Preferiraju lokalne usluge</li>
                          <li>• Traže brzu dostupnost</li>
                          <li>• Veruju preporukama</li>
                          <li>• Cene veliki faktor</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Najbolje niše za mikrosajtove u Srbiji</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Home className="w-5 h-5 mr-2" />
                      Kućni servisi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• Vodovodžije i kanalizacija</li>
                      <li>• Električari i elektroinstalacije</li>
                      <li>• Ključari 24h</li>
                      <li>• Krovopokrivači</li>
                      <li>• Keramičari i plocari</li>
                      <li>• Moleri i farbari</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Car className="w-5 h-5 mr-2" />
                      Auto servisi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Auto električari</li>
                      <li>• Vulkanizeri</li>
                      <li>• Auto stakla</li>
                      <li>• Limari i farbari</li>
                      <li>• Dijagnostika vozila</li>
                      <li>• Pomoć na putu</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Heart className="w-5 h-5 mr-2" />
                      Zdravlje i lepota
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Stomatološke ordinacije</li>
                      <li>• Frizerski saloni</li>
                      <li>• Kozmetički saloni</li>
                      <li>• Masažne ordinacije</li>
                      <li>• Fitnes centri</li>
                      <li>• Veterinarske ambulante</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Trgovina i ugostiteljstvo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Restorani po kvartovima</li>
                      <li>• Dostava hrane</li>
                      <li>• Pekare i poslastičarnice</li>
                      <li>• Cvetare</li>
                      <li>• Apoteke</li>
                      <li>• Prodavnice nameštaja</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-blue-800 mb-4">Primer uspešne implementacije:</h4>
                <p className="text-blue-700 mb-4">
                  <strong>Scenario:</strong> Vodoinstalaterska firma "Marko i sinovi" iz Beograda
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Pre mikrosajtova:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• 1 sajt: markosinovi.rs</li>
                      <li>• Pozicija 8-12 za "vodovodžija Beograd"</li>
                      <li>• 15-20 poziva mesečno</li>
                      <li>• Visoka konkurencija</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-2">Sa mikrosajtovima:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• 12 mikrosajtova po opštinama</li>
                      <li>• 3-4 pozicije u top 10 za svaku lokaciju</li>
                      <li>• 80-100 poziva mesečno</li>
                      <li>• Dominacija u lokalnim pretragama</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Kako kreirati mikrosajtove */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-gray-600" />
                Kako kreirati efikasne mikrosajtove
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Kreiranje mikrosajtova zahteva strategijski pristup i pažljivu implementaciju. Evo detaljnog vodiča kroz svaki korak procesa, od planiranja do puštanja u rad.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 1: Istraživanje i planiranje</h3>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold mb-4">Analiza konkurencije i tržišta:</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">1. Identifikacija ključnih reči:</h5>
                    <p className="text-sm text-gray-600 mb-2">Koristite Google Keyword Planner ili SEMrush za istraživanje lokalnih pretaga</p>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-xs font-mono">
                        Primer pretaga: "vodovodžija zemun" (320 pretaga/mesec), "hitni vodovodžija novi beograd" (180 pretaga/mesec)
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">2. Analiza konkurencije:</h5>
                    <p className="text-sm text-gray-600 mb-2">Proverite ko trenutno rangira za ciljane termine</p>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Da li postoji Local Pack?</li>
                      <li>• Koliko Google recenzija imaju konkurenti?</li>
                      <li>• Kakav je kvalitet postojećih sajtova?</li>
                      <li>• Da li konkurenti koriste EMD?</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">3. Selekcija lokacija:</h5>
                    <p className="text-sm text-gray-600 mb-2">Prioritizujte lokacije na osnovu:</p>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Broj pretaga</li>
                      <li>• Nivo konkurencije</li>
                      <li>• Vaša trenutna pokrivеnost</li>
                      <li>• Potencijal za profit</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 2: Izbor i registracija domena</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Dobri primeri EMD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-blue-700">
                      <li>• <strong>vodovodžijazemun.rs</strong><br />(usluga + lokacija)</li>
                      <li>• <strong>hitni-električar-vračar.rs</strong><br />(hitnost + usluga + lokacija)</li>
                      <li>• <strong>ključar24h-novi-beograd.rs</strong><br />(usluga + dostupnost + lokacija)</li>
                      <li>• <strong>auto-elektriko-palilula.rs</strong><br />(specifična usluga + lokacija)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Česti propusti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-red-700">
                      <li>• <strong>Predugačke domene</strong><br />vodovodžija-hitne-intervencije-zemun.rs</li>
                      <li>• <strong>Nejasne skraćenice</strong><br />vod-inst-zem.rs</li>
                      <li>• <strong>Brojevi u nazivu</strong><br />vodovodžija123zemun.rs</li>
                      <li>• <strong>Nepotrebne reči</strong><br />najbolji-vodovodžija-u-zemunu.rs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 3: Tehnička implementacija</h3>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Arhitektura sajta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Osnovne stranice:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Početna (optimizovana za glavnu KR)</li>
                          <li>• O nama (lokalna priča)</li>
                          <li>• Usluge (specifične za lokaciju)</li>
                          <li>• Kontakt (lokalni podaci)</li>
                          <li>• Recenzije/Reference</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">SEO elementi:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Schema markup (LocalBusiness)</li>
                          <li>• Google My Business integracija</li>
                          <li>• Lokalne ključne reči u sadržaju</li>
                          <li>• NAP konzistentnost</li>
                          <li>• Mobile-first dizajn</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Content strategija</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium">Homepage optimizacija:</h5>
                        <div className="bg-gray-50 p-4 rounded mt-2">
                          <p className="text-sm font-medium mb-2">Primer za vodovodžija Zemun:</p>
                          <div className="text-xs space-y-1">
                            <p><strong>H1:</strong> "Hitni Vodovodžija Zemun - 24h Dežurstvo"</p>
                            <p><strong>H2:</strong> "Profesionalne Vodoinstalaterske Usluge u Zemunu"</p>
                            <p><strong>Sadržaj:</strong> "Potreban vam je pouzdan vodovodžija u Zemunu? Naš tim licenciranih majstora pruža hitne i redovne vodoinstalaterske usluge širom opštine Zemun. Dostupni smo 24h za hitne intervencije..."</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium">Lokalni sadržaj:</h5>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Reference iz tog kvarta/opštine</li>
                          <li>• Specifični problemi te lokacije</li>
                          <li>• Lokalni landmark-ovi u opisima</li>
                          <li>• Fotografije sa terena</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 4: Lokalni SEO i citacije</h3>

              <div className="bg-green-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-green-800 mb-4">Google My Business optimizacija:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">Osnovne informacije:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Naziv: "Vodovodžija Zemun - Hitne Intervencije"</li>
                      <li>• Adresa: Lokalna adresa u Zemunu</li>
                      <li>• Telefon: Dedikovan broj za tu lokaciju</li>
                      <li>• Kategorija: "Plumber" ili "Home Services"</li>
                      <li>• Radno vreme: 24h ili specifično</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">Optimizacija:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• 20+ fotografija (radovi, tim, lokacija)</li>
                      <li>• Redovne Google Posts objave</li>
                      <li>• Odgovaranje na recenzije</li>
                      <li>• Q&A sekcija</li>
                      <li>• Proizvodi/usluge lista</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Monetizacija i cene */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-8 h-8 mr-3 text-green-600" />
                Monetizacija mikrosajtova
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Mikrosajtovi mogu biti profitabilni na nekoliko načina. Važno je da odaberete model koji najbolje odgovara vašoj situaciji i ciljevima - da li ste vlasnik biznisa koji želi više lead-ova ili agencija koja pruža usluge.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Model 1: Lead generation za vlastiti biznis</h3>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-4">Investicija vs. povraćaj:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-700 mb-3">Početni troškovi (po sajtu):</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Domen (.rs): 1.500 RSD godišnje</li>
                      <li>• Hosting: 2.000 RSD godišnje</li>
                      <li>• Dizajn i razvoj: 15.000-30.000 RSD</li>
                      <li>• Sadržaj: 5.000-10.000 RSD</li>
                      <li>• <strong>Ukupno: 23.500-43.500 RSD</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700 mb-3">Mesečni prinos (estimacija):</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• 15-25 kvalifikovanih poziva</li>
                      <li>• Konverzija: 30-40%</li>
                      <li>• 5-10 novih klijenata</li>
                      <li>• Prosečna vrednost posla: 8.000 RSD</li>
                      <li>• <strong>Mesečni prihod: 40.000-80.000 RSD</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-white rounded border-l-4 border-blue-500">
                  <p className="text-sm text-blue-700">
                    <strong>ROI kalkulacija:</strong> Sa investicijom od 30.000 RSD i mesečnim prihodom od 60.000 RSD, povraćaj investicije se ostvaruje za 15 dana rada sajta.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Model 2: Rank & Rent strategija</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Procenat od posla
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-green-700">Model:</h5>
                        <p className="text-sm text-green-600">5-10% od vrednosti svakog zatvorenog posla</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700">Primer za vodovodžiju:</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Prosečan posao: 12.000 RSD</li>
                          <li>• Vaš deo (7%): 840 RSD</li>
                          <li>• 20 poslova mesečno: 16.800 RSD</li>
                          <li>• 10 mikrosajtova: 168.000 RSD</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 p-2 rounded">
                        <p className="text-xs text-green-700">
                          <strong>Prednosti:</strong> Veći dugoročni prihod, partnerski odnos sa klijentom
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Fiksna cena po lead-u
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-orange-700">Model:</h5>
                        <p className="text-sm text-orange-600">3.000-10.000 RSD po kvalifikovanom lead-u</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-700">Cenovnik po nišama:</h5>
                        <ul className="text-sm text-orange-600 space-y-1">
                          <li>• Vodovodžija: 3.000-5.000 RSD</li>
                          <li>• Električar: 4.000-6.000 RSD</li>
                          <li>• Auto servis: 5.000-8.000 RSD</li>
                          <li>• Stomatolog: 8.000-15.000 RSD</li>
                        </ul>
                      </div>
                      <div className="bg-orange-100 p-2 rounded">
                        <p className="text-xs text-orange-700">
                          <strong>Prednosti:</strong> Predvidiv prihod, lakše naplaćivanje, brža ekspanzija
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Model 3: Agencijska usluga</h3>

              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-purple-800 mb-4">Kompletno upravljanje mikrosajtovima:</h4>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Setup paket:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• 3 mikrosajta: 90.000 RSD</li>
                      <li>• 5 mikrosajtova: 135.000 RSD</li>
                      <li>• 10 mikrosajtova: 240.000 RSD</li>
                      <li>• Uključuje: dizajn, razvoj, SEO, GMB</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Mesečno održavanje:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• Po sajtu: 3.000-5.000 RSD</li>
                      <li>• Uključuje: content, SEO, GMB posts</li>
                      <li>• Recenzije, citacije, analitika</li>
                      <li>• Lead tracking i izveštaji</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Premium usluge:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• AI chat bot: +15.000 RSD setup</li>
                      <li>• Call tracking: +5.000 RSD/mesec</li>
                      <li>• CRM integracija: +10.000 RSD</li>
                      <li>• Lead nurturing: +8.000 RSD/mesec</li>
                    </ul>
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
                Pravi potencijal mikrosajtova se ostvaruje kroz automatizaciju. Umesto ručnog upravljanja svakim lead-om, možete kreirati sistem koji radi 24/7 i automatski kvalifikuje i prosleđuje kupce.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Chat sistem</h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-4">Kako funkcioniše AI agent:</h4>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Kada korisnik pozove:</h5>
                      <ul className="text-sm space-y-1 text-blue-600">
                        <li>1. AI agent se javlja profesionalno</li>
                        <li>2. Pita za osnovne informacije (ime, problem)</li>
                        <li>3. Kvalifikuje lead (hitnost, budžet, lokacija)</li>
                        <li>4. Zakazuje termin ili prosleđuje hitno</li>
                        <li>5. Šalje transkript i podatke klijentu</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Prednosti AI sistem:</h5>
                      <ul className="text-sm space-y-1 text-blue-600">
                        <li>• Nema propuštenih poziva (24/7)</li>
                        <li>• Konzistentno kvalifikovanje</li>
                        <li>• Instant prosleđivanje informacija</li>
                        <li>• Skalabilnost (50+ sajtova)</li>
                        <li>• Niži troškovi od zapošljavanja</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h5 className="font-medium text-blue-700 mb-2">Primer konverzacije:</h5>
                    <div className="text-sm space-y-1 text-gray-600">
                      <p><strong>AI:</strong> "Dobro jutro! Ovdje je Hit Vodovodžija Zemun. Kako mogu da vam pomognem?"</p>
                      <p><strong>Kupac:</strong> "Imam problem sa cevi u kupatilu, teče voda..."</p>
                      <p><strong>AI:</strong> "Razumem, potrebna vam je hitna intervencija. Možete li mi reći vaše ime i adresu u Zemunu?"</p>
                      <p><strong>Kupac:</strong> "Marko Petrović, Cara Dušana 45"</p>
                      <p><strong>AI:</strong> "Hvala Marko. Da li je ovo nešto što može da čeka do sutra ili je hitno?"</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Lead tracking i analitika</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Ključne metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Pozivi po sajtu:</strong> Koliko poziva generiše svaki mikrosajt</li>
                      <li>• <strong>Kvalitet lead-ova:</strong> Procenat konverzije poziv → posao</li>
                      <li>• <strong>Vrednost po lead-u:</strong> Prosečna vrednost zatvorenih poslova</li>
                      <li>• <strong>ROI po sajtu:</strong> Profit vs. investicija</li>
                      <li>• <strong>Geografska analiza:</strong> Koje lokacije su najuspešnije</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Target className="w-5 h-5 mr-2" />
                      Optimizacija performansi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>A/B test poziva na akciju:</strong> Testiranje različitih dugmadi</li>
                      <li>• <strong>Landing page optimizacija:</strong> Poboljšanje konverzije</li>
                      <li>• <strong>Schema markup testiranje:</strong> Bolji SERP prikaz</li>
                      <li>• <strong>Brzina sajta:</strong> Core Web Vitals optimizacija</li>
                      <li>• <strong>Mobile UX:</strong> Poboljšanje mobilnog iskustva</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">CRM i nurturing automatizacija</h3>

              <div className="bg-orange-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-orange-800 mb-4">Automatski follow-up sistem:</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-orange-700">Email sekvenca za lead-ove:</h5>
                    <div className="grid md:grid-cols-3 gap-4 mt-2">
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm font-medium">Dan 1: Potvrda kontakta</p>
                        <p className="text-xs text-gray-600">"Hvala što ste nas kontaktirali za vodoinstakacije u Zemunu..."</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm font-medium">Dan 3: Edukativni sadržaj</p>
                        <p className="text-xs text-gray-600">"5 znakova da vam je potreban vodovodžija u Zemunu"</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm font-medium">Dan 7: Specijalna ponuda</p>
                        <p className="text-xs text-gray-600">"Ekskluzivni popust za stanovnike Zemuna - 15% na prve radove"</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-orange-700">SMS reminder sistem:</h5>
                    <ul className="text-sm space-y-1 text-orange-600 mt-2">
                      <li>• Dan pre zakazanog termina</li>
                      <li>• 2 sata pre dolaska majstora</li>
                      <li>• Follow-up dan nakon posla</li>
                      <li>• Godišnji maintenance podsetnik</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Česte greške */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="w-8 h-8 mr-3 text-red-600" />
                Česte greške koje treba izbegnuti
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Implementacija mikrosajtova može biti izuzetno profitabilna, ali mnogi prave kritične greške koje mogu dovesti do gubitka vremena, novca, ili čak penalizacije od strane Google-a. Evo najčešćih problema i kako ih izbegnuti.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Greška #1: Dupliciranje sadržaja
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Česta praksa (POGREŠNO):</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Copy/paste sadržaj kroz sve sajtove</li>
                          <li>• Samo promena naziva lokacije</li>
                          <li>• Isti opis usluga svugde</li>
                          <li>• Identičke fotografije</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Ispravna praksa:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Originalan sadržaj za svaki sajt</li>
                          <li>• Specifični problemi te lokacije</li>
                          <li>• Lokalne reference i fotografije</li>
                          <li>• Različit pristup pisanju</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Greška #2: Slaba tehnička implementacija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-orange-700 mb-2">Tehnički problemi:</h5>
                        <ul className="text-sm space-y-1 text-orange-600">
                          <li>• Spora brzina učitavanja sajta</li>
                          <li>• Neoptimizovan za mobilne uređaje</li>
                          <li>• Nedosledan NAP (naziv, adresa, telefon)</li>
                          <li>• Nedostajuće Schema markup</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Potrebne optimizacije:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• PageSpeed Score &gt; 90</li>
                          <li>• Mobile-first responsive dizajn</li>
                          <li>• Konzistentne informacije svugde</li>
                          <li>• LocalBusiness schema na svakom sajtu</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Users className="w-5 h-5 mr-2" />
                      Greška #3: Zanemarivanje korisničkog iskustva
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-purple-700 mb-2">Loše UX prakse:</h5>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• Konfuzni pozivi na akciju</li>
                          <li>• Komplikovani kontakt procesi</li>
                          <li>• Preterano SEO-ovane stranice</li>
                          <li>• Nejasne informacije o cenama</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Fokus na korisnika:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Jasni CTA dugmad ("Pozovi sada")</li>
                          <li>• Click-to-call funkcionalnost</li>
                          <li>• Prirodan, čitljiv sadržaj</li>
                          <li>• Transparentne cene/procese</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Greška #4: Nedovoljna promocija i link building
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">Zanemarene aktivnosti:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• Nema lokalnih citata</li>
                          <li>• Nedostaju Google recenzije</li>
                          <li>• Nema aktivnosti na social media</li>
                          <li>• Propuštene directory submissions</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Potrebne aktivnosti:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Lokalni direktorijumi (YellowPages.rs)</li>
                          <li>• Aktivno traženje recenzija</li>
                          <li>• Facebook/Instagram stranice</li>
                          <li>• Partnerstva sa lokalnim firmama</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <Clock className="w-5 h-5 mr-2" />
                      Greška #5: Nerealna očekivanja i nedoslednost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Nerealna očekivanja:</h5>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>• Instant rezultati (ranking za nedelju)</li>
                          <li>• Zanemarivanje kontinuiranog rada</li>
                          <li>• Fokus samo na broj sajtova</li>
                          <li>• Ignorisanje kvaliteta</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Realistični pristupi:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• 3-6 meseci za stabilne rezultate</li>
                          <li>• Mesečno ažuriranje sadržaja</li>
                          <li>• Kvalitet preko kvantiteta</li>
                          <li>• Kontinuirano praćenje i optimizacija</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Alati i tehnologije */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-gray-600" />
                Alati i tehnologije za mikrosajtove
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Uspešna implementacija mikrosajtova zahteva pravu kombinaciju alata i tehnologija. Evo pregleda najefektivnijih rešenja koja omogućavaju brzo kreiranje, upravljanje i optimizaciju mikrosajtova.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Website builderi i CMS sistemi</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Globe className="w-5 h-5 mr-2" />
                      WordPress + Elementor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-blue-700">Prednosti:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• Fleksibilnost i prilagodljivost</li>
                          <li>• Veliki broj tema i plugin-ova</li>
                          <li>• SEO-friendly struktura</li>
                          <li>• Dobra podrška zajednice</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700">Mane:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Može biti spor bez optimizacije</li>
                          <li>• Redovne bezbednosne osvežavanja</li>
                          <li>• Složeniji za skabiliranje</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-2 rounded">
                        <p className="text-xs text-blue-700"><strong>Najbolji za:</strong> Agencije sa WordPress ekspertizom</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Zap className="w-5 h-5 mr-2" />
                      Framer / Webflow
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-green-700">Prednosti:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Brzo kreiranje sajtova</li>
                          <li>• Excellent performance</li>
                          <li>• Visual development</li>
                          <li>• Hosting uključen</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700">Mane:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Ograničena funkcionalnost</li>
                          <li>• Mesečni troškovi</li>
                          <li>• Vendor lock-in</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs text-green-700"><strong>Najbolji za:</strong> Brzo skaliranje i dizajn fokus</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Database className="w-5 h-5 mr-2" />
                      Custom rešenja
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-purple-700">Tehnologije:</h5>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• Next.js / React</li>
                          <li>• Laravel / PHP</li>
                          <li>• Node.js template engine</li>
                          <li>• Headless CMS (Strapi)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-700">Prednosti:</h5>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• Potpuna kontrola</li>
                          <li>• Optimizovano za brzinu</li>
                          <li>• Skalabilnost</li>
                          <li>• Custom funkcionalnosti</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-2 rounded">
                        <p className="text-xs text-purple-700"><strong>Najbolji za:</strong> Velike agencije sa dev timom</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Smartphone className="w-5 h-5 mr-2" />
                      AI page builders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-orange-700">Alati:</h5>
                        <ul className="text-sm space-y-1 text-orange-600">
                          <li>• Durable.co</li>
                          <li>• 10Web AI Builder</li>
                          <li>• Zyro AI Writer</li>
                          <li>• Bookmark AiDA</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-700">Karakteristike:</h5>
                        <ul className="text-sm space-y-1 text-orange-600">
                          <li>• Automatsko kreiranje sadržaja</li>
                          <li>• AI generisani tekstovi</li>
                          <li>• Template personalizacija</li>
                          <li>• Brza implementacija</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <p className="text-xs text-orange-700"><strong>Najbolji za:</strong> Početnicii brza prototipovl</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">SEO i analitika alati</h3>

              <div className="bg-indigo-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-indigo-800 mb-4">Besplatni alati (osnovni nivo):</h4>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Google alati:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Google Search Console</li>
                      <li>• Google Analytics</li>
                      <li>• Google My Business</li>
                      <li>• Google Keyword Planner</li>
                      <li>• PageSpeed Insights</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Rank tracking:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• SERPWatcher (free trial)</li>
                      <li>• AccuRanker (free tier)</li>
                      <li>• Rank Tracker (SEO PowerSuite)</li>
                      <li>• Wincher</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Schema i tehničko:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Schema.org generator</li>
                      <li>• Google Structured Data Tool</li>
                      <li>• Mobile-Friendly Test</li>
                      <li>• Core Web Vitals report</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-green-800 mb-4">Premium alati (profesionalni nivo):</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">All-in-one SEO platforme:</h5>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-medium text-sm">SEMrush ($99/mesec)</h6>
                        <p className="text-xs text-gray-600">Keyword research, rank tracking, competitor analysis</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-medium text-sm">Ahrefs ($99/mesec)</h6>
                        <p className="text-xs text-gray-600">Backlink analysis, content gap, site audit</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-medium text-sm">Moz Pro ($79/mesec)</h6>
                        <p className="text-xs text-gray-600">Local SEO tools, rank tracking, on-page optimization</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">Specijalizovani alati:</h5>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-medium text-sm">BrightLocal ($29/mesec)</h6>
                        <p className="text-xs text-gray-600">Local rank tracking, citation building, review management</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-medium text-sm">Local Falcon ($30/mesec)</h6>
                        <p className="text-xs text-gray-600">Local rank tracking grid, geo-specific results</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-medium text-sm">Whitespark ($25/mesec)</h6>
                        <p className="text-xs text-gray-600">Citation building, local rank tracking, review tools</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Automatizacija i integracije</h3>

              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Call tracking sistemi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">CallTrackingMetrics:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Dynamic broj replacement</li>
                          <li>• Call recording</li>
                          <li>• Lead scoring</li>
                          <li>• Integration sa CRM</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">CallRail:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Keyword-level tracking</li>
                          <li>• Form tracking</li>
                          <li>• Conversation intelligence</li>
                          <li>• ROI reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Lokalni provideri:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Telekom Srbija API</li>
                          <li>• VIP mobile solutions</li>
                          <li>• Custom-built sistemi</li>
                          <li>• Zapier integracije</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Chat i customer support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Voice AI platforme:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Retell AI:</strong> $0.10/minut + setup</li>
                          <li>• <strong>Synthflow:</strong> $29/mesec + voice minuti</li>
                          <li>• <strong>Voiceflow:</strong> $50/mesec za business</li>
                          <li>• <strong>Custom OpenAI:</strong> API + Twilio</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Text chat rešenja:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Intercom:</strong> $39/mesec + add-ons</li>
                          <li>• <strong>Drift:</strong> $50/mesec za AI features</li>
                          <li>• <strong>Tidio:</strong> $18/mesec za AI chatbot</li>
                          <li>• <strong>ChatGPT API:</strong> Custom implementation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Budućnost strategije */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                Budućnost mikrosajtova i trendovi
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Strategija mikrosajtova se brzo razvija sa napretkom tehnologije i promenama u Google algoritmima. Evo ključnih trendova koje treba pratiti da biste ostali ispred konkurencije.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Zap className="w-5 h-5 mr-2" />
                      AI revolucija u sadržaju
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• <strong>GPT-4 content generation:</strong> Automatsko kreiranje lokalnog sadržaja</li>
                      <li>• <strong>AI personalizacija:</strong> Dinamički sadržaj na osnovu lokacije korisnika</li>
                      <li>• <strong>Voice search optimization:</strong> Optimizacija za glasovne pretrage</li>
                      <li>• <strong>Visual AI:</strong> Automatsko tagovanje i optimizacija slika</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Eye className="w-5 h-5 mr-2" />
                      Google algoritam promene
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• <strong>E-A-T fokus:</strong> Expertise, Authoritativeness, Trustworthiness</li>
                      <li>• <strong>Core Web Vitals:</strong> Sve veći uticaj brzine na rangiranje</li>
                      <li>• <strong>Helpful Content Update:</strong> Nagrađivanje korisnog sadržaja</li>
                      <li>• <strong>Local algoritam update:</strong> Veći fokus na proximity faktore</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-gradient-to-br from-green-50 to-teal-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Smartphone className="w-5 h-5 mr-2" />
                      Mobile i voice evolution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• <strong>Mobile-first dominacija:</strong> 85%+ lokalnih pretaga sa mobilnih</li>
                      <li>• <strong>Voice search rast:</strong> "Hej Google, pronađi vodovodžiju"</li>
                      <li>• <strong>Smart assistant integration:</strong> Google Assistant optimizacija</li>
                      <li>• <strong>AR features:</strong> Lokacije kroz augmented reality</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Database className="w-5 h-5 mr-2" />
                      Automatizacija napredak
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• <strong>No-code platforme:</strong> Brže kreiranje sajtova bez programiranja</li>
                      <li>• <strong>AI chatbot evolution:</strong> Naprednije konverzacije sa kupcima</li>
                      <li>• <strong>CRM integration:</strong> Seamless lead management</li>
                      <li>• <strong>Predictive analytics:</strong> AI predviđanje najboljih lokacija</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Priprema za budućnost</h3>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border-l-4 border-indigo-400">
                <h4 className="font-semibold text-indigo-800 mb-4">Strateška preporuke za naredne 2-3 godine:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Tehnološke investicije:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• AI content generation alati</li>
                      <li>• Voice search optimization</li>
                      <li>• Advanced analytics i machine learning</li>
                      <li>• Automation stack (Zapier, Make.com)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Strategic fokus:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Kvalitet preko kvantiteta</li>
                      <li>• Brand authority building</li>
                      <li>• Omnichannel customer experience</li>
                      <li>• Sustainable growth model</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Zaključak */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-gold-600" />
                Zaključak i akcioni plan
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8 border-l-4 border-green-500">
                <p className="text-lg text-gray-700 mb-6">
                  Mikrosajtovi predstavljaju jednu od najefektivnijih strategija za lokalne biznise u Srbiji. Dok vaši konkurenti čekaju da se njihov jedan sajt rangira za opšte termine, vi možete da dominirate u specifičnim lokalnim pretragama kroz ciljane mikrosajtove koji privlače kvalifikovane kupce.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  Ključ uspeha nije u broju sajtova, već u kvalitetu implementacije i kontinuiranoj optimizaciji. Jedan dobro optimizovan mikrosajt može da generiše više lead-ova od tradicionalnog sajta koji pokušava da pokrije sve.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Vaš 90-dnevni akcioni plan</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-center text-green-800">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      Dani 1-30
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-green-700 mb-2">Istraživanje i planiranje:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Analiza lokalnih ključnih reči</li>
                      <li>• Konkurentska analiza</li>
                      <li>• Selekcija 3-5 prioritetnih lokacija</li>
                      <li>• Registracija EMD domena</li>
                      <li>• Tehnička priprema hosting-a</li>
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
                    <h5 className="font-semibold text-blue-700 mb-2">Kreiranje i optimizacija:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Razvoj template-a za sajtove</li>
                      <li>• Kreiranje originalnog sadržaja</li>
                      <li>• Schema markup implementacija</li>
                      <li>• Google My Business setup</li>
                      <li>• Prva optimizacija na osnovne KR</li>
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
                    <h5 className="font-semibold text-purple-700 mb-2">Promocija i skaliranje:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• Lokalna citation building</li>
                      <li>• Google recenzije kampanje</li>
                      <li>• Performance analiza</li>
                      <li>• A/B test landing stranica</li>
                      <li>• Skaliranje na dodatne lokacije</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Finalni saveti za uspeh</h4>
                    <ul className="text-yellow-700 space-y-2">
                      <li>• <strong>Započnite sa 3-5 mikrosajtova:</strong> Ne pokušavajte odmah 20+, fokusirajte se na kvalitet</li>
                      <li>• <strong>Merite sve:</strong> Bez podataka ne možete da optimizujete</li>
                      <li>• <strong>Budite strpljivi:</strong> Rezultati se vide posle 60-90 dana</li>
                      <li>• <strong>Fokus na korisnico iskustvo:</strong> SEO je važan, ali korisnik donosi novac</li>
                      <li>• <strong>Automatizujte postupno:</strong> Prvo uspostavite proces, zatim automatizujte</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Spremni ste za dominaciju lokalnih pretaga?</h4>
                <p className="text-lg mb-6">
                  Sa znanjem iz ovog vodiča imate sve što je potrebno da implementirate strategiju mikrosajtova i drastično povećate broj kvalifikovanih lead-ova za svoj biznis.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Počnite danas
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Share2 className="w-4 h-4 mr-2" />
                    Podelite strategiju
                  </Button>
                </div>
              </div>
            </section>

            {/* Quiz sekcija */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Testirajte vaše znanje!</h3>
                <p className="text-gray-600">Proverite koliko ste razumeli strategiju mikrosajtova kroz ovaj kviz</p>
              </div>

              <Quiz questions={quizQuestions} />
            </div>

            {/* CTA sekcija */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Trebate pomoć sa implementacijom mikrosajtova?</h3>
              <p className="text-lg mb-6">
                Naš tim stručnjaka može da vam pomogne da kreirate i upravljate mrežom mikrosajtova koji će dominirati u vašoj lokalnoj oblasti i doneti konstantan priliv kvalifikovanih kupaca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Zakažite konsultacije
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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

export default BlogArticle25;