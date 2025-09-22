import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Smartphone,
  Download,
  Star,
  Dumbbell,
  Heart,
  Target,
  Trophy,
  Users,
  Play,
  Apple,
  PlayCircle,
  CheckCircle,
  Timer,
  BarChart3,
  Calendar
} from "lucide-react";

const FitnessPro = () => {
  // Load Roboto font for fitness app feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@300;400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply font to body for this page
    document.body.style.fontFamily = '"Roboto", "Roboto Condensed", sans-serif';

    return () => {
      document.body.style.fontFamily = '';
      document.head.removeChild(link);
    };
  }, []);
  const features = [
    {
      icon: Dumbbell,
      title: "Personalizovani treninzi",
      description: "AI algoritam prilagođava treninge vašem nivou i ciljevima"
    },
    {
      icon: Heart,
      title: "Health monitoring",
      description: "Praćenje srčanog rada, kalorija i vitalnih znakova"
    },
    {
      icon: Target,
      title: "Postavljanje ciljeva",
      description: "Definiši i prati svoje fitness ciljeve kroz vreme"
    },
    {
      icon: BarChart3,
      title: "Napredna analitika",
      description: "Detaljni insights o vašem napretku i performansama"
    },
    {
      icon: Users,
      title: "Zajednica",
      description: "Povezivanje sa drugim korisnicima i treniranje zajedno"
    },
    {
      icon: Timer,
      title: "Workout timers",
      description: "Integrisani tajmeri za vežbe i odmor"
    }
  ];

  const workoutPlans = [
    {
      name: "Beginner Friendly",
      duration: "4 nedelje",
      workouts: "3x nedeljno",
      focus: "Osnove fitness-a",
      difficulty: 1,
      color: "bg-green-500"
    },
    {
      name: "Weight Loss",
      duration: "8 nedelja",
      workouts: "5x nedeljno",
      focus: "Mršavljenje",
      difficulty: 2,
      color: "bg-yellow-500"
    },
    {
      name: "Muscle Building",
      duration: "12 nedelja",
      workouts: "4x nedeljno",
      focus: "Hipertrofija",
      difficulty: 3,
      color: "bg-orange-500"
    },
    {
      name: "Athletic Performance",
      duration: "16 nedelja",
      workouts: "6x nedeljno",
      focus: "Sportske performanse",
      difficulty: 4,
      color: "bg-red-500"
    }
  ];

  const stats = [
    { number: "500K+", label: "Aktivnih korisnika", icon: Users },
    { number: "2M+", label: "Završenih treninga", icon: Dumbbell },
    { number: "50K+", label: "Ostvarenih ciljeva", icon: Target },
    { number: "4.9", label: "App Store ocena", icon: Star }
  ];

  const testimonials = [
    {
      name: "Marko Jovanović",
      role: "Softver inženjer",
      comment: "Aplikacija mi je potpuno promenila pristup treninzima. Personalizovani planovi su odlični!",
      rating: 5,
      progress: "15kg manje za 6 meseci",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Ana Miličić",
      role: "Marketing menadžer",
      comment: "Konačno aplikacija koja razume moje potrebe. Treniram redovno već godinu dana!",
      rating: 5,
      progress: "Izgradila mišićnu masu",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c4d7db73?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Stefan Petrović",
      role: "Student medicine",
      comment: "Odličan fitness tracker sa preciznim praćenjem napretka. Preporučujem!",
      rating: 5,
      progress: "Povećao snagu za 40%",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const appScreens = [
    {
      title: "Dashboard",
      description: "Pregled dnevnih aktivnosti i napretka",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=300&h=600&fit=crop"
    },
    {
      title: "Treninzi",
      description: "Personalizovani workout planovi",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300&h=600&fit=crop"
    },
    {
      title: "Analitika",
      description: "Detaljni insights o performansama",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  FitnessPro
                </h1>
                <p className="text-sm text-gray-600">Tvoj lični fitness trener</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                <Play className="w-4 h-4 mr-2" />
                Demo video
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Preuzmi app
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 text-lg">
                🏆 #1 Fitness App u Srbiji
              </Badge>
              <h2 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Tvoj put do
                </span>
                <br />
                <span className="text-gray-900">najbolje forme</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered fitness aplikacija koja se prilagođava vašim potrebama.
                Personalizovani treninzi, praćenje napretka i motivacija 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-8 py-6">
                  <Apple className="w-5 h-5 mr-2" />
                  Preuzmi za iOS
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Preuzmi za Android
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold text-gray-900">4.9/5</span> • 500K+ korisnika
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Phone mockup */}
                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 mx-auto shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 p-8 text-white">
                      <div className="text-center space-y-6 pt-16">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                          <Dumbbell className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold">Dobrodošli u FitnessPro</h3>
                        <p className="text-white/80">Vaš personalni fitness asistent</p>

                        <div className="space-y-4 mt-12">
                          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Današnji cilj</span>
                              <span className="text-sm">75%</span>
                            </div>
                            <Progress value={75} className="mt-2" />
                          </div>

                          <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
                            <div className="flex items-center space-x-3">
                              <Heart className="w-5 h-5 text-red-300" />
                              <div>
                                <div className="text-sm">Srčani rad</div>
                                <div className="text-lg font-bold">128 bpm</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 text-indigo-600 mx-auto" />
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sve što vam je potrebno za uspeh
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              FitnessPro kombinuje najnovije tehnologije sa proven fitness metodama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-indigo-50/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Plans */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planovi prilagođeni vama
            </h2>
            <p className="text-xl text-gray-600">
              Bez obzira na nivo iskustva, imamo pravi plan za vas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutPlans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 ${plan.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex justify-between">
                      <span>Trajanje:</span>
                      <span className="font-medium">{plan.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Treninzi:</span>
                      <span className="font-medium">{plan.workouts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fokus:</span>
                      <span className="font-medium">{plan.focus}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Težina</div>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((level) => (
                        <div
                          key={level}
                          className={`w-4 h-2 rounded ${level <= plan.difficulty ? plan.color : 'bg-gray-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Izaberi plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pogledajte aplikaciju u akciji
            </h2>
            <p className="text-xl text-gray-300">
              Intuitivni dizajn koji čini fitnes dostupnim svima
            </p>
          </div>

          <Tabs defaultValue="dashboard" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="workouts">Treninzi</TabsTrigger>
              <TabsTrigger value="analytics">Analitika</TabsTrigger>
            </TabsList>

            {appScreens.map((screen, index) => (
              <TabsContent key={index} value={screen.title.toLowerCase()} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{screen.title}</h3>
                    <p className="text-xl text-gray-300">{screen.description}</p>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Real-time praćenje aktivnosti</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Personalizovani predlozi</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Motivacione notifikacije</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-64 h-auto mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Priče o uspehu
            </h2>
            <p className="text-xl text-gray-600">
              Pogledajte kako je FitnessPro promenio živote naših korisnika
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                  <Badge className="bg-green-100 text-green-800">
                    <Trophy className="w-3 h-3 mr-1" />
                    {testimonial.progress}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Spremni da promenite svoj život?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Pridružite se hiljadama korisnika koji su već postigli svoje ciljeve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-indigo-600 font-semibold text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Preuzmi besplatno
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-6">
              <Calendar className="w-5 h-5 mr-2" />
              Zakaži demo
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            💪 Prvi mesec besplatno • Bez obaveza • Otkažite kad god želite
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">FitnessPro</h3>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered fitness aplikacija koja se prilagođava vašim potrebama i ciljevima.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9/5 • 500K+ korisnika</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Funkcionalnosti</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Personalizovani treninzi</li>
                <li>Praćenje napretka</li>
                <li>AI trener</li>
                <li>Zajednica korisnika</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Podrška</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Help centar</li>
                <li>Video tutoriali</li>
                <li>Kontakt podrška</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Preuzmi aplikaciju</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-600 text-white hover:bg-gray-800">
                  <Apple className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-white hover:bg-gray-800">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FitnessPro. Sva prava zadržana. • Privacy Policy • Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitnessPro;