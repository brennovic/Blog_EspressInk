
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Article } from "@/lib/articles";
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  className?: string;
  index?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, className, index = 0 }) => {
  const { id, title, excerpt, coverImage, category, publishedAt, readTime } = article;
  
  // Formatação da data
  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Link 
      to={`/article/${id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl bg-white border card-hover",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-primary-foreground rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            {readTime} min de leitura
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-balance group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
          <span className="text-xs text-muted-foreground">
            {formattedDate}
          </span>
          <div className="flex items-center text-sm font-medium text-primary opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Ler mais <ArrowUpRight className="ml-1 h-3 w-3" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
