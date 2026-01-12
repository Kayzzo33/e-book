
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register outside with protection
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProblemSolution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-verde-suave/5 -skew-x-12 transform translate-x-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-cinza-escuro mb-6">
            "Você não está atrasada. <br />
            <span className="text-terracota-suave">Você está sobrecarregada."</span>
          </h2>
          <p className="text-xl font-lato text-cinza-escuro/70 italic">
            A jornada da mãe solo é hercúlea, mas você não precisa carregar o mundo sem mapa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* O Problema */}
          <div className="reveal-card glass p-8 md:p-12 rounded-[2.5rem] bg-lilas-claro/10 border-lilas-claro/30 flex flex-col justify-between">
            <div>
              <span className="text-4xl mb-6 block">🌪️</span>
              <h3 className="text-3xl font-playfair mb-6 text-cinza-escuro">A Realidade Pesada</h3>
              <ul className="space-y-4">
                {[
                  'Sobrecarga sem rede de apoio consistente',
                  'Culpa paralisante por não dar conta de tudo',
                  'Medo constante da instabilidade financeira',
                  'Exaustão que parece não ter fim'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-cinza-escuro/80 font-lato">
                    <span className="text-terracota-suave mt-1">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 text-sm font-montserrat font-semibold text-terracota-suave/60 uppercase">
              O ciclo termina aqui.
            </p>
          </div>

          {/* A Solução */}
          <div className="reveal-card glass p-8 md:p-12 rounded-[2.5rem] bg-verde-suave/10 border-verde-suave/30 flex flex-col justify-between">
            <div>
              <span className="text-4xl mb-6 block">✨</span>
              <h3 className="text-3xl font-playfair mb-6 text-cinza-escuro">O Seu Novo Caminho</h3>
              <ul className="space-y-4">
                {[
                  'Estratégias REAIS de geração de renda',
                  'Organização emocional e do seu tempo escasso',
                  'Planos práticos e possíveis de executar sozinha',
                  'Acolhimento profundo sem romantização'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-cinza-escuro/80 font-lato">
                    <span className="text-verde-suave mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 w-full py-4 bg-verde-suave text-white font-montserrat font-bold rounded-xl hover:bg-verde-suave/90 transition-all shadow-lg hover:shadow-verde-suave/20"
            >
              Sim, Eu Preciso Desse Guia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
