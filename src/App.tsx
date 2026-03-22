/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { 
  Gem, 
  CheckCircle2, 
  Users, 
  Calendar, 
  ShieldCheck, 
  Instagram, 
  ArrowRight,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // Sticky CTA Logic
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setIsStickyVisible(window.scrollY > heroBottom);
        
        // Parallax Effect
        const scrollValue = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollValue * 0.3}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-rose-gold/30 selection:text-sapphire">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 px-4 crystal-bg"
      >
        <div className="absolute inset-0 bg-white/80 z-0"></div>
        
        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-medium mb-6 pulse-badge border border-rose-gold/20">
              <Gem size={14} />
              <span>⟡ Tratamento Coletivo à Distância · Turma com vagas limitadas</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sapphire leading-tight mb-6">
              Sua empresa cresce até onde sua <span className="italic">mente suporta.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-sapphire/70 max-w-xl mx-auto lg:mx-0 mb-10 font-sans leading-relaxed">
              O Protocolo do Merecimento foi criado para destravar o que impede você de receber — de verdade — a prosperidade que você já construiu.
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-4">
              <a 
                href="#oferta"
                id="cta-compra"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-rose-gold text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-gold/30 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Quero entrar no Protocolo — R$ 197,00
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <p className="text-sm text-sapphire/50">
                De <span className="line-through">R$ 1.820,00</span> por apenas R$ 197,00 · Acesso imediato
              </p>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-rose-gold/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-8 border border-rose-gold/10 rounded-full animate-reverse-spin-slow"></div>
              
              {/* NN Placeholder */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-rose-gold flex items-center justify-center">
                <span className="text-white font-serif text-8xl md:text-[12rem] lg:text-[15rem] select-none">NN</span>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl glass border border-rose-gold/20 max-w-[180px]">
                <div className="flex items-center gap-2 text-rose-gold mb-1">
                  <Users size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Comunidade</span>
                </div>
                <p className="text-[10px] text-sapphire/70 leading-tight">
                  1.590+ mulheres transformadas pelo método.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-4">
              Você reconhece algum desses sinais?
            </h2>
            <div className="w-24 h-1 bg-rose-gold/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sua empresa cresce, mas você nunca sente que é suficiente",
              "Você cobra menos do que deveria — e ainda se sente culpada por cobrar",
              "Parece que tem um teto invisível bloqueando sua prosperidade",
              "Você trabalha mais que todos ao redor, mas os resultados não refletem isso",
              "Você sente que não merece — mesmo sem saber explicar por quê"
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="reveal p-8 rounded-2xl border border-rose-gold/10 bg-snow hover:border-rose-gold/40 transition-all duration-500 hover:-translate-y-2 group"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold mb-6 group-hover:bg-rose-gold group-hover:text-white transition-colors duration-300">
                  <Gem size={20} />
                </div>
                <p className="text-lg text-sapphire/80 leading-relaxed font-sans">
                  "{item}"
                </p>
              </div>
            ))}
            
            <div className="reveal flex items-center justify-center p-8 rounded-2xl bg-sapphire text-white text-center italic">
              <p className="text-xl">
                "Isso não é falta de estratégia. É um bloqueio emocional que vive no seu código interno."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução Section */}
      <section className="py-24 px-4 bg-snow relative overflow-hidden">
        {/* Decorative Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-rose-gold/50 to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-rose-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">A Solução</span>
              <h2 className="text-5xl md:text-6xl font-serif text-sapphire mb-2">
                PROTOCOLO DO MERECIMENTO
              </h2>
              <p className="text-xl text-rose-gold italic font-serif mb-8">
                da prosperidade absoluta · com Natália Novaes
              </p>
              
              <div className="space-y-6 text-sapphire/80 text-lg leading-relaxed">
                <p>
                  Um tratamento coletivo à distância, com duração de 10 dias, focado em destravar o não merecimento e suas manifestações: autossabotagem, culpa, vergonha e resistência em receber.
                </p>
                <p>
                  Você recebe tratamento energético pessoal para prosperidade + atendimento especial de limpeza e equilíbrio emocional — tudo à distância, no seu tempo, onde você estiver.
                </p>
                <p className="font-medium text-sapphire">
                  Não é mais um curso. É uma experiência terapêutica que age onde os treinamentos de negócio não chegam.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 reveal" style={{ transitionDelay: '0.2s' }}>
              {[
                { icon: <Calendar />, title: "10 dias", desc: "de tratamento coletivo à distância" },
                { icon: <Sparkles />, title: "Limpeza", desc: "Atendimento especial de limpeza e equilíbrio energético" },
                { icon: <Zap />, title: "MR77 Ophira", desc: "Acesso ao protocolo de prosperidade exclusivo" },
                { icon: <ShieldCheck />, title: "Suporte", desc: "Acompanhamento durante todo o processo" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-rose-gold/20 bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-rose-gold mb-4">{item.icon}</div>
                  <h3 className="text-xl font-serif text-sapphire mb-2">{item.title}</h3>
                  <p className="text-sm text-sapphire/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-4">
              Este protocolo foi feito para você se...
            </h2>
          </div>
          
          <div className="space-y-4 reveal">
            {[
              "Você é empresária ou empreendedora e sente que já deveria ter chegado mais longe",
              "Você trabalha com dedicação mas carrega um peso emocional que não consegue nomear",
              "Você quer crescer financeiramente sem se perder no processo",
              "Você acredita que mente, energia e negócio estão conectados",
              "Você está pronta para receber — de verdade"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-snow border-l-[3px] border-rose-gold pl-4">
                <CheckCircle2 className="text-rose-gold shrink-0 mt-1" size={20} />
                <p className="text-lg text-sapphire/80">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal" style={{ transitionDelay: '0.3s' }}>
            <p className="text-sapphire/40 italic">
              "Talvez não seja o momento certo se você ainda não acredita que o emocional influencia seus resultados."
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Natália Section */}
      <section className="py-24 px-4 bg-snow">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center reveal">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-rose-gold/30 rounded-full"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-rose-gold flex items-center justify-center">
                  <span className="text-white font-serif text-6xl md:text-8xl select-none">NN</span>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <span className="text-rose-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sua Terapeuta</span>
              <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-6">Natália Novaes</h2>
              
              <div className="space-y-4 text-sapphire/80 leading-relaxed text-lg">
                <p>
                  Natália Novaes é terapeuta especializada em empresárias. Ela ajuda mulheres que constroem negócios reais a destravar emoções que impedem o crescimento — para crescer sem se perder no processo.
                </p>
                <p>
                  Com mais de 1.600 publicações e uma comunidade de empresárias que já transformaram sua relação com dinheiro, merecimento e prosperidade, Natália une profundidade terapêutica com linguagem prática para quem empreende.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-rose-gold/20 flex flex-wrap gap-8">
                <div>
                  <p className="text-3xl font-serif text-sapphire">1.590+</p>
                  <p className="text-xs text-rose-gold uppercase tracking-wider font-bold">Mulheres acompanhadas</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-sapphire">4+ anos</p>
                  <p className="text-xs text-rose-gold uppercase tracking-wider font-bold">De prática terapêutica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-sapphire mb-4">
              Resultados Reais
            </h2>
            <div className="w-24 h-1 bg-rose-gold/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Camila R.",
                role: "Empresária há 6 anos",
                text: "Depois do protocolo, finalmente consegui aumentar meus preços sem culpa. Parece simples, mas para mim foi uma virada.",
                initials: "CR"
              },
              {
                name: "Fernanda S.",
                role: "Loja Online",
                text: "Eu não sabia que carregava tanto bloqueio para receber. Em 10 dias senti uma leveza que não sentia há anos — e meu faturamento refletiu isso.",
                initials: "FS"
              },
              {
                name: "Ana Paula M.",
                role: "Gestora",
                text: "A Natália fala a língua de quem empreende. Não é papo de autoajuda vaga — é transformação real.",
                initials: "APM"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="reveal p-8 rounded-3xl bg-snow border border-rose-gold/10 hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-sapphire flex items-center justify-center text-white font-bold text-lg">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sapphire">{item.name}</h4>
                    <p className="text-xs text-rose-gold uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                <p className="text-sapphire/80 italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Section */}
      <section id="oferta" className="py-24 px-4 bg-sapphire text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">
              Você se sente merecedora da prosperidade que construiu?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Durante 10 dias, vamos trabalhar juntas seu nível de merecimento para receber a prosperidade absoluta — à distância, no seu ritmo.
            </p>
          </div>
          
          <div className="reveal bg-[#0F1E5C] p-8 md:p-12 rounded-[2rem] border-rose-gold/30 max-w-2xl mx-auto shadow-2xl">
            <div className="inline-block px-4 py-1 rounded-full bg-rose-gold text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              Oferta de Lançamento
            </div>
            
            <h3 className="text-3xl font-serif mb-8 text-white">PROTOCOLO DO MERECIMENTO</h3>
            
            <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto">
              <li className="flex items-center gap-3 text-white">
                <Sparkles size={18} className="text-rose-gold" />
                <span>Tratamento coletivo à distância · 10 dias</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Zap size={18} className="text-rose-gold" />
                <span>Limpeza e equilíbrio energético</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle2 size={18} className="text-rose-gold" />
                <span>Acesso imediato</span>
              </li>
            </ul>
            
            <div className="mb-10 flex flex-col items-center">
              <p className="text-[52px] font-serif text-white font-bold leading-tight">12x de R$ 19,90</p>
              <p className="text-base text-[#E8D5A3] mb-1">ou R$ 197,00 à vista</p>
              <p className="text-sm text-[#A0A0A0] line-through price-strike">De R$ 1.820,00</p>
            </div>
            
            <a 
              href="https://checkout.exemplo.com" 
              id="cta-compra-final"
              className="w-full group relative inline-flex items-center justify-center px-8 py-5 bg-[#C49A6C] text-sapphire font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,154,108,0.4)] hover:scale-[1.03]"
            >
              <span className="relative z-10">Quero meu Protocolo do Merecimento — 12x R$ 19,90</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-white/50 text-sm">
              <Lock size={14} />
              <span>Compra 100% segura · Acesso confirmado por e-mail</span>
            </div>
            
            <p className="mt-8 text-xs text-rose-gold font-bold uppercase tracking-widest animate-pulse">
              Vagas limitadas por turma. Quando fechar, fecha.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-snow border-t border-rose-gold/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-sapphire">Natália Novaes</h3>
            <p className="text-xs text-rose-gold uppercase tracking-widest font-bold">Terapia para Empresárias</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/natalianovaes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sapphire/70 hover:text-rose-gold transition-colors"
            >
              <Instagram size={20} />
              <span className="font-medium">@natalianovaes</span>
            </a>
          </div>
          
          <p className="text-xs text-sapphire/40">
            © 2025 Natália Novaes · Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA Bar */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:hidden bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
          >
            <div className="flex justify-center">
              <a 
                href="#oferta"
                className="w-[90%] bg-rose-gold text-white py-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform"
              >
                Quero o Protocolo — 12x R$ 19,90
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
