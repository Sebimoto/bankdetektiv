
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const wissenItems = [
    {
      title: "Abbuchungen verstehen",
      href: "/wissen/abbuchungen",
      description: "Lerne, wie du unbekannte Transaktionen identifizierst"
    },
    {
      title: "Bankgebühren Guide",
      href: "/wissen/bankgebuehren",
      description: "Alles über versteckte Kosten und Gebühren"
    },
    {
      title: "Sicherheit beim Banking",
      href: "/wissen/sicherheit",
      description: "Tipps zum sicheren Online-Banking"
    },
    {
      title: "Häufige Abbuchungen",
      href: "/wissen/haeufige-abbuchungen",
      description: "Die häufigsten Abbuchungen und ihre Bedeutung"
    }
  ];

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
        <Link 
          to="/" 
          className="text-xl font-display font-medium tracking-tight"
        >
          <span className="text-primary">Bank</span>Detektiv
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Startseite</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-primary transition-colors bg-transparent">
                  Wissen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/wissen"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Wissensbereich
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Alles was du über Bankabbuchungen wissen musst
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-3">
                      {wissenItems.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/ueber-uns" className="text-sm font-medium hover:text-primary transition-colors">Über uns</Link>
          <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
          <Link to="/kontakt" className="text-sm font-medium hover:text-primary transition-colors">Kontakt</Link>
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
