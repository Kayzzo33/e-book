
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-bege-quente border-t border-cinza-escuro/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-playfair font-bold text-cinza-escuro mb-4">Sozinha, Mas Não Sem Caminhos</h2>
            <p className="text-cinza-escuro/50 font-lato leading-relaxed">
              Dedicado a todas as mulheres que transformam dificuldades em força. Este é o seu espaço de crescimento, acolhimento e reconstrução.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="font-montserrat font-bold text-[10px] uppercase tracking-widest mb-6 text-cinza-escuro">Menu</h5>
              <ul className="space-y-4 text-xs text-cinza-escuro/60 font-lato">
                <li><a href="#" className="hover:text-terracota-suave transition-colors">Início</a></li>
                <li><a href="#pricing" className="hover:text-terracota-suave transition-colors">Oferta</a></li>
                <li><a href="#" className="hover:text-terracota-suave transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-montserrat font-bold text-[10px] uppercase tracking-widest mb-6 text-cinza-escuro">Políticas</h5>
              <ul className="space-y-4 text-xs text-cinza-escuro/60 font-lato">
                <li><a href="#" className="hover:text-terracota-suave transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-terracota-suave transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-cinza-escuro/10 gap-6">
          <p className="text-[10px] text-cinza-escuro/40 font-montserrat tracking-widest uppercase">
            © 2026 Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-[10px] font-montserrat font-bold text-cinza-escuro/40">
            <span>DESENVOLVIDO POR</span>
            <a 
              href="https://www.instagram.com/onzy.company/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cinza-escuro hover:text-terracota-suave transition-all tracking-[0.2em]"
            >
              ONZY COMPANY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
