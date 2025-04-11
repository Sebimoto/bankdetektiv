
import { useState, useEffect, useRef, useMemo } from 'react';
import { cn } from '@/lib/utils';
import ResultCard from './ResultCard';
import { germanCompanies } from '@/data/germanCompanies';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Generate a list of autocomplete suggestions from previous searches or common terms
  const commonSearchTerms = [
    "Amazon", "PayPal", "Netflix", "Spotify", "Apple", "Google", 
    "Facebook", "Microsoft", "ADAC", "DHL", "Deutsche Bahn",
    "Vodafone", "Telekom", "O2", "IKEA", "Zalando", "Otto", "Rossmann"
  ];

  // Companies suggestions - based on company names for autocomplete
  const companyNames = useMemo(() => {
    return germanCompanies.map(company => company.companyName);
  }, []);
  
  // Use useMemo to create allSuggestions only once
  const allSuggestions = useMemo(() => {
    return [...new Set([...commonSearchTerms, ...companyNames])];
  }, [companyNames]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    setShowSuggestions(false);
    
    // Simulate API call to whatsthatcharge.com
    setTimeout(() => {
      // Search in the comprehensive database
      const searchQuery = query.toLowerCase();
      const matchedResults = germanCompanies.filter(company => 
        company.companyName.toLowerCase().includes(searchQuery) || 
        company.searchTerms.some(term => term.toLowerCase().includes(searchQuery))
      ).slice(0, 8); // Limit to 8 results for better overview
      
      setResults(matchedResults.length > 0 ? matchedResults : []);
      setIsSearching(false);
      
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
    }, 500); // Reduced for better user experience
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    
    // Focus the input after selecting a suggestion
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter suggestions based on input
  useEffect(() => {
    console.log("Filtering suggestions for query:", query);
    console.log("hasFocus:", hasFocus);
    
    if (!query.trim()) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const searchQuery = query.toLowerCase();
    console.log("Search query (lowercase):", searchQuery);
    console.log("All suggestions count:", allSuggestions.length);
    
    const matched = allSuggestions
      .filter(term => term.toLowerCase().includes(searchQuery));
    
    console.log("Matched suggestions:", matched);
    
    setFilteredSuggestions(matched.slice(0, 8));
    setShowSuggestions(matched.length > 0 && hasFocus);
  }, [query, hasFocus, allSuggestions]);

  // Debug log to check if Rossmann is in the suggestions
  useEffect(() => {
    console.log("Checking for Rossmann in suggestions:");
    console.log("Is 'Rossmann' in commonSearchTerms?", commonSearchTerms.includes("Rossmann"));
    console.log("Is 'Rossmann' in companyNames?", companyNames.includes("Rossmann"));
    const rossmannInAll = allSuggestions.some(s => s.includes("Rossmann"));
    console.log("Is 'Rossmann' in allSuggestions?", rossmannInAll);
  }, [allSuggestions, companyNames]);

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
            <Input
              ref={inputRef}
              type="text"
              placeholder="Gib einen Firmennamen oder eine Abbuchungsbeschreibung ein..."
              className="w-full px-6 py-4 h-auto text-base md:text-lg border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                setHasFocus(true);
                // If there's text and matches, show suggestions on focus
                if (query.trim() && filteredSuggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
              onBlur={() => {
                // Delay to allow for suggestion selection
                setTimeout(() => setHasFocus(false), 200);
              }}
              autoComplete="off" // Prevent browser's native autocomplete
            />
            
            {/* Autocomplete Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div 
                ref={suggestionsRef}
                className="absolute left-0 right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[300px] overflow-y-auto"
              >
                <div className="py-1">
                  <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">Vorschläge</div>
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={`suggestion-${index}`}
                      onClick={() => handleSuggestionSelect(suggestion)}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground flex items-center"
                    >
                      <Search className="w-4 h-4 text-muted-foreground mr-2" />
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
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
