import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, ExternalLink } from "lucide-react";

const BlogArticle42 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-rose-600 to-orange-600 px-8 py-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">Web Design Trends</Badge>
              <Badge className="bg-white/20 text-white border-0">UI/UX</Badge>
              <Badge className="bg-white/20 text-white border-0">2025</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Web Design Trends 2025: Budućnost digitalnog dizajna je stigla
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>30. Januar 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Sara Popović</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>18 min čitanja</span>
              </div>
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                2025. godina donosi revolucionarne promene u web dizajnu. Od AI-powered personalizacije
                do immerzivnih 3D iskustava, evo najvažnijih trendova koji će definisati budućnost
                digitalnog dizajna i korisničkog iskustva.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">1. AI-Driven Personalization - Dizajn koji se prilagođava</h2>

              <p className="text-gray-600 mb-6">
                Veštačka inteligencija omogućava kreiranje jedinstvenih iskustava za svakog korisnika:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">AI personalizacija u praksi:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Dynamic layouts:</strong> AI menja raspored elemenata na osnovu ponašanja</li>
                  <li>• <strong>Color adaptation:</strong> Prilagođavanje boja prema preferencijama</li>
                  <li>• <strong>Content optimization:</strong> Automatsko A/B testiranje sadržaja</li>
                  <li>• <strong>Accessibility enhancement:</strong> AI detektuje potrebe korisnika sa invaliditetom</li>
                  <li>• <strong>Micro-interactions:</strong> Personalizovane animacije i transitions</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Implementacija AI personalizacije</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Tools i platforme:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Optimizely:</strong> AI-powered A/B testing</li>
                    <li>• <strong>Dynamic Yield:</strong> Real-time personalization</li>
                    <li>• <strong>Adobe Target:</strong> Enterprise AI personalization</li>
                    <li>• <strong>Clerk.io:</strong> E-commerce personalization</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Metrics for success:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Engagement rate increase</li>
                    <li>• Conversion rate optimization</li>
                    <li>• Session duration improvement</li>
                    <li>• Bounce rate reduction</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">2. Immersive 3D Experiences - Web postaje virtuelni svet</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">WebGL i Three.js revolucija</h3>

              <p className="text-gray-600 mb-6">
                3D elementi prelaze iz gaming industrije u mainstream web design:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">3D Hero sekcije:</h4>
                  <p className="text-sm text-gray-600 mb-3">Interaktivni 3D objekti umesto statičnih slika</p>
                  <ul className="text-sm space-y-1">
                    <li>• Proizvod showcase sa 360° rotacijom</li>
                    <li>• Parallax 3D scene</li>
                    <li>• Interactive brand storytelling</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">WebXR integration:</h4>
                  <p className="text-sm text-gray-600 mb-3">AR/VR funkcionalnosti direktno u browseru</p>
                  <ul className="text-sm space-y-1">
                    <li>• Virtual try-on za fashion/furniture</li>
                    <li>• Immersive product demonstrations</li>
                    <li>• 3D virtual showrooms</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Performance optimizacija za 3D</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Optimizacija strategies:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Level of Detail (LOD):</strong> Različite verzije modela za različite distance</li>
                  <li>• <strong>Texture compression:</strong> Optimizovane texture za web</li>
                  <li>• <strong>Progressive loading:</strong> Postupno učitavanje kompleksnih scena</li>
                  <li>• <strong>GPU optimization:</strong> Efikasno korišćenje graphics card-a</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">3. Neomorphism 2.0 - Evolucija soft UI</h2>

              <p className="text-gray-600 mb-6">
                Neomorphism se razvija u sofisticiraniji dizajn jezik sa boljom pristupačnošću:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-2xl" style={{boxShadow: 'inset 5px 5px 10px #d1d5db, inset -5px -5px 10px #ffffff'}}>
                  <h4 className="font-semibold text-gray-800 mb-3">Neomorphism 2.0 karakteristike:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Povećan kontrast za accessibility</li>
                    <li>• Selektivna primena (ne svugde)</li>
                    <li>• Kombinacija sa drugim design systems</li>
                    <li>• Focus na interactive elements</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">CSS implementacija:</h4>
                  <div className="bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto">
                    <pre>{`.neo-button {
  background: #f0f0f0;
  border-radius: 20px;
  box-shadow:
    8px 8px 16px #d1d1d1,
    -8px -8px 16px #ffffff;
  transition: all 0.3s ease;
}
.neo-button:active {
  box-shadow:
    inset 8px 8px 16px #d1d1d1,
    inset -8px -8px 16px #ffffff;
}`}</pre>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">4. Voice User Interface (VUI) Integration</h2>

              <p className="text-gray-600 mb-6">
                Voice navigation postaje standardna funkcionalnost web sajtova:
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">VUI implementacija:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Voice search:</strong> Pretragak glasom umesto kucanjem</li>
                  <li>• <strong>Voice navigation:</strong> "Otvori meni", "Idi na kontakt"</li>
                  <li>• <strong>Content reading:</strong> Text-to-speech za accessibility</li>
                  <li>• <strong>Voice commands:</strong> Kontrola interaktivnih elemenata</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Speech API implementation</h3>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
                <pre>{`// Voice recognition setup
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'sr-RS'; // Serbian language

recognition.onresult = (event) => {
  const command = event.results[event.results.length - 1][0].transcript;

  // Process voice commands
  if (command.includes('otvori meni')) {
    document.querySelector('.menu').classList.add('open');
  } else if (command.includes('zatvori meni')) {
    document.querySelector('.menu').classList.remove('open');
  }
};

// Voice search implementation
const searchByVoice = () => {
  recognition.start();
  recognition.onresult = (event) => {
    const searchTerm = event.results[0][0].transcript;
    document.querySelector('#search-input').value = searchTerm;
    performSearch(searchTerm);
  };
};`}</pre>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">5. Dark Mode 2.0 - Napredni color schemes</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatska adaptacija</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Advanced Dark Mode features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Time-based switching</li>
                    <li>• Location-aware themes</li>
                    <li>• Battery-saving optimization</li>
                    <li>• Custom color temperature</li>
                  </ul>
                </div>
                <div className="bg-white border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Implementation sa CSS:</h4>
                  <div className="bg-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">
                    <pre>{`:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f0f0f;
    --text-primary: #ffffff;
  }
}

.theme-auto {
  background: var(--bg-primary);
  color: var(--text-primary);
}`}</pre>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">6. Micro-Interactions i Advanced Animations</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Physics-based animations</h3>

              <p className="text-gray-600 mb-6">
                Animacije postaju prirodnije koristeći prave fizičke zakone:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Spring animations:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Prirodno bouncing ponašanje</li>
                    <li>• Responsivne micro-interactions</li>
                    <li>• Dampening effects za realizam</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Gesture-based interactions:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Swipe gestures za navigaciju</li>
                    <li>• Pinch-to-zoom functionality</li>
                    <li>• Pull-to-refresh patterns</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Framer Motion i modern libraries</h3>

              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
                <pre>{`// Framer Motion spring animation
import { motion } from 'framer-motion';

const SpringButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      y: [0, -10, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        repeat: Infinity,
        repeatDelay: 2
      }
    }}
  >
    Click me!
  </motion.button>
);`}</pre>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">7. Sustainable Web Design - Eco-friendly pristup</h2>

              <p className="text-gray-600 mb-6">
                Environmentally conscious design postaje prioritet:
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Sustainable design principles:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Minimal data transfer:</strong> Optimizovani assets za brznje loading</li>
                  <li>• <strong>Dark mode default:</strong> Štedi bateriju OLED ekrana</li>
                  <li>• <strong>Lazy loading everything:</strong> Load only when needed</li>
                  <li>• <strong>Green hosting:</strong> Renewable energy data centers</li>
                  <li>• <strong>Efficient code:</strong> Cleaner JavaScript i CSS</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Carbon footprint measurement</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Tools za merenje environmental impact:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Website Carbon Calculator:</strong> CO2 emissions tracking</li>
                  <li>• <strong>EcoGrader:</strong> Sustainability scoring</li>
                  <li>• <strong>Green Web Foundation:</strong> Renewable energy hosting check</li>
                  <li>• <strong>Lighthouse:</strong> Performance = sustainability</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">8. Typography Revolution - Variable fonts era</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Variable fonts prednosti</h3>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Traditional Fonts</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Variable Fonts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">File size</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Multiple files (200KB+)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Single file (50-150KB)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Flexibility</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Fixed weights/styles</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Infinite variations</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Animation</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Limited</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Smooth transitions</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Responsive</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Static scaling</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Adaptive typography</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">9. Glassmorphism Evolution - Transparent design</h2>

              <p className="text-gray-600 mb-6">
                Glassmorphism se razvija u sofisticiraniji design trend:
              </p>

              <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl mb-8" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'}}>
                <h4 className="font-semibold text-gray-800 mb-3">Advanced Glassmorphism 2025:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Multi-layer depth:</strong> Kompleksni transparency efekti</li>
                  <li>• <strong>Interactive glass:</strong> Hover efekti menjaju transparency</li>
                  <li>• <strong>Contextual blur:</strong> Dinamički backdrop-filter</li>
                  <li>• <strong>Color transmission:</strong> Boje se prelama kroz staklo</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">10. No-Code Design Tools Integration</h2>

              <p className="text-gray-600 mb-6">
                Design-to-code workflow postaje automatizovan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Figma-to-Code tools:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Anima:</strong> Design to React components</li>
                    <li>• <strong>Locofy:</strong> Figma/XD to production code</li>
                    <li>• <strong>Quest:</strong> Design to clean code</li>
                    <li>• <strong>Zeplin:</strong> Developer handoff tool</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Visual development platforms:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Webflow:</strong> Advanced no-code CMS</li>
                    <li>• <strong>Framer:</strong> Interactive prototyping + CMS</li>
                    <li>• <strong>Editor X:</strong> Professional web creation</li>
                    <li>• <strong>Bubble:</strong> Complex web app builder</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Design System 2025 - Systematični pristup</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Token-based design</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Design tokens categories:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Color tokens:</strong> Semantic color naming (primary, secondary, error)</li>
                  <li>• <strong>Typography tokens:</strong> Scale-based font sizes</li>
                  <li>• <strong>Spacing tokens:</strong> Consistent margin/padding values</li>
                  <li>• <strong>Shadow tokens:</strong> Elevation system</li>
                  <li>• <strong>Border radius tokens:</strong> Consistent corner rounding</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Accessibility-First Design</h2>

              <p className="text-gray-600 mb-6">
                Pristupačnost postaje prioritet, ne naknadno dodavanje:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Accessibility innovations 2025:</h4>
                <ul className="space-y-2">
                  <li>• <strong>AI-powered alt text:</strong> Automatsko generisanje opisa slika</li>
                  <li>• <strong>Voice navigation:</strong> Potpuna glasovna kontrola</li>
                  <li>• <strong>Adaptive interfaces:</strong> UI se prilagođava korisničkim potrebama</li>
                  <li>• <strong>Real-time captions:</strong> Automatski titlovi za video sadržaj</li>
                  <li>• <strong>Gesture alternatives:</strong> Alternativni načini interakcije</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Regional Design Trends - Balkanske specifičnosti</h2>

              <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Trending u regionu:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Lokalne kulturne reference:</strong> Subtilne kulturne elements</li>
                  <li>• <strong>Ćirilica support:</strong> Multi-script typography</li>
                  <li>• <strong>Regional color preferences:</strong> Culturally appropriate palettes</li>
                  <li>• <strong>Local payment methods:</strong> Seamless regional UX</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Implementation Guide - Kako primeniti trends</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Postupan pristup</h3>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">6-month implementation timeline:</h4>
                <ol className="space-y-2">
                  <li><strong>Mesec 1-2:</strong> Design system implementacija i dark mode</li>
                  <li><strong>Mesec 3:</strong> Micro-interactions i advanced animations</li>
                  <li><strong>Mesec 4:</strong> 3D elements za key landing pages</li>
                  <li><strong>Mesec 5:</strong> AI personalizacija integration</li>
                  <li><strong>Mesec 6:</strong> Voice UI i advanced accessibility</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Budget Planning za 2025 Design Upgrade</h2>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Basic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Advanced</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">AI Personalization</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$500-1,500</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$2,000-5,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$10,000+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">3D Integration</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$1,000-3,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$3,000-8,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$15,000+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Voice UI</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$800-2,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$2,500-6,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$12,000+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Design System</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$1,500-4,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$5,000-12,000</td>
                      <td className="px-6 py-4 text-sm text-gray-900">$20,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Zaključak</h2>

              <p className="text-gray-600 mb-6">
                Web design trendovi za 2025. godinu predstavljaju fundamentalne promene u tome kako
                korisnici interaktuju sa digitalnim sadržajem. Od AI-powered personalizacije do
                immerzivnih 3D iskustava, budućnost web dizajna je interaktivna, pristupačna i personalizovana.
              </p>

              <p className="text-gray-600 mb-8">
                Ključ uspešne implementacije ovih trendova leži u postupnom pristupu, fokusiranjem na
                korisničko iskustvo i pravilnim balansiranjem inovacije sa funkcionalnostom.
                Investicija u moderne design trendove nije samo estetsko poboljšanje - to je strategijski
                potez koji direktno utiče na konverzije, engagement i kompetitivnu prednost.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ključne reči:</h3>
                <div className="flex flex-wrap gap-2">
                  {["web design trends 2025", "AI personalization", "3D web design", "voice UI", "glassmorphism", "neomorphism", "dark mode", "sustainable design", "accessibility", "micro-interactions"].map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-rose-500 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Spremni za design revolution?</CardTitle>
              <CardDescription className="text-rose-100">
                Kontaktirajte nas za implementaciju najnovijih design trendova
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                Modernizujte vaš dizajn
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle42;