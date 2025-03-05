
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container py-20 text-center">
          <div className="glass-card max-w-lg mx-auto p-10 rounded-3xl">
            <h1 className="text-6xl font-display font-bold mb-4 text-primary">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Entschuldigung, diese Seite wurde nicht gefunden
            </p>
            <a 
              href="/" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Zur Startseite
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
