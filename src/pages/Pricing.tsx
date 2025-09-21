import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const mainPlans = [
    {
      name: "Osnovni Paket",
      price: "50",
      originalPrice: "100",
      description: "Idealno za manje biznise i startupe",
      icon: Zap,
      features: [
        "1 strana sa sekcijama ili do 3 manje strane",
        "Domen (.online/.store/.shop) na 1 godinu",
        "Hosting uključen – do ~10.000 poseta mesečno",
        "Responzivan dizajn (mobilni/desktop)",
        "Osnovna SEO optimizacija (meta podaci, favicon)",
        "Kontakt forma (prosleđivanje na mejl)",
        "Jedna isporuka – brza i efikasna"
      ],
      popular: true,
      note: "50€ ako dostavite materijal | 100€ ako mi pripremamo sadržaj",
      renewal: "50€/godišnje"
    },
    {
      name: "Mikro Sajtovi",
      price: "200",
      description: "5 sajtova za cenu jednog",
      icon: Star,
      features: [
        "5 manjih sajtova (do 2 strane po sajtu)",
        "5 domena (1 godina uključena)",
        "Limit poseta: do ~2.000 mesečno po sajtu",
        "Jednokratna isporuka, bez revizija",
        "Idealno za više projekata"
      ],
      popular: false,
      note: "500€ ako mi pišemo sadržaj (1 revizija po sajtu)",
      renewal: "50€ po sajtu ili 200€ za svih 5"
    },
    {
      name: "Shop Start",
      price: "150",
      description: "Osnovna online prodavnica",
      icon: Crown,
      features: [
        "Do 10 proizvoda",
        "Forma za naručivanje",
        "Pouzeće, lično preuzimanje, slanje na račun",
        "Notifikacija narudžbine na e-mail",
        "Responzivan dizajn",
        "Osnovna SEO optimizacija"
      ],
      popular: false,
      note: "Kartično plaćanje/online/kripto: od 250€",
      addon: true
    }
  ];

  const subscriptionServices = [
    {
      name: "AI Auto Blog",
      price: "200",
      period: "godišnje",
      description: "Automatsko kreiranje i objava dnevnih postova optimizovanih za SEO"
    },
    {
      name: "Mesečna Analitika",
      price: "20",
      period: "mesečno",
      description: "Izveštaj o posetama, najposećenijim stranicama i preporuke za rast"
    },
    {
      name: "Održavanje sajta",
      price: "20",
      period: "mesečno",
      description: "Redovna ažuriranja i backup"
    }
  ];

  const addons = [
    { name: "Mala izmena / manja dopuna", price: "10", note: "Promena broja telefona, jedne slike..." },
    { name: "Paket manjih izmena", price: "30", note: "Do 5 izmena odjednom" },
    { name: "Dodatna strana", price: "20", note: "Statička strana (Galerija, O nama)" },
    { name: "Blog / CMS (ručno)", price: "50", note: "Za članke ili novosti" },
    { name: "Višejezična verzija", price: "30", note: "Po jeziku - klijent obezbeđuje prevod" },
    { name: "Logo ili mini brending paket", price: "50", note: "Logo + boje i fontovi" },
    { name: "SEO Start paket", price: "50", note: "Naprednija optimizacija" },
    { name: "Google Business profil", price: "20", note: "Kreiranje i optimizacija naloga" },
    { name: "Newsletter integracija", price: "25", note: "Mailchimp ili sličan servis" },
    { name: "Fotografisanje lokala/proizvoda", price: "70", note: "Cena zavisi od lokacije i broja fotografija" },
    { name: "Pisanje kompletnog sadržaja", price: "40", note: "Po stranici" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Brzi i pristupačni sajtovi
            </h1>
            <p className="text-xl text-muted-foreground">
              Od 50€ do kompletne online prodavnice. Bez skrivenih troškova - jednaokratno plaćanje uključuje celu prvu godinu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naši paketi za izradu sajtova
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brzo, jeftino i kvalitetno - odaberite paket koji vam odgovara
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'border-primary scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                    Najpopularniji
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <plan.icon className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-foreground">
                      €{plan.price}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground mt-1">
                        ({plan.note})
                      </div>
                    )}
                    <div className="text-sm text-primary mt-2 font-medium">
                      Obnova: {plan.renewal}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {(plan.note || plan.addon) && (
                    <div className="p-3 bg-secondary rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        {plan.note}
                      </p>
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/kontakt">
                      Poruči {plan.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Website Note */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Kompleksniji sajtovi po meri?</CardTitle>
                <CardDescription className="text-base">
                  Za složene projekte, custom funkcionalnosti i specifične zahteve - kontaktirajte nas za personalizovanu ponudu
                </CardDescription>
                <Button variant="outline" size="lg" asChild className="mt-4">
                  <Link to="/kontakt">Kontaktiraj nas za custom ponudu</Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Services */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pretplatne usluge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kontinuirane usluge za rast i održavanje vašeg sajta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {subscriptionServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    €{service.price}<span className="text-sm text-muted-foreground">/{service.period}</span>
                  </div>
                  <CardDescription className="text-sm mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dodatne usluge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proširite funkcionalnost vašeg sajta sa našim dodatnim uslugama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addons.map((addon, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    €{addon.price}{addon.price.includes("od") ? "" : ""}
                  </div>
                  <CardDescription className="text-sm mt-2">
                    {addon.note}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal Pricing */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Godišnja obnova
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Održite svoj sajt aktivnim sa našim planovima obnove
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Standardna obnova</CardTitle>
                <div className="text-3xl font-bold text-primary">€50</div>
                <CardDescription>
                  Nastavak domene i hostinga (za .com/.net/.org/.rs domene)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Pro plan</CardTitle>
                <div className="text-3xl font-bold text-primary">€300</div>
                <CardDescription>
                  Za veći promet i dodatne resurse
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              ⚠️ Ako se sajt ne produži, sajt prestaje da bude dostupan
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Često postavljana pitanja
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Da li su cene konačne?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Da, naše cene su transparentne i finalne. Osnovni paket od 50€ uključuje celu prvu godinu hostinga i domene.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Šta ako ne dostavim materijal?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ako ne dostavite tekst, slike i boje, mi ćemo pripremiti osnovni sadržaj za 100€ (uključena 1 revizija).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kako funkcioniše isporuka?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jedna isporuka - pošaljete materijal u jednom mejlu, mi šaljemo provremeni link, nakon odobrenja povezujemo domen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Šta se dešava posle prve godine?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Obnova je 50€/godišnje. Ako se ne obnovi, sajt prestaje da bude dostupan. Za veći promet - Pro plan 300€/godišnje.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Da li mogu dodatne izmene?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nakon odobrenja i puštanja sajta, sve dodatne izmene naplaćuju se po cenovniku (od 10€ za malu izmenu).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Koliko poseta pokriva hosting?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Osnovni paket pokriva do ~10.000 poseta mesečno. Za veći promet potreban je prelazak na Pro plan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Spremni za početak?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju za vaš projekat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Kontaktiraj nas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/portfolio">Pogledaj portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;