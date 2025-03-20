
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';
import { getFeaturedArticle, getRecentArticles } from '@/lib/articles';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredArticle = getFeaturedArticle();
  const recentArticles = getRecentArticles(3);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Seção Hero */}
        <section className="bg-secondary/30">
          <div className="page-container py-16 md:py-24 lg:py-32">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Plataforma de Blog Minimalista
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Express<span className="text-primary">Ink</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Uma plataforma de blog belamente elaborada, focada em clareza, simplicidade e na arte de contar histórias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/articles" 
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Explorar Artigos
                </Link>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-secondary border border-border text-foreground font-medium transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Sobre o ExpressInk
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de Artigo em Destaque */}
        <section className="py-16 md:py-20">
          <div className="page-container">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">Artigo em Destaque</h2>
              <Link 
                to="/articles" 
                className="text-sm font-medium text-primary hover:underline inline-flex items-center"
              >
                Ver todos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <FeaturedArticle article={featuredArticle} />
          </div>
        </section>
        
        {/* Seção de Artigos Recentes */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="page-container">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">Artigos Recentes</h2>
              <Link 
                to="/articles" 
                className="text-sm font-medium text-primary hover:underline inline-flex items-center"
              >
                Ver todos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recentArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  className="animate-fade-up" 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Seção de Newsletter */}
        <section className="py-16 md:py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Fique Atualizado
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Assine Nossa Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Receba os artigos, recursos e insights mais recentes diretamente na sua caixa de entrada.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Digite seu email" 
                  className="flex h-11 w-full rounded-lg border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 whitespace-nowrap"
                >
                  Assinar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
