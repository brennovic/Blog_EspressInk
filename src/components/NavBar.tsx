
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent",
        isMobileMenuOpen ? "bg-white shadow-sm" : ""
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold tracking-tight">
              Express<span className="text-primary">Ink</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn("header-link", isActive('/') && "text-primary after:w-full")}
            >
              Início
            </Link>
            <Link 
              to="/articles" 
              className={cn("header-link", isActive('/articles') && "text-primary after:w-full")}
            >
              Artigos
            </Link>
            <Link 
              to="/about" 
              className={cn("header-link", isActive('/about') && "text-primary after:w-full")}
            >
              Sobre
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu móvel"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full overflow-hidden transition-all duration-300 ease-in-out bg-white border-t",
          isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            to="/" 
            className="flex items-center justify-between px-2 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <span className={cn("font-medium", isActive('/') && "text-primary")}>Início</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          <Link 
            to="/articles" 
            className="flex items-center justify-between px-2 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <span className={cn("font-medium", isActive('/articles') && "text-primary")}>Artigos</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
          <Link 
            to="/about" 
            className="flex items-center justify-between px-2 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            <span className={cn("font-medium", isActive('/about') && "text-primary")}>Sobre</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
