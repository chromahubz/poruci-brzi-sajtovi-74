import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, ShoppingBag, Star, Sparkles, Truck, Shield, Gift, Search, Filter, Eye } from "lucide-react";

const BeautyShop = () => {
  // Load Poppins font for modern beauty feel
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  const categories = [
    { name: "Lice", count: 234, color: "bg-pink-100 text-pink-800" },
    { name: "Telo", count: 167, color: "bg-purple-100 text-purple-800" },
    { name: "Kosa", count: 145, color: "bg-indigo-100 text-indigo-800" },
    { name: "Parfemi", count: 89, color: "bg-rose-100 text-rose-800" },
    { name: "Makeup", count: 312, color: "bg-fuchsia-100 text-fuchsia-800" },
    { name: "Nokti", count: 78, color: "bg-violet-100 text-violet-800" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin C Serum",
      brand: "GlowLux",
      price: "3,490 din",
      originalPrice: "4,200 din",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 156,
      badge: "Bestseller",
      badgeColor: "bg-orange-500"
    },
    {
      id: 2,
      name: "Hyaluronic Acid Moisturizer",
      brand: "AquaGlow",
      price: "2,890 din",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1570194071738-f4d03bc36ac6?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 203,
      badge: "Novo",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Rose Gold Eyeshadow Palette",
      brand: "Glamour",
      price: "4,790 din",
      originalPrice: "5,990 din",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      badge: "Akcija",
      badgeColor: "bg-red-500"
    },
    {
      id: 4,
      name: "Luxury Hair Mask",
      brand: "SilkCare",
      price: "1,890 din",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 124,
      badge: "Preporučeno",
      badgeColor: "bg-purple-500"
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Besplatna dostava",
      description: "Za porudžbine preko 4.000 din"
    },
    {
      icon: Gift,
      title: "Poklon uz svaku kupovinu",
      description: "Odaberite svoj poklon"
    },
    {
      icon: Shield,
      title: "100% originalni proizvodi",
      description: "Garancija autentičnosti"
    }
  ];

  const skinCareRoutine = [
    { step: "1", title: "Cleanser", description: "Nežno čišćenje kože", time: "Ujutru i uveče" },
    { step: "2", title: "Toner", description: "Balansiranje pH vrednosti", time: "Nakon čišćenja" },
    { step: "3", title: "Serum", description: "Koncentrovana nega", time: "Pre kreme" },
    { step: "4", title: "Moisturizer", description: "Hidratacija kože", time: "Poslednji korak" }
  ];

  const reviews = [
    {
      name: "Milica P.",
      product: "Vitamin C Serum",
      comment: "Koža mi izgleda blistavo nakon samo nedelju dana korišćenja!",
      rating: 5,
      verified: true
    },
    {
      name: "Ana S.",
      product: "Rose Gold Palette",
      comment: "Prelepe boje, dugotrajni makeup. Odlična paleta!",
      rating: 5,
      verified: true
    },
    {
      name: "Jelena M.",
      product: "Hair Mask",
      comment: "Kosa mi je postala mnogo mekša i sjajnija.",
      rating: 4,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50" style={{ fontFamily: '"Poppins", sans-serif' }}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-pink-600" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  BeautyShop
                </h1>
                <p className="text-sm text-gray-600">Tvoja lepota, naša misija</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-pink-200 text-pink-700 hover:bg-pink-50">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist (3)
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Korpa (0)
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 text-lg">
              ✨ Novo u ponudi - K-Beauty kolekcija
            </Badge>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Otkrijte svoju unutrašnju lepotu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ekskluzivni kozmetički proizvodi vodećih svetskih brendova.
              Besplatna dostava i poklon uz svaku kupovinu.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Pretražite proizvode, brendove..."
                  className="pl-12 pr-4 py-4 text-lg border-2 border-pink-200 focus:border-pink-500 rounded-full"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">
                  Pretraži
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-pink-300">
                  <CardContent className="p-4 text-center">
                    <Badge className={`${category.color} mb-2`}>
                      {category.count}
                    </Badge>
                    <div className="font-semibold text-gray-800">{category.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Izdvojeni proizvodi
              </h2>
              <p className="text-gray-600">Najomiljeniji proizvodi naših kupaca</p>
            </div>
            <Button variant="outline" className="flex items-center border-pink-200 text-pink-700 hover:bg-pink-50">
              <Filter className="w-4 h-4 mr-2" />
              Filtriraj
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-pink-200">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 rounded-full">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="text-sm text-purple-600 font-medium">{product.brand}</div>
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
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Dodaj u korpu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Care Routine */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vaša idealna rutina nege
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Otkrijte kako da postignete savršenu kožu u 4 jednostavna koraka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skinCareRoutine.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {step.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <benefit.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Šta kažu naše kupce
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 (1,234 recenzije)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-pink-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        {review.name}
                        {review.verified && (
                          <Badge variant="secondary" className="ml-2 text-xs bg-green-100 text-green-800">
                            ✓ Verifikovano
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-purple-600">
                        {review.product}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Budite u toku sa lepotom
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Priključite se našoj zajednici i dobijajte ekskluzivne ponude i beauty savete
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Vaš email..."
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="text-pink-600 font-semibold">
              <Gift className="w-4 h-4 mr-2" />
              Pretplati se
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            🎁 Dobijte 15% popust na prvu kupovinu!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  BeautyShop
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Vaš pouzdani partner za kvalitetne kozmetičke proizvode i beauty rutine.
              </p>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9/5 • 1000+ zadovoljnih kupaca</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategorije</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Nega lica</li>
                <li>Makeup</li>
                <li>Nega kose</li>
                <li>Parfemi</li>
                <li>Nega tela</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Korisnički servis</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Kontakt</li>
                <li>Dostava i povraćaj</li>
                <li>Beauty saveti</li>
                <li>Program lojalnosti</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 info@beautyshop.rs</li>
                <li>📞 +381 11 333 4567</li>
                <li>📍 Knez Mihailova 15, Beograd</li>
                <li>⏰ Pon-Ned: 10-22h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BeautyShop. Sva prava zadržana. • Originalni proizvodi • Sigurno plaćanje</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeautyShop;