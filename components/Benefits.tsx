
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      gsap.to('.benefit-card', {
        y: '-=10',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: '💚',
      title: 'Estratégias Reais',
      text: 'Nada de fórmulas mágicas ou promessas vazias. Só o que funciona de verdade na sua rotina exaustiva.',
      color: 'bg-verde-suave/5',
      accent: 'border-verde-suave/20'
    },
    {
      icon: '🧠',
      title: 'Acolhimento Terapêutico',
      text: 'Cuidado emocional em cada página. Entendemos que o emocional é o combustível do prático.',
      color: 'bg-lilas-claro/5',
      accent: 'border-lilas-claro/20'
    },
    {
      icon: '💪',
      title: 'Planos Práticos',
      text: 'Passo a passo claro, segmentado por níveis de dificuldade e tempo disponível real.',
      color: 'bg-terracota-suave/5',
      accent: 'border-terracota-suave/20'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-playfair text-cinza-escuro mb-6 leading-tight">
            Por que este eBook é <span className="text-terracota-suave italic">único</span>?
          </h2>
          <p className="text-lg font-lato text-cinza-escuro/50">Cada capítulo foi pensado para respeitar o cansaço e a inteligência da mãe solo moderna.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`benefit-card group p-12 rounded-[3rem] ${benefit.color} border-2 ${benefit.accent} transition-all duration-500 hover:shadow-2xl hover:bg-white`}
            >
              <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{benefit.icon}</div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 text-cinza-escuro group-hover:text-terracota-suave transition-colors">{benefit.title}</h3>
              <p className="text-cinza-escuro/70 font-lato leading-relaxed text-lg">{benefit.text}</p>
              
              <div className="mt-8 h-1 w-0 bg-terracota-suave group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
