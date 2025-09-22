import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Palette,
  Check,
  Eye,
  Users,
  Smartphone,
  Monitor,
  Layers,
  Zap
} from "lucide-react";

const WebDesign = () => {
  const features = [
    {
      icon: Palette,
      title: "Kreativni dizajn",
      description: "Jedinstveni vizuelni identitet prilagođen vašem brendu i ciljanoj publici"
    },
    {
      icon: Eye,
      title: "UX/UI optimizacija",
      description: "Dizajn fokusiran na korisničko iskustvo i intuitivnu navigaciju"
    },
    {
      icon: Smartphone,
      title: "Mobile-first pristup",
      description: "Dizajn najpre kreiran za mobilne uređaje, zatim prilagođen desktop verziji"
    },
    {
      icon: Monitor,
      title: "Responzivan layout",
      description: "Savršeno prilagođavanje svim veličinama ekrana i rezolucijama"
    },
    {
      icon: Users,
      title: "Fokus na konverziju",
      description: "Dizajn koji vodi korisnike ka željenim akcijama i povećava prodaju"
    },
    {
      icon: Layers,
      title: "Modularni pristup",
      description: "Fleksibilni dizajn sistem koji omogućava lako dodavanje novih sekcija"
    }
  ];

  const designTypes = [
    {
      name: "Minimalistički dizajn",
      description: "Čist, elegantan pristup sa fokusom na sadržaj",
      features: [
        "Bela pozadina sa akcentima",
        "Jednostavna tipografija",
        "Fokus na content",
        "Brzo učitavanje"
      ],
      example: "Idealno za: portfolie, agencije, konsultante"
    },
    {
      name: "Korporativni dizajn",
      description: "Profesionalan i pouzdan izgled za B2B kompanije",
      features: [
        "Poslovna paleta boja",
        "Formalna tipografija",
        "Trust elementi",
        "Call-to-action dugmića"
      ],
      example: "Idealno za: firme, banke, konsalting kompanije"
    },
    {
      name: "Kreativni dizajn",
      description: "Hrabar i inovativan dizajn za kreativne industrije",
      features: [
        "Žive boje i gradijenti",
        "Animacije i tranzicije",
        "Nekonvencionalni layout",
        "Vizuelni efekti"
      ],
      example: "Idealno za: umetnice, dizajnere, start-up kompanije"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analiza brenda",
      description: "Proučavamo vaš brend, konkurenciju i ciljnu grupu da razumemo potrebe",
      duration: "1-2 dana"
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Kreiramo osnovnu strukturu stranice i planiramo korisničke putanje",
      duration: "2-3 dana"
    },
    {
      step: "03",
      title: "Vizuelni dizajn",
      description: "Razvijamo finalni dizajn sa bojama, tipografijom i vizuelnim elementima",
      duration: "3-5 dana"
    },
    {
      step: "04",
      title: "Prototype i testiranje",
      description: "Kreiramo interaktivni prototip i testiramo korisničko iskustvo",
      duration: "1-2 dana"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge className="mb-4">Kreativno rešenje</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Profesionalni web dizajn
            </h1>
            <p className="text-xl text-muted-foreground">
              Kreiramo vizuelno privlačne i funkcionalne web dizajne koji ostavljaju
              trajni utisak na vaše posetioce i povećavaju konverzije.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Poruči dizajn sada</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/portfolio">Pogledaj portfolio</Link>
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
              Šta čini naš dizajn posebnim?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kombinujemo estetiku sa funkcionalnoscu da kreiramo dizajne koji rade za vaš biznis
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

      {/* Design Types Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tipovi dizajna koje nudimo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Svaki biznis je jedinstven - biramo pristup koji najbolje odgovara vašim potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium text-primary">
                      {type.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naš dizajnerski proces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strukturiran pristup koji garantuje rezultate koji prevazilaze očekivanja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {step.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cene dizajnerskih usluga
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparentne cene bez skrivenih troškova
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Landing Page</CardTitle>
                <div className="text-3xl font-bold text-primary">150€</div>
                <CardDescription>Dizajn jedne stranice</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Wireframe</li>
                  <li>• Vizuelni dizajn</li>
                  <li>• Mobile verzija</li>
                  <li>• 2 revizije uključene</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 border-primary scale-105">
              <CardHeader>
                <Badge className="mb-2">Najpopularniji</Badge>
                <CardTitle className="text-xl">Kompletni sajt</CardTitle>
                <div className="text-3xl font-bold text-primary">350€</div>
                <CardDescription>Do 10 stranica</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Kompletni UX/UI</li>
                  <li>• Responsive dizajn</li>
                  <li>• Style guide</li>
                  <li>• 3 revizije uključene</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-primary">Kontakt</div>
                <CardDescription>Neograničeno stranica</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom dizajn sistem</li>
                  <li>• Brend guideline</li>
                  <li>• Neograničene revizije</li>
                  <li>• Dedicated dizajner</li>
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
              Spremni za dizajn koji se izdvaja?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju za vaš dizajn projekat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Kontaktiraj nas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20">
                <Link to="/portfolio" className="text-white">Pogledaj radove</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;