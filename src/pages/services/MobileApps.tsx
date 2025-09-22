import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Check,
  Wifi,
  Download,
  Bell,
  Zap,
  Users,
  Shield
} from "lucide-react";

const MobileApps = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Responzivan dizajn",
      description: "Aplikacije optimizovane za sve veličine ekrana mobilnih uređaja"
    },
    {
      icon: Wifi,
      title: "Offline pristup",
      description: "PWA tehnologija omogućava rad aplikacije bez internet konekcije"
    },
    {
      icon: Download,
      title: "Instaliranje kao aplikacija",
      description: "Korisnici mogu da instaliraju vašu web aplikaciju na telefon"
    },
    {
      icon: Bell,
      title: "Push notifikacije",
      description: "Slanje obaveštenja korisnicima direktno na njihove uređaje"
    },
    {
      icon: Zap,
      title: "Brze performanse",
      description: "Optimizovane za brzinu učitavanja i glatko korisničko iskustvo"
    },
    {
      icon: Shield,
      title: "Sigurnost",
      description: "HTTPS protokol i sigurnosne mere za zaštitu korisničkih podataka"
    }
  ];

  const appTypes = [
    {
      name: "Web App",
      description: "Web aplikacija sa funkcionalnostima native aplikacije",
      features: [
        "Offline funkcionalnost",
        "Push notifikacije",
        "Instaliranje na telefon",
        "Brže učitavanje",
        "Automatsko ažuriranje"
      ],
      price: "Kontakt",
      popular: true
    },
    {
      name: "Mobilna web aplikacija",
      description: "Optimizovana web stranica za mobilne uređaje",
      features: [
        "Touch optimizacija",
        "Mobilni dizajn",
        "Gesture kontrole",
        "Fast loading",
        "Cross-platform"
      ],
      price: "Kontakt"
    },
    {
      name: "Hibridna aplikacija",
      description: "Kombinacija web i native tehnologija",
      features: [
        "App store distribucija",
        "Native funkcionalnosti",
        "Cross-platform kod",
        "Hardver pristup",
        "Performance optimizacija"
      ],
      price: "Kontakt"
    }
  ];

  const benefits = [
    {
      title: "Veća dostupnost",
      description: "Korisnici mogu pristupiti aplikaciji sa bilo kog uređaja sa internetom",
      icon: Users
    },
    {
      title: "Niži troškovi razvoja",
      description: "Jedan kod radi na svim platformama - iOS, Android, Windows",
      icon: Zap
    },
    {
      title: "Lakše održavanje",
      description: "Ažuriranja se primenjuju instantno bez potrebe za download-om",
      icon: Smartphone
    },
    {
      title: "Bolje performanse",
      description: "Optimizovane za mobilne uređaje sa brzim učitavanjem",
      icon: Wifi
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">Mobilno rešenje</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Profesionalne mobilne aplikacije
            </h1>
            <p className="text-xl text-muted-foreground">
              Kreiramo mobilne web aplikacije i PWA rešenja koja pružaju izuzetno
              korisničko iskustvo na svim mobilnim uređajima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Poruči aplikaciju</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/portfolio">Pogledaj demo aplikacije</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Funkcionalnosti naših mobilnih aplikacija
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Moderne tehnologije za optimalno mobilno iskustvo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tipovi mobilnih aplikacija
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Odaberite tip aplikacije koji najbolje odgovara vašim potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {appTypes.map((type, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 flex flex-col h-full ${type.popular ? 'border-primary scale-105' : ''}`}>
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                    Najpopularniji
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-foreground">
                      {type.price === "Kontakt" ? (
                        <span className="text-xl">Kontakt za ponudu</span>
                      ) : (
                        <span>{type.price}</span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow space-y-6">
                  <ul className="space-y-3 flex-grow">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full mt-auto"
                    variant={type.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to={type.price === "Kontakt" ? "/kontakt" : "/cene"}>
                      {type.price === "Kontakt" ? 'Kontaktiraj nas' : 'Poruči sada'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Prednosti mobilnih web aplikacija
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zašto odabrati mobilne web aplikacije umesto native aplikacija
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tehnologije koje koristimo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Najnovije tehnologije za najbolje performanse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React / Vue.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• PWA APIs</li>
                  <li>• Service Workers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Node.js / Express</li>
                  <li>• MongoDB / PostgreSQL</li>
                  <li>• REST APIs</li>
                  <li>• WebSocket</li>
                  <li>• Push Notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-primary">DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Docker</li>
                  <li>• CI/CD Pipeline</li>
                  <li>• Cloud hosting</li>
                  <li>• SSL sertifikati</li>
                  <li>• Performance monitoring</li>
                </ul>
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
              Spremni za mobilnu aplikaciju?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju za vašu mobilnu aplikaciju
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Kontaktiraj nas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20">
                <Link to="/cene" className="text-white">Pogledaj sve cene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;