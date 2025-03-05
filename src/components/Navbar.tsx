
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="/" 
          className="text-xl font-display font-medium tracking-tight"
        >
          <span className="text-primary">Abbu</span>Check
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Startseite</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Über uns</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Kontakt</a>
        </nav>
        
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
