import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, TrendingUp, Users, Video } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle47 = () => {
  return (
    <article className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad na blog
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">TikTok Marketing</Badge>
              <Badge variant="outline">Social Media</Badge>
              <Badge variant="outline">Video Content</Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              TikTok Marketing za srpske biznise: Kompletna strategija za 2025
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Kako kreirati viralni TikTok sadržaj koji privlači srpsku publiku, povećava prodaju i gradi brend koji mladi obožavaju. Kompletni vodič sa realnim primerima iz Srbije.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>23. septembar 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min čitanja</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80"
              alt="TikTok Marketing Strategy"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Zašto je TikTok obavezan za srpske biznise u 2025?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>TikTok u Srbiji:</strong> 1.2 miliona aktivnih korisnika, 73% uzrasta 16-34 godina,
                prosečno 95 minuta dnevno. Za biznise koji ciljaju mlađu publiku, TikTok nije više opcija -
                već neophodnost. Neki srpski brendovi već ostvaruju milionske preglede i direktnu prodaju.
              </p>
            </div>

            {/* TikTok Stats for Serbia */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">TikTok statistike za Srbiju 2025</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-pink-600 mb-2">1.2M</div>
                  <div className="text-gray-600">Aktivnih korisnika</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">73%</div>
                  <div className="text-gray-600">Uzrasta 16-34</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-pink-600 mb-2">95min</div>
                  <div className="text-gray-600">Dnevno gledanje</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">34%</div>
                  <div className="text-gray-600">Kupuje preko TikTok-a</div>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Ključne činjenice:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Beograd: 380.000 korisnika (najveća penetracija)</li>
                  <li>• Novi Sad: 145.000 korisnika</li>
                  <li>• Niš: 78.000 korisnika</li>
                  <li>• 68% korisnica, 32% korisnika</li>
                  <li>• Peak time: 19:00-22:00 tokom radnih dana</li>
                  <li>• Vikend: 14:00-16:00 i 20:00-23:00</li>
                </ul>
              </div>
            </section>

            {/* Content Strategy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Strategija sadržaja za srpske biznise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <Video className="w-8 h-8 text-pink-600 mb-2" />
                    <CardTitle className="text-lg">Trending formati 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Before/After transformacije</strong> - 15-30s</li>
                      <li>• <strong>"Ovo niste znali"</strong> - edukativni sadržaj</li>
                      <li>• <strong>Day in the life</strong> - behind the scenes</li>
                      <li>• <strong>Trending audio</strong> - regionalni hitovi</li>
                      <li>• <strong>POV content</strong> - "POV: ideš u..."</li>
                      <li>• <strong>Tutorial videos</strong> - how-to formati</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle className="text-lg">Viralni elementi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Srpski trending audio</strong> - lokalni hitovi</li>
                      <li>• <strong>Regionalni humor</strong> - srpski memes</li>
                      <li>• <strong>Poznate lokacije</strong> - Kalemegdan, Skadarlija</li>
                      <li>• <strong>Seasonal content</strong> - Slava, praznici</li>
                      <li>• <strong>Kollaboracije</strong> - drugi local brandovi</li>
                      <li>• <strong>User Generated Content</strong> - customer videos</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Content Calendar Template:</h3>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-2 text-sm">
                  <div className="bg-white p-3 rounded"><strong>PON:</strong> Behind the scenes</div>
                  <div className="bg-white p-3 rounded"><strong>UTO:</strong> Tutorial/How-to</div>
                  <div className="bg-white p-3 rounded"><strong>SRE:</strong> Trending audio</div>
                  <div className="bg-white p-3 rounded"><strong>ČET:</strong> Q&A / FAQ</div>
                  <div className="bg-white p-3 rounded"><strong>PET:</strong> Fun/Entertainment</div>
                  <div className="bg-white p-3 rounded"><strong>SUB:</strong> UGC/Customer</div>
                  <div className="bg-white p-3 rounded"><strong>NED:</strong> Inspirational</div>
                </div>
              </div>
            </section>

            {/* Hashtag Strategy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hashtag strategija za srpsku publiku</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-pink-600">Broad hashtags (3-5)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>#srbija #serbia</li>
                      <li>#beograd #novisad</li>
                      <li>#balkanci #exyu</li>
                      <li>#srpski #srpskibrend</li>
                      <li>#balkan #yugosphere</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">Niche hashtags (5-8)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>#srpskafirma #lokalnibrend</li>
                      <li>#madeinserbia #domacipproizvod</li>
                      <li>#beogradskascena #nsscena</li>
                      <li>#srpskakvalitet #tradicionalno</li>
                      <li>#balkanskistil #regionalno</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-pink-600">Branded hashtags (2-3)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="space-y-1">
                      <li>#vasbrand</li>
                      <li>#vasbrandchallenge</li>
                      <li>#vasbrandcommunity</li>
                      <li>#vasbrandstory</li>
                      <li>#vasbrandexperience</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Hashtag best practices:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Ukupno 8-15 hashtag-ova po postu</li>
                  <li>• Kombinujte popularne (1M+ objava) i niche (&lt;100K objava)</li>
                  <li>• Kreirati unique branded hashtag za kampanje</li>
                  <li>• Pratiti trending hashtag-ove u Srbiji dnevno</li>
                  <li>• A/B testirati različite kombinacije</li>
                </ul>
              </div>
            </section>

            {/* Influencer Collaboration */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kolaboracije sa srpskim kreatorima</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Mikro-influenceri (10K-100K)</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Cena:</strong> 5.000-25.000 RSD po postu
                    </div>
                    <div>
                      <strong>Engagement rate:</strong> 3-8%
                    </div>
                    <div>
                      <strong>Najbolji za:</strong> Lokalne biznise, niche proizvode
                    </div>
                    <div>
                      <strong>ROI:</strong> 300-500% za pravilno targetirane kampanje
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Macro-influenceri (100K+)</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Cena:</strong> 50.000-200.000 RSD po postu
                    </div>
                    <div>
                      <strong>Engagement rate:</strong> 1.5-4%
                    </div>
                    <div>
                      <strong>Najbolji za:</strong> Brand awareness, veliki doseg
                    </div>
                    <div>
                      <strong>ROI:</strong> 150-300% fokus na awareness metrike
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Kako pronaći prave kreatore:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Relevantnost:</strong> Kreatori u vašoj nišu ili geografiji</li>
                  <li>• <strong>Engagement kvalitet:</strong> Komentari, ne samo lajkovi</li>
                  <li>• <strong>Audience overlap:</strong> Minimum 60% overlap sa vašom target grupom</li>
                  <li>• <strong>Authentic voice:</strong> Ne previše sponzorisani sadržaj</li>
                  <li>• <strong>Content quality:</strong> Profesionalna produkcija</li>
                  <li>• <strong>Response rate:</strong> Odgovara na komentare i poruke</li>
                </ul>
              </div>
            </section>

            {/* TikTok Ads */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">TikTok Ads za srpske biznise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Ad formati koji rade u Srbiji</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-medium text-gray-800">In-Feed Ads</h4>
                      <p className="text-sm text-gray-600 mt-1">Najbolji ROI za e-commerce, 9-15s video</p>
                      <div className="text-xs text-gray-500 mt-2">CPC: 15-35 RSD</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-medium text-gray-800">Spark Ads</h4>
                      <p className="text-sm text-gray-600 mt-1">Boost postojećeg organic sadržaja</p>
                      <div className="text-xs text-gray-500 mt-2">CPM: 800-1200 RSD</div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-medium text-gray-800">Collection Ads</h4>
                      <p className="text-sm text-gray-600 mt-1">Savršen za fashion/beauty brendove</p>
                      <div className="text-xs text-gray-500 mt-2">CPA: 200-500 RSD</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Targeting opcije</h3>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Demographics:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 mb-4">
                      <li>• Uzrast: 16-34 (73% user base)</li>
                      <li>• Lokacija: Beograd, Novi Sad, Niš</li>
                      <li>• Jezik: Srpski + English</li>
                    </ul>

                    <h4 className="font-semibold text-gray-800 mb-3">Interests:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 mb-4">
                      <li>• Fashion & Beauty</li>
                      <li>• Music (Turbo folk, Pop, Hip-hop)</li>
                      <li>• Food & Restaurants</li>
                      <li>• Travel (Balkan destinations)</li>
                    </ul>

                    <h4 className="font-semibold text-gray-800 mb-3">Behaviors:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Online shoppers</li>
                      <li>• App installers</li>
                      <li>• Video engagement 75%+</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Analytics & Metrics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Analitika i KPI-jevi</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Engagement metrije:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>View rate:</strong> &gt;70% (odličan)</li>
                    <li>• <strong>Like rate:</strong> 5-8% od views</li>
                    <li>• <strong>Comment rate:</strong> 1-3% od views</li>
                    <li>• <strong>Share rate:</strong> 2-5% od views</li>
                    <li>• <strong>Profile visit rate:</strong> 3-6%</li>
                    <li>• <strong>Follow rate:</strong> 1-2% od views</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Business metrije:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Website clicks:</strong> 2-4% od views</li>
                    <li>• <strong>Conversion rate:</strong> 1-3% od clicks</li>
                    <li>• <strong>Cost per click:</strong> 20-50 RSD</li>
                    <li>• <strong>Cost per acquisition:</strong> 200-800 RSD</li>
                    <li>• <strong>ROAS:</strong> 300-500% (cilj)</li>
                    <li>• <strong>Follower growth:</strong> 5-10% mesečno</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Tracking tools:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>TikTok Analytics:</strong> In-app native analytics</li>
                  <li>• <strong>TikTok Ads Manager:</strong> Za plaćene kampanje</li>
                  <li>• <strong>Google Analytics:</strong> UTM tracking za web traffic</li>
                  <li>• <strong>Hootsuite/Buffer:</strong> Social media management</li>
                  <li>• <strong>TikTok Pixel:</strong> Conversion tracking</li>
                </ul>
              </div>
            </section>

            {/* Success Stories */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Srpski brendovi koji su uspeli na TikTok-u</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-pink-600">Fashion Brand</CardTitle>
                    <CardDescription>Lokalni clothing brand iz Beograda</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-2">
                      <div><strong>Followeri:</strong> 0 → 85K za 8 meseci</div>
                      <div><strong>Sadržaj:</strong> Outfit of the day, styling tips</div>
                      <div><strong>Rezultat:</strong> 340% rast online prodaje</div>
                      <div><strong>Investicija:</strong> 30.000 RSD mesečno</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">Restaurant Chain</CardTitle>
                    <CardDescription>Fast food lanac sa 5 lokacija</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-2">
                      <div><strong>Followeri:</strong> 2K → 45K za 6 meseci</div>
                      <div><strong>Sadržaj:</strong> Food preparation, behind scenes</div>
                      <div><strong>Rezultat:</strong> 25% više narudžbi</div>
                      <div><strong>Investicija:</strong> 15.000 RSD mesečno</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-pink-600">Tech Startup</CardTitle>
                    <CardDescription>Mobilna aplikacija za dostavu</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="space-y-2">
                      <div><strong>Followeri:</strong> 500 → 28K za 4 meseca</div>
                      <div><strong>Sadržaj:</strong> How-to videos, user testimonials</div>
                      <div><strong>Rezultat:</strong> 150% više downloads</div>
                      <div><strong>Investicija:</strong> 25.000 RSD mesečno</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Action Plan */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7-dnevni action plan za početak</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border-l-4 border-pink-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Dan 1-2: Setup & Research</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kreirati TikTok Business account</li>
                    <li>• Analizirati 20 konkurenata u vašoj niši</li>
                    <li>• Identifikovati trending hashtag-ove i audio</li>
                    <li>• Definisati target auditorium</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Dan 3-4: Content Creation</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Snimiti 10 kratkih video klipova</li>
                    <li>• Kreirati content calendar za mesec dana</li>
                    <li>• Prepare trending audio i effects</li>
                    <li>• Napisati engaging captions</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-pink-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Dan 5-6: Publishing & Optimization</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Početi sa daily posting schedule</li>
                    <li>• Pratiti analytics i engagement</li>
                    <li>• Odgovoriti na sve komentare</li>
                    <li>• A/B testirati posting times</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Dan 7: Analiza i planiranje</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Analizirati performance prvih postova</li>
                    <li>• Identifikovati best performing content</li>
                    <li>• Planirati influencer outreach</li>
                    <li>• Postaviti budget za TikTok Ads</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Ključni takeaways</h2>
                <ul className="space-y-2 text-sm">
                  <li>✅ TikTok ima 1.2M aktivnih korisnika u Srbiji - ogromna prilika</li>
                  <li>✅ Fokus na autentičan, zabavan sadržaj koji rezonuje sa srpskom publikom</li>
                  <li>✅ Kombinacija organic i paid strategije daje najbolje rezultate</li>
                  <li>✅ Lokalni trending audio i hashtag-ovi su ključ uspeha</li>
                  <li>✅ Konzistentnost i engagement sa community su najvažniji</li>
                </ul>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm">
                    <strong>Poruči Sajt</strong> kreira TikTok marketing strategije za srpske biznise.
                    Kontaktirajte nas za besplatnu konsultaciju i personalizovanu strategiju.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </article>
  );
};

export default BlogArticle47;