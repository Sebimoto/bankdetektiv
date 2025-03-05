
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
                    src="/sebastian-wuerz.jpg" 
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
                    Mit über 15 Jahren Erfahrung im Bankwesen und Finanztechnologie gründete Sebastian Wuerz BankDetektiv aus einem persönlichen Bedürfnis heraus: Transparenz in unverständliche Kontoauszüge zu bringen.
                  </p>
                  <p className="mb-4">
                    Nach seiner Karriere bei der Deutschen Bank und verschiedenen FinTech-Startups bemerkte Sebastian ein wiederkehrendes Problem - Verbraucher hatten Schwierigkeiten, kryptische Abbuchungsbezeichnungen auf ihren Kontoauszügen zu identifizieren.
                  </p>
                  <p className="mb-4">
                    "Als ich eines Tages selbst mit einer mysteriösen Abbuchung konfrontiert wurde und stundenlang recherchieren musste, um herauszufinden, wofür ich bezahlt hatte, wusste ich, dass es eine bessere Lösung geben muss", erklärt Sebastian.
                  </p>
                  <p>
                    So entstand BankDetektiv - ein Service, der Millionen von Deutschen hilft, schnell und einfach zu verstehen, wofür ihr Geld ausgegeben wurde.
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
