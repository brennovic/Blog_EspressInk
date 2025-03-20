
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Article } from "@/lib/articles";
import { ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  article: Article;
  className?: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, className }) => {
  const { id, title, excerpt, coverImage, category, publishedAt, readTime, author } = article;
  
  // Formatação da data
  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className={cn(
      "group grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden rounded-2xl border bg-card animate-fade-up",
      className
    )}>
      <div className="relative overflow-hidden h-full min-h-[300px]">
        <img 
          src={coverImage} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full mb-4">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2">
            Destaque
          </h3>
        </div>
      </div>
      
      <div className="flex flex-col p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-secondary">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-muted-foreground">{formattedDate} · {readTime} min de leitura</p>
          </div>
        </div>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-balance">
          {title}
        </h2>
        
        <p className="text-muted-foreground mb-8">
          {excerpt}
        </p>
        
        <Link 
          to={`/article/${id}`}
          className="mt-auto inline-flex items-center font-medium text-primary group/button"
        >
          Continuar Lendo
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticle;
