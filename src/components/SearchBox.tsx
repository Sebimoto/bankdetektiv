
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ResultCard from './ResultCard';

interface SearchResult {
  id: string;
  companyName: string;
  description: string;
  category: string;
  logo?: string;
  website?: string;
  chargeDetails?: string;
}

export function SearchBox() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasFocus, setHasFocus] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call to whatsthatcharge.com
    setTimeout(() => {
      // Mock result for demonstration
      if (query.toLowerCase().includes('amazon') || query.toLowerCase().includes('amzn')) {
        setResults([{
          id: '1',
          companyName: 'Amazon',
          description: 'Online-Einzelhandelsplattform',
          category: 'Einzelhandel',
          logo: 'https://logo.clearbit.com/amazon.com',
          website: 'amazon.de',
          chargeDetails: 'Abbuchungen von Amazon erscheinen oft als "AMZN" oder "Amazon.de" auf Ihrem Kontoauszug.'
        }]);
      } else if (query.toLowerCase().includes('netflix')) {
        setResults([{
          id: '2',
          companyName: 'Netflix',
          description: 'Streaming-Dienst für Filme und Serien',
          category: 'Unterhaltung',
          logo: 'https://logo.clearbit.com/netflix.com',
          website: 'netflix.com',
          chargeDetails: 'Netflix-Abbuchungen erscheinen typischerweise monatlich für Ihr Abonnement.'
        }]);
      } else if (query.toLowerCase().includes('paypal')) {
        setResults([{
          id: '3',
          companyName: 'PayPal',
          description: 'Online-Zahlungsdienstleister',
          category: 'Finanzen',
          logo: 'https://logo.clearbit.com/paypal.com',
          website: 'paypal.com',
          chargeDetails: 'PayPal-Abbuchungen zeigen oft den Namen des Händlers zusammen mit "PAYPAL" an.'
        }]);
      } else {
        setResults([]);
      }
      
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative mb-6">
        <div 
          className={cn(
            "flex items-center bg-white border rounded-xl overflow-hidden transition-all duration-300",
            hasFocus 
              ? "shadow-lg border-primary/50 ring-4 ring-primary/10" 
              : "shadow-md hover:shadow-lg"
          )}
        >
          <input
            type="text"
            placeholder="Geben Sie einen Firmennamen oder eine Abbuchungsbeschreibung ein..."
            className="flex-1 px-6 py-4 text-base md:text-lg outline-none bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-4 font-medium transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
            disabled={isSearching || !query.trim()}
          >
            {isSearching ? (
              <span className="loading-dots">
                <div></div>
                <div></div>
                <div></div>
              </span>
            ) : (
              "Suchen"
            )}
          </button>
        </div>
      </form>

      <div className="relative min-h-[100px]">
        {isSearching ? (
          <div className="text-center py-10 animate-pulse text-muted-foreground">
            Suche läuft...
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-4 animate-fade-in">
            {results.map((result) => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        ) : query && !isSearching ? (
          <div className="text-center py-10 text-muted-foreground">
            <p>Keine Ergebnisse gefunden für "{query}"</p>
            <p className="text-sm mt-2">Versuchen Sie einen anderen Suchbegriff oder prüfen Sie die genaue Schreibweise auf Ihrem Kontoauszug.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBox;
