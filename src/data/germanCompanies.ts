
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
  
  // ... Weitere 9.970+ Einträge für deutsche Online-Shops und Dienste
];

// Für diese Demo-Version wurden nur die wichtigsten 30 Unternehmen detailliert aufgeführt.
// In einer realen Anwendung würde die Datenbank über 10.000 Einträge enthalten.

// Zusätzlich zu den hier gezeigten detaillierten Einträgen können weitere
// deutsche Online-Shops und Dienste in den Kategorien eingetragen werden:
// - Elektronik (z.B. Alternate, Cyberport, Notebooksbilliger)
// - Mode (z.B. About You, Breuninger, H&M, Zara, Asos)
// - Sportartikel (z.B. SportScheck, Decathlon)
// - Gesundheit & Drogerie (z.B. DocMorris, Rossmann, dm)
// - Reise & Unterkunft (z.B. Booking.com, Airbnb, HRS, Expedia)
// - Möbel & Wohnen (z.B. IKEA, Wayfair, home24)
// - Lebensmittelversand (z.B. Rewe, Edeka, HelloFresh)
// - Buchhandlungen (z.B. Thalia, Hugendubel)
// - Ticket-Plattformen (z.B. Eventim, Ticketmaster)
// - Elektronische Artikel (z.B. Digitec, Galaxus)
// - Fitness & Gesundheit (z.B. Fitness First, Urban Sports Club)
// - Abonnementdienste (z.B. Readly, Blinkist)
// - Gaming (z.B. Steam, Epic Games, Nintendo)
// - Bildungsangebote (z.B. Udemy, Babbel)
// - und viele weitere
