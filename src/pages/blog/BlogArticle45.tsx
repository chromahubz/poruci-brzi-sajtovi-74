import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle45 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Social Media</Badge>
              <Badge className="bg-white/20 text-white border-0">Instagram</Badge>
              <Badge className="bg-white/20 text-white border-0">Facebook Marketing</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Social Media Marketing za lokalne biznise: Instagram i Facebook strategija 2025
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>5. Februar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Milica Radivojević</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>14 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Social media marketing je postao neophodnost za lokalne biznise u Srbiji. Sa pravom strategijom,
                Instagram i Facebook mogu doneti stotine novih klijenata mesečno. Evo detaljnog vodiča kako da
                iskoristite social media za rast vašeg biznisa u 2025. godini.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Social Media statistike za Srbiju 2025</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Ključne statistike:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Facebook:</strong> 3.2 miliona korisnika u Srbiji (45% populacije)</li>
                  <li>• <strong>Instagram:</strong> 2.1 milion korisnika (30% populacije)</li>
                  <li>• <strong>Dnevno vreme:</strong> Prosečno 2.5 sati na social media</li>
                  <li>• <strong>Shopping:</strong> 73% kupuje proizvode viđene na social media</li>
                  <li>• <strong>Local business:</strong> 68% traži lokalne biznise na social media</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Demographics koji morate znati</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Facebook korisnici:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>18-24:</strong> 22% korisnika</li>
                    <li>• <strong>25-34:</strong> 31% korisnika (najaktivniji)</li>
                    <li>• <strong>35-44:</strong> 26% korisnika</li>
                    <li>• <strong>45+:</strong> 21% korisnika</li>
                    <li>• <strong>Gender:</strong> 52% žene, 48% muškarci</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Instagram korisnici:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>18-24:</strong> 35% korisnika</li>
                    <li>• <strong>25-34:</strong> 33% korisnika</li>
                    <li>• <strong>35-44:</strong> 19% korisnika</li>
                    <li>• <strong>45+:</strong> 13% korisnika</li>
                    <li>• <strong>Gender:</strong> 58% žene, 42% muškarci</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. Instagram strategija za lokalne biznise</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Optimizacija Instagram profila</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Business Account setup:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Username:</strong> @frizer_marko_bg (kratko, pamtljivo)</li>
                    <li>• <strong>Ime:</strong> "Frizer Marko | Beograd Centar" (ključne reči)</li>
                    <li>• <strong>Bio:</strong> "Profesionalna nega kose 💇‍♀️ Beograd centar 📍 Rezervacije 👇"</li>
                    <li>• <strong>Contact button:</strong> Telefon, email, adresa</li>
                    <li>• <strong>Link in bio:</strong> Linktree sa svim važnim linkovima</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Instagram Highlights strategija:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>"O nama":</strong> Predstavljanje tima i salona</li>
                    <li>• <strong>"Cene":</strong> Cenovnik usluga</li>
                    <li>• <strong>"Before/After":</strong> Transformacije klijenata</li>
                    <li>• <strong>"Kontakt":</strong> Adresa, radno vreme, rezervacije</li>
                    <li>• <strong>"Reviews":</strong> Zadovoljni klijenti</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content strategija - Šta objavljivati</h3>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Content mix formula (70-20-10):</h4>
                <ul className="space-y-2">
                  <li>• <strong>70% - Korisni sadržaj:</strong> Saveti, edukacija, before/after</li>
                  <li>• <strong>20% - Behind the scenes:</strong> Proces rada, tim, atmosphere</li>
                  <li>• <strong>10% - Promocija:</strong> Direktne ponude i pozivi na akciju</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instagram Reels - Novi kralj sadržaja</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Reels ideje za frizerski salon:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Brza transformacija (time-lapse)</li>
                    <li>• "Dan u salonu" behind the scenes</li>
                    <li>• Tutorijali za negu kose kod kuće</li>
                    <li>• Reakcije klijenata na novo šišanje</li>
                    <li>• Trending audio sa profesionalnim sadržajem</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Reels imaju 22x veći reach od običnih postova</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Reels optimizacija:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Duržina: 15-30 sekundi (optimal)</li>
                    <li>• Prvi kadar: Hook koji privlači pažnju</li>
                    <li>• Kvalitet: HD video, dobro osvetljenje</li>
                    <li>• Muzika: Trending audio ili originalni sound</li>
                    <li>• CTA: "Pratite za više" ili "Sačuvajte ovaj post"</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. Facebook strategija za lokalne biznise</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Facebook Business Page optimization</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Page setup checklist:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Kategorija:</strong> Specifična kategorija biznisa</li>
                  <li>• <strong>About sekcija:</strong> Detaljan opis sa ključnim rečima</li>
                  <li>• <strong>Contact info:</strong> Adresa, telefon, website, email</li>
                  <li>• <strong>Radno vreme:</strong> Precizno radno vreme</li>
                  <li>• <strong>CTA button:</strong> "Pozovi", "Rezerviši", "Saznaj više"</li>
                  <li>• <strong>Reviews:</strong> Omogućiti reviews i odgovarati na sve</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Facebook Groups marketing</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Lokalne Facebook grupe:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• "Beograd - kupujem, prodajem"</li>
                    <li>• "Preporuke Beograd"</li>
                    <li>• "Mame Beograda"</li>
                    <li>• "Studenti Beograda"</li>
                    <li>• Industry-specific grupe</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Aktivno učestvovanje, ne spam oglašavanje</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Group marketing strategija:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Najpre davajte vrednost - saveti, pomoć</li>
                    <li>• Odgovarajte na pitanja kao ekspert</li>
                    <li>• Delite korisne savete vezane za vašu industriju</li>
                    <li>• Kada se stekne poverenje, discretno spomenuti biznis</li>
                    <li>• Uvek poštovati pravila grupe</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Content Creation - Kreiranje sadržaja koji engaguje</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fotografija za social media</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Equipment minimale:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Telefon:</strong> iPhone ili flagship Android</li>
                    <li>• <strong>Lighting:</strong> Ring light ili prirodno svetlo</li>
                    <li>• <strong>Tripod:</strong> Za stabilne snimke</li>
                    <li>• <strong>Editing apps:</strong> VSCO, Lightroom Mobile</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">Budget: 15,000-30,000 RSD</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Photo best practices:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Natural lighting:</strong> Najbolje 1-2h posle sunrise</li>
                    <li>• <strong>Rule of thirds:</strong> Kompozicija fotografije</li>
                    <li>• <strong>Consistent filter:</strong> Isti filter za brand</li>
                    <li>• <strong>High resolution:</strong> Minimum 1080x1080px</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Copywriting za social media</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Caption struktura:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Hook:</strong> Prva rečenica koja privlači pažnju</li>
                  <li><strong>2. Value:</strong> Korisni sadržaj, savete, informacije</li>
                  <li><strong>3. Personal touch:</strong> Lična priča ili iskustvo</li>
                  <li><strong>4. Call to action:</strong> Šta želite da prate učine</li>
                  <li><strong>5. Hashtags:</strong> 5-10 relevantnih hashtag-ova</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Hashtag strategija za srpsko tržište</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lokalni hashtag-ovi</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Opšti lokalni hashtag-ovi:</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>#beograd</div>
                    <div>#novipazar</div>
                    <div>#niš</div>
                    <div>#beogradskilokal</div>
                    <div>#vojvodina</div>
                    <div>#kragujevac</div>
                    <div>#srbija</div>
                    <div>#belgrade</div>
                    <div>#subotica</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Industry-specific (frizerski salon):</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>#frizerbeograd</div>
                    <div>#frizerka</div>
                    <div>#šišanje</div>
                    <div>#negakose</div>
                    <div>#barvanje</div>
                    <div>#frizer</div>
                    <div>#kosa</div>
                    <div>#beautylaon</div>
                    <div>#makeover</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Plaćeno oglašavanje - Facebook i Instagram Ads</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campaign objectives za lokalne biznise</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Awareness campaigns:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Reach:</strong> Maksimalno pokrivanje lokalne publike</li>
                    <li>• <strong>Brand awareness:</strong> Povećanje prepoznatljivosti</li>
                    <li>• <strong>Video views:</strong> Edukacijski video sadržaj</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Budget: 2,000-5,000 RSD/dan</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Conversion campaigns:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Messages:</strong> Direktno dopisivanje</li>
                    <li>• <strong>Calls:</strong> Telefonski pozivi</li>
                    <li>• <strong>Website traffic:</strong> Poseta website-u</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Budget: 3,000-10,000 RSD/dan</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Audience targeting</h3>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Lokalna publika setup:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Location:</strong> 10-20km radijus oko vašeg biznisa</li>
                  <li>• <strong>Age:</strong> Na osnovu vaših idealnih klijenata</li>
                  <li>• <strong>Gender:</strong> Ako je relevantno za biznis</li>
                  <li>• <strong>Interests:</strong> Povezano sa vašom industrijom</li>
                  <li>• <strong>Behaviors:</strong> Shopping behavior, device usage</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Community Management - Izgradnja zajednice</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Engagement strategija</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Response time best practices:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Comments:</strong> Odgovorite u roku od 2-4 sata</li>
                    <li>• <strong>Direct messages:</strong> Odgovorite u roku od 1 sata</li>
                    <li>• <strong>Reviews:</strong> Odgovorite u roku od 24 sata</li>
                    <li>• <strong>Mentions:</strong> Odgovorite istog dana</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Engagement tactics:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Postavite pitanja u caption-ima</li>
                    <li>• Kreirajte poll-ove u Stories</li>
                    <li>• Zatražite od klijenata da tagiraju prijatelje</li>
                    <li>• Share user-generated content</li>
                    <li>• Odgovarajte svim komentarima</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. Analytics i merenje rezultata</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">KPI-jevi za praćenje</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metrika</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instagram</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Facebook</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cilj</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Reach</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Insights</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Page Insights</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Awareness</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Engagement Rate</td>
                      <td className="px-6 py-4 text-sm text-gray-900">3-6% (dobar)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1-3% (dobar)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Community</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Website Clicks</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Link in bio</td>
                      <td className="px-6 py-4 text-sm text-gray-900">CTA button</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Traffic</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Messages</td>
                      <td className="px-6 py-4 text-sm text-gray-900">DM count</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Messenger</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Leads</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Case Study: Beauty salon "Lepota" Beograd</h2>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">6 meseci social media strategije:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Pre strategije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Instagram: 450 pratilaca</li>
                      <li>• Facebook: 280 lajkova</li>
                      <li>• Engagement: 0.8%</li>
                      <li>• Novi klijenti/mesec: 12</li>
                      <li>• Prosečan prihod: 180,000 RSD/mesec</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Posle 6 meseci:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Instagram: 2,800 pratilaca</li>
                      <li>• Facebook: 1,450 lajkova</li>
                      <li>• Engagement: 4.2%</li>
                      <li>• Novi klijenti/mesec: 48</li>
                      <li>• Prosečan prihod: 420,000 RSD/mesec</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Rezultat:</strong> 522% povećanje pratilaca, 300% povećanje klijenata, 233% povećanje prihoda</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Najčešće greške u social media marketingu</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">Top 10 grešaka:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Jednosmerni komunikacija:</strong> Samo promo, ne angažuje publiku</li>
                  <li>• <strong>Neredovno objavljivanje:</strong> Nedoslednost u content-u</li>
                  <li>• <strong>Loš kvalitet fotografija:</strong> Mutne, loše osvetljene slike</li>
                  <li>• <strong>Ignorisanje komentara:</strong> Ne odgovaraju na pitanja i feedback</li>
                  <li>• <strong>Spam hashtag-ovi:</strong> Nerelevantni ili previše hashtag-ova</li>
                  <li>• <strong>Bez lokalnog fokusa:</strong> Ne koriste lokalne hashtag-ove</li>
                  <li>• <strong>Copy-paste sadržaj:</strong> Isti sadržaj na svim platformama</li>
                  <li>• <strong>Bez strategije:</strong> Objavljuju bez plana i cilja</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Social media marketing za lokalne biznise u Srbiji zahteva strategijski pristup i konstantno
                angažovanje sa publikom. Ključ uspeha je u tome da prva dati vrednost, izgraditi zajednicu,
                a zatim prirodno predstaviti vaše usluge.
              </p>

              <p className="text-gray-600 mb-8">
                Početni rezultati se mogu videti već posle mesec dana konzistentnog rada, ali za značajne
                rezultate potrebno je 3-6 meseci. Investicija u kvalitetan sadržaj i pravilnu strategiju
                donosi dugoročne rezultate za vaš biznis.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["social media marketing", "Instagram za biznise", "Facebook marketing", "lokalni marketing", "Instagram Reels", "content strategija", "social media Srbija", "digital marketing"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potreban vam je uspešan social media marketing?</CardTitle>
              <CardDescription className="text-pink-100">
                Kontaktirajte nas za kreiranje strategije koja donosi rezultate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-pink-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zatražite social media strategiju
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle45;