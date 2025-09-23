import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle41 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Progressive Web Apps</Badge>
              <Badge className="bg-white/20 text-white border-0">PWA</Badge>
              <Badge className="bg-white/20 text-white border-0">Mobile Development</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Progressive Web Apps (PWA) 2025: Budućnost mobilnih aplikacija
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>27. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Marija Stojanović</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>16 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Progressive Web Apps predstavljaju revoluciju u mobilnom developmentu. Kombinuju najbolje
                karakteristike web i native aplikacija, omogućavajući korisnicima app-like iskustvo
                direktno iz browsera. Evo zašto su PWA-ovi budućnost digitalnog sveta.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Šta su Progressive Web Apps?</h2>

              <p className="text-gray-600 mb-6">
                PWA je web aplikacija koja koristi moderne web tehnologije da pruži korisničko iskustvo
                koje je skoro identično native mobilnim aplikacijama. Ključne karakteristike PWA-ova su:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6">
                  <h4 className="font-semibold text-emerald-800 mb-3">Core PWA features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Progressive:</strong> Radi na svim uređajima</li>
                    <li>• <strong>Responsive:</strong> Prilagođava se svim screen veličinama</li>
                    <li>• <strong>Connectivity independent:</strong> Radi offline</li>
                    <li>• <strong>App-like:</strong> Native app feeling</li>
                    <li>• <strong>Fresh:</strong> Uvek ažurna verzija</li>
                  </ul>
                </div>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
                  <h4 className="font-semibold text-teal-800 mb-3">Technical requirements:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>HTTPS:</strong> Obavezna sigurna konekcija</li>
                    <li>• <strong>Service Worker:</strong> Offline funkcionalnost</li>
                    <li>• <strong>Web App Manifest:</strong> App metadata</li>
                    <li>• <strong>Responsive Design:</strong> Mobile-first approach</li>
                    <li>• <strong>Fast loading:</strong> Optimized performance</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto su PWA-ovi game-changer?</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Statistike koje govore sve</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">PWA Performance statistike:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Twitter:</strong> 65% povećanje pages per session</li>
                  <li>• <strong>Pinterest:</strong> 60% povećanje core engagementa</li>
                  <li>• <strong>AliExpress:</strong> 104% povećanje konverzije</li>
                  <li>• <strong>Starbucks:</strong> 2x dnevnih active korisnika</li>
                  <li>• <strong>Uber:</strong> 50KB PWA vs 25MB native app</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">PWA vs Native Apps vs Web Apps</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PWA</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Native App</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Web App</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Installation</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Browser prompt</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">App Store</td>
                      <td className="px-6 py-4 text-sm text-red-600">✗ No installation</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Offline work</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Service Workers</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Native support</td>
                      <td className="px-6 py-4 text-sm text-red-600">✗ Internet required</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Push notifications</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Web Push</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Native</td>
                      <td className="px-6 py-4 text-sm text-red-600">✗ Limited</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Device APIs</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">~ Growing support</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Full access</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">~ Basic support</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Development cost</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Single codebase</td>
                      <td className="px-6 py-4 text-sm text-red-600">✗ Multiple platforms</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Single codebase</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">App Store</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">~ Optional</td>
                      <td className="px-6 py-4 text-sm text-green-600">✓ Required</td>
                      <td className="px-6 py-4 text-sm text-red-600">✗ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Kreiranje PWA-a: Korak po korak</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Web App Manifest</h3>

              <p className="text-gray-600 mb-4">
                Web App Manifest je JSON fajl koji definiše kako će se vaša PWA ponašati kada se instalira:
              </p>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                <pre>{`{
  "name": "Porući Brzi Sajtovi PWA",
  "short_name": "BrziSajtovi",
  "description": "Najbolji web development servisi u Srbiji",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["business", "productivity"],
  "screenshots": [
    {
      "src": "/screenshots/desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    }
  ]
}`}</pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Worker implementacija</h3>

              <p className="text-gray-600 mb-4">
                Service Worker omogućava offline funkcionalnost i caching strategije:
              </p>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                <pre>{`// sw.js - Service Worker
const CACHE_NAME = 'brzi-sajtovi-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/offline.html'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});`}</pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. PWA Registration u React/Vue/Angular</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">React PWA setup:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                    <pre>{`// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}`}</pre>
                  </div>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Vue.js PWA plugin:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                    <pre>{`// Using Vue CLI PWA plugin
vue add pwa

// Automatically generates:
// - manifest.json
// - service worker
// - icons
// - meta tags`}</pre>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Advanced PWA funkcionalnosti</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Push Notifications</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Web Push implementacija:</h4>
                <ul className="space-y-2">
                  <li>• <strong>VAPID keys:</strong> Generišite jedinstvene ključeve</li>
                  <li>• <strong>Push subscription:</strong> Korisnik se prijavljuje za notifikacije</li>
                  <li>• <strong>Backend integration:</strong> Server šalje push poruke</li>
                  <li>• <strong>Service Worker handler:</strong> Prikazuje notifikacije</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
                <pre>{`// Push notification u Service Worker
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    actions: [
      {
        action: 'view',
        title: 'Pogledaj',
        icon: '/icons/view.png'
      },
      {
        action: 'close',
        title: 'Zatvori',
        icon: '/icons/close.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Brzi Sajtovi', options)
  );
});`}</pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Offline-First strategije</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Cache First:</h4>
                  <p className="text-sm text-gray-600 mb-3">Prvo traži u cache-u, zatim na mreži</p>
                  <ul className="text-sm space-y-1">
                    <li>• Brže učitavanje</li>
                    <li>• Odličo za statičke resurse</li>
                    <li>• Images, CSS, JS fajlovi</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Network First:</h4>
                  <p className="text-sm text-gray-600 mb-3">Prvo mreža, fallback na cache</p>
                  <ul className="text-sm space-y-1">
                    <li>• Uvek svež sadržaj</li>
                    <li>• API pozivi</li>
                    <li>• Dinamički sadržaj</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">PWA Tools i Frameworks</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Development tools</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Google Workbox:</h4>
                  <p className="text-sm text-gray-600 mb-2">Najpokreatorniji set alata za PWA development</p>
                  <ul className="text-sm space-y-1">
                    <li>• Preconfigured caching strategies</li>
                    <li>• Routing za verschillende resource tipove</li>
                    <li>• Background sync</li>
                    <li>• webpack/Rollup integracija</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">PWA Builder (Microsoft):</h4>
                  <p className="text-sm text-gray-600 mb-2">Alat za kreiranje PWA-a iz postojećih web sajtova</p>
                  <ul className="text-sm space-y-1">
                    <li>• Automatska analiza sajta</li>
                    <li>• Generiranje manifest fajla</li>
                    <li>• Service Worker templates</li>
                    <li>• App Store packaging</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Lighthouse PWA Audit:</h4>
                  <p className="text-sm text-gray-600 mb-2">Google-ov alat za PWA kvalitet analizu</p>
                  <ul className="text-sm space-y-1">
                    <li>• PWA checklist validation</li>
                    <li>• Performance metrics</li>
                    <li>• Best practices suggestions</li>
                    <li>• Accessibility audit</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">PWA i App Store distribucija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">PWA u App Store-ovima</h3>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Platform support 2025:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Google Play Store:</strong> TWA (Trusted Web Activities)</li>
                  <li>• <strong>Microsoft Store:</strong> Nativna PWA podrška</li>
                  <li>• <strong>Apple App Store:</strong> Ograničena podrška, potrebne native wrapperi</li>
                  <li>• <strong>Samsung Galaxy Store:</strong> PWA submission moguć</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">TWA (Trusted Web Activities)</h3>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
                <pre>{`// TWA kreiranje za Google Play
1. Instaliranje Bubblewrap:
   npm install -g @bubblewrap/cli

2. Inicijalizacija TWA projekta:
   bubblewrap init --manifest=https://yoursite.com/manifest.json

3. Build APK fajla:
   bubblewrap build

4. Upload na Google Play Console`}</pre>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">PWA Performance Optimization</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Critical rendering path optimization</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Resource optimization:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Code splitting:</strong> Lazy load komponenti</li>
                    <li>• <strong>Tree shaking:</strong> Uklanjanje nekorišćenog koda</li>
                    <li>• <strong>Critical CSS:</strong> Inline kritični CSS</li>
                    <li>• <strong>Resource hints:</strong> Preload, prefetch</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Caching strategies:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Static assets:</strong> Cache first strategy</li>
                    <li>• <strong>API calls:</strong> Stale-while-revalidate</li>
                    <li>• <strong>Images:</strong> Cache sa background fetch</li>
                    <li>• <strong>HTML:</strong> Network first sa cache fallback</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">PWA u 2025: Nova functionality</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fugu Project - Advanced Web APIs</h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Nova web API-ja u 2025:</h4>
                <ul className="space-y-2">
                  <li>• <strong>File System Access API:</strong> Direktan pristup fajl sistemu</li>
                  <li>• <strong>Web Share Target API:</strong> Primanje shared sadržaja</li>
                  <li>• <strong>Contact Picker API:</strong> Pristup contacts listi</li>
                  <li>• <strong>Web Bluetooth:</strong> Komunikacija sa Bluetooth uređajima</li>
                  <li>• <strong>WebXR Device API:</strong> AR/VR funkcionalnost</li>
                  <li>• <strong>Web NFC:</strong> Near Field Communication</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">PWA Case Studies iz Srbije</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">E-commerce PWA rezultati:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>50% brže učitavanje</strong> u odnosu na standardni web sajt</li>
                    <li>• <strong>30% povećanje konverzije</strong> kod mobile korisnika</li>
                    <li>• <strong>2.5x više session-a</strong> po korisniku</li>
                    <li>• <strong>80% manji bundle size</strong> u odnosu na native app</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">News portal PWA benefits:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Offline reading</strong> najnovijih članaka</li>
                    <li>• <strong>Push notifications</strong> za breaking news</li>
                    <li>• <strong>40% manje bounce rate</strong> na mobilnim uređajima</li>
                    <li>• <strong>Bolje SEO performanse</strong> zbog brzine</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Budućnost PWA tehnologije</h2>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">2025-2030 PWA roadmap:</h4>
                <ul className="space-y-3">
                  <li><strong>2025:</strong> PWA postaju standard za mobile-first kompanije</li>
                  <li><strong>2026:</strong> Apple uvodi bolju PWA podršku u iOS</li>
                  <li><strong>2027:</strong> Desktop PWA aplikacije postaju mainstream</li>
                  <li><strong>2028:</strong> Integration sa AR/VR tehnologijama</li>
                  <li><strong>2030:</strong> PWA potiskuju većinu native aplikacija</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Progressive Web Apps predstavljaju buducnost web i mobile developmenta. Kombinuju najbolje
                karakteristike oba sveta - dostupnost web aplikacija sa funkcionalnostima native apps-a.
              </p>

              <p className="text-gray-600 mb-8">
                Za biznise u Srbiji koji žele da prate najnovije tehnološke trendove i pruže korisnicima
                vrhunsko digitalno iskustvo, PWA predstavlja investiciju koja će se isplatiti u
                narednim godinama.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Progressive Web Apps", "PWA development", "service worker", "web app manifest", "offline aplikacije", "push notifications", "mobile web", "app-like experience"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Zainteresovani za PWA development?</CardTitle>
              <CardDescription className="text-emerald-100">
                Kontaktirajte nas za kreiranje napredne Progressive Web App
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Razvijte PWA aplikaciju
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle41;