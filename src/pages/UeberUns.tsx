
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const UeberUns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">Über uns</h1>
            <p className="text-xl text-muted-foreground mb-12">
              BankDetektiv – weil du wissen solltest, wofür du zahlst. 
              <br />
              Wir machen Schluss mit Fragezeichen auf dem Kontoauszug.
            </p>
            
            {/* Team Section with Image */}
            <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl font-display font-bold mb-6">Das Team hinter BankDetektiv</h2>
              
              {/* Team Image - Optimized */}
              <div className="mb-8">
                <div className="rounded-xl overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src="/lovable-uploads/55ad27cb-a330-458a-bf53-d49cf87738eb.png" 
                      alt="Das BankDetektiv Team: Sebastian, Lara und Jian-Yang" 
                      className="w-full h-full object-cover"
                      loading="eager"
                      width={800}
                      height={450}
                    />
                  </AspectRatio>
                </div>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="mb-4">
                  BankDetektiv – entstanden aus einem persönlichen Aha-Moment:
                  Sebastian, mit über 15 Jahren Erfahrung in der Banken- und FinTech-Welt, stieß eines Tages auf eine mysteriöse Abbuchung auf seinem Konto. Trotz stundenlanger Recherche blieb unklar, worum es sich handelte. Da wurde ihm klar: So kann das nicht weitergehen. Es braucht eine Lösung, die jeder versteht – und die endlich Licht in komplizierte Transaktionen bringt.
                </p>
                <p className="mb-4">
                  Gemeinsam mit Lara, die komplexe Finanzthemen verständlich und sympathisch auf den Punkt bringt, und Jian-Yang, dem Tech-Mastermind, der selbst den kryptischsten Buchungscode knackt, wurde aus der Idee eine klare Mission.
                </p>
                <p>
                  Heute unterstützt BankDetektiv Menschen in ganz Deutschland dabei, ihre Kontoauszüge auf einen Blick zu verstehen, verdächtige Abbuchungen zu erkennen – und die Kontrolle über ihre Finanzen zurückzugewinnen: verständlich, digital und mit einem echten Team an ihrer Seite.
                </p>
              </div>
              
              {/* Mission Statement */}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default UeberUns;
