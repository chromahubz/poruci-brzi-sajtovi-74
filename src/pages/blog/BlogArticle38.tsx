import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle38 = () => {
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
              <Badge className="bg-white/20 text-white border-0">SEO</Badge>
              <Badge className="bg-white/20 text-white border-0">Digital Marketing</Badge>
              <Badge className="bg-white/20 text-white border-0">Google</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              SEO u 2025: Kompletni vodič za rangiranje na prvoj strani Google-a
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>20. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Milan Jovanović</span>
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
                SEO (Search Engine Optimization) ostaje ključan za online uspeh u 2025. godini.
                Sa novim Google algoritmima i AI integracijama, strategije se menjaju.
                Evo detaljnog vodiča kako da rangirate na prvoj strani rezultata pretrage.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Šta je novo u SEO-u za 2025?</h2>

              <p className="text-gray-600 mb-6">
                Google je uveo značajne promene koje utiču na rangiranje sajta:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span><strong>AI-powered search:</strong> Google Gemini i SGE (Search Generative Experience)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span><strong>Core Web Vitals 2.0:</strong> Novi metrici performansi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span><strong>E-E-A-T:</strong> Experience, Expertise, Authoritativeness, Trustworthiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <span><strong>Helpful Content Update:</strong> Fokus na kvalitet nad količinom</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. Keyword Research - Osnova SEO strategije</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Moderne tehnike pronalaska ključnih reči</h3>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Best Practice za 2025:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Intent-based keywords:</strong> Fokus na korisnikovu nameru, ne samo na reči</li>
                  <li>• <strong>Long-tail phrases:</strong> 3-5 reči sa specifičnim kontekstom</li>
                  <li>• <strong>Voice search optimization:</strong> Prirodni govorni izrazi</li>
                  <li>• <strong>Local intent:</strong> "u Beogradu", "u Srbiji", "blizu mene"</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top SEO tools za keyword research</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Besplatni alati:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Google Keyword Planner:</strong> Direktno iz Google-a</li>
                    <li>• <strong>Ubersuggest:</strong> Ograničeno besplatno</li>
                    <li>• <strong>AnswerThePublic:</strong> People Also Ask ideje</li>
                    <li>• <strong>Google Trends:</strong> Trending teme</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Premium alati:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>SEMrush:</strong> Kompletna SEO analiza</li>
                    <li>• <strong>Ahrefs:</strong> Najjači za backlink analizu</li>
                    <li>• <strong>Moz Keyword Explorer:</strong> User-friendly</li>
                    <li>• <strong>KWFinder:</strong> Odličan za long-tail</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. On-Page SEO - Optimizacija stranica</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tehnički SEO elementi</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Title Tag optimizacija:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Maksimalno 60 karaktera</li>
                    <li>• Glavna ključna reč na početku</li>
                    <li>• Brend na kraju</li>
                    <li>• Jedinstven za svaku stranicu</li>
                  </ul>
                  <div className="mt-3 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600">Primer:</p>
                    <p className="text-sm font-mono">Brzi Sajtovi: SEO Optimizacija | Povećajte Rangiranje 2025</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Meta Description:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 150-160 karaktera</li>
                    <li>• Call-to-action rečenica</li>
                    <li>• Prirodno uključivanje ključnih reči</li>
                    <li>• Ubedljiv opis sadržaja</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Header struktura (H1-H6):</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Jedan H1 po stranici</li>
                    <li>• Logička hijerarhija (H2 → H3 → H4)</li>
                    <li>• Ključne reči u zavisnim naslovima</li>
                    <li>• Deskriptivni i korisni naslovi</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content optimizacija</h3>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">E-E-A-T optimizacija:</h4>
                <ul className="space-y-3">
                  <li><strong>Experience:</strong> Lično iskustvo autora sa temom</li>
                  <li><strong>Expertise:</strong> Stručnost u oblasti</li>
                  <li><strong>Authoritativeness:</strong> Prepoznatljivost kao autoriteta</li>
                  <li><strong>Trustworthiness:</strong> Pouzdanost informacija</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Technical SEO - Tehnička optimizacija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Web Vitals 2.0</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metrika</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opisać</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cilj</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kako poboljšati</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">LCP</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Largest Contentful Paint</td>
                      <td className="px-6 py-4 text-sm text-gray-900">&lt; 2.5s</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Optimizovati slike, CDN</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">FID</td>
                      <td className="px-6 py-4 text-sm text-gray-900">First Input Delay</td>
                      <td className="px-6 py-4 text-sm text-gray-900">&lt; 100ms</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Smanjiti JavaScript</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">CLS</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Cumulative Layout Shift</td>
                      <td className="px-6 py-4 text-sm text-gray-900">&lt; 0.1</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Rezervisati prostor za medije</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">INP</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Interaction to Next Paint</td>
                      <td className="px-6 py-4 text-sm text-gray-900">&lt; 200ms</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Optimizovati event handlers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile-First indexing</h3>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Mobilna optimizacija checklist:</h4>
                <ul className="space-y-2">
                  <li>✓ Responsive design na svim uređajima</li>
                  <li>✓ Brzo učitavanje na mobilnim mrežama (&lt; 3s)</li>
                  <li>✓ Velike, kliknove dugmad (minimum 44px)</li>
                  <li>✓ Čitljiv tekst bez zoomiranja (16px+)</li>
                  <li>✓ Optimizovane slike za retina displeje</li>
                  <li>✓ Jednostavna navigacija jednim palcem</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Content Strategy - Strategija sadržaja</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Helpful Content Guidelines</h3>

              <p className="text-gray-600 mb-6">
                Google-ov "Helpful Content Update" preferira sadržaj kreiran za ljude, ne za pretraživače:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Radi ✓</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Originalno istraživanje i podaci</li>
                    <li>• Lično iskustvo i ekspertiza</li>
                    <li>• Dublji uvid od konkurencije</li>
                    <li>• Odgovori na stvarna pitanja korisnika</li>
                    <li>• Redovno ažuriranje sadržaja</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Ne radi ✗</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Kopiranje sadržaja konkurencije</li>
                    <li>• Kreiranje sadržaja samo za SEO</li>
                    <li>• Kratki, površni članci</li>
                    <li>• Clickbait naslovi</li>
                    <li>• AI generisani sadržaj bez dodane vrednosti</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content cluster strategija</h3>

              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Kako kreirati topic clusters:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Pillar page:</strong> Sveobuhvatan vodič o glavnoj temi</li>
                  <li><strong>2. Cluster pages:</strong> Specifični aspekti glavne teme</li>
                  <li><strong>3. Internal linking:</strong> Povezivanje cluster stranica sa pillar</li>
                  <li><strong>4. Content mapping:</strong> Mapiranje sadržaja po buyer journey</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Link Building - Izgradnja autoriteta</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">White-hat link building tehnike</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">1. Guest posting:</h4>
                  <p className="text-sm text-gray-600">Pisanje kvalitetnih članova za relevantne blogove u industriji</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">2. Resource link building:</h4>
                  <p className="text-sm text-gray-600">Kreiranje korisnih resursa koje drugi sajtovi žele da linkuju</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">3. Broken link building:</h4>
                  <p className="text-sm text-gray-600">Pronalaženje pokvarenih linkova i predlog zamene</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">4. HARO (Help A Reporter Out):</h4>
                  <p className="text-sm text-gray-600">Pružanje ekspertize novinarima za linkove u medijima</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Local SEO - Lokalna optimizacija</h2>

              <p className="text-gray-600 mb-6">
                Za lokalne biznise u Srbiji, local SEO je posebno važan:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Google My Business optimizacija:</h4>
                <ul className="space-y-2">
                  <li>• Kompletan i tačan profil sa svim podacima</li>
                  <li>• Redovno objavljivanje postova i ažuriranja</li>
                  <li>• Odgovaranje na recenzije (pozitivne i negativne)</li>
                  <li>• Fotografije prostora, tima, proizvoda</li>
                  <li>• Tačne radno vreme i kontakt informacije</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. SEO Analytics - Merenje rezultata</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ključne metrije za praćenje</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Ranking metrije:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Pozicije ključnih reči</li>
                    <li>• Organični saobraćaj</li>
                    <li>• Impressions u Search Console</li>
                    <li>• Click-through rate (CTR)</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Biznis metrije:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Organske konverzije</li>
                    <li>• ROI od SEO investicije</li>
                    <li>• Qualified leads</li>
                    <li>• Revenue from organic</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Essential SEO tools</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Besplatni alati:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li>• Google Search Console</li>
                  <li>• Google Analytics 4</li>
                  <li>• Google PageSpeed Insights</li>
                  <li>• Screaming Frog (500 URLs)</li>
                  <li>• Google My Business</li>
                  <li>• Bing Webmaster Tools</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">SEO timeline - Kada očekivati rezultate?</h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
                <ul className="space-y-3">
                  <li><strong>1-3 meseca:</strong> Tehnički SEO poboljšanja, indexiranje novih stranica</li>
                  <li><strong>3-6 meseci:</strong> Prvi značajni pomaci u rangiranju za long-tail ključne reči</li>
                  <li><strong>6-12 meseci:</strong> Poboljšanja za competitive ključne reči</li>
                  <li><strong>12+ meseci:</strong> Pozicioniranje za vrlo konkurentne termine</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Common SEO greške koje treba izbegavati</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <ul className="space-y-2">
                  <li>• Keyword stuffing - pretrpavanje ključnim rečima</li>
                  <li>• Kupovina jeftinih backlinks-ova</li>
                  <li>• Dupliciran sadržaj kroz sajt</li>
                  <li>• Ignorisanje mobilne verzije</li>
                  <li>• Spor sajt (preko 3 sekunde loading)</li>
                  <li>• Nedoslednost u NAP podacima (Name, Address, Phone)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                SEO u 2025. godini zahteva holistički pristup koji kombinuje tehničku optimizaciju,
                kvalitetan sadržaj i korisničko iskustvo. Ključ uspeha je fokus na kreiranje vrednosti
                za korisnike, a ne samo optimizaciju za pretraživače.
              </p>

              <p className="text-gray-600 mb-8">
                Uz strpljenje, konzistentnost i pridržavanje best practice-a, SEO može značajno
                povećati organički saobraćaj i konverzije vašeg sajta.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["SEO optimizacija", "Google rangiranje", "ključne reči", "tehnički SEO", "content marketing", "link building", "local SEO", "SEO 2025"].map((keyword, index) => (
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
              <CardTitle className="text-2xl">Potreban vam je SEO ekspert?</CardTitle>
              <CardDescription className="text-cyan-100">
                Kontaktirajte nas za profesionalnu SEO optimizaciju vašeg sajta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-cyan-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zatražite SEO analizu
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle38;