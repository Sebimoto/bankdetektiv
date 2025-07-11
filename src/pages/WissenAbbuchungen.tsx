
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Search, Eye, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WissenAbbuchungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/wissen" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zum Wissensbereich
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Abbuchungen verstehen</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Lerne, wie du unbekannte Transaktionen auf deinem Kontoauszug identifizierst und verstehst.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-display font-semibold mb-6">Was sind Abbuchungen?</h2>
              <p className="text-muted-foreground mb-8">
                Abbuchungen sind automatische Geldtransfers von deinem Konto zu einem anderen. Sie können durch verschiedene Verfahren ausgelöst werden und erscheinen oft mit kryptischen Namen auf deinem Kontoauszug.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                  <Search className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Schritt 1: Identifizieren</h3>
                  <p className="text-muted-foreground">Finde die unbekannte Abbuchung auf deinem Kontoauszug</p>
                </div>
                <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                  <Eye className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Schritt 2: Analysieren</h3>
                  <p className="text-muted-foreground">Nutze BankDetektiv, um die Abbuchung zu entschlüsseln</p>
                </div>
                <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                  <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Schritt 3: Verstehen</h3>
                  <p className="text-muted-foreground">Erhalte detaillierte Informationen über das Unternehmen</p>
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-semibold mb-6">Häufige Abbuchungsarten</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                  <h3 className="text-xl font-medium mb-2">SEPA-Lastschrift</h3>
                  <p className="text-muted-foreground">Die häufigste Form der Abbuchung in Europa. Unternehmen ziehen mit deiner Erlaubnis Geld von deinem Konto ein.</p>
                </div>
                <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                  <h3 className="text-xl font-medium mb-2">Kreditkarten-Abbuchungen</h3>
                  <p className="text-muted-foreground">Sammelbuchungen deiner Kreditkartenumsätze, die monatlich von deinem Konto abgebucht werden.</p>
                </div>
                <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                  <h3 className="text-xl font-medium mb-2">Daueraufträge</h3>
                  <p className="text-muted-foreground">Regelmäßige Überweisungen, die du selbst eingerichtet hast, wie Miete oder Versicherungen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WissenAbbuchungen;
