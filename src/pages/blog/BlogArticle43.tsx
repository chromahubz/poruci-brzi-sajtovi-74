import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle43 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">WordPress</Badge>
              <Badge className="bg-white/20 text-white border-0">CMS</Badge>
              <Badge className="bg-white/20 text-white border-0">Optimizacija</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WordPress Optimizacija 2025: Kako ubrzati sajt za 300% i povećati konverzije
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>1. Februar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Petar Stojanović</span>
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
                Spor WordPress sajt može koštati vaš biznis hiljade eura godišnje. Istraživanja pokazuju da
                1 sekunda kašnjenja smanjuje konverzije za 7%. Evo kompletnog vodiča kako da ubrzate
                WordPress sajt i povećate performanse do 300%.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto je brzina WordPress sajta kritična za biznis?</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">Uticaj brzine na biznis rezultate:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Amazon:</strong> 100ms sporiji sajt = 1% manje prihoda</li>
                  <li>• <strong>Google:</strong> 500ms kašnjenje = 20% manje pretrage</li>
                  <li>• <strong>Walmart:</strong> 1s brže učitavanje = 2% povećanje konverzije</li>
                  <li>• <strong>BBC:</strong> Svaka dodatna sekunda = 10% manje korisnika</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">WordPress performance statistike</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Prosečne brzine:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Neoptimizovan WP:</strong> 4-8 sekundi</li>
                    <li>• <strong>Optimizovan WP:</strong> 1-2 sekunde</li>
                    <li>• <strong>Premium hosting:</strong> 0.5-1 sekunda</li>
                    <li>• <strong>Cilj za 2025:</strong> &lt; 1.5 sekunde</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">SEO benefiti:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Bolji Google Core Web Vitals</li>
                    <li>• Viši rankovi u pretrazi</li>
                    <li>• Manje bounce rate-a</li>
                    <li>• Veći organic traffic</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. Hosting optimizacija - Temelj brzog sajta</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Izbor pravog hosting provajdera</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hosting tip</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Load time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cena mesečno</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Preporučeno za</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Shared hosting</td>
                      <td className="px-6 py-4 text-sm text-gray-900">3-6s</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$3-15</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mali blogovi, početnici</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">WordPress hosting</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1-3s</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$10-50</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Biznis sajtovi</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">VPS hosting</td>
                      <td className="px-6 py-4 text-sm text-gray-900">0.5-2s</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$25-100</td>
                      <td className="px-6 py-4 text-sm text-gray-900">E-commerce, visok traffic</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dedicated server</td>
                      <td className="px-6 py-4 text-sm text-gray-900">0.3-1s</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$100-500+</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Enterprise, kritični sajtovi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top WordPress hosting provajderi za Srbiju</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">WP Engine</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Managed WordPress hosting</li>
                        <li>• Ugrađen caching sistem</li>
                        <li>• Automatski backup-i</li>
                        <li>• CDN uključen</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-orange-600 font-medium mb-2">⚠ Napomene:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Skuplji od običnog hostinga</li>
                        <li>• Ograničeni plugin-ovi</li>
                        <li>• Dolazi sa premium support</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Cena:</strong> Od $20/mesec | <strong>Load time:</strong> 0.8-1.5s</p>
                </div>

                <div className="border p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">SiteGround</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Odličan customer support</li>
                        <li>• SSD storage</li>
                        <li>• Free SSL sertifikat</li>
                        <li>• WordPress auto-updates</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-orange-600 font-medium mb-2">⚠ Napomene:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Renewal cene su veće</li>
                        <li>• Storage ograničenja</li>
                        <li>• Dodatna naplata za migraciju</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Cena:</strong> Od $6.99/mesec | <strong>Load time:</strong> 1.2-2.5s</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. WordPress konfiguracija za brzinu</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">PHP optimizacije</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">PHP performance settings:</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                  <pre>{`; php.ini optimizations
memory_limit = 512M
max_execution_time = 300
max_input_vars = 3000
upload_max_filesize = 64M
post_max_size = 64M

; OpCache settings
opcache.enable=1
opcache.memory_consumption=256
opcache.max_accelerated_files=10000
opcache.revalidate_freq=60`}</pre>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">WordPress konstante za performanse</h3>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
                <pre>{`// wp-config.php optimizations
define('WP_CACHE', true);
define('COMPRESS_CSS', true);
define('COMPRESS_SCRIPTS', true);
define('CONCATENATE_SCRIPTS', true);
define('ENFORCE_GZIP', true);

// Disable file editing
define('DISALLOW_FILE_EDIT', true);

// Increase memory limit
define('WP_MEMORY_LIMIT', '512M');

// Enable debug for development only
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);`}</pre>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Caching strategije - Ključ brzine</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Najbolji caching plugin-ovi</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">WP Rocket (Premium - $59/god)</h4>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Page caching + browser caching</li>
                    <li>• GZIP compression</li>
                    <li>• Database cleanup</li>
                    <li>• Lazy loading za slike</li>
                    <li>• CDN integracija</li>
                  </ul>
                  <p className="text-xs text-gray-600"><strong>Performance boost:</strong> 40-60% brže učitavanje</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">W3 Total Cache (Besplatno)</h4>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Page cache</li>
                    <li>• Database cache</li>
                    <li>• Object cache</li>
                    <li>• Browser cache</li>
                    <li>• CDN support</li>
                  </ul>
                  <p className="text-xs text-gray-600"><strong>Performance boost:</strong> 25-40% brže učitavanje</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">LiteSpeed Cache (Besplatno)</h4>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Server-level caching</li>
                    <li>• Image optimization</li>
                    <li>• CSS/JS minification</li>
                    <li>• Database optimization</li>
                    <li>• ESI support</li>
                  </ul>
                  <p className="text-xs text-gray-600"><strong>Performance boost:</strong> 50-70% brže (samo na LiteSpeed serverima)</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Image optimizacija - Najveći performance killer</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Formati slika za web</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">JPEG optimizacija:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Kvalitet:</strong> 75-85% za web</li>
                    <li>• <strong>Progressive JPEG:</strong> Postupno učitavanje</li>
                    <li>• <strong>Tool:</strong> JPEGmini, TinyJPG</li>
                    <li>• <strong>Smanjenje:</strong> 60-80% manja veličina</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">WebP format:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Kompresija:</strong> 25-35% bolja od JPEG</li>
                    <li>• <strong>Podrška:</strong> 95%+ browsera</li>
                    <li>• <strong>Fallback:</strong> Automatic JPEG/PNG</li>
                    <li>• <strong>Tool:</strong> Squoosh, WebP Converter</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Image optimization plugin-ovi</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Smush (Freemium)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Bulk image optimization</li>
                    <li>• Lossless compression</li>
                    <li>• Lazy loading</li>
                    <li>• WebP conversion (Pro)</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">ShortPixel (Premium)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Najbolja kompresija na tržištu</li>
                    <li>• WebP + AVIF support</li>
                    <li>• PDF optimization</li>
                    <li>• API za developers</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Database optimizacija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Čišćenje WordPress baze</h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-3">Šta čistiti iz baze:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Revisions:</strong> Stare verzije postova (10,000+ entries)</li>
                  <li>• <strong>Spam comments:</strong> Automatski generirani spam</li>
                  <li>• <strong>Transients:</strong> Privremeni cache podaci</li>
                  <li>• <strong>Orphaned metadata:</strong> Nedovršene meta podaci</li>
                  <li>• <strong>Unused tags/categories:</strong> Prazne taksonomije</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Database optimization plugin-ovi</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">WP-Optimize</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Database cleanup</li>
                    <li>• Image optimization</li>
                    <li>• Cache functionality</li>
                    <li>• Scheduled optimization</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Advanced Database Cleaner</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Deep database scan</li>
                    <li>• Orphaned data cleanup</li>
                    <li>• Plugin data removal</li>
                    <li>• Security scan</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Plugin optimizacija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Plugin audit - Manje je više</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Plugin optimization checklist:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Deaktiviraj nekorišćene:</strong> Svaki plugin troši resurse</li>
                  <li>• <strong>Kombinuj funkcionalnosti:</strong> 1 multi-purpose &gt; 5 single-purpose</li>
                  <li>• <strong>Premium vs Free:</strong> Premium često brži i optimizovaniji</li>
                  <li>• <strong>Plugin conflicts:</strong> Testiraj interakcije između plugin-ova</li>
                  <li>• <strong>Regular updates:</strong> Najnovije verzije su brže i sigurnije</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Essential plugin-ovi za brzinu</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Query Monitor (Debug)</h4>
                  <p className="text-sm text-gray-600 mb-2">Analizira database queries, hook-ove i performance bottlenecks</p>
                  <p className="text-xs text-gray-500">Koristiti samo za development/testing</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Asset CleanUp (Optimization)</h4>
                  <p className="text-sm text-gray-600 mb-2">Selektivno učitavanje CSS/JS po stranicama</p>
                  <p className="text-xs text-gray-500">Smanjuje broj HTTP zahteva za 40-60%</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. CDN implementacija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cloudflare setup za WordPress</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Cloudflare optimizations:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Auto Minify:</strong> CSS, JS, HTML compression</li>
                  <li>• <strong>Brotli compression:</strong> Bolji od GZIP</li>
                  <li>• <strong>Polish:</strong> Automatic image optimization</li>
                  <li>• <strong>Mirage:</strong> Smart image loading</li>
                  <li>• <strong>Rocket Loader:</strong> Async JavaScript loading</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Performance testing i monitoring</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools za merenje brzine</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Google PageSpeed Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Core Web Vitals</li>
                    <li>• Mobile i Desktop analiza</li>
                    <li>• Konkretne preporuke</li>
                    <li>• Real User Metrics</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">GTmetrix</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Waterfall chart</li>
                    <li>• Video recording</li>
                    <li>• Historical tracking</li>
                    <li>• Multiple test locations</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Rezultati optimizacije - Real case study</h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Klijent: E-commerce sajt (WooCommerce)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Pre optimizacije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Load time: 8.2 sekunde</li>
                      <li>• PageSpeed Score: 23/100</li>
                      <li>• Bounce rate: 68%</li>
                      <li>• Conversion rate: 1.2%</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Posle optimizacije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Load time: 1.4 sekunde</li>
                      <li>• PageSpeed Score: 94/100</li>
                      <li>• Bounce rate: 31%</li>
                      <li>• Conversion rate: 3.8%</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Rezultat:</strong> 483% poboljšanje brzine, 217% povećanje konverzije</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                WordPress optimizacija nije jednokristan proces - to je kontinuirana strategija koja zahteva
                pravilno planiranje, implementaciju i monitoring. Rezultati govore sami za sebe:
                optimizovan WordPress sajt može dramatično poboljšati korisničko iskustvo i biznis rezultate.
              </p>

              <p className="text-gray-600 mb-8">
                Počnite sa osnovnim optimizacijama poput caching-a i image compression, zatim postupno
                implementirajte naprednije tehnike. Svaki stepen optimizacije donosi merljive rezultate.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["WordPress optimizacija", "brzina sajta", "WordPress performance", "caching plugin", "image optimization", "database cleanup", "Core Web Vitals", "WP Rocket"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Vaš WordPress sajt je spor?</CardTitle>
              <CardDescription className="text-violet-100">
                Kontaktirajte nas za profesionalnu WordPress optimizaciju
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-violet-600 hover:bg-violet-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ubrzajte vaš sajt
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle43;