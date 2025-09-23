import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Shield, Zap, Users, BarChart3, Wallet, Globe, Lock, Star } from "lucide-react";

const CryptoTrading = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [activeCrypto, setActiveCrypto] = useState("bitcoin");

  const cryptoData = {
    bitcoin: { price: "$67,234.50", change: "+5.2%", trend: "up" },
    ethereum: { price: "$3,456.78", change: "-2.1%", trend: "down" },
    solana: { price: "$145.67", change: "+8.9%", trend: "up" },
    cardano: { price: "$0.89", change: "+1.4%", trend: "up" },
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bank-Level Security",
      description: "Military-grade encryption and cold storage protection"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Trades",
      description: "Execute trades in under 100ms with our advanced engine"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Professional charting tools and technical indicators"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Access",
      description: "Trade 500+ cryptocurrencies from anywhere in the world"
    }
  ];

  const tradingPairs = [
    { pair: "BTC/USDT", price: "67,234.50", change: "+5.2%", volume: "2.4B" },
    { pair: "ETH/USDT", price: "3,456.78", change: "-2.1%", volume: "1.8B" },
    { pair: "SOL/USDT", price: "145.67", change: "+8.9%", volume: "543M" },
    { pair: "ADA/USDT", price: "0.89", change: "+1.4%", volume: "234M" },
    { pair: "DOT/USDT", price: "7.23", change: "+3.7%", volume: "187M" },
    { pair: "MATIC/USDT", price: "0.92", change: "-1.8%", volume: "156M" }
  ];

  return (
    <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              CryptoTrade Pro
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Trade Crypto Like a Pro
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced trading platform with institutional-grade tools, real-time analytics,
              and lightning-fast execution. Join over 2 million traders worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
                Start Trading Now
              </Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Prices Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Live Market Prices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tradingPairs.slice(0, 4).map((pair, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-white">{pair.pair}</h3>
                  {pair.change.startsWith('+') ? (
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-400" />
                  )}
                </div>
                <p className="text-2xl font-bold text-white mb-2">${pair.price}</p>
                <p className={`text-sm ${pair.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {pair.change} (24h)
                </p>
                <p className="text-xs text-gray-400 mt-2">Vol: {pair.volume}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trading Interface Preview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Professional Trading Interface</h2>

        <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
          <Tabs defaultValue="spot" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800">
              <TabsTrigger value="spot" className="data-[state=active]:bg-cyan-500">Spot Trading</TabsTrigger>
              <TabsTrigger value="futures" className="data-[state=active]:bg-cyan-500">Futures</TabsTrigger>
              <TabsTrigger value="options" className="data-[state=active]:bg-cyan-500">Options</TabsTrigger>
            </TabsList>

            <TabsContent value="spot">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="bg-slate-800/50 border-slate-700 h-96">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        BTC/USDT Chart
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                          Advanced TradingView Charts
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Order Book</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-400">67,245.50</span>
                          <span className="text-gray-400">0.234</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-400">67,240.00</span>
                          <span className="text-gray-400">0.567</span>
                        </div>
                        <div className="border-t border-slate-600 my-2"></div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400">67,234.50</span>
                          <span className="text-gray-400">0.890</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-400">67,230.00</span>
                          <span className="text-gray-400">0.345</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">Quick Trade</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <Button className="bg-green-600 hover:bg-green-700">BUY</Button>
                        <Button className="bg-red-600 hover:bg-red-700">SELL</Button>
                      </div>
                      <div className="text-sm text-gray-400">
                        <p>Available: 1.2345 BTC</p>
                        <p>≈ $82,456.78</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="futures">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-4">Futures Trading</h3>
                <p className="text-gray-400">Advanced leverage trading with up to 125x leverage</p>
              </div>
            </TabsContent>

            <TabsContent value="options">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-white mb-4">Options Trading</h3>
                <p className="text-gray-400">Sophisticated options strategies for experienced traders</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose CryptoTrade Pro?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/30 border-slate-700 text-center hover:bg-slate-800/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">2M+</h3>
              <p className="text-gray-400">Active Traders</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">$50B+</h3>
              <p className="text-gray-400">Trading Volume</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-pink-400 mb-2">500+</h3>
              <p className="text-gray-400">Cryptocurrencies</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">99.9%</h3>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Shield className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Bank-Level Security</h2>
          <p className="text-gray-300 text-lg mb-8">
            Your funds are protected by industry-leading security measures including cold storage,
            multi-signature wallets, and 24/7 monitoring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Lock className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Cold Storage</h3>
              <p className="text-sm text-gray-400">95% of funds secured offline</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Multi-Sig Wallets</h3>
              <p className="text-sm text-gray-400">Enhanced wallet protection</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-sm text-gray-400">Round-the-clock security</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of traders and start your crypto journey today. No experience required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
              <Wallet className="mr-2 h-5 w-5" />
              Create Free Account
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
              <Star className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            No fees for your first 30 days. Start with as little as $10.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoTrading;