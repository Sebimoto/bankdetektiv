
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ResultCard from './ResultCard';
import { germanCompanies } from '@/data/germanCompanies';
import { 
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from '@/components/ui/command';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simuliere API-Aufruf zu whatsthatcharge.com
    setTimeout(() => {
      // Suche in der umfangreichen Datenbank
      const searchQuery = query.toLowerCase();
      const matchedResults = germanCompanies.filter(company => 
        company.companyName.toLowerCase().includes(searchQuery) || 
        company.searchTerms.some(term => term.toLowerCase().includes(searchQuery))
      ).slice(0, 8); // Begrenze auf 8 Ergebnisse für bessere Übersicht
      
      setResults(matchedResults.length > 0 ? matchedResults : []);
      setIsSearching(false);
      setIsCommandOpen(false);
      
      if (matchedResults.length === 0) {
        toast({
          title: "Keine Ergebnisse gefunden",
          description: `Leider konnten wir keine Übereinstimmung für "${query}" finden.`,
          variant: "destructive"
        });
      } else if (matchedResults.length === 1) {
        toast({
          title: "Unternehmen gefunden!",
          description: `Wir haben ein Ergebnis für "${query}" gefunden.`,
          variant: "default"
        });
      } else {
        toast({
          title: "Mehrere Ergebnisse gefunden",
          description: `Wir haben ${matchedResults.length} Ergebnisse für "${query}" gefunden.`,
          variant: "default"
        });
      }
    }, 500); // Reduziert für bessere Benutzererfahrung
  };

  const handleCommandSelect = (company: SearchResult) => {
    setQuery(company.companyName);
    setIsCommandOpen(false);
    setResults([company]);
    
    toast({
      title: "Unternehmen ausgewählt",
      description: `${company.companyName} wurde ausgewählt.`,
      variant: "default"
    });
  };

  // Livesearch für Command-Komponente
  const [commandResults, setCommandResults] = useState<SearchResult[]>([]);
  
  useEffect(() => {
    if (query.trim().length > 1) {
      const searchQuery = query.toLowerCase();
      const matched = germanCompanies
        .filter(company => 
          company.companyName.toLowerCase().includes(searchQuery) || 
          company.searchTerms.some(term => term.toLowerCase().includes(searchQuery))
        )
        .slice(0, 8);
      setCommandResults(matched);
      setIsCommandOpen(matched.length > 0);
    } else {
      setCommandResults([]);
      setIsCommandOpen(false);
    }
  }, [query]);

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
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Gib einen Firmennamen oder eine Abbuchungsbeschreibung ein..."
              className="w-full px-6 py-4 text-base md:text-lg outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                setHasFocus(true);
                if (query.trim().length > 1) setIsCommandOpen(true);
              }}
              onBlur={() => {
                setHasFocus(false);
                // Verzögerung um Auswahl zu ermöglichen
                setTimeout(() => setIsCommandOpen(false), 200);
              }}
            />
            
            {isCommandOpen && commandResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[300px] overflow-y-auto">
                <Command className="rounded-lg border shadow-md">
                  <CommandList>
                    <CommandEmpty>Keine Ergebnisse gefunden</CommandEmpty>
                    <CommandGroup heading="Unternehmen">
                      {commandResults.map((company) => (
                        <CommandItem
                          key={company.id}
                          onSelect={() => handleCommandSelect(company)}
                          className="flex items-center gap-2 px-4 py-2 cursor-pointer"
                        >
                          {company.logo && (
                            <img 
                              src={company.logo} 
                              alt={company.companyName} 
                              className="w-5 h-5 object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          )}
                          <span className="font-medium">{company.companyName}</span>
                          <span className="text-xs text-muted-foreground ml-2">{company.category}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            className="bg-primary text-white px-6 py-4 font-medium transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 flex items-center gap-2"
            disabled={isSearching || !query.trim()}
          >
            <Search className="h-5 w-5" />
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
        <div className="text-xs text-muted-foreground mt-2 text-right">
          Durchsuche unsere Datenbank mit {germanCompanies.length} Unternehmen und deren Abbuchungsbezeichnungen.
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
            <p className="text-sm mt-2">Versuche einen anderen Suchbegriff oder prüfe die genaue Schreibweise auf deinem Kontoauszug.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchBox;
