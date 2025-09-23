import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticle27 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <Badge variant="secondary" className="w-fit">
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Node.js vs Python: Koji backend jezik izabrati u 2025?
            </h1>
            <p className="text-xl text-muted-foreground">
              Detaljno poređenje dva najpoznatija backend jezika za web development sa praktičnim savetima
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>15. januar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Marko Petrović</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min čitanja</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Podeli
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
              alt="Node.js vs Python comparison"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">

            <p className="text-lg leading-relaxed mb-6">
              Izbor backend jezika je jedna od najvažnijih odluka na početku svakog web projekta.
              Node.js i Python su trenutno među najpopularnijim opcijama, svaki sa svojim prednostima i specifičnostima.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Performanse i brzina</h2>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Node.js prednosti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Event-driven arhitektura</p>
                    <p className="text-sm text-muted-foreground">Odlična za real-time aplikacije i chat sisteme</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">V8 JavaScript engine</p>
                    <p className="text-sm text-muted-foreground">Brža izvršavanja za I/O operacije</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">NPM ekosistem</p>
                    <p className="text-sm text-muted-foreground">Najveći repozitorijum paketa na svetu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-500" />
                  Python prednosti
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Čitljivost koda</p>
                    <p className="text-sm text-muted-foreground">Lakše za učenje i održavanje</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Data Science integracija</p>
                    <p className="text-sm text-muted-foreground">NumPy, Pandas, TensorFlow podrška</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Django i Flask</p>
                    <p className="text-sm text-muted-foreground">Moćni web framework-ovi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Kada koristiti Node.js?</h2>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Real-time aplikacije (chat, gaming, live updates)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>REST API i mikroservisi</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Single Page Applications (SPA)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Prototyping i brzi razvoj</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Kada koristiti Python?</h2>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Data Science i Machine Learning aplikacije</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Enterprise web aplikacije</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Automatizacija i scripting</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>Backend sistemi sa složenom logikom</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Praktičan primer</h2>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Node.js Express server:</h3>
              <pre className="text-sm overflow-x-auto">
{`const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: ['Ana', 'Marko', 'Petra'] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
              </pre>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Python Flask server:</h3>
              <pre className="text-sm overflow-x-auto">
{`from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    return jsonify({'users': ['Ana', 'Marko', 'Petra']})

if __name__ == '__main__':
    app.run(debug=True)`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Zaključak</h2>

            <p className="mb-6">
              Izbor između Node.js i Python zavisi od specifičnih potreba vašeg projekta. Node.js je odličan
              za brze, real-time aplikacije, dok je Python bolji izbor za projekte koji zahtevaju
              data processing ili imaju složenu poslovnu logiku.
            </p>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">💡 Naš savet</h3>
                <p>
                  Za početak, razmislite o tome kakvu vrstu aplikacije gradite i koje su vaše dugoročne potrebe.
                  Oba jezika imaju sjajnu budućnost u 2025. godini!
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Slični članci</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Backend</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/25" className="hover:text-primary transition-colors">
                      Kako optimizovati performanse Node.js aplikacije
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Praktični saveti za poboljšanje brzine i skalabilnosti
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">Development</Badge>
                  <CardTitle className="text-lg">
                    <Link to="/blog/26" className="hover:text-primary transition-colors">
                      RESTful API najbolje prakse u 2025
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Savremeni pristup dizajnu API-ja
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Trebate pomoć sa backend razvojem?</h2>
            <p className="text-lg opacity-90">
              Naš tim stručnjaka može vam pomoći da izaberete pravu tehnologiju i implementirate backend rešenje
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/kontakt">Kontaktirajte nas</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle27;