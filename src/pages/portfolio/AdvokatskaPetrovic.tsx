import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, Users, Calendar, Award, Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react";

const AdvokatskaPetrovic = () => {
  // Load Merriweather font for professional law firm feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply font to body for this page
    document.body.style.fontFamily = '"Merriweather", "Open Sans", serif';

    return () => {
      document.body.style.fontFamily = '';
      document.head.removeChild(link);
    };
  }, []);
  const services = [
    {
      title: "Građansko pravo",
      description: "Zastupanje u sporovima, ugovori, naknada štete",
      icon: "⚖️",
      cases: "200+ rešenih slučajeva"
    },
    {
      title: "Krivično pravo",
      description: "Odbrana u krivičnim postupcima, prekršaji",
      icon: "🛡️",
      cases: "150+ uspešnih odbrana"
    },
    {
      title: "Radno pravo",
      description: "Radni sporovi, otkazni sporovi, kolektivni ugovori",
      icon: "👔",
      cases: "180+ rešenih sporova"
    },
    {
      title: "Porodično pravo",
      description: "Razvod braka, starateljstvo, nasleđivanje",
      icon: "👨‍👩‍👧‍👦",
      cases: "120+ porodičnih slučajeva"
    },
    {
      title: "Privredno pravo",
      description: "Osnivanje firmi, privrednipravni sporovi",
      icon: "🏢",
      cases: "90+ poslovnih slučajeva"
    },
    {
      title: "Nekretnine",
      description: "Kupoprodaja, hipoteka, imovinski sporovi",
      icon: "🏠",
      cases: "250+ transakcija"
    }
  ];

  const team = [
    {
      name: "Dr Miloš Petrović",
      position: "Osnivač i glavni partner",
      experience: "25+ godina iskustva",
      specialization: "Građansko i krivično pravo",
      education: "Pravni fakultet, Univerzitet u Beogradu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Ana Petrović",
      position: "Partner",
      experience: "15+ godina iskustva",
      specialization: "Porodično i radno pravo",
      education: "Pravni fakultet, Univerzitet u Novom Sadu",
      image: "https://images.unsplash.com/photo-1494790108755-2616c4d7db73?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Marko Nikolić",
      position: "Savetnik",
      experience: "8+ godina iskustva",
      specialization: "Privredno pravo i nekretnine",
      education: "Pravni fakultet, Univerzitet u Kragujevcu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "Jelena Marković",
      case: "Razvod braka",
      comment: "Profesionalno i sa razumevanjem. Dr Petrović mi je pomogao u najtežem periodu.",
      rating: 5
    },
    {
      name: "Stefan Jovanović",
      case: "Radni spor",
      comment: "Brzo i efikasno rešavanje. Preporučujem bez rezerve!",
      rating: 5
    },
    {
      name: "Marija Stojanović",
      case: "Kupovina nekretnine",
      comment: "Savršena pravna podrška tokom cele transakcije.",
      rating: 5
    }
  ];

  const achievements = [
    { number: "25+", label: "Godina iskustva" },
    { number: "1000+", label: "Rešenih slučajeva" },
    { number: "98%", label: "Uspešnost" },
    { number: "24/7", label: "Dostupnost" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="w-8 h-8 text-slate-700" />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Advokatska kancelarija Petrović</h1>
                <p className="text-sm text-slate-600">Vaš pouzdani pravni partner</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Zakažite konsultacije
              </Button>
              <Button className="bg-slate-700 hover:bg-slate-800">
                <Phone className="w-4 h-4 mr-2" />
                Pozovite nas
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-500 text-slate-900 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                25 godina tradicije
              </Badge>
              <h2 className="text-5xl font-bold leading-tight">
                Profesionalna pravna pomoć koju zaslužujete
              </h2>
              <p className="text-xl text-slate-200 leading-relaxed">
                Sa preko 25 godina iskustva, naš tim pruža sveobuhvatne pravne usluge
                pojedincima i preduzećima širom Srbije.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  Besplatne konsultacije
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                  Naše usluge
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Zašto izabrati nas?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    <span>Besplatna prva konsultacija</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    <span>Dostupni 24/7 za hitne slučajeve</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    <span>98% uspešno rešenih slučajeva</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    <span>Transparentne cene bez skrivenih troškova</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Naše oblasti rada
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Kompletna pravna podrška u svim oblastima prava
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {service.cases}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4">
                    Saznajte više
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Naš tim
            </h2>
            <p className="text-xl text-slate-600">
              Iskusni pravnici posvećeni vašem uspеhu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative w-32 h-40 mx-auto mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{member.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><strong>Iskustvo:</strong> {member.experience}</p>
                    <p><strong>Specijalizacija:</strong> {member.specialization}</p>
                    <p><strong>Obrazovanje:</strong> {member.education}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Kontakt
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Utisci klijenata
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-600">5.0/5 (156 recenzija)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-amber-600">
                        {testimonial.case}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Kontaktirajte nas</h2>
              <p className="text-xl text-slate-300">
                Spremni smo da vam pomognemo. Besplatna prva konsultacija.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="text-slate-300">+381 11 789 0123</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">info@petrovic-law.rs</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-semibold">Adresa</div>
                    <div className="text-slate-300">Kralja Petra 45, 11000 Beograd</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-semibold">Radno vreme</div>
                    <div className="text-slate-300">Pon-Pet: 8:00-20:00, Sub: 9:00-15:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-slate-800">Zakazivanje konsultacija</CardTitle>
                <CardDescription>
                  Popunite formu i kontaktiraćemo vas u najkraćem roku
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Ime</label>
                    <input className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Prezime</label>
                    <input className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Telefon</label>
                  <input className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Oblast prava</label>
                  <select className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md">
                    <option>Izaberite oblast</option>
                    <option>Građansko pravo</option>
                    <option>Krivično pravo</option>
                    <option>Radno pravo</option>
                    <option>Porodično pravo</option>
                    <option>Privredno pravo</option>
                    <option>Nekretnine</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Opis slučaja</label>
                  <textarea rows={3} className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"></textarea>
                </div>
                <Button className="w-full bg-slate-700 hover:bg-slate-800">
                  <Calendar className="w-4 h-4 mr-2" />
                  Zakazati konsultacije
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold">Advokatska kancelarija Petrović</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Vaš pouzdani pravni partner sa 25 godina iskustva u pružanju
                kvalitetnih pravnih usluga.
              </p>
              <Badge className="bg-amber-500 text-slate-900">
                Licenca br. 12345/2023
              </Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Oblasti rada</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Građansko pravo</li>
                <li>Krivično pravo</li>
                <li>Radno pravo</li>
                <li>Porodično pravo</li>
                <li>Privredno pravo</li>
                <li>Nekretnine</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt informacije</h4>
              <ul className="space-y-2 text-slate-300">
                <li>📧 info@petrovic-law.rs</li>
                <li>📞 +381 11 789 0123</li>
                <li>📍 Kralja Petra 45, Beograd</li>
                <li>⏰ Pon-Pet: 8-20h, Sub: 9-15h</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="text-center text-slate-400">
            <p>&copy; 2025 Advokatska kancelarija Petrović. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvokatskaPetrovic;