
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-display font-medium tracking-tight">
                <span className="text-primary">Bank</span>Detektiv
              </h2>
            </Link>
            <p className="text-muted-foreground max-w-md">
              BankDetektiv hilft dir, unbekannte Abbuchungen auf deinem Kontoauszug zu identifizieren und zu verstehen.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href="https://www.wasistdasfüreineabbuchung.de" className="hover:text-primary transition-colors">
                www.wasistdasfüreineabbuchung.de
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Startseite</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Rechtliches</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30 text-sm text-muted-foreground flex flex-col md:flex-row md:justify-between">
          <p>© {currentYear} BankDetektiv. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">Inspiriert von whatsthatcharge.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
