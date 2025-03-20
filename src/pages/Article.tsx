
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { getArticleById, getRelatedArticles } from '@/lib/articles';
import { ArrowLeft, Clock, Share2, Bookmark, CalendarDays, User } from 'lucide-react';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = id ? getArticleById(id) : undefined;
  const relatedArticles = id ? getRelatedArticles(id, 2) : [];

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // If article not found, redirect to 404
    if (!article && id) {
      navigate('/not-found');
    }
  }, [article, id, navigate]);

  if (!article) {
    return null; // Will redirect in useEffect
  }

  // Format date
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Cabeçalho do Artigo */}
        <header className="bg-secondary/30 py-12 md:py-16">
          <div className="page-container">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a página inicial
            </Link>
            
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4 animate-fade-in">
                {article.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-fade-up">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 animate-fade-up">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {article.author.name}
                </div>
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {article.readTime} min de leitura
                </div>
              </div>
              
              <div className="flex items-center justify-between pb-8 border-b animate-fade-up">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-secondary">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{article.author.name}</p>
                    <p className="text-xs text-muted-foreground">Autor</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                    aria-label="Salvar artigo"
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button 
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                    aria-label="Compartilhar artigo"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Imagem de Destaque do Artigo */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="w-full h-full object-cover animate-scale-in"
          />
        </div>
        
        {/* Conteúdo do Artigo */}
        <section className="py-12 md:py-16">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-lg max-w-none animate-fade-up"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </section>
        
        {/* Biografia do Autor */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="page-container">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 md:p-8 bg-white rounded-xl border animate-fade-up">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">{article.author.name}</h3>
                  <p className="text-muted-foreground mb-4">{article.author.bio}</p>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a 
                      href="#" 
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Ver Perfil
                    </a>
                    <a 
                      href="#" 
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Todos os Artigos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Artigos Relacionados */}
        {relatedArticles.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="page-container">
              <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
                Artigos Relacionados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedArticles.map((article, index) => (
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
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
