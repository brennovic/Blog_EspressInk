
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { SidebarProvider, Sidebar, SidebarContent, SidebarInset } from '@/components/ui/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, Home } from 'lucide-react';

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full">
        <Sidebar>
          <SidebarContent>
            {/* Sidebar content can go here if needed */}
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="container mx-auto px-4 py-12">
            <div className="mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center gap-1">
                        <Home className="h-4 w-4" />
                        <span>Página Inicial</span>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span>Artigos</span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Button variant="ghost" className="mt-4" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para a Página Inicial
                </Link>
              </Button>
            </div>

            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Todos os Artigos</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore nossa coleção completa de artigos sobre design, tecnologia, negócios e estilo de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  index={index}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="mx-auto">
                Carregar Mais Artigos
              </Button>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Articles;
