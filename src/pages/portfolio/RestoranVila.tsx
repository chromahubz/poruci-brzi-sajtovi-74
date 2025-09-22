import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Utensils, Wine, ChefHat } from "lucide-react";

const RestoranVila = () => {
  // Load Playfair Display font for elegant restaurant feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply font to body for this page
    document.body.style.fontFamily = '"Playfair Display", "Source Sans Pro", serif';

    return () => {
      document.body.style.fontFamily = '';
      document.head.removeChild(link);
    };
  }, []);
  const menuItems = [
    {
      category: "Predjela",
      items: [
        { name: "Carpaccio od govedine", description: "Sa rukolom i parmezan sirom", price: "1,200 din" },
        { name: "Bruschetta Vila", description: "Sa cherry paradajzom i bosiljkom", price: "890 din" },
        { name: "Plata sira i pršute", description: "Domaći sirevi i kulen", price: "1,450 din" }
      ]
    },
    {
      category: "Glavna jela",
      items: [
        { name: "Teleća pečenica Vila", description: "Sa rozmarin krompirićem", price: "2,400 din" },
        { name: "Losos sa grilovanim povrćem", description: "U biom vinu i limunu", price: "2,100 din" },
        { name: "Pileći file u gorgonzola sosu", description: "Sa njokima od spanaća", price: "1,890 din" }
      ]
    },
    {
      category: "Deserti",
      items: [
        { name: "Tiramisu Vila", description: "Tradicionalni recept", price: "650 din" },
        { name: "Čokoladni sufle", description: "Sa vanila sladoledom", price: "720 din" }
      ]
    }
  ];

  const reviews = [
    {
      name: "Marija Petrović",
      rating: 5,
      comment: "Fantastična atmosfera i ukusna hrana. Teleća pečenica je bila savršena!",
      date: "Pre 2 nedelje"
    },
    {
      name: "Stefan Nikolić",
      rating: 5,
      comment: "Odličan restoran za posebne prilike. Osoblje je vrlo profesionalno.",
      date: "Pre 1 mesec"
    },
    {
      name: "Ana Jovanović",
      rating: 4,
      comment: "Prekrasno mesto sa odličnom kuhinjom. Definitivno ću se vratiti!",
      date: "Pre 3 nedelje"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <Badge className="bg-amber-600 text-white px-4 py-2 text-lg">
            <ChefHat className="w-5 h-5 mr-2" />
            Premium restoran
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Restoran Vila
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Prefinjena kuhinja u elegantnom ambijentu. Savršeno mesto za posebne trenutke.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Rezervišite sto
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg">
              Pogledajte meni
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4 -mt-20 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <CardTitle>Lokacija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Knez Mihailova 25<br />
                  11000 Beograd, Srbija
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <CardTitle>Radno vreme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pon-Ned: 12:00 - 24:00<br />
                  Rezervacije do 22:00
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <Phone className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <CardTitle>Kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +381 11 234 5678<br />
                  info@restoranvila.rs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-600 text-white">O nama</Badge>
              <h2 className="text-4xl font-bold text-foreground">
                20 godina tradicije i kvaliteta
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Restoran Vila je simbol gastronomskog uživanja u srcu Beograda. Naša kuhinja spaja
                tradicionalne balkanske ukuse sa modernim pristupom pripremi hrane.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tim iskusnih kuvara koristi samo najkvalitetnije ingredijense iz lokalnih izvora,
                stvarajući jela koja će zadovoljiti i najprobirljivije nepce.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.8/5 (324 recenzije)</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Utensils className="w-24 h-24 text-amber-600 mx-auto" />
                  <p className="text-xl font-semibold text-amber-800">Elegantna atmosfera</p>
                  <p className="text-muted-foreground px-8">Savršeno mesto za romantične večere i poslovne obroke</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-600 text-white mb-4">Naš meni</Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Gastronomsko iskustvo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Otkrijte naše signature jela pripremljena sa ljubavlju i pažnjom
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuItems.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-lg">
                <CardHeader className="text-center bg-amber-50">
                  <CardTitle className="text-2xl text-amber-800">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <span className="text-amber-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      {itemIndex < category.items.length - 1 && <hr className="border-border" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
              <Wine className="w-5 h-5 mr-2" />
              Kompletna karta vina
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-600 text-white mb-4">Utisci gostiju</Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Šta kažu naši gosti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Rezervišite svoj sto danas
            </h2>
            <p className="text-xl opacity-90">
              Doživite nezaboravnu gastronomsku avanturu u elegantnom ambijentu Restorana Vila
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-amber-600 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Pozovite +381 11 234 5678
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-6 text-lg">
                Online rezervacija
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-400">Restoran Vila</h3>
              <p className="text-gray-300">
                Prefinjena kuhinja u srcu Beograda. Vaše mesto za posebne trenutke.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Kontakt</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />Knez Mihailova 25, Beograd</p>
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />+381 11 234 5678</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2" />Pon-Ned: 12:00-24:00</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Radno vreme</h4>
              <div className="space-y-1 text-gray-300">
                <p>Ponedeljak - Nedelja</p>
                <p className="text-amber-400 font-semibold">12:00 - 24:00</p>
                <p className="text-sm text-gray-400">Poslednje rezervacije do 22:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Restoran Vila. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestoranVila;