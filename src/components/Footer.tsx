
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Github, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="page-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-semibold tracking-tight">
                Express<span className="text-primary">Ink</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Uma plataforma de blog moderna que apresenta histórias com design elegante e experiência do usuário bem pensada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Todos os Artigos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/articles?category=technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link to="/articles?category=design" className="text-muted-foreground hover:text-primary transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/articles?category=business" className="text-muted-foreground hover:text-primary transition-colors">
                  Negócios
                </Link>
              </li>
              <li>
                <Link to="/articles?category=lifestyle" className="text-muted-foreground hover:text-primary transition-colors">
                  Estilo de Vida
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} ExpressInk. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
