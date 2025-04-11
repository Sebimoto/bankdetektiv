
import { Search } from 'lucide-react';

interface SuggestionItemProps {
  suggestion: string;
  onSelect: (suggestion: string) => void;
}

const SuggestionItem = ({ suggestion, onSelect }: SuggestionItemProps) => {
  return (
    <div
      onClick={() => onSelect(suggestion)}
      className="px-4 py-2 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground flex items-center"
    >
      <Search className="w-4 h-4 text-muted-foreground mr-2" />
      <span>{suggestion}</span>
    </div>
  );
};

export default SuggestionItem;
