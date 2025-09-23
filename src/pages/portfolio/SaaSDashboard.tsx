import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Play,
  Check,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  ChevronRight,
  ArrowRight,
  Bell,
  Settings,
  HelpCircle
} from "lucide-react";

const SaaSDashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  // Load Source Sans Pro font for professional SaaS feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detaljni reporti i real-time analitika za bolje poslovanje"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Upravljanje timom sa rolama i dozvolama"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automatizujte repetitivne zadatke i povećajte produktivnost"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level bezbednost sa 256-bit enkripcijom"
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Povezujte se sa 500+ aplikacija preko REST API-ja"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Pristup sa bilo kog uređaja - desktop, tablet, mobilni"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/mesec",
      description: "Savršeno za mala preduzeća",
      features: [
        "Do 5 korisnika",
        "10GB storage",
        "Basic analytics",
        "Email podrška",
        "Mobile app"
      ],
      popular: false,
      id: "starter"
    },
    {
      name: "Pro",
      price: "$79",
      period: "/mesec",
      description: "Najpopularniji izbor za rastuće kompanije",
      features: [
        "Do 25 korisnika",
        "100GB storage",
        "Advanced analytics",
        "Priority podrška",
        "API pristup",
        "Custom integracije"
      ],
      popular: true,
      id: "pro"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/mesec",
      description: "Za velike organizacije sa naprednim potrebama",
      features: [
        "Unlimited korisnici",
        "Unlimited storage",
        "White-label rešenje",
        "Dedicated account manager",
        "99.99% uptime SLA",
        "Custom development"
      ],
      popular: false,
      id: "enterprise"
    }
  ];

  const testimonials = [
    {
      name: "Marko Petković",
      position: "CEO, TechStart",
      company: "TechStart",
      rating: 5,
      comment: "BusinessPro je revolucionisao način kako upravljamo projektima. Produktivnost nam je porasla za 40%.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Jovanović",
      position: "Operations Manager",
      company: "Innovate Ltd",
      rating: 5,
      comment: "Najbolji SaaS alat koji smo koristili. Integracije su jednostavne a analytics neverovatni.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e8?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Stefan Nikolić",
      position: "CTO",
      company: "DataFlow",
      rating: 5,
      comment: "Skalabilnost i bezbednost su na najvišem nivou. Preporučujem svim tech kompanijama.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50K+", label: "Aktivni korisnici", growth: "+23%" },
    { number: "99.9%", label: "Uptime", growth: "SLA" },
    { number: "2M+", label: "API poziva dnevno", growth: "+156%" },
    { number: "45", label: "Zemlje", growth: "+12%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BusinessPro</h1>
                <p className="text-sm text-gray-600">Enterprise SaaS Platform</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#integrations" className="text-gray-600 hover:text-blue-600 transition-colors">Integrations</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost">Prijavi se</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Počni besplatno
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Novi BusinessPro 3.0 dostupan
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Upravljajte biznisom
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                kao profesionalac
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              All-in-one platforma za upravljanje projektima, timom i resursima.
              Povećajte produktivnost za 3x i fokusirajte se na rast biznisa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Počni besplatno
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                Zakaži demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by 50,000+ companies worldwide</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                {/* Company logos mockup */}
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="container mx-auto px-4 mt-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Mock Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    app.businesspro.com/dashboard
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <Settings className="w-4 h-4 text-gray-400" />
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                        <div className="text-xs text-green-600 font-medium">{stat.growth}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Revenue Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-end justify-between p-4">
                        {[40, 65, 55, 80, 75, 90, 85].map((height, i) => (
                          <div key={i} className={`bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t`} style={{ height: `${height}%`, width: '12%' }}></div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Active Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Website Redesign</span>
                        <Progress value={85} className="w-24" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Mobile App</span>
                        <Progress value={60} className="w-24" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">API Integration</span>
                        <Progress value={90} className="w-24" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sve što trebate za uspešan biznis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Moćne funkcionalnosti dizajnirane da pojednostave složene poslovne procese
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-blue-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
                <div className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                  {stat.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparentno i fleksibilno plaćanje
            </h2>
            <p className="text-xl text-gray-600">
              Izaberite plan koji odgovara veličini vašeg tima i potrebama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-200'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">
                      Najpopularniji
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.popular ? 'Počni besplatno' : 'Izaberi plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Trebate custom rešenje?</p>
            <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
              Kontaktirajte prodaju
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Šta kažu naši klijenti
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 (1,247 recenzija)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Spremni da transformišete svoj biznis?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pridružite se 50,000+ kompanija koje već koriste BusinessPro za upravljanje svojim operacijama
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold">
              Počni besplatno
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Zakaži live demo
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Besplatno 14 dana • Ne treba kreditna kartica • Setup za 5 minuta
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">BusinessPro</h3>
              </div>
              <p className="text-slate-300 mb-4">
                All-in-one platforma za upravljanje biznisom. Povećajte produktivnost i fokusirajte se na rast.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-slate-300">4.9/5 • 50,000+ korisnika</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Proizvod</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <li>API Documentation</li>
                <li>Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kompanija</h4>
              <ul className="space-y-2 text-slate-300">
                <li>O nama</li>
                <li>Karijere</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Partneri</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Podrška</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Help Center</li>
                <li>Community</li>
                <li>Status</li>
                <li>Kontakt</li>
                <li>Enterprise</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 BusinessPro. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaaSDashboard;