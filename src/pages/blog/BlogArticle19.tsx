import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Tag, Shield, Lock, Eye, AlertTriangle, CheckCircle, Wifi, Smartphone, Laptop, Server, DollarSign, Users, TrendingUp, Key, Zap } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle19 = () => {
  const quizQuestions = [
    {
      question: "Koliko košta prosečan cyber napad malom preduzeću u Srbiji?",
      options: [
        "50,000-100,000 RSD",
        "500,000-1,000,000 RSD",
        "2,000,000-5,000,000 RSD",
        "10,000,000+ RSD"
      ],
      correct: 2,
      explanation: "Prosečan cyber napad malom preduzeću košta između 2-5 miliona RSD kada se uzmu u obzir prestanak rada, oporavak podataka, pravni troškovi i gubitak reputacije."
    },
    {
      question: "Koji je najčešći uzrok cyber napada na mala preduzeća?",
      options: [
        "Phishing email-ovi",
        "Zastareo software",
        "Slabe lozinke",
        "Sve navedeno podjednako"
      ],
      correct: 0,
      explanation: "Phishing email-ovi su uzrok 90% uspešnih cyber napada na mala preduzeća. Jedan klik zaposlenog može kompromitovati celu kompaniju."
    },
    {
      question: "Koliko često treba da se menjaju lozinke u poslovnom okruženju?",
      options: [
        "Svakih 30 dana",
        "Svakih 90 dana",
        "Godišnje",
        "Nikad, ako su dovoljno jake"
      ],
      correct: 1,
      explanation: "Eksperti preporučuju menjanje lozinki svakih 90 dana, uz obavezno korišćenje jedinstvenih, jakih lozinki i two-factor authentication."
    },
    {
      question: "Šta je najvažniji element cyber security strategije za mala preduzeća?",
      options: [
        "Najskuplji antivirus",
        "Edukacija zaposlenih",
        "Najnoviji firewall",
        "Cyber security insurance"
      ],
      correct: 1,
      explanation: "Edukacija zaposlenih je najvažnija - 95% uspešnih napada koristi ljudsku grešku. Najbolja tehnologija neće pomoći ako zaposleni kliknu na malicious link."
    },
    {
      question: "Koliko vremena prođe pre nego što malo preduzeće otkrije da je hakovano?",
      options: [
        "1-7 dana",
        "1-4 nedelje",
        "3-6 meseci",
        "Preko godinu dana"
      ],
      correct: 2,
      explanation: "Prosečno vreme otkrivanja cyber napada je 3-6 meseci. U tom periodu hakeri mogu ukrasti podatke, instalirati backdoors i pripremiti ransomware napade."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Nazad na blog</span>
            </Link>
          </Button>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>32 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Cybersecurity</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Cybersecurity za Mala Preduzeća - Kompletni Vodič kroz Zaštitu u Digitalnom Svetu 2025
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da zaštitite svoje preduzeće od cyber napada koji mogu da koštaju milione dinara. Praktični vodič sa konkretnim koracima, alatima i strategijama za potpunu cyber zaštitu srpskih malih preduzeća.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Threat Landscape */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <span>Cyber Pretnje u Srbiji - Statistike koje Zabrinjuje</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Cyber kriminal u Srbiji raste eksponencijalno. U 2024. godini zabeležen je porast cyber napada na mala preduzeća za 340% u odnosu na 2022. godinu. Ono što je najgore - 70% malih preduzeća koja doživlje ozbiljan cyber napad zatvara se u roku od 6 meseci.
              </p>
              <p>
                Srbija se nalazi na 47. mestu u svetu po cyber security indeksu, što znači da postoji značajan prostor za poboljšanje. Mala preduzeća su posebno ranjiva jer nemaju dedicated IT timove i često nemaju svest o realnim pretnjama.
              </p>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-red-800">Alarmantne statistike za 2024:</h4>
                <ul className="space-y-2">
                  <li>• <strong>43% malih preduzeća</strong> doživelo je cyber napad u poslednjih 12 meseci</li>
                  <li>• <strong>Prosečan trošak napada:</strong> 3.2 miliona RSD po incidentu</li>
                  <li>• <strong>95% napada</strong> uspešno je izvršeno preko phishing email-ova</li>
                  <li>• <strong>Samo 23%</strong> malih preduzeća ima cyber security plan</li>
                  <li>• <strong>6 meseci</strong> - prosečno vreme otkrivanja napada</li>
                  <li>• <strong>14 dana</strong> - prosečno vreme oporavka sistema</li>
                  <li>• <strong>67% preduzeća</strong> nema backup strategiju</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Types of Cyber Attacks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span>Tipovi Cyber Napada na Mala Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">1. Phishing Napadi</h3>
                <p className="mb-4">
                  Najčešći i najuspešniji tip napada. Hakeri šalju email-ove koji izgledaju legitimno da bi ukrali pristupne podatke ili instalirali malware.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3">Karakteristike phishing email-a:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Hitnost ("Vaš nalog će biti zatvoren")</li>
                      <li>• Lažni pošiljaoči (banka, pošta, state)</li>
                      <li>• Sumnjivi linkovi</li>
                      <li>• Zahtevi za lične podatke</li>
                      <li>• Gramatičke greške</li>
                      <li>• Neočekivani prilozi</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3">Kako prepoznati phishing:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Proverite sender email adresu</li>
                      <li>• Hover preko linkova (ne kliknite!)</li>
                      <li>• Pozovite "pošiljaocu" direktno</li>
                      <li>• Koristite bookmark-e za banking</li>
                      <li>• Nikad ne unosite lozinke iz email-a</li>
                      <li>• Reportujte sumnjive email-ove</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">2. Ransomware</h3>
                <p className="mb-4">
                  Malware koji enkriptuje podatke kompanije i traži otkup za dešifrovanje. Jedan od najskupljih tipova napada.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tipičan ransomware scenario:</h4>
                  <ol className="space-y-1 text-sm list-decimal list-inside">
                    <li>Zaposleni otvori infected attachment</li>
                    <li>Ransomware se instalira u background-u</li>
                    <li>Malware se širi kroz mrežu</li>
                    <li>Enkriptuje sve dostupne fajlove</li>
                    <li>Prikazuje ransom poruku</li>
                    <li>Traži plaćanje u Bitcoin-u</li>
                    <li>Prijeti brisanjem podataka</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">3. Business Email Compromise (BEC)</h3>
                <p className="mb-4">
                  Hakeri se predstavljaju kao CEO ili drugi top executive i traže od zaposlenih da izvrše transfer novca ili pošalju osetljive informacije.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Primer BEC napada:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Scenario:</strong> "Finansijski direktor" šalje email računovođi</p>
                      <p><strong>Email:</strong> "Hitno! Trebam da sada izvršimo transfer 500,000 RSD klijentu. Ne mogu da pozovem, na sastanku sam. Evo bank detalja..."</p>
                      <p><strong>Rezultat:</strong> Zaposleni izvršava transfer mislečj da je legitiman zahtev</p>
                      <p><strong>Šteta:</strong> Direktan finansijski gubitak + troškovi istraže</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">4. Insider Threats</h3>
                <p className="mb-4">
                  Pretnje koje dolaze od current ili former zaposlenih koji imaju legitiman pristup sistemima.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Tipovi insider pretnji:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Malicious insider:</strong> Namerno šteti kompaniji</li>
                      <li>• <strong>Negligent insider:</strong> Nenamerno pravi grešku</li>
                      <li>• <strong>Infiltrator:</strong> Spoljnji agresor sa insider pristupom</li>
                      <li>• <strong>Third-party insider:</strong> Vendor ili partner</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Warning znaci:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unusual download activity</li>
                      <li>• Pristup van radnog vremena</li>
                      <li>• Kopiranje great amounts of data</li>
                      <li>• Nezadovoljstvo poslom</li>
                      <li>• Finansijski problemi</li>
                      <li>• Skorašnje otkaz davanje</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Essential Security Measures */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-primary" />
                <span>Osnovne Sigurnosne Mere - Must-Have Lista</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Password Management</h3>
                <p className="mb-4">
                  Lozinke su prva linija odbrane. Čak 81% data breach-eva koristi slabe ili ukradene lozinke.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Karakteristike jake lozinke:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Minimum 12 karaktera</strong> (idealno 16+)</li>
                      <li>• <strong>Kombinacija:</strong> velika/mala slova, brojevi, simboli</li>
                      <li>• <strong>Jedinstvena</strong> za svaki nalog</li>
                      <li>• <strong>Ne sadrži</strong> lične informacije</li>
                      <li>• <strong>Ne bazira se</strong> na dictionary reči</li>
                      <li>• <strong>Redovno menjanje</strong> (90 dana)</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Recommended Password Managers:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>1Password:</strong> $3/user/month</li>
                        <li>• <strong>Bitwarden:</strong> $3/user/month</li>
                        <li>• <strong>LastPass:</strong> $3/user/month</li>
                        <li>• <strong>Dashlane:</strong> $5/user/month</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Two-Factor Authentication:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>SMS:</strong> Basic, ali bolje od nothing</li>
                        <li>• <strong>Authenticator apps:</strong> Google, Microsoft</li>
                        <li>• <strong>Hardware tokens:</strong> YubiKey, Titan</li>
                        <li>• <strong>Biometric:</strong> Fingerprint, face ID</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Password Policy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Mandatory za sve naloge</li>
                        <li>• Regular audits i training</li>
                        <li>• Immediate promene posle breach-a</li>
                        <li>• No sharing ili reuse</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Security</h3>
                <p className="mb-4">
                  Pošto 95% napada počinje sa email-om, securing email-a je kritično za cyber security strategiju.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Email Security Solutions:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Microsoft Defender:</strong> Advanced threat protection</li>
                      <li>• <strong>Proofpoint:</strong> Enterprise solution</li>
                      <li>• <strong>Mimecast:</strong> Cloud email security</li>
                      <li>• <strong>Barracuda:</strong> All-in-one protection</li>
                      <li>• <strong>SpamTitan:</strong> Cost-effective option</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Email Security Features:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Anti-phishing protection</li>
                      <li>• Malware scanning</li>
                      <li>• URL filtering</li>
                      <li>• Attachment sandboxing</li>
                      <li>• Email encryption</li>
                      <li>• Data loss prevention</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Endpoint Protection</h3>
                <p className="mb-4">
                  Svaki device koji se conectuje na network - laptop, telefon, tablet - je potential entry point za napade.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Antivirus Solutions:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Bitdefender GravityZone:</strong> 25€/device/year</li>
                        <li>• <strong>Kaspersky Endpoint:</strong> 30€/device/year</li>
                        <li>• <strong>ESET Protect:</strong> 20€/device/year</li>
                        <li>• <strong>CrowdStrike Falcon:</strong> 50€/device/year</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Ključne funkcionalnosti:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Real-time scanning</li>
                        <li>• Behavioral analysis</li>
                        <li>• Web protection</li>
                        <li>• Device control</li>
                        <li>• Firewall integration</li>
                        <li>• Centralized management</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Mobile Device Management:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• BYOD policy enforcement</li>
                        <li>• Remote wipe capability</li>
                        <li>• App whitelisting</li>
                        <li>• Encryption requirements</li>
                        <li>• VPN forced tunneling</li>
                        <li>• Compliance monitoring</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Network Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wifi className="w-6 h-6 text-primary" />
                <span>Network Security i Infrastruktura</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Firewall Configuration</h3>
                <p className="mb-4">
                  Firewall je digital barrier između vaše internal network i spoljašnjeg sveta. Proper konfiguracija je esencijalna.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Business Firewall Options:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>SonicWall TZ series:</strong> 15,000-50,000 RSD</li>
                      <li>• <strong>Fortinet FortiGate:</strong> 25,000-80,000 RSD</li>
                      <li>• <strong>WatchGuard Firebox:</strong> 20,000-60,000 RSD</li>
                      <li>• <strong>Cisco ASA:</strong> 40,000-120,000 RSD</li>
                      <li>• <strong>pfSense:</strong> Free (DIY setup)</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Firewall Best Practices:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Default deny policy</li>
                      <li>• Regular rule review</li>
                      <li>• Logging enabled</li>
                      <li>• Intrusion prevention (IPS)</li>
                      <li>• Content filtering</li>
                      <li>• VPN support</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">WiFi Security</h3>
                <p className="mb-4">
                  Unsecured WiFi je common entry point za napade. Proper wireless security je kritična za office environmenty.
                </p>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">WiFi Security Checklist:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <ul className="space-y-1 text-sm">
                      <li>• ✅ WPA3 encryption (minimum WPA2)</li>
                      <li>• ✅ Strong WiFi password (20+ karaktera)</li>
                      <li>• ✅ Hidden SSID (opcional extra)</li>
                      <li>• ✅ Guest network separation</li>
                      <li>• ✅ MAC address filtering</li>
                    </ul>
                    <ul className="space-y-1 text-sm">
                      <li>• ✅ Regular firmware updates</li>
                      <li>• ✅ Disable WPS</li>
                      <li>• ✅ Change default admin credentials</li>
                      <li>• ✅ Enable wireless intrusion detection</li>
                      <li>• ✅ Network segmentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">VPN i Remote Access</h3>
                <p className="mb-4">
                  Sa povećanjem remote rada, secure remote access je postao kritičan za business operations i security.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Business VPN Solutions:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>NordLayer:</strong> $5/user/month</li>
                        <li>• <strong>ExpressVPN Teams:</strong> $8/user/month</li>
                        <li>• <strong>Cisco AnyConnect:</strong> $10/user/month</li>
                        <li>• <strong>FortiClient VPN:</strong> $7/user/month</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Zero Trust Network:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Never trust, always verify</li>
                        <li>• Identity-based access</li>
                        <li>• Least privilege principle</li>
                        <li>• Continuous monitoring</li>
                        <li>• Multi-factor authentication</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Remote Access Policy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• VPN mandatory za all connections</li>
                        <li>• Device encryption required</li>
                        <li>• Regular security training</li>
                        <li>• Incident reporting process</li>
                        <li>• Access review i audit</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Data Protection and Backup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="w-6 h-6 text-primary" />
                <span>Zaštita Podataka i Backup Strategije</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">3-2-1 Backup Rule</h3>
                <p className="mb-4">
                  Golden standard za data protection: 3 kopije podataka, na 2 različita media, sa 1 kopijom off-site.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">3 Kopije</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Original working data</li>
                      <li>• Local backup copy</li>
                      <li>• Remote/cloud backup</li>
                      <li>• Total: 3 versions</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">2 Media Tipa</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Primary: SSD/HDD</li>
                      <li>• Secondary: Cloud/tape</li>
                      <li>• Never isti tehnology</li>
                      <li>• Different failure modes</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">1 Off-site</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cloud storage</li>
                      <li>• Remote data center</li>
                      <li>• Different geographical location</li>
                      <li>• Protects od fire/theft</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Cloud Backup Solutions</h3>
                <p className="mb-4">
                  Cloud backup pruža automated, scalable i cost-effective solution za small business data protection.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Recommended Cloud Backup:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Acronis Cyber Backup:</strong> $69/workstation/year</li>
                        <li>• <strong>Carbonite Safe:</strong> $99/computer/year</li>
                        <li>• <strong>Backblaze Business:</strong> $60/computer/year</li>
                        <li>• <strong>IDrive Business:</strong> $149.95/year (unlimited)</li>
                        <li>• <strong>AWS Backup:</strong> Pay-as-you-use</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Backup Testing Schedule:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Daily:</strong> Automated backup verification</li>
                        <li>• <strong>Weekly:</strong> Random file restore test</li>
                        <li>• <strong>Monthly:</strong> Full system restore test</li>
                        <li>• <strong>Quarterly:</strong> Disaster recovery drill</li>
                        <li>• <strong>Annually:</strong> Complete disaster simulation</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">⚠️ Backup Testing je Kritičan!</h4>
                    <p className="text-sm">
                      <strong>73% preduzeća</strong> otkriva da njihovi backup-ovi ne rade tek kad pokušaju restore.
                      Regular testing i verification je jedini način da budete sigurni da se možete oporaviti od napada.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Data Classification i Privacy</h3>
                <p className="mb-4">
                  Znanje gde su vaši osetljivi podaci i kako su zaštićeni je fundamental za effective cyber security.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Public</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Marketing materijali</li>
                      <li>• Public web content</li>
                      <li>• Press releases</li>
                      <li>• No harm if disclosed</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Internal</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Internal communications</li>
                      <li>• Policies i procedures</li>
                      <li>• Organization chart</li>
                      <li>• Minor damage risk</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">Confidential</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Financial information</li>
                      <li>• Customer lists</li>
                      <li>• Vendor contracts</li>
                      <li>• Significant damage risk</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-3 text-red-700">Restricted</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Personal data (GDPR)</li>
                      <li>• Trade secrets</li>
                      <li>• Legal documents</li>
                      <li>• Severe damage risk</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Employee Training */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Cyber Security Training i Human Factor</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Security Awareness Program</h3>
                <p className="mb-4">
                  Vaši zaposleni su i najveća slabost i najjača odbrana. Proper training może umanjiti human error risk za 70%.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Training Topics Portfolio:</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Phishing Recognition:</strong> Real examples i red flags</li>
                        <li>• <strong>Password Security:</strong> Creation i management</li>
                        <li>• <strong>Social Engineering:</strong> Manipulation techniques</li>
                        <li>• <strong>Physical Security:</strong> Office i device protection</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Data Handling:</strong> Classification i transfer</li>
                        <li>• <strong>Incident Response:</strong> What to do kad sumnja attack</li>
                        <li>• <strong>Mobile Security:</strong> BYOD i remote work</li>
                        <li>• <strong>Compliance:</strong> GDPR i legal requirements</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Cloud Security:</strong> SaaS i file sharing</li>
                        <li>• <strong>Network Security:</strong> WiFi i VPN usage</li>
                        <li>• <strong>Malware Protection:</strong> Downloading i installation</li>
                        <li>• <strong>Privacy Protection:</strong> Personal i customer data</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Training Delivery Methods:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Online modules:</strong> Interactive e-learning</li>
                        <li>• <strong>Live workshops:</strong> Group sessions</li>
                        <li>• <strong>Simulated phishing:</strong> Controlled testing</li>
                        <li>• <strong>Security newsletters:</strong> Regular updates</li>
                        <li>• <strong>Lunch-and-learn:</strong> Informal sessions</li>
                        <li>• <strong>Role-specific training:</strong> Tailored content</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Training Schedule:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Onboarding:</strong> New employee security orientation</li>
                        <li>• <strong>Quarterly:</strong> General security updates</li>
                        <li>• <strong>Monthly:</strong> Simulated phishing tests</li>
                        <li>• <strong>As-needed:</strong> Response to new threats</li>
                        <li>• <strong>Annual:</strong> Comprehensive review i testing</li>
                        <li>• <strong>Incident-driven:</strong> Post-breach education</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Phishing Simulation Programs</h3>
                <p className="mb-4">
                  Controlled phishing tests help identify vulnerable employees i provide targeted training opportunities.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Simulation Platforms:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>KnowBe4:</strong> $25/user/year</li>
                      <li>• <strong>Proofpoint Security Awareness:</strong> $30/user/year</li>
                      <li>• <strong>Cofense PhishMe:</strong> $35/user/year</li>
                      <li>• <strong>SANS Securing the Human:</strong> $40/user/year</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Simulation Metrics:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Phish-prone percentage</li>
                      <li>• Click-through rates</li>
                      <li>• Time to click</li>
                      <li>• Reporting rates</li>
                      <li>• Improvement trends</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Target Results:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• &lt;5% click rate na simulations</li>
                      <li>• &gt;80% reporting rate</li>
                      <li>• &lt;1 minute to report</li>
                      <li>• 90% training completion</li>
                      <li>• Consistent improvement</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Incident Response */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-primary" />
                <span>Incident Response i Crisis Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Incident Response Plan</h3>
                <p className="mb-4">
                  Kada dođe do napada, svaka minuta je bitna. Proper incident response plan może umanjiti damage i speed up recovery.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-5 gap-4">
                    <Card className="p-4 border-blue-200">
                      <h4 className="font-semibold mb-3 text-blue-700">1. Preparation</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Response team roles</li>
                        <li>• Contact lists</li>
                        <li>• Tools i procedures</li>
                        <li>• Training i drills</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-orange-200">
                      <h4 className="font-semibold mb-3 text-orange-700">2. Identification</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Detect incident</li>
                        <li>• Classify severity</li>
                        <li>• Document evidence</li>
                        <li>• Alert response team</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-red-200">
                      <h4 className="font-semibold mb-3 text-red-700">3. Containment</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Isolate affected systems</li>
                        <li>• Prevent spread</li>
                        <li>• Preserve evidence</li>
                        <li>• Maintain operations</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-green-200">
                      <h4 className="font-semibold mb-3 text-green-700">4. Eradication</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Remove threat</li>
                        <li>• Fix vulnerabilities</li>
                        <li>• Update security</li>
                        <li>• Verify clean state</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-purple-200">
                      <h4 className="font-semibold mb-3 text-purple-700">5. Recovery</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Restore systems</li>
                        <li>• Monitor for threats</li>
                        <li>• Validate operations</li>
                        <li>• Document lessons</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🚨 Emergency Response Contacts:</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>IT Support:</strong> Primary i backup kontakt</li>
                        <li>• <strong>Management:</strong> Decision makers</li>
                        <li>• <strong>Legal:</strong> Compliance i notification</li>
                        <li>• <strong>PR/Communications:</strong> Public response</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Cyber Insurance:</strong> Claim reporting</li>
                        <li>• <strong>Law Enforcement:</strong> Serious crimes</li>
                        <li>• <strong>Customers:</strong> Notification process</li>
                        <li>• <strong>Vendors:</strong> Third-party support</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Regulators:</strong> GDPR i compliance</li>
                        <li>• <strong>Forensic Expert:</strong> Investigation support</li>
                        <li>• <strong>Media:</strong> Official spokesperson</li>
                        <li>• <strong>Business Partners:</strong> Supply chain</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Continuity Planning</h3>
                <p className="mb-4">
                  Cyber attack ne sme da zaustavi operations. Business continuity plan osigurava da možete nastaviti rad tokom i posle incidenta.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Critical Business Functions:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Revenue generation:</strong> Sales i billing</li>
                      <li>• <strong>Customer service:</strong> Support i communication</li>
                      <li>• <strong>Production:</strong> Core business operations</li>
                      <li>• <strong>Financial:</strong> Payroll i banking</li>
                      <li>• <strong>Legal/Compliance:</strong> Regulatory requirements</li>
                      <li>• <strong>Supplier management:</strong> Supply chain</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Recovery Time Objectives:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Critical systems:</strong> &lt;4 hours</li>
                      <li>• <strong>Important systems:</strong> &lt;24 hours</li>
                      <li>• <strong>Standard systems:</strong> &lt;72 hours</li>
                      <li>• <strong>Non-essential:</strong> &lt;1 week</li>
                      <li>• <strong>Archive/backup:</strong> As needed</li>
                      <li>• <strong>Development:</strong> Low priority</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Compliance and Legal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Compliance i Legal Requirements u Srbiji</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">GDPR Compliance</h3>
                <p className="mb-4">
                  General Data Protection Regulation applies to all companies koje process personal data EU citizens, uključujući srpska preduzeća.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">GDPR Key Requirements:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Lawful basis:</strong> Za processing personal data</li>
                        <li>• <strong>Consent:</strong> Clear i specific permission</li>
                        <li>• <strong>Data minimization:</strong> Collect only necessary data</li>
                        <li>• <strong>Purpose limitation:</strong> Use only for stated purpose</li>
                        <li>• <strong>Accuracy:</strong> Keep data up-to-date</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Storage limitation:</strong> Delete kad no longer needed</li>
                        <li>• <strong>Security:</strong> Appropriate technical measures</li>
                        <li>• <strong>Accountability:</strong> Demonstrate compliance</li>
                        <li>• <strong>Rights:</strong> Access, rectification, erasure</li>
                        <li>• <strong>Breach notification:</strong> 72 hours to regulator</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">GDPR Penalties:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Tier 1:</strong> Up to €10M ili 2% annual revenue</li>
                        <li>• <strong>Tier 2:</strong> Up to €20M ili 4% annual revenue</li>
                        <li>• <strong>Srpski context:</strong> Enforcement growing</li>
                        <li>• <strong>Reputational damage:</strong> Often worse než fine</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Data Protection Officer:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Required za certain organizations</li>
                        <li>• Independent role</li>
                        <li>• Reports to highest management</li>
                        <li>• Can be external consultant</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Privacy by Design:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Build privacy into systems</li>
                        <li>• Default privacy settings</li>
                        <li>• Privacy impact assessments</li>
                        <li>• Regular compliance audits</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Cyber Insurance</h3>
                <p className="mb-4">
                  Cyber insurance postaje essential za mala preduzeća, ali understanding coverage i limitations je critical.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Typical Coverage Areas:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Data breach response:</strong> Investigation, notification</li>
                      <li>• <strong>Business interruption:</strong> Lost income</li>
                      <li>• <strong>Cyber extortion:</strong> Ransomware payments</li>
                      <li>• <strong>Legal expenses:</strong> Regulatory fines</li>
                      <li>• <strong>Public relations:</strong> Reputation management</li>
                      <li>• <strong>System restoration:</strong> Recovery costs</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Coverage Exclusions:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Prior breaches:</strong> Before policy start</li>
                      <li>• <strong>War/terrorism:</strong> Nation-state attacks</li>
                      <li>• <strong>Poor security:</strong> Negligent practices</li>
                      <li>• <strong>Insider threats:</strong> Intentional acts</li>
                      <li>• <strong>IP theft:</strong> Trade secrets</li>
                      <li>• <strong>Physical damage:</strong> Hardware issues</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Quiz */}
          <Quiz questions={quizQuestions} />

          {/* Cost Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-primary" />
                <span>Troškovi Cyber Security - Investment vs Risk</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Security Budget Planning</h3>
                <p className="mb-4">
                  Investiranje u cyber security nije trošak - to je insurance protiv potentially devastating losses.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Basic Security (50k-150k RSD/year)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Business antivirus</li>
                      <li>• Password manager</li>
                      <li>• Cloud backup</li>
                      <li>• Basic firewall</li>
                      <li>• Employee training (online)</li>
                      <li>• <strong>Coverage:</strong> 5-10 employees</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Standard Security (150k-400k RSD/year)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Advanced endpoint protection</li>
                      <li>• Email security platform</li>
                      <li>• Business VPN</li>
                      <li>• Managed firewall</li>
                      <li>• Security awareness program</li>
                      <li>• <strong>Coverage:</strong> 10-50 employees</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Advanced Security (400k+ RSD/year)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 24/7 SOC monitoring</li>
                      <li>• Incident response service</li>
                      <li>• Penetration testing</li>
                      <li>• Compliance consulting</li>
                      <li>• Cyber insurance</li>
                      <li>• <strong>Coverage:</strong> 50+ employees</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ROI Cyber Security Investment</h3>
                <p className="mb-4">
                  Studies show da svaki dinar uložen u cyber security saves 4-7 dinara u potential losses.
                </p>

                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Cyber Security ROI Calculator:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Cost of Cyber Attack:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Business downtime:</strong> 200,000 RSD/day</li>
                        <li>• <strong>Data recovery:</strong> 500,000-2,000,000 RSD</li>
                        <li>• <strong>Legal costs:</strong> 300,000-1,000,000 RSD</li>
                        <li>• <strong>Reputation damage:</strong> 20-40% revenue loss</li>
                        <li>• <strong>Regulatory fines:</strong> Up to 4% revenue</li>
                        <li>• <strong>Customer loss:</strong> 30-50% permanent</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Prevention Investment:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Standard security:</strong> 200,000 RSD/year</li>
                        <li>• <strong>Risk reduction:</strong> 85-95%</li>
                        <li>• <strong>Break-even:</strong> Preventing 1 incident/5 years</li>
                        <li>• <strong>Típical savings:</strong> 3-8 million RSD</li>
                        <li>• <strong>ROI:</strong> 400-800%</li>
                        <li>• <strong>Peace of mind:</strong> Priceless</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="w-6 h-6 text-primary" />
                <span>90-Day Cyber Security Action Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Your Path to Cyber Security</h3>
                <p className="mb-4">
                  Follow this step-by-step plan to implement comprehensive cyber security za your small business.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Days 1-30: Foundation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Security assessment audit</li>
                      <li>• ✅ Password manager deployment</li>
                      <li>• ✅ Enable 2FA on all accounts</li>
                      <li>• ✅ Install business antivirus</li>
                      <li>• ✅ Set up cloud backup</li>
                      <li>• ✅ Basic employee training</li>
                      <li>• ✅ Update all software</li>
                      <li>• ✅ Secure WiFi configuration</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Days 31-60: Enhancement</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Email security implementation</li>
                      <li>• ✅ Firewall configuration</li>
                      <li>• ✅ VPN setup za remote access</li>
                      <li>• ✅ Data classification policy</li>
                      <li>• ✅ Incident response plan</li>
                      <li>• ✅ First phishing simulation</li>
                      <li>• ✅ Backup testing procedure</li>
                      <li>• ✅ GDPR compliance review</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Days 61-90: Optimization</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Security monitoring setup</li>
                      <li>• ✅ Cyber insurance evaluation</li>
                      <li>• ✅ Vendor security assessments</li>
                      <li>• ✅ Penetration testing</li>
                      <li>• ✅ Advanced training program</li>
                      <li>• ✅ Business continuity testing</li>
                      <li>• ✅ Compliance documentation</li>
                      <li>• ✅ Security metrics dashboard</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ongoing Security Operations</h3>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Monthly Security Checklist:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>• 🔍 Review security logs i alerts</li>
                      <li>• 📧 Conduct phishing simulation test</li>
                      <li>• 🔄 Test backup i recovery procedures</li>
                      <li>• 📊 Update security awareness training</li>
                      <li>• 🛡️ Review i update security policies</li>
                      <li>• 🔐 Audit user access rights</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• 💻 Update all software i security tools</li>
                      <li>• 📱 Review mobile device security</li>
                      <li>• 🌐 Check for new vulnerabilities</li>
                      <li>• 📋 Review incident response procedures</li>
                      <li>• 💰 Evaluate cyber insurance coverage</li>
                      <li>• 📈 Analyze security metrics i trends</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Zaštitite Svoj Biznis Danas!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cyber napadi mogu devastirati mala preduzeća. Ne čekajte da se dogodi - implementirajte comprehensive cyber security strategy već danas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Security Konsultacije</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/cene">Pogledaj Security Pakete</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BlogArticle19;