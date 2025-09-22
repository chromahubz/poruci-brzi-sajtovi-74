import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Tag, Target, Eye, Palette, Users, TrendingUp, CheckCircle, AlertCircle, Lightbulb, DollarSign, Star } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle18 = () => {
  const quizQuestions = [
    {
      question: "Šta je najvažniji element uspešnog brandinga za mala preduzeća?",
      options: [
        "Skup logo dizajn",
        "Konsistentnost kroz sve kanale komunikacije",
        "Veliki marketing budžet",
        "Kopiranje konkurencije"
      ],
      correct: 1,
      explanation: "Konsistentnost je ključ uspešnog brandinga. Mala preduzeća mogu postići snažan brend kroz doslednu primenu identiteta kroz sve tačke kontakta sa klijentima."
    },
    {
      question: "Koliko košta profesionalno kreiranje osnovnog brand identiteta u Srbiji?",
      options: [
        "500-1,500 RSD",
        "5,000-15,000 RSD",
        "50,000-150,000 RSD",
        "500,000+ RSD"
      ],
      correct: 2,
      explanation: "Osnovni brand identitet (logo, vizuelni identitet, brand guide) u Srbiji košta između 50,000-150,000 RSD, što je investicija koja se vraća kroz povećano prepoznavanje brenda."
    },
    {
      question: "Koja je najčešća greška malih preduzeća u brendiranju?",
      options: [
        "Nekonzistentnost vizuelnog identiteta",
        "Fokus na proizvod umesto na korisničku vrednost",
        "Nedefinisana brand poruka",
        "Sve navedeno"
      ],
      correct: 3,
      explanation: "Mala preduzeća često prave sve ove greške. Najčešće su problemi sa konzistentnošću, fokusiranjem na tehnike specifikacije umesto koristi, i nejasnim brand pozicioniranjem."
    },
    {
      question: "Koliko vremena treba da se izgradi prepoznatljiv brand u lokalnom tržištu?",
      options: [
        "1-3 meseca",
        "6-12 meseci",
        "2-3 godine",
        "5+ godina"
      ],
      correct: 1,
      explanation: "U lokalnom tržištu, sa konzistentnim pristupom i pravilnom strategijom, prepoznatljivost brenda može se postići za 6-12 meseci."
    },
    {
      question: "Šta je ROI brand investicije za mala preduzeća?",
      options: [
        "50-100% povećanje prihoda",
        "10-30% povećanje prihoda",
        "200-400% povećanje vrednosti brenda",
        "Nema merljivog ROI-ja"
      ],
      correct: 2,
      explanation: "Istraživanja pokazuju da dobro brendirana mala preduzeća ostvaruju 200-400% povećanje vrednosti brenda i mogu naplaćivati 15-25% više za iste proizvode/usluge."
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
                <span>28 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Branding</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Branding za Mala Preduzeća - Kompletni Vodič kroz Brand Identitet u Srbiji 2025
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da izgradite snažan brend koji se izdvaja od konkurencije, privlači prave klijente i omogućava veće cene. Praktičan vodič sa konkretnim primerima i korak-po-korak instrukcijama za srpska preduzeća.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Zašto je Branding Ključan za Uspeh Malih Preduzeća?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                U svetu gde potrošači svakodnevno viđaju hiljadu brendova, uspešna mala preduzeća nisu ona koja prodaju najbolje proizvode, već ona koja najbolje komuniciraju svoju vrednost. Branding nije luksuz velikih korporacija - to je osnova opstanka i rasta u konkurentnom tržištu.
              </p>
              <p>
                Istraživanja pokazuju da konzistentno brendirana preduzeća ostvaruju 23% veći rast prihoda od onih bez jasne brand strategije. U Srbiji, gde se svakodnevno pokreću nova preduzeća, snažan brend može biti razlika između uspeha i neuspeha.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Ključni benefiti snažnog brandinga:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Veće cene:</strong> Brendirana preduzeća mogu naplaćivati 15-25% više</li>
                  <li>• <strong>Veća lojalnost:</strong> 77% potrošača kupuje od brendova koje poznaju</li>
                  <li>• <strong>Lakše zapošljavanje:</strong> Prepoznatljivi brendovi privlače bolje kandidate</li>
                  <li>• <strong>Povećana vrednost:</strong> Snažan brend povećava vrednost kompanije do 400%</li>
                  <li>• <strong>Manji marketing troškovi:</strong> Prepoznatljivi brendovi imaju niže troškove privlačenja klijenata</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Brand Strategy Basics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-primary" />
                <span>Osnove Brand Strategije - Izgradnja Temelja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">1. Definisanje Brand Pozicioniranja</h3>
                <p className="mb-4">
                  Pre nego što počnete sa vizuelnim identitetom, morate jasno definisati ko ste kao brend, šta nudite i zašto je to važno vašim klijentima.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Brand pozicioniranje uključuje:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Misiju:</strong> Zašto postojite</li>
                      <li>• <strong>Viziju:</strong> Kuda se krećete</li>
                      <li>• <strong>Vrednosti:</strong> U šta verujete</li>
                      <li>• <strong>Personalnost:</strong> Kako komunicirate</li>
                      <li>• <strong>Jedinstvenu ponudu:</strong> Šta vas izdvaja</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Primer - Lokalna pekara:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Misija:</strong> "Čuvamo tradiciju domaćeg hleba"</li>
                      <li>• <strong>Vizija:</strong> "Centar zajednice kroz hranu"</li>
                      <li>• <strong>Vrednosti:</strong> Kvalitet, tradicija, zajedništvo</li>
                      <li>• <strong>Personalnost:</strong> Topla, porodična, pouzdana</li>
                      <li>• <strong>USP:</strong> "Jedina pekara sa receptima od 1924"</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">2. Analiza Ciljne Grupe</h3>
                <p className="mb-4">
                  Uspešan brend govori direktno sa svojom ciljnom grupom. Morate dubinski razumeti svoje idealne klijente - njihove potrebe, straha, motivacije i način komunikacije.
                </p>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Kreiranje buyer persona - ključna pitanja:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Demografija:</strong> Godine, pol, prihodi, obrazovanje</li>
                      <li>• <strong>Psihografija:</strong> Interesovanja, stavovi, vrednosti</li>
                      <li>• <strong>Ponašanje:</strong> Gde kupuje, kako odlučuje</li>
                      <li>• <strong>Challenges:</strong> Glavni problemi koje rešavate</li>
                    </ul>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Goals:</strong> Šta žele da postignu</li>
                      <li>• <strong>Influence:</strong> Ko utiče na njihove odluke</li>
                      <li>• <strong>Komunikacija:</strong> Kako i gde se informišu</li>
                      <li>• <strong>Objections:</strong> Zašto ne bi kupili od vas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">3. Analiza Konkurencije</h3>
                <p className="mb-4">
                  Analizirajte direktne i indirektne konkurente da biste identifikovali mogućnosti za diferecijaciju i izbegnuli kopiranje postojećih pristupa.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Šta analizirati kod konkurenata:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Vizuelni identitet:</strong> Logo, boje, tipografija, stil fotografija</p>
                      <p><strong>Komunikacija:</strong> Ton of voice, ključne poruke, social media prisutnost</p>
                      <p><strong>Pozicioniranje:</strong> Kako se predstavljaju, koje vrednosti naglašavaju</p>
                      <p><strong>Cene:</strong> Način prezentovanja cena, paket ponude</p>
                      <p><strong>Kanali:</strong> Gde su prisutni, kako komuniciraju sa klijentima</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Visual Identity Design */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-6 h-6 text-primary" />
                <span>Kreiranje Vizuelnog Identiteta</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Logo Dizajn - Osnove i Principi</h3>
                <p className="mb-4">
                  Logo je često prvi kontakt klijenata sa vašim brendom. Dobar logo mora biti jednostavan, prepoznatljiv, skalabilan i relevantan za vašu industriju.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Tipovi logoa:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Wordmark:</strong> Samo tekst (Google, FedEx)</li>
                      <li>• <strong>Pictorial:</strong> Slika/simbol (Apple, Twitter)</li>
                      <li>• <strong>Abstract:</strong> Apstraktni oblik (Nike, Pepsi)</li>
                      <li>• <strong>Combination:</strong> Tekst + simbol (McDonald's)</li>
                      <li>• <strong>Emblem:</strong> Tekst u okviru (Starbucks)</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Dizajn principi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Jednostavnost:</strong> Lako prepoznavanje</li>
                      <li>• <strong>Skalabinost:</strong> Čitljiv u svim veličinama</li>
                      <li>• <strong>Relevantnost:</strong> Odgovarajući za industriju</li>
                      <li>• <strong>Memorabilnost:</strong> Lako pamćenje</li>
                      <li>• <strong>Vremenske:</strong> Neće zastrati brzo</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Česte greške:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Previše detalja</li>
                      <li>• Neodgovarajuće boje</li>
                      <li>• Kopiranje konkurenata</li>
                      <li>• Nekonzistentna primena</li>
                      <li>• Zanemarivanje skalabinosti</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Color Palette - Psihologija Boja u Brendingu</h3>
                <p className="mb-4">
                  Boje imaju snažan psihološki uticaj na percepciju brenda. Pravilno odabrane boje mogu povećati prepoznatljivost brenda za 80%.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Psihologija osnovnih boja:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Plava:</strong> Poverenje, stabilnost, profesionalnost</li>
                      <li>• <strong>Crvena:</strong> Energija, strast, hitnost</li>
                      <li>• <strong>Zelena:</strong> Priroda, rast, novac, zdravlje</li>
                      <li>• <strong>Žuta:</strong> Optimizam, kreativnost, pažnja</li>
                      <li>• <strong>Ljubičasta:</strong> Luksuz, kreativnost, mudrosti</li>
                      <li>• <strong>Narandžasta:</strong> Entuzijazam, dostupnost, topina</li>
                      <li>• <strong>Crna:</strong> Elegantnost, autoritet, sofisticiranost</li>
                      <li>• <strong>Bela:</strong> Čistoća, jednostavnost, mir</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Color palette struktura:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Primarna boja:</strong> Glavna brand boja (60%)</li>
                      <li>• <strong>Sekundarna boja:</strong> Komplementarna (30%)</li>
                      <li>• <strong>Accent boja:</strong> Za naglašavanje (10%)</li>
                      <li>• <strong>Neutralne boje:</strong> Siva, bela, crna</li>
                      <li>• <strong>Gradijenti:</strong> Moderne variations</li>
                    </ul>
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <p className="text-xs"><strong>Tip:</strong> Koristite max 3-4 boje u vašoj paleti za konzistentnost</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tipografija - Izbor Fontova</h3>
                <p className="mb-4">
                  Tipografija prenosi personalnost brenda i utiče na čitljivost. Odabir fontova mora biti usklađen sa brand positioning-om i ciljnom grupom.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Serif fontovi:</h4>
                      <p className="text-sm mb-2">Tradicionalni, pouzdani, etablirani</p>
                      <ul className="text-xs space-y-1">
                        <li>• Times New Roman</li>
                        <li>• Georgia</li>
                        <li>• Playfair Display</li>
                        <li>• Merriweather</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Sans-serif:</h4>
                      <p className="text-sm mb-2">Moderni, čisti, pristupačni</p>
                      <ul className="text-xs space-y-1">
                        <li>• Helvetica</li>
                        <li>• Open Sans</li>
                        <li>• Lato</li>
                        <li>• Roboto</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Script fontovi:</h4>
                      <p className="text-sm mb-2">Elegantni, ženstveni, kreativni</p>
                      <ul className="text-xs space-y-1">
                        <li>• Brush Script</li>
                        <li>• Dancing Script</li>
                        <li>• Amatic SC</li>
                        <li>• Great Vibes</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Display fontovi:</h4>
                      <p className="text-sm mb-2">Upadljivi, jedinstveni, za headlines</p>
                      <ul className="text-xs space-y-1">
                        <li>• Impact</li>
                        <li>• Bebas Neue</li>
                        <li>• Oswald</li>
                        <li>• Montserrat</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tipografska hijerarhija:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>H1 (Glavno naslov):</strong> 32-48px, bold, display font</li>
                      <li>• <strong>H2 (Sekcije):</strong> 24-32px, semi-bold</li>
                      <li>• <strong>H3 (Podnaslov):</strong> 18-24px, medium</li>
                      <li>• <strong>Body tekst:</strong> 14-16px, regular, dobra čitljivost</li>
                      <li>• <strong>Caption:</strong> 12-14px, za objašnjenja</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Brand Guidelines and Application */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Brand Guidelines i Praktična Primena</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Kreiranje Brand Style Guide</h3>
                <p className="mb-4">
                  Brand style guide je dokument koji definiše kako se vaš brand koristi u svim situacijama. Ovo osigurava konzistentnost bez obzira ko kreira materijale.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Sadržaj brand guide-a:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Brand story:</strong> Misija, vizija, vrednosti</li>
                      <li>• <strong>Logo usage:</strong> Gde i kako koristiti logo</li>
                      <li>• <strong>Color palette:</strong> Hex/RGB/CMYK kodovi</li>
                      <li>• <strong>Tipografija:</strong> Fontovi i hijerarhija</li>
                      <li>• <strong>Fotografski stil:</strong> Tip slika i obradt</li>
                      <li>• <strong>Tone of voice:</strong> Kako komunicirati</li>
                      <li>• <strong>Do's and Don'ts:</strong> Šta ne raditi</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Logo usage pravila:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Minimalna veličina za čitljivost</li>
                      <li>• Clear space oko loga</li>
                      <li>• Prihvatljive varijacije (mono, reversed)</li>
                      <li>• Pozadine na kojima funkcioniše</li>
                      <li>• Što NIKAD ne raditi sa logom</li>
                      <li>• File format za različite svrhe</li>
                      <li>• Co-branding pravila</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Brand Touchpoint-i - Gde Primeniti Identitet</h3>
                <p className="mb-4">
                  Vaš brend mora biti konzistentan na svim mestima gde se susreće sa klijentima. Svaki touchpoint je prilika da ojačate brand percepciju.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Digitalni touchpoint-i:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Web sajt</li>
                      <li>• Social media profili</li>
                      <li>• Email potpisi</li>
                      <li>• Online reklame</li>
                      <li>• Newsletter</li>
                      <li>• Mobilna aplikacija</li>
                      <li>• Google My Business</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Print materijali:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vizitne karte</li>
                      <li>• Letterhead</li>
                      <li>• Brošure i katalozi</li>
                      <li>• Packaging</li>
                      <li>• Baneri i signage</li>
                      <li>• Flajeri</li>
                      <li>• Merchandise</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Fizički prostor:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Izlogas</li>
                      <li>• Enterira prostora</li>
                      <li>• Uniformes zaposlenih</li>
                      <li>• Vozila kompanije</li>
                      <li>• Trade show booth</li>
                      <li>• Office dekor</li>
                      <li>• Product display</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ton Glasa i Brand Voice</h3>
                <p className="mb-4">
                  Kako komunicirate je jednako važno kao i kako izgledate. Brand voice mora biti konzistentan kroz sve kanale komunikacije.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Definisanje brand voice-a:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Personality traits:</strong> Koji tip ličnosti ste?</li>
                        <li>• <strong>Vocabulary:</strong> Koje reči koristite/izbegavate?</li>
                        <li>• <strong>Tone:</strong> Formalno vs neformalno?</li>
                        <li>• <strong>Humor:</strong> Da li koristite humor?</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Emotions:</strong> Koje emocije želite da izazovete?</li>
                        <li>• <strong>Technical level:</strong> Koliko stručni biti?</li>
                        <li>• <strong>Cultural fit:</strong> Lokalnom kulturi odgovaraju?</li>
                        <li>• <strong>Consistency:</strong> Isti ton kroz sve kanale</li>
                      </ul>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Primer - Lokalni restoran:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Brand voice:</strong> "Topla, porodična, gostoprimila, lokalna"</p>
                      <p><strong>Do:</strong> "Dođite kao gosti, odlazite kao porodica", "Naša baba's recepti"</p>
                      <p><strong>Don't:</strong> "Optimizovana gastro eksperija", "Cutting-edge kulinarija"</p>
                      <p><strong>Ton:</strong> Neformalan, prijatan, nostalgičan, autentičan</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Digital Branding */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Digitalni Branding i Social Media</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Brand na Social Media Platformama</h3>
                <p className="mb-4">
                  Social media je često primarni kanal komunikacije sa klijentima. Konzistentan brend na social media platformama gradi prepoznatljivost i poverenje.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Platform-specific brandings:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Instagram:</strong> Vizuelno storytelling, lifestyle</li>
                      <li>• <strong>Facebook:</strong> Community building, kompletne informacije</li>
                      <li>• <strong>LinkedIn:</strong> Profesionalno, B2B fokus</li>
                      <li>• <strong>TikTok:</strong> Casual, zabavan, autentičan</li>
                      <li>• <strong>YouTube:</strong> Edukativni, detaljni content</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Konzistentnost kroz platforme:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Isti username kad god moguće</li>
                      <li>• Konzistentni profile picture (logo)</li>
                      <li>• Unified bio/description</li>
                      <li>• Iste brand boje i fontovi</li>
                      <li>• Konzistentan ton komunikacije</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Kreiranje Visual Content Strategy</h3>
                <p className="mb-4">
                  Vizuelni sadržaj mora biti usklađen sa brand identitet-om. Instagram grid, Facebook cover foto, sve mora delovati kao deo istog brenda.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Content kategorije za visual branding:</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Product shots:</strong> Konzistentan stil fotografisanja</li>
                        <li>• <strong>Behind-the-scenes:</strong> Autentični uvid u biznis</li>
                        <li>• <strong>Team photos:</strong> Humanizovanje brenda</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Quote graphics:</strong> Brand boje i tipografija</li>
                        <li>• <strong>Educational content:</strong> Infografike u brand stilu</li>
                        <li>• <strong>User-generated content:</strong> Korisničke fotografije</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Lifestyle shots:</strong> Kako se koristi proizvod</li>
                        <li>• <strong>Event coverage:</strong> Branded photo templates</li>
                        <li>• <strong>Announcements:</strong> Novosti u brand stilu</li>
                      </ul>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Instagram template sistem:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Color scheme:</strong> 2-3 dominantne boje kroz sve postove</p>
                      <p><strong>Photo filter:</strong> Konzistentan filter ili color grading</p>
                      <p><strong>Text overlay:</strong> Isti font i pozicioniranje</p>
                      <p><strong>Logo placement:</strong> Konzistentno mesto za watermark</p>
                      <p><strong>Grid aesthetic:</strong> Kako izgleda ceo feed zajedno</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Web Sajt kao Brand Hub</h3>
                <p className="mb-4">
                  Vaš web sajt je digitalna centrala brenda. Svaki element - od boja do mikrointerakcija - mora odražavati brand personalnost.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Brand elementi na sajtu:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Logo u header-u, konzistentno pozicioniranje</li>
                      <li>• Brand boje u navigation, buttons, links</li>
                      <li>• Brand tipografija za headings i body text</li>
                      <li>• Fotografijski stil konzistentan sa social media</li>
                      <li>• Tone of voice u copywriting-u</li>
                      <li>• Branded icons i grafički elementi</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">UX koji podržava brend:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Navigation intuitivnost odgovarajuća target skupini</li>
                      <li>• Load speed koji ne narušava doživljaj</li>
                      <li>• Mobile responsiveness za sve uređaje</li>
                      <li>• Accessibility za inkluzivnost</li>
                      <li>• Clear call-to-action aligned sa brand goals</li>
                      <li>• Trust signals (testimonijali, certifikaci)</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Brand Implementation and Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Implementacija i Upravljanje Brendom</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Fazno Uvođenje Brand Identiteta</h3>
                <p className="mb-4">
                  Ne morate sve u isto vreme. Pametna implementacija brenda se radi u fazama, prioritetujući touchpoint-e koji imaju najveći uticaj na percepciju.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Faza 1 (Mesec 1-2):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Logo finalizacija</li>
                        <li>• Basic brand guideline</li>
                        <li>• Vizitne karte</li>
                        <li>• Social media profile update</li>
                        <li>• Email potpis</li>
                        <li>• Basic letterhead</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Faza 2 (Mesec 3-4):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Web sajt redesign</li>
                        <li>• Professional photography</li>
                        <li>• Brochures/katalog</li>
                        <li>• Packaging update</li>
                        <li>• Vehicle branding</li>
                        <li>• Uniforme</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Faza 3 (Mesec 5-6):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Office/store rebranding</li>
                        <li>• Signage</li>
                        <li>• Merchandise</li>
                        <li>• Advanced marketing materijali</li>
                        <li>• Trade show materials</li>
                        <li>• Brand manual kompletiranje</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Pro tip za budžet:</h4>
                    <p className="text-sm">
                      Prioritizujte touchpoint-e prema učestanosti kontakta sa klijentima. Web sajt i social media imaju veći uticaj od merchandise-a ili signage-a za većinu malih preduzeća.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tim Training i Brand Adoption</h3>
                <p className="mb-4">
                  Svaki član tima je brand ambasador. Potrebno je osigurati da svi razumeju i primenjuju brand guidelines u svakodnevnom radu.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Edukacija tima o brenda:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Brand story i vrednosti</li>
                      <li>• Target audience profile</li>
                      <li>• Key messaging i unique selling propositions</li>
                      <li>• Tone of voice za komuniciranje sa klijentima</li>
                      <li>• Visual guidelines za create content</li>
                      <li>• Social media do's and don'ts</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Brand implementacija prozesi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Template sistem za dokumenta</li>
                      <li>• Approval workflow za marketing materijale</li>
                      <li>• Brand asset central repository</li>
                      <li>• Regular brand audits</li>
                      <li>• Customer feedback monitoring</li>
                      <li>• Competitor brand tracking</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Measuring Brand Success</h3>
                <p className="mb-4">
                  Brand building je dugoročan proces. Važno je meriti progres kroz kvantitativne i kvalitativne metrike.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Brand awareness metrike:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Unaided recall:</strong> Spominanje bez pomoći</li>
                        <li>• <strong>Aided recognition:</strong> Prepoznavanje sa podsticajem</li>
                        <li>• <strong>Share of voice:</strong> Udeo u industrijskim razgovorima</li>
                        <li>• <strong>Social mentions:</strong> Broj pomena na društvenim mrežama</li>
                        <li>• <strong>Direct traffic:</strong> Direktne посетe sajtu</li>
                        <li>• <strong>Brand search volume:</strong> Pretraga brand name</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Brand perception metrike:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Net Promoter Score:</strong> Preporuke</li>
                        <li>• <strong>Customer satisfaction:</strong> Zadovoljstvo</li>
                        <li>• <strong>Brand sentiment:</strong> Pozitivan/negativan ton</li>
                        <li>• <strong>Purchase intent:</strong> Namera kupovine</li>
                        <li>• <strong>Price premium tolerance:</strong> Spremnost platiti više</li>
                        <li>• <strong>Customer lifetime value:</strong> Vrednost klijenta</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Quarterly brand review proces:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Analiza social media engagement i sentiment</li>
                      <li>• Customer feedback review (reviews, surveys)</li>
                      <li>• Competitor brand positioning changes</li>
                      <li>• Brand consistency audit kroz sve touchpoint-e</li>
                      <li>• ROI analiza brand-related aktivnosti</li>
                      <li>• Plan za sledeći kvartal improvements</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Costs and ROI */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-primary" />
                <span>Troškovi Brendiranja i ROI Analiza</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Budžet za Brand Development</h3>
                <p className="mb-4">
                  Investicija u brend varira zavisno od kompleksnosti, ali postoje jasni nivoi investicije za različite potrebe malih preduzeća u Srbiji.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Osnovni paket (50-150k RSD):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Logo dizajn (5-10 varijanti)</li>
                      <li>• Basic color palette</li>
                      <li>• Tipografija guidelines</li>
                      <li>• Vizitne karte dizajn</li>
                      <li>• Social media template (3-5)</li>
                      <li>• Basic brand guidelines (10-15 strana)</li>
                      <li>• Email potpis template</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Standard paket (150-400k RSD):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Kompletna brand strategija</li>
                      <li>• Logo sistem (primary + secondary)</li>
                      <li>• Extended color palette</li>
                      <li>• Tipografijska hijerarhija</li>
                      <li>• Photography style guide</li>
                      <li>• Print materijali (brošure, flajeri)</li>
                      <li>• Social media template sistem</li>
                      <li>• Web sajt osnovni design</li>
                      <li>• Comprehensive brand manual</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Premium paket (400k+ RSD):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Kompletan brand audit</li>
                      <li>• Brand architecture</li>
                      <li>• Logo family sistem</li>
                      <li>• Professional photography</li>
                      <li>• Package design</li>
                      <li>• Signage design</li>
                      <li>• Web sajt kompletna implementacija</li>
                      <li>• Marketing campaign templates</li>
                      <li>• Brand training za tim</li>
                      <li>• 6-mesečni brand mentoring</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ROI Brand Investicije</h3>
                <p className="mb-4">
                  Brending je dugoročna investicija čiji se povrat može meriti kroz različite metrike. Dobro brendirana preduzeća ostvaruju značajne konkurentske prednosti.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Kvantitativni ROI pokazatelji:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Price premium:</strong> 15-25% veće cene</li>
                        <li>• <strong>Customer acquisition cost:</strong> 50% niži troškovi</li>
                        <li>• <strong>Customer lifetime value:</strong> 300% povećanje</li>
                        <li>• <strong>Revenue growth:</strong> 23% brži rast prihoda</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Employee retention:</strong> 40% manje odlaska</li>
                        <li>• <strong>Marketing efficiency:</strong> 60% bolja konverzija</li>
                        <li>• <strong>Referral rate:</strong> 70% više preporuka</li>
                        <li>• <strong>Company valuation:</strong> 3-4x vrednost brenda</li>
                      </ul>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Case study - Lokalna kafeterija "Domaće":</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Pre rebrandinga:</strong> Neprepoznatljiv identity, cene kao konkurencija, 20 stalnih gostiju</p>
                      <p><strong>Brand investment:</strong> 120,000 RSD (logo, interior design, menu design, social media)</p>
                      <p><strong>Rezultati (6 meseci):</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Povećanje cena kafe za 30 RSD (sa 120 na 150)</li>
                        <li>• 150% porast Instagram followera</li>
                        <li>• 80 stalnih gostiju (4x povećanje)</li>
                        <li>• Prepoznatljivost u kraju 85%</li>
                        <li>• ROI: 350% u prvoj godini</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Kako Odabrati Brand Partner-a</h3>
                <p className="mb-4">
                  Ne morate sve raditi sami. Odabir pravog brand partner-a može značajno uticati na uspeh vaše brand investicije.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Freelance designer vs agencija:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Freelancer:</strong> 15-50k RSD, brža komunikacija</li>
                      <li>• <strong>Boutique agencija:</strong> 50-200k RSD, pun servis</li>
                      <li>• <strong>Velika agencija:</strong> 200k+ RSD, strategy fokus</li>
                      <li>• <strong>DIY + konzultacije:</strong> 10-30k RSD guidance</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Pitanja za brend partner-a:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Portfolio sličnih preduzeća?</li>
                      <li>• Proces brand development-a?</li>
                      <li>• Razumevanje vaše industrije?</li>
                      <li>• Post-launch support?</li>
                      <li>• Timeline i milestone-ovi?</li>
                      <li>• Dodatni troškovi?</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                <span>Česte Greške u Brendiranju Malih Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Top 10 Grešaka i Kako ih Izbegnuti</h3>
                <p className="mb-4">
                  Učenje na greškama drugih je deo pametne brand strategije. Ove greške koštaju vreme i novac, ali su lako preventabilne.
                </p>

                <div className="space-y-4">
                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-2 text-red-700">1. Kopiranje konkurencije</h4>
                    <p className="text-sm mb-2"><strong>Greška:</strong> "Oni su uspešni, kopiraću njih"</p>
                    <p className="text-sm text-green-700"><strong>Rešenje:</strong> Analiziraj konkurenciju da bi se razlikovao, ne kopirao. Nađi unique positioning.</p>
                  </Card>

                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-2 text-red-700">2. Focus na proizvod umesto na benefits</h4>
                    <p className="text-sm mb-2"><strong>Greška:</strong> "Naša pizza ima 15 sastojaka"</p>
                    <p className="text-sm text-green-700"><strong>Rešenje:</strong> "Pizza koja okuplja porodice" - fokus na emocionalnu korist.</p>
                  </Card>

                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-2 text-red-700">3. Nekonzistentnost kroz kanale</h4>
                    <p className="text-sm mb-2"><strong>Greška:</strong> Različit logo na sajtu, Facebook-u i vizitnim kartama</p>
                    <p className="text-sm text-green-700"><strong>Rešenje:</strong> Brand guidelines i centralizovani asset management.</p>
                  </Card>

                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-2 text-red-700">4. Pokušaj svima da udovoljite</h4>
                    <p className="text-sm mb-2"><strong>Greška:</strong> "Našu uslugu može svko da koristi"</p>
                    <p className="text-sm text-green-700"><strong>Rešenje:</strong> Definiši jasnu target grupu i govori njima direktno.</p>
                  </Card>

                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-2 text-red-700">5. Zanemarivanje digitalnog prisustva</h4>
                    <p className="text-sm mb-2"><strong>Greška:</strong> "Mi smo lokalni biznis, ne treba nam sajt"</p>
                    <p className="text-sm text-green-700"><strong>Rešenje:</strong> 84% potrošača proverava online pre kupovine. Digitalno prisustvo je obavezno.</p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Brand Crisis Management</h3>
                <p className="mb-4">
                  Ni najbolji brendovi nisu imuni na probleme. Važno je imati plan za upravljanje brand crisis-ima.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Prepare for crisis:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Monitoring online mentions</li>
                      <li>• Crisis communication plan</li>
                      <li>• Designated spokesperson</li>
                      <li>• Legal considerations</li>
                      <li>• Customer service escalation</li>
                      <li>• Social media response guidelines</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Crisis response steps:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Acknowledge brzo i transparentno</li>
                      <li>• Take responsibility kad je potrebno</li>
                      <li>• Propose solution/corrective action</li>
                      <li>• Monitor sentiment kontinuirano</li>
                      <li>• Learn from incident</li>
                      <li>• Rebuild brand trust postupno</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Quiz */}
          <Quiz questions={quizQuestions} />

          {/* Future Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span>Budućnost Brendiranja - Trendovi 2025+</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Emerging Brand Trends</h3>
                <p className="mb-4">
                  Branding se konstantno evolutuje. Ovi trendovi će oblikovati kako mala preduzeća grade brendove u narednim godinama.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Tehnološki trendovi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>AI-powered personalization:</strong> Prilagođen brand experience</li>
                      <li>• <strong>Voice brand identity:</strong> Kako brend "zvuči"</li>
                      <li>• <strong>AR/VR brand experiences:</strong> Immersive brand touchpoints</li>
                      <li>• <strong>Blockchain authenticity:</strong> Verify brand genuineness</li>
                      <li>• <strong>IoT brand integration:</strong> Brand u svim pametnim uređajima</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Društveni trendovi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Purpose-driven branding:</strong> Društvena odgovornost</li>
                      <li>• <strong>Transparency expectation:</strong> Otvoreni processi</li>
                      <li>• <strong>Community-centric brands:</strong> Lokalna zajednica fokus</li>
                      <li>• <strong>Sustainable branding:</strong> Eco-friendly identity</li>
                      <li>• <strong>Authentic storytelling:</strong> Realnost pre perfection</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Preparation za Future Branding</h3>
                <p className="mb-4">
                  Gradite brend koji može da se adaptira na buduće promene, ali zadržava core identity.
                </p>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Future-proof brand strategy:</h4>
                  <ul className="space-y-2">
                    <li>• <strong>Fleksibilni visual sistem:</strong> Logo i identitet koji se mogu adaptirati</li>
                    <li>• <strong>Strong brand foundation:</strong> Jasne vrednosti koje se neće promeniti</li>
                    <li>• <strong>Digital-first thinking:</strong> Brend koji funkcioniše u digitalnom svetu</li>
                    <li>• <strong>Customer-centric approach:</strong> Stavljanje klijenta u centar svake odluke</li>
                    <li>• <strong>Continuous evolution:</strong> Monitoring i adapting brand strategy</li>
                    <li>• <strong>Data-driven decisions:</strong> Korišćenje analytics za brand optimization</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Conclusion and Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span>Vaš Put ka Snažnom Brendu - Sledeći Koraci</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Action Plan za 30 Dana</h3>
                <p className="mb-4">
                  Brending nije magija - to je sistematičan proces. Sledite ovaj plan za prvih 30 dana brand development-a.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Dani 1-10: Foundation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Brand audit postojećeg stanja</li>
                      <li>• ✅ Definisanje misije, vizije, vrednosti</li>
                      <li>• ✅ Analiza ciljne grupe</li>
                      <li>• ✅ Competitive analysis</li>
                      <li>• ✅ Brand positioning statement</li>
                      <li>• ✅ Budžet planning</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Dani 11-20: Creation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Logo concepts i iteration</li>
                      <li>• ✅ Color palette development</li>
                      <li>• ✅ Typography selection</li>
                      <li>• ✅ Brand voice definition</li>
                      <li>• ✅ Key messaging framework</li>
                      <li>• ✅ Visual style guide początak</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Dani 21-30: Implementation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Basic brand guidelines</li>
                      <li>• ✅ Vizitne karte design</li>
                      <li>• ✅ Social media profile update</li>
                      <li>• ✅ Email potpis templates</li>
                      <li>• ✅ Website planning/update</li>
                      <li>• ✅ Tim training i launch plan</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključni Takeaway-ovi</h3>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li>• <strong>Konzistentnost je kralj:</strong> Bolje je imati jednostavan brend konsistentno primenjen nego složen brend koji se koristi sporadično</li>
                    <li>• <strong>Start with strategy, ne sa design-om:</strong> Visual identity bez strategije je samo decoration</li>
                    <li>• <strong>Target audience first:</strong> Sve brand odluke filtriraj kroz potrebe i preference vaših idealnih klijenata</li>
                    <li>• <strong>ROI je merljiv:</strong> Brand investicije se vraćaju kroz veće cene, veću lojalnost i niže troškove marketinga</li>
                    <li>• <strong>Evolution, ne revolution:</strong> Brendovi se grade time, ne preko noći</li>
                    <li>• <strong>Digital integration:</strong> Vaš brend mora funkcionisati u digitalnom svetu da bi bio relevantan danas</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Resursi za Dalje Učenje</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Knjige o brendiranju:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• "Building a StoryBrand" - Donald Miller</li>
                      <li>• "The Brand Gap" - Marty Neumeier</li>
                      <li>• "Designing Brand Identity" - Alina Wheeler</li>
                      <li>• "Purple Cow" - Seth Godin</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Online tools:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Canva - Za basic design</li>
                      <li>• Adobe Creative Suite - Professional design</li>
                      <li>• Google Analytics - Brand performance tracking</li>
                      <li>• Hootsuite - Social media brand management</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Spremni da Izgradite Snažan Brend?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Profesionalni brand identitet je investicija koja se vraća. Kontaktirajte nas za konsultacije o vašoj brand strategiji i budžetu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Počni Brand Projekat</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">Pogledaj Portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BlogArticle18;