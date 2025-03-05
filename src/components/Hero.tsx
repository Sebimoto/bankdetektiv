
import { useEffect, useRef } from 'react';
import SearchBox from './SearchBox';

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const layers = parallaxRef.current.querySelectorAll('.parallax-layer');
      
      layers.forEach((layer, index) => {
        const speed = 0.2 * (index + 1);
        const yOffset = scrollPosition * speed;
        (layer as HTMLElement).style.transform = `translateY(${yOffset}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-24">
      <div 
        ref={parallaxRef}
        className="parallax absolute inset-0 z-0"
      >
        <div className="parallax-layer opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/30 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-blue-400/30 filter blur-3xl"></div>
        </div>
        <div className="parallax-layer opacity-5">
          <div className="absolute top-40 right-1/3 w-64 h-64 rounded-full bg-blue-600/40 filter blur-2xl"></div>
        </div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center h-full pt-16">
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4 animate-fade-up">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Identifizieren Sie unbekannte Bankabbuchungen
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance">
            Was ist diese <span className="text-primary">Abbuchung</span> auf meinem Kontoauszug?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            LadeFuchs hilft Ihnen, mysteriöse Transaktionen auf Ihrem Konto zu identifizieren und zu verstehen, wofür Sie bezahlt haben.
          </p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto">
          <SearchBox />
        </div>
        
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Mehr als 10.000 Abrechnungsbezeichnungen in unserer Datenbank</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}

export default Hero;
