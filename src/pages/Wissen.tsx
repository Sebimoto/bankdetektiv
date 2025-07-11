
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Book, Shield, CreditCard, AlertCircle } from 'lucide-react';

const Wissen = () => {
  const wissenKategorien = [
    {
      icon: AlertCircle,
      title: "Abbuchungen verstehen",
      description: "Lerne, wie du unbekannte Transaktionen auf deinem Kontoauszug identifizierst und verstehst.",
      href: "/wissen/abbuchungen",
      color: "text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Bankgebühren Guide",
      description: "Alles über versteckte Kosten, Gebühren und wie du sie vermeiden kannst.",
      href: "/wissen/bankgebuehren",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Sicherheit beim Banking",
      description: "Wichtige Tipps und Tricks für sicheres Online-Banking und Schutz vor Betrug.",
      href: "/wissen/sicherheit",
      color: "text-red-600"
    },
    {
      icon: Book,
      title: "Häufige Abbuchungen",
      description: "Die häufigsten Abbuchungen auf Kontoauszügen und ihre Bedeutung erklärt.",
      href: "/wissen/haeufige-abbuchungen",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="container py-20">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Wissensbereich</h1>
            <p className="text-xl text-muted-foreground">
              Erweitere dein Wissen über Bankabbuchungen, Gebühren und Online-Banking-Sicherheit
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {wissenKategorien.map((kategorie, index) => (
              <Link
                key={index}
                to={kategorie.href}
                className="group p-8 rounded-3xl border border-border/50 bg-white/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] block"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-2xl bg-gray-100 ${kategorie.color} group-hover:scale-110 transition-transform`}>
                    <kategorie.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-medium mb-3 group-hover:text-primary transition-colors">
                      {kategorie.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {kategorie.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wissen;
