
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AGB() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container max-w-3xl py-12">
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-slate max-w-none">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für die Nutzung der Webseite BankDetektiv 
              (nachfolgend "Website") und alle damit verbundenen Dienstleistungen.
            </p>
            
            <h2>2. Leistungsbeschreibung</h2>
            <p>
              BankDetektiv bietet einen Service zur Identifikation und Erklärung von Abbuchungen auf Kontoauszügen an. 
              Die Dienstleistung wird "wie besehen" zur Verfügung gestellt, ohne jegliche ausdrückliche oder stillschweigende Garantie.
            </p>
            
            <h2>3. Nutzungsvoraussetzungen</h2>
            <p>
              Die Nutzung von BankDetektiv steht allen volljährigen Personen offen. Durch die Nutzung der Website erklären Sie, 
              dass Sie volljährig sind und diese AGB akzeptieren.
            </p>
            
            <h2>4. Datenschutz</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Unsere Datenschutzpraktiken sind in unserer Datenschutzerklärung 
              beschrieben, die Sie auf unserer Website einsehen können.
            </p>
            
            <h2>5. Haftungsbeschränkung</h2>
            <p>
              BankDetektiv haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die durch die Nutzung oder die Unfähigkeit 
              zur Nutzung unserer Dienste entstehen.
            </p>
            
            <h2>6. Änderungen der AGB</h2>
            <p>
              Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Die aktuelle Version ist stets auf unserer Website verfügbar.
            </p>
            
            <h2>7. Anwendbares Recht</h2>
            <p>
              Diese AGB unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
