import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp, Users, Globe, CheckCircle, Star, Clock, Eye, BarChart, Gauge, Image, Smartphone, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { Quiz } from "@/components/Quiz";

const BlogArticle5 = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-medium">PERFORMANSE SAJTA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Brzina sajta - Zašto svaka sekunda kašnjenja košta novac
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Otkrijte kako optimizacija performansi može da poveća konverzije za 25% i ranking na Google-u. Praktični vodič kroz optimizaciju brzine sajta.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>12 min čitanja</span>
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
                Zamislite da imate fizičku radnju i da svaki put kada neko pokuša da uđe, vrata se otvaraju tek posle 5 sekunda. Koliko bi kupaca prosto otišlo kod konkurencije? Na internetu je situacija identična - brzina vašeg sajta direktno utiče na profit vašeg biznisa.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Najnovija istraživanja pokazuju da čak jedna sekunda kašnjenja u učitavanju može smanjiti konverzije za 7%, a šteta raste eksponencijalno. Amazon je izračunao da bi im svaki dodatni 100ms kašnjenja koštao 1.6 milijardi dolara godišnje. Google, Walmart, Microsoft - svi tehnološki giganti inestiraju ogromne resurse u optimizaciju performansi jer znaju: brzina = novac.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                U ovom detaljnom vodiču ćemo pokriti sve aspekte optimizacije performansi - od tehničkih osnova do naprednih strategija koje koriste najveći svetski sajtovi. Saznajte kako da svoj sajt učinite brzim kao munja i pretvorite posetioce u kupce.
              </p>
            </div>

            {/* Speed Impact Statistics */}
            <Card className="mb-12 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-yellow-800">
                  <BarChart className="w-6 h-6" />
                  <span>Zašto brzina direktno utiče na profit</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-yellow-800 font-medium">
                  Ove statistike će vam otvoriti oči na stvarni uticaj brzine sajta:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">53% korisnika napušta mobilni sajt koji se učitava duže od 3 sekunde</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">1 sekunda kašnjenja = 11% manje pregleda stranica</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Povećanje brzine za 1 sekunku može povećati konverzije za 12%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">47% kupaca očekuje da se stranica učita za 2 sekunde ili manje</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Pinterest je smanjio load time za 40% i povećao search traffic za 15%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">COOK je povećao konverzije za 7% smanjenjem load time za 0.85 sekundi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">BBC je gubio 10% korisnika za svaku dodatnu sekuntu učitavanja</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Mobify je povećao revenue per visitor za 1.11% za svaki smanjeni 100ms</span>
                    </div>
                  </div>
                </div>

                <p className="text-yellow-800 text-sm">
                  Ove brojke nisu teorija - to su stvarni rezultati merena kroz A/B testiranje na milijardama korisnika. Brzina vašeg sajta nije tehnička detalj, već ključni business factor.
                </p>
              </CardContent>
            </Card>

            {/* Core Web Vitals */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Gauge className="w-8 h-8 text-primary" />
                <span>Core Web Vitals - Google metriki koji određuju vaš ranking</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Od maja 2021. godine Google je oficijalno uključio Core Web Vitals kao faktor rangiranja. Ove tri metrike mere stvarno korisničko iskustvo i direktno utiču na poziciju vašeg sajta u search rezultatima. Razumevanje i optimizacija ovih metrika je kritična za SEO uspeh.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-blue-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-blue-700">LCP - Largest Contentful Paint</CardTitle>
                    <CardDescription>Brzina učitavanja glavnog sadržaja</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{"<2.5s"}</p>
                      <p className="text-sm text-muted-foreground">Odličan rezultat</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Šta meri:</p>
                      <p className="text-xs text-muted-foreground">
                        Vreme potrebno da se učita najveći vidljivi element na stranici (obično hero slika ili glavni tekst)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Zašto je važno:</p>
                      <p className="text-xs text-muted-foreground">
                        Određuje kada korisnik percipira da je stranica "učitana"
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-green-700">FID - First Input Delay</CardTitle>
                    <CardDescription>Responsivnost na korisničke akcije</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{"<100ms"}</p>
                      <p className="text-sm text-muted-foreground">Odličan rezultat</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Šta meri:</p>
                      <p className="text-xs text-muted-foreground">
                        Vreme između klika korisnika i kad browser počne da procesirajući korisničku akciju
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Zašto je važno:</p>
                      <p className="text-xs text-muted-foreground">
                        Određuje koliko se sajt čini "responzivan" prilikom interakcije
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-purple-700">CLS - Cumulative Layout Shift</CardTitle>
                    <CardDescription>Vizuelna stabilnost tokom učitavanja</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">{"<0.1"}</p>
                      <p className="text-sm text-muted-foreground">Odličan rezultat</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Šta meri:</p>
                      <p className="text-xs text-muted-foreground">
                        Koliko se elementi pomeraju na stranici tokom učitavanja
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Zašto je važno:</p>
                      <p className="text-xs text-muted-foreground">
                        Sprečava frustrirajuće situacije gde korisnik klikne pogrešno dugme
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimizacija Core Web Vitals nije samo tehnička vežba - to je način da pokažete Google-u da stvarno brinete o korisničkom iskustvu. Sajtovi sa dobrim Core Web Vitals rezultatima imaju priliku da se rangiraju bolje čak i ako njihov sadržaj nije najbolji u kategoriji.
              </p>
            </div>

            {/* Image Optimization */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Image className="w-8 h-8 text-primary" />
                <span>Optimizacija slika - Najveći uzrok sporog sajta</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Slike čine u proseku 65% ukupne veličine web stranice. Jedna neoptimizovana slika može da košta više od celog ostatka sajta. Dobra vest je da optimizacija slika može dramično poboljšati performanse sa relativno malo posla.
              </p>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Moderne formati slika</CardTitle>
                  <CardDescription>
                    Kako izbor formata utiče na brzinu učitavanja
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-green-600">Preporučeni formati</h4>
                      <div className="space-y-3">
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">WebP</h5>
                          <p className="text-sm text-muted-foreground">25-35% manje od JPEG, podržava transparentnost</p>
                          <p className="text-xs text-green-600">Podržano u 96% browsera</p>
                        </div>
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">AVIF</h5>
                          <p className="text-sm text-muted-foreground">50% manje od JPEG, najbolji kvalitet</p>
                          <p className="text-xs text-green-600">Podržano u 73% browsera</p>
                        </div>
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">SVG</h5>
                          <p className="text-sm text-muted-foreground">Vektorski format, perfektan za ikone i logove</p>
                          <p className="text-xs text-green-600">Universalno podržano</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-red-600">Zastareli formati</h4>
                      <div className="space-y-3">
                        <div className="border border-red-200 rounded-lg p-3">
                          <h5 className="font-medium">JPEG/JPG</h5>
                          <p className="text-sm text-muted-foreground">Veliki fajlovi, zastarela kompresija</p>
                          <p className="text-xs text-red-600">Koristiti samo kao fallback</p>
                        </div>
                        <div className="border border-red-200 rounded-lg p-3">
                          <h5 className="font-medium">PNG</h5>
                          <p className="text-sm text-muted-foreground">Ogromni fajlovi, spor učitavanje</p>
                          <p className="text-xs text-red-600">Samo za slike sa transparentnošću</p>
                        </div>
                        <div className="border border-red-200 rounded-lg p-3">
                          <h5 className="font-medium">GIF</h5>
                          <p className="text-sm text-muted-foreground">Ograničen broj boja, loš kvalitet</p>
                          <p className="text-xs text-red-600">Zameniti sa video formatima</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Responsive images i lazy loading</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Responsive images</h4>
                    <p className="text-muted-foreground">
                      Delivering različite veličine slika za različite ekrane je ključno za optimizaciju. Telefon ne treba sliku od 4K rezolucije - to samo troši data plan korisnika i usporava sajt.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {"<img srcset=\"hero-small.webp 480w, hero-medium.webp 768w, hero-large.webp 1200w\" sizes=\"(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px\" src=\"hero-medium.webp\" alt=\"Hero image\" />"}
                      </code>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Lazy loading</h4>
                    <p className="text-muted-foreground">
                      Slike se učitavaju tek kada korisnik skroluje do njih. Ovo može poboljšati initial page load time za 50-70% na stranicama sa puno slika.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {"<img src=\"image.webp\" loading=\"lazy\" alt=\"Description\" />"}
                      </code>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Image CDN servisi</h4>
                    <p className="text-muted-foreground">
                      CDN servisi kao što su Cloudinary, ImageKit ili Cloudflare automatski optimizuju slike u real-time. Oni služe slike u najboljem formatu za svaki browser i kompresuju ih bez gubitka kvaliteta.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Optimizations */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Globe className="w-8 h-8 text-primary" />
                <span>Tehnička optimizacija za maksimalne performanse</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimizacija slika je početak, ali postoji čitav niz tehničkih optimizacija koje mogu značajno poboljšati brzinu sajta. Ove optimizacije zahtevaju tehnická znanja, ali rezultati su spektakularni.
              </p>

              {/* Caching */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Wifi className="w-6 h-6 text-primary" />
                    <span>Caching strategije</span>
                  </CardTitle>
                  <CardDescription>
                    Kako da izbegnete nepotreban rad servera
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Browser caching</h4>
                    <p className="text-muted-foreground">
                      Browser caching govori korisnikovom browser-u da sačuva kopiju resursa (CSS, JS, slike) lokalno. Kada korisnik ponovo poseti sajt, browser neće ponovo da download-uje iste fajlove. Ovo može da smanji load time za 50-80% za returning visitors.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Preporučena cache headers:</p>
                      <ul className="text-xs space-y-1">
                        <li>• Slike: Cache-Control: public, max-age=31536000 (1 godina)</li>
                        <li>• CSS/JS: Cache-Control: public, max-age=31536000 (1 godina)</li>
                        <li>• HTML: Cache-Control: public, max-age=3600 (1 sat)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">CDN (Content Delivery Network)</h4>
                    <p className="text-muted-foreground">
                      CDN distributira vaš sadržaj preko mreže servera širom sveta. Korisnik iz Beograda će dobiti sadržaj sa servera u Frankfurtu, a ne iz Amerike. Ovo može smanjiti load time za 40-60% za internacionalne posetioce.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 border rounded-lg">
                        <p className="font-medium text-sm">Cloudflare</p>
                        <p className="text-xs text-muted-foreground">Besplatan plan</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <p className="font-medium text-sm">KeyCDN</p>
                        <p className="text-xs text-muted-foreground">Pay-as-you-go</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <p className="font-medium text-sm">Amazon CloudFront</p>
                        <p className="text-xs text-muted-foreground">AWS ekosistem</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <p className="font-medium text-sm">MaxCDN</p>
                        <p className="text-xs text-muted-foreground">Premium opcija</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Server-side caching</h4>
                    <p className="text-muted-foreground">
                      Umesto da server generiše istu HTML stranicu svaki put, caching čuva gotov HTML i služi ga instantly. Redis, Memcached, ili file-based caching mogu poboljšati server response time za 90%.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Code Optimization */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <span>Optimizacija koda</span>
                  </CardTitle>
                  <CardDescription>
                    Minimizovanje i optimizacija CSS, JavaScript, i HTML
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Minifikacija i kompresija</h4>
                    <p className="text-muted-foreground">
                      Minifikacija uklanja sve nepotrebne karaktere iz koda (space, komentari, line breaks). Gzip kompresija dodatno smanjuje veličinu fajlova za 70-90%. Kombinacija ova dva može smanjiti CSS i JS fajlove za preko 85%.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h5 className="font-medium text-red-600 mb-2">Pre optimizacije</h5>
                        <div className="bg-red-50 p-2 rounded text-xs">
                          <p>styles.css: 245KB</p>
                          <p>script.js: 187KB</p>
                          <p>vendor.js: 890KB</p>
                          <p><strong>Ukupno: 1.32MB</strong></p>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h5 className="font-medium text-green-600 mb-2">Posle optimizacije</h5>
                        <div className="bg-green-50 p-2 rounded text-xs">
                          <p>styles.min.css.gz: 32KB</p>
                          <p>script.min.js.gz: 28KB</p>
                          <p>vendor.min.js.gz: 156KB</p>
                          <p><strong>Ukupno: 216KB (-84%)</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Tree shaking i code splitting</h4>
                    <p className="text-muted-foreground">
                      Tree shaking uklanja neiskorišten kod iz final bundle. Code splitting deli kod u manje delove koji se učitavaju po potrebi. Umesto da učitate ceo JavaScript bundle od 800KB, možete učitati 50KB za početnu stranu, a ostatak po potrebi.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Critical CSS</h4>
                    <p className="text-muted-foreground">
                      Critical CSS izdvaja stilove potrebne za "above the fold" sadržaj i uključuje ih direktno u HTML. Ostali stilovi se učitavaju asinhrono. Ovo eliminiše render-blocking CSS i poboljšava First Contentful Paint.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mobile Performance */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Smartphone className="w-8 h-8 text-primary" />
                <span>Mobilne performanse - Kritični faktor uspeha</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Sa preko 60% web saobraćaja koji dolazi sa mobilnih uređaja, optimizacija za mobilne performanse nije opcija - to je neophodnost. Mobilni korisnici su manje strpljivi, često su na sporije konekciji, i imaju ograničene resurse device-a.
              </p>

              <Card className="mb-8 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Mobilne challenges i rešenja</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-700">Tipični mobilni problemi:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-sm">Sporija mrežna konekcija (3G/4G)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-sm">Ograničena processing moć CPU</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-sm">Manje RAM memorije</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-sm">Ograničen data plan korisnika</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <span className="text-sm">Veći battery drain od kompleksnih stranica</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-700">Proven solutions:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Adaptive loading based na connection speed</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Smaller images i lower quality na slow connections</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Prioritized loading of essential content</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Service workers za offline functionality</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm">Resource hints (preload, prefetch)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Progressive Web Apps (PWA)</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PWA je tehnologija koja vašem sajtu daje native app iskustvo. PWA sajtovi mogu da rade offline, pošalju push notifikacije, i instaliraju se na home screen. Google favorizuje PWA sajtove i oni često imaju bolje performanse i engagement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Wifi className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold">Offline functionality</h4>
                      <p className="text-sm text-muted-foreground">Sajt radi čak i bez internet konekcije</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold">App-like experience</h4>
                      <p className="text-sm text-muted-foreground">Native app feeling u browser-u</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold">Instant loading</h4>
                      <p className="text-sm text-muted-foreground">Cache-d sadržaj se učitava instantly</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Performance Monitoring */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <BarChart className="w-8 h-8 text-primary" />
                <span>Monitoring i kontinuirano poboljšanje</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimizacija performansi nije one-time zadatak - to je kontinuiran proces. Performanse se mogu pogoršati dodavanjem novog sadržaja, slika, ili funkcionalnosti. Redovno monitoring je ključan za održavanje brzog sajta.
              </p>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Alati za monitoring performansi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-600">Besplatni alati</h4>
                      <div className="space-y-3">
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">Google PageSpeed Insights</h5>
                          <p className="text-sm text-muted-foreground">Analiza Core Web Vitals i konkretni predlozi</p>
                        </div>
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">GTmetrix</h5>
                          <p className="text-sm text-muted-foreground">Detaljno performance analysis sa waterfall chart</p>
                        </div>
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">WebPageTest</h5>
                          <p className="text-sm text-muted-foreground">Testiranje sa različitih lokacija i device-ova</p>
                        </div>
                        <div className="border border-green-200 rounded-lg p-3">
                          <h5 className="font-medium">Chrome DevTools</h5>
                          <p className="text-sm text-muted-foreground">Real-time debugging i optimizacija</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-600">Premium monitoring</h4>
                      <div className="space-y-3">
                        <div className="border border-blue-200 rounded-lg p-3">
                          <h5 className="font-medium">Pingdom</h5>
                          <p className="text-sm text-muted-foreground">Kontinuiran monitoring sa alertovima</p>
                        </div>
                        <div className="border border-blue-200 rounded-lg p-3">
                          <h5 className="font-medium">New Relic</h5>
                          <p className="text-sm text-muted-foreground">Aplikacijski performance monitoring</p>
                        </div>
                        <div className="border border-blue-200 rounded-lg p-3">
                          <h5 className="font-medium">SpeedCurve</h5>
                          <p className="text-sm text-muted-foreground">Performance budgets i competitive analysis</p>
                        </div>
                        <div className="border border-blue-200 rounded-lg p-3">
                          <h5 className="font-medium">Cloudflare Analytics</h5>
                          <p className="text-sm text-muted-foreground">Real user metrics (RUM) data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Performance budgets</CardTitle>
                  <CardDescription>
                    Kako da održite brzinu tokom razvoja
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Performance budget je limit koji postavljate za veličinu i brzinu sajta. Ovo sprečava da developeri slučajno dodaju "težak" sadržaj koji će usporiti sajt.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-green-600">Total page weight</h4>
                      <p className="text-2xl font-bold">{"<1.5MB"}</p>
                      <p className="text-sm text-muted-foreground">Maksimalna veličina stranice</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-blue-600">Time to Interactive</h4>
                      <p className="text-2xl font-bold">{"<5s"}</p>
                      <p className="text-sm text-muted-foreground">Na 3G konekciji</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <h4 className="font-semibold text-purple-600">JavaScript budget</h4>
                      <p className="text-2xl font-bold">{"<200KB"}</p>
                      <p className="text-sm text-muted-foreground">Ukupni JS bundle</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Real Case Studies */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span>Case studies - Rezultati optimizacije performansi</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Evo nekoliko realnih primera kako optimizacija performansi direktno utiče na business rezultate. Ovi brojevi nisu teorija - to su stvarni business rezultati merena kroz A/B testiranje:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">AliExpress</CardTitle>
                    <CardDescription className="text-green-700">E-commerce platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Optimizacija:</p>
                      <p className="text-sm text-muted-foreground">Smanjili load time za 36%</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Rezultati:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 10.5% više orders</li>
                        <li>• 27% više conversion rate</li>
                        <li>• 8.5% više revenue per visitor</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Walmart</CardTitle>
                    <CardDescription className="text-blue-700">Retail giant</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Optimizacija:</p>
                      <p className="text-sm text-muted-foreground">Poboljšali performance za 1 sekunku</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Rezultati:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 2% povećanje konverzija</li>
                        <li>• $274M dodatnog revenue</li>
                        <li>• 1% povećanje za svaki 100ms</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Mobify</CardTitle>
                    <CardDescription className="text-purple-700">E-commerce platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Optimizacija:</p>
                      <p className="text-sm text-muted-foreground">Smanjili homepage load time za 65%</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Rezultati:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 18% povećanje u revenue</li>
                        <li>• 13% više konverzija</li>
                        <li>• 74% povećanje u traffic</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-800">Pinterest</CardTitle>
                    <CardDescription className="text-yellow-700">Social media platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Optimizacija:</p>
                      <p className="text-sm text-muted-foreground">Rebuild app sa fokusom na performance</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Rezultati:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 40% smanjenje wait time</li>
                        <li>• 15% povećanje SEO traffic</li>
                        <li>• 50% povećanje mobile revenue</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Ovi rezultati jasno pokazuju da optimizacija performansi nije tehnička sitnica - to je kritični business imperative. Investicija u brzinu sajta se vraća kroz povećane konverzije, bolje SEO rangiranje, i poboljšano korisničko zadovoljstvo.
              </p>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-primary text-primary-foreground mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Trebate brž sajt koji konvertuje više klijenata?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Naš tim performance stručnjaka će optimizovati vaš sajt za maksimalne rezultate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm opacity-90">
                  Kontaktirajte nas za besplatnu analizu performansi i saznajte koliko brže može biti vaš sajt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" asChild size="lg">
                    <Link to="/kontakt">
                      <Zap className="w-4 h-4 mr-2" />
                      Besplatna analiza brzine
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild size="lg">
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
              <h2 className="text-3xl font-bold text-foreground">Testirajte svoje znanje o performansama sajta</h2>
              <Quiz
                questions={[
                  {
                    question: "Koliko korisnika napušta mobilni sajt koji se učitava duže od 3 sekunde?",
                    options: [
                      "43%",
                      "48%",
                      "53%",
                      "58%"
                    ],
                    correct: 2,
                    explanation: "53% korisnika napušta mobilni sajt koji se učitava duže od 3 sekunde, što jasno pokazuje kritičnost brzine učitavanja za zadržavanje posetilaca."
                  },
                  {
                    question: "Za koliko procenata može da smanji konverzije jedna sekunda kašnjenja?",
                    options: [
                      "5%",
                      "7%",
                      "9%",
                      "11%"
                    ],
                    correct: 1,
                    explanation: "Jedna sekunda kašnjenja u učitavanju može smanjiti konverzije za 7%. Ova statistika je potvrđena kroz više nezavisnih studija i A/B testiranja."
                  },
                  {
                    question: "Koja je preporučena maksimalna vrednost za LCP (Largest Contentful Paint)?",
                    options: [
                      "1.5 sekundi",
                      "2.5 sekundi",
                      "3.5 sekundi",
                      "4.5 sekundi"
                    ],
                    correct: 1,
                    explanation: "LCP treba da bude manji od 2.5 sekundi za odličan rezultat. LCP meri vreme potrebno da se učita najveći vidljivi element na stranici."
                  },
                  {
                    question: "Koji format slika pruža najmanju veličinu fajla?",
                    options: [
                      "JPEG",
                      "PNG",
                      "WebP",
                      "AVIF"
                    ],
                    correct: 3,
                    explanation: "AVIF format pruža najmanju veličinu fajla - do 50% manje od JPEG-a uz bolji kvalitet. Međutim, podržano je u 73% browsera, dok je WebP univerzalniji izbor."
                  },
                  {
                    question: "Koliko Amazon gubi godišnje zbog svakih dodatnih 100ms kašnjenja?",
                    options: [
                      "1.2 milijarde dolara",
                      "1.4 milijarde dolara",
                      "1.6 milijardi dolara",
                      "1.8 milijardi dolara"
                    ],
                    correct: 2,
                    explanation: "Amazon je izračunao da bi im svaki dodatni 100ms kašnjenja koštao 1.6 milijardi dolara godišnje, što pokazuje direktan uticaj brzine na profit velikih kompanija."
                  }
                ]}
              />
            </div>

            {/* Conclusion */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Zaključak</h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Brzina sajta u 2025. godini nije tehnička preferenca - to je business necessity. Svaka sekunda kašnjenja direktno utiče na vaš profit, Google ranking, i korisničko zadovoljstvo. Činjenica da 53% mobilnih korisnika napusti sajt koji se učitava duže od 3 sekunde govori sve.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Optimizacija performansi nije jednokratna aktivnost već kontinuiran proces. Kako se vaš sajt razvija i dodaju novi sadržaj i funkcionalnosti, performanse se mogu degradirati. Redovno monitoring, performance budgets, i proaktivna optimizacija su ključni za dugoročan uspeh.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Najvažnije je početi. Čak i osnovne optimizacije kao što su kompresija slika, minifikacija koda, i browser caching mogu doneti dramatično poboljšanje. Kako se budete bolje upoznali sa tehnologijama, možete implementirati naprednije strategije kao što su service workers, adaptive loading, i edge computing.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Zapamtite: vaša konkurencija možda ne optimizuje performanse. To vam daje priliku da se izdvojite brzim, responsive sajtem koji korisnici vole da koriste. U svetu gde je attention span sve kraći, brzina vašeg sajta može biti ključna differentiator koja donosi uspeh vašem biznisu.
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/1" className="hover:text-primary transition-colors">
                    Izrada sajta za 50€ - Da li je to realno?
                  </Link>
                </CardTitle>
                <CardDescription>
                  Istina o jeftinoj izradi sajtova i šta možete očekivati
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/1">
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

export default BlogArticle5;