
import { useState } from 'react';

interface SearchResult {
  id: string;
  companyName: string;
  description: string;
  category: string;
  logo?: string;
  website?: string;
  chargeDetails?: string;
}

interface ResultCardProps {
  result: SearchResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center mr-4">
            {result.logo ? (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <span className="text-xl font-medium text-muted-foreground">
                      {result.companyName.charAt(0)}
                    </span>
                  </div>
                )}
                <img
                  src={result.logo}
                  alt={`${result.companyName} Logo`}
                  className="h-full w-full object-cover transition-opacity duration-300"
                  style={{ opacity: imageLoaded ? 1 : 0 }}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </>
            ) : (
              <span className="text-xl font-medium text-muted-foreground">
                {result.companyName.charAt(0)}
              </span>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium">{result.companyName}</h3>
            <p className="text-sm text-muted-foreground">{result.description}</p>
          </div>
          
          <div>
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
              {result.category}
            </span>
          </div>
        </div>
        
        {expanded && (
          <div className="mt-6 pt-6 border-t border-border/40 animate-fade-in">
            {result.chargeDetails && (
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Abbuchungsdetails</h4>
                <p className="text-sm text-muted-foreground">{result.chargeDetails}</p>
              </div>
            )}
            
            {result.website && (
              <div>
                <h4 className="text-sm font-medium mb-2">Website</h4>
                <a 
                  href={`https://${result.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {result.website}
                </a>
              </div>
            )}
          </div>
        )}
        
        <button
          className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
