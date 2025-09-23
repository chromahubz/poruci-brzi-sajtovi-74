import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle46 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Email Marketing</Badge>
              <Badge className="bg-white/20 text-white border-0">Newsletter</Badge>
              <Badge className="bg-white/20 text-white border-0">Automatizacija</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Email Marketing 2025: Kako izgraditi lojalne klijente i povećati prodaju za 40%
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>7. Februar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Nikola Janković</span>
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
                Email marketing je i dalje najrentabilniji digitalni marketing kanal sa ROI od $42 za svaki
                utrošeni dolar. U 2025. godini, pametna automatizacija i personalizacija čine razliku između
                uspešnih i neuspešnih email kampanja. Evo kako da iskoristite email marketing za rast biznisa.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zašto je email marketing još uvek kralj?</h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Email marketing statistike 2025:</h4>
                <ul className="space-y-2">
                  <li>• <strong>ROI:</strong> $42 povrat za svaki $1 utrošen</li>
                  <li>• <strong>Reach:</strong> 4.37 milijarde email korisnika globalno</li>
                  <li>• <strong>Konverzije:</strong> 3x veće konverzije od social media</li>
                  <li>• <strong>Personalizacija:</strong> 29% veći open rate sa personalizovanim subjectima</li>
                  <li>• <strong>Automatizacija:</strong> 320% više prihoda sa automated email-ovima</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email vs druge marketing kanale</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kanal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ROI</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversion Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost per Lead</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Email Marketing</td>
                      <td className="px-6 py-4 text-sm text-green-600">4200%</td>
                      <td className="px-6 py-4 text-sm text-green-600">3.71%</td>
                      <td className="px-6 py-4 text-sm text-green-600">$53</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Social Media</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">200%</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">0.71%</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">$175</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Google Ads</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">800%</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">2.81%</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">$116</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Content Marketing</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">300%</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">1.84%</td>
                      <td className="px-6 py-4 text-sm text-yellow-600">$92</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. Kreiranje email liste - Temelj uspešnog email marketing-a</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lead magneti koji konvertuju</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">B2B lead magneti:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>E-book:</strong> "Kompletni vodič za digital marketing"</li>
                    <li>• <strong>Checklist:</strong> "SEO optimization checklist"</li>
                    <li>• <strong>Template:</strong> "Email marketing template-i"</li>
                    <li>• <strong>Webinar:</strong> "Kako povećati online prodaju"</li>
                    <li>• <strong>Audit:</strong> "Besplatna analiza sajta"</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">B2C lead magneti:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Discount:</strong> "10% popust na prvu kupovinu"</li>
                    <li>• <strong>Free shipping:</strong> "Besplatna dostava za nove članove"</li>
                    <li>• <strong>Exclusive access:</strong> "Prvi pristup novim proizvodima"</li>
                    <li>• <strong>Recipe/Guide:</strong> "30 zdravih recepata"</li>
                    <li>• <strong>Contest:</strong> "Osvojite nagradu meseca"</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opt-in forme koje konvertuju</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Opt-in form najbolji position:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Exit-intent popup:</strong> 35% conversion rate</li>
                  <li>• <strong>In-content forms:</strong> 25% conversion rate</li>
                  <li>• <strong>Top of sidebar:</strong> 15% conversion rate</li>
                  <li>• <strong>Footer forms:</strong> 8% conversion rate</li>
                  <li>• <strong>Navigation bar:</strong> 5% conversion rate</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. Email segmentacija - Prava poruka, pravoj osobi</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Segmentacija strategije</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Demografska segmentacija:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Godine (18-25, 26-35, 36-50, 50+)</li>
                    <li>• Pol (muški, ženski, ostalo)</li>
                    <li>• Lokacija (grad, region, zemlja)</li>
                    <li>• Prihod (nisko, srednje, visoko)</li>
                    <li>• Posao (student, zaposleni, preduzetnik)</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Behavioral segmentacija:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Email engagement (aktivni, neaktivni)</li>
                    <li>• Purchase history (novi, postojeći, VIP)</li>
                    <li>• Website behavior (blog čitaoci, shoppers)</li>
                    <li>• Lifecycle stage (lead, customer, churned)</li>
                    <li>• Interests (proizvodi, usluge, sadržaj)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Email design i copywriting</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subject line optimizacija</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Subject line formule:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Urgency:</strong> "Samo 24h ostalo za 50% popust"</li>
                    <li>• <strong>Curiosity:</strong> "Ovo će promeniti način kako radite"</li>
                    <li>• <strong>Personal:</strong> "Marko, vaša porudžbina je spremna"</li>
                    <li>• <strong>Question:</strong> "Da li znate ovaj SEO trik?"</li>
                    <li>• <strong>Number:</strong> "5 načina da povećate prodaju"</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Subject line najbolje prakse:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Optimalna duružina: 6-10 reči (41-50 karaktera)</li>
                    <li>• Izbegavati spam reči: "BESPLATNO", "HITNO", "POBEĐUJTE"</li>
                    <li>• A/B testiranje različitih varijanti</li>
                    <li>• Personalizacija sa imenom korisnika</li>
                    <li>• Emojis (80% veći open rate)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email template design</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Responsive email najbolje prakse:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Single column layout:</strong> Najbolje se čita na mobilnim uređajima</li>
                  <li>• <strong>Veličina fonta:</strong> Minimum 14px za body text</li>
                  <li>• <strong>CTA dugmad:</strong> Minimum 44x44px za touch targets</li>
                  <li>• <strong>Images:</strong> Max 600px širine, optimizovane za brzinu</li>
                  <li>• <strong>Brand consistency:</strong> Konzistentni colors i fonts</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Email automatizacija - Rad dok spavate</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Essential automated email campaigns</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Welcome series (5-7 emailova):</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Email 1 (immediately): Dobrodošli + deliver lead magnet</li>
                    <li>• Email 2 (1 dan): O nama priča, values, mission</li>
                    <li>• Email 3 (3 dana): Najbolji sadržaj/proizvodi</li>
                    <li>• Email 4 (7 dana): Customer success stories</li>
                    <li>• Email 5 (14 dana): Gentle sales pitch</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Open rate: 50-80% | Click rate: 15-25%</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Abandoned cart series (3 emaila):</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Email 1 (1h): "Zaboravili ste nešto u korpi"</li>
                    <li>• Email 2 (24h): Social proof + reviews</li>
                    <li>• Email 3 (72h): Urgency + limited time discount</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">Recovery rate: 10-15% od napuštenih korpi</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Re-engagement campaign:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Trigger: Nema aktivnosti 60-90 dana</li>
                    <li>• Email 1: "Nedostajete nam" + best content</li>
                    <li>• Email 2: Exclusive offer "just for you"</li>
                    <li>• Email 3: "Poslednja šansa" - update preferences ili unsubscribe</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Email platforme - Izbor pravog alata</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Porediti email marketing platforme</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Mailchimp</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• User-friendly interface</li>
                        <li>• Odličan za početnike</li>
                        <li>• Besplatan plan (2,000 contacts)</li>
                        <li>• Integracija sa 300+ apps</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-600 font-medium mb-2">✗ Mane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Skuplje za veće liste</li>
                        <li>• Ograničena automatizacija (free)</li>
                        <li>• Support na engleskom</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Cena:</strong> Free - $350+/mesec | <strong>Za:</strong> Mala do srednja preduzeća</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">ConvertKit</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Napredna automatizacija</li>
                        <li>• Creator-friendly features</li>
                        <li>• Tagiranje sistema</li>
                        <li>• Odličan support</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-600 font-medium mb-2">✗ Mane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Skuplji od konkurencije</li>
                        <li>• Limitirani template-i</li>
                        <li>• Nema besplatan plan</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Cena:</strong> $29-$79/mesec | <strong>Za:</strong> Content creators, online kursevi</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">ActiveCampaign</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-600 font-medium mb-2">✓ Prednosti:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Najmoćnija automatizacija</li>
                        <li>• CRM integracija</li>
                        <li>• Machine learning features</li>
                        <li>• Split testing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-600 font-medium mb-2">✗ Mane:</p>
                      <ul className="text-sm space-y-1">
                        <li>• Kompleksniji za početnike</li>
                        <li>• Viša cena</li>
                        <li>• Learning curve</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600"><strong>Cena:</strong> $29-$379/mesec | <strong>Za:</strong> Advanced email marketing + CRM</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Email analytics i optimizacija</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ključne metrije za praćenje</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Osnovne metrije:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Deliverability rate:</strong> 95%+ (cilj)</li>
                    <li>• <strong>Open rate:</strong> 20-25% (dobar)</li>
                    <li>• <strong>Click-through rate:</strong> 2-5% (dobar)</li>
                    <li>• <strong>Unsubscribe rate:</strong> &lt;0.5% (dobar)</li>
                    <li>• <strong>Bounce rate:</strong> &lt;2% (dobar)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Advanced metrije:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Revenue per email:</strong> Prihod/poslate emailovi</li>
                    <li>• <strong>Conversion rate:</strong> Prodaje/ukupan broj emailova</li>
                    <li>• <strong>List growth rate:</strong> Rast email liste</li>
                    <li>• <strong>Email ROI:</strong> Prihod/troškovi email kampanja</li>
                    <li>• <strong>Forward rate:</strong> Koliko se email-ovi prosleđuju</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">A/B testing strategije</h3>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Šta A/B testirati:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Subject lines:</strong> Dužina, emojis, personalizacija</li>
                  <li>• <strong>Send times:</strong> Dan u nedelji, vreme slanja</li>
                  <li>• <strong>Email content:</strong> Duži vs kraći sadržaj</li>
                  <li>• <strong>CTA buttons:</strong> Boja, tekst, pozicija</li>
                  <li>• <strong>From name:</strong> Ime kompanije vs lično ime</li>
                  <li>• <strong>Images:</strong> Sa slikama vs bez slika</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. Email deliverability - Da vaši email-ovi stignu u inbox</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Faktori koji utiču na deliverability</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Sending reputation faktori:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>IP reputation:</strong> Istorijat slanja sa vašeg IP-a</li>
                    <li>• <strong>Domain reputation:</strong> Reputacija vašeg domena</li>
                    <li>• <strong>Authentication:</strong> SPF, DKIM, DMARC setup</li>
                    <li>• <strong>List hygiene:</strong> Čišćenje neaktivnih email-ova</li>
                    <li>• <strong>Engagement:</strong> Open i click rates</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverability najbolje prakse:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Double opt-in za nove subscribere</li>
                    <li>• Redovno uklanjanje bounce-ovanih email-ova</li>
                    <li>• Warming up novih IP adresa</li>
                    <li>• Monitoring spam complaints</li>
                    <li>• Consent management compliance</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Case Study: E-commerce sajt "ModaTrend"</h2>

              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Email marketing rezultati posle 6 meseci:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Pre email strategije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Email lista: 850 subscribera</li>
                      <li>• Open rate: 18%</li>
                      <li>• Click rate: 1.2%</li>
                      <li>• Mesečni prihod od email-a: 12,000 RSD</li>
                      <li>• Email ROI: 180%</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Posle optimizacije:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Email lista: 4,200 subscribera</li>
                      <li>• Open rate: 32%</li>
                      <li>• Click rate: 4.8%</li>
                      <li>• Mesečni prihod od email-a: 89,000 RSD</li>
                      <li>• Email ROI: 640%</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Rezultat:</strong> 494% povećanje email liste, 742% povećanje prihoda od email marketinga</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">GDPR i email marketing compliance</h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">GDPR compliance checklist:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Explicit consent:</strong> Jasno privoljenje za email marketing</li>
                  <li>• <strong>Opt-in forms:</strong> Clear language o tome šta će dobijati</li>
                  <li>• <strong>Privacy policy:</strong> Objašnjenje kako koristite podatke</li>
                  <li>• <strong>Unsubscribe:</strong> Lak i jednostavan način za odjavlivanje</li>
                  <li>• <strong>Data portability:</strong> Mogućnost download-a podataka</li>
                  <li>• <strong>Right to be forgotten:</strong> Brisanje podataka na zahtev</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Email marketing ostaje najrentabilniji digitalni marketing kanal, ali zahteva strategijski
                pristup i kontinuiranu optimizaciju. Ključ uspeha leži u kombinovanju kvalitetnog sadržaja,
                pametne segmentacije i automatizovanih kampanja.
              </p>

              <p className="text-gray-600 mb-8">
                Počnite sa izgradnjom email liste danas - svaki dan kašnjenja košta vas potencijalne klijente
                i prihod. Sa pravim pristupom, email marketing može postati najprofitabilniji deo vaše
                marketing strategije.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["email marketing", "newsletter", "email automatizacija", "lead magneti", "email segmentacija", "Mailchimp", "email kampanje", "email ROI"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potrebna vam je email marketing strategija?</CardTitle>
              <CardDescription className="text-sky-100">
                Kontaktirajte nas za kreiranje profitabilnih email kampanja
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-sky-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Pokrenite email marketing
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle46;