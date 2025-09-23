import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle44 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Google Ads</Badge>
              <Badge className="bg-white/20 text-white border-0">PPC</Badge>
              <Badge className="bg-white/20 text-white border-0">Digital Marketing</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Google Ads za lokalne biznise u Srbiji: Kompletna strategija za 2025
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>3. Februar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Jovana Milosavljević</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>17 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Google Ads može doneti neverovatne rezultate lokalnim biznisom u Srbiji, ali samo ako se koristi pravilno.
                Evo kompletnog vodiča kako da kreirate profitabilne kampanje koje će generisati kvalitetne klijente
                uz minimalnu investiciju.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto Google Ads za lokalne biznise?</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Statistike koje govore sve:</h4>
                <ul className="space-y-2">
                  <li>• <strong>65%</strong> ljudi klika na Google oglase kada želi da kupi</li>
                  <li>• <strong>76%</strong> ljudi koji pretražuje lokalno posetiti prodavnicu u roku od 24h</li>
                  <li>• <strong>46%</strong> svih Google pretaga ima lokalni intent</li>
                  <li>• <strong>ROI:</strong> Prosečno $2 zaradu za svaki $1 utrošen</li>
                  <li>• <strong>28%</strong> lokalnih pretaga rezultuje kupovinom</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Google Ads vs Organski SEO</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Google Ads</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Organski SEO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Brzina rezultata</td>
                      <td className="px-6 py-4 text-sm text-green-600">Trenutno</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">3-12 meseci</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Targetiranje</td>
                      <td className="px-6 py-4 text-sm text-green-600">Veoma precizno</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">Ograničeno</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Troškovi</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">Kontinuirani</td>
                      <td className="px-6 py-4 text-sm text-green-600">Jednokratni</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Kontrola</td>
                      <td className="px-6 py-4 text-sm text-green-600">Potpuna kontrola</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">Zavisi od Google algoritma</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Measuring ROI</td>
                      <td className="px-6 py-4 text-sm text-green-600">Lako merljivo</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">Složenije praćenje</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. Kreiranje Google Ads naloga - Setup za uspeh</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pravilno podešavanje naloga</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Billing i lokacija</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Zemlja:</strong> Srbija (važno za lokalno targetiranje)</li>
                    <li>• <strong>Valuta:</strong> RSD (srpski dinar)</li>
                    <li>• <strong>Vremenska zona:</strong> Belgrade (UTC+1)</li>
                    <li>• <strong>Billing adresa:</strong> Lokalna adresa u Srbiji</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Account struktura</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Kampanje:</strong> Po tip usluge/proizvoda</li>
                    <li>• <strong>Ad Groups:</strong> Po ključnim rečima</li>
                    <li>• <strong>Keywords:</strong> 10-20 po Ad Group</li>
                    <li>• <strong>Ads:</strong> 3-5 različitih oglasa po Ad Group</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. Keyword Research za srpsko tržište</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vrste ključnih reči za lokalne biznise</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Lokalne ključne reči:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• "frizer Beograd"</li>
                    <li>• "web dizajn Novi Sad"</li>
                    <li>• "advokat u Nišu"</li>
                    <li>• "zubar blizu mene"</li>
                    <li>• "auto servis Zemun"</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3"><strong>CPC:</strong> 30-150 RSD | <strong>Volume:</strong> Srednji</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Komercijalne ključne reči:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• "cena izrade sajta"</li>
                    <li>• "najbolji frizer Beograd"</li>
                    <li>• "jeftini advokat"</li>
                    <li>• "hitno popravka računara"</li>
                    <li>• "noćni zubar Beograd"</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3"><strong>CPC:</strong> 50-300 RSD | <strong>Volume:</strong> Visoki</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Google Keyword Planner za srpski market</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Keyword research process:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Seed keywords:</strong> Osnovne reči iz vaše industrije</li>
                  <li><strong>2. Lokalne varijante:</strong> Dodavanje gradova i "blizu mene"</li>
                  <li><strong>3. Long-tail keywords:</strong> Specifičniji izrazi (manja konkurencija)</li>
                  <li><strong>4. Negative keywords:</strong> Isključivanje nerelevantnih pretaga</li>
                  <li><strong>5. Konkurentska analiza:</strong> Šta koriste konkurenti</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Campaign Types - Izbor prave strategije</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Search kampanje - Najvažnije za lokalne biznise</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Search Campaign setup:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Goal:</strong> Leads ili Sales</li>
                    <li>• <strong>Campaign type:</strong> Search</li>
                    <li>• <strong>Networks:</strong> Google Search (bez Display partnera)</li>
                    <li>• <strong>Locations:</strong> Specifični gradovi ili radijus</li>
                    <li>• <strong>Language:</strong> Serbian</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Local Campaign (Google My Business):</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Automatski prikazuje adresu i telefon</li>
                    <li>• Integrisan sa Google Maps</li>
                    <li>• "Pozovi" i "Rute" dugmad</li>
                    <li>• Idealno za restorane, saloni, servisi</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location Targeting za Srbiju</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Location strategies:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Ceo grad:</strong> "Belgrade, Serbia" - široko pokrivanje</li>
                  <li>• <strong>Specifične opštine:</strong> "Savski Venac", "Novi Beograd"</li>
                  <li>• <strong>Radijus targeting:</strong> 5km, 10km, 20km oko vaše lokacije</li>
                  <li>• <strong>Bulk locations:</strong> Više gradova odjednom (Beograd, Novi Sad, Niš)</li>
                  <li>• <strong>Exclude locations:</strong> Oblasti gde ne pružate usluge</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Ad Copy Writing - Oglasi koji konvertuju</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Anatomija savršenog Google oglasa</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Primer: Web dizajn agencija Beograd</h4>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-blue-600 font-semibold">Headline 1:</p>
                  <p className="text-lg font-bold">Profesionalan Web Dizajn Beograd</p>

                  <p className="text-blue-600 font-semibold mt-2">Headline 2:</p>
                  <p className="text-lg font-bold">Moderan Sajt Za 7 Dana</p>

                  <p className="text-blue-600 font-semibold mt-2">Headline 3:</p>
                  <p className="text-lg font-bold">Besplatna Konsultacija</p>

                  <p className="text-blue-600 font-semibold mt-2">Description 1:</p>
                  <p>Kreiramo responsive sajtove koji konvertuju posetioce u klijente. SEO optimizovano, brzo učitavanje.</p>

                  <p className="text-blue-600 font-semibold mt-2">Description 2:</p>
                  <p>Preko 500 zadovoljnih klijenata. Portfolio, cene i kontakt na sajtu. Pozovite danas!</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ad Extensions - Povećajte CTR za 15%</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Sitelink Extensions:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• O nama</div>
                    <div>• Portfolio</div>
                    <div>• Cene</div>
                    <div>• Kontakt</div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Callout Extensions:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Besplatna konsultacija</div>
                    <div>• 24/7 podrška</div>
                    <div>• Garancija kvaliteta</div>
                    <div>• Bez skrivenih troškova</div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Call Extensions:</h4>
                  <p className="text-sm">+381 11 XXX XXXX - direktan poziv iz oglasa</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Bidding Strategies za lokalne biznise</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manual vs Automated bidding</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Manual CPC (Početnici):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Kontrola:</strong> Potpuna kontrola nad bid-ovima</li>
                    <li>• <strong>Learning:</strong> Razumete kako funkcioniše</li>
                    <li>• <strong>Budget:</strong> Manji budžeti ($10-50/dan)</li>
                    <li>• <strong>Optimizacija:</strong> Manuelna, na osnovu podataka</li>
                  </ul>
                  <p className="text-xs text-green-600 mt-2">✓ Preporučeno za početnike</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Maximize Conversions (Napredni):</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>AI optimizacija:</strong> Google algoritam optimizuje</li>
                    <li>• <strong>Learning period:</strong> 2-4 nedelje za optimizaciju</li>
                    <li>• <strong>Budget:</strong> Veći budžeti ($50+/dan)</li>
                    <li>• <strong>Data:</strong> Potrebno minimum 30 konverzija/mesec</li>
                  </ul>
                  <p className="text-xs text-blue-600 mt-2">ℹ Za iskusne sa dovoljno podataka</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Budget planning za srpsko tržište</h3>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Prosečni troškovi po industriji (CPC u RSD):</h4>
                <ul className="space-y-2">
                  <li>• <strong>Web dizajn/development:</strong> 80-250 RSD</li>
                  <li>• <strong>Advokati:</strong> 150-500 RSD</li>
                  <li>• <strong>Stomatologija:</strong> 100-300 RSD</li>
                  <li>• <strong>Frizeri/beauty:</strong> 40-120 RSD</li>
                  <li>• <strong>Auto servisi:</strong> 60-180 RSD</li>
                  <li>• <strong>Nekretnine:</strong> 50-200 RSD</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Landing Page optimizacija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Elementi landing page-a koji konvertuju</h3>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Landing page checklist:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Headline match:</strong> Poklapanje sa oglasnim tekstom</li>
                  <li>• <strong>Clear CTA:</strong> Jedostavno poziv na akciju</li>
                  <li>• <strong>Social proof:</strong> Testimonijali, recenzije, broj klijenata</li>
                  <li>• <strong>Contact info:</strong> Telefon, adresa, email vidljivo</li>
                  <li>• <strong>Fast loading:</strong> &lt; 3 sekunde učitavanje</li>
                  <li>• <strong>Mobile optimization:</strong> Odličo izgleda na telefonu</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact form optimizacija</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Minimalni podaci:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Ime i prezime</li>
                    <li>• Telefon (najvažnije!)</li>
                    <li>• Email</li>
                    <li>• Kratka poruka</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Manje polja = više konverzija</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. Conversion Tracking - Merenje uspeha</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tipovi konverzija za lokalne biznise</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Phone calls:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Google forwarding number</li>
                    <li>• Call duration tracking</li>
                    <li>• Call recordings (sa dozvolom)</li>
                    <li>• Vrednost: Visoka (direktan kontakt)</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Contact forms:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Submit button tracking</li>
                    <li>• Thank you page</li>
                    <li>• Form completion rate</li>
                    <li>• Vrednost: Srednja (potreban follow-up)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">8. Campaign Optimization - Kontinuirano poboljšanje</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Weekly optimization checklist</h3>

              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Nedeljne optimizacije:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Search terms report:</strong> Dodaj negative keywords</li>
                  <li>• <strong>Ad performance:</strong> Pause loše ads, test nove</li>
                  <li>• <strong>Keyword bids:</strong> Povećaj za profitable keywords</li>
                  <li>• <strong>Budget allocation:</strong> Prebaci budget na bolje kampanje</li>
                  <li>• <strong>Landing page:</strong> A/B testiraj različite verzije</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">9. Česte greške lokalnih biznisa</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h4 className="font-semibold text-red-800 mb-3">Top 10 grešaka:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Široko targetiranje:</strong> "Cela Srbija" umesto lokalnih gradova</li>
                  <li>• <strong>Genericki oglasi:</strong> Isti oglasi za sve ključne reči</li>
                  <li>• <strong>Nema negative keywords:</strong> Troški na nerelevantne klikove</li>
                  <li>• <strong>Loša landing page:</strong> Oglas vodi na home page</li>
                  <li>• <strong>Nema phone tracking:</strong> Ne mere telefonske pozive</li>
                  <li>• <strong>Kratkoročno mišljenje:</strong> Odustaju posle nedelju dana</li>
                  <li>• <strong>Ignorisanje mobile:</strong> 70% klikova je sa telefona</li>
                  <li>• <strong>Set & forget:</strong> Ne optimizujejo kampanje redovno</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Case Study: Frizerski salon Beograd</h2>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Rezultati posle 3 meseca optimizacije:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Pre optimizacije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Budget: 15,000 RSD/mesec</li>
                      <li>• CTR: 1.8%</li>
                      <li>• CPC: 65 RSD</li>
                      <li>• Konverzije: 8/mesec</li>
                      <li>• Cost per lead: 1,875 RSD</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Posle optimizacije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Budget: 15,000 RSD/mesec</li>
                      <li>• CTR: 4.2%</li>
                      <li>• CPC: 42 RSD</li>
                      <li>• Konverzije: 23/mesec</li>
                      <li>• Cost per lead: 652 RSD</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Rezultat:</strong> 287% povećanje konverzija, 65% smanjenje cost per lead</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Google Ads može biti izuzetno profitabilan kanal za lokalne biznise u Srbiji, ali zahteva
                strategijski pristup i kontinuiranu optimizaciju. Ključ je u tome da počnete sa manjim budžetom,
                testirate šta funkcioniše, i postupno skalirate uspešne kampanje.
              </p>

              <p className="text-gray-600 mb-8">
                Ne očekujte rezultate preko noći - dajte kampanjama minimum 2-4 nedelje da se optimizuju.
                Sa pravilnim pristupom, Google Ads može postati vaš najjači kanal za generisanje novih klijenata.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Google Ads Srbija", "PPC kampanje", "lokalno oglašavanje", "Google Ads za biznise", "digital marketing", "online oglašavanje", "Google Ads optimizacija", "lokalni PPC"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potrebne vam su profitabilne Google Ads kampanje?</CardTitle>
              <CardDescription className="text-amber-100">
                Kontaktirajte nas za besplatnu analizu i strategiju
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-amber-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zatražite Google Ads konsultaciju
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle44;