
import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { InteractiveBook } from './components/InteractiveBook';
import { SocialProof } from './components/SocialProof';

// Lazy load heavy components
const EbookViewer3D = React.lazy(() => import('./components/EbookViewer3D'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Sozinha, Mas Não Sem Caminhos",
          "description": "Guia completo para mães solo construírem renda, dignidade e estabilidade",
          "image": "https://picsum.photos/800/600",
          "brand": { "@type": "Brand", "name": "Sozinha Mas Não Sem Caminhos" },
          "offers": {
            "@type": "Offer",
            "price": "47.00",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": "https://seusite.com",
            "priceValidUntil": "2026-12-31"
          }
        })
      }} />

      <main>
        <Hero />
        
        <section className="py-20 bg-bege-quente overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <Suspense fallback={<div className="h-96 w-full bg-lilas-claro/20 animate-pulse rounded-2xl" />}>
                  <EbookViewer3D />
                </Suspense>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-playfair text-cinza-escuro mb-6">
                  Uma visão real do seu futuro
                </h2>
                <p className="text-lg text-cinza-escuro/80 mb-8 font-lato">
                  O eBook foi desenhado para ser prático, visual e direto ao ponto. 
                  Não é apenas leitura; é um plano de ação para quem não tem tempo a perder.
                </p>
                <div className="space-y-4">
                  <p className="text-montserrat font-semibold flex items-center gap-2">
                    <span className="text-verde-suave">↓</span> Navegue pela prévia interativa abaixo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProblemSolution />
        <InteractiveBook />
        <Benefits />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
