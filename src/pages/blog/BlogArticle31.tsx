import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Smartphone, Users, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle31 = () => {
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
              UX/UI Design
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              UX/UI dizajn za početnike: Kako kreirati intuitivne web interface-e
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletni vodič kroz principe dizajna korisničkog iskustva i praktične savete za poboljšanje usability vašeg sajta
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>6. januar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Jelena Marković</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min čitanja</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Podeli
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop"
              alt="UX/UI design process and wireframes"
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
              Dobro dizajnirani web sajt nije samo lep - on je funkcionalan, intuitivan i pomaže korisnicima
              da lako dođu do informacija koje traže. UX/UI dizajn određuje da li će posetilac ostati na sajtu
              ili ga napustiti za 3 sekunde.
            </p>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">Zašto je UX/UI dizajn kritičan?</h3>
                  <p className="text-orange-700 text-sm">
                    88% korisnika neće se vratiti na sajt nakon loše korisničke iskustva.
                    Ulaganje u dobar dizajn može povećati konverzije za 200% ili više.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">UX vs UI: Koja je razlika?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    UX Design (User Experience)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-3">
                    Fokus na korisničko iskustvo i funkcionalnost
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• User research i analiza ponašanja</div>
                    <div>• Information architecture</div>
                    <div>• Wireframing i prototyping</div>
                    <div>• Usability testing</div>
                    <div>• Customer journey mapping</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    UI Design (User Interface)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-3">
                    Fokus na vizuelni dizajn i interakciju
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• Visual design i branding</div>
                    <div>• Typography i color schemes</div>
                    <div>• Button design i micro-interactions</div>
                    <div>• Responsive layout</div>
                    <div>• Icon design i imagery</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Fundamentalni principi UX dizajna</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. Usability (Upotrebljivost)</h3>
            <p className="mb-4">
              Sajt mora biti lak za korišćenje. Korisnici ne čitaju instrukcije - oni očekuju da sve radi intuitivno.
            </p>

            <Card className="bg-green-50 border-green-200 mb-6">
              <CardContent className="p-4">
                <p className="text-green-800 text-sm">
                  ✅ <strong>Jakob's Law:</strong> Korisnici provode većinu vremena na drugim sajtovima,
                  pa očekuju da vaš sajt funkcioniše kao oni na koje su navikli.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Accessibility (Pristupačnost)</h3>
            <p className="mb-4">
              Dizajn mora biti pristupačan svima, uključujući osobe sa invaliditetom.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Accessibility checklist:</h4>
              <div className="text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Alt text za sve slike</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Dovoljno kontrastni odnos boja (4.5:1 minimum)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Keyboard navigation podrška</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Jasni link i button labeli</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Responsive design za sve uređaje</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Konzistentnost</h3>
            <p className="mb-4">
              Slični elementi treba da se ponašaju slično kroz ceo sajt. Ovo smanjuje cognitive load.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Elementi konzistentnosti:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Vizuelna konzistentnost:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Uniformna color palette</li>
                    <li>• Konzistentna tipografija</li>
                    <li>• Standardizovani spacing</li>
                  </ul>
                </div>
                <div>
                  <strong>Funkcionalna konzistentnost:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Predvidljivo ponašanje elemenata</li>
                    <li>• Standardizovana navigacija</li>
                    <li>• Konzistentni hover effects</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Praktični saveti za UI dizajn</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Color Psychology u Web Dizajnu</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold text-sm">Plava</div>
                  <div className="text-xs text-muted-foreground">Poverenje, profesionalnost</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold text-sm">Zelena</div>
                  <div className="text-xs text-muted-foreground">Rast, novac, priroda</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold text-sm">Crvena</div>
                  <div className="text-xs text-muted-foreground">Urgentnost, strast</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold text-sm">Narandžasta</div>
                  <div className="text-xs text-muted-foreground">Kreativnost, entuzijazam</div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Typography Best Practices</h3>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Tipografska hijerarhija:</h4>
              <div className="space-y-3">
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>H1 - Glavni naslov (28px+)</div>
                <div style={{ fontSize: '24px', fontWeight: '600' }}>H2 - Podnaslov (24px)</div>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>H3 - Sekcijski naslov (20px)</div>
                <div style={{ fontSize: '16px' }}>Body text - Glavni tekst (16px)</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Caption - Dodatne informacije (14px)</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">User Testing i Feedback</h2>

            <p className="mb-4">
              Najbolji dizajn je onaj koji je testiran sa stvarnim korisnicima. Evo kako da sprovedete osnovne testove.
            </p>

            <div className="space-y-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5-Second Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Pokažite sajt korisniku na 5 sekundi, zatim ga pitajte šta je zapamtio.
                    Ovo testira prvi utisak i vizuelnu hijerarhiju.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Task-Based Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dajte korisniku konkretni zadatak: "Pronađite cenu osnovnog paketa"
                    i posmatrajte kako se kreće kroz sajt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">A/B Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Testirajte dve verzije istog elementa (button boja, naslov, layout)
                    i vidite koja daje bolje rezultate.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Česti UX/UI problemi i rešenja</h2>

            <div className="space-y-4 mb-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">Problem: Korisnici ne pronalaze glavnu CTA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenja:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Koristite kontrastne boje za glavni button</li>
                    <li>• Pozicionirajte CTA above the fold</li>
                    <li>• Koristite action-oriented tekst ("Počni danas", ne "Klikni ovde")</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800">Problem: Visok bounce rate na mobile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenja:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Optimizujte brzinu učitavanja (manje od 3 sekunde)</li>
                    <li>• Povećajte veličinu touch targets (min 44px)</li>
                    <li>• Pojednostavite navigaciju za mobilne uređaje</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Problem: Korisnici napuštaju forme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Rešenja:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Smanjite broj polja na minimum</li>
                    <li>• Dodajte progress indicator za duge forme</li>
                    <li>• Koristite inline validation za trenutni feedback</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Alati za UX/UI dizajn</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Besplatni alati:</h3>
                <div className="space-y-2 text-sm">
                  <div>• <strong>Figma:</strong> UI design i prototyping</div>
                  <div>• <strong>Canva:</strong> Brz vizuelni dizajn</div>
                  <div>• <strong>Google Analytics:</strong> User behavior analiza</div>
                  <div>• <strong>Hotjar:</strong> Heatmaps i screen recordings</div>
                  <div>• <strong>Coolors.co:</strong> Color palette generator</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Premium alati:</h3>
                <div className="space-y-2 text-sm">
                  <div>• <strong>Sketch:</strong> Advanced UI design (Mac)</div>
                  <div>• <strong>Adobe XD:</strong> Complete design suite</div>
                  <div>• <strong>InVision:</strong> Advanced prototyping</div>
                  <div>• <strong>Maze:</strong> User testing platform</div>
                  <div>• <strong>Principle:</strong> Animation design</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Zaključak</h2>

            <p className="mb-6">
              Dobar UX/UI dizajn nije luksuz - to je neophodnost za svaki uspešan web sajt.
              Počnite sa osnovnim principima: jasnoća, konzistentnost i fokus na korisnika.
              Testirajte redovno i iterativno poboljšavajte na osnovu feedback-a.
            </p>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-purple-800">🎨 Prvi korak</h3>
                <p className="text-purple-700 mb-4">
                  Analizirajte svoj trenutni sajt: Da li korisnik može za 5 sekundi da razume šta nudite
                  i šta treba da uradi? Ako ne, počnite redesign sa jasnim value proposition-om i CTA.
                </p>
                <div className="text-sm text-purple-600">
                  💡 Koristite "5-second test" sa prijateljima ili kolegama kao početnu validaciju.
                </div>
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
                  <Badge variant="outline" className="w-fit">Design</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/30" className="hover:text-primary transition-colors">
                      Color Psychology u Web Dizajnu: Kompletni vodič
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Kako boje utiču na percepciju brenda i konverzije korisnika
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Responsive</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/28" className="hover:text-primary transition-colors">
                      Responsive dizajn: Vodič za mobilno prilagođavanje
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Kreiranje sajtova koji savršeno rade na svim uređajima
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
            <h2 className="text-3xl font-bold">Potreban vam je profesionalan UX/UI dizajn?</h2>
            <p className="text-lg opacity-90">
              Naš tim dizajnera može kreirati intuitivni i privlačan sajt koji će povećati vaše konverzije
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Zatražite dizajn ponudu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle31;