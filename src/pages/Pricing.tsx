import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { Check, Star, Zap, Crown, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hasOwnMaterials: true,
    websiteText: "",
    colorPreferences: "",
    imageDescription: "",
    domainPreference: ""
  });

  const handlePlanSelect = (planIndex: number) => {
    setSelectedPlan(planIndex);
    setOpen(true);
    // Reset form when opening modal
    setFormData({ name: "", email: "", phone: "", message: "", hasOwnMaterials: true, websiteText: "", colorPreferences: "", imageDescription: "", domainPreference: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Hvala na porudžbini!",
      description: "Upravo smo vam poslali mejl za dodatne informacije.",
    });
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", message: "", hasOwnMaterials: true, websiteText: "", colorPreferences: "", imageDescription: "", domainPreference: "" });
    setOpen(false);
    setSelectedPlan(null);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentPrice = () => {
    if (selectedPlan === null) return 0;
    const basePlan = mainPlans[selectedPlan];
    if (basePlan.isCustom) return 0;

    const basePrice = parseInt(basePlan.price);

    // For Osnovni Paket, pricing depends on materials
    if (selectedPlan === 0) { // Osnovni Paket
      return formData.hasOwnMaterials ? 50 : 100;
    }

    // For Mikro Sajtovi, pricing depends on materials
    if (selectedPlan === 1) { // Mikro Sajtovi
      return formData.hasOwnMaterials ? 200 : 500;
    }

    return basePrice;
  };

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
      renewal: "50€/godišnje",
      isPromo: true
    },
    {
      name: "Mikro Sajtovi",
      price: "200",
      description: "5 sajtova za cenu jednog",
      icon: Star,
      features: [
        "5 manjih sajtova (do 2 strane po sajtu)",
        "5 domena (.online/.store/.shop - 1 godina uključena)",
        "Limit poseta: do ~10.000 mesečno po sajtu",
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
      originalPrice: "300",
      description: "Osnovna online prodavnica", 
      icon: Crown,
      features: [
        "Do 10 proizvoda",
        "Forma za naručivanje",
        "Pouzeće, lično preuzimanje, slanje na račun",
        "Notifikacija narudžbine na e-mail",
        "Responzivan dizajn",
        "Osnovna SEO optimizacija",
        "Limit poseta: do ~10.000 mesečno"
      ],
      popular: false,
      note: "Za integraciju online plaćanja kontaktirajte za više detalja",
      renewal: "150€/godišnje",
      isPromo: true,
      addon: true
    },
    {
      name: "Shop Pro",
      price: "500",
      description: "Napredna online prodavnica za ozbiljan biznis",
      icon: Crown,
      features: [
        "Do 50 proizvoda",
        "Forma za naručivanje",
        "Pouzeće, lično preuzimanje, slanje na račun",
        "Notifikacija narudžbine na e-mail",
        "Responzivan dizajn",
        "Napredna SEO optimizacija",
        "Neograničen broj poseta",
        "Prioritetna tehnička podrška"
      ],
      popular: false,
      note: "Za integraciju online plaćanja kontaktirajte za više detalja",
      renewal: "300€/godišnje"
    },
    {
      name: "Auto Blog",
      price: "200",
      description: "Blog piše relevantan sadržaj i na svakoj objavi preusmerava na vaš glavni sajt",
      icon: Star,
      features: [
        "Automatsko kreiranje postova",
        "SEO optimizacija",
        "Dnevna objava sadržaja",
        "Analitika performansi",
        "Ključne reči targeting",
        "Domen (.online/.blog - 1 godina uključena)",
        "Limit poseta: do ~10.000 mesečno"
      ],
      popular: false,
      note: "Automatski blog za bolji SEO i više poseta",
      renewal: "200€/godišnje"
    },
    {
      name: "Kompleksniji sajtovi po meri",
      price: "kontakt",
      description: "Za složene projekte i specifične zahteve",
      icon: Crown,
      features: [
        "Web aplikacije",
        "Mobilne aplikacije",
        "Funkcionalnosti po želji",
        "Napredne integracije",
        "Personalizovane ponude",
        "Stručni tim eksperata",
        "Fleksibilan razvoj",
        "Tehnička podrška"
      ],
      popular: false,
      note: "Kontaktirajte nas za personalizovanu ponudu",
      renewal: "Po dogovoru",
      isCustom: true
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
    { name: "Kartično plaćanje/online/kripto", price: "od 250", note: "Zavisi od prodajnih kartica" },
    { name: "Fotografisanje lokala/proizvoda", price: "70", note: "Cena zavisi od lokacije i broja fotografija" },
    { name: "Pisanje kompletnog sadržaja", price: "40", note: "Po stranici" },
    { name: "Mesečna Analitika", price: "20", note: "Izveštaj o posetama, najposećenijim stranicama i preporuke za rast (mesečno)" },
    { name: "Održavanje sajta za sve pakete VAN osnovnog", price: "20", note: "Redovna ažuriranja i backup (mesečno)" },
    { name: "Premium domeni (.com/.net/.org/.rs)", price: "30", note: "Godišnja naknada za premium domene" }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 max-w-7xl mx-auto">
            {mainPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-primary scale-105' : ''}`}>
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
                    {plan.isCustom ? (
                      <span className="text-2xl">Kontakt za ponudu</span>
                    ) : (
                      <>
                        {plan.isPromo && plan.originalPrice && (
                          <div className="flex items-center justify-center gap-2">
                            <span className="line-through text-muted-foreground text-2xl">€{plan.originalPrice}</span>
                            <span>€{plan.price}</span>
                          </div>
                        )}
                        {!plan.isPromo && <span>€{plan.price}</span>}
                      </>
                    )}
                  </div>
                  {plan.isPromo && (
                    <div className="text-sm text-destructive font-medium mt-1">
                      🎉 Promo cena samo do kraja meseca!
                    </div>
                  )}
                  {!plan.isPromo && !plan.isCustom && plan.originalPrice && (
                    <div className="text-sm text-muted-foreground mt-1">
                      ({plan.note})
                    </div>
                  )}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow space-y-6">
                  <ul className="space-y-3 flex-grow">
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
                    className="w-full mt-auto"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => plan.isCustom ? window.location.href = '/kontakt' : handlePlanSelect(index)}
                  >
                    {plan.isCustom ? 'Kontaktiraj nas' : 'Poruči'}
                  </Button>
                </CardContent>
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
                    {addon.price.includes("od") ? `od €${addon.price.replace("od ", "")}` : `€${addon.price}`}
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
                <div className="flex items-center justify-center gap-2">
                  <span className="line-through text-muted-foreground text-2xl">€100</span>
                  <span className="text-3xl font-bold text-primary">€50</span>
                </div>
                <div className="text-sm text-destructive font-medium mt-1">
                  🎉 Promo cena samo do kraja meseca!
                </div>
                <CardDescription>
                  Nastavak domene i hostinga
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
                  Da, naše cene su transparentne i finalne. Osnovni paket od 50€ uključuje celu prvu godinu hostinga i domene. Napomena: trenutna cena od 50€ je promo cena koja važi samo do kraja meseca.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Šta ako ne dostavim materijal?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cena se menja ako mi pišemo sadržaj, proverite cenovnik iznad.
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
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-primary hover:bg-white hover:text-primary">
                <Link to="/portfolio">Pogledaj portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedPlan !== null ? `Poručite: ${mainPlans[selectedPlan].name}` : 'Porudžbina'}
            </DialogTitle>
            <DialogDescription>
              Popunite formu i kontaktiraćemo vas u najkraćem roku
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderName">
                  <User className="w-4 h-4 inline mr-2" />
                  Ime i prezime
                </Label>
                <Input
                  id="orderName"
                  placeholder="Vaše ime i prezime"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orderEmail">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email adresa
                </Label>
                <Input
                  id="orderEmail"
                  type="email"
                  placeholder="vas@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderPhone">
                <Phone className="w-4 h-4 inline mr-2" />
                Broj telefona
              </Label>
              <Input
                id="orderPhone"
                placeholder="+381 60 123 4567"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>

            {/* Material Provision Toggle */}
            <div className="space-y-4 p-4 bg-secondary rounded-lg">
              <div className="flex items-center space-x-3">
                <Switch
                  id="hasOwnMaterials"
                  checked={formData.hasOwnMaterials}
                  onCheckedChange={(checked) => handleChange("hasOwnMaterials", checked)}
                />
                <Label htmlFor="hasOwnMaterials" className="text-base font-medium">
                  Imam svoj tekst, slike i boje sajta
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                {formData.hasOwnMaterials
                  ? "Odlično! Dostavićete nam sve potrebne materijale."
                  : "Mi ćemo kreirati sadržaj za vas (uključuje 1 reviziju)."}
              </p>
            </div>

            {/* Conditional Fields - Show when user doesn't have materials */}
            {!formData.hasOwnMaterials && (
              <div className="space-y-4 p-4 border border-primary/20 rounded-lg">
                <h4 className="font-medium text-primary">Opišite šta želite na sajtu:</h4>

                <div className="space-y-2">
                  <Label htmlFor="websiteText">Opis sadržaja sajta</Label>
                  <Textarea
                    id="websiteText"
                    placeholder="Opišite vašu delatnost, usluge, proizvode... Što detaljnije, bolje možemo kreirati sadržaj."
                    className="min-h-[80px]"
                    value={formData.websiteText}
                    onChange={(e) => handleChange("websiteText", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="colorPreferences">Boje i stil sajta</Label>
                  <Input
                    id="colorPreferences"
                    placeholder="Npr. plava i bela, moderan, klasičan, minimalistički..."
                    value={formData.colorPreferences}
                    onChange={(e) => handleChange("colorPreferences", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageDescription">Opis potrebnih slika</Label>
                  <Textarea
                    id="imageDescription"
                    placeholder="Opišite kakve slike trebate (proizvodi, usluge, ljudi, lokacija...)"
                    className="min-h-[60px]"
                    value={formData.imageDescription}
                    onChange={(e) => handleChange("imageDescription", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Domain Preference */}
            <div className="space-y-2">
              <Label htmlFor="domainPreference">Željeni domen (opciono)</Label>
              <Input
                id="domainPreference"
                placeholder="Npr. mojsajt.com, mojafirma.rs..."
                value={formData.domainPreference}
                onChange={(e) => handleChange("domainPreference", e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Ukoliko ne unesete, mi ćemo predložiti domen na osnovu vašeg imena/delatnosti.{" "}
                <a
                  href="https://lookup.icann.org/en/lookup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  PROVERI DA LI JE DOMEN SLOBODAN
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="orderMessage">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Dodatne napomene
              </Label>
              <Textarea
                id="orderMessage"
                placeholder="Dodatni zahtevi, pitanja ili napomene..."
                className="min-h-[80px]"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>

            {selectedPlan !== null && (
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  <strong>Selektovani paket:</strong> {mainPlans[selectedPlan].name}<br/>
                  <strong>Cena:</strong>
                  {(selectedPlan === 0 || selectedPlan === 1) ? (
                    <span className="ml-1">
                      €{getCurrentPrice()}
                      {formData.hasOwnMaterials ? (
                        <span className="text-primary"> (sa vašim materijalima)</span>
                      ) : (
                        <span className="text-primary"> (mi kreiramo sadržaj)</span>
                      )}
                    </span>
                  ) : (
                    <span className="ml-1">€{mainPlans[selectedPlan].price}</span>
                  )}<br/>
                  <strong>Opis:</strong> {mainPlans[selectedPlan].description}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button type="submit" size="lg" className="flex-1">
                Potvrdi porudžbinu
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setOpen(false)}
              >
                Otkaži
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pricing;