import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Tag, Bot, Zap, Target, TrendingUp, Users, DollarSign, Settings, Mail, Calendar, BarChart3, Shield, CheckCircle, Star } from "lucide-react";
import Quiz from "@/components/Quiz";

const BlogArticle21 = () => {
  const quizQuestions = [
    {
      question: "Koliko času marketing automation može uštedeti mesečno za malo preduzeće?",
      options: [
        "5-10 sati mesečno",
        "15-25 sati mesečno",
        "30-50 sati mesečno",
        "60+ sati mesečno"
      ],
      correct: 2,
      explanation: "Marketing automation može uštedeti 30-50 sati mesečno eliminisanjem manuelnih zadataka kao što su slanje email-ova, lead scoring, social media posting i customer segmentation."
    },
    {
      question: "Koja je najvažnija metrika za merenje uspeha email automation kampanje?",
      options: [
        "Open rate (% otvaranja)",
        "Click-through rate (CTR)",
        "Conversion rate (% konverzija)",
        "Unsubscribe rate (% odjave)"
      ],
      correct: 2,
      explanation: "Conversion rate je najvažnija metrika jer meri koliko ljudi stvarno preduzima željenu akciju (kupovina, registracija, download). Ostale metrike su važne, ali konverzija je ultimatni cilj."
    },
    {
      question: "Koliko košta implementacija osnovne marketing automation za mala preduzeća u Srbiji?",
      options: [
        "5,000-15,000 RSD mesečno",
        "20,000-40,000 RSD mesečno",
        "50,000-80,000 RSD mesečno",
        "100,000+ RSD mesečno"
      ],
      correct: 1,
      explanation: "Osnovna marketing automation (email automation, CRM, basic workflows) košta 20,000-40,000 RSD mesečno. To uključuje software, setup i održavanje za mala preduzeća."
    },
    {
      question: "Koji procenat kompanija koristi marketing automation, a koje nemaju implementiran sistem?",
      options: [
        "25% koristi, 75% nema",
        "40% koristi, 60% nema",
        "55% koristi, 45% nema",
        "70% koristi, 30% nema"
      ],
      correct: 1,
      explanation: "Samo 40% kompanija koristi marketing automation, što znači da 60% još uvek nema implementiran sistem. Ovo predstavlja veliku priliku za competitive advantage."
    },
    {
      question: "Koliko povećanje konverzije omogućava well-implemented marketing automation?",
      options: [
        "10-20% povećanje",
        "25-35% povećanje",
        "40-60% povećanje",
        "70-100% povećanje"
      ],
      correct: 2,
      explanation: "Marketing automation može povećati konverzije za 40-60% kroz personalizovane customer journeys, timely follow-ups i targeted messaging based na customer behavior i preferences."
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
                <span>38 min čitanja</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Poruči Sajt Tim</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>Marketing Automation</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Marketing Automation za Mala Preduzeća - Kompletni Vodič kroz Automatizaciju koja Povećava Prodaju 2025
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Kako da automatizujete marketing procese i uštedite 30+ sati mesečno dok povećavate konverzije za 50%. Od email automation do kompleksnih customer journeys - sve što trebate za uspešnu automatizaciju.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Marketing Automation Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bot className="w-6 h-6 text-primary" />
                <span>Šta je Marketing Automation i Zašto je Ključna za Vaš Biznis?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Marketing automation je korišćenje software-a i tehnologija za automatizaciju repetitivnih marketing zadataka, personalizaciju customer experience-a i nurturing leads kroz sales funnel. Za mala preduzeća u Srbiji, ovo predstavlja game-changer koji omogućava konkurisanje sa većim kompanijama.
              </p>
              <p>
                Umesto da manualno šaljete email-ove, pratite leads ili upravljate social media content-om, marketing automation vam omogućava da postavite sistem koji radi 24/7, personalilzuje komunikaciju sa svakim klijentom i automatski optimizuje rezultate.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Marketing Automation u Brojkama:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• <strong>77% kompanija</strong> koristi neku formu marketing automation</li>
                    <li>• <strong>80% korisnika</strong> vidi povećanje broja kvalifikovanih leads</li>
                    <li>• <strong>451% više kvalifikovanih leads</strong> od automated email campaigns</li>
                    <li>• <strong>14.5% povećanje sales productivity</strong> sa automation</li>
                    <li>• <strong>12.2% redukcija marketing overhead-a</strong></li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• <strong>30+ sati mesečno</strong> uštede na manualnim zadacima</li>
                    <li>• <strong>50% povećanje conversion rate</strong> kroz personalizaciju</li>
                    <li>• <strong>320% više revenue</strong> od automated email campaigns</li>
                    <li>• <strong>37% faster sales cycle</strong> sa lead nurturing</li>
                    <li>• <strong>ROI od 5.44$</strong> za svaki $1 uložen u automation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits for Small Businesses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Benefiti Marketing Automation za Mala Preduzeća</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Kompetitivne Prednosti za Srpska Mala Preduzeća</h3>
                <p className="mb-4">
                  U Srbiji, gde većina malih preduzeća još uvek koristi manualne marketing metode, implementacija automation sistema može dati značajnu competitive advantage.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Operativne Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Vremenska ušteda:</strong> 30-50h mesečno</li>
                      <li>• <strong>Skalabilnost:</strong> Isti effort, više klijenata</li>
                      <li>• <strong>Konzistentnost:</strong> Standardizovana komunikacija</li>
                      <li>• <strong>24/7 rad:</strong> Marketing nikad ne spava</li>
                      <li>• <strong>Smanjenje grešaka:</strong> Manje human error</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Marketing Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Personalizacija:</strong> Targeted messaging</li>
                      <li>• <strong>Lead nurturing:</strong> Automated follow-ups</li>
                      <li>• <strong>Segmentacija:</strong> Precise targeting</li>
                      <li>• <strong>Multi-channel:</strong> Coordinated campaigns</li>
                      <li>• <strong>A/B testing:</strong> Continuous optimization</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Business Prednosti</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Povećanje ROI:</strong> 544% average return</li>
                      <li>• <strong>Faster sales:</strong> Shorter conversion time</li>
                      <li>• <strong>Better retention:</strong> Improved customer loyalty</li>
                      <li>• <strong>Predictable revenue:</strong> Systematic approach</li>
                      <li>• <strong>Data insights:</strong> Better decision making</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tipični Problemi koji Marketing Automation Rešava</h3>
                <p className="mb-4">
                  Mala preduzeća u Srbiji često se suočavaju sa specific challenges koje automation može da reši efikasno.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Pre Automation - Tipični Problemi:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Manualno slanje email-ova:</strong> Vremenske gužve, zaboravljanje</li>
                        <li>• <strong>Inconsistent follow-up:</strong> Leads se gube u procesu</li>
                        <li>• <strong>Generic komunikacija:</strong> Isti message za sve klijente</li>
                        <li>• <strong>Social media chaos:</strong> Nepravilan posting, no strategy</li>
                        <li>• <strong>Lead management:</strong> Excel tabele, lost opportunities</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>No customer journey:</strong> Random touchpoints</li>
                        <li>• <strong>Report headaches:</strong> Manual data collection</li>
                        <li>• <strong>Team bottlenecks:</strong> Jedan čovek sve radi</li>
                        <li>• <strong>Missed opportunities:</strong> No systematic approach</li>
                        <li>• <strong>Burnout risk:</strong> Repetitive tasks, long hours</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sa Automation - Rešene Probleme:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Automated email sequences:</strong> Set-and-forget campaigns</li>
                        <li>• <strong>Smart lead nurturing:</strong> Timely, relevant follow-ups</li>
                        <li>• <strong>Personalized messaging:</strong> Dynamic content based na behavior</li>
                        <li>• <strong>Scheduled social posts:</strong> Consistent online presence</li>
                        <li>• <strong>CRM integration:</strong> Centralized customer data</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Mapped customer journeys:</strong> Strategic touchpoints</li>
                        <li>• <strong>Automated reporting:</strong> Real-time insights</li>
                        <li>• <strong>Scalable processes:</strong> Growth without proportional effort</li>
                        <li>• <strong>Triggered actions:</strong> Right message, right time</li>
                        <li>• <strong>Strategic focus:</strong> Time for big-picture thinking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Email Marketing Automation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-primary" />
                <span>Email Marketing Automation - Temelj Automatizovane Komunikacije</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Automation Basics za Srbija Market</h3>
                <p className="mb-4">
                  Email ostaje najjači ROI channel za mala preduzeća. U Srbiji, gde je email adoption visok, ali automation nizak, ovo predstavlja golden opportunity.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Essential Email Automation Types:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Welcome series:</strong> Prvi utisak za nove subscribere</li>
                      <li>• <strong>Lead nurturing:</strong> Obrazovanje potential customers</li>
                      <li>• <strong>Re-engagement:</strong> Reactivation inactive subscribers</li>
                      <li>• <strong>Cart abandonment:</strong> E-commerce recovery campaigns</li>
                      <li>• <strong>Post-purchase:</strong> Upsell i customer retention</li>
                      <li>• <strong>Birthday/Anniversary:</strong> Personal touch automation</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Email Automation Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>320% više revenue</strong> od automated emails</li>
                      <li>• <strong>70.5% higher open rates</strong> vs broadcast</li>
                      <li>• <strong>152% higher CTR</strong> sa personalization</li>
                      <li>• <strong>50% reduction</strong> u customer acquisition cost</li>
                      <li>• <strong>37% faster</strong> lead-to-customer conversion</li>
                      <li>• <strong>24/7 lead nurturing</strong> without manual effort</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Email Automation Workflows</h3>
                <p className="mb-4">
                  Effective automation workflows are the backbone of successful email marketing. Evo najpopularnijih i najdelotvornih workflows za mala preduzeća.
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Welcome Email Series - Prvi Utisak Challenge:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Trigger:</strong> Nova email subscription</p>
                      <p><strong>Timeline:</strong> 7 dana, 4 email-a</p>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <h5 className="font-medium mb-1">Email Structure:</h5>
                          <ul className="space-y-1">
                            <li>• <strong>Email 1 (Dan 0):</strong> Dobrodošlica + bonus</li>
                            <li>• <strong>Email 2 (Dan 2):</strong> Brand story + values</li>
                            <li>• <strong>Email 3 (Dan 5):</strong> Best products/services</li>
                            <li>• <strong>Email 4 (Dan 7):</strong> Social proof + CTA</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Expected Results:</h5>
                          <ul className="space-y-1">
                            <li>• <strong>60-80% open rate</strong> za first email</li>
                            <li>• <strong>25-40% CTR</strong> kroz series</li>
                            <li>• <strong>8-15% conversion</strong> to customer</li>
                            <li>• <strong>30% engagement increase</strong> vs non-welcome</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lead Nurturing Campaign - Education + Trust Building:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Trigger:</strong> Lead magnet download ili form submission</p>
                      <p><strong>Timeline:</strong> 4 nedelje, 8 email-a</p>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <h5 className="font-medium mb-1">Content Strategy:</h5>
                          <ul className="space-y-1">
                            <li>• <strong>Nedelja 1:</strong> Problem identification + education</li>
                            <li>• <strong>Nedelja 2:</strong> Solution options + best practices</li>
                            <li>• <strong>Nedelja 3:</strong> Case studies + social proof</li>
                            <li>• <strong>Nedelja 4:</strong> Product presentation + special offer</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Conversion Metrics:</h5>
                          <ul className="space-y-1">
                            <li>• <strong>40-60% email completion rate</strong></li>
                            <li>• <strong>15-25% web traffic increase</strong></li>
                            <li>• <strong>5-12% final conversion rate</strong></li>
                            <li>• <strong>2-3x longer engagement</strong> vs no nurturing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Re-engagement Campaign - Win Back Inactive Subscribers:</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Trigger:</strong> No engagement za 60+ dana</p>
                      <p><strong>Timeline:</strong> 10 dana, 3 email-a</p>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <h5 className="font-medium mb-1">Re-engagement Strategy:</h5>
                          <ul className="space-y-1">
                            <li>• <strong>Email 1:</strong> "Nedostaješ nam" + preference center</li>
                            <li>• <strong>Email 2:</strong> Exclusive offer + last chance</li>
                            <li>• <strong>Email 3:</strong> Final goodbye + feedback request</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Success Metrics:</h5>
                          <ul className="space-y-1">
                            <li>• <strong>15-25% re-engagement rate</strong></li>
                            <li>• <strong>5-10% conversion from offers</strong></li>
                            <li>• <strong>List hygiene improvement</strong></li>
                            <li>• <strong>Better deliverability</strong> overall</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Lead Management and CRM Automation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span>Lead Management i CRM Automation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Automated Lead Qualification i Scoring</h3>
                <p className="mb-4">
                  Automated lead management omogućava vam da identifikujete najkvalitetnije leads i focusirate sales efforts na one sa najvećim potential-om za konverziju.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Lead Scoring Criteria:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Demographic data (+5-20 poena):</strong></li>
                      <li>&nbsp;&nbsp;- Company size, industry, role</li>
                      <li>&nbsp;&nbsp;- Geographic location, budget indicators</li>
                      <li>• <strong>Behavioral signals (+1-15 poena):</strong></li>
                      <li>&nbsp;&nbsp;- Website visits, time spent</li>
                      <li>&nbsp;&nbsp;- Content downloads, email engagement</li>
                      <li>• <strong>Engagement level (+1-10 poena):</strong></li>
                      <li>&nbsp;&nbsp;- Social media interactions</li>
                      <li>&nbsp;&nbsp;- Webinar attendance, demo requests</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Automated Actions Based on Score:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>0-25 poena - Cold lead:</strong></li>
                      <li>&nbsp;&nbsp;- Automatic nurturing campaign</li>
                      <li>&nbsp;&nbsp;- Educational content delivery</li>
                      <li>• <strong>26-50 poena - Warm lead:</strong></li>
                      <li>&nbsp;&nbsp;- Targeted email sequences</li>
                      <li>&nbsp;&nbsp;- Personalized content recommendations</li>
                      <li>• <strong>51+ poena - Hot lead:</strong></li>
                      <li>&nbsp;&nbsp;- Immediate sales notification</li>
                      <li>&nbsp;&nbsp;- Priority follow-up scheduling</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">CRM Integration i Customer Journey Mapping</h3>
                <p className="mb-4">
                  Integrating your CRM sa marketing automation tools stvara seamless customer experience i omogućava complete view customer lifecycle-a.
                </p>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Customer Journey Automation Stages:</h4>
                    <div className="grid md:grid-cols-4 gap-2 mt-3">
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">Awareness</h5>
                        <p className="text-xs mt-1">Blog content, social media, SEO</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">Consideration</h5>
                        <p className="text-xs mt-1">Lead magnets, webinars, demos</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">Decision</h5>
                        <p className="text-xs mt-1">Proposals, consultations, trials</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-sm">Retention</h5>
                        <p className="text-xs mt-1">Onboarding, upsells, loyalty</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">CRM Data Synchronization:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Real-time updates:</strong> Marketing actions → CRM</li>
                        <li>• <strong>Behavioral tracking:</strong> Website + email data</li>
                        <li>• <strong>Contact enrichment:</strong> Progressive profiling</li>
                        <li>• <strong>Sales alerts:</strong> Hot lead notifications</li>
                        <li>• <strong>Pipeline automation:</strong> Stage progression rules</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Automated Customer Segmentation:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Dynamic lists:</strong> Behavior-based grouping</li>
                        <li>• <strong>Purchase history:</strong> RFM segmentation</li>
                        <li>• <strong>Engagement level:</strong> Active vs passive</li>
                        <li>• <strong>Lifecycle stage:</strong> New, active, at-risk</li>
                        <li>• <strong>Custom criteria:</strong> Business-specific rules</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Sales & Marketing Alignment:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Lead handoff automation:</strong> Qualified leads → Sales</li>
                        <li>• <strong>Follow-up reminders:</strong> Automatic task creation</li>
                        <li>• <strong>Performance tracking:</strong> Shared dashboards</li>
                        <li>• <strong>Feedback loops:</strong> Sales insights → Marketing</li>
                        <li>• <strong>Attribution reporting:</strong> Marketing influence na sales</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Social Media Automation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>Social Media Automation i Content Scheduling</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Strategic Social Media Automation</h3>
                <p className="mb-4">
                  Social media automation nije samo o scheduling posts - to je o kreiranje consistent brand presence, engaging sa audience i driving traffic towards conversion goals.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Automation Possibilities:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Content scheduling:</strong> Posts, stories, reels</li>
                      <li>• <strong>Cross-platform posting:</strong> One content, multiple channels</li>
                      <li>• <strong>Hashtag optimization:</strong> Dynamic tag suggestions</li>
                      <li>• <strong>Audience targeting:</strong> Time zone optimization</li>
                      <li>• <strong>Engagement monitoring:</strong> Comment/mention alerts</li>
                      <li>• <strong>Content curation:</strong> Industry news sharing</li>
                      <li>• <strong>User-generated content:</strong> Automatic reposting</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Smart Automation Limits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Ne automatiziraj:</strong> Direct responses</li>
                      <li>• <strong>Paziti na:</strong> Crisis communication</li>
                      <li>• <strong>Ograničiti:</strong> Promotional content (80/20 rule)</li>
                      <li>• <strong>Monitorisati:</strong> Brand mentions i sentiment</li>
                      <li>• <strong>Balansirati:</strong> Automation vs human touch</li>
                      <li>• <strong>Testirati:</strong> Posting times i frequency</li>
                      <li>• <strong>Prilagođavati:</strong> Platform-specific content</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Content Calendar Automation</h3>
                <p className="mb-4">
                  Effective content calendar automation helps maintain consistent posting schedule while ensuring content diversity i strategic alignment sa business goals.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Weekly Content Automation Template:</h4>
                    <div className="grid md:grid-cols-7 gap-2 mt-3">
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">PON</h5>
                        <p className="text-xs mt-1">Motivational Monday</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">UTO</h5>
                        <p className="text-xs mt-1">Tutorial Tuesday</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">SRE</h5>
                        <p className="text-xs mt-1">Wisdom Wednesday</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">ČET</h5>
                        <p className="text-xs mt-1">Throwback Thursday</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">PET</h5>
                        <p className="text-xs mt-1">Feature Friday</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">SUB</h5>
                        <p className="text-xs mt-1">Saturday Stories</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded border">
                        <h5 className="font-medium text-xs">NED</h5>
                        <p className="text-xs mt-1">Sunday Spotlight</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Facebook/Instagram Automation:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Best posting times:</strong> 9-10h, 15-16h</li>
                        <li>• <strong>Frequency:</strong> 1-2 posts daily max</li>
                        <li>• <strong>Content mix:</strong> 60% educational, 30% engaging, 10% promotional</li>
                        <li>• <strong>Story automation:</strong> Behind-scenes content</li>
                        <li>• <strong>Cross-posting:</strong> Platform-optimized formats</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">LinkedIn B2B Automation:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Professional timing:</strong> 8-9h, 12-13h, 17-18h</li>
                        <li>• <strong>Content focus:</strong> Industry insights, thought leadership</li>
                        <li>• <strong>Employee advocacy:</strong> Team sharing automation</li>
                        <li>• <strong>Company updates:</strong> Achievement highlights</li>
                        <li>• <strong>Article publishing:</strong> Long-form content schedule</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Multi-Platform Strategy:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Content adaptation:</strong> Platform-specific formatting</li>
                        <li>• <strong>Audience targeting:</strong> Different messaging tone</li>
                        <li>• <strong>Engagement tracking:</strong> Cross-platform analytics</li>
                        <li>• <strong>Lead generation:</strong> Traffic funneling to website</li>
                        <li>• <strong>Brand consistency:</strong> Unified visual identity</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Marketing Automation Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-6 h-6 text-primary" />
                <span>Marketing Automation Tools i Platforms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Choosing Right Automation Platform</h3>
                <p className="mb-4">
                  Selection of marketing automation platform depends on your business size, industry, technical expertise i budget. Evo comprehensive overview options za serbian small businesses.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Beginner-Friendly</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Mailchimp:</strong> $10-300/month</li>
                      <li>• <strong>ConvertKit:</strong> $29-119/month</li>
                      <li>• <strong>ActiveCampaign:</strong> $39-229/month</li>
                      <li>• <strong>GetResponse:</strong> $19-99/month</li>
                      <li>• <strong>Moosend:</strong> $8-34/month</li>
                      <li className="text-green-600 font-medium">Za početnike u automation</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Mid-Market Solutions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>HubSpot:</strong> Free-$1,200/month</li>
                      <li>• <strong>Klaviyo:</strong> $45-1,700/month</li>
                      <li>• <strong>Pardot (Salesforce):</strong> $1,250/month</li>
                      <li>• <strong>Drip:</strong> $39-1,599/month</li>
                      <li>• <strong>Autopilot:</strong> $99-399/month</li>
                      <li className="text-blue-600 font-medium">Za growing businesses</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Enterprise Platforms</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Marketo:</strong> $1,795+/month</li>
                      <li>• <strong>Eloqua (Oracle):</strong> $2,000+/month</li>
                      <li>• <strong>Adobe Campaign:</strong> Custom pricing</li>
                      <li>• <strong>Salesforce Marketing Cloud:</strong> $1,250+/month</li>
                      <li>• <strong>IBM Watson Campaign:</strong> Custom</li>
                      <li className="text-purple-600 font-medium">Za large enterprises</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">Serbian-Friendly Options</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Mailchimp:</strong> Najbolji support</li>
                      <li>• <strong>HubSpot:</strong> Serbian interface</li>
                      <li>• <strong>ActiveCampaign:</strong> Local integration</li>
                      <li>• <strong>GetResponse:</strong> Affordable + powerful</li>
                      <li>• <strong>ConvertKit:</strong> Creator-focused</li>
                      <li className="text-orange-600 font-medium">Lokalno optimizovane</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Platform Comparison za Srpska Mala Preduzeća</h3>
                <p className="mb-4">
                  Detailed comparison based na features most relevant za serbian small businesses, including pricing u RSD equivalents.
                </p>

                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-2 text-left">Platform</th>
                          <th className="border border-gray-300 p-2 text-left">Mesečna Cena (RSD)</th>
                          <th className="border border-gray-300 p-2 text-left">Email Automation</th>
                          <th className="border border-gray-300 p-2 text-left">CRM Integration</th>
                          <th className="border border-gray-300 p-2 text-left">Social Media</th>
                          <th className="border border-gray-300 p-2 text-left">Landing Pages</th>
                          <th className="border border-gray-300 p-2 text-left">Analytics</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">Mailchimp</td>
                          <td className="border border-gray-300 p-2">1,200-36,000</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">HubSpot</td>
                          <td className="border border-gray-300 p-2">0-144,000</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">ActiveCampaign</td>
                          <td className="border border-gray-300 p-2">4,700-27,500</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">GetResponse</td>
                          <td className="border border-gray-300 p-2">2,300-11,900</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 p-2">⭐⭐⭐</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">💡 Recommendation za Srpska Mala Preduzeća:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Početnici (0-1,000 kontakata):</strong> Mailchimp Free ili GetResponse Basic</li>
                        <li>• <strong>Growing businesses (1,000-5,000):</strong> ActiveCampaign ili HubSpot Starter</li>
                        <li>• <strong>Established SMEs (5,000+):</strong> HubSpot Professional ili Klaviyo</li>
                        <li>• <strong>E-commerce focus:</strong> Klaviyo ili Mailchimp Standard</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>B2B companies:</strong> HubSpot ili Pardot (ako je budget allows)</li>
                        <li>• <strong>Content creators:</strong> ConvertKit ili Beehiiv</li>
                        <li>• <strong>Local service businesses:</strong> Mailchimp ili GetResponse</li>
                        <li>• <strong>SaaS companies:</strong> Customer.io ili Intercom</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Quiz */}
          <Quiz questions={quizQuestions} />

          {/* Implementation Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-primary" />
                <span>Implementation Strategy - Korak po Korak Vodič</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">90-Day Marketing Automation Implementation Plan</h3>
                <p className="mb-4">
                  Follow this systematic approach za successful marketing automation implementation. Ovaj plan je designed specifically za srpska mala preduzeća.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Mesec 1: Foundation (Dani 1-30)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Audit existing marketing processes</li>
                      <li>• ✅ Define automation goals i KPIs</li>
                      <li>• ✅ Choose automation platform</li>
                      <li>• ✅ Set up basic email templates</li>
                      <li>• ✅ Import i clean contact database</li>
                      <li>• ✅ Create lead magnets</li>
                      <li>• ✅ Install tracking pixels</li>
                      <li>• ✅ Basic welcome email sequence</li>
                      <li>• ✅ Team training na platform</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Mesec 2: Automation (Dani 31-60)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Lead nurturing workflows</li>
                      <li>• ✅ Social media scheduling</li>
                      <li>• ✅ CRM integration setup</li>
                      <li>• ✅ Lead scoring system</li>
                      <li>• ✅ Segmentation rules</li>
                      <li>• ✅ Landing page creation</li>
                      <li>• ✅ A/B testing za subject lines</li>
                      <li>• ✅ Re-engagement campaign</li>
                      <li>• ✅ Analytics dashboard setup</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Mesec 3: Optimization (Dani 61-90)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Advanced workflows</li>
                      <li>• ✅ Behavioral triggers</li>
                      <li>• ✅ Cross-platform integration</li>
                      <li>• ✅ Advanced segmentation</li>
                      <li>• ✅ Predictive analytics</li>
                      <li>• ✅ ROI measurement</li>
                      <li>• ✅ Team process documentation</li>
                      <li>• ✅ Quarterly strategy planning</li>
                      <li>• ✅ Scale successful campaigns</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Common Implementation Challenges i Solutions</h3>
                <p className="mb-4">
                  Understanding typical obstacles helps you prepare i avoid common pitfalls during automation implementation.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4 border-red-200">
                      <h4 className="font-semibold mb-3 text-red-700">Česti Problemi:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Data quality issues:</strong> Nevalidni email-ovi, duplicates</li>
                        <li>• <strong>Over-automation:</strong> Gubite human touch</li>
                        <li>• <strong>Poor segmentation:</strong> Generic messaging</li>
                        <li>• <strong>Lack of testing:</strong> Broken workflows</li>
                        <li>• <strong>No clear strategy:</strong> Random automation</li>
                        <li>• <strong>Team resistance:</strong> Fear of technology</li>
                        <li>• <strong>Unrealistic expectations:</strong> Overnight results</li>
                      </ul>
                    </Card>
                    <Card className="p-4 border-green-200">
                      <h4 className="font-semibold mb-3 text-green-700">Proven Solutions:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Data hygiene:</strong> Regular list cleaning i validation</li>
                        <li>• <strong>Balance automation:</strong> 80% automated, 20% personal</li>
                        <li>• <strong>Smart segmentation:</strong> Behavior + demographic data</li>
                        <li>• <strong>Thorough testing:</strong> Test every workflow multiple times</li>
                        <li>• <strong>Strategic planning:</strong> Clear goals i customer journey mapping</li>
                        <li>• <strong>Team education:</strong> Training i change management</li>
                        <li>• <strong>Gradual rollout:</strong> Start simple, build complexity</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🎯 Success Factors za Srpska Mala Preduzeća:</h4>
                    <div className="grid md:grid-cols-3 gap-4 mt-3">
                      <div>
                        <h5 className="font-medium mb-1">Technical Factors:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Choose user-friendly platform</li>
                          <li>• Ensure proper integrations</li>
                          <li>• Regular backup i maintenance</li>
                          <li>• Mobile-optimized templates</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Strategic Factors:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Clear automation goals</li>
                          <li>• Customer-centric approach</li>
                          <li>• Regular performance review</li>
                          <li>• Continuous optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Human Factors:</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Team buy-in i training</li>
                          <li>• Dedicated automation manager</li>
                          <li>• Regular team communication</li>
                          <li>• Celebrate automation wins</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* ROI and Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>ROI Merenje i Analytics za Marketing Automation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Performance Indicators (KPIs) za Automation Success</h3>
                <p className="mb-4">
                  Measuring automation success zahteva tracking right metrics that align sa your business goals. Evo comprehensive KPI framework.
                </p>

                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Email Automation KPIs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Open rate:</strong> 20-25% benchmark</li>
                      <li>• <strong>Click-through rate:</strong> 3-5% goal</li>
                      <li>• <strong>Conversion rate:</strong> 1-3% target</li>
                      <li>• <strong>List growth rate:</strong> 10-25% monthly</li>
                      <li>• <strong>Unsubscribe rate:</strong> &lt;2% acceptable</li>
                      <li>• <strong>Revenue per email:</strong> Varies by industry</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Lead Management KPIs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Lead scoring accuracy:</strong> 70%+ target</li>
                      <li>• <strong>Marketing qualified leads:</strong> 20-30% increase</li>
                      <li>• <strong>Lead-to-customer rate:</strong> 5-15% range</li>
                      <li>• <strong>Sales cycle length:</strong> 20-40% reduction</li>
                      <li>• <strong>Cost per lead:</strong> 30-50% decrease</li>
                      <li>• <strong>Lead response time:</strong> &lt;5 minutes goal</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Social Media KPIs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Engagement rate:</strong> 3-6% benchmark</li>
                      <li>• <strong>Reach growth:</strong> 15-25% monthly</li>
                      <li>• <strong>Click-through to website:</strong> 1-2%</li>
                      <li>• <strong>Social media ROI:</strong> 2:1 minimum</li>
                      <li>• <strong>Brand mention sentiment:</strong> 70%+ positive</li>
                      <li>• <strong>Follower quality score:</strong> High engagement</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-orange-200">
                    <h4 className="font-semibold mb-3 text-orange-700">Business Impact KPIs</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Overall ROI:</strong> 5:1 target za automation</li>
                      <li>• <strong>Customer lifetime value:</strong> 25-50% increase</li>
                      <li>• <strong>Customer acquisition cost:</strong> 30-50% reduction</li>
                      <li>• <strong>Revenue attribution:</strong> 20-40% from automation</li>
                      <li>• <strong>Time savings:</strong> 30-50 hours monthly</li>
                      <li>• <strong>Team productivity:</strong> 40-60% increase</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">ROI Calculation Framework</h3>
                <p className="mb-4">
                  Proper ROI calculation for marketing automation includes both direct financial returns i operational efficiency gains.
                </p>

                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Marketing Automation ROI Formula:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Revenue Gains:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Increased conversions:</strong> New automation-driven sales</li>
                        <li>• <strong>Upsell/Cross-sell:</strong> Automated recommendation revenue</li>
                        <li>• <strong>Customer retention:</strong> Reduced churn = retained revenue</li>
                        <li>• <strong>Lead quality improvement:</strong> Higher value customers</li>
                        <li>• <strong>Faster sales cycles:</strong> Accelerated revenue realization</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Cost Savings:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Time savings:</strong> Employee hours × hourly rate</li>
                        <li>• <strong>Reduced manual errors:</strong> Error correction costs</li>
                        <li>• <strong>Lower acquisition costs:</strong> More efficient lead gen</li>
                        <li>• <strong>Reduced staff needs:</strong> Delayed hiring requirements</li>
                        <li>• <strong>Operational efficiency:</strong> Process optimization savings</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm font-medium">ROI = (Revenue Gains + Cost Savings - Automation Investment) / Automation Investment × 100</p>
                    <p className="text-xs text-gray-600 mt-1">Example: (2,400,000 RSD gains + 600,000 RSD savings - 600,000 RSD investment) / 600,000 = 400% ROI</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Analytics Dashboard Setup</h3>
                <p className="mb-4">
                  Creating comprehensive analytics dashboard omogućava real-time monitoring automation performance i quick decision making.
                </p>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Essential Dashboard Widgets:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Email performance:</strong> Open/click rates by campaign</li>
                        <li>• <strong>Lead pipeline:</strong> Lead flow i conversion funnel</li>
                        <li>• <strong>Revenue attribution:</strong> Automation-driven sales</li>
                        <li>• <strong>Customer journey:</strong> Stage progression tracking</li>
                        <li>• <strong>Social engagement:</strong> Cross-platform performance</li>
                        <li>• <strong>ROI tracking:</strong> Real-time return calculation</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Automation Health Metrics:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Workflow performance:</strong> Completion rates by step</li>
                        <li>• <strong>Error monitoring:</strong> Failed automation alerts</li>
                        <li>• <strong>List health:</strong> Growth, engagement, churn rates</li>
                        <li>• <strong>Deliverability status:</strong> Spam rates, reputation</li>
                        <li>• <strong>Integration status:</strong> Platform connection health</li>
                        <li>• <strong>Resource usage:</strong> Email/SMS credit consumption</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Business Intelligence:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Customer segments:</strong> Behavior-based grouping</li>
                        <li>• <strong>Predictive analytics:</strong> Churn prediction, LTV forecasting</li>
                        <li>• <strong>A/B testing results:</strong> Statistical significance tracking</li>
                        <li>• <strong>Attribution modeling:</strong> Multi-touch attribution</li>
                        <li>• <strong>Competitive analysis:</strong> Industry benchmark comparison</li>
                        <li>• <strong>Trend identification:</strong> Pattern recognition i insights</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">📊 Recommended Analytics Tools:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Google Analytics 4:</strong> Website behavior i conversion tracking</li>
                        <li>• <strong>Platform native analytics:</strong> HubSpot, Mailchimp dashboards</li>
                        <li>• <strong>Zapier:</strong> Cross-platform data integration</li>
                        <li>• <strong>Hotjar:</strong> User behavior heatmaps</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Mixpanel:</strong> Advanced event tracking</li>
                        <li>• <strong>Tableau/Power BI:</strong> Advanced data visualization</li>
                        <li>• <strong>UTM tracking:</strong> Campaign source attribution</li>
                        <li>• <strong>Call tracking:</strong> Phone conversion measurement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Advanced Automation Strategies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-primary" />
                <span>Advanced Automation Strategies za Competitive Advantage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Behavioral Trigger Automation</h3>
                <p className="mb-4">
                  Advanced automation goes beyond basic email sequences. Behavioral triggers omogućavaju highly personalized customer experiences based na real actions i interactions.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Website Behavior Triggers</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Page visit frequency:</strong> Identify hot prospects</li>
                      <li>• <strong>Time on site:</strong> Engagement level indicator</li>
                      <li>• <strong>Download actions:</strong> Content interest triggers</li>
                      <li>• <strong>Pricing page visits:</strong> Purchase intent signals</li>
                      <li>• <strong>Cart abandonment:</strong> E-commerce recovery workflows</li>
                      <li>• <strong>Search behavior:</strong> Intent-based messaging</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Engagement-Based Triggers</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Email interactions:</strong> Open, click, reply behaviors</li>
                      <li>• <strong>Social media engagement:</strong> Likes, shares, comments</li>
                      <li>• <strong>Content consumption:</strong> Video views, article reads</li>
                      <li>• <strong>Event participation:</strong> Webinars, workshops attendance</li>
                      <li>• <strong>Survey responses:</strong> Feedback-based personalization</li>
                      <li>• <strong>Mobile app usage:</strong> In-app behavior tracking</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Lifecycle Stage Triggers</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>New customer onboarding:</strong> Progressive value delivery</li>
                      <li>• <strong>Usage milestones:</strong> Achievement congratulations</li>
                      <li>• <strong>Renewal reminders:</strong> Subscription/contract alerts</li>
                      <li>• <strong>Upgrade opportunities:</strong> Feature usage thresholds</li>
                      <li>• <strong>Churn prediction:</strong> Re-engagement campaigns</li>
                      <li>• <strong>Win-back campaigns:</strong> Former customer reactivation</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Automation Techniques</h3>
                <p className="mb-4">
                  Artificial intelligence enables next-level personalization i predictive automation strategies that adapt to individual customer behaviors.
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">AI Applications u Marketing Automation:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Predictive lead scoring:</strong> AI identifies high-value prospects</li>
                        <li>• <strong>Send time optimization:</strong> Individual-level timing prediction</li>
                        <li>• <strong>Content personalization:</strong> Dynamic content based na preferences</li>
                        <li>• <strong>Churn prediction:</strong> Early warning system za at-risk customers</li>
                        <li>• <strong>Product recommendations:</strong> Cross-sell/upsell optimization</li>
                      </ul>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Subject line optimization:</strong> AI-generated variants</li>
                        <li>• <strong>Campaign optimization:</strong> Automatic budget allocation</li>
                        <li>• <strong>Customer journey mapping:</strong> AI-discovered paths</li>
                        <li>• <strong>Sentiment analysis:</strong> Emotional response monitoring</li>
                        <li>• <strong>Conversational AI:</strong> Chatbot integration</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Implementable AI Tools za SMEs:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>HubSpot AI:</strong> Built-in machine learning features</li>
                        <li>• <strong>Mailchimp AI:</strong> Send time i content optimization</li>
                        <li>• <strong>Klaviyo AI:</strong> Predictive analytics za e-commerce</li>
                        <li>• <strong>Jasper/Copy.ai:</strong> AI content generation</li>
                        <li>• <strong>Chatfuel/ManyChat:</strong> AI-powered chatbots</li>
                        <li>• <strong>Leadfeeder:</strong> AI website visitor identification</li>
                      </ul>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">AI Implementation Tips:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Start small:</strong> Implement one AI feature at a time</li>
                        <li>• <strong>Data quality:</strong> Clean data is essential za AI success</li>
                        <li>• <strong>Human oversight:</strong> AI suggestions need human review</li>
                        <li>• <strong>Testing approach:</strong> A/B test AI vs manual approaches</li>
                        <li>• <strong>ROI measurement:</strong> Track AI-specific performance gains</li>
                        <li>• <strong>Continuous learning:</strong> AI improves with more data</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Multi-Channel Automation Orchestration</h3>
                <p className="mb-4">
                  True automation excellence comes from orchestrating consistent customer experience across all touchpoints - email, social media, website, mobile apps i offline interactions.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Omnichannel Automation Strategy:</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>Channel Integration:</strong> Unified customer data across email, social, website, phone, i in-person interactions</p>
                    <p><strong>Consistent Messaging:</strong> Same core message adapted za different platforms i communication styles</p>
                    <p><strong>Progressive Profiling:</strong> Gradually collect customer information across multiple touchpoints</p>
                    <p><strong>Cross-Channel Attribution:</strong> Understanding how different channels contribute to conversions</p>
                    <p><strong>Unified Analytics:</strong> Single dashboard za all channel performance i customer journey tracking</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Action Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Your Marketing Automation Action Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              <div>
                <h3 className="text-xl font-semibold mb-4">Immediate Next Steps (First 7 Days)</h3>
                <p className="mb-4">
                  Start your marketing automation journey sa these high-impact actions you can implement immediately.
                </p>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Quick Wins za Immediate Implementation:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>• 📊 <strong>Audit current processes:</strong> List all manual marketing tasks</li>
                      <li>• 🎯 <strong>Define automation goals:</strong> What outcomes do you want?</li>
                      <li>• 💾 <strong>Clean your contact database:</strong> Remove invalid emails</li>
                      <li>• 📝 <strong>Create lead magnet:</strong> Valuable free resource za email capture</li>
                      <li>• 🔧 <strong>Choose automation platform:</strong> Based na budget i needs</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• 📧 <strong>Set up basic welcome email:</strong> First automation sequence</li>
                      <li>• 📱 <strong>Install tracking:</strong> Google Analytics, Facebook Pixel</li>
                      <li>• 👥 <strong>Create customer segments:</strong> Group contacts by characteristics</li>
                      <li>• 📅 <strong>Plan content calendar:</strong> 30-day social media schedule</li>
                      <li>• 📈 <strong>Set up basic analytics:</strong> Track key metrics dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Success Measurement Checklist</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 border-green-200">
                    <h4 className="font-semibold mb-3 text-green-700">Month 1 Goals</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Automation platform setup complete</li>
                      <li>• ✅ First email automation live</li>
                      <li>• ✅ Social media scheduling active</li>
                      <li>• ✅ Basic lead capture forms deployed</li>
                      <li>• ✅ Team trained na new tools</li>
                      <li>• ✅ Analytics tracking operational</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-blue-200">
                    <h4 className="font-semibold mb-3 text-blue-700">Month 3 Targets</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ 3+ email automation sequences</li>
                      <li>• ✅ Lead scoring system operational</li>
                      <li>• ✅ CRM integration complete</li>
                      <li>• ✅ 25% reduction u manual tasks</li>
                      <li>• ✅ 15% increase u lead conversion</li>
                      <li>• ✅ ROI tracking i reporting system</li>
                    </ul>
                  </Card>
                  <Card className="p-4 border-purple-200">
                    <h4 className="font-semibold mb-3 text-purple-700">Month 6 Achievements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ✅ Advanced automation workflows</li>
                      <li>• ✅ Multi-channel automation active</li>
                      <li>• ✅ 50% time savings achieved</li>
                      <li>• ✅ 40% increase u qualified leads</li>
                      <li>• ✅ Positive ROI demonstration</li>
                      <li>• ✅ Team fully autonomous na automation</li>
                    </ul>
                  </Card>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Pokrenite Marketing Automation Revoluciju u Vašem Biznisu!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Marketing automation može transformisati vaš biznis, uštedeti vam desetine sati mesečno i dramatično povećati konverzije. Počnite danas sa implementacijom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Marketing Automation Konsultacije</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/cene">Pogledaj Automation Pakete</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default BlogArticle21;