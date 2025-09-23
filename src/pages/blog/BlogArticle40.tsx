import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle40 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">AI</Badge>
              <Badge className="bg-white/20 text-white border-0">Web Development</Badge>
              <Badge className="bg-white/20 text-white border-0">Automatizacija</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI u Web Developmentu 2025: Kako veštačka inteligencija menja industriju
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>25. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Nikola Petković</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>13 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Veštačka inteligencija revolucioniše web development industriju brzinom koja je nečuvena.
                Od AI-powered code generatora do automatizovanih testing sistema, evo kako AI menja
                način na koji kreiramo web aplikacije u 2025. godini.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">AI Revolution u Web Developmentu</h2>

              <p className="text-gray-600 mb-6">
                Statistike pokazuju dramatičnu ekspanziju AI alata u developmentu:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">AI adoption statistike:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>78%</strong> developera koristi AI alate u 2025</li>
                    <li>• <strong>40%</strong> povećanje produktivnosti sa AI</li>
                    <li>• <strong>65%</strong> smanjenje vremena za kodiranje</li>
                    <li>• <strong>$126B</strong> vrednost AI market-a do 2025</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="font-semibold text-green-800 mb-3">Top AI use cases:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Code generation</strong> (85%)</li>
                    <li>• <strong>Bug detection</strong> (72%)</li>
                    <li>• <strong>Testing automation</strong> (68%)</li>
                    <li>• <strong>UI/UX design</strong> (61%)</li>
                    <li>• <strong>Code optimization</strong> (58%)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. AI Code Generatori - Nova era programiranja</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Copilot i konkurencija</h3>

              <div className="space-y-4 mb-8">
                <div className="border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">GitHub Copilot</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Integrisano sa VS Code i drugim IDE-ovima</li>
                        <li>• Razume kontekst koda</li>
                        <li>• Podržava 30+ programskih jezika</li>
                        <li>• Kontinuirano učenje iz vašeg koda</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-orange-600 font-medium mb-2">⚠ Ograničenja:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Ponekad generiše nedosledan kod</li>
                        <li>• Potrebna je revizija i testiranje</li>
                        <li>• Mesečna pretplata ($10/mesec)</li>
                        <li>• Mogući security/license issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">TabNine</h4>
                  <p className="text-sm text-gray-600 mb-3">AI autocompletiranje koje se pokreće lokalno ili u cloud-u</p>
                  <ul className="text-sm space-y-1">
                    <li>• Privatni i sigurni (lokalni modeli)</li>
                    <li>• Prilagođava se vašem coding style-u</li>
                    <li>• Podržava sve popularne IDE-ove</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Amazon CodeWhisperer</h4>
                  <p className="text-sm text-gray-600 mb-3">AWS-ov AI coding assistant sa sigurnosnim fokus-om</p>
                  <ul className="text-sm space-y-1">
                    <li>• Besplatan za individualce</li>
                    <li>• Built-in security scanning</li>
                    <li>• Optimizovan za AWS servise</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. AI-Powered Design Tools</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatizacija UI/UX dizajna</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Figma AI plugins:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Figma AI:</strong> Generiranje wireframes iz opisanika</li>
                    <li>• <strong>Magician:</strong> AI copywriting i dizajn</li>
                    <li>• <strong>Automater:</strong> Automatizacija repetitivnih zadataka</li>
                    <li>• <strong>Content Reel:</strong> Auto-generisanje sadržaja</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Standalone AI design tools:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Framer AI:</strong> Generiranje web stranica iz teksta</li>
                    <li>• <strong>Uizard:</strong> Skica → funkcionalni prototip</li>
                    <li>• <strong>Adobe Sensei:</strong> Inteligentni design assistant</li>
                    <li>• <strong>Midjourney:</strong> AI image generation za design</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI u responzivnom dizajnu</h3>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Kako AI pomaže u responzivnosti:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Auto-responsive layouts:</strong> AI predviđa optimalne breakpoint-e</li>
                  <li>• <strong>Smart component scaling:</strong> Automatsko prilagođavanje veličine</li>
                  <li>• <strong>Cross-device testing:</strong> Simulacija na hiljade uređaja</li>
                  <li>• <strong>Performance optimization:</strong> AI preporučuje optimizacije</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Automatizovano testiranje sa AI</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Test Generation</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Unit test automatizacija:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• AI analizira kod i generiše test case-ove</li>
                    <li>• Automatski pokriva edge cases</li>
                    <li>• Predviđa potencijalne bugove</li>
                    <li>• Kontinuirano poboljšava test coverage</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">E2E testing sa AI:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Testim:</strong> AI-powered E2E testing platforma</li>
                    <li>• <strong>Sauce Labs:</strong> AI visual testing</li>
                    <li>• <strong>Applitools:</strong> Autonomous testing sa AI</li>
                    <li>• <strong>Mabl:</strong> Self-healing test automation</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bug Detection i Code Review</h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">AI-powered code analysis tools:</h4>
                <ul className="space-y-2">
                  <li>• <strong>DeepCode (Snyk):</strong> AI code review i security analysis</li>
                  <li>• <strong>SonarQube:</strong> Kvalitet koda i vulnerabilities</li>
                  <li>• <strong>Codacy:</strong> Automatski code review</li>
                  <li>• <strong>PullRequest:</strong> AI + human code review</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. AI u Performance Optimizaciji</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatska optimizacija resursa</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Image optimization:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>TinyPNG AI:</strong> Smart kompresija slika</li>
                    <li>• <strong>Cloudinary:</strong> AI-powered image delivery</li>
                    <li>• <strong>ImageKit:</strong> Real-time image optimization</li>
                    <li>• <strong>Adobe Sensei:</strong> Intelligent image processing</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Code optimization:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Bundle analysis:</strong> AI prepoznaje nekorišćen kod</li>
                    <li>• <strong>Lazy loading:</strong> Pametno učitavanje resursa</li>
                    <li>• <strong>Caching strategies:</strong> AI optimizuje cache politike</li>
                    <li>• <strong>CDN routing:</strong> Najbržu rutu za resurse</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. AI Chatbots i Customer Support</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Next-gen conversational AI</h3>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">2025 chatbot capabilities:</h4>
                <ul className="space-y-2">
                  <li>• <strong>GPT-4 integracija:</strong> Prirodniji razgovor</li>
                  <li>• <strong>Multi-modal AI:</strong> Razume tekst, slike, glas</li>
                  <li>• <strong>Personalization:</strong> Pamti korisničke preferencije</li>
                  <li>• <strong>Real-time learning:</strong> Poboljšava se sa svakim razgovorom</li>
                  <li>• <strong>Emotional intelligence:</strong> Prepoznaje emocije korisnika</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Implementation najboljih AI chatbot-ova</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Platforma</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Najbolje za</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cena</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">ChatGPT API</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Custom solutions</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$0.002/1K tokens</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Najnapredniji AI, fleksibilan</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Intercom</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Customer support</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Od $39/mesec</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Easy setup, great UX</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Dialogflow</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Enterprise</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Pay per use</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Google AI, multi-platform</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Tidio</td>
                      <td className="px-6 py-4 text-sm text-gray-900">SMB</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Besplatno + premium</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Jednostavan, affordable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. AI u SEO i Content Optimizaciji</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI-powered content creation</h3>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Content AI tools:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Jasper AI:</strong> Marketing copy i blog posts</li>
                  <li>• <strong>Copy.ai:</strong> Kreativni sadržaj za web</li>
                  <li>• <strong>Writesonic:</strong> SEO optimizovan content</li>
                  <li>• <strong>Surfer SEO:</strong> AI content editor sa SERP analizom</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatizovana SEO optimizacija</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Keyword research AI:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Automatski pronalazi long-tail keywords</li>
                    <li>• Analizira competitor content</li>
                    <li>• Predviđa trending teme</li>
                    <li>• Optimizuje za voice search</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Technical SEO automation:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Auto-generisanje meta tags</li>
                    <li>• Schema markup optimization</li>
                    <li>• Core Web Vitals monitoring</li>
                    <li>• Content structure analysis</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. Challenges i etička pitanja</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Potencijalni problemi AI developmentu</h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-3">Key challenges:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Code quality:</strong> AI generisani kod nije uvek optimalan</li>
                  <li>• <strong>Security risks:</strong> Potencijalne vulnerabilities u AI kodu</li>
                  <li>• <strong>Dependency:</strong> Prevelika zavisnost od AI alata</li>
                  <li>• <strong>Job displacement:</strong> Uticaj na junior developer pozicije</li>
                  <li>• <strong>Licensing issues:</strong> Nejasnoće oko copyright-a</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Best practices za AI development</h3>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Preporučeni pristup:</h4>
                <ul className="space-y-2">
                  <li>• AI kao assistant, ne zamena za kritičko razmišljanje</li>
                  <li>• Uvek testiraj i reviraj AI-generisani kod</li>
                  <li>• Kontinuirano učenje novih tehnologija</li>
                  <li>• Fokus na kompleksne probleme koji zahtevaju human touch</li>
                  <li>• Transparentnost o korišćenju AI alata u projektu</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">8. Budućnost AI u Web Developmentu</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Predskazanja za naredne godine</h3>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">2025-2030 timeline:</h4>
                <ul className="space-y-3">
                  <li><strong>2025:</strong> AI postaje standard u svim IDE-ovima</li>
                  <li><strong>2026:</strong> No-code/low-code platforme sa AI postaju mainstream</li>
                  <li><strong>2027:</strong> AI može da kreira kompleksne aplikacije iz prirodnog jezika</li>
                  <li><strong>2028:</strong> Autonomni debugging i performance optimization</li>
                  <li><strong>2030:</strong> AI-driven development lifecycle management</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Kako se pripremiti za AI budućnost</h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Action plan za developere:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Eksperimentiši:</strong> Počni da koristiš AI alate u svakodnevnom radu</li>
                  <li><strong>2. Uči:</strong> Prati AI trending i nove alate</li>
                  <li><strong>3. Specijalizuj se:</strong> Fokusiraj se na oblasti koje AI teško automatizuje</li>
                  <li><strong>4. Kolaboracija:</strong> Nauči kako efikasno da radiš sa AI</li>
                  <li><strong>5. Etika:</strong> Razumi etička pitanja AI development-a</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                AI u web developmentu nije daleka budućnost - već je tu. Developeri koji prihvate AI kao
                moćan alat i nauče da ga efikasno koriste će imati značajne prednosti u konkurenciji.
              </p>

              <p className="text-gray-600 mb-8">
                Ključ je u tome da AI vidimo kao pojačač naših sposobnosti, ne kao zamenu.
                Kombinacija ljudske kreativnosti i AI efikasnosti je recepti za uspeh u 2025. godini i dalje.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["AI web development", "GitHub Copilot", "AI testing", "automated coding", "machine learning", "AI chatbots", "code generation", "AI optimization"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Zainteresovani za AI-powered development?</CardTitle>
              <CardDescription className="text-indigo-100">
                Kontaktirajte nas za implementaciju AI rešenja u vaš projekt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Istražite AI mogućnosti
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle40;