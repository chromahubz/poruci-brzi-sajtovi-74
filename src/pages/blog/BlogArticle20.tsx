import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Tag, Play, Camera, Film, Mic, Eye, TrendingUp, Users, DollarSign, Target, Share2, BarChart3, Zap, Star, CheckCircle } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle20 = () => {
  const quizQuestions = [
    {
      question: "Koliko je video sadržaj efikasniji od teksta za engagement na social media?",
      options: [
        "200% više engagement-a",
        "500% više engagement-a",
        "1200% više engagement-a",
        "2000% više engagement-a"
      ],
      correct: 2,
      explanation: "Video sadržaj generiše 1200% više engagement-a od teksta i slika zajedno. Video je najmoćniji format za privlačenje pažnje i povećanje interakcije."
    },
    {
      question: "Koliko treba da traje video za social media da bi bio najefektivniji?",
      options: [
        "15-30 sekundi",
        "1-2 minuta",
        "3-5 minuta",
        "5+ minuta"
      ],
      correct: 1,
      explanation: "Optimalna dužina za social media video je 1-2 minuta. Instagram i Facebook favorizuju video od 60-90 sekundi, dok TikTok preferiše 15-60 sekundi."
    },
    {
      question: "Koji procenat korisnika preferiše da gleda video o proizvodu umesto da čita o njemu?",
      options: [
        "54%",
        "68%",
        "72%",
        "84%"
      ],
      correct: 3,
      explanation: "84% korisnika kaže da je kupilo proizvod nakon gledanja brand video-a. Video je daleko najubedljiviji format za product showcase i sales conversion."
    },
    {
      question: "Koliko košta osnovna video produkcija za mala preduzeća u Srbiji?",
      options: [
        "20,000-50,000 RSD po video-u",
        "80,000-150,000 RSD po video-u",
        "200,000-400,000 RSD po video-u",
        "500,000+ RSD po video-u"
      ],
      correct: 1,
      explanation: "Osnovna profesionalna video produkcija u Srbiji košta 80,000-150,000 RSD po video-u. DIY pristup može biti 10x jeftiniji uz dobru opremu i vještine."
    },
    {
      question: "Koja je najvažnija metrika za merenje uspeha video marketing kampanje?",
      options: [
        "Broj pregleda (views)",
        "Engagement rate (likes, komentari, share-ovi)",
        "Watch time i completion rate",
        "Conversion rate i ROI"
      ],
      correct: 3,
      explanation: "Conversion rate i ROI su najvažnije metrike jer mere realne business rezultate. Views i engagement su importantni, ali konverzija u kupce je ultimatni cilj."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Nazad na blog</span>
            </Link>
          </Button>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>35 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Video Marketing</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Video Marketing za Mala Preduzeća - Kompletni Vodič za Kreiranje Sadržaja koji Prodaje 2025
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da kreirate video sadržaj koji privlači klijente i povećava prodaju. Od strategije do produkcije - sve što trebate da znate o video marketing-u za srpska mala preduzeća.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Video Marketing Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Play className="w-6 h-6 text-primary" />
                <span>Zašto je Video Marketing Budućnost Digital Marketinga?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Video marketing više nije opcija - to je neophodnost. U 2024. godini, video sadržaj predstavlja preko 82% celog internet saobraćaja. Za mala preduzeća u Srbiji, video predstavlja najmoćniji alat za povezivanje sa klijentima i izgradnju brand presence-a.
              </p>
              <p>
                Ono što čini video tako efektivan je njegova sposobnost da kombinuje vizuelne, audio i emocionalne elemente u jednom mediju. Video može da prenese kompleksne informacije za sekunde, izgradi emocionalnu vezu sa gledalačem i podstakne ih na action.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Video Marketing Statistike za 2025:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• <strong>92% marketara</strong> smatra video ključnim delom strategije</li>
                    <li>• <strong>88% gledalaca</strong> želi kratke video sadržaje od brendova</li>
                    <li>• <strong>84% ljudi</strong> kupuje proizvod nakon gledanja brand video-a</li>
                    <li>• <strong>79% potrošača</strong> preferiše video umesto čitanja o proizvodu</li>
                    <li>• <strong>72% klijenata</strong> uči o proizvodu/servisu preko video-a</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Video povećava <strong>conversion rate za 80%</strong></li>
                    <li>• Video na landing strani povećava <strong>konverzije za 86%</strong></li>
                    <li>• Social media video ima <strong>1200% više share-ova</strong></li>
                    <li>• Video email marketing ima <strong>200-300% bolje CTR</strong></li>
                    <li>• Mobile video consumption raste <strong>100% godišnje</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <span>Video Marketing Strategija - Od Cilja do Realizacije</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Definisanje Video Marketing Ciljeva</h3>
                <p className="mb-4">
                  Pre kreiranja bilo kog video sadržaja, morate jasno definisati šta želite da postignete. Different goals require different video tipova i strategija.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Brand Awareness</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Cilj:</strong> Povećanje prepoznatljivosti</li>
                      <li>• <strong>Metrike:</strong> Reach, impressions, brand recall</li>
                      <li>• <strong>Video tipovi:</strong> Brand story, behind-the-scenes</li>
                      <li>• <strong>Platforme:</strong> YouTube, Facebook, Instagram</li>
                      <li>• <strong>Budget:</strong> 30-40% video budžeta</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Lead Generation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Cilj:</strong> Prikupljanje kontakata</li>
                      <li>• <strong>Metrike:</strong> CPL, conversion rate, form submissions</li>
                      <li>• <strong>Video tipovi:</strong> Educational, how-to, webinars</li>
                      <li>• <strong>Platforme:</strong> LinkedIn, YouTube, website</li>
                      <li>• <strong>Budget:</strong> 35-45% video budžeta</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Sales Conversion</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Cilj:</strong> Direktna prodaja</li>
                      <li>• <strong>Metrike:</strong> ROAS, CPA, revenue attributed</li>
                      <li>• <strong>Video tipovi:</strong> Product demos, testimonials</li>
                      <li>• <strong>Platforme:</strong> Website, email, retargeting ads</li>
                      <li>• <strong>Budget:</strong> 25-35% video budžeta</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Target Audience za Video Content</h3>
                <p className="mb-4">
                  Različite audience grupe konzumiraju video sadržaj na različite načine. Understanding your audience je ključ za kreiranje effective video content-a.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Video Audience Segmentacija:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div>
                        <h5 className="font-medium mb-2">Demografske karakteristike:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Gen Z (18-25):</strong> TikTok, Instagram Stories, kratki format</li>
                          <li>• <strong>Millennials (26-40):</strong> YouTube, Instagram, Facebook</li>
                          <li>• <strong>Gen X (41-55):</strong> Facebook, YouTube, LinkedIn</li>
                          <li>• <strong>Boomers (55+):</strong> Facebook, YouTube, duži format</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Behavioral preferences:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Mobile-first:</strong> Vertical format, subtitles, quick pace</li>
                          <li>• <strong>Desktop users:</strong> Horizontal format, detailed content</li>
                          <li>• <strong>Social browsers:</strong> Native social video, auto-play</li>
                          <li>• <strong>Search-driven:</strong> YouTube, educational content</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Video Content Mapping by Funnel Stage:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Awareness Stage:</strong> Educational content, industry insights, brand story videos</p>
                      <p><strong>Consideration Stage:</strong> Product comparisons, case studies, how-to guides</p>
                      <p><strong>Decision Stage:</strong> Product demos, customer testimonials, special offers</p>
                      <p><strong>Retention Stage:</strong> Tutorial videos, customer success stories, community content</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Video Types and Formats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Film className="w-6 h-6 text-primary" />
                <span>Tipovi Video Sadržaja za Mala Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Product Showcase Videos</h3>
                <p className="mb-4">
                  Najdirektiji način predstavljanja vašeg proizvoda ili usluge. Product video mogu povećati purchase intent za 97%.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Product Demo Video:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Trajanje:</strong> 60-90 sekundi</li>
                      <li>• <strong>Fokus:</strong> Key features i benefits</li>
                      <li>• <strong>Format:</strong> Screen recording + voice-over</li>
                      <li>• <strong>CTA:</strong> "Probaj besplatno" ili "Saznaj više"</li>
                      <li>• <strong>Platforms:</strong> Website, YouTube, social ads</li>
                      <li>• <strong>Cost:</strong> 50,000-120,000 RSD</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Unboxing Video:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Trajanje:</strong> 2-5 minuta</li>
                      <li>• <strong>Fokus:</strong> First impression experience</li>
                      <li>• <strong>Format:</strong> Close-up shots, natural lighting</li>
                      <li>• <strong>CTA:</strong> "Naruči svoj" ili "Iskusi razliku"</li>
                      <li>• <strong>Platforms:</strong> Instagram, TikTok, YouTube</li>
                      <li>• <strong>Cost:</strong> 30,000-80,000 RSD</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Educational Content Videos</h3>
                <p className="mb-4">
                  How-to i tutorial video establishment vas kao industry expert i grade trust sa potential customers.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Educational Video Strategija:</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      <div>
                        <h5 className="font-medium mb-2">Tutorial Videos:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Step-by-step instructions</li>
                          <li>• Problem-solving focus</li>
                          <li>• Clear visual demonstrations</li>
                          <li>• Downloadable resources</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Explainer Videos:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Complex concepts simplified</li>
                          <li>• Animation ili whiteboard style</li>
                          <li>• Clear narrative structure</li>
                          <li>• Strong value proposition</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Industry Insights:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Market trends analysis</li>
                          <li>• Expert predictions</li>
                          <li>• Data-driven content</li>
                          <li>• Thought leadership</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Primer: Accounting Firm Tutorial Video</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Naslov:</strong> "Kako da prijavite PDV - kompletni vodič u 5 minuta"</p>
                      <p><strong>Struktura:</strong> Problem setup (30s) → Step-by-step solution (3.5min) → CTA (30s)</p>
                      <p><strong>Resources:</strong> PDF checklist, template forms</p>
                      <p><strong>Result:</strong> 200% increase in consultation bookings</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Behind-the-Scenes Content</h3>
                <p className="mb-4">
                  Humanizuje vaš brand i stvara emotional connection sa audience. BTS content ima 50% higher engagement rate.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Team Introduction:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Personal stories</li>
                      <li>• Role explanations</li>
                      <li>• Fun facts</li>
                      <li>• Day-in-the-life</li>
                      <li>• Company culture</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Production Process:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How products are made</li>
                      <li>• Quality control</li>
                      <li>• Attention to detail</li>
                      <li>• Craftsmanship</li>
                      <li>• Time-lapse creation</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Office/Workshop Tour:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Workspace showcase</li>
                      <li>• Equipment demonstrations</li>
                      <li>• Safety measures</li>
                      <li>• Innovation areas</li>
                      <li>• Meeting spaces</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Success Stories</h3>
                <p className="mb-4">
                  Testimonial video su najbubedljiviji format za converting prospects. 89% marketara kaže da video testimoniali have best ROI.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Testimonial Video Structure:</h4>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Client introduction (who they are)</li>
                        <li>Problem description (what challenge they had)</li>
                        <li>Solution process (how you helped)</li>
                        <li>Results achieved (specific outcomes)</li>
                        <li>Recommendation (would they recommend you?)</li>
                      </ol>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Case Study Video Format:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Duration:</strong> 3-5 minuta</li>
                        <li>• <strong>Style:</strong> Documentary approach</li>
                        <li>• <strong>Elements:</strong> Interviews, B-roll, data visualization</li>
                        <li>• <strong>Focus:</strong> Quantifiable results</li>
                        <li>• <strong>Distribution:</strong> Website, LinkedIn, sales presentations</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Testimonial Video Best Practices:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Snimite u client's natural environment (their office ili home)</li>
                      <li>• Koristite open-ended questions da biste dobili authentic responses</li>
                      <li>• Focus na specific benefits i measurable outcomes</li>
                      <li>• Keep authentic emotion - don't over-script</li>
                      <li>• Include multiple customers za različite use cases</li>
                      <li>• Add graphics za key statistics i results</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Video Production */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-6 h-6 text-primary" />
                <span>Video Produkcija - Od Planiranja do Postprodukcije</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Pre-Production Planning</h3>
                <p className="mb-4">
                  90% uspeha video projekta zavisi od quality planning-a. Proper pre-production saves time, money i ensures results.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Video Brief Checklist:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Objective:</strong> Što želite postići?</li>
                        <li>• <strong>Target audience:</strong> Koga ciljalte?</li>
                        <li>• <strong>Key message:</strong> Glavnu poruku?</li>
                        <li>• <strong>Tone:</strong> Professional, casual, fun?</li>
                        <li>• <strong>Duration:</strong> Maksimalna dužina?</li>
                        <li>• <strong>Budget:</strong> Available resources?</li>
                        <li>• <strong>Timeline:</strong> Deadline za delivery?</li>
                        <li>• <strong>Distribution:</strong> Gde će se koristiti?</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Script Development:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Hook (0-5s):</strong> Grab attention immediately</li>
                        <li>• <strong>Problem (5-15s):</strong> Identify pain point</li>
                        <li>• <strong>Solution (15-45s):</strong> Present your offer</li>
                        <li>• <strong>Proof (45-60s):</strong> Social proof ili demo</li>
                        <li>• <strong>CTA (60-90s):</strong> Clear next step</li>
                        <li>• <strong>Contact info:</strong> How to reach you</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Storyboard Creation:</h4>
                    <p className="text-sm mb-3">
                      Storyboard je visual representation of your script. Čak i jednostavan sketch može značajno unaprediti production efficiency.
                    </p>
                    <div className="grid md:grid-cols-4 gap-2 text-xs">
                      <div className="border p-2 rounded">
                        <strong>Shot 1:</strong> Wide shot - office exterior
                      </div>
                      <div className="border p-2 rounded">
                        <strong>Shot 2:</strong> Medium shot - team working
                      </div>
                      <div className="border p-2 rounded">
                        <strong>Shot 3:</strong> Close-up - product detail
                      </div>
                      <div className="border p-2 rounded">
                        <strong>Shot 4:</strong> CTA screen with contact
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Equipment i Setup za Mala Preduzeća</h3>
                <p className="mb-4">
                  Ne morate imati Hollywood-level equipment za kreiranje professional video content-a. Smart choices mogu dati odličke rezultate sa ograničenim budžetom.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Starter Kit (30,000-80,000 RSD)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Camera:</strong> DSLR ili high-end smartphone</li>
                      <li>• <strong>Mikrofon:</strong> Lavalier ili shotgun mic</li>
                      <li>• <strong>Tripod:</strong> Stabilno snimanje</li>
                      <li>• <strong>Lighting:</strong> LED panel ili softbox</li>
                      <li>• <strong>Editing:</strong> iMovie ili DaVinci Resolve</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Professional Kit (150,000-400,000 RSD)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Camera:</strong> Canon EOS R ili Sony A7</li>
                      <li>• <strong>Lenses:</strong> 24-70mm + 50mm prime</li>
                      <li>• <strong>Audio:</strong> Rode Wireless GO II</li>
                      <li>• <strong>Lighting:</strong> 3-point lighting setup</li>
                      <li>• <strong>Editing:</strong> Adobe Premiere Pro</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Smartphone Setup (10,000-30,000 RSD)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Phone:</strong> iPhone ili flagship Android</li>
                      <li>• <strong>Gimbal:</strong> DJI OM stabilizer</li>
                      <li>• <strong>Mic:</strong> Wireless lavalier pentru phone</li>
                      <li>• <strong>Lighting:</strong> LED ring light</li>
                      <li>• <strong>Editing:</strong> CapCut ili InShot</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Video Production Tips</h3>
                <p className="mb-4">
                  Prava vrednost dolazi iz understanding basic production principles, ne samo iz expensive gear.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Lighting Fundamentals:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Key light:</strong> Primary illumination (45° angle)</li>
                        <li>• <strong>Fill light:</strong> Reduces shadows (opposite side)</li>
                        <li>• <strong>Back light:</strong> Separates subject from background</li>
                        <li>• <strong>Natural light:</strong> Najbolji je window light</li>
                        <li>• <strong>Golden hour:</strong> 1 hour before sunset</li>
                        <li>• <strong>Avoid:</strong> Harsh overhead lighting</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Audio Quality:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Proximity:</strong> Mic close to speaker (15-30cm)</li>
                        <li>• <strong>Environment:</strong> Quiet room with soft furnishing</li>
                        <li>• <strong>Backup:</strong> Always record backup audio</li>
                        <li>• <strong>Levels:</strong> Monitor audio levels live</li>
                        <li>• <strong>Wind protection:</strong> Use windscreen outdoors</li>
                        <li>• <strong>Room tone:</strong> Record 30s of silence</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Pro Production Tips:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Rule of thirds:</strong> Position subjects na intersections of grid lines</li>
                      <li>• <strong>Headroom:</strong> Leave space above subject's head (but not too much)</li>
                      <li>• <strong>Eye level:</strong> Camera na eye level za natural feel</li>
                      <li>• <strong>Stable shots:</strong> Use tripod ili stabilizer za professional look</li>
                      <li>• <strong>B-roll footage:</strong> Snimite extra content za editing flexibility</li>
                      <li>• <strong>Multiple takes:</strong> Uvek snimite više verzija najboljih delova</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Video Editing and Post-Production */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-primary" />
                <span>Video Editing i Post-Production</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Editing Software Options</h3>
                <p className="mb-4">
                  Proper editing može transformisati average footage u compelling content. Različite tools za različite skill levels i budgets.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Beginner-Friendly</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>iMovie:</strong> Free (Mac)</li>
                      <li>• <strong>Windows Movie Maker:</strong> Free (PC)</li>
                      <li>• <strong>CapCut:</strong> Free (mobile/desktop)</li>
                      <li>• <strong>InShot:</strong> Free/Premium</li>
                      <li>• <strong>Learning curve:</strong> 1-2 nedelje</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Intermediate</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Adobe Premiere Elements:</strong> $100</li>
                      <li>• <strong>Filmora:</strong> $60/year</li>
                      <li>• <strong>Camtasia:</strong> $250</li>
                      <li>• <strong>Final Cut Pro:</strong> $300 (Mac)</li>
                      <li>• <strong>Learning curve:</strong> 2-4 nedelje</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Professional</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Adobe Premiere Pro:</strong> $20/month</li>
                      <li>• <strong>DaVinci Resolve:</strong> Free/Paid</li>
                      <li>• <strong>Avid Media Composer:</strong> $24/month</li>
                      <li>• <strong>After Effects:</strong> $20/month</li>
                      <li>• <strong>Learning curve:</strong> 2-6 meseci</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-red-200">
                    <h4 className="font-semibold mb-3 text-red-700">Cloud-Based</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>WeVideo:</strong> $5-15/month</li>
                      <li>• <strong>Clipchamp:</strong> Free/Premium</li>
                      <li>• <strong>Adobe Premiere Rush:</strong> $10/month</li>
                      <li>• <strong>Loom:</strong> Free za screen recording</li>
                      <li>• <strong>Learning curve:</strong> 1-2 nedelje</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Editing Best Practices</h3>
                <p className="mb-4">
                  Good editing je invisible - publika trebalo bi da bude fokusirana na content, ne na cuts i transitions.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Editing Workflow:</h4>
                    <ol className="space-y-1 text-sm list-decimal list-inside">
                      <li><strong>Organization:</strong> Create folders za različite asset tipove (video, audio, graphics)</li>
                      <li><strong>Rough cut:</strong> Assemble basic story structure</li>
                      <li><strong>Fine cut:</strong> Refine timing i pacing</li>
                      <li><strong>Color correction:</strong> Balance exposure i colors</li>
                      <li><strong>Audio mix:</strong> Balance levels, add music</li>
                      <li><strong>Graphics:</strong> Add titles, lower thirds, call-outs</li>
                      <li><strong>Final review:</strong> Watch multiple times za errors</li>
                      <li><strong>Export:</strong> Multiple formats za different platforms</li>
                    </ol>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Pacing i Rhythm:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Faster cuts:</strong> Za energetic content</li>
                        <li>• <strong>Slower cuts:</strong> Za emotional moments</li>
                        <li>• <strong>Music sync:</strong> Cut on beat kad možete</li>
                        <li>• <strong>Breathing room:</strong> Don't rush everything</li>
                        <li>• <strong>Attention span:</strong> Plan around 8-12 second shots</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Visual Enhancements:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Color grading:</strong> Consistent look throughout</li>
                        <li>• <strong>Transitions:</strong> Simple cuts are usually best</li>
                        <li>• <strong>Text overlay:</strong> Key points i captions</li>
                        <li>• <strong>Lower thirds:</strong> Speaker identification</li>
                        <li>• <strong>Logo placement:</strong> Consistent branding</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Audio Post-Production</h3>
                <p className="mb-4">
                  Audio quality može make ili break video. Poor audio će turn off viewers faster než anything else.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Audio Cleanup:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Remove background noise</li>
                      <li>• Equalize frequency response</li>
                      <li>• Compress dynamic range</li>
                      <li>• De-ess harsh sibilants</li>
                      <li>• Sync audio with video</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Music i Sound Effects:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Background music:</strong> 20-30% volume</li>
                      <li>• <strong>Royalty-free sources:</strong> Epidemic Sound, AudioJungle</li>
                      <li>• <strong>Sound effects:</strong> Subtle enhancements</li>
                      <li>• <strong>Fade in/out:</strong> Smooth transitions</li>
                      <li>• <strong>Audio ducking:</strong> Music fades under speech</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Final Audio Mix:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Levels:</strong> Consistent throughout</li>
                      <li>• <strong>EQ matching:</strong> All speakers sound similar</li>
                      <li>• <strong>Limiting:</strong> Prevent audio clipping</li>
                      <li>• <strong>Test playback:</strong> Different devices/speakers</li>
                      <li>• <strong>Export quality:</strong> 48kHz, 16-bit minimum</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Platform Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Share2 className="w-6 h-6 text-primary" />
                <span>Platform Optimization i Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Platform-Specific Requirements</h3>
                <p className="mb-4">
                  Svaka platform ima different audience behaviors, algorithm preferences, i technical requirements.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4 border-red-200">
                      <h4 className="font-semibold mb-3 text-red-700">YouTube Optimization</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Aspect ratio:</strong> 16:9 (1920x1080)</li>
                        <li>• <strong>Length:</strong> 7-15 minuta za best retention</li>
                        <li>• <strong>Thumbnails:</strong> High contrast, clear faces</li>
                        <li>• <strong>Title:</strong> Front-load keywords, 60 chars max</li>
                        <li>• <strong>Description:</strong> First 125 chars crucial</li>
                        <li>• <strong>Tags:</strong> Mix of broad i specific keywords</li>
                        <li>• <strong>Captions:</strong> Improve accessibility i SEO</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-blue-200">
                      <h4 className="font-semibold mb-3 text-blue-700">Facebook/Instagram Feed</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Aspect ratio:</strong> 1:1 ili 4:5 za mejor reach</li>
                        <li>• <strong>Length:</strong> 15-60 sekundi za najviši engagement</li>
                        <li>• <strong>Captions:</strong> Prvi 125 characters visible</li>
                        <li>• <strong>Native upload:</strong> Better than linked videos</li>
                        <li>• <strong>Auto-play:</strong> Hook within first 3 seconds</li>
                        <li>• <strong>Subtitles:</strong> 85% watched without sound</li>
                        <li>• <strong>CTA:</strong> Clear call-to-action u caption</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4 border-purple-200">
                      <h4 className="font-semibold mb-3 text-purple-700">Instagram Stories/Reels</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Aspect ratio:</strong> 9:16 (vertical)</li>
                        <li>• <strong>Length:</strong> 15-30 sekundi za Stories, do 90s za Reels</li>
                        <li>• <strong>Text size:</strong> Large enough za mobile viewing</li>
                        <li>• <strong>Sound:</strong> Trending audio za mejor reach</li>
                        <li>• <strong>Hashtags:</strong> 3-5 relevant hashtags</li>
                        <li>• <strong>Interactive elements:</strong> Polls, questions, stickers</li>
                        <li>• <strong>Posting time:</strong> When audience je most active</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-green-200">
                      <h4 className="font-semibold mb-3 text-green-700">LinkedIn Video</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Aspect ratio:</strong> 1:1 ili 16:9</li>
                        <li>• <strong>Length:</strong> 30 sekundi - 3 minuta</li>
                        <li>• <strong>Professional tone:</strong> Industry insights, thought leadership</li>
                        <li>• <strong>Native upload:</strong> 5x više engagement než links</li>
                        <li>• <strong>Caption:</strong> Tell full story, video supports</li>
                        <li>• <strong>Business focus:</strong> Value-driven content</li>
                        <li>• <strong>Employee advocacy:</strong> Team sharing increases reach</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">SEO za Video Content</h3>
                <p className="mb-4">
                  Video SEO može significantly increase organic reach i discovery. Proper optimization helps both humans i algorithms understand your content.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">YouTube SEO Checklist:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Keyword research:</strong> Use TubeBuddy ili VidIQ</li>
                        <li>• <strong>Title optimization:</strong> Primary keyword u first 5 reči</li>
                        <li>• <strong>Description:</strong> 200+ words, multiple keywords</li>
                        <li>• <strong>Tags:</strong> 10-15 relevant tags</li>
                        <li>• <strong>Custom thumbnail:</strong> 5% higher CTR</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Closed captions:</strong> Upload SRT files</li>
                        <li>• <strong>End screens:</strong> Promote related videos</li>
                        <li>• <strong>Cards:</strong> Interactive elements during video</li>
                        <li>• <strong>Playlists:</strong> Group related content</li>
                        <li>• <strong>Community engagement:</strong> Respond to comments</li>
                      </ul>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Website Video SEO:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Schema markup:</strong> Help search engines understand video content</p>
                      <p><strong>Video sitemap:</strong> Submit to Google Search Console</p>
                      <p><strong>Embedding optimization:</strong> Use video hosting platforms za better loading</p>
                      <p><strong>Transcript inclusion:</strong> Full text content za indexing</p>
                      <p><strong>Page optimization:</strong> Surrounding text should be relevant</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Analytics and Measurement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Video Analytics i Merenje Performansi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Video Metrics</h3>
                <p className="mb-4">
                  Merenje proper metrics je essential za understanding što works i optimizing future video content.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Reach Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Views:</strong> Total video plays</li>
                      <li>• <strong>Impressions:</strong> Times video was shown</li>
                      <li>• <strong>Reach:</strong> Unique viewers</li>
                      <li>• <strong>CTR:</strong> Click-through rate</li>
                      <li>• <strong>CPM:</strong> Cost per mille impressions</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Engagement Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Watch time:</strong> Total minutes watched</li>
                      <li>• <strong>Retention rate:</strong> % of video watched</li>
                      <li>• <strong>Likes/Reactions:</strong> Positive feedback</li>
                      <li>• <strong>Comments:</strong> Conversation generated</li>
                      <li>• <strong>Shares:</strong> Viral potential</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Conversion Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Click-through:</strong> Video to website</li>
                      <li>• <strong>Lead generation:</strong> Forms completed</li>
                      <li>• <strong>Sales attributed:</strong> Revenue from video</li>
                      <li>• <strong>CPA:</strong> Cost per acquisition</li>
                      <li>• <strong>ROAS:</strong> Return on ad spend</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">Quality Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Completion rate:</strong> % watched to end</li>
                      <li>• <strong>Re-watch rate:</strong> Multiple views</li>
                      <li>• <strong>Drop-off points:</strong> Where viewers leave</li>
                      <li>• <strong>Audience retention:</strong> Engagement over time</li>
                      <li>• <strong>Sentiment:</strong> Positive vs negative reactions</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Analytics Tools za Video Marketing</h3>
                <p className="mb-4">
                  Različiti tools pružaju different insights. Kombinovanje multiple sources daje complete picture performance-a.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Native Platform Analytics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>YouTube Analytics:</strong> Detailed audience insights</li>
                        <li>• <strong>Facebook Insights:</strong> Demographics i behavior</li>
                        <li>• <strong>Instagram Insights:</strong> Stories i feed performance</li>
                        <li>• <strong>LinkedIn Analytics:</strong> Professional audience data</li>
                        <li>• <strong>TikTok Analytics:</strong> Trend i engagement analysis</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Third-Party Tools:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Sprout Social:</strong> Cross-platform video analytics</li>
                        <li>• <strong>Hootsuite:</strong> Social video performance</li>
                        <li>• <strong>VidIQ:</strong> YouTube optimization i analytics</li>
                        <li>• <strong>Wistia:</strong> Business video hosting i analytics</li>
                        <li>• <strong>Vimeo:</strong> Professional video analytics</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Business Analytics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Google Analytics:</strong> Website video performance</li>
                        <li>• <strong>UTM tracking:</strong> Source attribution</li>
                        <li>• <strong>CRM integration:</strong> Lead tracking</li>
                        <li>• <strong>Call tracking:</strong> Phone conversions</li>
                        <li>• <strong>Sales attribution:</strong> Revenue tracking</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Video Performance Benchmarks:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Good view rate:</strong> 15-30% za social media video</li>
                        <li>• <strong>Strong engagement rate:</strong> 4-6% za organic social video</li>
                        <li>• <strong>Excellent retention:</strong> 70%+ za first 30 seconds</li>
                        <li>• <strong>High completion rate:</strong> 50%+ za short videos (&lt;2 min)</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Quality CTR:</strong> 2-5% za video ads</li>
                        <li>• <strong>Good conversion rate:</strong> 3-5% from video traffic</li>
                        <li>• <strong>Positive ROAS:</strong> 4:1 ili better za video ads</li>
                        <li>• <strong>Healthy growth:</strong> 10-20% monthly increase u video metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Quiz */}
          <Quiz questions={quizQuestions} />

          {/* Budget and ROI */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-primary" />
                <span>Budžet i ROI Video Marketing Investicije</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Video Marketing Budget Planning</h3>
                <p className="mb-4">
                  Video marketing može biti cost-effective ako se pametno planira. Ključ je u finding right balance između quality i quantity.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">DIY Approach (20,000-50,000 RSD/mesec)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Equipment:</strong> Smartphone + accessories</li>
                      <li>• <strong>Software:</strong> Free editing tools</li>
                      <li>• <strong>Time:</strong> 10-15 hours/mesec</li>
                      <li>• <strong>Production:</strong> 4-8 videos/mesec</li>
                      <li>• <strong>Quality:</strong> Good enough za social media</li>
                      <li>• <strong>Ideal za:</strong> Startups, very small businesses</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Hybrid Approach (80,000-200,000 RSD/mesec)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Equipment:</strong> Professional camera setup</li>
                      <li>• <strong>Software:</strong> Adobe Creative Suite</li>
                      <li>• <strong>External help:</strong> Freelancer za editing</li>
                      <li>• <strong>Production:</strong> 6-12 videos/mesec</li>
                      <li>• <strong>Quality:</strong> Professional standard</li>
                      <li>• <strong>Ideal za:</strong> Small-medium businesses</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Full-Service (300,000+ RSD/mesec)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Production:</strong> Professional video agency</li>
                      <li>• <strong>Strategy:</strong> Dedicated video marketing team</li>
                      <li>• <strong>Distribution:</strong> Paid advertising budget</li>
                      <li>• <strong>Production:</strong> 8-15 videos/mesec</li>
                      <li>• <strong>Quality:</strong> Broadcast standard</li>
                      <li>• <strong>Ideal za:</strong> Established businesses</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Video Production Cost Breakdown</h3>
                <p className="mb-4">
                  Understanding where your money goes helps u making informed decisions about video investment.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Single Video Production Costs:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Pre-production (planning):</strong> 20,000-50,000 RSD</li>
                        <li>• <strong>Production (filming):</strong> 50,000-150,000 RSD</li>
                        <li>• <strong>Post-production (editing):</strong> 30,000-100,000 RSD</li>
                        <li>• <strong>Graphics/Animation:</strong> 20,000-80,000 RSD</li>
                        <li>• <strong>Music/Sound:</strong> 5,000-20,000 RSD</li>
                        <li>• <strong>Total:</strong> 125,000-400,000 RSD per video</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Ongoing Monthly Costs:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Content strategy:</strong> 40,000-80,000 RSD</li>
                        <li>• <strong>Production costs:</strong> 100,000-300,000 RSD</li>
                        <li>• <strong>Editing/Post:</strong> 60,000-150,000 RSD</li>
                        <li>• <strong>Distribution/Ads:</strong> 50,000-200,000 RSD</li>
                        <li>• <strong>Analytics/Tools:</strong> 10,000-30,000 RSD</li>
                        <li>• <strong>Total:</strong> 260,000-760,000 RSD/mesec</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cost-Saving Strategies:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Batch production:</strong> Snimite multiple videos u jednom danu</li>
                      <li>• <strong>Template approach:</strong> Create reusable video formats</li>
                      <li>• <strong>User-generated content:</strong> Encourage customers da kreiraju video</li>
                      <li>• <strong>Repurposing:</strong> Jedan video za multiple platforms i formats</li>
                      <li>• <strong>Seasonal planning:</strong> Plan i produce content u advance</li>
                      <li>• <strong>Equipment investment:</strong> Buy vs rent za long-term</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Measuring Video Marketing ROI</h3>
                <p className="mb-4">
                  Video marketing ROI može biti challenging za measure, ali je essential za justifying investment i optimizing strategy.
                </p>

                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Video Marketing ROI Formula:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Revenue Attribution:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Direct sales:</strong> Purchases traced to video views</li>
                        <li>• <strong>Lead value:</strong> Leads generated × average conversion rate × LTV</li>
                        <li>• <strong>Brand value:</strong> Increased brand awareness × estimated value</li>
                        <li>• <strong>Cost savings:</strong> Reduced customer service calls</li>
                        <li>• <strong>Retention value:</strong> Improved customer retention</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Investment Calculation:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Production costs:</strong> One-time video creation</li>
                        <li>• <strong>Distribution costs:</strong> Paid promotion budget</li>
                        <li>• <strong>Time investment:</strong> Internal team hours</li>
                        <li>• <strong>Tool costs:</strong> Software i analytics platforms</li>
                        <li>• <strong>Opportunity cost:</strong> Alternative marketing options</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm font-medium">ROI = (Revenue Attributed - Total Investment) / Total Investment × 100</p>
                    <p className="text-xs text-gray-600 mt-1">Example: (500,000 RSD revenue - 200,000 RSD investment) / 200,000 = 150% ROI</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Future Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span>Budućnost Video Marketinga - Trendovi 2025+</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Emerging Video Technologies</h3>
                <p className="mb-4">
                  Video marketing se rapidno evolutionary. Early adoption of new technologies može dati significant competitive advantage.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">AI-Powered Video</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Automated editing:</strong> AI cuts i optimizes footage</li>
                      <li>• <strong>Personalization:</strong> Dynamic video content</li>
                      <li>• <strong>Voice synthesis:</strong> AI-generated narration</li>
                      <li>• <strong>Real-time optimization:</strong> A/B testing automation</li>
                      <li>• <strong>Content suggestions:</strong> AI-recommended topics</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Interactive Video</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Clickable elements:</strong> In-video CTAs</li>
                      <li>• <strong>Branching narratives:</strong> Choose-your-own adventure</li>
                      <li>• <strong>Shoppable video:</strong> Direct product purchases</li>
                      <li>• <strong>Live polling:</strong> Real-time audience engagement</li>
                      <li>• <strong>AR integration:</strong> Augmented reality overlays</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Vertical Video Dominance</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Mobile-first:</strong> Vertical format preference</li>
                      <li>• <strong>Stories format:</strong> Cross-platform standardization</li>
                      <li>• <strong>Short-form content:</strong> 15-60 second videos</li>
                      <li>• <strong>Quick consumption:</strong> Snackable content</li>
                      <li>• <strong>Higher engagement:</strong> Better mobile UX</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Platform Evolution Predictions</h3>
                <p className="mb-4">
                  Understanding platform directions helps u planning long-term video strategy i resource allocation.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Platform Predictions za 2025-2026:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>YouTube:</strong> Enhanced shopping integration, AR try-ons</li>
                        <li>• <strong>Instagram:</strong> More e-commerce features, longer Reels</li>
                        <li>• <strong>TikTok:</strong> Business tools expansion, live shopping</li>
                        <li>• <strong>LinkedIn:</strong> Live streaming für B2B, event integration</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Facebook:</strong> VR integration, virtual events</li>
                        <li>• <strong>Twitter/X:</strong> Video monetization, creator economy</li>
                        <li>• <strong>New platforms:</strong> Emerging social video apps</li>
                        <li>• <strong>Audio-visual:</strong> Podcast-video hybrid formats</li>
                      </ul>
                    </div>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Preparing za Future of Video Marketing:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Skill development:</strong> Invest u team training za new technologies</p>
                      <p><strong>Equipment planning:</strong> Future-proof camera i editing setup</p>
                      <p><strong>Platform diversification:</strong> Don't rely na single platform</p>
                      <p><strong>Content library:</strong> Build reusable video assets</p>
                      <p><strong>Analytics evolution:</strong> Track emerging metrics i KPIs</p>
                    </div>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>90-Day Video Marketing Action Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Your Video Marketing Launch Strategy</h3>
                <p className="mb-4">
                  Follow this step-by-step plan da biste launched effective video marketing strategy za your business.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Days 1-30: Foundation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Define video marketing goals</li>
                      <li>• ✅ Research target audience preferences</li>
                      <li>• ✅ Competitor video content analysis</li>
                      <li>• ✅ Choose equipment i software</li>
                      <li>• ✅ Create content calendar</li>
                      <li>• ✅ Set up analytics tracking</li>
                      <li>• ✅ Produce first 2-3 videos</li>
                      <li>• ✅ Establish brand video guidelines</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Days 31-60: Production</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Create video templates i workflows</li>
                      <li>• ✅ Establish shooting schedule</li>
                      <li>• ✅ Produce 8-12 different video types</li>
                      <li>• ✅ Test different platforms</li>
                      <li>• ✅ Gather initial performance data</li>
                      <li>• ✅ Collect customer testimonials</li>
                      <li>• ✅ Optimize based za early results</li>
                      <li>• ✅ Plan video advertising campaigns</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Days 61-90: Optimization</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Launch paid video advertising</li>
                      <li>• ✅ A/B test different video formats</li>
                      <li>• ✅ Implement advanced analytics</li>
                      <li>• ✅ Scale successful content types</li>
                      <li>• ✅ Partner with influencers</li>
                      <li>• ✅ Create video series za engagement</li>
                      <li>• ✅ Measure i report ROI</li>
                      <li>• ✅ Plan Q2 video strategy</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Start Video Ideas</h3>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">10 Video Ideas You Can Make This Week:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>• 🎬 "Iza kulisa" tour of your business</li>
                      <li>• 💼 "Dan u životu" business owner/employee</li>
                      <li>• 🏆 Customer success story interview</li>
                      <li>• 📚 How-to tutorial (solve common problem)</li>
                      <li>• ❓ FAQ video (answer 5 common questions)</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• 📦 Product unboxing ili demonstration</li>
                      <li>• 👥 Team introduction i company culture</li>
                      <li>• 🔧 Before/after transformation showcase</li>
                      <li>• 💡 Industry tips i insights</li>
                      <li>• 🎉 Company milestone ili achievement celebration</li>
                    </ul>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Pokrenite Video Marketing Strategiju Danas!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Video content je budućnost digital marketinga. Počnite kreiranje video sadržaja koji će privlačiti klijente i povećavati prodaju.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Video Marketing Konsultacije</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/cene">Pogledaj Video Pakete</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BlogArticle20;