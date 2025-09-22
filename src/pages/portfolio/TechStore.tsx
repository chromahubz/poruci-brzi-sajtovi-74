import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Truck, Shield, CreditCard, Search, Filter, Heart, Eye } from "lucide-react";

const TechStore = () => {
  // Load Inter font for modern tech feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply font to body for this page
    document.body.style.fontFamily = '"Inter", sans-serif';

    return () => {
      document.body.style.fontFamily = '';
      document.head.removeChild(link);
    };
  }, []);
  const categories = [
    { name: "Laptopovi", count: 45, icon: "💻" },
    { name: "Telefoni", count: 78, icon: "📱" },
    { name: "Tablet", count: 32, icon: "📱" },
    { name: "Gaming", count: 56, icon: "🎮" },
    { name: "Audio", count: 89, icon: "🎧" },
    { name: "Smart Watch", count: 23, icon: "⌚" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro 14\" M3",
      price: "349.990 din",
      originalPrice: "399.990 din",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
      specs: ["Apple M3 chip", "16GB RAM", "512GB SSD", "14.2\" Retina"]
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: "179.990 din",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      badge: "Novo",
      specs: ["A17 Pro chip", "256GB", "48MP kamera", "6.7\" Super Retina"]
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: "45.990 din",
      originalPrice: "52.990 din",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 234,
      badge: "Akcija",
      specs: ["30h baterija", "Noise Canceling", "Hi-Res Audio", "Touch kontrole"]
    },
    {
      id: 4,
      name: "Gaming PC ASUS ROG",
      price: "289.990 din",
      originalPrice: "329.990 din",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 67,
      badge: "Gaming",
      specs: ["RTX 4070", "Intel i7-13700K", "32GB DDR5", "1TB NVMe SSD"]
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Besplatna dostava",
      description: "Za porudžbine preko 15.000 din"
    },
    {
      icon: Shield,
      title: "2 godine garancije",
      description: "Na sve proizvode"
    },
    {
      icon: CreditCard,
      title: "Sigurno plaćanje",
      description: "Kartica, PayPal, na rate"
    }
  ];

  const reviews = [
    {
      name: "Marko S.",
      rating: 5,
      comment: "Odličan laptop, brza dostava. Preporučujem!",
      product: "MacBook Pro 14\""
    },
    {
      name: "Ana P.",
      rating: 5,
      comment: "Najbolja cena u gradu za iPhone. Super usluga.",
      product: "iPhone 15 Pro"
    },
    {
      name: "Stefan M.",
      rating: 4,
      comment: "Gaming PC radi savršeno. Odličan customer support.",
      product: "ASUS ROG PC"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-blue-600">TechStore</h1>
              <Badge className="bg-blue-100 text-blue-800">Zvanični distributer</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Lista želja
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Korpa (0)
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Najnovija tehnologija po najboljim cenama
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Više od 1000 proizvoda • Garancija • Besplatna dostava
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Pretražite proizvode..."
                className="pl-10 pr-4 py-3 text-lg"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                Pretraži
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="font-semibold text-sm">{category.name}</div>
                  <div className="text-xs opacity-75">({category.count})</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Izdvojeni proizvodi
              </h2>
              <p className="text-gray-600">Najpopularniji izbor naših kupaca</p>
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filtriraj
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-2 left-2 ${
                    product.badge === 'Bestseller' ? 'bg-orange-500' :
                    product.badge === 'Novo' ? 'bg-green-500' :
                    product.badge === 'Akcija' ? 'bg-red-500' :
                    'bg-purple-500'
                  }`}>
                    {product.badge}
                  </Badge>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <div className="flex items-center space-x-1">
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
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Dodaj u korpu
                    </Button>
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
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Šta kažu naši kupci
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.8/5 (567 recenzija)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-blue-600">{review.product}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pridružite se našoj zajednici
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Budite prvi koji će saznati za nove proizvode i ekskluzivne popuste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Vaš email..." className="flex-1" />
            <Button variant="secondary" className="text-blue-600">
              Pretplati se
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">TechStore</h3>
              <p className="text-gray-300 mb-4">
                Vaš pouzdani partner za najnoviju tehnologiju po najboljim cenama.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.8/5 ocena • 1000+ zadovoljnih kupaca</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategorije</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Laptopovi i računari</li>
                <li>Mobilni telefoni</li>
                <li>Gaming oprema</li>
                <li>Audio i video</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Podrška</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Kontakt centar</li>
                <li>Garancija</li>
                <li>Povraćaj sredstava</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 info@techstore.rs</li>
                <li>📞 +381 11 555 0123</li>
                <li>📍 Terazije 25, Beograd</li>
                <li>⏰ Pon-Pet: 9-20h, Sub: 10-18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TechStore. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechStore;