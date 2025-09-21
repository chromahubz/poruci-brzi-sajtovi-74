import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Target, TrendingUp, Users, Globe, Zap, CheckCircle, Star, ArrowUp, Eye, Clock, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle4 = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Search className="w-6 h-6" />
              <span className="text-sm font-medium">SEO OPTIMIZACIJA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              SEO optimizacija sajta - Kako biti prvi na Google-u
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Otkrijte tajne SEO optimizacije koje će vaš sajt dovesti na vrh Google pretrage. Praktični vodič kroz sve aspekte moderne SEO strategije.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>15 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>Poslednje ažuriranje: Januar 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                U digitalnom svetu 2025. godine, biti vidljiv na Google-u nije više luksuz - to je osnovna potreba svakog biznisa. Da li ste znali da 93% online iskustava počinje pretraživanjem, a da 75% korisnika nikad ne pogleda drugu stranu Google rezultata? Ovo znači da ako vaš sajt nije među prva 10 rezultata, praktično ste nevidljivi za potencijalne klijente.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                SEO (Search Engine Optimization) optimizacija nije samo tehnika - to je umetnost kombinovanja tehničkih znanja, kvalitetnog sadržaja i razumevanja korisničkog ponašanja. U ovom detaljnom vodiču, podelićemo sa vama sve što trebate da znate o SEO optimizaciji u 2025. godini, od osnovnih principa do naprednih strategija koje koriste vodeći svetski brendovi.
              </p>
            </div>

            {/* What is SEO */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-primary" />
                  <span>Šta je SEO optimizacija?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  SEO optimizacija je proces poboljšanja vidljivosti vašeg sajta u organskim (neplaćenim) rezultatima pretraživanja. To znači da kada neko pretražuje proizvod ili uslugu koju vi nudite, vaš sajt treba da se pojavi što je više moguće na listi rezultata.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Search className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">Pretraživanje</h4>
                    <p className="text-sm text-muted-foreground">Korisnik pretražuje informaciju</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <BarChart className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">Rangiranje</h4>
                    <p className="text-sm text-muted-foreground">Google rangira rezultate</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <ArrowUp className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">Pozicija</h4>
                    <p className="text-sm text-muted-foreground">Vaš sajt se pojavljuje visoko</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why SEO Matters */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span>Zašto je SEO ključan za vaš biznis?</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Možda se pitate zašto je SEO toliko važan kada možete da plaćate Google Ads? Odgovor leži u psihologiji korisnika i dugoročnoj profitabilnosti. Istraživanja pokazuju da korisnici 5 puta češće kliknu na organske rezultate nego na plaćene oglase. Više od toga, 70% marketara smatra da je SEO efikasnija strategija od PPC oglašavanja za generisanje prodaje.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Finansijske prednosti</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Besplatan dugoročan saobraćaj</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">ROI od 2,500% u proeku</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Niži troškovi od plaćenih oglasa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Stabilan izvor posetilaca</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Kredibilitet i poverenje</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Povećanje brenda i autoriteta</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Bolje korisničko iskustvo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Dugoročna konkurentska prednost</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Poboljšana konverzija</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Prema studiji BrightEdge-a, organski search generiše 53% sveukupnog web saobraćaja, što je značajno više od bilo kojeg drugog kanala. Ovo znači da ignorisanje SEO-a znači ignorisanje najvećeg potencijalnog izvora vaših klijenata. Kompanija koja se pojavljuje na prvoj poziciji Google pretrage ima prosečnu CTR (Click-Through Rate) od 31.7%, dok već druga pozicija ima samo 24.71%.
              </p>
            </div>

            {/* Key SEO Elements */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Zap className="w-8 h-8 text-primary" />
                <span>Ključni elementi SEO optimizacije</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Savremeni SEO se sastoji od tri glavna stuba: tehnička optimizacija, sadržaj, i autoritet (linkovi). Svaki od ovih elemenata mora biti pažljivo planiran i implementiran da bi se postigao maksimalni uspeh. Google algoritam koristi preko 200 različitih faktora za rangiranje sajtova, ali fokusiranje na ove ključne oblasti će vam doneti 80% rezultata.
              </p>

              {/* Technical SEO */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Globe className="w-6 h-6 text-primary" />
                    <span>1. Tehnička SEO optimizacija</span>
                  </CardTitle>
                  <CardDescription>
                    Osnova na kojoj se gradi sve ostalo - tehnički ispravna struktura sajta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Brzina učitavanja sajta</h4>
                    <p className="text-muted-foreground">
                      Google je zvanično potvrdio da je brzina sajta faktor rangiranja još 2010. godine, a sa uvođenjem Core Web Vitals u 2021, ova metrika je postala još važnija. Sajt koji se učitava brže od 3 sekunde ima značajno bolju šansu za visoko rangiranje. Evo zašto je brzina kritična:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">40% korisnika napušta sajt ako se učitava duže od 3 sekunde</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">1 sekunda kašnjenja može smanjiti konverzije za 7%</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Google favorizuje brže sajtove u mobilnim pretragama</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Poboljšanje brzine za 1 sekunu može povećati saobraćaj za 25%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Mobilna optimizacija</h4>
                    <p className="text-muted-foreground">
                      Od 2018. godine Google koristi "mobile-first indexing", što znači da najpre analizira mobilnu verziju vašeg sajta. Sa preko 58% web saobraćaja koji dolazi sa mobilnih uređaja, mobilna optimizacija nije opcija - to je neophodnost. Ključni elementi uključuju:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Responzivni dizajn koji se prilagođava svim veličinama ekrana</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Optimizovane slike za mobilne uređaje</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Lako navigiranje prstom (touch-friendly)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Brzo učitavanje na sporije mobilnoj mreži</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">SSL sertifikat i HTTPS</h4>
                    <p className="text-muted-foreground">
                      Google tretira HTTPS kao faktor rangiranja od 2014. godine. Sajt bez SSL sertifikata (koji počinje sa http://) će biti označen kao "nesiguran" u svim modernim web pretraživačima, što može značajno smanjiti poverenje korisnika i konverzije.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">XML Sitemap i robots.txt</h4>
                    <p className="text-muted-foreground">
                      XML sitemap pomaže Google-u da efikasnije indeksira vaš sajt, dok robots.txt fajl kontroliše koje stranice search engine botovi mogu da crawluju. Ovi tehnički elementi su nevidljivi korisnicima, ali kritični za SEO uspeh.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Content SEO */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span>2. Optimizacija sadržaja</span>
                  </CardTitle>
                  <CardDescription>
                    Kvalitetan, relevantan sadržaj koji odgovara na pitanja vaših korisnika
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Istraživanje ključnih reči</h4>
                    <p className="text-muted-foreground">
                      Sve počinje razumevanjem kako vaši potencijalni klijenti pretražuju. Efikasno istraživanje ključnih reči nije samo nalaženje popularnih termina - to je razumevanje "search intent" - namere korisnika iza pretrage. Postoje četiri osnovna tipa search intent:
                    </p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-xs font-bold text-blue-600">I</span>
                        </div>
                        <div>
                          <span className="font-medium">Informacijski:</span>
                          <span className="text-muted-foreground text-sm"> Korisnik traži informacije ("kako napraviti sajt", "šta je SEO")</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-xs font-bold text-green-600">N</span>
                        </div>
                        <div>
                          <span className="font-medium">Navigacijski:</span>
                          <span className="text-muted-foreground text-sm"> Korisnik traži određeni sajt ("Facebook login", "Gmail")</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-xs font-bold text-yellow-600">T</span>
                        </div>
                        <div>
                          <span className="font-medium">Transakcijski:</span>
                          <span className="text-muted-foreground text-sm"> Korisnik je spreman za kupovinu ("kupi iPhone", "cena izrade sajta")</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                          <span className="text-xs font-bold text-purple-600">K</span>
                        </div>
                        <div>
                          <span className="font-medium">Komercijski:</span>
                          <span className="text-muted-foreground text-sm"> Korisnik istražuje pre kupovine ("najbolji laptop 2025", "WordPress vs Shopify")</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Optimizacija naslova i meta opisa</h4>
                    <p className="text-muted-foreground">
                      Title tag i meta description su prvi elementi koje korisnici vide u Google rezultatima. Title tag je i dalje jedan od najjačih on-page SEO faktora. Idealno, title tag treba da bude između 50-60 karaktera, da sadrži glavnu ključnu reč na početku, i da bude dovoljno privlačan da motiviše klik.
                    </p>
                    <p className="text-muted-foreground">
                      Meta description, iako nije direktan faktor rangiranja, utiče na CTR (Click-Through Rate), što indirektno utiče na poziciju. Dobra meta description treba da bude između 150-160 karaktera, da sadrži ključnu reč, i da jasno objasni korist koji korisnik može da očekuje.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Struktura sadržaja i H tagovi</h4>
                    <p className="text-muted-foreground">
                      Pravilno korišćenje H1, H2, H3 tagova ne samo da pomaže Google-u da razume strukturu vašeg sadržaja, već i poboljšava korisničko iskustvo. H1 tag treba da postoji samo jednom po stranici i da sadrži glavnu ključnu reč. H2 tagovi se koriste za glavne sekcije, a H3 za podsekcije.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Kvalitet i relevantnost sadržaja</h4>
                    <p className="text-muted-foreground">
                      Google E-A-T (Expertise, Authoritativeness, Trustworthiness) standardi zahtevaju da sadržaj bude stručan, autoritativan i pouzdan. To znači da morate da demonstrirate ekspertizu u svojoj oblasti, da citirate pouzdane izvore, i da redovno ažurirate sadržaj sa najnovijim informacijama.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Link Building */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                    <span>3. Link building i autoritet</span>
                  </CardTitle>
                  <CardDescription>
                    Izgradnja autoriteta kroz kvalitetne eksterne linkove
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Značaj backlink-ova</h4>
                    <p className="text-muted-foreground">
                      Backlink-ovi su i dalje jedan od tri najvažnija faktora Google algoritma. Oni predstavljaju "glasove poverenja" od drugih sajtova. Ali ne svi linkovi su jednaki - jedan link sa autoritativnog sajta kao što je npr. BBC ili New York Times vredi više od 100 linkova sa slabijih sajtova.
                    </p>
                    <p className="text-muted-foreground">
                      Kvalitet link-a se meri preko Domain Authority (DA), Page Authority (PA), relevantnosti sadržaja, i konteksta u kom se link pojavljuje. Link iz relevantnog članka o web dizajnu na poznatom tech blogu će biti značajno vredniji od linka iz komentara na random forumu.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Strategije za dobijanje linkova</h4>
                    <p className="text-muted-foreground">
                      Najteže je dobiti prve kvalitetne linkove, ali postoji nekoliko proverenih strategija:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Gostovanje na relevantnim blogovima (guest posting)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Kreiranje linkable assets (infografici, istraživanja, alati)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Broken link building - nalaženje pokvarenih linkova i predlaganje zamene</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">HARO (Help A Reporter Out) - pomaganje novinarima i dobijanje linkova</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm">Digitalni PR i odnosi sa medijima</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Interni link building</h4>
                    <p className="text-muted-foreground">
                      Često zanemarena, ali moćna SEO taktika je strategijsko linkovanje između vaših stranica. Interni linkovi pomažu Google-u da razume strukturu vašeg sajta, distribuiraju "link juice" kroz sajt, i zadržavaju korisnike duže na sajtu što poboljšava korisničko iskustvo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Local SEO */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Globe className="w-8 h-8 text-primary" />
                <span>Lokalni SEO za srpske kompanije</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Za kompanije koje posluju u Srbiji, lokalni SEO može biti izuzetno profitabilan. Preko 46% svih Google pretraga ima lokalni intent, što znači da ljudi traže usluge u svojoj blizini. Za pravilnu optimizaciju lokalnog SEO-a potrebno je fokusirati se na Google My Business profil, lokalne ključne reči, i NAP (Name, Address, Phone) konzistentnost.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Google My Business optimizacija</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Google My Business (sada Google Business Profile) je besplatan alat koji može doneti značajan broj klijenata. Kompletno popunjen profil sa redovnim objavama, odgovorima na recenzije, i ažurnim informacijama može povećati vidljivost u lokalnim pretragama za 70%.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm">Kompletne poslovne informacije (adresa, telefon, radno vreme)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm">Kvalitetne fotografije proizvoda/usluga i prostora</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm">Redovne objave i najavljene akcije</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm">Aktivno odgovaranje na korisničke recenzije</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm">Korišćenje relevantnih kategorija i atributa</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* SEO Tools */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Target className="w-8 h-8 text-primary" />
                <span>Nezamenljivi SEO alati za 2025</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Profesionalniraj SEO zahteva korišćenje pravih alata za analizu, praćenje i optimizaciju. Evo liste najvažnijih besplatnih i plaćenih alata koji će vam pomoći da postignete bolje rezultate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Besplatni alati</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium">Google Search Console</h4>
                      <p className="text-sm text-muted-foreground">Najvažniji besplatni alat - pokazuje kako Google vidi vaš sajt</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Google Analytics 4</h4>
                      <p className="text-sm text-muted-foreground">Detaljno praćenje poseta, konverzija i korisničkog ponašanja</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Google PageSpeed Insights</h4>
                      <p className="text-sm text-muted-foreground">Analiza brzine sajta i Core Web Vitals</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Ubersuggest</h4>
                      <p className="text-sm text-muted-foreground">Besplatno istraživanje ključnih reči (ograničeno)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Profesionalni alati</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium">Ahrefs</h4>
                      <p className="text-sm text-muted-foreground">Najbolji alat za backlink analizu i istraživanje konkurencije</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">SEMrush</h4>
                      <p className="text-sm text-muted-foreground">Kompletna SEO platforma sa keyword research i site audit</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Screaming Frog</h4>
                      <p className="text-sm text-muted-foreground">Tehnička SEO analiza - skeniranje svih stranica sajta</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Moz Pro</h4>
                      <p className="text-sm text-muted-foreground">Praćenje rangiranja i lokalnog SEO</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Users className="w-8 h-8 text-primary" />
                <span>Najčešće SEO greške koje koštaju pozicije</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Kroz godine rada sa stotinama klijenata, primetili smo greške koje se ponavljaju. Ove greške mogu poništiti mesece rada na SEO optimizaciji, ali dobra vest je da se lako mogu ispraviti kada ih identifikujete:
              </p>

              <div className="space-y-4">
                <Card className="border-red-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">1</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-700">Keyword stuffing - preopterećivanje ključnim rečima</h4>
                        <p className="text-sm text-muted-foreground">
                          Unethical ponavljanje iste ključne reči može rezultovati Google penalom. Moderan SEO zahteva prirodno korišćenje ključnih reči i njihovih sinonima.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">2</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-700">Ignorisanje Core Web Vitals</h4>
                        <p className="text-sm text-muted-foreground">
                          Spori sajt neće dobro rankirane bez obzira na kvalitet sadržaja. LCP, FID i CLS metriki su kritični za uspeh.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">3</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-700">Kupovina nekvalitetnih backlink-ova</h4>
                        <p className="text-sm text-muted-foreground">
                          Link farmovi i PBN (Private Blog Networks) mogu dovesti do manuelne Google penala koji je težak za oporavak.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">4</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-700">Nedoslednost u NAP podacima</h4>
                        <p className="text-sm text-muted-foreground">
                          Različito napisana imena, adrese ili telefoni kroz web mogu konfundovati Google i naštetiti lokalnom SEO.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">5</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-red-700">Zanemarivanje mobilne optimizacije</h4>
                        <p className="text-sm text-muted-foreground">
                          Sa mobile-first indexing, sajt koji nije optimizovan za mobilne uređaje neće dobro rangirati.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* SEO Timeline */}
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Clock className="w-8 h-8 text-primary" />
                <span>Koliko dugo traju SEO rezultati?</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Jedno od najčešćih pitanja koje dobijamo je "kada ću videti rezultate?" SEO nije overnight success - to je dugoročna investicija koja se isplaćuje kroz vreme. Evo realnog okvira šta možete očekivati:
              </p>

              <div className="space-y-4">
                <Card className="border-blue-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1-3</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-700">Meseci 1-3: Tehnička osnova</h4>
                        <p className="text-sm text-muted-foreground">
                          Implementacija tehničkih optimizacija, popravka grešaka, poboljšanje brzine sajta. Rani signali poboljšanja u Google Search Console.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600 font-bold">3-6</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-yellow-700">Meseci 3-6: Prvi rezultati</h4>
                        <p className="text-sm text-muted-foreground">
                          Pojavljuju se prva poboljšanja u rangiranju za long-tail ključne reči. Povećanje organskog saobraćaja za 15-25%.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold">6-12</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-700">Meseci 6-12: Značajan rast</h4>
                        <p className="text-sm text-muted-foreground">
                          Rangiranje za konkurentne ključne reči, povećanje autoriteta domena. Organki saobraćaj raste 50-100%.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">12+</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-purple-700">12+ meseci: Dominacija</h4>
                        <p className="text-sm text-muted-foreground">
                          Stabilne top pozicije za glavne ključne reči, status autoriteta u industriji. Organicki saobraćaj postaje primaran izvor klijenata.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Važno je napomenuti da rezultati zavise od mnogih faktora: konkurentnosti industrije, trenutnog stanja sajta, budžeta za SEO, i konzistentnosti u implementaciji. Sajt koji kreće od nule će trebati više vremena od sajta koji već ima osnovnu SEO strukturu.
              </p>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-primary text-primary-foreground mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Spremni da vaš sajt bude prvi na Google-u?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Naš tim SEO stručnjaka će vam pomoći da postignete vrhunske rezultate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm opacity-90">
                  Kontaktirajte nas danas za besplatnu SEO analizu vašeg sajta i saznajte kako možemo poboljšati vašu vidljivost na Google-u.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" asChild size="lg">
                    <Link to="/kontakt">
                      <Search className="w-4 h-4 mr-2" />
                      Besplatna SEO analiza
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild size="lg">
                    <Link to="/cene">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Pogledaj cene
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Conclusion */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Zaključak</h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                SEO optimizacija u 2025. godini je kompleksna disciplina koja zahteva strateški pristup, tehnička znanja, i strpljenje. Nije dovoljno samo "baciti" ključne reči na sajt i nadati se najboljem. Moderni SEO zahteva holistic pristup koji kombinuje tehničku izvrsnost, kvalitetan sadržaj, i pravu marketing strategiju.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Kompanija koje investiraju u profesionalnu SEO optimizaciju ne samo da dobijaju više posetilaca - one grade dugoročnu konkurentsku prednost. Dok vaša konkurencija troši novac na plaćene oglase, vi možete da uživate u besplatnom, kvalitetnom saobraćaju koji stiže mesecima ili čak godinama nakon initialne investicije.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Zapamtite: SEO nije troškova - to je investicija u budućnost vašeg biznisa. Svaki dan kada vaš sajt nije optimizovan je dan kada vaša konkurencija možda dobija klijente koje bi vi trebali da imate.
              </p>
            </div>

          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Povezani članci
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Saznajte više o web razvoju i digitalnom marketingu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/1" className="hover:text-primary transition-colors">
                    Izrada sajta za 50€ - Da li je to realno?
                  </Link>
                </CardTitle>
                <CardDescription>
                  Istina o jeftinoj izradi sajtova i šta možete očekivati
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/1">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/2" className="hover:text-primary transition-colors">
                    Domen za sajt - Kako odabrati najbolje ime
                  </Link>
                </CardTitle>
                <CardDescription>
                  Vodič kroz izbor domena koji će pokrenuti vaš uspeh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/2">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link to="/blog/3" className="hover:text-primary transition-colors">
                    Responsive sajt dizajn - Zašto je mobilni prikaz ključan
                  </Link>
                </CardTitle>
                <CardDescription>
                  Sve o mobile-first pristupu u web dizajnu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild size="sm">
                  <Link to="/blog/3">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle4;