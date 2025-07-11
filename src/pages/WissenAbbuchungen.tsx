
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Search, Eye, CheckCircle, Clock, AlertTriangle, Shield, CreditCard, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WissenAbbuchungen = () => {
  const tableOfContents = [
    { id: "was-sind-abbuchungen", title: "Was sind Abbuchungen?" },
    { id: "abbuchungsarten", title: "Arten von Abbuchungen" },
    { id: "abbuchung-identifizieren", title: "Unbekannte Abbuchung identifizieren" },
    { id: "schutz-massnahmen", title: "Schutzmaßnahmen" },
    { id: "rechtliche-grundlagen", title: "Rechtliche Grundlagen" },
    { id: "haeufige-probleme", title: "Häufige Probleme und Lösungen" },
    { id: "faq", title: "Häufig gestellte Fragen" }
  ];

  const abbuchungsarten = [
    { typ: "SEPA-Lastschrift", haeufigkeit: "Sehr häufig", risiko: "Niedrig", beschreibung: "Autorisierte Abbuchung mit Mandat" },
    { typ: "Kreditkarten-Sammelbuchung", haeufigkeit: "Häufig", risiko: "Niedrig", beschreibung: "Monatliche Kreditkartenumsätze" },
    { typ: "Dauerauftrag", haeufigkeit: "Häufig", risiko: "Sehr niedrig", beschreibung: "Selbst eingerichtete Überweisungen" },
    { typ: "Unbekannte Lastschrift", haeufigkeit: "Selten", risiko: "Hoch", beschreibung: "Nicht autorisierte Abbuchung" }
  ];

  const faqItems = [
    {
      question: "Wie erkenne ich eine unbekannte Abbuchung?",
      answer: "Unbekannte Abbuchungen erscheinen oft mit kryptischen Firmennamen, ungewöhnlichen Beträgen oder Transaktionen, die Sie nicht zuordnen können. Prüfen Sie regelmäßig Ihre Kontoauszüge und nutzen Sie Tools wie BankDetektiv zur Identifikation."
    },
    {
      question: "Was kann ich gegen unberechtigte Abbuchungen tun?",
      answer: "Bei unberechtigten SEPA-Lastschriften haben Sie 8 Wochen Zeit, um diese bei Ihrer Bank zurückzugeben. Ohne gültiges Mandat sogar bis zu 13 Monate. Kontaktieren Sie sofort Ihre Bank und dokumentieren Sie den Vorfall."
    },
    {
      question: "Wie lange dauert eine Lastschriftrückgabe?",
      answer: "Eine Lastschriftrückgabe dauert in der Regel 1-3 Bankarbeitstage. Der Betrag wird Ihrem Konto gutgeschrieben, sobald die Rückgabe bearbeitet wurde."
    },
    {
      question: "Kann ich SEPA-Mandate widerrufen?",
      answer: "Ja, SEPA-Mandate können jederzeit schriftlich beim Zahlungsempfänger oder bei Ihrer Bank widerrufen werden. Der Widerruf sollte schriftlich erfolgen und ist sofort wirksam."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/wissen" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zum Wissensbereich
            </Link>
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Abbuchungen verstehen: Der komplette Guide 2024
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Erfahren Sie alles über Bankabbuchungen, SEPA-Lastschriften und wie Sie unbekannte Transaktionen auf Ihrem Kontoauszug sicher identifizieren und handhaben können.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Lesedauer: 8 Minuten</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Zuletzt aktualisiert: Januar 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Expertenwissen</span>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white/50 border border-border/50 rounded-2xl p-6 mb-12">
                <h2 className="text-xl font-medium mb-4">Inhaltsverzeichnis</h2>
                <ul className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.id}`} 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {index + 1}. {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              
              {/* Was sind Abbuchungen */}
              <div id="was-sind-abbuchungen" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">Was sind Abbuchungen?</h2>
                <p className="text-muted-foreground mb-6">
                  Abbuchungen sind automatische Geldtransfers von Ihrem Bankkonto zu einem anderen Konto. Sie erfolgen durch verschiedene Zahlungsverfahren und können sowohl von Ihnen autorisiert als auch ungewollt auftreten. Besonders bei unbekannten Abbuchungen ist es wichtig, schnell zu handeln und die Transaktion zu überprüfen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                    <Search className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-medium mb-2">1. Identifizieren</h3>
                    <p className="text-muted-foreground">Prüfen Sie unbekannte Abbuchungen sofort bei Erhalt des Kontoauszugs</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                    <Eye className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-medium mb-2">2. Analysieren</h3>
                    <p className="text-muted-foreground">Nutzen Sie <Link to="/" className="text-primary hover:text-primary/80">BankDetektiv</Link> zur Entschlüsselung</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                    <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-medium mb-2">3. Handeln</h3>
                    <p className="text-muted-foreground">Treffen Sie die richtige Entscheidung basierend auf den Informationen</p>
                  </div>
                </div>
              </div>

              {/* Abbuchungsarten */}
              <div id="abbuchungsarten" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">Arten von Abbuchungen im Überblick</h2>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white/50 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-medium">Abbuchungsart</th>
                        <th className="text-left p-4 font-medium">Häufigkeit</th>
                        <th className="text-left p-4 font-medium">Risiko</th>
                        <th className="text-left p-4 font-medium">Beschreibung</th>
                      </tr>
                    </thead>
                    <tbody>
                      {abbuchungsarten.map((item, index) => (
                        <tr key={index} className="border-t border-border/50">
                          <td className="p-4 font-medium">{item.typ}</td>
                          <td className="p-4">{item.haeufigkeit}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item.risiko === 'Sehr niedrig' ? 'bg-green-100 text-green-700' :
                              item.risiko === 'Niedrig' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {item.risiko}
                            </span>
                          </td>
                          <td className="p-4 text-muted-foreground">{item.beschreibung}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                      SEPA-Lastschrift
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Die häufigste Abbuchungsart in Europa. Unternehmen benötigen Ihre schriftliche Einzugsermächtigung (SEPA-Mandat).
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rückgabe binnen 8 Wochen möglich</li>
                      <li>• Bei fehlendem Mandat: 13 Monate</li>
                      <li>• Widerruf jederzeit möglich</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-2xl border border-border/50 bg-white/50">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Kreditkarten-Abbuchungen
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Sammelbuchungen Ihrer Kreditkartenumsätze, meist monatlich von Ihrem Referenzkonto abgebucht.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Einzelne Transaktionen prüfbar</li>
                      <li>• Reklamation bei Kartenfirma</li>
                      <li>• Chargeback-Verfahren möglich</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Abbuchung identifizieren */}
              <div id="abbuchung-identifizieren" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">So identifizieren Sie unbekannte Abbuchungen</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-yellow-800 mb-2">Wichtiger Hinweis</h3>
                      <p className="text-yellow-700">
                        Prüfen Sie Ihre Kontoauszüge regelmäßig und reagieren Sie schnell auf unbekannte Abbuchungen. 
                        Je früher Sie handeln, desto besser können Sie Ihr Geld zurückholen.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-medium mb-4">Schritt-für-Schritt Anleitung</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-white/50 rounded-lg border border-border/50">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-medium mb-2">Kontoauszug systematisch prüfen</h4>
                      <p className="text-muted-foreground">Gehen Sie alle Transaktionen durch und markieren Sie unbekannte Abbuchungen. Achten Sie besonders auf ungewöhnliche Firmennamen oder Beträge.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-6 bg-white/50 rounded-lg border border-border/50">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-medium mb-2">Firmennamen recherchieren</h4>
                      <p className="text-muted-foreground">Nutzen Sie unseren <Link to="/" className="text-primary hover:text-primary/80">BankDetektiv-Service</Link> oder recherchieren Sie online nach dem Firmennamen der Abbuchung.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-6 bg-white/50 rounded-lg border border-border/50">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-medium mb-2">Belege sammeln</h4>
                      <p className="text-muted-foreground">Dokumentieren Sie alle relevanten Informationen: Datum, Betrag, Verwendungszweck und eventuelle Mandate oder Verträge.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-6 bg-white/50 rounded-lg border border-border/50">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-medium mb-2">Sofortmaßnahmen einleiten</h4>
                      <p className="text-muted-foreground">Bei unberechtigten Abbuchungen kontaktieren Sie sofort Ihre Bank für eine Lastschriftrückgabe. Mehr dazu in unserem <Link to="/wissen/sicherheit" className="text-primary hover:text-primary/80">Sicherheits-Guide</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schutzmaßnahmen */}
              <div id="schutz-massnahmen" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">Präventive Schutzmaßnahmen</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg border border-border/50 bg-white/50">
                    <h3 className="font-medium mb-3">Regelmäßige Kontrolle</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Wöchentliche Kontoprüfung</li>
                      <li>• Push-Benachrichtigungen aktivieren</li>
                      <li>• Unbekannte Transaktionen sofort melden</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-lg border border-border/50 bg-white/50">
                    <h3 className="font-medium mb-3">Mandate verwalten</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Liste aller SEPA-Mandate führen</li>
                      <li>• Ungenutzte Mandate widerrufen</li>
                      <li>• Kopien aller Einzugsermächtigungen aufbewahren</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rechtliche Grundlagen */}
              <div id="rechtliche-grundlagen" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">Rechtliche Grundlagen und Ihre Rechte</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="font-medium text-blue-800 mb-3">Ihre Rechte bei Lastschriften</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>8-Wochen-Frist:</strong> Autorisierte Lastschriften können binnen 8 Wochen zurückgegeben werden</li>
                    <li>• <strong>13-Monate-Frist:</strong> Nicht autorisierte Lastschriften können bis zu 13 Monate zurückgegeben werden</li>
                    <li>• <strong>Kostenfrei:</strong> Die erste Rückgabe ist in der Regel kostenfrei</li>
                    <li>• <strong>Beweislast:</strong> Bei Streitfällen muss das Unternehmen ein gültiges Mandat vorweisen</li>
                  </ul>
                </div>

                <p className="text-muted-foreground mb-4">
                  Weitere rechtliche Informationen finden Sie in unserem <Link to="/wissen/bankgebuehren" className="text-primary hover:text-primary/80">Bankgebühren-Guide</Link> und in unseren <Link to="/agb" className="text-primary hover:text-primary/80">Allgemeinen Geschäftsbedingungen</Link>.
                </p>
              </div>

              {/* Häufige Probleme */}
              <div id="haeufige-probleme" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">Häufige Probleme und Lösungsansätze</h2>
                
                <div className="space-y-6">
                  <div className="p-6 border border-border/50 rounded-lg bg-white/50">
                    <h3 className="font-medium mb-2 text-red-600">Problem: Doppelte Abbuchung</h3>
                    <p className="text-muted-foreground mb-3">Ein Betrag wurde zweimal von Ihrem Konto abgebucht.</p>
                    <p className="text-sm"><strong>Lösung:</strong> Kontaktieren Sie sowohl Ihre Bank als auch das abbuchende Unternehmen. Eine Lastschriftrückgabe ist meist problemlos möglich.</p>
                  </div>
                  
                  <div className="p-6 border border-border/50 rounded-lg bg-white/50">
                    <h3 className="font-medium mb-2 text-red-600">Problem: Abbuchung trotz Kündigung</h3>
                    <p className="text-muted-foreground mb-3">Ein Unternehmen bucht weiter ab, obwohl Sie gekündigt haben.</p>
                    <p className="text-sm"><strong>Lösung:</strong> SEPA-Mandat schriftlich widerrufen und Lastschrift zurückgeben lassen. Weitere Schritte siehe <Link to="/wissen/sicherheit" className="text-primary hover:text-primary/80">Sicherheits-Guide</Link>.</p>
                  </div>
                  
                  <div className="p-6 border border-border/50 rounded-lg bg-white/50">
                    <h3 className="font-medium mb-2 text-red-600">Problem: Unbekannter Firmenname</h3>
                    <p className="text-muted-foreground mb-3">Die Abbuchung stammt von einem unbekannten Unternehmen.</p>
                    <p className="text-sm"><strong>Lösung:</strong> Nutzen Sie unseren <Link to="/" className="text-primary hover:text-primary/80">kostenlosen BankDetektiv-Service</Link> zur Identifikation des Unternehmens.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="mb-16">
                <h2 className="text-3xl font-display font-semibold mb-6">Häufig gestellte Fragen (FAQ)</h2>
                
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details key={index} className="group p-6 border border-border/50 rounded-lg bg-white/50">
                      <summary className="font-medium cursor-pointer flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-primary" />
                          {item.question}
                        </span>
                        <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-semibold mb-6">Weiterführende Artikel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/wissen/sicherheit" className="p-4 bg-white/70 rounded-lg border border-border/50 hover:shadow-md transition-shadow">
                    <h3 className="font-medium mb-2">Sicherheit beim Online-Banking</h3>
                    <p className="text-sm text-muted-foreground">Schützen Sie sich vor Betrug und unautorisierten Zugriffen</p>
                  </Link>
                  <Link to="/wissen/bankgebuehren" className="p-4 bg-white/70 rounded-lg border border-border/50 hover:shadow-md transition-shadow">
                    <h3 className="font-medium mb-2">Bankgebühren verstehen</h3>
                    <p className="text-sm text-muted-foreground">Transparenz bei Kosten und Gebühren Ihrer Bank</p>
                  </Link>
                  <Link to="/wissen/haeufige-abbuchungen" className="p-4 bg-white/70 rounded-lg border border-border/50 hover:shadow-md transition-shadow">
                    <h3 className="font-medium mb-2">Häufige Abbuchungen erklärt</h3>
                    <p className="text-sm text-muted-foreground">Die häufigsten Abbuchungen und ihre Bedeutung</p>
                  </Link>
                  <Link to="/kontakt" className="p-4 bg-white/70 rounded-lg border border-border/50 hover:shadow-md transition-shadow">
                    <h3 className="font-medium mb-2">Persönliche Beratung</h3>
                    <p className="text-sm text-muted-foreground">Kontaktieren Sie unsere Experten</p>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WissenAbbuchungen;
