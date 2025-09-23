import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle34 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">E-commerce</Badge>
              <Badge className="bg-white/20 text-white border-0">Online prodaja</Badge>
              <Badge className="bg-white/20 text-white border-0">Srbija</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kako pokrenuti uspešan online shop u Srbiji 2025: Kompletni vodič
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>14. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Ana Jovanović</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>12 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Online trgovina u Srbiji doživljava eksplozivan rast. Prema najnovijim podacima, e-commerce sektor
                je porastao za preko 45% u 2024. godini. Evo kompletnog vodiča kako da i vi pokrenete uspešan online shop.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto je sada idealno vreme za e-commerce u Srbiji?</h2>

              <p className="text-gray-600 mb-6">
                Digitalna transformacija u Srbiji je u punom zamahu. COVID-19 je dramatično ubrzao prelazak na online kupovinu,
                a navike potrošača su se trajno promenile:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>78% Srba</strong> je kupovalo online u 2024. godini</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Prosečna potrošnja</strong> po korisniku porasla za 60%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Mobilno kupovanje</strong> čini 65% svih transakcija</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Dostava istog dana</strong> postala standardna očekivanja</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Korak 1: Istraživanje tržišta i niše</h2>

              <p className="text-gray-600 mb-6">
                Pre pokretanja, ključno je dobro istražiti tržište i pronaći vašu nišu:
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Najprofitabilnije niše u Srbiji 2025:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Visoka potražnja:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Zdravlje i fitnes proizvodi</li>
                    <li>• Tehnološki gadžeti</li>
                    <li>• Domaći i eko proizvodi</li>
                    <li>• Dečije proizvodi</li>
                    <li>• Pet oprema</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Mala konkurencija:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Specijalizovani alati</li>
                    <li>• Vintage i retro proizvodi</li>
                    <li>• Lokalni zanatski proizvodi</li>
                    <li>• Personalizovani pokloni</li>
                    <li>• Premium lifestyle proizvodi</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Korak 2: Pravni okvir i registracija</h2>

              <p className="text-gray-600 mb-6">
                Za legalno poslovanje u Srbiji, potrebno je:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Obavezne registracije:</h4>
                <ul className="space-y-2">
                  <li><strong>1. APR registracija:</strong> Preduzetnik ili DOO (5-15 dana, 5,000-50,000 RSD)</li>
                  <li><strong>2. Poreska prijava:</strong> U roku od 15 dana od registracije</li>
                  <li><strong>3. Radna dozvola:</strong> Ako imate zaposlene</li>
                  <li><strong>4. GDPR usklađenost:</strong> Politika privatnosti i uslovi korišćenja</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Korak 3: Izbor e-commerce platforme</h2>

              <p className="text-gray-600 mb-6">
                Izbor prave platforme je ključan za uspeh. Evo analize najpopularnijih opcija:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">WooCommerce (WordPress)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Besplatno i open source</li>
                        <li>• Ogromna biblioteka plugin-a</li>
                        <li>• SEO optimizovano</li>
                        <li>• Podrška za srpski jezik</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-600 font-medium mb-2">✗ Mane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Potrebne tehničke veštine</li>
                        <li>• Redovno održavanje</li>
                        <li>• Hosting troškovi</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Preporučeno za:</strong> Srednje do velike shop-ove (500+ proizvoda)</p>
                </div>

                <div className="border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Shopify</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Lako za korišćenje</li>
                        <li>• Ugrađene plaćanja</li>
                        <li>• 24/7 podrška</li>
                        <li>• Mobilno optimizovano</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-600 font-medium mb-2">✗ Mane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Mesečni troškovi ($29+)</li>
                        <li>• Transakcione provizije</li>
                        <li>• Ograničena personalizacija</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Preporučeno za:</strong> Početnike i brzo pokretanje</p>
                </div>

                <div className="border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Custom rešenje</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Potpuna kontrola</li>
                        <li>• Jedinstvene funkcionalnosti</li>
                        <li>• Optimalne performanse</li>
                        <li>• Skalabilnost</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-600 font-medium mb-2">✗ Mane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Visoki troškovi razvoja</li>
                        <li>• Duže vreme implementacije</li>
                        <li>• Potreban tehnički tim</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Preporučeno za:</strong> Velike kompanije sa specifičnim potrebama</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Korak 4: Plaćanja i dostava u Srbiji</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opcije plaćanja:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Najpopularnije metode:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Pouzeće (85%)</strong> - I dalje najčešće</li>
                    <li>• <strong>Kartice (12%)</strong> - Raste popularnost</li>
                    <li>• <strong>Mobilno plaćanje (3%)</strong> - Nova opcija</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Payment gateway-i:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Stripe:</strong> Najpopularniji, 2.9% + 30 RSD</li>
                    <li>• <strong>PayPal:</strong> Međunarodne transakcije</li>
                    <li>• <strong>Erste Card:</strong> Lokalni provider</li>
                    <li>• <strong>NLB Pay:</strong> Srbija-specific</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dostava:</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kurirska služba</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cena</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vreme dostave</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pokrivenost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">City Express</td>
                      <td className="px-6 py-4 text-sm text-gray-900">250-350 RSD</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1-2 dana</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Cela Srbija</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">AKS</td>
                      <td className="px-6 py-4 text-sm text-gray-900">280-400 RSD</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1-3 dana</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Cela Srbija</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">BEX</td>
                      <td className="px-6 py-4 text-sm text-gray-900">200-300 RSD</td>
                      <td className="px-6 py-4 text-sm text-gray-900">2-4 dana</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Većina gradova</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Korak 5: Marketing i privlačenje klijenata</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Najefektivnije strategije za 2025:</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">1. Instagram Marketing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Instagram Shop:</strong> Direktna prodaja kroz Instagram</li>
                    <li>• <strong>Influencer saradnje:</strong> Mikro-influenceri (1K-100K pratilaca)</li>
                    <li>• <strong>Stories i Reels:</strong> Organski doseg do 40% pratilaca</li>
                    <li>• <strong>UGC content:</strong> Fotografije kupaca sa proizvodima</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">2. Google oglašavanje</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Google Shopping:</strong> Direktan prikaz proizvoda</li>
                    <li>• <strong>Search oglasi:</strong> Ciljanje na kupovne namere</li>
                    <li>• <strong>Retargeting:</strong> Povratak posetilaca na sajt</li>
                    <li>• <strong>YouTube oglasi:</strong> Video content marketing</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">3. Facebook i TikTok</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Facebook Shop:</strong> Integrisana prodaja</li>
                    <li>• <strong>Messenger chatbot:</strong> Automatska podrška kupcima</li>
                    <li>• <strong>TikTok Shop:</strong> Nova platforma za mlađe demografije</li>
                    <li>• <strong>Live streaming:</strong> Interaktivna prodaja</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Očekivani troškovi pokretanja</h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Minimalni budžet (Mali shop):</h3>
                <ul className="space-y-2">
                  <li>• <strong>Web sajt:</strong> 500-1,500€ (WooCommerce/Shopify)</li>
                  <li>• <strong>Registracija i dozvole:</strong> 100-300€</li>
                  <li>• <strong>Početna zaliha:</strong> 2,000-5,000€</li>
                  <li>• <strong>Marketing:</strong> 300-800€/mesečno</li>
                  <li>• <strong>Operativni troškovi:</strong> 200-500€/mesečno</li>
                </ul>
                <p className="mt-4 font-semibold text-green-600">Ukupno: 3,100-8,100€ početno + 500-1,300€ mesečno</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Ključni faktori uspeha</h2>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>Kvalitet proizvoda:</strong> Zadovoljni kupci su najbolja reklama</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>Brza dostava:</strong> Očekivanja su 1-2 dana za Beograd, 2-3 za ostatak Srbije</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>Odličan customer service:</strong> Odgovorite na sve upite u roku od 2 sata</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>Mobilna optimizacija:</strong> 65% kupovina se dešava preko telefona</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span><strong>Transparentnost:</strong> Jasne cene, uslovi vraćanja, kontakt informacije</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Pokretanje online shop-a u Srbiji u 2025. godini predstavlja odličnu priliku za uspešno preduzetništvo.
                Ključ uspeha leži u pažljivom planiranju, izboru prave platforme i fokusiranju na korisničko iskustvo.
              </p>

              <p className="text-gray-600 mb-8">
                Sa pravim pristupom i posvećenošću, možete izgraditi profitabilan online biznis koji će rasti zajedno
                sa ekspanzijom e-commerce tržišta u Srbiji.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["online shop Srbija", "e-commerce pokretanje", "WooCommerce Srbija", "online prodaja 2025", "internet trgovina", "digitalna trgovina", "kurirske službe Srbija", "online marketing Srbija"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Spremni za pokretanje vašeg online shop-a?</CardTitle>
              <CardDescription className="text-green-100">
                Kontaktirajte nas za profesionalnu e-commerce platformu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Izradite vaš shop
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle34;