
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-dark/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-extrabold text-lg md:text-xl lg:text-2xl tracking-tighter uppercase">
          Sarquis Samara <span className="text-luxury-gold font-light italic lowercase">Home</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8 text-white/90 text-[11px] font-bold uppercase tracking-[0.2em]">
          <a href="#beneficios" className="hover:text-luxury-gold transition-colors">Benefícios</a>
          <a href="#artesanal" className="hover:text-luxury-gold transition-colors">O Processo</a>
          <a href="#depoimentos" className="hover:text-luxury-gold transition-colors">Clientes</a>
          <button className="bg-luxury-gold text-luxury-dark px-6 py-2 rounded-sm font-extrabold hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2">
            CATÁLOGO <ArrowRight size={14} />
          </button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-luxury-dark border-t border-white/5 p-8 flex flex-col space-y-6 text-white uppercase font-bold tracking-widest text-sm animate-in slide-in-from-top duration-300">
          <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
          <a href="#artesanal" onClick={() => setIsMenuOpen(false)}>O Processo</a>
          <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Clientes</a>
          <button className="bg-luxury-gold text-luxury-dark px-6 py-4 rounded-sm font-black text-center">FALAR NO WHATSAPP</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-texture text-white overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-luxury-gold/10 to-transparent pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-luxury-gold/30 rounded-full text-luxury-gold text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></span>
            Curadoria & Sofisticação
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            A Arte de Servir com a <span className="text-luxury-gold block mt-2">Sofisticação Eterna.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed">
            Travessas exclusivas <strong>Sarquis Samara Home</strong>. Peças em alumínio fundido confeccionadas artesanalmente para quem busca o extraordinário em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-luxury-gold text-luxury-dark px-10 py-5 rounded-sm font-extrabold text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-luxury-gold/20 flex items-center justify-center gap-3">
              Quero Garantir Minha Coleção <ArrowRight size={18} />
            </button>
            <button className="bg-transparent border border-white/20 px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="text-green-500" size={18} /> Atendimento VIP
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold tracking-wide">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-luxury-dark object-cover" src={`https://picsum.photos/seed/${i+100}/100/100`} alt="User" />
              ))}
            </div>
            <span>+2.400 Buffets de luxo confiam na nossa marca</span>
          </div>
        </div>
        
        <div className="relative animate-in zoom-in duration-1000 delay-200">
          <div className="rounded-sm overflow-hidden shadow-3xl border border-white/5 group">
            <img 
              src="https://picsum.photos/seed/sarquis/1000/1200" 
              alt="Travessa Sarquis Samara Home" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-luxury-gold text-luxury-dark p-8 rounded-sm shadow-3xl hidden xl:block">
            <p className="text-5xl font-black leading-none">100%</p>
            <p className="text-[10px] uppercase font-extrabold tracking-[0.2em] mt-2">Artesanal & Vitalício</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    {
      icon: <ChefHat className="text-luxury-gold" size={42} />,
      title: "Padrão Alta Gastronomia",
      desc: "Performance profissional para suportar o fluxo intenso de eventos, mantendo a temperatura ideal dos alimentos por mais tempo."
    },
    {
      icon: <Diamond className="text-luxury-gold" size={42} />,
      title: "Exclusividade Sarquis",
      desc: "Design único que carrega nossa assinatura. O acabamento manual garante que nenhuma peça seja idêntica a outra."
    },
    {
      icon: <ShieldCheck className="text-luxury-gold" size={42} />,
      title: "Durabilidade Perene",
      desc: "O alumínio fundido maciço não deforma, não oxida e atravessa gerações. O investimento definitivo para seu acervo."
    }
  ];

  return (
    <section id="beneficios" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <h2 className="text-[11px] font-black text-luxury-gold uppercase tracking-[0.5em]">O Diferencial Home</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-luxury-dark leading-tight tracking-tight">
            Onde a robustez do metal encontra a delicadeza do design.
          </h3>
          <p className="text-gray-500 font-light text-xl leading-relaxed">
            Nossas travessas elevam a apresentação gastronômica ao nível de arte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {items.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center space-y-8">
              <div className="p-6 bg-luxury-gray rounded-full transform transition-transform group-hover:scale-110 duration-500">
                {item.icon}
              </div>
              <h4 className="text-2xl font-extrabold text-luxury-dark">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed font-light text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtisanSection = () => {
  return (
    <section id="artesanal" className="py-32 light-texture relative overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-6">
            <img src="https://picsum.photos/seed/art1/500/700" className="rounded-sm shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700" alt="Produção 1" />
            <img src="https://picsum.photos/seed/art2/500/700" className="rounded-sm shadow-2xl mt-16 transform rotate-2 hover:rotate-0 transition-transform duration-700" alt="Produção 2" />
          </div>
        </div>
        
        <div className="lg:w-1/2 order-1 lg:order-2 space-y-10">
          <h2 className="text-[11px] font-black text-luxury-gold uppercase tracking-[0.5em]">Processo Ancestral</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-luxury-dark leading-[1.1] tracking-tighter">
            Feito à Mão, Com a Alma do Mestre.
          </h3>
          <p className="text-gray-600 text-xl font-light leading-relaxed">
            Na <strong>Sarquis Samara Home</strong>, a fundição em areia é um ritual. Cada travessa nasce de um molde único, garantindo texturas orgânicas que as máquinas jamais conseguirão replicar.
          </p>
          <ul className="space-y-6">
            {[
              "Alumínio com liga de pureza premium",
              "Resistência térmica excepcional",
              "Acabamento luxuoso polido manualmente",
              "Peças com valorização patrimonial"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 font-bold text-luxury-dark uppercase text-[11px] tracking-[0.2em]">
                <CheckCircle className="text-luxury-gold" size={22} /> {text}
              </li>
            ))}
          </ul>
          <button className="bg-luxury-dark text-white px-12 py-6 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-luxury-dark transition-all flex items-center gap-4">
            CONHECER A COLEÇÃO <ArrowRight size={20} />
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
      role: "Buffet Gourmet Elite",
      text: "As travessas da Sarquis Samara Home mudaram o patamar visual dos meus eventos. A retenção de calor é impecável e o glamour é absoluto.",
      img: "https://picsum.photos/seed/face1/100/100"
    },
    {
      name: "Chef André Martins",
      role: "Restaurateur",
      text: "Equipamento de performance rara. O alumínio fundido é robusto e elegante ao mesmo tempo. Não há nada igual no mercado nacional.",
      img: "https://picsum.photos/seed/face2/100/100"
    },
    {
      name: "Juliana Mendes",
      role: "Designer de Interiores",
      text: "Peças que são verdadeiras esculturas. Utilizo na decoração de cozinhas de luxo para trazer uma presença rústica e sofisticada.",
      img: "https://picsum.photos/seed/face3/100/100"
    }
  ];

  return (
    <section id="depoimentos" className="py-32 bg-luxury-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-[11px] font-black text-luxury-gold uppercase tracking-[0.5em]">Experiências Reais</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Reconhecimento de quem domina o mercado</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 p-10 rounded-sm border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-all duration-500">
              <div className="mb-8">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />)}
                </div>
                <p className="text-gray-400 italic font-light text-lg leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-5">
                <img src={t.img} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" alt={t.name} />
                <div>
                  <h5 className="font-bold text-luxury-gold text-sm tracking-wide">{t.name}</h5>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          {['FORBES', 'VOGUE CASA', 'ARCHITECTURAL DIGEST', 'CASA COR'].map((brand, i) => (
            <div key={i} className="flex items-center justify-center font-black text-2xl tracking-tighter italic">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-luxury-gray rounded-sm overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100 shadow-2xl">
          <div className="lg:w-1/2 bg-luxury-dark p-12 lg:p-24 text-white flex flex-col justify-center space-y-10">
            <h2 className="text-luxury-gold font-black tracking-[0.4em] uppercase text-[11px]">Oportunidade de Acervo</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">Um Legado para sua Mesa Posta.</h3>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Adquira peças que não apenas servem, mas que valorizam seu patrimônio e encantam gerações.
            </p>
            <div className="space-y-6">
              {[
                "Logística Segurada Full",
                "Certificado de Autenticidade Sarquis",
                "Garantia de Satisfação Platinum"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em]">
                  <CheckCircle className="text-luxury-gold" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-12">
            <div>
              <p className="text-gray-400 line-through text-2xl font-light mb-2">R$ 1.290,00</p>
              <div className="flex items-end gap-3">
                <span className="text-luxury-dark text-7xl font-black tracking-tighter">R$ 897</span>
                <span className="text-luxury-gold text-3xl font-bold mb-3">,90</span>
              </div>
              <p className="text-gray-500 text-sm mt-4 font-bold uppercase tracking-widest">ou 12x de R$ 89,70 no cartão</p>
            </div>
            
            <div className="space-y-6">
              <button className="w-full bg-luxury-gold text-luxury-dark py-8 rounded-sm font-black text-xl uppercase tracking-widest hover:bg-luxury-dark hover:text-white transition-all duration-500 shadow-3xl shadow-luxury-gold/20 transform hover:-translate-y-1">
                ADQUIRIR MINHA COLEÇÃO
              </button>
              <p className="text-center text-red-600 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
                ⚠️ Apenas 8 kits restantes neste lote artesanal
              </p>
            </div>

            <div className="flex items-center justify-center gap-10 border-t border-gray-200 pt-10 opacity-40">
              <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo.png" className="h-6" alt="Pix" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
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
    { q: "As travessas perdem o brilho?", a: "Nossas peças são fundidas com uma liga especial de alta pureza. Com limpeza básica (detergente neutro), elas mantêm o brilho acetinado característico por décadas." },
    { q: "Posso utilizar em buffets quentes?", a: "Sim. O alumínio fundido é um dos melhores condutores térmicos. Elas conservam o calor por muito mais tempo que a cerâmica ou o vidro." },
    { q: "Qual o diferencial da Sarquis Samara?", a: "Diferente de peças industriais finas, nossas travessas são maciças e artesanais. O peso e a textura transmitem imediatamente uma percepção de luxo e autoridade." },
    { q: "Como funciona a garantia vitalícia?", a: "Garantimos que sua travessa nunca irá rachar ou deformar sob condições normais de uso. É um produto feito para ser eterno." }
  ];

  return (
    <section className="py-32 bg-luxury-gray">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-4xl font-extrabold text-center mb-20 text-luxury-dark tracking-tight">Perguntas Frequentes</h3>
        <div className="space-y-6">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-sm overflow-hidden border border-gray-200 shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 text-left flex justify-between items-center font-bold text-luxury-dark hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg tracking-tight">{item.q}</span>
                <span className={`transform transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <ArrowRight size={20} className="rotate-90" />
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-gray-600 font-light text-lg leading-relaxed border-t border-gray-50">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-2 space-y-10">
            <div className="font-extrabold text-3xl tracking-tighter uppercase">
              Sarquis Samara <span className="text-luxury-gold font-light italic lowercase">Home</span>
            </div>
            <p className="text-gray-500 max-w-sm font-light text-lg leading-relaxed">
              Redefinindo a excelência no servir através da fundição artesanal e design de alto padrão para buffets e residências de elite.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-luxury-gold hover:text-luxury-dark transition-all"><Instagram size={24} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-luxury-gold hover:text-luxury-dark transition-all"><Facebook size={24} /></a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h5 className="font-black uppercase tracking-[0.3em] text-luxury-gold text-[10px]">Institucional</h5>
            <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Curadoria</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catálogo Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-black uppercase tracking-[0.3em] text-luxury-gold text-[10px]">Atendimento</h5>
            <p className="text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-widest">Showroom Digital<br/>Disponível Seg-Sex</p>
            <a href="https://wa.me/5511999999999" className="text-white font-black text-xl flex items-center gap-3 hover:text-luxury-gold transition-colors">
              <MessageCircle size={24} className="text-green-500" /> (11) 99999-9999
            </a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
          <p>© 2024 Sarquis Samara Home. Todos os direitos reservados.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg p-5 border-t border-gray-200 z-[60] transition-all duration-700 shadow-3xl lg:hidden ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <button className="w-full bg-luxury-gold text-luxury-dark py-5 rounded-sm font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform">
        ADQUIRIR AGORA <ArrowRight size={20} />
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
        className="fixed bottom-8 right-8 z-[70] bg-[#25D366] text-white p-5 rounded-full shadow-3xl hover:scale-110 transition-all flex items-center gap-3 group overflow-hidden"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-700 font-black uppercase text-[10px] tracking-[0.2em] whitespace-nowrap">Consultoria VIP</span>
      </a>
    </div>
  );
}
