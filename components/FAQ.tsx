
import React, { useState } from 'react';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-cinza-escuro/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-terracota-suave transition-colors group"
      >
        <span className="text-xl font-montserrat font-semibold text-cinza-escuro group-hover:text-terracota-suave">{question}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-cinza-escuro/70 font-lato leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Para quem é este eBook?",
      answer: "Para toda mãe que se sente sobrecarregada por carregar a jornada solo. Seja você mãe de um ou de vários, recém-separada ou solo por escolha, as estratégias de renda e acolhimento são adaptáveis à sua realidade."
    },
    {
      question: "Como vou receber o material?",
      answer: "Imediatamente após a confirmação do pagamento. Você receberá um e-mail com o link de acesso exclusivo para download do eBook em formato PDF de alta qualidade."
    },
    {
      question: "E se não funcionar para mim?",
      answer: "Oferecemos uma garantia incondicional de 7 dias. Se você ler e sentir que o material não agrega valor à sua jornada, basta nos enviar um e-mail e devolveremos 100% do seu investimento."
    },
    {
      question: "Quanto tempo tenho acesso?",
      answer: "O acesso é vitalício. Uma vez baixado, o material é seu para sempre, para consultar sempre que precisar de uma nova direção ou um respiro emocional."
    },
    {
      question: "Preciso de muito dinheiro para começar as estratégias?",
      answer: "Não. O foco do eBook são estratégias de baixo ou custo zero de investimento inicial, aproveitando habilidades que você já possui como mãe e mulher."
    }
  ];

  return (
    <section className="py-24 bg-bege-quente">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-playfair text-center mb-16 text-cinza-escuro">Perguntas Frequentes</h2>
        <div className="glass p-8 md:p-12 rounded-[2.5rem] bg-white/40">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
