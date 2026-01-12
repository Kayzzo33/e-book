
import React from 'react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Maria",
      age: 34,
      location: "São Paulo",
      text: "Este eBook me deu o que eu precisava: direção sem julgamento.",
      img: "https://picsum.photos/seed/maria/100/100"
    },
    {
      name: "Carla",
      age: 28,
      location: "Rio de Janeiro",
      text: "Pela primeira vez senti que alguém realmente entende o que é ser mãe solo hoje.",
      img: "https://picsum.photos/seed/carla/100/100"
    },
    {
      name: "Juliana",
      age: 41,
      location: "Curitiba",
      text: "As estratégias de renda extra são pé no chão. Já comecei a aplicar!",
      img: "https://picsum.photos/seed/juliana/100/100"
    },
    {
      name: "Ana",
      age: 31,
      location: "Belo Horizonte",
      text: "O capítulo sobre organização emocional mudou minha forma de ver o dia.",
      img: "https://picsum.photos/seed/ana/100/100"
    }
  ];

  return (
    <section className="py-24 bg-bege-quente overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
         <h2 className="text-3xl md:text-4xl font-playfair text-center text-cinza-escuro">
          Vozes de quem já encontrou o caminho
        </h2>
      </div>

      <div className="flex gap-6 animate-scroll whitespace-nowrap px-4 py-8">
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div 
            key={idx}
            className="inline-block glass p-8 rounded-3xl w-[350px] whitespace-normal shrink-0 border-white/40 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full border-2 border-verde-suave p-1" />
              <div>
                <p className="font-montserrat font-bold text-cinza-escuro">{t.name}, {t.age} anos</p>
                <p className="text-xs text-cinza-escuro/40 font-montserrat uppercase tracking-wider">{t.location}</p>
              </div>
            </div>
            <p className="text-cinza-escuro/80 font-lato italic leading-relaxed">
              "{t.text}"
            </p>
            <div className="mt-4 flex text-verde-suave">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
