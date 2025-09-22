import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Search, Star, Phone, Clock, Users, Target, TrendingUp, BarChart3, Globe, CheckCircle, AlertCircle, Smartphone, Calendar, Award, Building2, Car, Coffee, Camera, ShoppingBag, Heart, FileText, ExternalLink, Lightbulb, Zap, Eye, MousePointer, DollarSign, Share2, MessageCircle, ThumbsUp, BookOpen, ChevronRight, PlusCircle, Settings, Filter, Compass, Navigation, Map, Route, Flag, Home, Store, Briefcase, UserCheck, ShieldCheck, CreditCard, Lock, Truck, Package, Mail, Bell, Wifi, Headphones, Monitor, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Quiz from "@/components/Quiz";

const BlogArticle24 = () => {
  const quizQuestions = [
    {
      question: "Koji je najvažniji faktor za uspeh u lokalnom SEO?",
      options: [
        "Veliki broj linkova",
        "Google My Business profil",
        "Socijalne mreže",
        "Plaćeni oglasi"
      ],
      correct: 1,
      explanation: "Google My Business profil je osnova lokalnog SEO-a jer direktno utiče na prikaz u lokalnim pretragama i Google Maps rezultatima."
    },
    {
      question: "Koliko posto korisnika pretražuje lokalne usluge na mobilnim uređajima?",
      options: [
        "50%",
        "60%",
        "76%",
        "85%"
      ],
      correct: 2,
      explanation: "Preko 76% korisnika pretražuje lokalne usluge na mobilnim uređajima, što čini mobilnu optimizaciju ključnom za lokalni SEO."
    },
    {
      question: "Šta su lokalni citati u SEO kontekstu?",
      options: [
        "Pozitivne recenzije",
        "Objave na društvenim mrežama",
        "Spomeni naziva, adrese i telefona firme",
        "Linkovi sa lokalnih sajtova"
      ],
      correct: 2,
      explanation: "Lokalni citati su spomeni naziva, adrese i telefona (NAP) vašeg preduzeća na različitim online direktorijumima i sajtovima."
    },
    {
      question: "Koji je preporučeni broj fotografija za Google My Business profil?",
      options: [
        "5-10",
        "10-20",
        "20-50",
        "50+"
      ],
      correct: 2,
      explanation: "Preporučuje se dodavanje 20-50 kvalitetnih fotografija koje prikazuju vaš posao, proizvode, usluge i enterijer/eksterijer."
    },
    {
      question: "Koliko često treba da ažurirate Google My Business profil?",
      options: [
        "Jednom mesečno",
        "Jednom nedeljno",
        "Nekoliko puta nedeljno",
        "Svakodnevno"
      ],
      correct: 2,
      explanation: "Najbolji rezultati se postižu ažuriranjem GMB profila nekoliko puta nedeljno kroz objave, fotografije i odgovore na recenzije."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Nazad na blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Lokalni SEO
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Lokalni SEO za Mala Preduzeća: Kompletni Vodič za 2024. Godinu
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Otkrijte kako da pozicionirate vaše lokalno preduzeće na vrh Google pretrage i privučete više kupaca iz vaše okoline
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                22. septembar 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                25 min čitanja
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                Lokalni marketing
              </div>
            </div>
          </header>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60"
              alt="Lokalni SEO za mala preduzeća - poslovne zgrade"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>

          <div className="prose prose-lg max-w-none">

            {/* Uvod */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Zašto je lokalni SEO ključan za vaš uspeh?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    U digitalnom svetu gde 97% potrošača traži lokalne firme online, pozicioniranje vašeg preduzeća na vrh lokalnih pretaga nije luksuz - to je neophodno za opstanak. Lokalni SEO omogućava malim preduzećima da se takmiče sa velikim brendovima na lokalnom nivou i privuku kupce koji su spremni da kupe odmah.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Kada neko u vašem gradu pretražuje "najbolja pekara u blizini" ili "hydrauličar Beograd", da li se vaše preduzeće pojavljuje među prvim rezultatima? Ako ne, gubite ogroman broj potencijalnih kupaca svakodnevno. Lokalni SEO je strategija koja vam omogućava da budete vidljivi upravo u trenutku kada ljudi traže vaše usluge ili proizvode.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              U ovom detaljnom vodiču, otkićete sve što trebate da znate o lokalnom SEO-u - od osnova do naprednih tehnika koje koriste najuspešnija lokalna preduzeća. Naučićete kako da optimizujete svoj Google My Business profil, izgradite lokalne citacije, privučete pozitivne recenzije i ukupno poboljšate svoju online vidljivost.
            </p>

            {/* Statistike */}
            <Card className="mb-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Statistike koje potvrđuju važnost lokalnog SEO-a
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">97%</div>
                      <span className="text-gray-700">potrošača traži lokalne firme online</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">76%</div>
                      <span className="text-gray-700">lokalnih pretaga se vrši sa mobilnih uređaja</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">72%</div>
                      <span className="text-gray-700">korisnika poseti prodavnicu nakon lokalne pretrage</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">88%</div>
                      <span className="text-gray-700">lokalnih pretaga rezultuje pozivom ili posetom</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">50%</div>
                      <span className="text-gray-700">mobilnih korisnika poseti prodavnicu istog dana</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">92%</div>
                      <span className="text-gray-700">korisnika odabere firme sa prve stranice rezultata</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Šta je lokalni SEO */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Search className="w-8 h-8 mr-3 text-blue-600" />
                Šta je lokalni SEO i zašto je važan?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Lokalni SEO (Search Engine Optimization) je skup strategija i tehnika koje omogućavaju vašem preduzeću da se pojavi na vrhu rezultata pretrage kada ljudi traže proizvode ili usluge u vašoj geografskoj oblasti. Za razliku od tradicionalnog SEO-a koji se fokusira na globalne pretrage, lokalni SEO cilja na specifičnu lokaciju.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Primer lokalne pretrage:</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• "restoran Novi Sad"</p>
                  <p>• "veterinar u blizini"</p>
                  <p>• "auto servis Kragujevac"</p>
                  <p>• "frizerski salon Zemun"</p>
                  <p>• "apoteka radno vreme"</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ključne komponente lokalnog SEO-a</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Building2 className="w-5 h-5 mr-2" />
                      Google My Business
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Besplatan Google profil koji prikazuje vaše preduzeće u lokalnim pretragama i na Google Maps-u.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Star className="w-5 h-5 mr-2" />
                      Recenzije i ocene
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Korisničke recenzije direktno utiču na rangiranje u lokalnim pretragama i donošenje odluka kupaca.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <FileText className="w-5 h-5 mr-2" />
                      Lokalni citati
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Spomeni vašeg preduzeća (naziv, adresa, telefon) na lokalnim direktorijumima i sajtovima.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Globe className="w-5 h-5 mr-2" />
                      Lokalni sadržaj
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Sadržaj na vašem sajtu koji je relevantan za lokalnu zajednicu i ključne reči.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Važna napomena</h4>
                    <p className="text-yellow-700">
                      Lokalni SEO nije jednokratan projekat - to je kontinuiran proces koji zahteva redovno ažuriranje i optimizaciju. Rezultati se obično vide nakon 3-6 meseci konzistentnog rada.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Google My Business */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Store className="w-8 h-8 mr-3 text-red-600" />
                Optimizacija Google My Business profila
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Google My Business (GMB) je najvažniji alat za lokalni SEO. Optimizovan GMB profil može da poveća vašu vidljivost za 70% i privuče značajno više kupaca. Evo detaljnog vodiča za savršenu optimizaciju:
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 1: Kompletiranje osnovnih informacija</h3>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Obavezne informacije:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Naziv preduzeća
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Tačna adresa
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Telefon
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Kategorija poslovanja
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Radno vreme
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Dodatne informacije:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center">
                        <PlusCircle className="w-4 h-4 mr-2 text-blue-600" />
                        Opis preduzeća
                      </li>
                      <li className="flex items-center">
                        <PlusCircle className="w-4 h-4 mr-2 text-blue-600" />
                        Website URL
                      </li>
                      <li className="flex items-center">
                        <PlusCircle className="w-4 h-4 mr-2 text-blue-600" />
                        Atributi (parking, WiFi...)
                      </li>
                      <li className="flex items-center">
                        <PlusCircle className="w-4 h-4 mr-2 text-blue-600" />
                        Načini plaćanja
                      </li>
                      <li className="flex items-center">
                        <PlusCircle className="w-4 h-4 mr-2 text-blue-600" />
                        Proizvodi/usluge
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 2: Dodavanje kvalitetnih fotografija</h3>

              <p className="text-gray-700 mb-4">
                Preduzeća sa fotografijama dobijaju 42% više zahteva za putanje na Google Maps-u i 35% više klikova na svoj website. Dodajte različite tipove fotografija:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Camera className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      Logo i eksterijer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Logo u visokoj rezoluciji</li>
                      <li>• Fasada zgrade</li>
                      <li>• Parking</li>
                      <li>• Ulaz</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Coffee className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      Enterijer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Radni prostor</li>
                      <li>• Čekaonice</li>
                      <li>• Specijalna oprema</li>
                      <li>• Atmosfera</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      Proizvodi/usluge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Popularni proizvodi</li>
                      <li>• Usluge u akciji</li>
                      <li>• Tim na radu</li>
                      <li>• Zadovoljni kupci</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Pro tip za fotografije:</h4>
                <p className="text-green-700">
                  Dodajte najmanje 20-30 fotografija i ažurirajte ih redovno. Google favorizuje profile sa svežim sadržajem. Fotografije treba da budu minimum 720p kvaliteta i u JPG ili PNG formatu.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 3: Optimizacija opisa preduzeća</h3>

              <p className="text-gray-700 mb-4">
                Opis treba da bude informativan, privlačan i optimizovan za ključne reči. Imate na raspolaganju 750 karaktera:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold mb-3">Primer dobrog opisa za restoran:</h4>
                <p className="text-gray-700 italic">
                  "Restoran 'Stara Čaršija' u centru Novog Sada servira autentične srpske specijalitete od 1995. godine. Poznati smo po domaćoj pašticadi, ćevapima sa roštilja i tradicionalnim dezertima. Lokacija u pešačkoj zoni, porodična atmosfera, parking u blizini. Dostava za Novi Sad i okolinu. Rezervacije preporučene za vikende."
                </p>

                <h4 className="font-semibold mt-4 mb-2">Zašto je ovaj opis dobar:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Sadrži ključne reči: "restoran Novi Sad", "srpski specijaliteti"</li>
                  <li>✓ Spominje lokaciju i godine rada (kredibilitet)</li>
                  <li>✓ Navodi popularne proizvode</li>
                  <li>✓ Uključuje praktične informacije (parking, dostava)</li>
                  <li>✓ Poziv na akciju (rezervacije)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Korak 4: GMB objave i ažuriranja</h3>

              <p className="text-gray-700 mb-4">
                Redovne objave na GMB profilu povećavaju engagement i pokazuju Google-u da je vaš profil aktivan. Tipovi objava:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Calendar className="w-5 h-5 mr-2" />
                      Event objave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Za promociju događaja, radionica, akcija:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Datum i vreme</li>
                      <li>• Opis događaja</li>
                      <li>• Link za rezervacije</li>
                      <li>• Privlačne fotografije</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Proizvod objave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Za predstavljanje novih proizvoda:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Cena i opis</li>
                      <li>• Kvalitetne fotografije</li>
                      <li>• Dugme za kupovinu</li>
                      <li>• Kategorija proizvoda</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Zap className="w-5 h-5 mr-2" />
                      Ponuda objave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Za promociju akcija i popusta:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Procenat popusta</li>
                      <li>• Datum isteka</li>
                      <li>• Kod za popust</li>
                      <li>• Uslovi akcije</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Informativne objave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Za deljenje korisnih informacija:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Saveti i trikovi</li>
                      <li>• Iza kulisa</li>
                      <li>• Vest iz industrije</li>
                      <li>• Zahvalnice kupcima</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Lokalni citati */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-green-600" />
                Izgradnja lokalnih citata
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Lokalni citati su spomeni vašeg preduzeća (NAP - Name, Address, Phone) na različitim online platformama. Google koristi citacije kao faktor rangiranja, pa je važno da budu tačni i konzistentni na svim mestima.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Tipovi citata</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Strukturirani citati
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Formalni direktorijumi sa specific poljima:</p>
                    <ul className="text-sm space-y-1">
                      <li>• 011info.com</li>
                      <li>• Yellowpages.rs</li>
                      <li>• BizDir.rs</li>
                      <li>• TelefonIme.com</li>
                      <li>• InfoPolis.rs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Globe className="w-5 h-5 mr-2" />
                      Nestrukturirani citati
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">Spomeni u člankim, vestima, blogovima:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Lokalni news sajtovi</li>
                      <li>• Blogovi o gradu</li>
                      <li>• Turističke stranice</li>
                      <li>• Forumi i grupe</li>
                      <li>• Društvene mreže</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Najvažniji lokalni direktorijumi u Srbiji</h3>

              <div className="space-y-4 mb-8">
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Opšti direktorijumi:</h4>
                        <ul className="text-sm space-y-1 text-yellow-700">
                          <li>• Google My Business</li>
                          <li>• Facebook Business</li>
                          <li>• Bing Places</li>
                          <li>• Apple Maps</li>
                          <li>• Here Places</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Lokalni direktorijumi:</h4>
                        <ul className="text-sm space-y-1 text-yellow-700">
                          <li>• 011info.com</li>
                          <li>• TelefonIme.com</li>
                          <li>• BizDir.rs</li>
                          <li>• YellowPages.rs</li>
                          <li>• InfoPolis.rs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Specifični direktorijumi:</h4>
                        <ul className="text-sm space-y-1 text-yellow-700">
                          <li>• TripAdvisor (turizam)</li>
                          <li>• OpenTable (restorani)</li>
                          <li>• Booking.com (smeštaj)</li>
                          <li>• Foursquare</li>
                          <li>• LinkedIn Company</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">NAP konzistentnost</h3>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Važno za konzistentnost</h4>
                    <p className="text-red-700 mb-3">
                      Vaš NAP mora biti identičan na svim platformama. Čak i mala odstupanja mogu da nauditi rangiranju.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-800">✗ Nekonzistentno:</p>
                        <p className="text-sm text-red-700">Bulevar Mihajla Pupina 10</p>
                        <p className="text-sm text-red-700">Bul. M. Pupina 10</p>
                        <p className="text-sm text-red-700">Pupinov bulevar 10</p>
                      </div>
                      <div>
                        <p className="font-medium text-green-800">✓ Konzistentno:</p>
                        <p className="text-sm text-green-700">Bulevar Mihajla Pupina 10</p>
                        <p className="text-sm text-green-700">Bulevar Mihajla Pupina 10</p>
                        <p className="text-sm text-green-700">Bulevar Mihajla Pupina 10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategija za izgradnju citata</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      Korak 1
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Audit postojećih citata</h4>
                    <p className="text-sm text-gray-600">
                      Pronađite sve postojeće spomene vašeg preduzeća i proverite NAP konzistentnost.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Settings className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      Korak 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Popravka grešaka</h4>
                    <p className="text-sm text-gray-600">
                      Kontaktirajte sajtove da isprave netačne informacije ili zahtevajte brisanje duplikata.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <PlusCircle className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      Korak 3
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Dodavanje novih citata</h4>
                    <p className="text-sm text-gray-600">
                      Sistematski dodajte preduzeće na relevantne direktorijume i platforme.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Upravljanje recenzijama */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 mr-3 text-yellow-600" />
                Upravljanje recenzijama i ocenama
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Recenzije su jedan od najvažnijih faktora lokalnog SEO-a. 85% potrošača čita online recenzije koliko i preporuke prijatelja. Evo kako da izgradite strategiju upravljanja recenzijama:
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Značaj recenzija za lokalni SEO</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-800">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Uticaj na rangiranje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Broj recenzija (15% faktora rangiranja)</li>
                      <li>• Prosečna ocena (važnost za klik)</li>
                      <li>• Svežina recenzija (novije = bolje)</li>
                      <li>• Odgovaranje na recenzije</li>
                      <li>• Ključne reči u recenzijama</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Users className="w-5 h-5 mr-2" />
                      Uticaj na kupce
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• 73% čita recenzije pre kupovine</li>
                      <li>• 4+ zvezde = 90% povećanje klikova</li>
                      <li>• Odgovor na recenzije povećava poverenje</li>
                      <li>• Negativne recenzije mogu biti korisne</li>
                      <li>• Sveže recenzije = aktivan biznis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategija za privlačenje pozitivnih recenzija</h3>

              <div className="bg-green-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-green-800 mb-4">Najbolje prakse za traženje recenzija:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">Kada tražiti:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Odmah nakon pozitivnog iskustva</li>
                      <li>• Kada kupac izrazi zadovoljstvo</li>
                      <li>• Tokom ili na kraju usluge</li>
                      <li>• 24-48h nakon kupovine</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700 mb-2">Kako tražiti:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Lično, prijateljski pristup</li>
                      <li>• QR kod na računu</li>
                      <li>• Email nakon kupovine</li>
                      <li>• SMS poruka</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-gray-900">Primeri poruka za traženje recenzija:</h4>

              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Za restoran/kafić:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">
                      "Drago nam je što ste uživali u vašoj večeri kod nas! Ako imate trenutak, molimo vas da podelite vaše iskustvo na Google-u - to nam mnogo znači za poboljšanje usluge. Hvala vam! 🌟"
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Za servis/uslugu:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">
                      "Hvala vam što ste odabrali naš servis! Vaše mišljenje je važno - molimo vas da za 2 minuta ocenite našu uslugu na Google-u. Link: [direktan link]. Vaši komentari nam pomažu da budemo još bolji!"
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Odgovaranje na recenzije</h3>

              <p className="text-gray-700 mb-4">
                Odgovaranje na sve recenzije (pozitivne i negativne) je ključno za lokalni SEO. Pokazuje da brinete o kupcima i poboljšava vašu reputaciju.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <ThumbsUp className="w-5 h-5 mr-2" />
                      Pozitivne recenzije
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-sm">Template za odgovor:</p>
                        <p className="text-sm text-gray-600 italic">
                          "Hvala [ime], drago nam je što ste zadovoljni [specifična usluga]! Radujemo se vašoj ponovnoj poseti. 😊"
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Ključni elementi:</p>
                        <ul className="text-xs space-y-1">
                          <li>• Personalizacija (ime kupca)</li>
                          <li>• Specifične detalje</li>
                          <li>• Zahvalnost</li>
                          <li>• Poziv za povratak</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Negativne recenzije
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-sm">Template za odgovor:</p>
                        <p className="text-sm text-gray-600 italic">
                          "Izvinjavam se zbog [problem]. Cenimo vašu povratnu informaciju i želimo da ispravimo situaciju. Molimo kontaktirajte nas na [telefon/email]."
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Ključni elementi:</p>
                        <ul className="text-xs space-y-1">
                          <li>• Iskrena izvinjenja</li>
                          <li>• Priznanje problema</li>
                          <li>• Ponuda rešenja</li>
                          <li>• Direktan kontakt</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Lokalni sadržaj */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-8 h-8 mr-3 text-purple-600" />
                Kreiranje lokalnog sadržaja
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Lokalni sadržaj je content koji je specifičan za vašu geografsku lokaciju i lokalnu zajednicu. Ovakav sadržaj pomaže u rangiranju za lokalne ključne reči i gradi povezanost sa zajednicom.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Tipovi lokalnog sadržaja</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <MapPin className="w-5 h-5 mr-2" />
                      Lokalni vodiči
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• "10 najboljih restorana u [gradu]"</li>
                      <li>• "Kako da obiđete [lokaciju] za dan"</li>
                      <li>• "Skriveni dragulji [grada]"</li>
                      <li>• "Gde da kupujete [proizvod] u [gradu]"</li>
                      <li>• "Istorija [lokalnog obeležja]"</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Calendar className="w-5 h-5 mr-2" />
                      Lokalni događaji
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• Najave lokalnih festivala</li>
                      <li>• Izveštaji sa događaja</li>
                      <li>• Intervju sa organizatorima</li>
                      <li>• Kalendar važnih datuma</li>
                      <li>• Sponzorstva i partnerstva</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Users className="w-5 h-5 mr-2" />
                      Lokalna zajednica
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Priče lokalnih preduzetnika</li>
                      <li>• Humanitarne akcije</li>
                      <li>• Partnerstva sa školama</li>
                      <li>• Lokalni talenti i umetnici</li>
                      <li>• Saradnja sa udruženjima</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Lokalna industrija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Trendovi u lokalnoj privredi</li>
                      <li>• Intervjui sa ekspertima</li>
                      <li>• Analiza lokalnog tržišta</li>
                      <li>• Saveti za lokalne preduzetnike</li>
                      <li>• Regulativa i zakoni</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ključne reči za lokalni sadržaj</h3>

              <div className="bg-purple-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-purple-800 mb-4">Struktura lokalnih ključnih reči:</h4>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Osnovna struktura:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• [usluga] + [grad]</li>
                      <li>• [proizvod] + [kvart]</li>
                      <li>• najbolji [usluga] [grad]</li>
                      <li>• [usluga] u blizini</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Long-tail varijante:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• gde kupiti [proizvod] [grad]</li>
                      <li>• najjeftiniji [usluga] [lokacija]</li>
                      <li>• [usluga] [grad] cene</li>
                      <li>• [usluga] [kvart] preporuke</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-700 mb-2">Lokalni identifikatori:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• nazivi kvartova</li>
                      <li>• poznata mesta</li>
                      <li>• ulice i trgovi</li>
                      <li>• javni prevoz stanice</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Kreiranje location pages</h3>

              <p className="text-gray-700 mb-4">
                Ako poslujete na više lokacija, kreiranje zasebnih stranica za svaku lokaciju je ključno za lokalni SEO:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold mb-4">Struktura location page:</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800">1. Osnove (NAP + mapa)</h5>
                    <p className="text-sm text-gray-600">Naziv, adresa, telefon, radno vreme, Google mapa</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">2. Usluge specifične za lokaciju</h5>
                    <p className="text-sm text-gray-600">Koje usluge su dostupne na toj lokaciji, specijalizacije</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">3. Lokalni sadržaj</h5>
                    <p className="text-sm text-gray-600">Informacije o kvartu, blizini, parking, javni prevoz</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">4. Fotografije lokacije</h5>
                    <p className="text-sm text-gray-600">Eksterijer, enterijer, team, okolina</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800">5. Kontakt forma</h5>
                    <p className="text-sm text-gray-600">Specifična za tu lokaciju sa skrivenim poljem za identifikaciju</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tehnička optimizacija */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-gray-600" />
                Tehnička optimizacija za lokalni SEO
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Tehnička strana vašeg web sajta igra ključnu ulogu u lokalnom SEO-u. Google mora da može lako da indeksira vaš sajt i razume vašu lokaciju i usluge.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Schema markup za lokalne firme</h3>

              <p className="text-gray-700 mb-4">
                Schema markup pomaže Google-u da bolje razume vašu lokaciju i poslovanje. LocalBusiness schema je obavezna za sva lokalna preduzeća:
              </p>

              <div className="bg-gray-900 text-green-400 p-6 rounded-xl mb-6 text-sm overflow-x-auto">
                <pre>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Restoran Stara Čaršija",
  "description": "Autentični srpski restoran u centru Novog Sada",
  "url": "https://www.staracarsija.rs",
  "telephone": "+38121123456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dunavska 5",
    "addressLocality": "Novi Sad",
    "postalCode": "21000",
    "addressCountry": "RS"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.2671",
    "longitude": "19.8335"
  },
  "openingHours": ["Mo-Sa 10:00-23:00", "Su 12:00-22:00"],
  "servesCuisine": "Serbian",
  "priceRange": "$$"
}`}</pre>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mobilna optimizacija</h3>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Ključnost mobile-first pristupa</h4>
                    <p className="text-blue-700 mb-3">
                      Preko 76% lokalnih pretaga se vrši sa mobilnih uređaja. Google koristi mobile-first indexing, što znači da mobilna verzija vašeg sajta determiniše rangiranje.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-blue-800 mb-2">Obavezni elementi:</h5>
                        <ul className="text-sm space-y-1 text-blue-700">
                          <li>• Responsive design</li>
                          <li>• Brzo učitavanje (3s)</li>
                          <li>• Click-to-call dugmad</li>
                          <li>• Jednostavna navigacija</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800 mb-2">Testiranje:</h5>
                        <ul className="text-sm space-y-1 text-blue-700">
                          <li>• Google Mobile-Friendly Test</li>
                          <li>• PageSpeed Insights</li>
                          <li>• Search Console Mobile</li>
                          <li>• Lighthouse audit</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Brzina učitavanja sajta</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                      Optimizacija slika
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• WebP format</li>
                      <li>• Kompresija (80% kvalitet)</li>
                      <li>• Lazy loading</li>
                      <li>• Odgovarajuće dimenzije</li>
                      <li>• Alt text sa ključnim rečima</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Database className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      Caching strategije
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Browser caching</li>
                      <li>• CDN implementacija</li>
                      <li>• Gzip kompresija</li>
                      <li>• Minifikacija CSS/JS</li>
                      <li>• Kritični CSS inline</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Monitor className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      Core Web Vitals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• LCP < 2.5s</li>
                      <li>• FID < 100ms</li>
                      <li>• CLS < 0.1</li>
                      <li>• Redovno monitiranje</li>
                      <li>• PageSpeed optimizacija</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">SSL sertifikat i sigurnost</h3>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-green-800">HTTPS je obavezan za lokalne firme</h4>
                </div>
                <p className="text-green-700 mb-4">
                  SSL sertifikat nije samo sigurnosna mera - to je i SEO faktor. Google favorizuje HTTPS sajtove, a korisnici više veruju sigurnim sajtovima.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Prednosti HTTPS:</h5>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Bolje rangiranje u pretragama</li>
                      <li>• Povećano poverenje korisnika</li>
                      <li>• Brža komunikacija (HTTP/2)</li>
                      <li>• Sigurnost podataka</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Implementacija:</h5>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Let's Encrypt (besplatan SSL)</li>
                      <li>• 301 redirect sa HTTP</li>
                      <li>• Ažuriranje svih internal linkova</li>
                      <li>• HSTS implementacija</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Merenje i analitika */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-indigo-600" />
                Merenje uspeha lokalnog SEO-a
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Merenje performansi je ključno za razumevanje efikasnosti vaše lokalne SEO strategije. Evo najvažnijih metrika koje treba da pratite:
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ključne metrike za praćenje</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Search className="w-5 h-5 mr-2" />
                      Visibility metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Pozicije za lokalne ključne reči</li>
                      <li>• Broj impresija u lokalnim pretragama</li>
                      <li>• Google My Business views</li>
                      <li>• Pojavljivanje u Local Pack-u</li>
                      <li>• Voice search visibility</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <MousePointer className="w-5 h-5 mr-2" />
                      Engagement metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• CTR za lokalne pretrage</li>
                      <li>• Broj klikova na telefon</li>
                      <li>• Zahtevi za putanje</li>
                      <li>• Website posete sa GMB</li>
                      <li>• Vreme na sajtu</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Star className="w-5 h-5 mr-2" />
                      Reputation metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Broj novih recenzija</li>
                      <li>• Prosečna ocena</li>
                      <li>• Response rate na recenzije</li>
                      <li>• Sentiment analiza</li>
                      <li>• Review conversion rate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Conversion metrike
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Lokalni organic conversion rate</li>
                      <li>• Revenue iz lokalnih pretaga</li>
                      <li>• Broj novih lokalnih kupaca</li>
                      <li>• Lifetime value lokalnih kupaca</li>
                      <li>• Cost per acquisition</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Alati za praćenje lokalnog SEO-a</h3>

              <div className="space-y-6 mb-8">
                <Card className="bg-gradient-to-r from-red-50 to-yellow-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <Search className="w-5 h-5 mr-2" />
                      Google alati (besplatni)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Google Search Console:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Performance report</li>
                          <li>• Local search queries</li>
                          <li>• Mobile usability</li>
                          <li>• Core Web Vitals</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Google Analytics:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Local traffic analysis</li>
                          <li>• Geographic reports</li>
                          <li>• Conversion tracking</li>
                          <li>• Goal completion</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Google My Business Insights:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Search & maps views</li>
                          <li>• Customer actions</li>
                          <li>• Photo performance</li>
                          <li>• Competitor insights</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Profesionalni alati (plaćeni)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">Local rank tracking:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• BrightLocal</li>
                          <li>• Whitespark</li>
                          <li>• Local Falcon</li>
                          <li>• SERPWatcher</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">Citation management:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• Yext</li>
                          <li>• Moz Local</li>
                          <li>• BirdEye</li>
                          <li>• Reputation.com</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Kreiranje izveštaja o performansama</h3>

              <div className="bg-indigo-50 p-6 rounded-xl mb-8">
                <h4 className="font-semibold text-indigo-800 mb-4">Mesečni izvešta treba da sadrži:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Kvantitativni podaci:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Ranking pozicije (top 10 ključnih reči)</li>
                      <li>• Organic traffic iz lokalnih pretaga</li>
                      <li>• GMB views, clicks, calls</li>
                      <li>• Broj novih recenzija i prosečna ocena</li>
                      <li>• Conversion rate i ROI</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Kvalitativni insights:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Analiza konkurencije</li>
                      <li>• Trendovi u lokalnim pretragama</li>
                      <li>• Feedback iz recenzija</li>
                      <li>• Preporuke za sledeći mesec</li>
                      <li>• Identifikovane prilike</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Napredne tehnike */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-600" />
                Napredne tehnike lokalnog SEO-a
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Nakon što savladate osnove, vreme je za napredne tehnike koje će vam dati prednost nad konkurencijom i maksimalno povećati vašu lokalnu vidljivost.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Geo-targeted content strategija</h3>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-yellow-800 mb-4">Kreiranje location-specific content clusters:</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-yellow-700">Hub stranica za lokalnu oblast:</h5>
                    <p className="text-sm text-yellow-600 mb-2">Glavna stranica koja pokriva široku temu za ceo grad</p>
                    <p className="text-xs text-yellow-600 italic">Primer: "Kompletan vodič za veb dizajn u Beogradu"</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-yellow-700">Spoke stranice za kvartove:</h5>
                    <p className="text-sm text-yellow-600 mb-2">Specifične stranice za pojedinačne kvartove ili opštine</p>
                    <p className="text-xs text-yellow-600 italic">Primeri: "Veb dizajn Novi Beograd", "Veb dizajn Zemun", "Veb dizajn Vračar"</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-yellow-700">Supporting content:</h5>
                    <p className="text-sm text-yellow-600 mb-2">Blog posts, case studies, testimonials za svaku lokaciju</p>
                    <p className="text-xs text-yellow-600 italic">Primer: "5 preduzeća sa Vračara koja su transformisala biznis novim web sajtom"</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Local link building strategije</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <Users className="w-5 h-5 mr-2" />
                      Community involvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• Sponzorstvo lokalnih događaja</li>
                      <li>• Partnerstva sa školama i univerzitetima</li>
                      <li>• Humanitarne akcije</li>
                      <li>• Lokalni business awards</li>
                      <li>• Komora privrede članstvo</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <FileText className="w-5 h-5 mr-2" />
                      Content collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Guest posting na lokalnim blogovima</li>
                      <li>• Intervjui za lokalne medije</li>
                      <li>• Zajedničke press releases</li>
                      <li>• Podcast gostovanja</li>
                      <li>• Expert quotes za novinare</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Voice search optimization</h3>

              <p className="text-gray-700 mb-4">
                Sa rastom voice search pretaga (40% odraslih koristi voice search svakodnevno), optimizacija za glasovne pretrage postaje kritična:
              </p>

              <div className="bg-purple-50 p-6 rounded-xl mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">Karakteristike voice search:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>• Duže, konverzacijske pretrage</li>
                      <li>• Pitanja u prirodnom jeziku</li>
                      <li>• "Gde je najbliži..."</li>
                      <li>• "Koji je najbolji..."</li>
                      <li>• "Kada je otvoren..."</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-3">Optimizacija strategije:</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>• FAQ stranica sa prirodnim pitanjima</li>
                      <li>• Konverzacijski ton u sadržaju</li>
                      <li>• Optimizacija za featured snippets</li>
                      <li>• Lokalni modifikatori u sadržaju</li>
                      <li>• Precizne GMB informacije</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Google Posts strategija</h3>

              <p className="text-gray-700 mb-4">
                Google Posts su besplatna mogućnost za dodavanje sadržaja direktno u vaš GMB profil. Dobro iskorišćeni mogu značajno povećati engagement:
              </p>

              <div className="space-y-4 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Najbolje prakse za Google Posts:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Frekvencija i timing:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Minimum jednom nedeljno</li>
                          <li>• Tokom peak hours (9-17h)</li>
                          <li>• Posebno četvrtkom i petkom</li>
                          <li>• Pre vikenda za hospitality</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Content mix:</h5>
                        <ul className="text-sm space-y-1">
                          <li>• 40% promocije</li>
                          <li>• 30% edukativni sadržaj</li>
                          <li>• 20% iza kulisa</li>
                          <li>• 10% community content</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Hyperlocal SEO strategies</h3>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8">
                <h4 className="font-semibold text-indigo-800 mb-3">Kreiranje micro-location content-a:</h4>
                <p className="text-indigo-700 mb-4">
                  Umesto fokusiranja samo na glavni grad, kreirajte sadržaj za veoma specifične lokacije - kvartove, ulice, čak i blokove.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Micro-targeting primeri:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• "Frizerski salon Knez Mihailova"</li>
                      <li>• "Restoran Skadarlija 15"</li>
                      <li>• "Parking Zeleni Venac"</li>
                      <li>• "Kafić Studentski Trg"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Implementation:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Dedikovan sadržaj za svaku mikro-lokaciju</li>
                      <li>• Geotargeted objave na društvenim mrežama</li>
                      <li>• Specifične landing pages</li>
                      <li>• Lokalno specifični call-to-actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Česte greške */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="w-8 h-8 mr-3 text-red-600" />
                Česte greške u lokalnom SEO-u
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Mnoga preduzeća prave slične greške koje mogu značajno da naude njihovom lokalnom rangiranju. Evo najčešćih problema i kako ih izbegnuti:
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Greška #1: Nekonzistentne NAP informacije
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">Česti problemi:</h5>
                        <ul className="text-sm space-y-1 text-red-600">
                          <li>• Različiti formati adresa</li>
                          <li>• Stari telefoni na nekim sajtovima</li>
                          <li>• Skraćenice vs punu nazivi ulica</li>
                          <li>• Različiti nazivi preduzeća</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Rešenje:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Napravite standardizovan NAP format</li>
                          <li>• Redovno auditirajte sve profile</li>
                          <li>• Koristite alate za praćenje citata</li>
                          <li>• Dokumentujte sve promene</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Greška #2: Zanemarivanje Google My Business
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-orange-700 mb-2">Česti propusti:</h5>
                        <ul className="text-sm space-y-1 text-orange-600">
                          <li>• Nepopunjen profil (50% informacija)</li>
                          <li>• Stare ili loše fotografije</li>
                          <li>• Neodgovaranje na recenzije</li>
                          <li>• Retko ažuriranje sadržaja</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Rešenje:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Kompletiranje svih polja (100%)</li>
                          <li>• Dodavanje 20+ kvalitetnih fotografija</li>
                          <li>• Odgovaranje na sve recenzije</li>
                          <li>• Nedeljno objavljivanje content-a</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Smartphone className="w-5 h-5 mr-2" />
                      Greška #3: Loša mobilna optimizacija
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-purple-700 mb-2">Tipični problemi:</h5>
                        <ul className="text-sm space-y-1 text-purple-600">
                          <li>• Sporo učitavanje (>3s)</li>
                          <li>• Neresponsive design</li>
                          <li>• Teški za korišćenje dugmad</li>
                          <li>• Nedostaju click-to-call opcije</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Rešenje:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Mobile-first design pristup</li>
                          <li>• Optimizacija slika i brzine</li>
                          <li>• Velike, dodirljive dugmad</li>
                          <li>• Prominentni kontakt dugmad</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Search className="w-5 h-5 mr-2" />
                      Greška #4: Ignorisanje lokalnih ključnih reči
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">Česti pristupi:</h5>
                        <ul className="text-sm space-y-1 text-blue-600">
                          <li>• Fokus samo na generičke ključne reči</li>
                          <li>• Zanemarivanje "blizu mene" pretaga</li>
                          <li>• Nepravilno korišćenje geo-modifikatora</li>
                          <li>• Nedostatak lokalnog sadržaja</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Rešenje:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Istraživanje lokalnih ključnih reči</li>
                          <li>• Kreiranje location-specific stranica</li>
                          <li>• Prirodno uključivanje geo-modifikatora</li>
                          <li>• Lokalnu relevantni blog sadržaj</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <Clock className="w-5 h-5 mr-2" />
                      Greška #5: Nedoslednost u ažuriranju
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Problematično ponašanje:</h5>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>• Mesecima bez novih objava</li>
                          <li>• Zastarele informacije o radu</li>
                          <li>• Nepromena sezonskih informacija</li>
                          <li>• Ignorisanje negativnih recenzija</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Rešenje:</h5>
                        <ul className="text-sm space-y-1 text-green-600">
                          <li>• Kreiranje content kalendara</li>
                          <li>• Postavke redovnih reminders</li>
                          <li>• Delegiranje odgovornosti</li>
                          <li>• Korišćenje automatizacijskih alata</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Budućnost */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                Budućnost lokalnog SEO-a
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                Lokalni SEO se brzo razvija sa napretkom tehnologije. Evo ključnih trendova koji će oblikovati budućnost lokalnog search marketing-a:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Smartphone className="w-5 h-5 mr-2" />
                      AI i mašinsko učenje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-700">
                      <li>• RankBrain algoritam za bolje razumevanje intent-a</li>
                      <li>• Personalizacija rezultata na osnovu istorije</li>
                      <li>• Predictive search i auto-suggestions</li>
                      <li>• Chatbot integracija za lokalne upite</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-800">
                      <Eye className="w-5 h-5 mr-2" />
                      Visual i augmented reality
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Google Lens za visual search</li>
                      <li>• AR objave u Google My Business</li>
                      <li>• 360° fotografije i virtual tours</li>
                      <li>• Video previews u search rezultatima</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-gradient-to-br from-green-50 to-teal-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Voice i konverzacijski search
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• Rast voice search pretaga (50% do 2025)</li>
                      <li>• Zero-click search rezultati</li>
                      <li>• Optimizacija za smart speakers</li>
                      <li>• Konverzacijski AI assistenti</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Zap className="w-5 h-5 mr-2" />
                      Hyperlocal targeting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Preciznost do metra u geotargeting-u</li>
                      <li>• Real-time location-based sadržaj</li>
                      <li>• Integration sa IoT devices</li>
                      <li>• Micro-moment optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Priprema za budućnost</h3>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border-l-4 border-indigo-400">
                <h4 className="font-semibold text-indigo-800 mb-4">Ključne strategije za adaptaciju:</h4>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Tehnološka priprema:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Implementacija najnovijih Schema markups</li>
                      <li>• Optimizacija za Core Web Vitals</li>
                      <li>• Progressive Web App (PWA) funkcionalnosti</li>
                      <li>• API-first pristup za integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-3">Content strategija:</h5>
                    <ul className="text-sm space-y-1 text-indigo-600">
                      <li>• Fokus na intent-based content</li>
                      <li>• Multimodalni sadržaj (text, video, audio)</li>
                      <li>• Real-time content capabilities</li>
                      <li>• Community-driven content creation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Zaključak */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-gold-600" />
                Zaključak i sledeći koraci
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl mb-8 border-l-4 border-green-500">
                <p className="text-lg text-gray-700 mb-6">
                  Lokalni SEO nije samo marketing tehnika - to je investicija u dugoročni uspeh vašeg preduzeća. U digitalnom svetu gde 97% potrošača traži lokalne firme online, biti nevidljiv na internetu znači gubiti milijarde potencijalnih kupaca.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  Kroz ovaj detaljan vodič, videli smo da uspešan lokalni SEO zahteva holistički pristup - od tehnične optimizacije i Google My Business profila, do izgradnje reputacije i kreiranje kvalitetnog lokalnog sadržaja. Svaki od ovih elemenata igra ključnu ulogu u vašoj ukupnoj vidljivosti.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Vaš akcioni plan za narednih 90 dana</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-center text-green-800">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      Prvi mesec
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-green-700 mb-2">Osnove i audit:</h5>
                    <ul className="text-sm space-y-1 text-green-600">
                      <li>• Kompletan Google My Business setup</li>
                      <li>• NAP konzistentnost audit</li>
                      <li>• Konkurentska analiza</li>
                      <li>• Keyword research za lokalnu oblast</li>
                      <li>• Tehnički SEO audit</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-center text-blue-800">
                      <Target className="w-8 h-8 mx-auto mb-2" />
                      Drugi mesec
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-blue-700 mb-2">Optimizacija i sadržaj:</h5>
                    <ul className="text-sm space-y-1 text-blue-600">
                      <li>• Schema markup implementacija</li>
                      <li>• Lokalni citati izgradnja</li>
                      <li>• Content strategija kreiranje</li>
                      <li>• Review management setup</li>
                      <li>• Local link building početak</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-center text-purple-800">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                      Treći mesec
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold text-purple-700 mb-2">Skaliranje i analitika:</h5>
                    <ul className="text-sm space-y-1 text-purple-600">
                      <li>• Performance tracking setup</li>
                      <li>• Content production scaling</li>
                      <li>• Advanced SEO techniques</li>
                      <li>• Community engagement</li>
                      <li>• ROI analiza i optimizacija</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Poslednji saveti za uspeh</h4>
                    <ul className="text-yellow-700 space-y-2">
                      <li>• <strong>Budite strpljivi:</strong> Rezultati lokalnog SEO se obično vide nakon 3-6 meseci</li>
                      <li>• <strong>Budite konzistentni:</strong> Redovan rad daje bolje rezultate od povremenih napora</li>
                      <li>• <strong>Pratite konkurenciju:</strong> Analizirajte šta rade uspešni konkurenti</li>
                      <li>• <strong>Fokusirajte se na kupce:</strong> Sve optimizacije treba da poboljšavaju korisničko iskustvo</li>
                      <li>• <strong>Merite i prilagođavajte:</strong> Koristite podatke za kontinuirano poboljšanje</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold mb-4">Spremni ste da pokrenete vaš lokalni SEO?</h4>
                <p className="text-lg mb-6">
                  Sa znanjem iz ovog vodiča, imate sve što je potrebno da povećate vidljivost vašeg preduzeća i privučete više lokalnih kupaca. Vreme je da počnete sa implementacijom!
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Počnite danas
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Share2 className="w-4 h-4 mr-2" />
                    Podelite vodič
                  </Button>
                </div>
              </div>
            </section>

            {/* Quiz sekcija */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Testirajte vaše znanje!</h3>
                <p className="text-gray-600">Proverite koliko ste savladali lokalni SEO kroz ovaj kviz</p>
              </div>

              <Quiz questions={quizQuestions} />
            </div>

            {/* CTA sekcija */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Potrebna vam je pomoć sa lokalnim SEO-om?</h3>
              <p className="text-lg mb-6">
                Naš tim eksperata može da vam pomogne da implementirate sve strategije iz ovog vodiča i postignete maksimalne rezultate za vaše lokalno preduzeće.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Zakažite konsultacije
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Pošaljite upit
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle24;