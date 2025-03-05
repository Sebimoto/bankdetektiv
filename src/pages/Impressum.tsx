
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container max-w-3xl py-12">
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-8">Impressum</h1>
          
          <div className="prose prose-slate max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              BankDetektiv GmbH<br />
              Musterstraße 123<br />
              12345 Berlin
            </p>
            
            <h3>Vertreten durch</h3>
            <p>
              Sebastian Wuerz, Geschäftsführer
            </p>
            
            <h3>Kontakt</h3>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@bankdetektiv.de
            </p>
            
            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>
            
            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123456789
            </p>
            
            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der 
              Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            
            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir 
              für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
