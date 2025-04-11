
import { forwardRef } from 'react';
import SuggestionItem from './SuggestionItem';

interface SuggestionsListProps {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean;
}

const SuggestionsList = forwardRef<HTMLDivElement, SuggestionsListProps>(
  ({ suggestions, onSelectSuggestion, visible }, ref) => {
    if (!visible || suggestions.length === 0) return null;

    return (
      <div 
        ref={ref}
        className="absolute left-0 right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[300px] overflow-y-auto"
      >
        <div className="py-1">
          <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">Vorschläge</div>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={`suggestion-${index}`}
              suggestion={suggestion}
              onSelect={onSelectSuggestion}
            />
          ))}
        </div>
      </div>
    );
  }
);

SuggestionsList.displayName = "SuggestionsList";

export default SuggestionsList;
