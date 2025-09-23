import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Zap, Clock, DollarSign, Star, ArrowRight } from "lucide-react";
import { FadeInSection } from "./FadeInSection";

interface ServicePlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: {
    name: string;
    included: boolean;
    premium?: boolean;
  }[];
  color: string;
}

export const ServiceComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("standard");

  const plans: ServicePlan[] = [
    {
      id: "basic",
      name: "Basic sajt",
      price: "299€",
      duration: "7 dana",
      color: "bg-gray-100 dark:bg-gray-800",
      features: [
        { name: "Do 5 stranica", included: true },
        { name: "Responzivni dizajn", included: true },
        { name: "Kontakt forma", included: true },
        { name: "SEO optimizacija", included: false },
        { name: "Google Analytics", included: false },
        { name: "SSL sertifikat", included: true },
        { name: "1 godina hosting", included: false },
        { name: "E-commerce", included: false },
        { name: "Blog sistem", included: false },
        { name: "Tehnika podrška 24/7", included: false }
      ]
    },
    {
      id: "standard",
      name: "Standard sajt",
      price: "599€",
      duration: "5 dana",
      popular: true,
      color: "bg-blue-50 dark:bg-blue-900/20",
      features: [
        { name: "Do 10 stranica", included: true },
        { name: "Responzivni dizajn", included: true },
        { name: "Kontakt forma", included: true },
        { name: "SEO optimizacija", included: true },
        { name: "Google Analytics", included: true },
        { name: "SSL sertifikat", included: true },
        { name: "1 godina hosting", included: true },
        { name: "E-commerce", included: false },
        { name: "Blog sistem", included: true },
        { name: "Tehnika podrška 24/7", included: false }
      ]
    },
    {
      id: "premium",
      name: "Premium sajt",
      price: "999€",
      duration: "3 dana",
      color: "bg-purple-50 dark:bg-purple-900/20",
      features: [
        { name: "Neograničeno stranica", included: true, premium: true },
        { name: "Responzivni dizajn", included: true },
        { name: "Kontakt forma", included: true },
        { name: "SEO optimizacija", included: true },
        { name: "Google Analytics", included: true },
        { name: "SSL sertifikat", included: true },
        { name: "1 godina hosting", included: true },
        { name: "E-commerce", included: true, premium: true },
        { name: "Blog sistem", included: true },
        { name: "Tehnika podrška 24/7", included: true, premium: true }
      ]
    }
  ];

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Poredi naše pakete
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Izaberi paket koji najbolje odgovara tvojim potrebama. Svi paketi uključuju profesionalni dizajn i kompletnu optimizaciju.
            </p>
          </div>
        </FadeInSection>

        {/* Plan Selector */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {plans.map((plan) => (
              <motion.button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md"
                }`}
                whileHover={{ scale: selectedPlan === plan.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1">
                    Popularan
                  </Badge>
                )}
                {plan.name}
              </motion.button>
            ))}
          </div>
        </FadeInSection>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Selected Plan Details */}
          <FadeInSection delay={0.3} direction="left">
            <AnimatePresence mode="wait">
              {selectedPlanData && (
                <motion.div
                  key={selectedPlan}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`${selectedPlanData.color} border-2 ${selectedPlanData.popular ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'} relative overflow-hidden`}>
                    {selectedPlanData.popular && (
                      <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                        <Star className="inline w-4 h-4 mr-1" />
                        Najpopularniji
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-3xl font-bold text-foreground mb-2">
                        {selectedPlanData.name}
                      </CardTitle>

                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                          {selectedPlanData.price}
                        </div>
                        <div className="flex items-center text-green-600 dark:text-green-400">
                          <Clock className="w-5 h-5 mr-2" />
                          <span className="font-semibold">{selectedPlanData.duration}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Poruči ovaj paket
                      </Button>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        {selectedPlanData.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-center gap-3 p-2 rounded-lg ${
                              feature.included
                                ? feature.premium
                                  ? 'bg-purple-100 dark:bg-purple-900/30'
                                  : 'bg-green-100 dark:bg-green-900/30'
                                : 'bg-gray-100 dark:bg-gray-800'
                            }`}
                          >
                            {feature.included ? (
                              <Check className={`w-5 h-5 ${feature.premium ? 'text-purple-600' : 'text-green-600'}`} />
                            ) : (
                              <X className="w-5 h-5 text-gray-400" />
                            )}

                            <span className={`flex-1 ${
                              feature.included
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground'
                            }`}>
                              {feature.name}
                            </span>

                            {feature.premium && feature.included && (
                              <Badge className="bg-purple-500 text-white text-xs">
                                Premium
                              </Badge>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeInSection>

          {/* All Plans Comparison */}
          <FadeInSection delay={0.4} direction="right">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Poređenje svih paketa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 font-semibold">Funkcionalnost</th>
                        <th className="text-center py-3 font-semibold">Basic</th>
                        <th className="text-center py-3 font-semibold">Standard</th>
                        <th className="text-center py-3 font-semibold">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans[0].features.map((_, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-gray-100 dark:border-gray-700/50">
                          <td className="py-3 font-medium">
                            {plans[0].features[featureIndex].name}
                          </td>
                          {plans.map((plan) => (
                            <td key={plan.id} className="text-center py-3">
                              {plan.features[featureIndex].included ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={0.6}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Nisi siguran koji paket da odabereš?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Kontaktiraj nas za besplatnu konsultaciju i pomoći ćemo ti da odabereš najbolje rešenje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Zap className="w-5 h-5 mr-2" />
                  Besplatna konsultacija
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Prilagođena ponuda
                </Button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};