
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const UeberUns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Über uns</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Unsere Mission ist es, Verbraucher zu schützen und Transparenz in Finanztransaktionen zu bringen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/f2b5846d-932a-4ec8-a638-91b81928e1a7.png" 
                    alt="Sebastian Wuerz, Gründer von BankDetektiv" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-bold mb-4">Sebastian Wuerz</h2>
                <p className="text-muted-foreground mb-3 text-sm">Gründer & CEO</p>
                
                <div className="prose prose-slate max-w-none">
                  <p className="mb-4">
                    Mit über 15 Jahren Erfahrung im Bankwesen und der Finanztechnologie gründete Sebastian Wuerz BankDetektiv aus einem ganz persönlichen Grund: Er wollte endlich Klarheit in unverständliche Kontoauszüge bringen.
                  </p>
                  <p className="mb-4">
                    Während seiner Zeit bei der Commerzbank und anderen Finanzinstituten sowie verschiedenen Startups fiel ihm immer wieder das gleiche Problem auf – viele Menschen konnten die oftmals kryptischen Abbuchungen auf ihren Kontoauszügen nicht zuordnen.
                  </p>
                  <p className="mb-4">
                    „Als ich selbst eine mysteriös aussehende Abbuchung entdeckte und stundenlang recherchieren musste, um herauszufinden, wofür ich eigentlich bezahlt hatte, wurde mir klar: Es muss eine einfachere Lösung geben", sagt Sebastian.
                  </p>
                  <p>
                    So entstand BankDetektiv – ein Service, der Millionen von Menschen in Deutschland dabei hilft, ihre Ausgaben auf einen Blick zu verstehen und sich vor potentiellem Betrug zu schützen.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Section with Image */}
            <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-display font-bold mb-6">Sebastian, Lara & Jian-Yang</h2>
              <h3 className="text-xl mb-6">Das Team hinter BankDetektiv</h3>
              
              {/* Team Image */}
              <div className="mb-8">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/421d57ba-1d4b-461c-93ed-6dfb8a0746e7.png" 
                    alt="Das BankDetektiv Team: Sebastian, Lara und Jian-Yang" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  BankDetektiv ist aus einem ganz persönlichen Aha-Moment entstanden: Sebastian – mit über 15 Jahren Erfahrung in der Banken- und FinTech-Industrie – stolperte über eine Abbuchung, die er sich einfach nicht erklären konnte. Nach stundenlanger Recherche stand fest: So geht's nicht weiter. Es braucht eine Lösung, die jeder versteht – ohne Fachchinesisch.
                </p>
                <p className="mb-4">
                  Gemeinsam mit Lara, die aus der Finanzwelt kommt und genau weiß, wie man komplexe Themen klar und freundlich erklärt, und Jian-Yang, der als Tech-Mastermind selbst den undurchsichtigsten Buchungscode entschlüsselt, wurde aus einer Idee eine Mission.
                </p>
                <p>
                  Heute hilft BankDetektiv Menschen in ganz Deutschland dabei, ihre Kontoauszüge schnell zu verstehen, verdächtige Abbuchungen zu erkennen und wieder die Kontrolle über ihre Finanzen zu gewinnen – verständlich, digital und mit einem echten Team im Hintergrund.
                </p>
              </div>
              
              {/* Updated Mission Statement */}
              <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-3">Unsere Mission</h3>
                  <p className="text-lg font-display">
                    BankDetektiv – weil du wissen solltest, wofür du zahlst. 
                    <br />
                    Wir machen Schluss mit Fragezeichen auf dem Kontoauszug.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-display font-bold mb-6">Unsere Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/70 rounded-xl p-6">
                  <div className="font-medium text-lg mb-2">Banking Know-how</div>
                  <p className="text-muted-foreground">
                    Unser Team besteht aus Experten mit jahrelanger Erfahrung im Bankensektor, die die Systeme hinter Abbuchungsbezeichnungen verstehen.
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-6">
                  <div className="font-medium text-lg mb-2">Tech-Innovation</div>
                  <p className="text-muted-foreground">
                    Wir nutzen modernste Technologien, um unsere Datenbank kontinuierlich zu erweitern und zu verbessern.
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-6">
                  <div className="font-medium text-lg mb-2">Verbraucherschutz</div>
                  <p className="text-muted-foreground">
                    Unser Fokus liegt darauf, Verbrauchern die Kontrolle über ihre Finanzen zurückzugeben und vor betrügerischen Abbuchungen zu schützen.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-display font-bold mb-6">Unsere Mission</h2>
              <p className="text-lg mb-8">
                Wir glauben, dass finanzielle Transparenz ein Grundrecht ist. Unsere Mission ist es, jedem Verbraucher die Möglichkeit zu geben, seine Finanztransaktionen vollständig zu verstehen und zu kontrollieren.
              </p>
              <a 
                href="/" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Jetzt BankDetektiv nutzen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default UeberUns;
