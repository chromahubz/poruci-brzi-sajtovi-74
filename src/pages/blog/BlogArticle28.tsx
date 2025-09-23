import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Smartphone, Monitor, Tablet } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle28 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <Badge variant="secondary" className="w-fit">
              Responsive Design
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Responsive dizajn: Vodič za mobilno prilagođavanje sajta
            </h1>
            <p className="text-xl text-muted-foreground">
              Sve što trebate da znate o kreiranju sajtova koji savršeno rade na svim uređajima
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>12. januar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Ana Jovanović</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min čitanja</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Podeli
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
              alt="Responsive web design across devices"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <p className="text-lg leading-relaxed mb-6">
              Danas preko 60% saobraćaja na internetu dolazi sa mobilnih uređaja. Responsive dizajn
              nije više opcija - to je neophodnost za svaki savremeni web sajt.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Šta je responsive dizajn?</h2>

            <p className="mb-6">
              Responsive dizajn je pristup web developmentu koji omogućava da se web stranice prilagode
              različitim veličinama ekrana i uređajima. Cilj je da sajt izgleda i funkcioniše odlično
              na desktop računarima, tabletima i mobilnim telefonima.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <Card className="text-center">
                <CardHeader>
                  <Monitor className="w-12 h-12 mx-auto text-blue-500 mb-2" />
                  <CardTitle>Desktop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    1200px+ širine<br />
                    Pun sadržaj i funkcionalnost
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Tablet className="w-12 h-12 mx-auto text-green-500 mb-2" />
                  <CardTitle>Tablet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    768px - 1199px<br />
                    Prilagođeni layout i navigacija
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Smartphone className="w-12 h-12 mx-auto text-orange-500 mb-2" />
                  <CardTitle>Mobilni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Do 767px<br />
                    Optimizovan za dodir
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Ključni principi responsive dizajna</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. Fleksibilni grid sistemi</h3>
            <p className="mb-4">
              Koristite relativne jedinice kao što su procenti umesto fiksnih piksela za širine kolona.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">CSS Grid primer:</h4>
              <pre className="text-sm overflow-x-auto">
{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Fleksibilne slike</h3>
            <p className="mb-4">
              Slike treba da se prilagode kontejneru u kome se nalaze.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">CSS za responsive slike:</h4>
              <pre className="text-sm overflow-x-auto">
{`img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Za različite rezolucije */
@media (max-width: 768px) {
  .hero-image {
    width: 100vw;
    margin-left: -1rem;
    margin-right: -1rem;
  }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Media queries</h3>
            <p className="mb-4">
              Media queries omogućavaju da primenite različite CSS stilove za različite uređaje.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Standardni breakpoint-ovi:</h4>
              <pre className="text-sm overflow-x-auto">
{`/* Mobilni telefoni */
@media (max-width: 767px) {
  .navigation {
    flex-direction: column;
  }
}

/* Tableti */
@media (min-width: 768px) and (max-width: 1023px) {
  .sidebar {
    width: 30%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Mobilni dizajn prvo</h2>

            <p className="mb-6">
              "Mobile-first" pristup znači da prvo dizajnirate za najmanje ekrane, a zatim progresivno
              dodajete stilove za veće uređaje. Ovaj pristup rezultuje bržim i efikasnijim kodom.
            </p>

            <Card className="bg-blue-50 border-blue-200 my-6">
              <CardHeader>
                <CardTitle className="text-blue-800">💡 Pro tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  Koristite Chrome DevTools Device Mode da testirate kako vaš sajt izgleda na različitim uređajima
                  tokom development procesa.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Česti problemi i rešenja</h2>

            <div className="space-y-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Problem: Tekst je presitan na mobilnom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenje:</p>
                  <code className="text-sm bg-muted p-2 rounded block">
                    font-size: clamp(1rem, 2.5vw, 1.25rem);
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Problem: Dugmad su presitna za dodir</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenje:</p>
                  <code className="text-sm bg-muted p-2 rounded block">
                    min-height: 44px; /* Apple preporučuje minimum */
                  </code>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Problem: Horizontalno skrolovanje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenje:</p>
                  <code className="text-sm bg-muted p-2 rounded block">
                    overflow-x: hidden; width: 100%; box-sizing: border-box;
                  </code>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Testiranje responsive dizajna</h2>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Koristite browser developer tools</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Testirajte na stvarnim uređajima</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Koristite online alate kao što je BrowserStack</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Proverite brzinu učitavanja na mobilnom</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Zaključak</h2>

            <p className="mb-6">
              Responsive dizajn je osnova modernog web developmenta. Investiranje vremena u pravilno
              implementiranje responsive funkcionalnosti će rezultovati boljim korisničkim iskustvom
              i višim konverzijama na svim uređajima.
            </p>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-green-800">🎯 Ključni takeaway</h3>
                <p className="text-green-700">
                  Počnite sa mobile-first pristupom, koristite fleksibilne jedinice i testirajte na stvarnim uređajima.
                  Vaši korisnici će vam biti zahvalni!
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Slični članci</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">CSS</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/27" className="hover:text-primary transition-colors">
                      CSS Grid vs Flexbox: Kada koristiti koji?
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Detaljno poređenje dva najmoćnija CSS layout sistema
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Performance</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/26" className="hover:text-primary transition-colors">
                      Optimizacija brzine sajta za mobilne uređaje
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Praktični saveti za brže učitavanje na mobilnom
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Potreban vam je responsive sajt?</h2>
            <p className="text-lg opacity-90">
              Kreirajmo zajedno sajt koji savršeno funkcioniše na svim uređajima
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Zatražite ponudu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle28;