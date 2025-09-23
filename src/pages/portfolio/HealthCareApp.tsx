import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Phone,
  Calendar,
  User,
  MapPin,
  Clock,
  Stethoscope,
  Shield,
  Star,
  Users,
  FileText,
  Pill,
  Activity,
  Download,
  Play
} from "lucide-react";

const HealthCareApp = () => {
  // Load Nunito Sans font for modern healthcare feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Online zakazivanje",
      description: "Zakažite pregled u nekoliko klikova"
    },
    {
      icon: Users,
      title: "Tim doktora",
      description: "Pristup stručnjacima 24/7"
    },
    {
      icon: FileText,
      title: "Digitalni kartoni",
      description: "Vaša medicinska istorija na jednom mestu"
    },
    {
      icon: Pill,
      title: "Praćenje terapije",
      description: "Podsetnici za uzimanje lekova"
    },
    {
      icon: Activity,
      title: "Zdravstveni monitoring",
      description: "Praćenje vitalnih funkcija"
    },
    {
      icon: Shield,
      title: "Privatnost podataka",
      description: "Maksimalna bezbednost informacija"
    }
  ];

  const doctors = [
    {
      name: "Dr Marija Petrović",
      specialty: "Kardiolog",
      experience: "15+ godina",
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr Stefan Nikolić",
      specialty: "Neurolog",
      experience: "12+ godina",
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr Ana Jovanović",
      specialty: "Dermatolog",
      experience: "10+ godina",
      rating: 4.9,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1594824111833-8c5e5c56e63a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "Milica S.",
      rating: 5,
      comment: "Aplikacija mi je olakšala život! Mogu da zakažem pregled kad god poželim.",
      date: "Pre 1 nedelju"
    },
    {
      name: "Nikola M.",
      rating: 5,
      comment: "Odlična mogućnost konsultacije sa doktorom online. Brza i efikasna usluga.",
      date: "Pre 2 nedelje"
    },
    {
      name: "Jovana P.",
      rating: 4,
      comment: "Sve moje analize su na jednom mestu. Veoma praktično!",
      date: "Pre 1 mesec"
    }
  ];

  const services = [
    "Opšta medicina",
    "Kardiologija",
    "Neurologija",
    "Dermatologija",
    "Ginekologija",
    "Pediatrija",
    "Ortopedija",
    "Psihijatrija"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HealthCare+</h1>
                <p className="text-sm text-gray-600">Vaše zdravlje na prvom mestu</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Prijavi se
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Hitna pomoć
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-blue-100 text-blue-800 mb-6">
            <Stethoscope className="w-4 h-4 mr-2" />
            Digitalno zdravstvo
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Zdravlje u<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              vašim rukama
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pristupite vrhunskoj zdravstvenoj zaštiti bilo kada i bilo gde.
            Zakažite preglede, konsultujte se sa doktorima i pratite svoje zdravlje.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Preuzmi aplikaciju
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Pogledaj demo
            </Button>
          </div>

          {/* App Screenshots Mockup */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-xl bg-white/90 backdrop-blur">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>Lako zakazivanje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Zakažite preglede u realnom vremenu sa vašim omiljenim doktorima</p>
                  </CardContent>
                </Card>

                <Card className="shadow-xl bg-white/90 backdrop-blur">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>Digitalni kartoni</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pristup kompletnoj medicinskoj istoriji sa bilo kog uređaja</p>
                  </CardContent>
                </Card>

                <Card className="shadow-xl bg-white/90 backdrop-blur">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>Health tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pratite vitalne funkcije i dobijajte personalizovane savete</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Funkcionalnosti</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sve što vam je potrebno za zdravlje
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Napredne funkcionalnosti koje čine upravljanje zdravljem lakšim nego ikada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Naš tim</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stručnjaci na koje možete računati
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim sertifikovanih doktora spreman da vam pruži najbolju zdravstvenu zaštitu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{doctor.experience} iskustva</p>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({doctor.reviews})</span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Zakaži pregled
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Usluge</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Medicinske specijalnosti
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kompletna zdravstvena zaštita iz različitih medicinskih oblasti
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Utisci korisnika</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Šta kažu naši pacijenti
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
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hitna medicinska pomoć 24/7
            </h2>
            <p className="text-xl mb-8 opacity-90">
              U slučaju urgentne situacije, kontaktirajte nas odmah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-red-600 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Pozovi 194
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Najbliži dom zdravlja
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Preuzmite HealthCare+ aplikaciju
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dostupno na svim platformama. Počnite danas sa boljim upravljanjem zdravlja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input placeholder="Vaš email..." className="flex-1 text-gray-900" />
            <Button variant="secondary" className="text-blue-600">
              Pošalji link
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600 px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              App Store
            </Button>
            <Button size="lg" variant="secondary" className="text-blue-600 px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">HealthCare+</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Digitalna platforma za upravljanje zdravljem. Vaše zdravlje, naša briga.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9/5 • 50,000+ korisnika</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Usluge</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Online konsultacije</li>
                <li>Zakazivanje pregleda</li>
                <li>Digitalni kartoni</li>
                <li>Health monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Podrška</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Pomoć korisnicima</li>
                <li>Medicinski vodič</li>
                <li>Privatnost podataka</li>
                <li>Uslovi korišćenja</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+381 11 555 0194</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" />Beograd, Srbija</li>
                <li className="flex items-center"><Clock className="w-4 h-4 mr-2" />24/7 podrška</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HealthCare+. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthCareApp;