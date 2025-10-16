import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Clock, Send, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms API - FREE (250 submissions/month)
      // Get your access key from: https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "11f5307c-119e-46f5-8c71-65a993d6eea1",
          from_name: formData.name,
          email: formData.email,
          subject: `[Poruci Sajt] ${formData.service || 'Novi upit'}`,
          message: `
Ime: ${formData.name}
Email: ${formData.email}
Usluga: ${formData.service}

Poruka:
${formData.message}
          `.trim(),
          to_email: "contact@unitar.app", // Your email
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Poruka poslata!",
          description: "Kontaktiraćemo vas u najkraćem roku.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Greška pri slanju",
        description: "Molimo pokušajte ponovo ili nam pišite direktno na contact@unitar.app",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Kontaktirajte nas
            </h1>
            <p className="text-xl text-muted-foreground">
              Spremni smo da čujemo o vašem projektu i pomognemo vam da ostvarite digitalnu viziju
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Pošaljite nam poruku</CardTitle>
                  <CardDescription>
                    Popunite formu i kontaktiraćemo vas u roku od 24 sata
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ime i prezime</Label>
                        <Input
                          id="name"
                          placeholder="Vaše ime i prezime"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email adresa</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="vas@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Tip usluge</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Odaberite paket" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="osnovni-paket">Osnovni Paket (50€)</SelectItem>
                          <SelectItem value="mikro-sajtovi">Mikro Sajtovi (200€)</SelectItem>
                          <SelectItem value="shop-start">Shop Start (150€)</SelectItem>
                          <SelectItem value="shop-pro">Shop Pro (500€)</SelectItem>
                          <SelectItem value="auto-blog">Auto Blog (200€)</SelectItem>
                          <SelectItem value="kompleksniji-sajtovi">Kompleksniji sajtovi po meri</SelectItem>
                          <SelectItem value="dodatne-usluge">Dodatne usluge</SelectItem>
                          <SelectItem value="ostalo">Ostalo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Opis projekta</Label>
                      <Textarea
                        id="message"
                        placeholder="Opišite što trebate... Što detaljnije, bolje možemo proceniti projekat."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Šalje se..." : "Pošaljite poruku"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kontakt informacije</CardTitle>
                  <CardDescription>
                    Dostupni 24/7 preko email forme
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">contact@unitar.app</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Instagram</div>
                      <a
                        href="https://instagram.com/porucisajt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Pošaljite DM na @porucisajt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Adresa</div>
                      <div className="text-sm text-muted-foreground">Bulevar Kralja Aleksandra 198, Beograd, Srbija</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Radno vreme</div>
                      <div className="text-sm text-muted-foreground">Pon-Pet: 9:00-18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brza procena</CardTitle>
                  <CardDescription>
                    Potrebna vam je brza procena cene?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pošaljite nam osnovne informacije o projektu i dobićete orijentacionu cenu u roku od 2 sata.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Pošaljite email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Besplatna konsultacija!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90 mb-4">
                    Zakazatite besplatnu konsultaciju i saznajte kako možemo pomoći u razvoju vašeg digitalmnog prisustva.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Zakaži konsultaciju
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Šta se dešava nakon kontakta?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold">Odgovaramo brzo</h3>
              <p className="text-sm text-muted-foreground">
                Kontaktiraćemo vas u roku od 24 sata
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold">Besplatna konsultacija</h3>
              <p className="text-sm text-muted-foreground">
                Razgovaramo o vašim potrebama i ciljevima
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold">Procena i predlog</h3>
              <p className="text-sm text-muted-foreground">
                Kreiramo detaljan predlog sa cenom i rokom
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold">Početak rada</h3>
              <p className="text-sm text-muted-foreground">
                Počinjemo odmah čim se dogovorimo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;