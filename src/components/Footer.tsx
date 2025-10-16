import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/porucisajt192x192.png"
                alt="Poruci Sajt Logo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold text-xl text-foreground">Poruci Sajt</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Brza i jeftina izrada sajtova. Profesionalne web stranice po pristupačnim cenama.
            </p>
            <div className="pt-3">
              <a
                href="https://instagram.com/porucisajt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="text-sm">@porucisajt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Brze veze</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/o-nama" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/usluge" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Usluge
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/cene" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cene
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Usluge</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/usluge/izrada-sajtova" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Izrada sajtova
                </Link>
              </li>
              <li>
                <Link to="/usluge/web-dizajn" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Web dizajn
                </Link>
              </li>
              <li>
                <Link to="/usluge/e-commerce" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link to="/usluge/odrzavanje-sajtova" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Održavanje sajtova
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">contact@unitar.app</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">Bulevar Kralja Aleksandra 198, Beograd, Srbija</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Poruci Sajt. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;