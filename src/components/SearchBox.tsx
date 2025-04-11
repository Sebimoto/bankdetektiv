
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ResultCard from './ResultCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import SuggestionsList from './SuggestionsList';
import { useSearchSuggestions } from '@/hooks/use-search-suggestions';
import { useSearchResults, SearchResult } from '@/hooks/use-search-results';
import { germanCompanies } from '@/data/germanCompanies';

export function SearchBox() {
  const [query, setQuery] = useState('');
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // Use our custom hooks
  const { 
    filteredSuggestions, 
    showSuggestions, 
    showSuggestionsDropdown, 
    hideSuggestionsDropdown 
  } = useSearchSuggestions(query, hasFocus);
  
  const { isSearching, results, performSearch } = useSearchResults();

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    hideSuggestionsDropdown();
    performSearch(query);
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion: string) => {
    setQuery(suggestion);
    hideSuggestionsDropdown();
    
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
        hideSuggestionsDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hideSuggestionsDropdown]);

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
                showSuggestionsDropdown();
              }}
              onBlur={() => {
                // Delay to allow for suggestion selection
                setTimeout(() => setHasFocus(false), 200);
              }}
              autoComplete="off"
            />
            
            {/* Suggestions Dropdown */}
            <SuggestionsList
              ref={suggestionsRef}
              suggestions={filteredSuggestions}
              onSelectSuggestion={handleSuggestionSelect}
              visible={showSuggestions}
            />
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
            {results.map((result: SearchResult) => (
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
