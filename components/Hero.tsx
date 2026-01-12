
import React, { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';

const EbookViewer3D = React.lazy(() => import('./EbookViewer3D'));

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-badge', { opacity: 0, y: -20, duration: 1 })
        .from('.hero-title', { opacity: 0, y: 50, duration: 1.2 }, "-=0.6")
        .from('.hero-desc', { opacity: 0, y: 30, duration: 1 }, "-=0.8")
        .from('.hero-cta', { opacity: 0, scale: 0.9, duration: 0.8 }, "-=0.6");

      gsap.to('.floating-shape', {
        y: 'random(-30, 30)',
        x: 'random(-15, 15)',
        rotation: 'random(-10, 10)',
        duration: 'random(4, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bege-quente"
    >
      {/* Background Decor Profissional */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-verde-suave/20 rounded-full blur-[100px] floating-shape" />
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-lilas-claro/20 rounded-full blur-[120px] floating-shape" />
        <div className="absolute top-[40%] right-[10%] w-40 h-40 bg-terracota-suave/10 rounded-full blur-[60px] floating-shape" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="hero-badge inline-flex items-center gap-2 glass px-6 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-terracota-suave animate-ping"></span>
              <span className="text-xs font-montserrat font-bold text-terracota-suave uppercase tracking-[0.2em]">
                O Guia que Você Estava Esperando
              </span>
            </div>
            
            <h1 className="hero-title text-5xl md:text-7xl xl:text-8xl font-playfair text-cinza-escuro mb-8 leading-[1.1]">
              Sozinha, Mas <br />
              <span className="italic text-terracota-suave relative inline-block">
                Não Sem Caminhos
                <svg className="absolute -bottom-3 left-0 w-full opacity-40" viewBox="0 0 400 20" fill="none">
                  <path d="M5 15Q100 5 200 15T395 15" stroke="#C97C5D" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="hero-desc text-xl md:text-2xl font-lato text-cinza-escuro/60 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Um guia real, humano e possível para mães solo que carregam o mundo e agora merecem construir sua própria estabilidade.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto px-12 py-6 bg-terracota-suave text-white font-montserrat font-bold text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(201,124,93,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(201,124,93,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Quero Transformar Minha Realidade
              </button>
              
              <div className="flex items-center gap-4 text-cinza-escuro/40 font-montserrat text-xs font-bold tracking-widest uppercase">
                <span className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-bege-quente bg-cinza-escuro/10 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Mãe" />
                    </div>
                  ))}
                </span>
                <span>+127 Mães apoiadas</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 w-full h-[450px] lg:h-[650px] relative perspective-2000">
            <div className="absolute inset-0 bg-white/30 rounded-[4rem] -rotate-3 blur-3xl opacity-50"></div>
            <Suspense fallback={<div className="w-full h-full bg-white/20 animate-pulse rounded-[3rem]"></div>}>
              <EbookViewer3D />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
