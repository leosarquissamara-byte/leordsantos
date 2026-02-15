
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChefHat, 
  Diamond, 
  ShieldCheck, 
  MessageCircle, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-luxury-dark/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-extrabold text-xl md:text-2xl tracking-tighter uppercase">
          Sarquis Samara <span className="text-luxury-gold font-light italic">Home</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-white/90 text-sm font-semibold uppercase tracking-widest">
          <a href="#beneficios" className="hover:text-luxury-gold transition">Benefícios</a>
          <a href="#artesanal" className="hover:text-luxury-gold transition">O Processo</a>
          <a href="#depoimentos" className="hover:text-luxury-gold transition">Clientes</a>
          <button className="bg-luxury-gold text-luxury-dark px-6 py-2 rounded-full font-bold hover:bg-white transition flex items-center gap-2">
            CATÁLOGO <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-luxury-dark border-t border-white/10 p-6 flex flex-col space-y-4 text-white uppercase font-bold tracking-widest">
          <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
          <a href="#artesanal" onClick={() => setIsMenuOpen(false)}>O Processo</a>
          <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Clientes</a>
          <button className="bg-luxury-gold text-luxury-dark px-6 py-4 rounded-lg">FALAR NO WHATSAPP</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-texture text-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-luxury-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 border border-luxury-gold/50 rounded-full text-luxury-gold text-xs font-bold tracking-[0.2em] uppercase">
            Curadoria & Sofisticação
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
            Eleve o Nível do Seu Buffet com a <span className="text-luxury-gold">Sofisticação Eterna</span> de Sarquis Samara.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            Travessas exclusivas Sarquis Samara Home, confeccionadas artesanalmente em alumínio fundido para unir durabilidade perene ao glamour que sua mesa exige.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-luxury-gold text-luxury-dark px-8 py-5 rounded-md font-extrabold text-lg uppercase tracking-tight hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-luxury-gold/20">
              Quero Garantir Minha Coleção <ArrowRight />
            </button>
            <button className="bg-white/5 border border-white/20 px-8 py-5 rounded-md font-bold text-lg uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="text-green-500" /> Atendimento VIP
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-luxury-dark" src={`https://picsum.photos/seed/${i+40}/100/100`} alt="Cliente" />
              ))}
            </div>
            <span>+2.400 Buffets de luxo confiam na Sarquis Samara Home</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-luxury-gold/10 border border-white/10 group">
            <img 
              src="https://picsum.photos/seed/platter/800/800" 
              alt="Travessa Sarquis Samara Home" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          {/* Floating Feature Tags */}
          <div className="absolute -bottom-6 -left-6 bg-luxury-gold text-luxury-dark p-6 rounded-lg shadow-2xl hidden lg:block">
            <p className="text-3xl font-black">100%</p>
            <p className="text-xs uppercase font-bold tracking-widest">Autenticidade</p>
          </div>
          <div className="absolute top-10 -right-10 bg-white/95 backdrop-blur text-luxury-dark p-5 rounded-lg shadow-2xl hidden lg:block">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />)}
            </div>
            <p className="text-sm font-bold italic">"Peças deslumbrantes."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    {
      icon: <ChefHat className="text-luxury-gold" size={40} />,
      title: "Padrão Buffet Luxo",
      desc: "Desenvolvidas para suportar o fluxo intenso de grandes eventos, mantendo a temperatura e o frescor dos alimentos por mais tempo."
    },
    {
      icon: <Diamond className="text-luxury-gold" size={40} />,
      title: "Design Exclusivo",
      desc: "Cada peça carrega a assinatura Sarquis Samara Home, garantindo uma estética única que reflete alto padrão e refinamento."
    },
    {
      icon: <ShieldCheck className="text-luxury-gold" size={40} />,
      title: "Alumínio Perene",
      desc: "Feitas em alumínio fundido maciço, não deformam e duram gerações. Um investimento seguro para o seu patrimônio."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-luxury-gold uppercase tracking-[0.3em]">O Diferencial Sarquis Samara Home</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight">
            Transformando o ato de servir em uma experiência memorável.
          </h3>
          <p className="text-gray-500 font-light text-lg">
            Nossas travessas não são apenas utensílios, são verdadeiras joias que elevam a apresentação gastronômica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="group p-10 bg-luxury-gray rounded-2xl border border-transparent hover:border-luxury-gold/20 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-luxury-dark">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtisanSection = () => {
  return (
    <section id="artesanal" className="py-24 light-texture relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/craft1/400/500" className="rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition duration-500" alt="Artesanato Sarquis Samara" />
            <img src="https://picsum.photos/seed/craft2/400/500" className="rounded-2xl shadow-lg mt-12 transform rotate-3 hover:rotate-0 transition duration-500" alt="Processo Home" />
          </div>
        </div>
        
        <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
          <h2 className="text-sm font-bold text-luxury-gold uppercase tracking-[0.3em]">Excelência Artesanal</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-luxury-dark">
            Mãos que Moldam Sonhos e Tradições.
          </h3>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Na Sarquis Samara Home, cada travessa é resultado de um processo de fundição manual em areia, técnica que confere uma alma própria a cada peça. As variações sutis no metal são a prova de um produto verdadeiramente único.
          </p>
          <ul className="space-y-4">
            {[
              "Alumínio com pureza certificada",
              "Resistência superior a impactos",
              "Acabamento luxuoso feito à mão",
              "Peças que agregam glamour imediato"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 font-bold text-luxury-dark uppercase text-xs tracking-wider">
                <CheckCircle className="text-luxury-gold" size={20} /> {text}
              </li>
            ))}
          </ul>
          <button className="bg-luxury-dark text-white px-10 py-5 rounded-md font-bold uppercase tracking-widest hover:bg-luxury-accent transition flex items-center gap-3">
            Explorar Linha de Produtos <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      name: "Roberta Albuquerque",
      role: "Buffet High Society",
      text: "As travessas da Sarquis Samara Home mudaram completamente o visual dos meus jantares. A retenção de calor é impressionante e o glamour é o que todos os convidados comentam.",
      img: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "André Martins",
      role: "Executive Chef",
      text: "Produto de alta performance. O alumínio fundido da Sarquis Samara é resistente e mantém a elegância mesmo após centenas de eventos. Qualidade inquestionável.",
      img: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "Juliana Mendes",
      role: "Decoradora de Interiores",
      text: "Utilizo as peças Sarquis Samara Home para criar ambientes sofisticados. Elas trazem uma presença que transforma qualquer mesa posta em um cenário de revista.",
      img: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-luxury-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-luxury-gold uppercase tracking-[0.3em]">Depoimentos de Elite</h2>
          <h3 className="text-4xl font-extrabold text-center">Referência para quem entende de luxo</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-between h-full">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
                </div>
                <p className="text-gray-400 italic font-light leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.img} className="w-12 h-12 rounded-full grayscale" alt={t.name} />
                <div>
                  <h5 className="font-bold text-luxury-gold">{t.name}</h5>
                  <p className="text-xs text-gray-500 uppercase font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
          {['FORBES', 'VOGUE CASA', 'AD', 'CASA COR'].map((brand, i) => (
            <div key={i} className="flex items-center justify-center font-black text-2xl tracking-tighter italic">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-luxury-gray rounded-3xl overflow-hidden shadow-3xl flex flex-col lg:flex-row items-stretch border border-gray-200">
          <div className="lg:w-1/2 bg-luxury-dark p-12 lg:p-20 text-white flex flex-col justify-center space-y-8">
            <h2 className="text-luxury-gold font-bold tracking-widest uppercase text-sm">Coleção de Lançamento</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">Invista na Tradição Sarquis Samara Home.</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Garanta hoje as suas peças exclusivas e receba acesso prioritário às nossas próximas coleções limitadas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest">
                <CheckCircle className="text-luxury-gold" /> Frete Segurado para todo o Brasil
              </div>
              <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest">
                <CheckCircle className="text-luxury-gold" /> Certificado de Autenticidade Sarquis Samara
              </div>
              <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest">
                <CheckCircle className="text-luxury-gold" /> Garantia de Satisfação Premium
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-10">
            <div>
              <p className="text-gray-400 line-through text-xl">De R$ 1.290,00</p>
              <div className="flex items-end gap-2">
                <span className="text-luxury-dark text-6xl font-black">R$ 897</span>
                <span className="text-luxury-gold text-2xl font-bold mb-2">,90</span>
                <span className="text-gray-500 text-sm mb-2 uppercase font-bold tracking-tighter ml-2">ou 12x de R$ 89,70</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-luxury-gold text-luxury-dark py-6 rounded-md font-black text-xl uppercase tracking-tighter hover:bg-luxury-dark hover:text-white transition-all duration-300 shadow-xl shadow-luxury-gold/20">
                ADQUIRIR MINHA COLEÇÃO AGORA
              </button>
              <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
                ⏳ Unidades limitadas devido ao processo artesanal
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 border-t pt-8">
              <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className="h-6 opacity-30" alt="Pix" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 opacity-30" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8 opacity-30" alt="Mastercard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    { q: "Qual o cuidado necessário com as peças?", a: "Recomendamos limpeza com detergente neutro e esponja macia. O alumínio Sarquis Samara Home é altamente resistente, mas evitar abrasivos preserva o brilho artesanal por muito mais tempo." },
    { q: "As travessas Sarquis Samara podem ir ao forno?", a: "Sim. Nossas peças são fabricadas em alumínio fundido maciço, o que permite seu uso em fornos convencionais para aquecimento e finalização de pratos." },
    { q: "A marca atende buffets em todo o Brasil?", a: "Sim, realizamos entregas em todo o território nacional com embalagens reforçadas para garantir a integridade das suas peças de luxo." },
    { q: "Existe canal para compras corporativas?", a: "Para pedidos em volume ou projetos especiais de buffets, oferecemos atendimento exclusivo via WhatsApp com consultoria de curadoria." }
  ];

  return (
    <section className="py-24 bg-luxury-gray">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-3xl font-extrabold text-center mb-16 text-luxury-dark">Perguntas Frequentes</h3>
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center font-bold text-luxury-dark hover:bg-gray-50 transition"
              >
                <span>{item.q}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-gray-600 font-light leading-relaxed border-t border-gray-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="font-extrabold text-2xl tracking-tighter uppercase">
              Sarquis Samara <span className="text-luxury-gold font-light italic">Home</span>
            </div>
            <p className="text-gray-500 max-w-sm font-light">
              Elevando o conceito de servir através da arte da fundição artesanal e design exclusivo para os mais refinados paladares.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-luxury-gold transition"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-luxury-gold transition"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-luxury-gold text-sm">Empresa</h5>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition">Nossa História</a></li>
              <li><a href="#" className="hover:text-white transition">Curadoria</a></li>
              <li><a href="#" className="hover:text-white transition">Atendimento VIP</a></li>
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-luxury-gold text-sm">Suporte</h5>
            <p className="text-gray-500 text-sm">Sarquis Samara Home<br/>Atendimento Digital Seg-Sex</p>
            <p className="text-white font-bold flex items-center gap-2">
              <MessageCircle size={18} className="text-green-500" /> (11) 99999-9999
            </p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-bold uppercase tracking-widest">
          <p>© 2024 Sarquis Samara Home. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Políticas</a>
            <a href="#" className="hover:text-white transition">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 1000);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md p-4 border-t border-gray-200 z-[60] transition-transform duration-500 shadow-2xl md:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <button className="w-full bg-luxury-gold text-luxury-dark py-4 rounded-md font-black text-lg uppercase tracking-tight flex items-center justify-center gap-3">
        ADQUIRIR AGORA <ArrowRight />
      </button>
    </div>
  );
}

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased selection:bg-luxury-gold selection:text-luxury-dark">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ArtisanSection />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      
      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[70] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold uppercase text-xs tracking-widest whitespace-nowrap">Consultoria VIP</span>
      </a>
    </div>
  );
}
