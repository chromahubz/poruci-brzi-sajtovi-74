import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, Clock, DollarSign, Zap, Monitor, Smartphone, ShoppingCart, Settings } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-accent overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Brza i jeftina</span>{" "}
                  <span className="text-white font-extrabold">izrada sajtova</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg font-medium">
                  Profesionalne web stranice po pristupačnim cenama. Gotov sajt za 48 sati!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/kontakt">Poruči sajt sada</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/portfolio">Pogledaj portfolio</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="text-white w-5 h-5" />
                  <span className="text-sm font-semibold text-white">48h isporuka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="text-white w-5 h-5" />
                  <span className="text-sm font-semibold text-white">Od 50€</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="text-white w-5 h-5" />
                  <span className="text-sm font-semibold text-white">Brza podrška</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Profesionalna izrada sajtova" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naše usluge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nudimo kompletne rešenja za vašu digitalnu prisutnost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Web sajtovi</CardTitle>
                <CardDescription>
                  Moderni, responzivni sajtovi optimizovani za sve uređaje
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>
                  Online prodavnice sa kompletnim sistemom za prodaju
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Mobilne aplikacije</CardTitle>
                <CardDescription>
                  Web aplikacije optimizovane za mobilne uređaje
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Održavanje</CardTitle>
                <CardDescription>
                  Redovno održavanje i ažuriranje vašeg sajta
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Zašto odabrati nas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kombinujemo brzinu, kvalitet i pristupačne cene
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Brza isporuka</h3>
              <p className="text-muted-foreground">
                Vaš sajt je spreman za 48 sati. Bez čekanja, bez kašnjenja.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Pristupačne cene</h3>
              <p className="text-muted-foreground">
                Kvalitetni sajtovi po cenama koje može svako da priušti.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Garancija kvaliteta</h3>
              <p className="text-muted-foreground">
                100% zadovoljstvo ili vraćamo novac. Bez rizika za vas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Spremni ste za novi sajt?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju. Vaš novi sajt može biti spreman za 48 sati!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/kontakt">Kontaktiraj nas</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white bg-white/10 hover:bg-white/20">
                <Link to="/cene" className="text-white">Pogledaj cene</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;