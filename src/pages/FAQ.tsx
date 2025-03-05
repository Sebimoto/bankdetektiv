
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Häufig gestellte Fragen</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu BankDetektiv.
            </p>

            <div className="space-y-8">
              <div className="bg-white/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Was ist BankDetektiv?</h3>
                <p className="text-muted-foreground">
                  BankDetektiv ist ein kostenloser Service, der Ihnen hilft, unbekannte oder kryptische Abbuchungen auf Ihren Kontoauszügen zu identifizieren und zu verstehen. Geben Sie einfach den Namen oder die Beschreibung der Abbuchung ein, und wir erklären Ihnen, wer dahinter steckt.
                </p>
              </div>

              <div className="bg-white/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Ist BankDetektiv kostenlos?</h3>
                <p className="text-muted-foreground">
                  Ja, BankDetektiv ist komplett kostenlos für alle Nutzer. Wir finanzieren uns durch diskrete Werbung und Partnerschaften, die Ihre Nutzererfahrung nicht beeinträchtigen.
                </p>
              </div>

              <div className="bg-white/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Werden meine Daten sicher behandelt?</h3>
                <p className="text-muted-foreground">
                  Absolut. Wir speichern keine persönlichen Finanzdaten oder Kontoauszüge. Die von Ihnen eingegebenen Suchanfragen werden anonymisiert und nur zur Verbesserung unseres Services verwendet. Datenschutz ist für uns eine höchste Priorität.
                </p>
              </div>

              <div className="bg-white/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Woher stammen die Informationen zu den Abbuchungen?</h3>
                <p className="text-muted-foreground">
                  Unsere Datenbank wird kontinuierlich mit Informationen zu deutschen und internationalen Unternehmen aktualisiert. Wir sammeln und verifizieren Daten aus verschiedenen Quellen, darunter offizielle Unternehmensregister, Nutzerberichte und unsere eigenen Recherchen.
                </p>
              </div>

              <div className="bg-white/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Was tun, wenn BankDetektiv meine Abbuchung nicht kennt?</h3>
                <p className="text-muted-foreground">
                  Bei sehr speziellen oder lokalen Unternehmen kann es vorkommen, dass wir noch keine Informationen haben. In diesem Fall können Sie uns den Abbuchungsbegriff über unser Kontaktformular oder per E-Mail an info@bankdetektiv.de melden. Wir werden ihn recherchieren und in unsere Datenbank aufnehmen.
                </p>
              </div>

              <div className="bg-white/70 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-3">Kann ich BankDetektiv bei verdächtigen Abbuchungen nutzen?</h3>
                <p className="text-muted-foreground">
                  Ja, BankDetektiv kann Ihnen helfen, verdächtige Abbuchungen zu identifizieren. Sollten Sie eine Abbuchung als betrügerisch einstufen, empfehlen wir jedoch, umgehend Ihre Bank zu kontaktieren und die Transaktion zurückzufordern. Bei Betrug sollten Sie auch Anzeige bei der Polizei erstatten.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
