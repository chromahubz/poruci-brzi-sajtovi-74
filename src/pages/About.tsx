import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              O nama
            </h1>
            <p className="text-xl text-muted-foreground">
              Mi smo tim strashnih programera i dizajnera koji stvaraju moderne web sajtove po pristupačnim cenama
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Naša priča
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Poruci Sajt je nastao iz želje da svima omogućimo pristup kvalitetnim web sajtovima, 
                  bez obzira na budžet. Videli smo da su mnogi mali preduzetnici i startapovi odustajali 
                  od digitalnog prisustva zbog visokih cena.
                </p>
                <p>
                  Naš tim čine iskusni programeri, dizajneri i digitalni stručnjaci koji veruju da 
                  kvalitet ne mora da bude skup. Kombinujemo moderne tehnologije sa efikasnim procesima 
                  rada kako bismo vam doneli najbolji rezultat u najkraćem roku.
                </p>
                <p>
                  Do sada smo napravili više od 500 sajtova za klijente iz cele Srbije i regiona. 
                  Naša misija je da vaš biznis blista online!
                </p>
              </div>
              <Button asChild size="lg">
                <Link to="/portfolio">Pogledaj naš rad</Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span>Naša misija</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Omogućiti svakom biznisu, bez obzira na veličinu, da ima profesionalnu 
                    web prezentaciju po pristupačnoj ceni i u rekordnom roku.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-primary" />
                    <span>Naše vrednosti</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Brzina, kvalitet, pristupačnost i punu posvećenost svakom projektu. 
                    Vaš uspeh je naš uspeh.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Brojevi govore za nas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Završenih projekata</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">48h</div>
              <div className="text-muted-foreground">Prosečno vreme isporuke</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Zadovoljnih klijenata</div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Tehnička podrška</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Naš tim
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stručnjaci posvećeni vašem uspehu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle>Programeri</CardTitle>
                <CardDescription>
                  Iskusni full-stack developeri koji poznaju najnovije tehnologije
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle>Dizajneri</CardTitle>
                <CardDescription>
                  Kreativni umovi koji stvaraju prelepe i funkcionalne dizajne
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle>Podrška</CardTitle>
                <CardDescription>
                  Uvek dostupan tim za podršku i održavanje vaših sajtova
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Spremni da radimo zajedno?
            </h2>
            <p className="text-lg opacity-90">
              Kontaktirajte nas i vidite zašto nas klijenti preporučuju
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link to="/kontakt">Stupite u kontakt</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;