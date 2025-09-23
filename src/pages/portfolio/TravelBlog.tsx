import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Camera, Plane, Heart, Calendar, User, Globe, Mountain, Coffee, Star } from "lucide-react";

const TravelBlog = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+Pro:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [activeDestination, setActiveDestination] = useState("europe");

  const featuredPosts = [
    {
      title: "Magic of Santorini: A Greek Island Paradise",
      excerpt: "Discovering the breathtaking sunsets and charming villages of Greece's most iconic island...",
      image: "🏛️",
      location: "Santorini, Greece",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Island Life"
    },
    {
      title: "Swiss Alps Adventure: Hiking Through Heaven",
      excerpt: "Three weeks exploring the majestic peaks and pristine lakes of Switzerland's mountain paradise...",
      image: "⛰️",
      location: "Swiss Alps",
      date: "November 28, 2024",
      readTime: "12 min read",
      category: "Adventure"
    },
    {
      title: "Tokyo Street Food Journey: Culinary Culture",
      excerpt: "From ramen shops to sushi bars, exploring Japan's incredible food scene one bite at a time...",
      image: "🍜",
      location: "Tokyo, Japan",
      date: "October 22, 2024",
      readTime: "10 min read",
      category: "Food & Culture"
    }
  ];

  const destinations = [
    {
      name: "Paris, France",
      image: "🗼",
      description: "City of lights and endless romance",
      posts: 12,
      visited: "September 2024"
    },
    {
      name: "Bali, Indonesia",
      image: "🏝️",
      description: "Tropical paradise with ancient temples",
      posts: 8,
      visited: "August 2024"
    },
    {
      name: "New York, USA",
      image: "🗽",
      description: "The city that never sleeps",
      posts: 15,
      visited: "July 2024"
    },
    {
      name: "Morocco",
      image: "🕌",
      description: "Vibrant markets and desert adventures",
      posts: 10,
      visited: "June 2024"
    },
    {
      name: "Iceland",
      image: "🏔️",
      description: "Land of fire, ice, and northern lights",
      posts: 9,
      visited: "May 2024"
    },
    {
      name: "Thailand",
      image: "🛕",
      description: "Golden temples and pristine beaches",
      posts: 11,
      visited: "April 2024"
    }
  ];

  const categories = [
    { name: "Adventure", count: 23, icon: <Mountain className="h-5 w-5" />, color: "bg-emerald-500" },
    { name: "Food & Culture", count: 18, icon: <Coffee className="h-5 w-5" />, color: "bg-orange-500" },
    { name: "Island Life", count: 15, icon: <Globe className="h-5 w-5" />, color: "bg-blue-500" },
    { name: "City Breaks", count: 21, icon: <MapPin className="h-5 w-5" />, color: "bg-purple-500" },
    { name: "Photography", count: 32, icon: <Camera className="h-5 w-5" />, color: "bg-pink-500" }
  ];

  const travelStats = [
    { number: "47", label: "Countries Visited", icon: "🌍" },
    { number: "156", label: "Cities Explored", icon: "🏙️" },
    { number: "89", label: "Travel Stories", icon: "📖" },
    { number: "2.3M", label: "Miles Traveled", icon: "✈️" }
  ];

  return (
    <div style={{ fontFamily: '"Source Sans Pro", sans-serif' }} className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-3 text-lg backdrop-blur-sm">
              <Plane className="w-5 h-5 mr-2" />
              WanderLust Chronicles
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Explore the World
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
              Through My Eyes & Stories
            </h2>

            <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto opacity-90">
              Join me on incredible journeys across continents, discovering hidden gems,
              local cultures, and unforgettable experiences that make travel so magical.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <MapPin className="mr-2 h-5 w-5" />
                Explore Destinations
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Heart className="mr-2 h-5 w-5" />
                Follow Journey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {travelStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Latest Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh stories from recent travels, packed with insider tips and stunning photography
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
                {post.image}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-blue-100 text-blue-700 border-0">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {post.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Destinations Explored
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From bustling cities to remote islands, each destination has unique stories to tell
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {destination.image}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{destination.posts} posts</span>
                      <span>{destination.visited}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Travel Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover stories organized by your favorite travel themes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} stories</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                Hi, I'm Sarah!
              </h2>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                A passionate traveler, photographer, and storyteller who believes that the world
                is a book, and those who do not travel read only one page. For the past 8 years,
                I've been exploring our beautiful planet, one destination at a time.
              </p>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Through this blog, I share authentic travel experiences, practical tips,
                cultural insights, and stunning photography to inspire your next adventure.
              </p>
              <div className="flex gap-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3">
                  <User className="mr-2 h-5 w-5" />
                  About Me
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3">
                  <Camera className="mr-2 h-5 w-5" />
                  Photography
                </Button>
              </div>
            </div>

            <div className="text-center">
              <div className="w-64 h-64 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center text-8xl backdrop-blur-sm">
                👩‍🦰
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                <div className="text-center">
                  <Star className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
                  <p className="text-sm opacity-75">Travel Blogger</p>
                </div>
                <div className="text-center">
                  <Camera className="h-6 w-6 text-white mx-auto mb-2" />
                  <p className="text-sm opacity-75">Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-12 text-center">
          <Globe className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Never Miss an Adventure
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 25,000+ fellow travelers and get exclusive travel tips, destination guides,
            and stories delivered straight to your inbox every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Free weekly newsletter • No spam • Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelBlog;