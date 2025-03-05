
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <section className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Wie BankDetektiv funktioniert</h2>
            <p className="text-lg text-muted-foreground">Drei einfache Schritte, um mysteriöse Abbuchungen zu identifizieren</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Abbuchung finden',
                description: 'Prüfe deinen Kontoauszug und identifiziere die unbekannte Abbuchung.'
              },
              {
                number: '02',
                title: 'Bei BankDetektiv suchen',
                description: 'Gib den Namen oder die Beschreibung der Abbuchung in unsere Suchleiste ein.'
              },
              {
                number: '03',
                title: 'Abbuchung identifizieren',
                description: 'Erhalte detaillierte Informationen über das Unternehmen und die Transaktion.'
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl border border-border/50 bg-white/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Hast du eine unbekannte Abbuchung?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Lass dich nicht von mysteriösen Transaktionen verwirren. Nutze BankDetektiv, um sofort herauszufinden, wofür du bezahlt hast.
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium transition-transform hover:scale-105 active:scale-95"
                >
                  Jetzt Abbuchung prüfen
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg text-muted-foreground">Antworten auf deine häufigsten Fragen</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Was ist BankDetektiv?',
                answer: 'BankDetektiv ist ein Dienst, der dir hilft, unbekannte Abbuchungen auf deinem Kontoauszug zu identifizieren. Wir verfügen über eine umfangreiche Datenbank von Unternehmen und deren Abrechnungsbezeichnungen.'
              },
              {
                question: 'Wie genau sind die Informationen?',
                answer: 'Wir bemühen uns, unsere Datenbank ständig zu aktualisieren und zu erweitern. Die meisten gängigen Abbuchungen können wir zuverlässig identifizieren. Bei sehr speziellen oder lokalen Unternehmen kann es vorkommen, dass wir noch keine Informationen haben.'
              },
              {
                question: 'Ist die Nutzung von BankDetektiv kostenlos?',
                answer: 'Ja, die Grundfunktionen von BankDetektiv sind kostenlos. Wir planen in Zukunft zusätzliche Premium-Funktionen anzubieten, aber die Basissuche wird immer kostenlos bleiben.'
              },
              {
                question: 'Werden meine Daten sicher behandelt?',
                answer: 'Absolut. Wir speichern keine persönlichen Bankdaten oder vollständigen Kontoauszüge. Nur die von dir eingegebenen Suchbegriffe werden für die Verbesserung unseres Dienstes anonymisiert gespeichert.'
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border/50 bg-white/50 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
