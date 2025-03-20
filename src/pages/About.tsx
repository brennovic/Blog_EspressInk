
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Seção Hero */}
        <section className="bg-secondary/30">
          <div className="page-container py-16 md:py-24 lg:py-32">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Nossa História
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos apaixonados por criar uma plataforma que celebra 
                narrativas bem pensadas e conteúdo perspicaz.
              </p>
            </div>
          </div>
        </section>
        
        {/* Seção Missão */}
        <section className="py-16 md:py-20">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  Nossa Missão
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Conteúdo reflexivo merece design reflexivo
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  No ExpressInk, acreditamos que a apresentação do conteúdo é tão importante quanto o próprio conteúdo. 
                  Nossa plataforma é projetada com atenção meticulosa à tipografia, espaçamento e hierarquia visual 
                  para garantir que cada artigo seja um prazer de ler.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estamos comprometidos em criar um espaço onde as ideias possam ser compartilhadas de forma clara e bonita, 
                  livre das distrações e do ruído que assolam grande parte da internet. Nossa abordagem minimalista 
                  coloca o foco onde ele pertence: nas palavras e ideias.
                </p>
                
                <ul className="space-y-3">
                  {['Design elegante e minimalista', 'Foco na legibilidade', 'Experiência do usuário bem pensada', 'Acessível a todos'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden animate-fade-up">
                <img 
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200&q=80" 
                  alt="Nossa missão"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção Valores */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Nossos Valores
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                O que defendemos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossa plataforma é construída sobre uma base de princípios que orientam tudo o que fazemos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Simplicidade",
                  description: "Acreditamos em remover a complexidade desnecessária. Nosso design e conteúdo focam na clareza e facilidade de uso."
                },
                {
                  title: "Qualidade",
                  description: "Priorizamos profundidade e reflexão sobre quantidade. Cada artigo em nossa plataforma é cuidadosamente elaborado e curado."
                },
                {
                  title: "Acessibilidade",
                  description: "Ótimo conteúdo deve estar disponível para todos. Projetamos com acessibilidade em mente para garantir que todos os leitores possam desfrutar de nossos artigos."
                },
                {
                  title: "Inovação",
                  description: "Enquanto respeitamos princípios atemporais de design, evoluímos continuamente nossa plataforma para incorporar novas tecnologias e abordagens."
                },
                {
                  title: "Respeito",
                  description: "Respeitamos o tempo, atenção e privacidade de nossos leitores. Nosso design e políticas refletem esse valor fundamental."
                },
                {
                  title: "Comunidade",
                  description: "Acreditamos em fomentar conexões significativas entre escritores e leitores que compartilham interesses e valores."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Seção Equipe */}
        <section className="py-16 md:py-20">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Nossa Equipe
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                As pessoas por trás do ExpressInk
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Somos uma pequena equipe de designers, desenvolvedores e criadores de conteúdo apaixonados por comunicação bonita e reflexiva.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandre Moreira",
                  role: "Fundador & Editor",
                  bio: "Alexandre lidera nossa visão editorial e estratégia de conteúdo com mais de 10 anos de experiência em publicação digital.",
                  image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                },
                {
                  name: "Ema Santos",
                  role: "Designer-Chefe",
                  bio: "Ema elabora a experiência visual do ExpressInk, garantindo que cada detalhe contribua para uma experiência de leitura perfeita.",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                },
                {
                  name: "João Wilson",
                  role: "Diretor de Tecnologia",
                  bio: "João supervisiona a infraestrutura técnica do ExpressInk, garantindo que a plataforma seja rápida, confiável e preparada para o futuro.",
                  image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Seção CTA */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Junte-se a nós em nossa jornada
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Seja como leitor ou escritor, adoraríamos ter você como parte de nossa comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Comece a Ler
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-white border border-border text-foreground font-medium transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Contate-nos
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
