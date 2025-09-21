import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag, MapPin, Star, Search, Camera, Phone, Calendar, Shield, TrendingUp } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle8 = () => {
  const quizQuestions = [
    {
      question: "Što je najbitnija stvar kod optimizacije Google My Business profila?",
      options: [
        "Veliki broj fotografija",
        "Popunjavanje svih polja sa tačnim informacijama",
        "Često objavljivanje postova",
        "Veliki broj recenzija"
      ],
      correctAnswer: 1,
      explanation: "Potpune i tačne informacije su osnova dobrog GMB profila. Google nagra\u0111uje kompletne profile boljim rangiranjem u lokalnim pretragama."
    },
    {
      question: "Koliko često treba da ažurirate Google My Business postove?",
      options: [
        "Jednom godišnje",
        "Jednom mesečno",
        "Jednom nedeljno",
        "Svaki dan"
      ],
      correctAnswer: 2,
      explanation: "Nedeljno objavljivanje drži vaš profil aktivan i pokazuje Google-u da je biznis aktivan. Ovo poboljšava lokalno rangiranje."
    },
    {
      question: "Što je najvažnije kada odgovarate na negativne recenzije?",
      options: [
        "Brišete negativnu recenziju",
        "Ignorirate je potpuno",
        "Profesionalno odgovorite i ponudite rešenje",
        "Odgovorite negativno"
      ],
      correctAnswer: 2,
      explanation: "Profesionalni odgovor pokazuje da se starate o klijentima i može pretvoriti negativno iskustvo u pozitivno. Ovo utiče na buduće klijente."
    },
    {
      question: "Koje su najbolje kategorije za lokalni biznis u Srbiji?",
      options: [
        "Samo jedna primarna kategorija",
        "Primarna + do 9 sekundarnih kategorija",
        "Što više kategorija to bolje",
        "Kategorije nisu važne"
      ],
      correctAnswer: 1,
      explanation: "Jedna precizna primarna kategorija + relevantne sekundarne kategorije daju najbolje rezultate. Previše kategorija može buniti Google algoritam."
    },
    {
      question: "Koliko fotografija treba imati optimizovan GMB profil?",
      options: [
        "5-10 fotografija",
        "20-30 fotografija",
        "50-100 fotografija",
        "Više od 100 fotografija"
      ],
      correctAnswer: 2,
      explanation: "20-30 kvalitetnih fotografija pokriva sve aspekte biznisa: eksterijer, interijer, proizvode, tim. Više fotografija = bolje rangiranje."
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
                <span>12 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Lokalni SEO</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Google My Business - Vodič za Lokalne Biznise u Srbiji
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kompletni vodič za optimizaciju Google My Business profila. Naučite kako da se pokažete kada lokalni klijenti
              pretražuju vaše usluge i kako da privučete više kupaca iz svoje okoline.
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
                <MapPin className="w-6 h-6 text-primary" />
                <span>Zašto je Google My Business Ključan za Lokalne Biznise?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Google My Business (GMB) je besplatna usluga koju Google pruža lokalnim bizni,ima da bi se prikazali u lokalnim pretragama.
                Kada neko u vašem gradu pretražuje "restoran u blizini" ili "zubar Novi Sad", Google koristi GMB profile da prikaže rezultate.
              </p>
              <p>
                U Srbiji, čak 89% ljudi koristi Google za pronalaženje lokalnih biznisa, a 76% ljudi koji izvrši lokalnu pretragu
                poseti biznis u roku od 24 sata. Bez optimizovanog GMB profila, gubite ogromnu priliku da privučete klijente koji su
                upravo spremni da kupe.
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Ključne statistike za Srbiju:</h4>
                <ul className="space-y-2">
                  <li>• 92% korisnika čita recenzije pre kupovine</li>
                  <li>• Biznisi sa kompletnim GMB profilom imaju 70% veću šansu da privuku posetioce</li>
                  <li>• 64% korisnika koristi Google Maps za pronalaženje lokacije biznisa</li>
                  <li>• Lokalne pretrage su 3x verojatniji da dovedu do kupovine od običnih pretraga</li>
                  <li>• 50% ljudi koji izvrši "near me" pretragu poseti prodavnicu istog dana</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Setup Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span>Kreiranje i Verifikacija GMB Profila</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Korak 1: Kreiranje Profila</h3>
                <p className="mb-4">
                  Prvi korak je kreiranje GMB profila na adresi business.google.com. Proces je jednostavan, ali važno je da
                  budete precizni sa svim informacijama jer Google verifikuje svaki detalj.
                </p>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Informacije potrebne za registraciju:</h4>
                  <ul className="space-y-1">
                    <li>• <strong>Naziv biznisa:</strong> Tačno kako se zove vaš biznis (bez ključnih reči)</li>
                    <li>• <strong>Kategorija:</strong> Precizno opišite šta radite</li>
                    <li>• <strong>Adresa:</strong> Tačna adresa (proverite da li je vidljiva na Google Maps)</li>
                    <li>• <strong>Kontakt informacije:</strong> Telefon i sajt</li>
                    <li>• <strong>Radno vreme:</strong> Tačno vreme kada ste otvoreni</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Korak 2: Verifikacija Profila</h3>
                <p className="mb-4">
                  Google mora da verifikuje da ste stvarni vlasnik biznisa. Postoji nekoliko načina verifikacije,
                  a najčešći je verifikacija poštom ili telefonom.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Verifikacija poštom:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Google šalje razglednicu na adresu biznisa</li>
                      <li>• Stigne za 7-14 dana</li>
                      <li>• Potreban PIN kod sa razglednice</li>
                      <li>• Najsigurniji metod verifikacije</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Verifikacija telefonom:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Trenutna verifikacija</li>
                      <li>• Dostupna za određene kategorije</li>
                      <li>• Google poziva na uneseni broj</li>
                      <li>• Potreban PIN kod sa poziva</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">⚠️ Važne napomene:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Ne kreirajte duplikate - Google kažnjava za multiple profile</li>
                    <li>• Koristite stejnu adresu kao na vašem sajtu</li>
                    <li>• Držite informacije ažurne - promene utiču na rangiranje</li>
                    <li>• Čuvajte pristupne podatke - nikad ih ne gubite</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-6 h-6 text-primary" />
                <span>Potpuna Optimizacija GMB Profila</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Osnovna Podešavanja</h3>
                <p className="mb-4">
                  Potpun profil je osnova za dobro rangiranje u lokalnim pretragama. Google favorizuje profile koji
                  pružaju korisnicima sve potrebne informacije.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Naziv biznisa</h5>
                    <p className="text-sm text-muted-foreground">
                      Koristite tačan naziv bez dodatnih ključnih reči. "Pekara Milanović" je dobro, "Pekara Milanović - najbolji hleb u Beogradu" je loše.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Kategorije</h5>
                    <p className="text-sm text-muted-foreground">
                      Izaberite jednu primarnu kategoriju koja najbolje opisuje vaš biznis, plus do 9 sekundarnih kategorija.
                      Primeri: Restoran (primarna) + Italijanska kuhinja, Dostava hrane (sekundarne).
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Opis biznisa</h5>
                    <p className="text-sm text-muted-foreground">
                      Do 750 karaktera gde možete da opišete šta radite, vašu istoriju, što vas čini posebnim.
                      Uključite ključne reči prirodno u tekst.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Kontakt informacije</h5>
                    <p className="text-sm text-muted-foreground">
                      Adresa, telefon, sajt, email - sve mora biti tačno i konzistentno sa informacijama na vašem sajtu.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Primer dobrog opisa:</h4>
                  <p className="italic text-sm">
                    "Porodična pekara Milanović radi od 1985. godine u srcu Dorćola. Nudimo svež hleb, peciva i torte
                    pripremljene po tradicionalnim receptima. Specijalizovani smo za rođendanske torte po narudžbini.
                    Otvoreni smo radnim danima od 6 do 20h, vikendima od 7 do 18h. Dostava na kućnu adresu moguća."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Radno Vreme i Specijalni Datumi</h3>
                <p className="mb-4">
                  Tačno radno vreme je ključno jer Google koristi ovu informaciju u rezultatima pretrage.
                  Kada je vaš biznis otvoren/zatvoren direktno utiče na to da li će se pojaviti u rezultatima.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Redovno radno vreme:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Unesite za svaki dan u nedelji</li>
                      <li>• Budite precizni sa satima</li>
                      <li>• Označite dane kada ste zatvoreni</li>
                      <li>• Ažurirajte čim se promeni</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Specijalni datumi:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Praznici (Nova godina, Uskrs, itd.)</li>
                      <li>• Godišnji odmor</li>
                      <li>• Privremeno zatvaranje</li>
                      <li>• Produženo radno vreme</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">💡 Pro tip:</h4>
                  <p className="text-sm">
                    Isključite mogućnost "dodavanja radno vremena" od strane korisnika. Ovo sprečava da ljudi dodaju pogrešne informacije
                    o vašem radnom vremenu što može konfundirati buduće klijente.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Atributi Biznisa</h3>
                <p className="mb-4">
                  Atributi su kratke informacije koje pomažu klijentima da brže pronađu ono što traže.
                  Google automatski predlaže atribute na osnovu vaše kategorije.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Usluge:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Dostava</li>
                      <li>• Preuzimanje</li>
                      <li>• Rezervacije</li>
                      <li>• Online porudžbine</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Pristupačnost:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rampa za kolica</li>
                      <li>• Parking za osobe sa invaliditetom</li>
                      <li>• Toalet prilagođen</li>
                      <li>• Asistent za služite</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Plaćanje:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Kartice (Visa, MasterCard)</li>
                      <li>• Kontakt plaćanje</li>
                      <li>• Gotovina</li>
                      <li>• ApplePay/GooglePay</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Photos and Media */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-6 h-6 text-primary" />
                <span>Fotografije i Video Sadržaj</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Važnost Vizuelnog Sadržaja</h3>
                <p className="mb-4">
                  Biznisi sa fotografijama na GMB profilu primaju 42% više zahteva za direkcinami na Google Maps-u
                  i 35% više klikova na svoje sajtove. Kvalitetan vizuelni sadržaj je ključan za privlačenje klijenata.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tipovi fotografija koje trebate:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Logo:</strong> Kvadratni format, visoka rezolucija</li>
                      <li>• <strong>Cover foto:</strong> Glavni izgled biznisa</li>
                      <li>• <strong>Eksterijer:</strong> Fasada, ulaz, parking</li>
                      <li>• <strong>Interijer:</strong> Unutrašnji prostoraje, ambijent</li>
                    </ul>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Proizvodi:</strong> Najbolji proizvodi/usluge</li>
                      <li>• <strong>Tim:</strong> Zaposleni na poslu</li>
                      <li>• <strong>Proces rada:</strong> Kako nastaju proizvodi</li>
                      <li>• <strong>Klijenti:</strong> Zadovoljni kupci</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tehnička Specifikacija Fotografija</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Preporučeno:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Rezolucija:</strong> Minimum 720x720 piksela</li>
                      <li>• <strong>Format:</strong> JPG ili PNG</li>
                      <li>• <strong>Veličina:</strong> Maksimalno 5MB po fotografiji</li>
                      <li>• <strong>Odnos strana:</strong> 1:1 za logo, 16:9 za cover</li>
                      <li>• <strong>Kvalitet:</strong> Jasne, oštne, dobro osvetljene</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Izbegavati:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Zamućene ili tamne fotografije</li>
                      <li>• Pretsimkovane filterne</li>
                      <li>• Tekst ili watermark na fotografijama</li>
                      <li>• Neprofesionalne selfi-je</li>
                      <li>• Identične fotografije</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">📸 Fotograf soveti:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Koristite prirodno svetlo kad god je to moguće</li>
                    <li>• Snimajte tokom "zlatnog sata" (sat pre zalaska sunca)</li>
                    <li>• Napravite više snimaka istog kadra i izaberite najbolji</li>
                    <li>• Pokažite atmosferu i emocije, ne samo proizvode</li>
                    <li>• Ažurirajte fotografije bar jednom u tri meseca</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Video Sadržaj</h3>
                <p className="mb-4">
                  Video sadržaj je sve popularniji na GMB profilima. Kratki video-ovi mogu da pokažu atmosferu vašeg biznisa
                  bolje od fotografija i značajno povećavaju engagement.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium">Tipa video sadržaja</h5>
                    <p className="text-sm text-muted-foreground">
                      • Brza tura kroz biznis (30-60 sekundi)<br/>
                      • Proces pripreme proizvoda ili pružanja usluge<br/>
                      • Testimoniali zadovoljnih klijenata<br/>
                      • Predstavljanje tima<br/>
                      • Specijalne ponude ili novosti
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Posts and Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>GMB Postovi i Ažuriranja</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Zašto su Postovi Važni?</h3>
                <p className="mb-4">
                  GMB postovi vam omogućavaju da redovno komunicirate sa klijentima bez troškova oglašavanja.
                  Aktivan profil sa redovnim postovima bolje se rangira u lokalnim pretragama.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 text-center">
                    <h4 className="font-semibold mb-2">Novosti</h4>
                    <p className="text-xs text-muted-foreground">Opšte informacije o biznisu, novosti, događaji</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <h4 className="font-semibold mb-2">Ponude</h4>
                    <p className="text-xs text-muted-foreground">Akcije, popusti, specijalne ponude sa CTA dugmetom</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <h4 className="font-semibold mb-2">Događaji</h4>
                    <p className="text-xs text-muted-foreground">Organizovani događaji, seminari, promocije</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <h4 className="font-semibold mb-2">Proizvodi</h4>
                    <p className="text-xs text-muted-foreground">Predstavljanje novih proizvoda ili usluga</p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Strategija Sadržaja za GMB</h3>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Optimal schedule:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Ponedeljak:</strong> Motivacija, novo sedmica</li>
                    <li>• <strong>Sreda:</strong> Edukativni sadržaj ili saveti</li>
                    <li>• <strong>Petak:</strong> Promocije za vikend</li>
                    <li>• <strong>Prema potrebi:</strong> Novosti, događaji, specijalne ponude</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Primer dobrog posta - Ponuda:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Naslov:</strong> "Vikend akcija - 20% popust na sve torte!"</p>
                      <p><strong>Tekst:</strong> "Proslavite specijalne momente sa našim ukusnim tortama! Samo ovaj vikend,
                      all torte 20% jeftinije. Naručite na vreme - mesta je ograničeno! Porudžbe: 011/123-456"</p>
                      <p><strong>CTA dugme:</strong> "Pozovi sada"</p>
                      <p><strong>Datum isteka:</strong> Nedelja 23:59</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Optimizacija za Lokalne Ključne Reči</h3>
                <p className="mb-4">
                  Koristite lokalne ključne reči u vašim postovima da biste poboljšali šanse za pojavljivanje u lokalnim pretragama.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Primeri lokalnih ključnih reči:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• "najbolji restoran u Novom Sadu"</li>
                      <li>• "frizerski salon Beograd centar"</li>
                      <li>• "auto servis Niš"</li>
                      <li>• "prevoz u Kragujevcu"</li>
                      <li>• "dostava pice Zemun"</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Gde uključiti ključne reči:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• U naslovu posta</li>
                      <li>• U tekstu posta prirodno</li>
                      <li>• U opisu fotografija</li>
                      <li>• U odgovorima na recenzije</li>
                      <li>• U Q&A sekciji</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Reviews Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span>Upravljanje Recenzijama</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Značaj Recenzija za Lokalni Biznis</h3>
                <p className="mb-4">
                  Recenzije su jedan od najvažnijih faktora za lokalno SEO rangiranje. 87% potrošača čita recenzije lokanih biznisa,
                  a 73% ljudi veruje lokalnom biznisu tek kada ima pozitivne recenzije.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">4.0+</div>
                    <p className="text-sm text-muted-foreground">Average rating za uspešan lokalni biznis</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">25+</div>
                    <p className="text-sm text-muted-foreground">Minimum recenzija za kredibilitet</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">24h</div>
                    <p className="text-sm text-muted-foreground">Maksimalno vreme za odgovor na recenziju</p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Strategija za Dobijanje Pozitivnih Recenzija</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-medium text-green-700">Proaktivan pristup</h5>
                    <p className="text-sm text-muted-foreground">
                      Pitajte zadovoljne klijente lično da ostave recenziju. Najbolje vreme je neposredno nakon kupovine
                      kada su najmotivašniji da podele pozitivno iskustvo.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-blue-700">Digitalna podrška</h5>
                    <p className="text-sm text-muted-foreground">
                      Pošaljite email ili SMS sa direktnim linkom za ostavljanje recenzije. Učinite proces što jednostavnijim za klijente.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-medium text-purple-700">Incentivizacija</h5>
                    <p className="text-sm text-muted-foreground">
                      Ponudite malu nagradu za ostavljanje recenzije - popust za sledeći put, besplatan proizvod, ili učešće u nagradnoj igri.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Primer poruke za traženje recenzije:</h4>
                  <p className="italic text-sm">
                    "Zdravo [Ime], hvala što ste posetili našu pekaru danas! Nadamo se da ste uživali u našem hlebu.
                    Vaše mišljenje je važno za nas - da li biste mogli da podelite svoje iskustvo u Google recenziji?
                    Trebalo bi vam samo minut: [link]. Hvala unapred! - Tim Pekare Milanović"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Odgovaranje na Recenzije</h3>
                <p className="mb-4">
                  Odgovor na recenzije, i pozitivne i negativne, pokazuje da se brinete o feedback-u klijenata.
                  Google to pozitivno ocenjuje i poboljšava vaše lokalno rangiranje.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 text-green-600">Pozitivne recenzije:</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong></p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Zahvalite se</li>
                        <li>Spomenite specifično što su pohvalili</li>
                        <li>Pozovite ih da se vrate</li>
                      </ol>
                      <p className="mt-2"><strong>Primer:</strong></p>
                      <p className="italic">"Hvala [Ime] na izuzetnoj recenziji! Drago nam je da ste byli zadovoljni našom tortom i uslugom. Radujemo se vašoj sledećoj poseti!"</p>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3 text-red-600">Negativne recenzije:</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Formula:</strong></p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Izvinite se</li>
                        <li>Uznajte grešku (ako je osnovana)</li>
                        <li>Ponudite rešenje</li>
                        <li>Pozovite na privatni razgovor</li>
                      </ol>
                      <p className="mt-2"><strong>Primer:</strong></p>
                      <p className="italic">"Izvinjavam se što niste byli zadovoljni našom uslugom. Ozbiljno shvatamo vaš feedback. Molim vas kontaktirajte nas na 011/123-456 da bismo rešili ovaj problem."</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">❌ Što NIKAD ne treba raditi:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Svađati se sa recenzentom javno</li>
                    <li>• Tražiti brisanje legitimnih negativnih recenzija</li>
                    <li>• Ignorisati negativan feedback</li>
                    <li>• Plaćati za lažne pozitivne recenzije</li>
                    <li>• Odgovarati emotivno umesto profesionalno</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Analytics and Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Analitika i Merenje Rezultata</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">GMB Insights Dashboard</h3>
                <p className="mb-4">
                  Google Moj Business pruža detaljne analitike koje vam pokazuju kako klijenti našaju i komuniciraju sa vašim biznisom.
                  Ovi podaci su ključni za optimizaciju strategije.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Kako vas klijenti pronalaze:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Direktne pretrage:</strong> Traže točno vaš naziv</li>
                      <li>• <strong>Discovery searches:</strong> Traže kategoriju usluga</li>
                      <li>• <strong>Branded searches:</strong> Kombinacija naziv + lokacija</li>
                      <li>• <strong>Maps searches:</strong> Preko Google Maps aplikacije</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Akcije klijenata:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Website visits:</strong> Klikovi na vaš sajt</li>
                      <li>• <strong>Direction requests:</strong> Putanje do vašeg biznisa</li>
                      <li>• <strong>Phone calls:</strong> Pozivi direktno iz GMB</li>
                      <li>• <strong>Photo views:</strong> Pregledanje fotografija</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Metrike za Praćenje</h3>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Performance metrike:</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p><strong>Views:</strong> Koliko puta je prikazan vaš listing</p>
                        <p><strong>Cilj:</strong> Rast od 10% mesečno</p>
                      </div>
                      <div>
                        <p><strong>Actions:</strong> Ukupan broj akcija (pozivi, putanje, klikovi)</p>
                        <p><strong>Cilj:</strong> Conversion rate preko 5%</p>
                      </div>
                      <div>
                        <p><strong>Rankings:</strong> Prosečna pozicija u lokalnim pretragama</p>
                        <p><strong>Cilj:</strong> Top 3 za glavne ključne reči</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold mb-2">Kako da analizirate podatke:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Weekly reports:</strong> Proveravajte metrike svake nedelje</li>
                    <li>• <strong>Trend analysis:</strong> Poredite sa prethodnim periodom</li>
                    <li>• <strong>Sezonalnost:</strong> Identifikujte sezonalne patterns</li>
                    <li>• <strong>A/B testing:</strong> Testirajte different foto and posts</li>
                    <li>• <strong>Competitor benchmarking:</strong> Poredite sa konkurencijom</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Optimizacija na Osnovu Podataka</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Hvis discovery searches dominiraju:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Dodajte više sekundarnih kategorija</li>
                      <li>• Optimizujte opis za ključne reči</li>
                      <li>• Dodajte atribute koji vas izdvajaju</li>
                      <li>• Fokusirajte se na lokalne ključne reči</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-600">Hvis direct searches dominiraju:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Vaš brend je već poznat</li>
                      <li>• Fokusirajte se na konverziju</li>
                      <li>• Optimizujte CTA dugmiće</li>
                      <li>• Dodajte clear pricing information</li>
                    </ul>
                  </Card>
                </div>

                <div className="space-y-4 mt-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Action plan na osnovu rezultata:</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p><strong>Hvis phone calls dominiraju:</strong></p>
                        <ul className="list-disc list-inside">
                          <li>Dodajte click-to-call dugme</li>
                          <li>Navedite radno vreme jasno</li>
                          <li>Optimizujte za mobile</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Hvis direction requests dominiraju:</strong></p>
                        <ul className="list-disc list-inside">
                          <li>Dodajte parking informacije</li>
                          <li>Navedite javni prevoz</li>
                          <li>Dodajte landmarks u opis</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Hvis website clicks dominiraju:</strong></p>
                        <ul className="list-disc list-inside">
                          <li>Optimizujte landing page</li>
                          <li>Dodajte booking sistem</li>
                          <li>Poboljšajte mobile experience</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Local SEO Integration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-6 h-6 text-primary" />
                <span>Integracija sa Lokalni SEO Strategijom</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">NAP Consistency (Name, Address, Phone)</h3>
                <p className="mb-4">
                  Konzistentnost informacija o vašem biznisu širom interneta je ključna za lokalno SEO.
                  Google poredi informacije sa vašeg GMB-a sa onima na vašem sajtu i drugim direktorijimima.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gde proveriti konzistentnost:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-1">
                      <li>• Vaš sajt (footer, contact strana)</li>
                      <li>• Facebook stranica</li>
                      <li>• LinkedIn profil</li>
                      <li>• Instagram bio</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• TripAdvisor (za restorane/hotele)</li>
                      <li>• Yelp listing</li>
                      <li>• Yellow Pages</li>
                      <li>• Industrijsski direktorijumi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Schema Markup Optimizacija</h3>
                <p className="mb-4">
                  Schema markup pada da Google-u jasno razume što je vaš biznis i kako se povezuje sa GMB profilom.
                  Ovo poboljšava šanse da se pojavite u lokalnim rich snippets.
                </p>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Osnovni LocalBusiness schema:</h4>
                    <div className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
                      <code>
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pekara Milanović",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Obilićev venac 12",
    "addressLocality": "Beograd",
    "postalCode": "11000",
    "addressCountry": "RS"
  },
  "telephone": "+381114567890",
  "url": "https://pekaramilanovic.rs",
  "openingHours": "Mo-Fr 06:00-20:00, Sa-Su 07:00-18:00"
}`}
                      </code>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Citations i Online Direktorijumi</h3>
                <p className="mb-4">
                  Citations su mentions vašeg biznisa na drugim sajtovima. Što više quality citations imate,
                  to Google više veruje da ste legitiman lokalni biznis.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Važni direktorijimi za Srbiju:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Žuto.rs:</strong> Glavni lokalni direktorijum</li>
                      <li>• <strong>011info.com:</strong> Beograd business directory</li>
                      <li>• <strong>YellowPages.rs:</strong> Međunarodni direktorijum</li>
                      <li>• <strong>Facebook stranice:</strong> Lokalne grupe i direktorijumi</li>
                      <li>• <strong>TripAdvisor:</strong> Za turizam/gastronomiju</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Kvalitet vs kvantitet:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 10 quality citations &gt; 100 spammy</li>
                      <li>• Relevantnost za vašu industriju</li>
                      <li>• Domain Authority direktorijuma</li>
                      <li>• Geografska relevantnost</li>
                      <li>• Consistent NAP information</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Success Stories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Uspešne Priče i Case Study-ji</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Case Study: Lokalni Restoran u Beogradu</h3>

                <Card className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Početna situacija:</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Novo otvoren restoran u Dorćolu</li>
                        <li>• Bez online prisustva</li>
                        <li>• Minimalan broj gostiju</li>
                        <li>• Veliki konkurent u istoj ulici</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">Implementirana strategija:</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Kompletno popunjavanje GMB profila</li>
                        <li>• Profesionalne fotografije jela i ambijenta</li>
                        <li>• Nedeljni postovi sa daily specials</li>
                        <li>• Aktivno traženje recenzija od zadovoljnih gostiju</li>
                        <li>• Optimizacija za "restoran Dorćol" ključne reči</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Rezultati za 6 meseci:</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p><strong>GMB views:</strong></p>
                          <p>Od 50 do 2,500 mesečno</p>
                        </div>
                        <div>
                          <p><strong>Direction requests:</strong></p>
                          <p>Od 5 do 180 mesečno</p>
                        </div>
                        <div>
                          <p><strong>Rating:</strong></p>
                          <p>Trenutno 4.7/5 (65 recenzija)</p>
                        </div>
                      </div>
                      <p className="mt-3 font-medium">Povećanje prometa za 150%, restoran sad ima redovne goste</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Case Study: Auto Servis u Novom Sadu</h3>

                <Card className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Challenge:</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Tradicionalan biznis bez digitalnog prisustva</li>
                        <li>• Klijenti uglavnom preko word-of-mouth</li>
                        <li>• Mladi konkurent sa agresivnim online marketingom</li>
                        <li>• Seasonal fluctuations u poslu</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">GMB strategija:</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Dodavanje svih usluga kao sekundarne kategorije</li>
                        <li>• Before/after fotografije remonta vozila</li>
                        <li>• Video sadržaj showing expertise</li>
                        <li>• Quick response na sve upite i recenzije</li>
                        <li>• Seasonal offers through GMB posts</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>New customer acquisition:</strong></p>
                          <p>40% dolazi preko GMB-a</p>
                        </div>
                        <div>
                          <p><strong>Reviews growth:</strong></p>
                          <p>Od 3 do 45+ recenzija (4.6 average)</p>
                        </div>
                      </div>
                      <p className="mt-3 font-medium">Stabilan rast poslovanja, smanjene sezonske oscilacije</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ključne Lekcije za Uspeh</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-green-600">Što funkcionište:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Consistent posting i engagement</li>
                      <li>• High-quality visual content</li>
                      <li>• Proactive review management</li>
                      <li>• Local keyword optimization</li>
                      <li>• Quick response to inquiries</li>
                      <li>• Regular profile updates</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2 text-red-600">Česti mistakes:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Nepotpuni profile information</li>
                      <li>• Ignorisanje recenzija</li>
                      <li>• Low-quality fotografije</li>
                      <li>• Inconsistent posting</li>
                      <li>• Wrong category selection</li>
                      <li>• Outdated information</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>90-Dana Action Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Prvi mesec (Setup & Osnove)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Kreirajte i verifikujte GMB profil</li>
                    <li>• Popunite sve profile fields</li>
                    <li>• Upload 15-20 quality fotografija</li>
                    <li>• Setup osnovne postove</li>
                    <li>• Start collecting reviews</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Drugi mesec (Optimizacija)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Analyze prva месеc analytics</li>
                    <li>• Optimize kategorije i atribute</li>
                    <li>• Create regular posting schedule</li>
                    <li>• Build citation strategy</li>
                    <li>• Respond to all reviews</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Treći mesec (Growth & Scale)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• A/B test different content types</li>
                    <li>• Expand to more directories</li>
                    <li>• Implement advanced features</li>
                    <li>• Track competitor analysis</li>
                    <li>• Plan long-term strategy</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h4 className="font-semibold mb-3">💡 Pro Tip za brze rezultate:</h4>
                <p className="text-sm">
                  Fokusirajte se na kompletnost profila u prvom mesecu. Google rangira kompletne profile
                  značajno bolje od nepotpunih. Svaký dodatni field koji popunite poboljšava vaše šanse
                  za bolje rangiranje u localnim pretragama.
                </p>
              </div>

            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Spremni da osvajite lokalne pretrage?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Google My Business je vaš najjači alat za dovođenje lokalnih klijenata.
                Postavite profil danas i počnite da privlačite kupce iz svoje okoline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/kontakt">Pomozimo vam sa GMB</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/blog">Pročitajte više saveta</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Section */}
          <Quiz
            title="Test Vašeg Znanja: Google My Business"
            description="Proverite koliko ste naučili o optimizaciji GMB profila za lokalne biznise"
            questions={quizQuestions}
          />

        </div>
      </main>
    </div>
  );
};

export default BlogArticle8;