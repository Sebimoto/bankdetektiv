
import { useState, useEffect, useMemo } from 'react';
import { germanCompanies } from '@/data/germanCompanies';

export function useSearchSuggestions(query: string, hasFocus: boolean) {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Common search terms for autocomplete
  const commonSearchTerms = [
    "Amazon", "PayPal", "Netflix", "Spotify", "Apple", "Google", 
    "Facebook", "Microsoft", "ADAC", "DHL", "Deutsche Bahn",
    "Vodafone", "Telekom", "O2", "IKEA", "Zalando", "Otto", "Rossmann"
  ];

  // Extract company names for autocomplete
  const companyNames = useMemo(() => {
    return germanCompanies.map(company => company.companyName);
  }, []);
  
  // Combine all suggestions
  const allSuggestions = useMemo(() => {
    return [...new Set([...commonSearchTerms, ...companyNames])];
  }, [companyNames]);

  // Filter suggestions based on input
  useEffect(() => {
    // Don't show suggestions if query is empty
    if (!query.trim()) {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Convert to lowercase for case-insensitive matching
    const searchQuery = query.toLowerCase();
    
    // Find matching suggestions
    const matched = allSuggestions.filter(term => 
      term.toLowerCase().includes(searchQuery)
    );
    
    // Update filtered suggestions and visibility
    setFilteredSuggestions(matched.slice(0, 8));
    setShowSuggestions(matched.length > 0 && hasFocus);
  }, [query, hasFocus, allSuggestions]);

  // Function to show suggestions
  const showSuggestionsDropdown = () => {
    if (query.trim() && filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  // Function to hide suggestions
  const hideSuggestionsDropdown = () => {
    setShowSuggestions(false);
  };

  return {
    filteredSuggestions,
    showSuggestions,
    showSuggestionsDropdown,
    hideSuggestionsDropdown
  };
}
