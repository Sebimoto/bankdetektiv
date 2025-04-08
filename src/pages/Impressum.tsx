
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
              Ohana Ventures UG (haftungsbeschränkt)<br />
              Mainzer Landstraße 47<br />
              60329 Frankfurt am Main
            </p>
            
            <h3>Vertreten durch</h3>
            <p>
              Sebastian Wuerz, Geschäftsführer
            </p>
            
            <h3>Kontakt</h3>
            <p>
              E-Mail: info@bankdetektiv.de
            </p>
            
            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Frankfurt am Main<br />
              Registernummer: HRB 128623
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
