
import { useState } from 'react';
import { germanCompanies } from '@/data/germanCompanies';
import { useToast } from '@/hooks/use-toast';

export interface SearchResult {
  id: string;
  companyName: string;
  description: string;
  category: string;
  logo?: string;
  website?: string;
  chargeDetails?: string;
}

export function useSearchResults() {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const { toast } = useToast();

  const performSearch = (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call to whatsthatcharge.com
    setTimeout(() => {
      // Search in the comprehensive database
      const searchQuery = query.toLowerCase();
      const matchedResults = germanCompanies.filter(company => 
        company.companyName.toLowerCase().includes(searchQuery) || 
        company.searchTerms.some(term => term.toLowerCase().includes(searchQuery))
      ).slice(0, 8); // Limit to 8 results
      
      setResults(matchedResults.length > 0 ? matchedResults : []);
      setIsSearching(false);
      
      // Show appropriate toast notification
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
    }, 500);
  };

  return {
    isSearching,
    results,
    performSearch
  };
}
