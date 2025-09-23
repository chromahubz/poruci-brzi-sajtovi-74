import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle29 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <Badge variant="secondary" className="w-fit">
              Web Security
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Web bezbednost: Kako zaštititi svoj sajt od napada
            </h1>
            <p className="text-xl text-muted-foreground">
              Praktični vodič za implementaciju osnovnih bezbednosnih mera na vašem web sajtu
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>10. januar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Stefan Milosavljević</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min čitanja</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Podeli
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
              alt="Web security and cybersecurity concept"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <p className="text-lg leading-relaxed mb-6">
              Cyber napadi postaju sve sofisticiraniji, a web sajtovi su česta meta hakera.
              Implementiranje osnovnih bezbednosnih mera može značajno smanjiti rizik od napada
              i zaštititi vaše korisničke podatke.
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Zašto je bezbednost kritična?</h3>
                  <p className="text-red-700 text-sm">
                    Prema statistikama, svaki dan se dogodi preko 30,000 cyber napada. Kompromitovan sajt
                    može rezultovati gubitkom podataka, finansijskim štetama i narušavanjem ugleda.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Najčešći tipovi napada</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    SQL Injection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Napadač unosi maliciozni SQL kod kroz input polja da bi pristupao bazi podataka.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    XSS (Cross-Site Scripting)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ubacivanje malicioznog JavaScript koda koji se izvršava u browser-u korisnika.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Brute Force
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatski pokušaji pogađanja lozinki kroz sistemsko testiranje kombinacija.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    CSRF
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Prisiljavanie korisnika da nenamerno izvršava akcije na sajtu gde je ulogovan.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Osnovne bezbednosne mere</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. HTTPS certifikat</h3>
            <p className="mb-4">
              SSL/TLS certifikat enkriptuje podatke koji se prenose između browser-a i server-a.
            </p>

            <Card className="bg-green-50 border-green-200 mb-6">
              <CardContent className="p-4">
                <p className="text-green-800 text-sm">
                  ✅ <strong>Implementacija:</strong> Nabavite SSL certifikat od pouzdanog CA ili koristite
                  besplatne opcije kao što je Let's Encrypt.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Validacija i sanitizacija input-a</h3>
            <p className="mb-4">
              Nikad ne verujte korisničkim input-ima. Uvek validirajte i očistite podatke pre obrade.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">PHP primer validacije:</h4>
              <pre className="text-sm overflow-x-auto">
{`// Nikad ovako ❌
$query = "SELECT * FROM users WHERE id = " . $_GET['id'];

// Uvek ovako ✅
$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
if ($id !== false) {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$id]);
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Bezbednost lozinki</h3>
            <p className="mb-4">
              Implementirajte jake lozinke i hash algoritme za čuvanje korisničkih lozinki.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Hashing lozinki u PHP:</h4>
              <pre className="text-sm overflow-x-auto">
{`// Kreiranje hash-a
$password = $_POST['password'];
$hash = password_hash($password, PASSWORD_DEFAULT);

// Verifikacija
if (password_verify($_POST['password'], $stored_hash)) {
    // Lozinka je tačna
    echo "Uspešna prijava!";
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">4. Ograničavanje pristupa fajlovima</h3>
            <p className="mb-4">
              Koristite .htaccess fajl za ograničavanje pristupa osetljivim direktorijumima.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">.htaccess primer:</h4>
              <pre className="text-sm overflow-x-auto">
{`# Blokiranje pristupa config fajlovima
<Files "*.config">
    Order allow,deny
    Deny from all
</Files>

# Sprečavanje directory browsing
Options -Indexes

# Blokiranje suspicious requests
RewriteEngine On
RewriteCond %{QUERY_STRING} (\<|%3C).*script.*(\>|%3E) [NC,OR]
RewriteCond %{QUERY_STRING} GLOBALS(=|\[|\%[0-9A-Z]{0,2}) [OR]
RewriteRule .* - [F]`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Napredne bezbednosne mere</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Content Security Policy (CSP)</h3>
            <p className="mb-4">
              CSP header pomaže u sprečavanju XSS napada definisanjem dozvoljenih izvora sadržaja.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">CSP header primer:</h4>
              <pre className="text-sm overflow-x-auto">
{`Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Rate Limiting</h3>
            <p className="mb-4">
              Ograničite broj zahteva po IP adresi da biste sprečili brute force napade.
            </p>

            <Card className="bg-blue-50 border-blue-200 mb-6">
              <CardContent className="p-4">
                <p className="text-blue-800 text-sm">
                  💡 <strong>Implementacija:</strong> Koristite alate kao što su Fail2Ban ili
                  implementirajte rate limiting u vašem web server-u (nginx, Apache).
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Monitoring i održavanje</h2>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Redovni update-i:</strong> Održavajte CMS, plugin-e i server software ažurnim
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Backup strategija:</strong> Kreirajte redovne backup-e i testirajte restore proces
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Security audit:</strong> Redovno testirajte svoje sajtove na vulnerabilnosti
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Log monitoring:</strong> Analizirajte server log-ove za sumnjivu aktivnost
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Korisni alati</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">OWASP ZAP</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Besplatan tool za testiranje web aplikacija na bezbednosne ranjivosti.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wordfence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    WordPress plugin za bezbednost sa firewall-om i malware scan-om.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cloudflare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    CDN sa ugrađenim DDoS zaštitom i web application firewall-om.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SSL Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Besplatan online test za evaluaciju SSL/TLS konfiguracije.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Zaključak</h2>

            <p className="mb-6">
              Web bezbednost je kontinuiran proces, a ne jednokratna aktivnost. Kombinovanje osnovnih
              mera sa redovnim monitoring-om i update-ima može značajno povećati bezbednost vašeg sajta.
            </p>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-orange-800">⚠️ Zapamtite</h3>
                <p className="text-orange-700">
                  Bezbednost nije samo tehničko pitanje - educirajte i sebe i svoj tim o bezbednosnim
                  praksama. Ljudi su često najslabija karika u bezbednosnom lancu.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Slični članci</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Security</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/28" className="hover:text-primary transition-colors">
                      GDPR i web sajtovi: Šta morate znati
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Vodič za usklađenost sa zakonima o zaštiti podataka
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Backend</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/27" className="hover:text-primary transition-colors">
                      Kako bezbedno čuvati API ključeve
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Best practices za upravljanje osetljivim podacima
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Potrebna vam je bezbednosna analiza?</h2>
            <p className="text-lg opacity-90">
              Naš tim može analizirati bezbednost vašeg sajta i implementirati potrebne mere zaštite
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Zatražite konsultacije</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle29;