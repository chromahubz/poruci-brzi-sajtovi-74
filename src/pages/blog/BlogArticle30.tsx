import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Zap, TrendingUp, Target, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle30 = () => {
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
              Digital Marketing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI i automatizacija u digitalnom marketingu: Vodič za 2025.
            </h1>
            <p className="text-xl text-muted-foreground">
              Kako iskoristiti veštačku inteligenciju i automatizaciju da poboljšate marketing rezultate i smanjite troškove
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>8. januar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Milica Stojanović</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min čitanja</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Podeli
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
              alt="AI and automation in digital marketing"
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
              Veštačka inteligencija i automatizacija revolucionizuju digitalni marketing.
              Kompanije koje usvoje ove tehnologije imaju 2-3x veće konverzije i značajno niže troškove
              pridobijanja kupaca. Evo kako da i vi iskoristite ove mogućnosti.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Zašto je AI ključan za marketing u 2025?</h3>
                  <p className="text-blue-700 text-sm">
                    85% marketinga će biti automatizirano do 2025. godine. Kompanije koje ne prilagode
                    strategije riskuju da budu nadmašene od strane konkurencije koja koristi AI.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Oblasti primene AI u marketingu</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Personalizacija sadržaja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI analizira ponašanje korisnika i kreira personalizovane preporuke,
                    email kampanje i sadržaj koji povećava angažman za 40-60%.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Prediktivna analitika
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Predviđanje trendova, ponašanja kupaca i optimalnih vremena za kampanje
                    na osnovu istorijskih podataka i trenutnih signala.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Optimizacija bidova
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatsko podešavanje bid strategija u Google Ads i Facebook reklamama
                    za maksimalni ROI uz minimalne troškove.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Chatbot-ovi i customer service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI asistenti koji odgovaraju na pitanja 24/7, kvalifikuju leads-e
                    i rešavaju 80% osnovnih upita bez ljudske intervencije.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Konkretni AI alati za mala preduzeća</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">1. Email Marketing Automatizacija</h3>
            <p className="mb-4">
              Platforme kao što su Mailchimp, ActiveCampaign i ConvertKit koriste AI za optimizaciju kampanja.
            </p>

            <Card className="bg-green-50 border-green-200 mb-6">
              <CardContent className="p-4">
                <p className="text-green-800 text-sm">
                  ✅ <strong>Prakticna implementacija:</strong> Postavite automatske email sekvence na osnovu
                  ponašanja korisnika - dobrodošlica, napuštena korpa, ponovno angažovanje.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Social Media Management</h3>
            <p className="mb-4">
              Alati kao što su Hootsuite, Buffer i Later koriste AI za optimalno vreme objavljivanja.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">AI funkcije za social media:</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Optimal timing:</strong> AI određuje kada vaša publika najaktivnija</li>
                <li>• <strong>Content suggestions:</strong> Preporučuje trending hashtagove i teme</li>
                <li>• <strong>Image optimization:</strong> Automatsko resize i kreiranje varijanata</li>
                <li>• <strong>Performance analysis:</strong> Identifikuje najuspešnije tipove sadržaja</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Google Ads Smart Campaigns</h3>
            <p className="mb-4">
              Google-ove AI funkcije automatski optimiziraju kampanje za najbolje rezultate.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Smart Bidding strategije:</h4>
              <div className="text-sm space-y-3">
                <div>
                  <strong>Target CPA:</strong> AI automatski podešava bidove da postigne ciljanu cenu po konverziji
                </div>
                <div>
                  <strong>Target ROAS:</strong> Optimizuje za specifičan Return on Ad Spend
                </div>
                <div>
                  <strong>Maximize Conversions:</strong> Koristi celokupan budget za maksimalan broj konverzija
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">ChatGPT i AI za kreiranje sadržaja</h2>

            <p className="mb-4">
              AI može značajno ubrzati proces kreiranja marketinškog sadržaja, ali mora se koristiti pametno.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Praktični prompt-ovi za marketing:</h4>
              <div className="text-sm space-y-4">
                <div>
                  <strong>Za social media post:</strong><br/>
                  <code className="bg-gray-200 p-1 rounded text-xs">
                    "Napiši angažujući Instagram post za [proizvod/uslugu] koji cilja [target grupa].
                    Uključi call-to-action i relevantne hashtag-ove."
                  </code>
                </div>
                <div>
                  <strong>Za email subject line:</strong><br/>
                  <code className="bg-gray-200 p-1 rounded text-xs">
                    "Kreiraj 5 različitih email subject linija za [kampanju] koje će povećati open rate.
                    Ciljana grupa: [opis]"
                  </code>
                </div>
                <div>
                  <strong>Za blog naslov:</strong><br/>
                  <code className="bg-gray-200 p-1 rounded text-xs">
                    "Predloži 10 SEO optimizovanih naslova za blog post o [tema].
                    Ključne reči: [lista ključnih reči]"
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Marketing automatizacija korak po korak</h2>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                    Definišite customer journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mappirajte sve touchpoint-e sa korisnicima od prvog kontakta do kupovine i nakon nje.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                    Postavite tracking i analitiku
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Implementirajte Google Analytics 4, Facebook Pixel i druge tracking alate za prikupljanje podataka.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                    Kreirajte automatizovane workflow-e
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Postavite trigger-e i akcije: "Ako korisnik poseti pricing stranicu, pošalji mu email sa ponudom."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                    Testirajte i optimizujte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Redovno analizirajte rezultate, A/B testirajte različite varijante i poboljšavajte performanse.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Meranje ROI AI investicija</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-center">Cost Reduction</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600">30-50%</div>
                  <p className="text-sm text-muted-foreground">smanjenje troškova kroz automatizaciju</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-center">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20-40%</div>
                  <p className="text-sm text-muted-foreground">povećanje konverzija kroz personalizaciju</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-center">Time Savings</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5-10h</div>
                  <p className="text-sm text-muted-foreground">nedeljno uštede vremena po zaposlennom</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Buduće trendovi u AI marketingu</h2>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Voice Search Optimization:</strong> Optimizacija za glasovne pretrage kroz Alexa, Google Assistant
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Visual Search:</strong> AI prepoznavanje objekata u slikama za e-commerce
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Hyper-personalization:</strong> Individualizovani sadržaj za svakog korisnika posebno
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <strong>Predictive Customer Service:</strong> AI koji predviđa probleme pre nego što se dogode
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Zaključak</h2>

            <p className="mb-6">
              AI i automatizacija nisu futuristički koncepti - oni su današnja realnost u marketingu.
              Početak može biti jednostavan: automatizujte email marketing, koristite Smart Bidding u Google Ads-ima,
              i eksperimentirajte sa AI alatima za kreiranje sadržaja.
            </p>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-blue-800">🚀 Akcijski plan</h3>
                <p className="text-blue-700 mb-4">
                  Počnite sa jednim AI alatom ove nedelje. Najveći povraćaj investicije obično daju email automatizacija
                  i Google Ads Smart Campaigns jer se mogu implementirati brzo i rezultati se vide već za 30 dana.
                </p>
                <div className="text-sm text-blue-600">
                  💡 Predlog: Integrisite Mailchimp automatizaciju sa vašim web sajtom kao prvi korak.
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
                  <Badge variant="outline" className="w-fit">Analytics</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/29" className="hover:text-primary transition-colors">
                      Google Analytics 4: Kompletni vodič za početnike
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Naučite kako da postavite i koristite najnoviju verziju Google Analytics
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Social Media</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/28" className="hover:text-primary transition-colors">
                      Social Media Marketing na budžetu od 100€ mesečno
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Maksimalni rezultati uz minimalne troškove na društvenim mrežama
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
            <h2 className="text-3xl font-bold">Potrebna vam je AI marketing strategija?</h2>
            <p className="text-lg opacity-90">
              Naš tim može da vam pomogne da implementirate AI alate i automatizaciju za vaš biznis
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Zakažite konsultacije</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle30;