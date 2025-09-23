import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle39 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-green-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Web Bezbednost</Badge>
              <Badge className="bg-white/20 text-white border-0">Cyber Security</Badge>
              <Badge className="bg-white/20 text-white border-0">Hacking Prevention</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Web Bezbednost 2025: Kako zaštititi vaš sajt od hakera i cyber napada
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>22. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Aleksandar Mitrović</span>
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
                Cyber napadi postaju sve sofisticiraniji, a sajt bez adekvatne zaštite je laka meta.
                U 2025. godini, web bezbednost nije luksuz već neophodnost. Evo kompletnog vodiča
                kako da zaštitite vaš sajt od svih vrsta pretnji.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Trenutno stanje web bezbednosti</h2>

              <p className="text-gray-600 mb-6">
                Statistike o cyber napadima u 2024. godini su alarmantne:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h4 className="font-semibold text-red-800 mb-3">Zabrinjavajuće statistike:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>43%</strong> napada cilja mala preduzeća</li>
                    <li>• <strong>95%</strong> uspešnih napada zbog ljudske greške</li>
                    <li>• <strong>$4.88M</strong> prosečna šteta od data breach</li>
                    <li>• <strong>277 dana</strong> prosečno vreme otkrivanja napada</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h4 className="font-semibold text-orange-800 mb-3">Najčešći tipovi napada:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Malware</strong> (28%)</li>
                    <li>• <strong>Phishing</strong> (24%)</li>
                    <li>• <strong>SQL Injection</strong> (19%)</li>
                    <li>• <strong>DDoS</strong> (15%)</li>
                    <li>• <strong>Cross-Site Scripting</strong> (14%)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. HTTPS i SSL sertifikati - Osnova bezbednosti</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Zašto je HTTPS kritičan?</h3>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Prednosti HTTPS-a:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Enkriptovani saobraćaj:</strong> Podaci su zaštićeni tokom prenosa</li>
                  <li>• <strong>Autentifikacija:</strong> Potvrđuje identitet vašeg sajta</li>
                  <li>• <strong>SEO boost:</strong> Google favorizuje HTTPS sajtove</li>
                  <li>• <strong>Povećano poverenje:</strong> "Secure" oznaka u browseru</li>
                  <li>• <strong>Compliance:</strong> Potreban za GDPR i druge regulacije</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tipovi SSL sertifikata</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tip</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Validacija</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vreme izdavanja</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Najbolje za</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DV (Domain Validated)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Samo domen</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Minuti</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Lični blogovi, mali sajtovi</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">OV (Organization Validated)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Domen + organizacija</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1-3 dana</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Biznis sajtovi</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">EV (Extended Validation)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Striktna validacija</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1-2 nedelje</td>
                      <td className="px-6 py-4 text-sm text-gray-900">E-commerce, banke</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. Bezbednost CMS sistema</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">WordPress bezbednost</h3>

              <p className="text-gray-600 mb-6">
                WordPress pokreće 43% svih sajtova, što ga čini glavnom metom hakera:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Osnovne sigurnosne mere:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Redovno ažuriranje WP core, tema i plugin-a</li>
                    <li>• Snažni login podaci (dugačke, kompleksne lozinke)</li>
                    <li>• Ograničavanje login pokušaja</li>
                    <li>• Dvofaktorska autentifikacija (2FA)</li>
                    <li>• Promena default admin korisničkog imena</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Napredne sigurnosne mere:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Web Application Firewall (WAF)</li>
                    <li>• Malware scanning i monitoring</li>
                    <li>• Backup sistema (automatski, redovni)</li>
                    <li>• Sakrivanje WP verzije iz source koda</li>
                    <li>• Promena wp-admin URL-a</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sigurnosni plugin-i za WordPress</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Wordfence Security</h4>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Firewall i malware scanner</li>
                    <li>• Real-time threat protection</li>
                    <li>• Login security</li>
                    <li>• Traffic analysis</li>
                  </ul>
                  <p className="text-xs text-gray-600">Cena: Besplatno + Premium ($99/god)</p>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Sucuri Security</h4>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Website monitoring</li>
                    <li>• Malware removal</li>
                    <li>• DDoS protection</li>
                    <li>• SSL monitoring</li>
                  </ul>
                  <p className="text-xs text-gray-600">Cena: Od $199.99/godišnje</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Zaštita od najčešćih napada</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">SQL Injection prevencija</h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-3">Šta je SQL Injection?</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Napadač ubacuje maliciozni SQL kod kroz input polja da pristupi bazi podataka.
                </p>
                <h5 className="font-medium text-red-800 mb-2">Mere zaštite:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Korišćenje parametrized queries/prepared statements</li>
                  <li>• Input validacija i sanitization</li>
                  <li>• Principe najmanje privilegije za DB korisnike</li>
                  <li>• Web Application Firewall (WAF)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cross-Site Scripting (XSS) zaštita</h3>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">Tipovi XSS napada:</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Stored XSS:</strong> Maliciozni kod se čuva na serveru</li>
                  <li><strong>Reflected XSS:</strong> Kod se "odbija" nazad korisniku</li>
                  <li><strong>DOM-based XSS:</strong> Manipulacija DOM-a na client strani</li>
                </ul>
                <h5 className="font-medium text-orange-800 mb-2 mt-4">Preventivne mere:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Output encoding/escaping</li>
                  <li>• Content Security Policy (CSP)</li>
                  <li>• Input validacija</li>
                  <li>• HTTP-only cookies</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">DDoS zaštita</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h4 className="font-semibold text-purple-800 mb-3">DDoS mitigation strategije:</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>CDN i Load Balancing:</strong> Cloudflare, AWS CloudFront</li>
                  <li><strong>Rate limiting:</strong> Ograničavanje zahteva po IP adresi</li>
                  <li><strong>Anomaly detection:</strong> Automatsko otkrivanje neobičnih pattern-a</li>
                  <li><strong>Geografska ograničenja:</strong> Blokiranje određenih regiona</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Server i hosting bezbednost</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Izbor sigurnog hosting provajdera</h3>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key faktori za procenu:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Compliance standardi:</strong> ISO 27001, SOC 2, GDPR</li>
                  <li>• <strong>Physical security:</strong> Sigurni data centri</li>
                  <li>• <strong>Network security:</strong> DDoS protection, firewall</li>
                  <li>• <strong>Backup politike:</strong> Automatski backup-i</li>
                  <li>• <strong>Monitoring:</strong> 24/7 network monitoring</li>
                  <li>• <strong>Incident response:</strong> Brzina odgovora na pretnje</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Server hardening</h3>

              <div className="space-y-4 mb-8">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Operating System security:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Redovno ažuriranje OS-a i softvera</li>
                    <li>• Disable nepotrebnih servisa</li>
                    <li>• Konfiguracija firewall-a</li>
                    <li>• SSH key authentication</li>
                  </ul>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Web server hardening:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sakrivanje server signature</li>
                    <li>• SSL/TLS konfiguracija</li>
                    <li>• Access log monitoring</li>
                    <li>• File permission kontrola</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Backup i disaster recovery</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3-2-1 Backup strategija</h3>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">3-2-1 pravilo:</h4>
                <ul className="space-y-2">
                  <li><strong>3 kopije podataka:</strong> Originalne + 2 backup kopije</li>
                  <li><strong>2 različita media:</strong> Lokalno i cloud storage</li>
                  <li><strong>1 off-site kopija:</strong> Geografski odvojena lokacija</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automated backup rešenja</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">WordPress backup plugin-i:</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>UpdraftPlus:</strong> Najpopoznatiji, cloud integration</li>
                    <li>• <strong>BackupBuddy:</strong> Profesionalno rešenje</li>
                    <li>• <strong>Duplicator:</strong> Backup + migration</li>
                    <li>• <strong>BlogVault:</strong> Real-time backup</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Cloud backup servisi:</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>AWS S3:</strong> Skalabilno, pouzdano</li>
                    <li>• <strong>Google Cloud Storage:</strong> Integrisano sa Google servisima</li>
                    <li>• <strong>Dropbox Business:</strong> Jednostavno korišćenje</li>
                    <li>• <strong>Microsoft Azure:</strong> Enterprise level</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Monitoring i incident response</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Security monitoring tools</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Uptime monitoring:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>UptimeRobot:</strong> Besplatno za osnovne potrebe</li>
                    <li>• <strong>Pingdom:</strong> Detaljne performance metrije</li>
                    <li>• <strong>StatusCake:</strong> Global monitoring mreža</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Security scanning:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Qualys SSL Labs:</strong> SSL/TLS testiranje</li>
                    <li>• <strong>Netsparker:</strong> Web vulnerability scanner</li>
                    <li>• <strong>OpenVAS:</strong> Open source vulnerability assessment</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Incident response plan</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">6 koraka incident response-a:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Identifikacija:</strong> Brzo otkrivanje sigurnosnog incidenta</li>
                  <li><strong>2. Containment:</strong> Izolacija napada da se spreči širenje</li>
                  <li><strong>3. Eradication:</strong> Uklanjanje malware-a i popravka vulnerabilities</li>
                  <li><strong>4. Recovery:</strong> Vraćanje sistema u normalno stanje</li>
                  <li><strong>5. Lessons learned:</strong> Analiza incidenta i poboljšanje</li>
                  <li><strong>6. Communication:</strong> Obaveštavanje stakeholder-a</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. GDPR i compliance</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ključne GDPR obaveze</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <ul className="space-y-3">
                  <li><strong>Privacy Policy:</strong> Jasno opisivanje kako koristite podatke</li>
                  <li><strong>Cookie consent:</strong> Explicit pristanak za tracking cookies</li>
                  <li><strong>Data portability:</strong> Mogućnost izvoza ličnih podataka</li>
                  <li><strong>Right to be forgotten:</strong> Brisanje podataka na zahtev</li>
                  <li><strong>Data breach notification:</strong> Prijavljivanje unutar 72h</li>
                  <li><strong>Data Protection Officer:</strong> DPO za veće organizacije</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Security checklist za 2025</h2>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Essential security measures:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-2">Basic:</h5>
                    <ul className="space-y-1">
                      <li>☐ HTTPS/SSL sertifikat</li>
                      <li>☐ Snažne lozinke + 2FA</li>
                      <li>☐ Redovno ažuriranje softvera</li>
                      <li>☐ Automatski backup-i</li>
                      <li>☐ Basic firewall</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Advanced:</h5>
                    <ul className="space-y-1">
                      <li>☐ Web Application Firewall</li>
                      <li>☐ Malware scanning</li>
                      <li>☐ Security monitoring</li>
                      <li>☐ Penetration testing</li>
                      <li>☐ Incident response plan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Web bezbednost u 2025. godini zahteva proaktivni pristup i primenu više slojeva zaštite.
                Nije dovoljno osloniti se samo na osnovne mere - potrebna je sveobuhvatna sigurnosna strategija.
              </p>

              <p className="text-gray-600 mb-8">
                Investicija u bezbednost danas može da sačuva vaš biznis od skupe štete i gubitka poverenja sutra.
                Redovno ažurirajte sigurnosne mere i pratite najnovije pretnje i rešenja.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["web bezbednost", "cyber security", "HTTPS SSL", "WordPress security", "malware protection", "DDoS zaštita", "penetration testing", "GDPR compliance"].map((keyword, index) => (
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
          <Card className="bg-gradient-to-r from-teal-500 to-green-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Potrebna vam je sigurnosna analiza?</CardTitle>
              <CardDescription className="text-teal-100">
                Kontaktirajte nas za profesionalnu sigurnosnu procenu vašeg sajta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-teal-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Zatražite security audit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle39;