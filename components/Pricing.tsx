
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(6492);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
    
    const pulse = gsap.to('.main-offer-pulse', {
      boxShadow: '0 0 40px rgba(201, 124, 93, 0.3)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    return () => { 
      clearInterval(timer); 
      pulse.kill(); 
    };
  }, []);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <section id="pricing" className="py-32 bg-[#2A2A2A] text-white relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(201,124,93,0.1),transparent_70%)]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-verde-suave/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-playfair mb-8">Escolha Seu Novo Caminho</h2>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-xl">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="font-montserrat font-bold text-xs tracking-[0.3em] uppercase text-white/80">OFERTA ESPECIAL ENCERRA EM: {formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-7xl mx-auto">
          {/* Preço Normal - Glassmorphism */}
          <div className="pricing-glass flex-1 p-12 rounded-[2.5rem] flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 border border-white/5 hover:border-white/10 group">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] mb-6 text-white/40 group-hover:text-white/60">Investimento Padrão</p>
            <div className="diagonal-strike text-5xl font-playfair mb-6 text-white/80">R$ 97,00</div>
            <p className="text-xs font-lato text-white/30 text-center leading-relaxed">Valor que será aplicado após o encerramento da fase de lançamento.</p>
          </div>

          {/* Card Principal - Premium Destaque */}
          <div className="main-offer-pulse flex-[1.2] bg-white p-14 rounded-[3rem] text-cinza-escuro relative shadow-2xl flex flex-col items-center border-t-8 border-terracota-suave">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-terracota-suave text-white px-10 py-2 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl">
              OPORTUNIDADE ÚNICA
            </div>
            
            <p className="text-cinza-escuro/40 font-montserrat text-[10px] uppercase tracking-[0.4em] mb-4">Adquira agora por apenas</p>
            <div className="flex items-start justify-center gap-2 mb-4">
              <span className="text-3xl font-playfair mt-4 font-bold text-cinza-escuro/40">R$</span>
              <span className="text-9xl font-playfair font-bold text-terracota-suave tracking-tighter">47</span>
              <span className="text-3xl font-playfair mt-16 font-bold text-cinza-escuro/40">,00</span>
            </div>
            <div className="bg-verde-suave/10 text-verde-suave px-6 py-2 rounded-full font-bold text-xs mb-12 uppercase tracking-widest border border-verde-suave/20">
              Economia Imediata de R$ 50,00
            </div>

            <button className="group relative w-full py-7 bg-terracota-suave text-white font-montserrat font-bold text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(201,124,93,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(201,124,93,0.6)] hover:-translate-y-1 transition-all duration-300 mb-10 overflow-hidden">
              <span className="relative z-10">GARANTIR MEU ACESSO AGORA</span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <ul className="text-left w-full space-y-6 mb-12 text-sm font-lato text-cinza-escuro/70 border-t border-cinza-escuro/5 pt-10">
              <li className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-verde-suave/20 text-verde-suave flex items-center justify-center text-[10px] font-bold">✓</span> Acesso Vitalício ao Conteúdo Digital</li>
              <li className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-verde-suave/20 text-verde-suave flex items-center justify-center text-[10px] font-bold">✓</span> Bônus Exclusivo: Guia de Networking</li>
              <li className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-verde-suave/20 text-verde-suave flex items-center justify-center text-[10px] font-bold">✓</span> Garantia Incondicional de 7 Dias</li>
            </ul>

            <div className="flex items-center justify-center gap-8 opacity-40 hover:opacity-60 transition-opacity grayscale hover:grayscale-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-5" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" className="h-6" alt="Pix" />
            </div>
          </div>

          {/* Preço Futuro - Glassmorphism */}
          <div className="pricing-glass flex-1 p-12 rounded-[2.5rem] flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 border border-white/5 hover:border-white/10 group">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] mb-6 text-white/40 group-hover:text-white/60">Valor Futuro</p>
            <div className="text-5xl font-playfair mb-6 text-white/20 group-hover:text-white/40 transition-colors">R$ 127,00</div>
            <p className="text-[10px] font-lato text-white/30 text-center leading-relaxed">Estimativa de preço após a inclusão de novas ferramentas na versão 2.0.</p>
          </div>
        </div>

        {/* Garantia e Segurança Refinadas */}
        <div className="mt-24 max-w-4xl mx-auto border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
              <svg className="w-10 h-10 text-verde-suave" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-playfair mb-3">Acesso Imediato e Segurança Total</h4>
              <p className="text-base text-white/50 font-lato leading-relaxed">
                Utilizamos os mais modernos protocolos de criptografia para garantir que sua compra seja <strong className="text-white/80">100% segura</strong>. Após o pagamento, você recebe o link de acesso em segundos no seu e-mail. Se em 7 dias você sentir que o guia não é para você, devolvemos seu dinheiro integralmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
