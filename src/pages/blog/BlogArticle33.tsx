import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle33 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Web Development</Badge>
              <Badge className="bg-white/20 text-white border-0">WordPress</Badge>
              <Badge className="bg-white/20 text-white border-0">CMS</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WordPress vs Custom CMS: Šta je bolje za vaš biznis u 2025?
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>15. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Marko Petrović</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Jedan od najčešćih dilema pri kreiranju web sajta je izbor između WordPress-a i custom CMS rešenja.
                U ovom detaljnom vodiču analiziraćemo prednosti i mane oba pristupa kako biste doneli najbolju odluku za vaš biznis.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">WordPress - Najpopularniji CMS na svetu</h2>

              <p className="text-gray-600 mb-6">
                WordPress pokreće preko 40% svih web sajtova na internetu, što govori o njegovoj popularnosti i pouzdanosti.
                Evo zašto je toliko popularan:
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prednosti WordPress-a:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Brzina implementacije:</strong> Sajt može biti spreman za 1-2 dana</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Ogromna biblioteka tema:</strong> Hiljade besplatnih i premium tema</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Plugin ekosistem:</strong> Preko 58,000 plugin-a za sve funkcionalnosti</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>SEO optimizovan:</strong> Odličan za pretraživače iz kutije</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Lako održavanje:</strong> Jednostavno ažuriranje sadržaja</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Pristupačne cene:</strong> Niži troškovi razvoja</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mane WordPress-a:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Sigurnosni rizici:</strong> Česta meta hakera zbog popularnosti</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Performance problemi:</strong> Može biti spor sa mnogo plugin-a</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Ograničenja dizajna:</strong> Zavisi od tema i plugin-a</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Redovno ažuriranje:</strong> Potrebno konstantno održavanje</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Custom CMS - Rešenje po meri</h2>

              <p className="text-gray-600 mb-6">
                Custom CMS je sistem upravljanja sadržajem kreiran specifično za vaše potrebe.
                Ovo rešenje se preporučuje za veće kompanije sa specifičnim zahtevima.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prednosti Custom CMS-a:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span><strong>Potpuna kontrola:</strong> 100% prilagođen vašim potrebama</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span><strong>Bolje performanse:</strong> Optimizovan kod bez nepotrebnih funkcija</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span><strong>Jedinstveni dizajn:</strong> Potpuno originalan izgled</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span><strong>Skalabilnost:</strong> Lako proširivanje funkcionalnosti</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span><strong>Bezbednost:</strong> Manje meta za hakere</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mane Custom CMS-a:</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Viši troškovi:</strong> Skuplje za razvoj i održavanje</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Duže vreme razvoja:</strong> Može potrajati nedeljama ili mesecima</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Zavisnost od developera:</strong> Potreban tehnički tim</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span><strong>Nema gotovih rešenja:</strong> Sve mora biti razvijeno</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Kada izabrati WordPress?</h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <p className="text-gray-700 mb-4">WordPress je idealan izbor ako:</p>
                <ul className="space-y-2">
                  <li>• Imate ograničen budžet (do 1000€)</li>
                  <li>• Potreban vam je sajt brzo (1-7 dana)</li>
                  <li>• Planirate blog ili e-commerce</li>
                  <li>• Potrebne su vam standardne funkcionalnosti</li>
                  <li>• Želite lako upravljanje sadržajem</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Kada izabrati Custom CMS?</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-gray-700 mb-4">Custom CMS je bolji izbor ako:</p>
                <ul className="space-y-2">
                  <li>• Imate veći budžet (preko 3000€)</li>
                  <li>• Potrebne su vam specifične funkcionalnosti</li>
                  <li>• Želite potpunu kontrolu nad kodom</li>
                  <li>• Planirate veliki sajt sa puno sadržaja</li>
                  <li>• Bezbednost je kritična za vaš biznis</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Hibridno rešenje - Headless CMS</h2>

              <p className="text-gray-600 mb-6">
                Moderna alternativa je korišćenje headless CMS-a kao što su Strapi, Contentful ili Sanity.
                Ovaj pristup kombinuje prednosti oba pristupa:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Fleksibilnost:</strong> Custom frontend sa CMS backend-om</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Performanse:</strong> Brži loading kroz modern tehnologije</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span><strong>Multi-platform:</strong> Isti sadržaj za web, mobilne app-e, IoT</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Naša preporuka za 2025</h2>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Za mala i srednja preduzeća:</h3>
                <p className="text-gray-700 mb-4">
                  <strong>WordPress + optimizacija</strong> - Kombinujte brzinu implementacije sa custom optimizacijama.
                  Koristite kvalitetne teme, minimalan broj plugin-a i profesionalnu optimizaciju.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Za velike kompanije:</h3>
                <p className="text-gray-700">
                  <strong>Headless CMS + React/Next.js</strong> - Moderna arhitektura koja omogućava skalabilnost,
                  performanse i fleksibilnost bez ogromnih troškova custom rešenja.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Izbor između WordPress-a i Custom CMS-a zavisi od vaših specifičnih potreba, budžeta i vremenskih okvira.
                WordPress je odličan za brzu implementaciju i standardne potrebe, dok Custom CMS pruža potpunu kontrolu za specifične zahteve.
              </p>

              <p className="text-gray-600 mb-8">
                Važno je konsultovati se sa stručnjacima koji mogu proceniti vaše potrebe i preporučiti najbolje rešenje.
                U 2025. godini, hibridni pristupi često pružaju najbolji odnos funkcionalnosti i troškova.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["WordPress vs Custom CMS", "web development 2025", "CMS izbor", "WordPress prednosti", "custom CMS razvoj", "headless CMS", "web sajt optimizacija", "WordPress bezbednost"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potreban vam je profesionalan sajt?</CardTitle>
              <CardDescription className="text-blue-100">
                Kontaktirajte nas za besplatnu konsultaciju i analizu vaših potreba
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zatražite ponudu
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle33;