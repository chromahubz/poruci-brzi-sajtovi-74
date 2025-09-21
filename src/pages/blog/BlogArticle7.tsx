import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, Share2, Users, Camera, BarChart3, Target, MessageCircle, TrendingUp, Calendar } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle7 = () => {
  const quizQuestions = [
    {
      question: "Koliko često treba da objavljujete sadržaj na Instagram-u za optimalne rezultate?",
      options: [
        "Jednom nedeljno",
        "Jednom dnevno",
        "3-5 puta nedeljno",
        "Nekoliko puta dnevno"
      ],
      correctAnswer: 2,
      explanation: "Istraživanja pokazuju da je 3-5 objava nedeljno optimalno za Instagram. Ovo omogućava redovnu vidljivost bez zatrpavanja pratilaca sadržajem."
    },
    {
      question: "Koji tip sadržaja ima najviše engagement na Facebook-u za male biznise?",
      options: [
        "Samo tekst objave",
        "Video sadržaj i slike sa pričom",
        "Linkovi ka vašem sajtu",
        "Isključivo promocijski sadržaj"
      ],
      correctAnswer: 1,
      explanation: "Video sadržaj i vizuelno privlačne slike sa pričom iza brenda ostvaruju najveći engagement. Facebook algoritam favorizuje sadržaj koji podstiče interakciju."
    },
    {
      question: "Koje je najbolje vreme za objavljivanje na Instagram-u u Srbiji?",
      options: [
        "Ujutru između 6-8h",
        "Tokom radnog vremena 9-17h",
        "Uveče između 18-21h",
        "Kasno uveče posle 22h"
      ],
      correctAnswer: 2,
      explanation: "Uveče između 18-21h je najbolje vreme jer ljudi završavaju sa posotom i aktivno koriste društvene mreže. Testiranje je ključno za vaš sadržaj."
    },
    {
      question: "Šta je najvažnije za uspešan biznis profil na Instagram-u?",
      options: [
        "Veliki broj pratilaca",
        "Profesionalne fotografije i konzistentan brending",
        "Česte promocije i sniženja",
        "Praćenje trending hashtag-ova"
      ],
      correctAnswer: 1,
      explanation: "Profesionalne fotografije i konzistentan brending stvaraju poverenje i prepoznatljivost brenda. Kvalitet je važniji od kvantiteta pratilaca."
    },
    {
      question: "Koliki je optimalan budžet za Facebook reklame za mali biznis mesečno?",
      options: [
        "50-100 dinara",
        "500-1000 dinara",
        "3000-10000 dinara",
        "Preko 20000 dinara"
      ],
      correctAnswer: 2,
      explanation: "Za male biznise, budžet od 3000-10000 dinara mesečno omogućava značajne rezultate. Važno je pocetti sa manjim budžetom i povećavati na osnovu rezultata."
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
                <span>15 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Social Media Marketing</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Social Media za Biznis: Instagram i Facebook za Početnike
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kompletni vodič za pokretanje i upravljanje biznis profilima na društvenim mrežama.
              Naučite kako da izgradite prisustvo, privučete klijente i povećate prodaju kroz Instagram i Facebook.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Share2 className="w-6 h-6 text-primary" />
                <span>Zašto su Društvene Mreže Ključne za Vaš Biznis?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                U 2024. godini, preko 4.8 milijardi ljudi koristi društvene mreže, što predstavlja više od polovine svetske populacije.
                Za biznise u Srbiji, Instagram i Facebook predstavljaju najjeftinji i najdirektaniji način da dosegnu svoje klijente.
              </p>
              <p>
                Mnogi vlasnici malih biznisa misle da im društvene mreže nisu potrebne ili da je to "previše komplikovano".
                Međutim, istraživanja pokazuju da 73% potrošača donosi odluke o kupovini na osnovu onoga što vidi na društvenim mrežama.
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Ključne statistike za Srbiju:</h4>
                <ul className="space-y-2">
                  <li>• Preko 3.5 miliona ljudi koristi Facebook u Srbiji</li>
                  <li>• Instagram ima preko 2.2 miliona aktivnih korisnika</li>
                  <li>• 67% korisnika koristi mobilne uređaje za pristup</li>
                  <li>• Prosečno vreme provedeno: 2.5 sata dnevno</li>
                  <li>• 45% korisnika prati najmanje jedan lokalni biznis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Instagram Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-6 h-6 text-primary" />
                <span>Instagram za Biznis: Korak po Korak</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">1. Kreiranje Biznis Profila</h3>
                <p className="mb-4">
                  Prvi korak je pretvaranje ličnog profila u biznis profil ili kreiranje novog. Biznis profil vam omogućava pristup analitici,
                  mogućnost reklamiranja i dodatne funkcionalnosti kao što su dugmad za kontakt.
                </p>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Koraci za kreiranje biznis profila:</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Idite u Settings → Account → Switch to Professional Account</li>
                    <li>Izaberite "Business" umesto "Creator"</li>
                    <li>Odaberite kategoriju vašeg biznisa</li>
                    <li>Dodajte kontakt informacije (telefon, email, adresa)</li>
                    <li>Povežite sa Facebook stranicom (opciono)</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">2. Optimizacija Profila</h3>
                <p className="mb-4">
                  Vaš profil je prva stvar koju potencijalni klijenti vide. Neoptimizovan profil može da košta klijente pre nego što su uopšte videli vaš sadržaj.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Profilna slika:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Logo vašeg brenda ili lica</li>
                      <li>• Minimalno 110x110 piksela</li>
                      <li>• Jasno vidljiva i u malom formatu</li>
                      <li>• Konzistentna sa ostalim platformama</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Bio sekcija:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Maksimalno 150 karaktera</li>
                      <li>• Jasno opišite šta radite</li>
                      <li>• Dodajte ključne reči</li>
                      <li>• Uključite poziv na akciju</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Primer dobrog bio-a:</h4>
                  <p className="italic">
                    "🍕 Najbolja pica u Beogradu | Dostava 30min | Pozovite 011/123-456 📞
                    Porudžbine ⬇️"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">3. Strategija Sadržaja</h3>
                <p className="mb-4">
                  Sadržaj je srce vašeg Instagram profila. Bez dobrog sadržaja, čak i najbolja strategija neće dati rezultate.
                  Ključ je u tome da stvorite balans između promocije i vrednosti za pratioce.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">30% Promocijski</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vaši proizvodi/usluge</li>
                      <li>• Specijalne ponude</li>
                      <li>• Novosti o kompaniji</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">40% Edukativni</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Saveti iz vaše oblasti</li>
                      <li>• Kako da se koristi vaš proizvod</li>
                      <li>• Industrijsko znanje</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">30% Iza Scene</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Tim i kultura kompanije</li>
                      <li>• Proces rada</li>
                      <li>• Lične priče</li>
                    </ul>
                  </Card>
                </div>

                <h4 className="font-semibold mb-3">Tipovi sadržaja koji najbolje funkcionišu:</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Fotografije proizvoda</h5>
                    <p className="text-sm text-muted-foreground">
                      Visokokvalitetne slike sa prirodnim osvetljenjem. Pokažite proizvod u upotrebi, različite uglove, detalje.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Stories sa pitanjima</h5>
                    <p className="text-sm text-muted-foreground">
                      Koristite interactive stickers za povećanje engagement-a. Pitajte pratioce za mišljenja, glasajte.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Video sadržaj</h5>
                    <p className="text-sm text-muted-foreground">
                      Kratki tutoriali, prezentacije proizvoda, snimci iza kulisa. Video ima 2.3x više engagement-a od fotografija.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">User-generated content</h5>
                    <p className="text-sm text-muted-foreground">
                      Podelite fotografije zadovoljnih klijenata, testimoniale, recenzije. Ovo gradi poverenje i autentičnost.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">4. Hashtag Strategija</h3>
                <p className="mb-4">
                  Hashtag-ovi su način da vaš sadržaj pronađu ljudi koji vas još ne prate. Dobra hashtag strategija može dramatično povećati vaš reach.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Formula za hashtag-ove:</h4>
                  <ul className="space-y-1">
                    <li>• 5-7 popularnih hashtag-ova (100k+ objava)</li>
                    <li>• 10-15 srednje popularnih (10k-100k objava)</li>
                    <li>• 5-8 niche hashtag-ova (manje od 10k objava)</li>
                    <li>• 2-3 branded hashtag-a specifična za vaš biznis</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lokalni hashtag-ovi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• #beograd #novisad #nis</li>
                      <li>• #srbija #belgrade #serbia</li>
                      <li>• #lokalnibiznissrbija</li>
                      <li>• #madeinserbia</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Industrijski hashtag-ovi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• #restorannovabeograd</li>
                      <li>• #frizerkacentar</li>
                      <li>• #it_srbija</li>
                      <li>• #handmadesrbija</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Facebook Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Facebook za Biznis: Zajednica i Prodaja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">1. Facebook Business Page</h3>
                <p className="mb-4">
                  Facebook stranica je drugačija od Instagram profila. Ovde se fokusirate na izgradnju zajednice,
                  deljenje detaljnijih informacija i direktnu komunikaciju sa klijentima.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Ključni elementi Facebook stranice:</h4>
                    <ul className="space-y-1">
                      <li>• <strong>Cover foto:</strong> 820x312 piksela, predstavlja vaš brand</li>
                      <li>• <strong>About sekcija:</strong> Detaljne informacije o vašem biznisu</li>
                      <li>• <strong>Call-to-Action dugme:</strong> "Pozovi", "Poručи", "Saznaj više"</li>
                      <li>• <strong>Kontakt informacije:</strong> Adresa, telefon, radno vreme</li>
                      <li>• <strong>Reviews/ocene:</strong> Omogućite klijentima da ostavljaju recenzije</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">2. Facebook Sadržaj Strategija</h3>
                <p className="mb-4">
                  Facebook algoritam favorizuje sadržaj koji generiše smislene konverzacije.
                  Za razliku od Instagram-a gde je fokus na vizuelnom, Facebook je mesto za priče i diskusije.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Šta radi na Facebook-u:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pitanja za pratioce</li>
                      <li>• Iza scene priče</li>
                      <li>• Video sadržaj (pogotovo live)</li>
                      <li>• Testimoniali klijenata</li>
                      <li>• Lokalne vesti i događaji</li>
                      <li>• Edukativni sadržaj</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-red-600">Šta izbegavati:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Previše promocijski sadržaj</li>
                      <li>• Samo linkovi ka sajtu</li>
                      <li>• Kratke objave bez konteksta</li>
                      <li>• Kopiranje sa drugih stranica</li>
                      <li>• Previše hashtag-ova</li>
                      <li>• Neautentičan sadržaj</li>
                    </ul>
                  </Card>
                </div>

                <h4 className="font-semibold mb-3">Primer efikasne Facebook objave:</h4>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="italic mb-2">
                    "Jutros smo dobili najlepšu poruku od naše klijentkinје Ane: 'Hvala vam što ste mi pomogli da ostvarim svoj san!' 💕
                  </p>
                  <p className="italic mb-2">
                    Ana je došla sa idejom za online butik, a mi smo za manje od mesec dana napravili njen sajt.
                    Danas, posle 6 meseci, prodaje širom Srbije! 🚀
                  </p>
                  <p className="italic mb-2">
                    Koji je vaš san biznis? Recite nam u komentarima! 👇
                  </p>
                  <p className="text-sm text-muted-foreground">
                    [fotografija zadovoljne klijentinje sa njenim proizvodima]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">3. Facebook Groups Marketing</h3>
                <p className="mb-4">
                  Facebook grupe su jedan od najmoćnijih alata za lokalne biznise. Umesto da samo imate stranicu,
                  možete kreirati ili učestvovati u grupama gde se vaša ciljna grupa već okuplja.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Kreiranje svoje grupe:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Fokus na vrednost, ne prodaju</li>
                      <li>• Jasna pravila ponašanja</li>
                      <li>• Redovno angažovanje admina</li>
                      <li>• Ekskluzivni sadržaj za članove</li>
                      <li>• Q&A sesije</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Učešće u postojećim grupama:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pomagate, ne promovisheте</li>
                      <li>• Odgovarate na pitanja</li>
                      <li>• Delite korisne savete</li>
                      <li>• Gradite reputaciju</li>
                      <li>• Prirodno spominjete usluge</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Advertising Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Plaćeno Reklamiranje: Facebook i Instagram Ads</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Zašto Plaćene Reklame?</h3>
                <p className="mb-4">
                  Organski reach na Facebook-u i Instagram-u je drastično opao. Prosečna stranica dosegne samo 2-6% svojih pratilaca.
                  Plaćene reklame su jedini način da garantovano dosegtene željene klijente.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Prednosti Facebook/Instagram oglasa:</h4>
                  <ul className="space-y-1">
                    <li>• Precizno targetiranje (godine, lokacija, interesovanja, ponašanje)</li>
                    <li>• Mali početni budžet (moguće poceti sa 300 dinara dnevno)</li>
                    <li>• Detaljne analitike i merenje ROI</li>
                    <li>• Različiti formati oglasa za različite ciljeve</li>
                    <li>• A/B testiranje za optimizaciju</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tipovi Kampanja za Početnike</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">1. Brand Awareness Kampanje</h4>
                    <p className="text-sm mb-2">Cilj: Povećanje prepoznatljivosti brenda u lokalnoj zajednici</p>
                    <div className="text-sm">
                      <strong>Budžet:</strong> 3,000-5,000 dinara mesečno<br/>
                      <strong>Targetiranje:</strong> Lokacija + interesovanja<br/>
                      <strong>Sadržaj:</strong> Video ili karousel sa predstavljanjem biznisa
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">2. Engagement Kampanje</h4>
                    <p className="text-sm mb-2">Cilj: Povećanje interakcije sa postojećim sadržajem</p>
                    <div className="text-sm">
                      <strong>Budžet:</strong> 2,000-4,000 dinara mesečno<br/>
                      <strong>Targetiranje:</strong> Slična publika vašim pratiocima<br/>
                      <strong>Sadržaj:</strong> Najbolje organske objave sa puno interakcije
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">3. Konverzije Kampanje</h4>
                    <p className="text-sm mb-2">Cilj: Dovođenje klijenata na sajt ili fizičku lokaciju</p>
                    <div className="text-sm">
                      <strong>Budžet:</strong> 5,000-15,000 dinara mesečno<br/>
                      <strong>Targetiranje:</strong> Interesovanja + ponašanje + lookalike<br/>
                      <strong>Sadržaj:</strong> Jasna ponuda sa call-to-action dugmetom
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Kreiranje Efikasnog Oglasa</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Vizuelni deo:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Visoki kvalitet:</strong> Minimalno 1080x1080 piksela</li>
                      <li>• <strong>Jasna poruka:</strong> Mora biti razumljiva bez čitanja teksta</li>
                      <li>• <strong>Branded:</strong> Logo ili prepoznatljivi elementi</li>
                      <li>• <strong>Emotivna povezanost:</strong> Pozitivne emocije ili problem koji rešavate</li>
                      <li>• <strong>Mobile-first:</strong> 65% korisnika gleda na telefonu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Tekstualni deo:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Hook u prvoj liniji:</strong> Prva rečenica mora privući pažnju</li>
                      <li>• <strong>Jasna korist:</strong> Šta klijent dobija?</li>
                      <li>• <strong>Social proof:</strong> Brojevi, testimoniali</li>
                      <li>• <strong>Urgentnost:</strong> "Ograničena ponuda", "Samo ovaj mesec"</li>
                      <li>• <strong>Jasan CTA:</strong> "Pozovi sada", "Poruči danas"</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Primer efikasnog oglasa za restoran:</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Naslov:</strong> "Najbolja pica u vašoj okolini - dostava za 30 minuta!"</p>
                    <p><strong>Tekst:</strong> "Gladni ste, a nema vremena za kuvanje? 🍕 Naša pica je spremna za 15 minuta, a kod vas za 30!
                    Preko 1000 zadovoljnih klijenata ove godine. Besplatna dostava za porudžbine preko 1500 dinara. Poručite sada!"</p>
                    <p><strong>CTA dugme:</strong> "Poruči sada"</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Analytics and Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Analitika i Optimizacija</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Metrike za Praćenje</h3>
                <p className="mb-4">
                  Bez analize rezultata, radite napamet. Ove metrike će vam reći da li vaša strategija funkcioniše ili treba promene.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Instagram metrike:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Reach:</strong> Koliko jedinstvenih ljudi je videlo sadržaj</li>
                      <li>• <strong>Impressions:</strong> Ukupan broj prikaza</li>
                      <li>• <strong>Engagement rate:</strong> (likes+comments+shares)/reach x 100</li>
                      <li>• <strong>Profile visits:</strong> Koliko je ljudi posetilo profil</li>
                      <li>• <strong>Website clicks:</strong> Koliko je ljudi kliknulo na link</li>
                      <li>• <strong>Story completion rate:</strong> Koliko ljudi gleda celu story</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Facebook metrike:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Page likes growth:</strong> Rast broja pratilaca</li>
                      <li>• <strong>Post engagement:</strong> Interakcija po objavi</li>
                      <li>• <strong>Video views:</strong> Procenat odgledanosti video sadržaja</li>
                      <li>• <strong>Click-through rate (CTR):</strong> Procenat klikova na linkove</li>
                      <li>• <strong>Conversion rate:</strong> Procenat akcija (pozivi, poruke)</li>
                      <li>• <strong>ROAS:</strong> Return on ad spend za plaćene kampanje</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Optimalni rezultati za male biznise:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Instagram engagement rate:</strong> 3-6% je odličan rezultat</li>
                    <li>• <strong>Facebook CTR:</strong> 1-2% za organske objave, 2-4% za oglase</li>
                    <li>• <strong>Story completion rate:</strong> 70%+ znači da sadržaj zaista zanima ljude</li>
                    <li>• <strong>ROAS:</strong> 3:1 minimum (za svaki dinar uložen, dobijate 3 dinara nazad)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">A/B Testiranje</h3>
                <p className="mb-4">
                  A/B testiranje je jedini način da naučite šta tačno vaši klijenti žele.
                  Testirajte sve - od vremena objavljivanja do boja CTA dugmića.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Testiranje vremena objavljivanja</h5>
                    <p className="text-sm text-muted-foreground">
                      Objavljujte isti tip sadržaja u različito vreme tokom nedelje.
                      Merite reach i engagement da biste našli optimalno vreme.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Testiranje tipova sadržaja</h5>
                    <p className="text-sm text-muted-foreground">
                      Video vs fotografije, karousel vs single image, različite caption stilove.
                      Šta generiše više engagement-a u vašoj niche?
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Testiranje hashtag-ova</h5>
                    <p className="text-sm text-muted-foreground">
                      Koristite različite kombinacije hashtag-ova i merite reach.
                      Možda ćete otkriti da manje hashtag-ova daje bolje rezultate.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Testiranje ad creative-a</h5>
                    <p className="text-sm text-muted-foreground">
                      Za oglase, testirajte različite slike, naslove, CTA dugmiće.
                      Facebook vam omogućava da testirate do 6 varijanti istovremeno.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Content Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>Kalendar Sadržaja i Automatizacija</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Kreiranje Kalendara Sadržaja</h3>
                <p className="mb-4">
                  Kalendar sadržaja je plan koji definiše šta, kada i gde ćete objavljivati.
                  Bez plana, brzo ćete ostati bez ideja i početi da objavljivate nasumice.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Primer sedmične raspodele:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Ponedeljak:</strong> Motivacijski sadržaj (#MondayMotivation)</p>
                      <p><strong>Utorak:</strong> Tip of the day (edukativni sadržaj)</p>
                      <p><strong>Sreda:</strong> Iza scene sadržaj</p>
                      <p><strong>Četvrtak:</strong> Predstavljanje proizvoda/usluge</p>
                    </div>
                    <div>
                      <p><strong>Petak:</strong> User-generated content</p>
                      <p><strong>Subota:</strong> Lifestyle sadržaj</p>
                      <p><strong>Nedelja:</strong> Inspirativne priče/testimoniali</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3">Alati za planiranje:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h5 className="font-semibold mb-2">Later</h5>
                    <p className="text-sm mb-2">Besplatna verzija za osnovne potrebe</p>
                    <ul className="text-xs space-y-1">
                      <li>• 30 objava mesečno</li>
                      <li>• Instagram + Facebook</li>
                      <li>• Osnovne analitike</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h5 className="font-semibold mb-2">Meta Creator Studio</h5>
                    <p className="text-sm mb-2">Besplatno - Facebook i Instagram</p>
                    <ul className="text-xs space-y-1">
                      <li>• Neograničene objave</li>
                      <li>• Detaljne analitike</li>
                      <li>• Stories planiranje</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h5 className="font-semibold mb-2">Hootsuite</h5>
                    <p className="text-sm mb-2">Plaćena opcija za profesionalce</p>
                    <ul className="text-xs space-y-1">
                      <li>• Sve platforme</li>
                      <li>• Tim kolaboracija</li>
                      <li>• Napredne analitike</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Automatizacija i Chatbot-ovi</h3>
                <p className="mb-4">
                  Automatizacija vam omogućava da odgovorite na česta pitanja 24/7 i da ne propustite nijednu priliku za prodaju.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Instagram DM Automatizacija:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Autoresponder:</strong> Trenutni odgovor na poruke</li>
                      <li>• <strong>FAQ bot:</strong> Odgovori na česta pitanja</li>
                      <li>• <strong>Booking sistem:</strong> Automatsko zakazivanje termina</li>
                      <li>• <strong>Menu bot:</strong> Katalog proizvoda u porukama</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Facebook Messenger Bot:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Velcome message:</strong> Pozdrav za nove posetioce</li>
                      <li>• <strong>Persistent menu:</strong> Uvek dostupni meni opcija</li>
                      <li>• <strong>Quick replies:</strong> Brzi odgovori za česta pitanja</li>
                      <li>• <strong>Broadcast lista:</strong> Slanje promocija svim pretplatnicima</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Besplatni alati za chatbot-ove:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>ManyChat:</strong> Do 1000 pretplatnika besplatno</li>
                    <li>• <strong>Chatfuel:</strong> Osnovne funkcionalnosti bez ograničenja</li>
                    <li>• <strong>Facebook Autoresponder:</strong> Ugrađen u Facebook stranice</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                <span>Česte Greške i Kako ih Izbegati</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Top 10 Grešaka Koje Prave Mali Biznisi</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">1. Samo promocijski sadržaj</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Greška:</strong> Svaka objava je o prodaji.
                      <strong>Rešenje:</strong> 70% sadržaja treba da bude edukativno ili zabavno, 30% promocijski.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">2. Nekonzistentan brending</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Greška:</strong> Različiti logoi, boje, tonovi na različitim platformama.
                      <strong>Rešenje:</strong> Kreirajte brand guidelines i pridržavajte ih se.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">3. Ignorisanje komentara</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Greška:</strong> Ne odgovaranje na komentare i poruke.
                      <strong>Rešenje:</strong> Odgovorite na sve komentare u roku od 24 sata.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">4. Loš kvalitet fotografija</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Greška:</strong> Mutne, tamne ili neprofesionalne slike.
                      <strong>Rešenje:</strong> Koristite prirodno svetlo i osnovne editing aplikacije.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">5. Previše hashtag-ova</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Greška:</strong> Korišćenje svih 30 dostupnih hashtag-ova.
                      <strong>Rešenje:</strong> 15-20 relevatnih hashtag-ova daje bolje rezultate.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Crisis Management na Društvenim Mrežama</h3>
                <p className="mb-4">
                  Negativni komentari ili greške se dešavaju svima. Ono što je važno je kako reagujete.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Kako reagovati na negativne komentare:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Odgovorite brzo i profesionalno</li>
                      <li>• Ponudite rešenje javno</li>
                      <li>• Pomerite razgovor u privatne poruke</li>
                      <li>• Nikad se ne svađajte javno</li>
                      <li>• Istražite valјdost pritužbe</li>
                      <li>• Poučite se iz greške</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-red-600">Šta nikad ne raditi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Brisanje negativnih komentara</li>
                      <li>• Ignorisanje pritužbi</li>
                      <li>• Svađanje sa klijentima</li>
                      <li>• Opravdavanje umesto rešavanja</li>
                      <li>• Prebacivanje odgovornosti</li>
                      <li>• Odlaganje odgovora</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Primer dobrog odgovora na negativan komentar:</h4>
                  <p className="italic text-sm">
                    "Hvala vam što ste podelili vaše iskustvo. Žao nam je što niste zadovoljni našom uslugom.
                    Molimo vas da nam pošaljete privatnu poruku sa detaljima kako bismo što pre rešili ovaj problem.
                    Vaše zadovoljstvo je naš prioritet."
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* ROI and Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Merenje ROI i Dugoročni Rezultati</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Kako da Merite Uspeh</h3>
                <p className="mb-4">
                  Social media marketing nije samo likes i shares. Važno je povezati vaše aktivnosti sa stvarnim poslovnim rezultatima.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Kratkoročni ciljevi (1-3 meseca)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Povećanje broja pratilaca</li>
                      <li>• Rast engagement rate-a</li>
                      <li>• Više komenrtara i poruka</li>
                      <li>• Povećanje website traffic-a</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Srednjoročni ciljevi (3-6 meseci)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Povećanje brand awareness</li>
                      <li>• Više lead-ova iz social media</li>
                      <li>• Poboljšanje reputacije</li>
                      <li>• Community building</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Dugoročni ciljevi (6+ meseci)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Povećanje prodaje</li>
                      <li>• Smanjenje troškova oglašavanja</li>
                      <li>• Povećanje customer lifetime value</li>
                      <li>• Postavljanje kao authority u niche-u</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Formula za računanje ROI:</h4>
                  <p className="text-sm mb-2">
                    <strong>ROI = (Prihod od social media - Troškovi social media) / Troškovi social media × 100</strong>
                  </p>
                  <p className="text-sm">
                    <strong>Primer:</strong> Mesečno ulažete 5000 dinara u oglase + 10000 dinara za sadržaj = 15000 dinara ukupno.
                    Iz social media dobijate klijente koji donose 45000 dinara prihoda.
                    ROI = (45000-15000)/15000 × 100 = 200% ROI
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Slučajevi Uspehe iz Srbije</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Lokalni restoran u Novom Sadu</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Challenge:</strong> Novo otvoreni restoran, nema prepoznatljivost</p>
                      <p><strong>Strategija:</strong> Dnevne Instagram stories sa pripremo jela, engagement sa lokalnim influencer-ima</p>
                      <p><strong>Rezultati za 6 meseci:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Povećanje prometa za 150%</li>
                        <li>• 3500 novih Instagram pratilaca</li>
                        <li>• Average rating 4.8/5 na Google-u</li>
                        <li>• Redovni mention u lokalnim medijima</li>
                      </ul>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Online butik ručno rađenih proizvoda</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Challenge:</strong> Konkurencija velikih brendova, mali budžet za marketing</p>
                      <p><strong>Strategija:</strong> User-generated content, Instagram shopping, influencer partnerships</p>
                      <p><strong>Rezultati za 12 meseci:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Rast prodaje za 300%</li>
                        <li>• 80% novih klijenata dolazi sa Instagram-a</li>
                        <li>• Ekspanzija u regiju</li>
                        <li>• Partnership sa većim retailerima</li>
                      </ul>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">IT konsultantska agencija</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Challenge:</strong> B2B prodaja kroz social media, kompleksne usluge</p>
                      <p><strong>Strategija:</strong> LinkedIn + Facebook kombinacija, edukativni sadržaj, case studies</p>
                      <p><strong>Rezultati za 8 meseci:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 15 novih B2B klijenata</li>
                        <li>• Povećanje average deal size za 40%</li>
                        <li>• Pozicionirani kao thought leaders</li>
                        <li>• Smanjenje sales cycle za 30%</li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Sledeći Koraci</h3>
                <p className="mb-4">
                  Social media marketing je kontinuiran proces. Evo vašeg action plana za narednih 90 dana:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Prvi mesec (Setup)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Kreirajte biznis profile</li>
                      <li>• Optimizujte sve profile information</li>
                      <li>• Napravite kalendar sadržaja</li>
                      <li>• Počnite sa organskim objavljivanjem</li>
                      <li>• Setup analitike</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Drugi mesec (Growth)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Analizirajte prvi mesec rezultate</li>
                      <li>• Počnite sa plaćenim reklamama</li>
                      <li>• Buildujte community</li>
                      <li>• Testirajte different content types</li>
                      <li>• Optimizujte posting schedule</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Treći mesec (Scale)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Scale best performing campaigns</li>
                      <li>• Wprowadzite automation</li>
                      <li>• Počnite influencer partnerships</li>
                      <li>• Optimizujte conversion funnels</li>
                      <li>• Plan za ekspanziju</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Spremni da pokrente vaš social media success?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Social media marketing nije luksuz - to je necessità za moderne biznise.
                Počnite danas sa osnovima i gradite vaš digital empire korak po korak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/kontakt">Počnite sa nama</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/blog">Pročitajte više članaka</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Section */}
          <Quiz
            title="Test Vašeg Znanja: Social Media Marketing"
            description="Proverite koliko ste naučili o Instagram i Facebook marketingu za biznis"
            questions={quizQuestions}
          />

        </div>
      </main>
    </div>
  );
};

export default BlogArticle7;