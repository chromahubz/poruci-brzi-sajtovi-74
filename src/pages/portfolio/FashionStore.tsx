import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Heart,
  Star,
  Search,
  Filter,
  User,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Eye,
  Plus,
  Minus
} from "lucide-react";

const FashionStore = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);

  // Load Montserrat font for modern fashion feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Dancing+Script:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const categories = [
    { name: "Haljine", count: 234, trend: "+12%" },
    { name: "Majice", count: 187, trend: "+8%" },
    { name: "Pantalone", count: 156, trend: "+15%" },
    { name: "Jakne", count: 98, trend: "+22%" },
    { name: "Cipele", count: 145, trend: "+18%" },
    { name: "Aksesoari", count: 267, trend: "+5%" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Elegantna večernja haljina",
      price: "8,990 din",
      originalPrice: "12,990 din",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 127,
      badge: "SALE -30%",
      colors: ["black", "navy", "burgundy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      isNew: false,
      isFavorite: false
    },
    {
      id: 2,
      name: "Casual denim jakna",
      price: "5,490 din",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 89,
      badge: "NOVO",
      colors: ["blue", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      isFavorite: true
    },
    {
      id: 3,
      name: "Premium kožne patike",
      price: "12,990 din",
      originalPrice: "15,990 din",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 234,
      badge: "PREMIUM",
      colors: ["white", "black", "gray"],
      sizes: ["37", "38", "39", "40", "41", "42"],
      isNew: false,
      isFavorite: false
    },
    {
      id: 4,
      name: "Boho stil bluza",
      price: "3,290 din",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
      rating: 4.6,
      reviews: 67,
      badge: "TRENDING",
      colors: ["white", "cream", "pink"],
      sizes: ["XS", "S", "M", "L"],
      isNew: false,
      isFavorite: true
    }
  ];

  const testimonials = [
    {
      name: "Milica S.",
      rating: 5,
      comment: "Odličan kvalitet materijala i brza dostava! Haljina je još lepša uživo.",
      product: "Elegantna večernja haljina",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e8?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana P.",
      rating: 5,
      comment: "Savršena veličina i stil. Dobila sam mnogo komplemenata!",
      product: "Boho stil bluza",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jovana M.",
      rating: 4,
      comment: "Super jakna, kvalitetna i moderna. Preporučujem!",
      product: "Casual denim jakna",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50" style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: '"Dancing Script", cursive' }}>
                Bella Moda
              </h1>
              <Badge className="bg-pink-100 text-pink-800 hidden md:flex">Ekskluzivna kolekcija</Badge>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Pretražite proizvode..."
                  className="pl-10 pr-4 w-64 border-pink-200 focus:border-pink-400"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Favorite</span>
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Profil</span>
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Korpa (2)
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  Nova kolekcija PROLEĆE 2025
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Otkrijte svoju
                  <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    jedinstvenu lepotu
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ekskluzivna kolekcija moderne odeće za samosvesne žene.
                  Kvalitet, stil i elegancija u svakom komadu.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Kupuj sada
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg">
                  Pogledaj kolekciju
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">50+</div>
                  <div className="text-sm text-gray-600">Novih proizvoda</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24h</div>
                  <div className="text-sm text-gray-600">Brza dostava</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">5⭐</div>
                  <div className="text-sm text-gray-600">Ocena kupaca</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop"
                  alt="Fashion model"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold">1000+ zadovoljnih</div>
                      <div className="text-gray-500">kupaca ovog meseca</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popularne kategorije</h2>
            <p className="text-xl text-gray-600">Pronađite savršen stil za svaku priliku</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-pink-100 hover:border-pink-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:from-pink-200 group-hover:to-purple-200 transition-colors">
                      <ShoppingBag className="w-8 h-8 text-pink-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{category.count} proizvoda</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    {category.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Izdvojeni proizvodi</h2>
              <p className="text-gray-600">Najtraženiji komadi ove sezone</p>
            </div>
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              <Filter className="w-4 h-4 mr-2" />
              Filtriraj
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-pink-100">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`text-white text-xs ${
                      product.badge === 'SALE -30%' ? 'bg-red-500' :
                      product.badge === 'NOVO' ? 'bg-green-500' :
                      product.badge === 'PREMIUM' ? 'bg-purple-500' :
                      'bg-pink-500'
                    }`}>
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="rounded-full p-2">
                      <Heart className={`w-4 h-4 ${product.isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full p-2">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Dodaj u korpu
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">{product.name}</h3>
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="flex items-center">
                        {[1,2,3,4,5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">Boje:</span>
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 ${
                          color === 'black' ? 'bg-black' :
                          color === 'white' ? 'bg-white border-gray-300' :
                          color === 'navy' ? 'bg-navy-600' :
                          color === 'blue' ? 'bg-blue-600' :
                          color === 'burgundy' ? 'bg-red-800' :
                          color === 'gray' ? 'bg-gray-500' :
                          color === 'cream' ? 'bg-yellow-100' :
                          color === 'pink' ? 'bg-pink-400' :
                          'bg-gray-400'
                        } cursor-pointer hover:scale-110 transition-transform`}
                        title={color}
                      ></div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-pink-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">Besplatna dostava</h3>
              <p className="text-gray-600">Za sve porudžbine preko 5.000 din</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                <RotateCcw className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Lako vraćanje</h3>
              <p className="text-gray-600">30 dana za povraćaj ili zamenu</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">Sigurno plaćanje</h3>
              <p className="text-gray-600">SSL enkripcija za sve transakcije</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Šta kažu naše mušterije</h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 (2,847 recenzija)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-pink-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-pink-600">{testimonial.product}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ostanite u toku sa najnovijim trendovima</h2>
          <p className="text-xl mb-8 opacity-90">
            Budite prvi koji će saznati za nove kolekcije i ekskluzivne popuste
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input
              placeholder="Vaš email..."
              className="flex-1 text-gray-900 border-white/20 bg-white/10 placeholder:text-white/70"
            />
            <Button variant="secondary" className="text-pink-600 font-semibold">
              Pretplati se
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-pink-200">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Dancing Script", cursive' }}>
                Bella Moda
              </h3>
              <p className="text-gray-300 mb-4">
                Vaša destinacija za modernu i elegantnu odeću.
                Kvalitet i stil u svakom komadu.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9/5 • 10,000+ zadovoljnih kupaca</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategorije</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Haljine</li>
                <li>Majice i top-ovi</li>
                <li>Pantalone i farmerke</li>
                <li>Jakne i kaputi</li>
                <li>Cipele</li>
                <li>Aksesoari</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informacije</h4>
              <ul className="space-y-2 text-gray-300">
                <li>O nama</li>
                <li>Uslovi korišćenja</li>
                <li>Privatnost</li>
                <li>Dostava i vraćanje</li>
                <li>Kontakt</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 info@bellamoda.rs</li>
                <li>📞 +381 11 555 0123</li>
                <li>📍 Knez Mihailova 42, Beograd</li>
                <li>⏰ Pon-Sub: 10-20h, Ned: 12-18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bella Moda. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionStore;