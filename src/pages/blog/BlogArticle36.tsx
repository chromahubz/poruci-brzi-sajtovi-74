import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle36 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Performance</Badge>
              <Badge className="bg-white/20 text-white border-0">Optimizacija</Badge>
              <Badge className="bg-white/20 text-white border-0">Speed</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Optimizacija brzine sajta: Vodič za Core Web Vitals u 2025
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>12. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Milica Stojanović</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>15 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Brzina sajta je ključni faktор za uspeh u 2025. Google's Core Web Vitals su postali ranking faktor,
                a korisnici napuštaju sajt ako se ne učita za 3 sekunde. Evo kompletnog vodiča za optimizaciju.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto je brzina sajta kritična?</h2>

              <p className="text-gray-600 mb-6">
                Istraživanja pokazuju dramatičan uticaj brzine na poslovne rezultate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-800 mb-3">Negativni uticaj sporog sajta:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 53% korisnika napušta mobilni sajt ako se učitava duže od 3s</li>
                    <li>• 1 sekunda kašnjenja = 7% manje konverzija</li>
                    <li>• 40% korisnika napušta sajt nakon 3 sekunde</li>
                    <li>• Loš page experience = niži Google ranking</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-800 mb-3">Benefiti brzog sajta:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Pinterest povećao konverzije za 15% (brzina ↓40%)</li>
                    <li>• Walmart povećao konverzije za 2% po 1s poboljšanja</li>
                    <li>• Bolja SEO pozicija</li>
                    <li>• Povećano korisničko zadovoljstvo</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Core Web Vitals objašnjeni</h2>

              <p className="text-gray-600 mb-6">
                Google je definisao tri ključne metrike koje direktno utiču na korisničko iskustvo:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">LCP</div>
                    Largest Contentful Paint (LCP)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Šta meri:</p>
                      <p className="text-sm">Vreme potrebno da se učita najveći vidljivi element na stranici</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Ciljne vrednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <span className="text-green-600">Dobro:</span> ≤ 2.5s</li>
                        <li>• <span className="text-yellow-600">Treba poboljšanje:</span> 2.5s - 4s</li>
                        <li>• <span className="text-red-600">Loše:</span> &gt; 4s</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">FID</div>
                    First Input Delay (FID)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Šta meri:</p>
                      <p className="text-sm">Vreme od prve interakcije korisnika do odgovora pregledača</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Ciljne vrednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <span className="text-green-600">Dobro:</span> ≤ 100ms</li>
                        <li>• <span className="text-yellow-600">Treba poboljšanje:</span> 100ms - 300ms</li>
                        <li>• <span className="text-red-600">Loše:</span> &gt; 300ms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">CLS</div>
                    Cumulative Layout Shift (CLS)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Šta meri:</p>
                      <p className="text-sm">Koliko se elementi pomeraju tokom učitavanja stranice</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Ciljne vrednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• <span className="text-green-600">Dobro:</span> ≤ 0.1</li>
                        <li>• <span className="text-yellow-600">Treba poboljšanje:</span> 0.1 - 0.25</li>
                        <li>• <span className="text-red-600">Loše:</span> &gt; 0.25</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Kako meriti performanse sajta</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Besplatni Google alati:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">PageSpeed Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Analiza Core Web Vitals</li>
                    <li>• Real-world i lab podaci</li>
                    <li>• Konkretni saveti za poboljšanje</li>
                    <li>• Mobilna i desktop verzija</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">URL: pagespeed.web.dev</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Search Console</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Core Web Vitals report</li>
                    <li>• Problematične stranice</li>
                    <li>• Trendovi kroz vreme</li>
                    <li>• URL grupiranje</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">Deo Google Search Console</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Lighthouse</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ugrađen u Chrome DevTools</li>
                    <li>• Performance audit</li>
                    <li>• Accessibility provera</li>
                    <li>• SEO analiza</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">F12 → Lighthouse tab</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Web Vitals Extension</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Real-time merenje</li>
                    <li>• CLS visual feedback</li>
                    <li>• Instant rezultati</li>
                    <li>• Jednostavna instalacija</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">Chrome Web Store</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Optimizacija LCP (Largest Contentful Paint)</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Optimizacija slika</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Next-gen formati:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Format</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Kompresija</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Browser podrška</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Preporučeno za</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium">WebP</td>
                        <td className="px-4 py-2 text-sm text-green-600">25-35% bolje od JPEG</td>
                        <td className="px-4 py-2 text-sm">96% browser-a</td>
                        <td className="px-4 py-2 text-sm">Sve slike</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium">AVIF</td>
                        <td className="px-4 py-2 text-sm text-green-600">50% bolje od JPEG</td>
                        <td className="px-4 py-2 text-sm">71% browser-a</td>
                        <td className="px-4 py-2 text-sm">Hero slike</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm font-medium">JPEG XL</td>
                        <td className="px-4 py-2 text-sm text-green-600">60% bolje od JPEG</td>
                        <td className="px-4 py-2 text-sm">Ograničeno</td>
                        <td className="px-4 py-2 text-sm">Budućnost</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Preload kritičnih resursa</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">Koristite resource hints za kritične resurse:</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- Preload hero slika -->
<link rel="preload" as="image" href="hero.webp">

<!-- Preload kritični CSS -->
<link rel="preload" as="style" href="critical.css">

<!-- Preload font -->
<link rel="preload" as="font" type="font/woff2"
      href="font.woff2" crossorigin>

<!-- DNS prefetch za spoljnje domene -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Server optimizacija</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">CDN (Content Delivery Network):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Cloudflare:</strong> Besplatan plan, globalna mreža</li>
                    <li>• <strong>AWS CloudFront:</strong> Pay-as-you-go</li>
                    <li>• <strong>KeyCDN:</strong> Evropski fokus</li>
                    <li>• Smanjuje TTFB za 40-60%</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Server response optimizacija:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>HTTP/2:</strong> Multiplexing, server push</li>
                    <li>• <strong>Gzip/Brotli:</strong> Kompresija fajlova</li>
                    <li>• <strong>Database optimizacija:</strong> Indeksi, query cache</li>
                    <li>• <strong>Caching strategija:</strong> Browser + server cache</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Optimizacija FID (First Input Delay)</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. JavaScript optimizacija</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Code splitting:</h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// React lazy loading
const LazyComponent = React.lazy(() => import('./Component'));

// Dynamic imports
const module = await import('./heavyModule.js');

// Route-based splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));`}
                  </pre>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Tree shaking i minifikacija:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Webpack/Vite:</strong> Automatsko uklanjanje nekorišćenog koda</li>
                    <li>• <strong>Terser:</strong> JavaScript minifikacija</li>
                    <li>• <strong>PurgeCSS:</strong> Uklanjanje nekorišćenog CSS-a</li>
                    <li>• <strong>Bundle analyzer:</strong> Analiza veličine bundle-a</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Third-party skripti</h3>

              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Česti krivci za spor FID:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Google Analytics/Tag Manager:</strong> Koristite async učitavanje</li>
                  <li>• <strong>Social media widget-i:</strong> Lazy load ili zamena static slikama</li>
                  <li>• <strong>Advertising skripti:</strong> Ograničite broj ad network-a</li>
                  <li>• <strong>Font servisi:</strong> Self-host kritične fontove</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Savety:</strong> Koristite async ili defer za non-critical skripte i testira posledice uklanjanja.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Optimizacija CLS (Cumulative Layout Shift)</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Rezervacija prostora</h3>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Rezervacija prostora za slike:</h4>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`<!-- HTML sa defined dimenzijama -->
<img src="image.jpg" width="800" height="600" alt="Description">

<!-- CSS aspect ratio -->
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

<!-- Responsive sa aspect ratio -->
.responsive-image {
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Font loading strategija</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">font-display options:</h4>
                <ul className="space-y-3">
                  <li>• <strong>font-display: swap;</strong> - Prikazuje fallback font odmah, menja kad se učita</li>
                  <li>• <strong>font-display: fallback;</strong> - Kratko invisible period, zatim fallback</li>
                  <li>• <strong>font-display: optional;</strong> - Koristi font samo ako je brzo dostupan</li>
                </ul>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto mt-4">
{`@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
  font-display: swap;
}`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Advanced optimizacije za 2025</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Service Workers i caching</h3>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Workbox strategije:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>CacheFirst:</strong> Za statične resurse (slike, fontovi)</li>
                  <li>• <strong>NetworkFirst:</strong> Za dinamični sadržaj (API pozivi)</li>
                  <li>• <strong>StaleWhileRevalidate:</strong> Za često menjane resurse</li>
                  <li>• <strong>NetworkOnly:</strong> Za analytics i kritične zahtevi</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Edge computing</h3>

              <div className="bg-cyan-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Edge Functions/Workers:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Cloudflare Workers:</strong> JavaScript na CDN edge</li>
                  <li>• <strong>Vercel Edge Functions:</strong> Bliži korisnicima</li>
                  <li>• <strong>Netlify Edge Handlers:</strong> Geo-distributed logic</li>
                  <li>• Smanjuje latency za 50-70%</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Monitoring i održavanje</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kontinuirano praćenje:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Real User Monitoring (RUM):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Google Analytics 4 (Web Vitals)</li>
                    <li>• New Relic Browser</li>
                    <li>• DataDog RUM</li>
                    <li>• Web Vitals JavaScript library</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Synthetic monitoring:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• GTmetrix scheduled tests</li>
                    <li>• Pingdom speed tests</li>
                    <li>• WebPageTest API</li>
                    <li>• Lighthouse CI integration</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Checklist za optimizaciju</h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Pre-launch checklist:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">LCP optimizacija:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>☐ WebP/AVIF format slika</li>
                      <li>☐ Preload hero slika</li>
                      <li>☐ CDN setup</li>
                      <li>☐ Image lazy loading</li>
                      <li>☐ Critical CSS inline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">FID optimizacija:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>☐ Code splitting</li>
                      <li>☐ Third-party script audit</li>
                      <li>☐ JavaScript minifikacija</li>
                      <li>☐ Async/defer skripti</li>
                      <li>☐ Service worker cache</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">CLS optimizacija:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>☐ Image dimensions set</li>
                      <li>☐ Font-display: swap</li>
                      <li>☐ Ad space reservation</li>
                      <li>☐ No dynamic content injection</li>
                      <li>☐ Smooth animations only</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Monitoring setup:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>☐ Search Console connected</li>
                      <li>☐ Analytics Web Vitals</li>
                      <li>☐ Uptime monitoring</li>
                      <li>☐ Performance budget</li>
                      <li>☐ CI/CD performance tests</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Optimizacija Core Web Vitals nije jednokratni posao - to je kontinuirani proces koji zahteva monitoring,
                testiranje i iteraciju. U 2025. godini, brzina sajta postaje još kritičnija za SEO i korisničko iskustvo.
              </p>

              <p className="text-gray-600 mb-8">
                Investiranje u performance optimizaciju donosi direktne rezultate: bolje konverzije, viši Google ranking
                i zadovoljnije korisnike. Počnite sa osnovnim optimizacijama i postupno implementirajte naprednije tehnike.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Core Web Vitals", "brzina sajta", "LCP optimizacija", "FID poboljšanje", "CLS fix", "PageSpeed Insights", "performance optimization", "Google ranking faktori"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potrebna vam je optimizacija performansi?</CardTitle>
              <CardDescription className="text-cyan-100">
                Profesionalna optimizacija brzine koja donosi rezultate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-cyan-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Optimizujte svoj sajt
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle36;