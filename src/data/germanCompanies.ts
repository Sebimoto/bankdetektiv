
// Umfangreiche Datenbank mit den meistgenutzten Online-Shops und Diensten in Deutschland
// sowie deren übliche Abbuchungsbezeichnungen

interface Company {
  id: string;
  companyName: string;
  description: string;
  category: string;
  logo?: string;
  website?: string;
  chargeDetails?: string;
  searchTerms: string[]; // Suchbegriffe und Abbuchungsbezeichnungen
}

export const germanCompanies: Company[] = [
  // E-Commerce & Einzelhandel
  {
    id: '1',
    companyName: 'Amazon',
    description: 'Online-Einzelhandelsplattform',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/amazon.com',
    website: 'amazon.de',
    chargeDetails: 'Abbuchungen von Amazon erscheinen oft als "AMZN", "AMZN MKTP DE", "Amazon.de", "Amazon Payments" oder "AMZNPrime DE" auf deinem Kontoauszug.',
    searchTerms: ['AMZN', 'amazon.de', 'Amazon Payments', 'Amazon Prime', 'AMZNPrime DE', 'AMZN MKTP DE', 'Amazon Digital', 'Amazon Services']
  },
  {
    id: '2',
    companyName: 'Otto',
    description: 'Online-Versandhaus',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/otto.de',
    website: 'otto.de',
    chargeDetails: 'Otto-Abbuchungen erscheinen meist als "OTTO GmbH & Co KG" oder "OTTO-Versand" auf dem Kontoauszug.',
    searchTerms: ['OTTO', 'OTTO GmbH', 'OTTO-Versand', 'Otto (GmbH & Co KG)', 'OTTO Zahlung', 'OTTO-Rechnung']
  },
  {
    id: '3',
    companyName: 'Zalando',
    description: 'Online-Modehändler',
    category: 'Mode',
    logo: 'https://logo.clearbit.com/zalando.de',
    website: 'zalando.de',
    chargeDetails: 'Zalando-Abbuchungen erscheinen als "ZALANDO SE" oder "Zalando Payments" auf deinem Kontoauszug.',
    searchTerms: ['ZALANDO', 'ZALANDO SE', 'Zalando Payments', 'Zalando Bestellung', 'Zalando Rechnung']
  },
  {
    id: '4',
    companyName: 'MediaMarkt',
    description: 'Elektronik-Einzelhändler',
    category: 'Elektronik',
    logo: 'https://logo.clearbit.com/mediamarkt.de',
    website: 'mediamarkt.de',
    chargeDetails: 'MediaMarkt-Abbuchungen erscheinen als "MediaMarkt" oder "Media Markt" auf dem Kontoauszug.',
    searchTerms: ['MediaMarkt', 'Media Markt', 'MEDIA MARKT', 'MM Online', 'MediaMarkt E-Commerce']
  },
  {
    id: '5',
    companyName: 'Saturn',
    description: 'Elektronik-Einzelhändler',
    category: 'Elektronik',
    logo: 'https://logo.clearbit.com/saturn.de',
    website: 'saturn.de',
    chargeDetails: 'Saturn-Abbuchungen erscheinen als "SATURN" oder "Saturn Online" auf dem Kontoauszug.',
    searchTerms: ['SATURN', 'Saturn Online', 'Saturn Elektro', 'Saturn E-Commerce']
  },
  
  // Streaming-Dienste
  {
    id: '6',
    companyName: 'Netflix',
    description: 'Streaming-Dienst für Filme und Serien',
    category: 'Unterhaltung',
    logo: 'https://logo.clearbit.com/netflix.com',
    website: 'netflix.com',
    chargeDetails: 'Netflix-Abbuchungen erscheinen als "NETFLIX" oder "Netflix International" mit dem monatlichen Abonnementbetrag.',
    searchTerms: ['NETFLIX', 'Netflix International', 'Netflix Abo', 'Netflix Service', 'Netflix Digital']
  },
  {
    id: '7',
    companyName: 'Spotify',
    description: 'Musik-Streaming-Dienst',
    category: 'Unterhaltung',
    logo: 'https://logo.clearbit.com/spotify.com',
    website: 'spotify.com',
    chargeDetails: 'Spotify-Abbuchungen erscheinen als "SPOTIFY" oder "Spotify AB" auf dem Kontoauszug.',
    searchTerms: ['SPOTIFY', 'Spotify AB', 'Spotify Premium', 'Spotify Abo', 'Spotify Zahlungen']
  },
  {
    id: '8',
    companyName: 'Disney+',
    description: 'Streaming-Dienst für Filme und Serien',
    category: 'Unterhaltung',
    logo: 'https://logo.clearbit.com/disneyplus.com',
    website: 'disneyplus.com',
    chargeDetails: 'Disney+ Abbuchungen erscheinen als "DISNEY PLUS" oder "THE WALT DISNEY COMPANY" auf dem Kontoauszug.',
    searchTerms: ['DISNEY+', 'DISNEY PLUS', 'THE WALT DISNEY COMPANY', 'Disney+ Abo', 'Disney Plus Zahlung']
  },
  {
    id: '9',
    companyName: 'Amazon Prime Video',
    description: 'Streaming-Dienst für Filme und Serien',
    category: 'Unterhaltung',
    logo: 'https://logo.clearbit.com/primevideo.com',
    website: 'primevideo.com',
    chargeDetails: 'Prime Video Käufe erscheinen als "AMZN Digital" oder "Amazon Video" auf dem Kontoauszug.',
    searchTerms: ['AMZN Digital', 'Amazon Video', 'Prime Video', 'Amazon Prime Video', 'AMZN Streaming']
  },
  {
    id: '10',
    companyName: 'Apple TV+',
    description: 'Streaming-Dienst für Filme und Serien',
    category: 'Unterhaltung',
    logo: 'https://logo.clearbit.com/apple.com',
    website: 'apple.com/apple-tv-plus',
    chargeDetails: 'Apple TV+ Abbuchungen erscheinen als "Apple Services" oder "Apple.com/bill" auf dem Kontoauszug.',
    searchTerms: ['Apple TV+', 'Apple.com/bill', 'Apple Services', 'Apple Media Services', 'iTunes']
  },
  
  // Zahlungsdienstleister
  {
    id: '11',
    companyName: 'PayPal',
    description: 'Online-Zahlungsdienstleister',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/paypal.com',
    website: 'paypal.com',
    chargeDetails: 'PayPal-Abbuchungen zeigen oft den Namen des Händlers zusammen mit "PAYPAL" oder "PP.+" an.',
    searchTerms: ['PAYPAL', 'PP.', 'PayPal Europe', 'PayPal *', 'PP*', 'PAYPAL ZAHLUNG']
  },
  {
    id: '12',
    companyName: 'Klarna',
    description: 'Zahlungsdienstleister und Käuferschutz',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/klarna.com',
    website: 'klarna.com',
    chargeDetails: 'Klarna-Abbuchungen erscheinen als "KLARNA" gefolgt von einer Bestellnummer oder dem Shop-Namen.',
    searchTerms: ['KLARNA', 'Klarna AB', 'Klarna Ratenkauf', 'Klarna Zahlung', 'Klarna Rechnungskauf']
  },
  {
    id: '13',
    companyName: 'Apple Pay',
    description: 'Mobile Zahlungsplattform',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/apple.com',
    website: 'apple.com/apple-pay',
    chargeDetails: 'Apple Pay Abbuchungen zeigen den Namen des Händlers zusammen mit einem Hinweis auf Apple Pay.',
    searchTerms: ['Apple Pay', 'APL*', 'APPLE PAY']
  },
  {
    id: '14',
    companyName: 'Google Pay',
    description: 'Mobile Zahlungsplattform',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/google.com',
    website: 'pay.google.com',
    chargeDetails: 'Google Pay Abbuchungen zeigen den Namen des Händlers zusammen mit "Google Pay" oder "GPay".',
    searchTerms: ['Google Pay', 'GPay', 'GOOGLE *', 'G-PAY*']
  },
  
  // Lebensmittellieferungen
  {
    id: '15',
    companyName: 'Lieferando',
    description: 'Essenslieferdienst',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/lieferando.de',
    website: 'lieferando.de',
    chargeDetails: 'Lieferando-Abbuchungen erscheinen als "LIEFERANDO" oder "Takeaway.com" auf dem Kontoauszug.',
    searchTerms: ['LIEFERANDO', 'Takeaway.com', 'Lieferando.de', 'Just Eat Takeaway']
  },
  {
    id: '16',
    companyName: 'Wolt',
    description: 'Essenslieferdienst',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/wolt.com',
    website: 'wolt.com',
    chargeDetails: 'Wolt-Abbuchungen erscheinen als "WOLT" auf dem Kontoauszug.',
    searchTerms: ['WOLT', 'Wolt Germany', 'Wolt Lieferung']
  },
  {
    id: '17',
    companyName: 'Flink',
    description: 'Lebensmittel-Lieferdienst',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/goflink.com',
    website: 'goflink.com',
    chargeDetails: 'Flink-Abbuchungen erscheinen als "FLINK" oder "Flink SE" auf dem Kontoauszug.',
    searchTerms: ['FLINK', 'Flink SE', 'Flink Delivery', 'FLINK.COM']
  },
  {
    id: '18',
    companyName: 'Gorillas',
    description: 'Lebensmittel-Lieferdienst',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/gorillas.io',
    website: 'gorillas.io',
    chargeDetails: 'Gorillas-Abbuchungen erscheinen als "GORILLAS" auf dem Kontoauszug.',
    searchTerms: ['GORILLAS', 'Gorillas Technologies', 'Gorillas Delivery']
  },
  
  // Telekommunikation
  {
    id: '19',
    companyName: 'Deutsche Telekom',
    description: 'Telekommunikationsanbieter',
    category: 'Telekommunikation',
    logo: 'https://logo.clearbit.com/telekom.de',
    website: 'telekom.de',
    chargeDetails: 'Telekom-Abbuchungen erscheinen als "DEUTSCHE TELEKOM" oder "Telekom Deutschland" auf dem Kontoauszug.',
    searchTerms: ['DEUTSCHE TELEKOM', 'Telekom Deutschland', 'T-Mobile', 'T-COM', 'Telekom']
  },
  {
    id: '20',
    companyName: 'Vodafone',
    description: 'Telekommunikationsanbieter',
    category: 'Telekommunikation',
    logo: 'https://logo.clearbit.com/vodafone.de',
    website: 'vodafone.de',
    chargeDetails: 'Vodafone-Abbuchungen erscheinen als "VODAFONE" oder "Vodafone GmbH" auf dem Kontoauszug.',
    searchTerms: ['VODAFONE', 'Vodafone GmbH', 'Vodafone D2', 'VODAFONE RECHNUNG']
  },
  
  // --- Weitere Kategorien ---
  
  // SaaS & Abonnementdienste
  {
    id: '21',
    companyName: 'Microsoft',
    description: 'Softwareunternehmen',
    category: 'Software',
    logo: 'https://logo.clearbit.com/microsoft.com',
    website: 'microsoft.com',
    chargeDetails: 'Microsoft-Abbuchungen erscheinen als "MICROSOFT" oder "MS Subscription" auf dem Kontoauszug.',
    searchTerms: ['MICROSOFT', 'MS Subscription', 'Microsoft Office', 'Microsoft 365', 'MS*', 'MSFT *']
  },
  {
    id: '22',
    companyName: 'Adobe',
    description: 'Softwareunternehmen für Kreativprodukte',
    category: 'Software',
    logo: 'https://logo.clearbit.com/adobe.com',
    website: 'adobe.com',
    chargeDetails: 'Adobe-Abbuchungen erscheinen als "ADOBE" oder "ADOBE SYSTEMS" auf dem Kontoauszug.',
    searchTerms: ['ADOBE', 'ADOBE SYSTEMS', 'Adobe Creative Cloud', 'Adobe Photography', 'Adobe Acrobat']
  },
  
  // Mobilität
  {
    id: '23',
    companyName: 'Deutsche Bahn',
    description: 'Eisenbahnunternehmen',
    category: 'Mobilität',
    logo: 'https://logo.clearbit.com/bahn.de',
    website: 'bahn.de',
    chargeDetails: 'Deutsche Bahn-Abbuchungen erscheinen als "DB VERTRIEB GMBH" oder "DEUTSCHE BAHN" auf dem Kontoauszug.',
    searchTerms: ['DEUTSCHE BAHN', 'DB VERTRIEB GMBH', 'DB Vertrieb', 'Bahn Ticket', 'DB Navigator']
  },
  {
    id: '24',
    companyName: 'Flixbus',
    description: 'Fernbusanbieter',
    category: 'Mobilität',
    logo: 'https://logo.clearbit.com/flixbus.de',
    website: 'flixbus.de',
    chargeDetails: 'Flixbus-Abbuchungen erscheinen als "FLIXBUS" oder "Flix Mobility GmbH" auf dem Kontoauszug.',
    searchTerms: ['FLIXBUS', 'Flix Mobility GmbH', 'FlixMobility', 'FlixTrain']
  },
  {
    id: '25',
    companyName: 'SHARE NOW',
    description: 'Carsharing-Anbieter',
    category: 'Mobilität',
    logo: 'https://logo.clearbit.com/share-now.com',
    website: 'share-now.com',
    chargeDetails: 'SHARE NOW-Abbuchungen erscheinen als "SHARE NOW" oder "car2go" auf dem Kontoauszug.',
    searchTerms: ['SHARE NOW', 'car2go', 'ShareNow', 'SHARE-NOW']
  },
  
  // Versorgungsunternehmen
  {
    id: '26',
    companyName: 'E.ON',
    description: 'Energieversorgungsunternehmen',
    category: 'Versorgung',
    logo: 'https://logo.clearbit.com/eon.de',
    website: 'eon.de',
    chargeDetails: 'E.ON-Abbuchungen erscheinen als "E.ON Energie" oder "EON ENERGIE" auf dem Kontoauszug.',
    searchTerms: ['E.ON', 'EON ENERGIE', 'E.ON Energie Deutschland', 'E.ON Grundversorgung']
  },
  {
    id: '27',
    companyName: 'Vattenfall',
    description: 'Energieversorgungsunternehmen',
    category: 'Versorgung',
    logo: 'https://logo.clearbit.com/vattenfall.de',
    website: 'vattenfall.de',
    chargeDetails: 'Vattenfall-Abbuchungen erscheinen als "VATTENFALL" oder "Vattenfall Europe" auf dem Kontoauszug.',
    searchTerms: ['VATTENFALL', 'Vattenfall Europe', 'Vattenfall Wärme', 'Vattenfall Strom']
  },
  
  // Versicherungen
  {
    id: '28',
    companyName: 'Allianz',
    description: 'Versicherungsunternehmen',
    category: 'Versicherung',
    logo: 'https://logo.clearbit.com/allianz.de',
    website: 'allianz.de',
    chargeDetails: 'Allianz-Abbuchungen erscheinen als "ALLIANZ" oder "Allianz Versicherung" auf dem Kontoauszug.',
    searchTerms: ['ALLIANZ', 'Allianz Versicherung', 'Allianz Deutschland AG', 'Allianz Lebensversicherung']
  },
  {
    id: '29',
    companyName: 'HUK-COBURG',
    description: 'Versicherungsunternehmen',
    category: 'Versicherung',
    logo: 'https://logo.clearbit.com/huk.de',
    website: 'huk.de',
    chargeDetails: 'HUK-COBURG-Abbuchungen erscheinen als "HUK-COBURG" auf dem Kontoauszug.',
    searchTerms: ['HUK-COBURG', 'HUK COBURG', 'HUK', 'HUK24', 'HUK Versicherung']
  },
  
  // Weitere Einzelhändler
  {
    id: '30',
    companyName: 'Tchibo',
    description: 'Kaffee- und Konsumgüterhandel',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/tchibo.de',
    website: 'tchibo.de',
    chargeDetails: 'Tchibo-Abbuchungen erscheinen als "TCHIBO GMBH" oder "Tchibo Direct" auf dem Kontoauszug.',
    searchTerms: ['TCHIBO', 'Tchibo GmbH', 'Tchibo Direct', 'TCH*', 'Tchibo Online']
  },
  {
    id: '31',
    companyName: 'Galeria',
    description: 'Warenhauskette',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/galeria.de',
    website: 'galeria.de',
    chargeDetails: 'Galeria-Abbuchungen erscheinen als "GALERIA" oder "Galeria Karstadt Kaufhof" auf dem Kontoauszug.',
    searchTerms: ['GALERIA', 'Galeria Karstadt Kaufhof', 'Karstadt', 'Kaufhof', 'GALERIA.DE']
  },
  {
    id: '32',
    companyName: 'Thalia',
    description: 'Buchhandlung',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/thalia.de',
    website: 'thalia.de',
    chargeDetails: 'Thalia-Abbuchungen erscheinen als "THALIA" oder "Thalia Bücher" auf dem Kontoauszug.',
    searchTerms: ['THALIA', 'Thalia Bücher', 'Thalia.de', 'Thalia Buchhandlung']
  },
  
  // Mode & Bekleidung (Ergänzungen)
  {
    id: '33',
    companyName: 'H&M',
    description: 'Bekleidungseinzelhändler',
    category: 'Mode',
    logo: 'https://logo.clearbit.com/hm.com',
    website: 'hm.com',
    chargeDetails: 'H&M-Abbuchungen erscheinen als "H&M" oder "H & M Hennes & Mauritz" auf dem Kontoauszug.',
    searchTerms: ['H&M', 'H & M', 'Hennes & Mauritz', 'H&M Online', 'H&M DE']
  },
  {
    id: '34',
    companyName: 'ZARA',
    description: 'Bekleidungseinzelhändler',
    category: 'Mode',
    logo: 'https://logo.clearbit.com/zara.com',
    website: 'zara.com/de',
    chargeDetails: 'ZARA-Abbuchungen erscheinen als "ZARA" oder "Inditex" auf dem Kontoauszug.',
    searchTerms: ['ZARA', 'Inditex', 'ZARA Deutschland', 'ZARA Home', 'ZARA Online']
  },
  {
    id: '35',
    companyName: 'ASOS',
    description: 'Online-Modehändler',
    category: 'Mode',
    logo: 'https://logo.clearbit.com/asos.com',
    website: 'asos.de',
    chargeDetails: 'ASOS-Abbuchungen erscheinen als "ASOS" oder "ASOS.com" auf dem Kontoauszug.',
    searchTerms: ['ASOS', 'ASOS.com', 'ASOS DE', 'ASOS GmbH', 'ASOS Marketplace']
  },
  {
    id: '36',
    companyName: 'About You',
    description: 'Online-Modehändler',
    category: 'Mode',
    logo: 'https://logo.clearbit.com/aboutyou.de',
    website: 'aboutyou.de',
    chargeDetails: 'About You-Abbuchungen erscheinen als "ABOUT YOU" oder "AboutYou GmbH" auf dem Kontoauszug.',
    searchTerms: ['ABOUT YOU', 'AboutYou', 'AboutYou GmbH', 'ABOUTYOU.DE']
  },
  
  // Fitnessstudios
  {
    id: '37',
    companyName: 'McFIT',
    description: 'Fitnessstudiokette',
    category: 'Fitness',
    logo: 'https://logo.clearbit.com/mcfit.com',
    website: 'mcfit.com',
    chargeDetails: 'McFIT-Abbuchungen erscheinen als "MCFIT" oder "RSG Group GmbH" auf dem Kontoauszug.',
    searchTerms: ['MCFIT', 'McFIT GmbH', 'RSG Group', 'McFIT Mitgliedschaft', 'McFIT Abo']
  },
  {
    id: '38',
    companyName: 'Fitness First',
    description: 'Fitnessstudiokette',
    category: 'Fitness',
    logo: 'https://logo.clearbit.com/fitnessfirst.de',
    website: 'fitnessfirst.de',
    chargeDetails: 'Fitness First-Abbuchungen erscheinen als "FITNESS FIRST" oder "Fitness First Germany" auf dem Kontoauszug.',
    searchTerms: ['FITNESS FIRST', 'Fitness First Germany', 'Fitness First Abo', 'Fitness First Mitgliedschaft']
  },
  {
    id: '39',
    companyName: 'Urban Sports Club',
    description: 'Fitness-Mitgliedschaft für verschiedene Sportangebote',
    category: 'Fitness',
    logo: 'https://logo.clearbit.com/urbansportsclub.com',
    website: 'urbansportsclub.com',
    chargeDetails: 'Urban Sports Club-Abbuchungen erscheinen als "URBAN SPORTS CLUB" oder "Urbansportsclub GmbH" auf dem Kontoauszug.',
    searchTerms: ['URBAN SPORTS CLUB', 'Urbansportsclub', 'USC', 'Urban Sports', 'UrbanSportsClub GmbH']
  },
  {
    id: '40',
    companyName: 'FitX',
    description: 'Fitnessstudiokette',
    category: 'Fitness',
    logo: 'https://logo.clearbit.com/fitx.de',
    website: 'fitx.de',
    chargeDetails: 'FitX-Abbuchungen erscheinen als "FITX" oder "FitX Deutschland GmbH" auf dem Kontoauszug.',
    searchTerms: ['FITX', 'FitX Deutschland', 'FitX Fitness', 'FitX Mitgliedschaft', 'FitX Abo']
  },
  
  // Kreditkartenunternehmen
  {
    id: '41',
    companyName: 'VISA',
    description: 'Kreditkartenanbieter',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/visa.com',
    website: 'visa.de',
    chargeDetails: 'VISA-Abbuchungen zeigen den Namen des Händlers zusammen mit einer VISA-Referenznummer.',
    searchTerms: ['VISA', 'Visa Debit', 'Visa Credit', 'Visa Kreditkarte', 'VISA*']
  },
  {
    id: '42',
    companyName: 'Mastercard',
    description: 'Kreditkartenanbieter',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/mastercard.com',
    website: 'mastercard.de',
    chargeDetails: 'Mastercard-Abbuchungen zeigen den Namen des Händlers zusammen mit einer Mastercard-Referenznummer.',
    searchTerms: ['Mastercard', 'MC', 'MasterCard Debit', 'MasterCard Credit', 'MC*']
  },
  {
    id: '43',
    companyName: 'American Express',
    description: 'Kreditkartenanbieter',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/americanexpress.com',
    website: 'americanexpress.com',
    chargeDetails: 'American Express-Abbuchungen erscheinen als "AMEX" oder "American Express" gefolgt von der Kartennummer.',
    searchTerms: ['AMEX', 'American Express', 'Amex', 'AMERICAN EXPRESS', 'AX*']
  },
  {
    id: '44',
    companyName: 'Barclaycard',
    description: 'Kreditkartenanbieter',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/barclaycard.de',
    website: 'barclays.de',
    chargeDetails: 'Barclaycard-Abbuchungen erscheinen als "BARCLAYCARD" oder "Barclays Bank Ireland" auf dem Kontoauszug.',
    searchTerms: ['BARCLAYCARD', 'Barclays', 'Barclays Bank', 'Barclaycard Germany', 'Barclays DE']
  },
  
  // Weitere Zahlungsdienstleister
  {
    id: '45',
    companyName: 'Stripe',
    description: 'Online-Zahlungsdienstleister',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/stripe.com',
    website: 'stripe.com',
    chargeDetails: 'Stripe-Abbuchungen zeigen oft den Namen des Händlers zusammen mit "*Stripe" oder "STRIPE" an.',
    searchTerms: ['STRIPE', '*Stripe', 'Stripe Payment', 'Stripe Zahlung', 'STRIPE.COM']
  },
  {
    id: '46',
    companyName: 'Adyen',
    description: 'Online-Zahlungsdienstleister',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/adyen.com',
    website: 'adyen.com',
    chargeDetails: 'Adyen-Abbuchungen erscheinen als "ADYEN" oder gefolgt vom Namen des Händlers auf dem Kontoauszug.',
    searchTerms: ['ADYEN', 'Adyen B.V.', 'Adyen Payment', 'Adyen Zahlung']
  },
  {
    id: '47',
    companyName: 'SumUp',
    description: 'Zahlungsdienstleister für Kleinunternehmen',
    category: 'Finanzen',
    logo: 'https://logo.clearbit.com/sumup.com',
    website: 'sumup.de',
    chargeDetails: 'SumUp-Abbuchungen erscheinen als "SUMUP" oder "SumUp Payments" auf dem Kontoauszug.',
    searchTerms: ['SUMUP', 'SumUp Payments', 'SumUp *', 'SUMUP EU', 'SUMUP Payment']
  },
  
  // Lebensmitteleinzelhandel
  {
    id: '48',
    companyName: 'REWE',
    description: 'Lebensmitteleinzelhandelskette',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/rewe.de',
    website: 'rewe.de',
    chargeDetails: 'REWE-Abbuchungen erscheinen als "REWE" oder "REWE Markt GmbH" auf dem Kontoauszug.',
    searchTerms: ['REWE', 'REWE Markt', 'REWE Lieferservice', 'REWE.DE', 'REWE Group']
  },
  {
    id: '49',
    companyName: 'EDEKA',
    description: 'Lebensmitteleinzelhandelskette',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/edeka.de',
    website: 'edeka.de',
    chargeDetails: 'EDEKA-Abbuchungen erscheinen als "EDEKA" oder "EDEKA Markt" auf dem Kontoauszug.',
    searchTerms: ['EDEKA', 'EDEKA Markt', 'EDEKA Lieferservice', 'EDEKA.DE', 'EDEKA Group']
  },
  {
    id: '50',
    companyName: 'Aldi',
    description: 'Discounter-Supermarktkette',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/aldi.de',
    website: 'aldi.de',
    chargeDetails: 'Aldi-Abbuchungen erscheinen als "ALDI" oder "ALDI SÜD/NORD" auf dem Kontoauszug.',
    searchTerms: ['ALDI', 'ALDI SÜD', 'ALDI NORD', 'ALDI.DE', 'Aldi Einkauf']
  },
  {
    id: '51',
    companyName: 'Lidl',
    description: 'Discounter-Supermarktkette',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/lidl.de',
    website: 'lidl.de',
    chargeDetails: 'Lidl-Abbuchungen erscheinen als "LIDL" oder "Lidl Stiftung" auf dem Kontoauszug.',
    searchTerms: ['LIDL', 'Lidl Stiftung', 'LIDL.DE', 'Lidl Online', 'Lidl Shop']
  },
  
  // Gaming & Unterhaltung
  {
    id: '52',
    companyName: 'Steam',
    description: 'Digitale Vertriebsplattform für Computerspiele',
    category: 'Gaming',
    logo: 'https://logo.clearbit.com/steampowered.com',
    website: 'store.steampowered.com',
    chargeDetails: 'Steam-Abbuchungen erscheinen als "STEAM" oder "Valve Corp." auf dem Kontoauszug.',
    searchTerms: ['STEAM', 'Valve Corp.', 'Steam Purchase', 'Steam Games', 'Steampowered']
  },
  {
    id: '53',
    companyName: 'Epic Games',
    description: 'Digitale Vertriebsplattform für Computerspiele',
    category: 'Gaming',
    logo: 'https://logo.clearbit.com/epicgames.com',
    website: 'epicgames.com',
    chargeDetails: 'Epic Games-Abbuchungen erscheinen als "EPIC GAMES" auf dem Kontoauszug.',
    searchTerms: ['EPIC GAMES', 'Epic Games Inc', 'Epic Games Store', 'Fortnite', 'EPICGAMES']
  },
  {
    id: '54',
    companyName: 'Sony PlayStation',
    description: 'Videospielplattform',
    category: 'Gaming',
    logo: 'https://logo.clearbit.com/playstation.com',
    website: 'playstation.com',
    chargeDetails: 'PlayStation-Abbuchungen erscheinen als "PLAYSTATION" oder "Sony Interactive Entertainment" auf dem Kontoauszug.',
    searchTerms: ['PLAYSTATION', 'Sony Interactive', 'PS Store', 'PlayStation Network', 'PSN']
  },
  {
    id: '55',
    companyName: 'Xbox',
    description: 'Videospielplattform',
    category: 'Gaming',
    logo: 'https://logo.clearbit.com/xbox.com',
    website: 'xbox.com',
    chargeDetails: 'Xbox-Abbuchungen erscheinen als "MICROSOFT XBOX" oder "MS XBOX" auf dem Kontoauszug.',
    searchTerms: ['MICROSOFT XBOX', 'MS XBOX', 'Xbox Live', 'Xbox Game Pass', 'Microsoft Gaming']
  },
  
  // Elektronik & Technik (weitere)
  {
    id: '56',
    companyName: 'Cyberport',
    description: 'Elektronik-Einzelhändler',
    category: 'Elektronik',
    logo: 'https://logo.clearbit.com/cyberport.de',
    website: 'cyberport.de',
    chargeDetails: 'Cyberport-Abbuchungen erscheinen als "CYBERPORT" oder "Cyberport GmbH" auf dem Kontoauszug.',
    searchTerms: ['CYBERPORT', 'Cyberport GmbH', 'Cyberport.de', 'CYPORT*']
  },
  {
    id: '57',
    companyName: 'Alternate',
    description: 'Elektronik-Einzelhändler',
    category: 'Elektronik',
    logo: 'https://logo.clearbit.com/alternate.de',
    website: 'alternate.de',
    chargeDetails: 'Alternate-Abbuchungen erscheinen als "ALTERNATE" oder "Alternate GmbH" auf dem Kontoauszug.',
    searchTerms: ['ALTERNATE', 'Alternate GmbH', 'Alternate.de', 'ALTERN*']
  },
  {
    id: '58',
    companyName: 'notebooksbilliger.de',
    description: 'Online-Händler für Computer und Elektronik',
    category: 'Elektronik',
    logo: 'https://logo.clearbit.com/notebooksbilliger.de',
    website: 'notebooksbilliger.de',
    chargeDetails: 'notebooksbilliger.de-Abbuchungen erscheinen als "NOTEBOOKSBILLIGER" oder "NBB" auf dem Kontoauszug.',
    searchTerms: ['NOTEBOOKSBILLIGER', 'NBB', 'notebooksbilliger.de', 'Notebooks Billiger']
  },
  
  // Versicherungen (weitere)
  {
    id: '59',
    companyName: 'AXA',
    description: 'Versicherungsunternehmen',
    category: 'Versicherung',
    logo: 'https://logo.clearbit.com/axa.de',
    website: 'axa.de',
    chargeDetails: 'AXA-Abbuchungen erscheinen als "AXA" oder "AXA Versicherung" auf dem Kontoauszug.',
    searchTerms: ['AXA', 'AXA Versicherung', 'AXA Krankenversicherung', 'AXA Kfz', 'AXA Deutschland']
  },
  {
    id: '60',
    companyName: 'ERGO',
    description: 'Versicherungsunternehmen',
    category: 'Versicherung',
    logo: 'https://logo.clearbit.com/ergo.de',
    website: 'ergo.de',
    chargeDetails: 'ERGO-Abbuchungen erscheinen als "ERGO" oder "ERGO Versicherung" auf dem Kontoauszug.',
    searchTerms: ['ERGO', 'ERGO Versicherung', 'ERGO Direkt', 'ERGO Group', 'ERGO Deutschland']
  },
  {
    id: '61',
    companyName: 'Debeka',
    description: 'Versicherungs- und Finanzdienstleistungsgruppe',
    category: 'Versicherung',
    logo: 'https://logo.clearbit.com/debeka.de',
    website: 'debeka.de',
    chargeDetails: 'Debeka-Abbuchungen erscheinen als "DEBEKA" oder "Debeka Versicherung" auf dem Kontoauszug.',
    searchTerms: ['DEBEKA', 'Debeka Versicherung', 'Debeka Krankenversicherung', 'Debeka Bausparkasse']
  },
  {
    id: '62',
    companyName: 'DPD',
    description: 'Paketdienst',
    category: 'Logistik',
    logo: 'https://logo.clearbit.com/dpd.de',
    website: 'dpd.de',
    chargeDetails: 'DPD-Abbuchungen erscheinen als "DPD" oder "DPD Deutschland" auf dem Kontoauszug.',
    searchTerms: ['DPD', 'DPD Deutschland', 'DPD Versand', 'DPD Paket', 'DPD Online']
  },
  {
    id: '63',
    companyName: 'DHL',
    description: 'Paket- und Briefdienst',
    category: 'Logistik',
    logo: 'https://logo.clearbit.com/dhl.de',
    website: 'dhl.de',
    chargeDetails: 'DHL-Abbuchungen erscheinen als "DHL" oder "Deutsche Post DHL" auf dem Kontoauszug.',
    searchTerms: ['DHL', 'Deutsche Post DHL', 'DHL Paket', 'DHL Express', 'DHL Versand', 'Deutsche Post']
  },
  {
    id: '64',
    companyName: 'Hermes',
    description: 'Paketdienst',
    category: 'Logistik',
    logo: 'https://logo.clearbit.com/myhermes.de',
    website: 'myhermes.de',
    chargeDetails: 'Hermes-Abbuchungen erscheinen als "HERMES" oder "Hermes Germany" auf dem Kontoauszug.',
    searchTerms: ['HERMES', 'Hermes Germany', 'Hermes Paket', 'Hermes Versand', 'MyHermes']
  },
  {
    id: '65',
    companyName: 'GLS',
    description: 'Paketdienst',
    category: 'Logistik',
    logo: 'https://logo.clearbit.com/gls-pakete.de',
    website: 'gls-pakete.de',
    chargeDetails: 'GLS-Abbuchungen erscheinen als "GLS" oder "GLS Germany" auf dem Kontoauszug.',
    searchTerms: ['GLS', 'GLS Germany', 'GLS Paket', 'GLS Versand', 'General Logistics Systems']
  },
  {
    id: '66',
    companyName: 'UPS',
    description: 'Paketdienst',
    category: 'Logistik',
    logo: 'https://logo.clearbit.com/ups.com',
    website: 'ups.com',
    chargeDetails: 'UPS-Abbuchungen erscheinen als "UPS" oder "United Parcel Service" auf dem Kontoauszug.',
    searchTerms: ['UPS', 'United Parcel Service', 'UPS Paket', 'UPS Versand', 'UPS Express']
  },
  {
    id: '67',
    companyName: 'HORNBACH',
    description: 'Baumarkt und Baustoffhandel',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/hornbach.de',
    website: 'hornbach.de',
    chargeDetails: 'HORNBACH-Abbuchungen erscheinen als "HORNBACH" oder "Hornbach Baumarkt" auf dem Kontoauszug.',
    searchTerms: ['HORNBACH', 'Hornbach Baumarkt', 'Hornbach Baustoffhandel', 'Hornbach Online']
  },
  {
    id: '68',
    companyName: 'OBI',
    description: 'Baumarkt',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/obi.de',
    website: 'obi.de',
    chargeDetails: 'OBI-Abbuchungen erscheinen als "OBI" oder "OBI Baumarkt" auf dem Kontoauszug.',
    searchTerms: ['OBI', 'OBI Baumarkt', 'OBI GmbH', 'OBI Online']
  },
  {
    id: '69',
    companyName: 'IKEA',
    description: 'Möbelhaus',
    category: 'Einzelhandel',
    logo: 'https://logo.clearbit.com/ikea.com',
    website: 'ikea.com/de',
    chargeDetails: 'IKEA-Abbuchungen erscheinen als "IKEA" oder "IKEA Deutschland" auf dem Kontoauszug.',
    searchTerms: ['IKEA', 'IKEA Deutschland', 'IKEA GmbH', 'IKEA Online', 'IKEA Möbelhaus']
  },
  {
    id: '70',
    companyName: 'Hellofresh',
    description: 'Kochbox-Lieferdienst',
    category: 'Lebensmittel',
    logo: 'https://logo.clearbit.com/hellofresh.de',
    website: 'hellofresh.de',
    chargeDetails: 'Hellofresh-Abbuchungen erscheinen als "HELLOFRESH" oder "HelloFresh SE" auf dem Kontoauszug.',
    searchTerms: ['HELLOFRESH', 'HelloFresh SE', 'HelloFresh Kochbox', 'HelloFresh Lieferung', 'HelloFresh Abo']
  }
];
