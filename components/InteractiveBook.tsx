
import React, { useState, useRef } from 'react';
import gsap from 'gsap';

export const InteractiveBook: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  const bookRef = useRef<HTMLDivElement>(null);

  const pages = [
    {
      left: {
        tag: "CAPÍTULO 01",
        title: "O Primeiro Passo",
        text: "Este guia não é sobre sobrevivência básica, é sobre renascimento estratégico. Entenda como ferramentas práticas podem mudar sua perspectiva diária sem promessas vazias.",
        icon: "📖"
      },
      right: {
        tag: "O QUE ESPERAR",
        title: "Conteúdo Real",
        text: "Organizamos o material em etapas: Cura Emocional, Renda Extra Possível e Planejamento de Futuro. Tudo pensado para quem não tem tempo a perder.",
        icon: "✨"
      }
    },
    {
      left: {
        tag: "CAPÍTULO 02",
        title: "Dignidade Financeira",
        text: "Aprenda a criar fontes de renda que respeitam seu tempo com os filhos. Sem fórmulas mágicas, apenas trabalho estratégico e focado no que dá retorno.",
        icon: "🌱"
      },
      right: {
        tag: "PRODUTIVIDADE",
        title: "Gestão do Tempo Solo",
        text: "Hacks de organização para quem faz tudo sozinha. Como otimizar as 24h para que finalmente sobre tempo para o que realmente importa.",
        icon: "🧠"
      }
    }
  ];

  const flipPage = () => {
    const next = (activePage + 1) % pages.length;
    
    gsap.to(".flipping-sheet", {
      rotateY: -180,
      duration: 1,
      ease: "power2.inOut",
      onStart: () => {
        gsap.set(".flipping-sheet", { opacity: 1 });
      },
      onComplete: () => {
        setActivePage(next);
        gsap.set(".flipping-sheet", { rotateY: 0, opacity: 0 });
      }
    });
  };

  return (
    <section className="py-24 bg-cinza-escuro/5 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-playfair mb-6">Explore o Conteúdo</h2>
        <p className="font-montserrat text-cinza-escuro/50 max-w-2xl mx-auto leading-relaxed">
          Navegue pelas páginas e sinta a clareza que o conhecimento estratégico pode trazer para o seu dia a dia.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div ref={bookRef} className="relative w-full aspect-[16/10] md:aspect-[21/13] perspective-2000">
          
          {/* Sombra Profunda para o Livro */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl blur-2xl transform translate-y-8 scale-95 opacity-50"></div>
          
          <div className="relative w-full h-full flex shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden bg-white">
            {/* Página Esquerda */}
            <div className="w-1/2 h-full border-r border-cinza-escuro/5 p-8 md:p-14 flex flex-col justify-center bg-gradient-to-l from-white to-bege-quente/10">
              <span className="text-[10px] font-bold text-verde-suave tracking-[0.3em] mb-6 uppercase block">{pages[activePage].left.tag}</span>
              <div className="text-5xl mb-8 transform -rotate-6 origin-left">{pages[activePage].left.icon}</div>
              <h3 className="text-3xl md:text-4xl font-playfair text-cinza-escuro mb-6 leading-tight">{pages[activePage].left.title}</h3>
              <p className="text-base md:text-lg text-cinza-escuro/60 font-lato leading-relaxed">{pages[activePage].left.text}</p>
            </div>

            {/* Página Direita */}
            <div className="w-1/2 h-full p-8 md:p-14 flex flex-col justify-center text-right border-l border-cinza-escuro/5 bg-gradient-to-r from-white to-bege-quente/10">
              <span className="text-[10px] font-bold text-terracota-suave tracking-[0.3em] mb-6 uppercase block">{pages[activePage].right.tag}</span>
              <div className="text-5xl mb-8 transform rotate-6 origin-right inline-block ml-auto">{pages[activePage].right.icon}</div>
              <h3 className="text-3xl md:text-4xl font-playfair text-cinza-escuro mb-6 leading-tight">{pages[activePage].right.title}</h3>
              <p className="text-base md:text-lg text-cinza-escuro/60 font-lato leading-relaxed mb-12">{pages[activePage].right.text}</p>
              
              <div className="mt-auto">
                <button 
                  onClick={flipPage}
                  className="group inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-terracota-suave text-terracota-suave font-montserrat font-bold hover:bg-terracota-suave hover:text-white transition-all text-sm uppercase tracking-widest"
                >
                  Próxima Página <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Vinco Central */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-black/10 to-transparent z-10"></div>
            
            {/* Folha Animada */}
            <div className="flipping-sheet absolute left-1/2 top-0 w-1/2 h-full bg-white origin-left pointer-events-none opacity-0 border-l border-cinza-escuro/10 shadow-[-15px_0_30px_rgba(0,0,0,0.1)] z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
