
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  MessageCircle, 
  Menu,
  X,
  Instagram,
  MapPin,
  Globe,
  Quote,
  Truck,
  Building2,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react';

const IMAGES = {
  hero: "https://i.postimg.cc/RNYntL1r/0744ee7c-e63b-4787-9bee-c9b11b28a852-3.jpg",
  main_secondary: "https://i.postimg.cc/2VtBW7df/cdacb943-b744-4070-93c2-1a2f0737de11.jpg",
  buffet_cat_preview: "https://i.postimg.cc/9zLSP6wX/IMG-6133.jpg",
  decor_cat_preview: "https://i.postimg.cc/yWL5hMg2/IMG-6312.jpg",
  gallery: [
    "https://i.postimg.cc/XZnczvTv/IMG-3525.jpg",
    "https://i.postimg.cc/8jWRkWS3/IMG-4838.jpg",
    "https://i.postimg.cc/XGRLN620/3f3d677b-398b-4f80-9ea1-8309885cb3c9.jpg",
    "https://i.postimg.cc/r0Bjy2f3/6feda6cc-cab8-4fc4-be81-8af6ebeb5a8f.jpg"
  ]
};

const WHATSAPP_LINK = "https://wa.me/5543999641763?text=Olá! Desejo solicitar um orçamento exclusivo para o Catálogo 2026. Seguem os dados da minha empresa para análise.";
const CATALOGO_BUFFET = "https://bit.ly/3R67nG0";
const CATALOGO_DECORACAO = "https://bit.ly/41Nbtrs";

// Estilo auxiliar para nitidez máxima
const sharpImageClass = "w-full h-full object-cover object-center brightness-[1.05] contrast-[1.08] saturate-[1.1] transition-transform duration-[4s]";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-luxury-dark/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-white font-serif italic text-2xl md:text-3xl leading-none tracking-tight">Sarquis Samara</span>
          <span className="text-luxury-gold text-[9px] font-bold tracking-[0.5em] uppercase mt-1">B2B • Editorial de Luxo</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12 text-white/70 text-[10px] font-bold uppercase tracking-[0.25em]">
          <a href="#catalogos" className="hover:text-luxury-gold transition-all">Catálogos 2026</a>
          <a href="#comercial" className="hover:text-luxury-gold transition-all">Diretrizes</a>
          <a href="#historia" className="hover:text-luxury-gold transition-all">O Artista</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="border border-luxury-gold/50 text-luxury-gold px-8 py-3 hover:bg-luxury-gold hover:text-black transition-all flex items-center gap-3">
            CONSULTORIA EXCLUSIVA
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-luxury-dark z-50 flex flex-col p-12 space-y-8 text-white uppercase font-bold tracking-widest text-sm animate-in slide-in-from-right duration-500">
           <div className="flex justify-end mb-12">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
           </div>
          <a href="#catalogos" onClick={() => setIsMenuOpen(false)}>Catálogos 2026</a>
          <a href="#comercial" onClick={() => setIsMenuOpen(false)}>Política B2B</a>
          <a href="#historia" onClick={() => setIsMenuOpen(false)}>Legado</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-luxury-gold border-b border-luxury-gold pb-2 w-fit">WhatsApp Comercial</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-luxury-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Fix: Changed imageRendering to 'auto' because 'high-quality' is not a standard value in React's ImageRendering type */}
          <img 
            src={IMAGES.hero} 
            className={`${sharpImageClass} animate-slow-zoom opacity-100`} 
            style={{ imageRendering: 'auto' }}
            alt="L'arte di Servire - Detalhe Alta Definição" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark lg:via-luxury-dark/10 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2">
        <div className="max-w-2xl space-y-12 py-20 lg:py-0">
          <div className="space-y-4">
            <p className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Curadoria Internacional • Manufatura Brasileira</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white">
              A Nova Era <br/>
              <span className="italic text-luxury-gold">do Servir 2026.</span>
            </h1>
          </div>
          
          <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-lg drop-shadow-sm">
            Peças assinadas que transcendem o utilitário. Uma fusão magistral entre a herança plástica e a durabilidade do alumínio premium.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 pt-6">
            <a href="#catalogos" className="bg-luxury-gold text-black px-12 py-6 font-bold text-xs uppercase tracking-[0.25em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-luxury-gold/20 flex items-center justify-center gap-4 text-center">
              Explorar Catálogo 2026 <ChevronRight size={16} />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-white/60 text-[9px] uppercase font-bold tracking-widest mb-1">Status Atendimento</span>
              <span className="text-luxury-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></span>
                Suporte B2B Online
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 hidden lg:block">
        <div className="flex flex-col text-[10px] text-white/40 font-bold uppercase tracking-[0.6em] space-y-2">
           <span>Design Autoral</span>
           <span>Nitidez Premium</span>
           <span>Exclusivo para Profissionais</span>
        </div>
      </div>
    </section>
  );
};

const CatalogSection = () => {
  return (
    <section id="catalogos" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-luxury-gold font-bold uppercase tracking-luxury text-[10px]">Preview Coleções</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-none">Catálogos 2026</h2>
          </div>
          <p className="text-luxury-muted max-w-md font-light">Fotos em alta resolução para uma análise fiel dos detalhes e acabamentos artesanais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div className="group space-y-10">
            <div className="aspect-[4/5] overflow-hidden bg-luxury-accent relative shadow-2xl">
               <img src={IMAGES.buffet_cat_preview} className={sharpImageClass + " group-hover:scale-105"} alt="Buffet Art 2026 - Alta Definição" />
               <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-white text-black text-[9px] font-bold px-4 py-2 uppercase tracking-widest shadow-lg">Atelier Sarquis Samara</span>
               </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-serif">Buffet & Chef 2026</h3>
                <span className="text-luxury-gold font-bold text-[10px] tracking-widest">SOB ENCOMENDA</span>
              </div>
              <p className="text-luxury-muted font-light leading-relaxed">
                A excelência do alumínio premium. Resistência absoluta ao calor e design que assina o serviço. Fotos reais do produto em sua máxima fidelidade.
              </p>
              <a href={CATALOGO_BUFFET} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-black font-bold text-[11px] uppercase tracking-[0.3em] group-hover:text-luxury-gold transition-colors border-b-2 border-luxury-gold/20 pb-1">
                Acessar Buffet 2026 <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="group space-y-10 md:mt-24">
            <div className="aspect-[4/5] overflow-hidden bg-luxury-accent relative shadow-2xl">
               <img src={IMAGES.decor_cat_preview} className={sharpImageClass + " group-hover:scale-105"} alt="Decor Art 2026 - Alta Definição" />
               <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-luxury-gold text-black text-[9px] font-bold px-4 py-2 uppercase tracking-widest shadow-lg">Pronta-Entrega</span>
               </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-serif">Home Décor 2026</h3>
                <span className="text-luxury-gold font-bold text-[10px] tracking-widest">CURADORIA GLOBAL</span>
              </div>
              <p className="text-luxury-muted font-light leading-relaxed">
                Seleção de peças importadas com enquadramento focado em detalhes. O brilho e a textura que você vê na tela são os mesmos que estarão na sua loja.
              </p>
              <a href={CATALOGO_DECORACAO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-black font-bold text-[11px] uppercase tracking-[0.3em] group-hover:text-luxury-gold transition-colors border-b-2 border-luxury-gold/20 pb-1">
                Acessar Décor 2026 <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Alessandra V.", loc: "Rio de Janeiro, RJ", role: "Eventos Boutique", text: "O brilho das peças Sarquis Samara é o diferencial que nossos clientes premium exigem. É um investimento vitalício em estética." },
    { name: "Henrique M.", loc: "Belo Horizonte, MG", role: "Distribuidor Décor", text: "A curadoria é sempre à frente do mercado. O que vemos nas fotos é exatamente o que recebemos: perfeição." },
    { name: "Carla S.", loc: "Balneário Camboriú, SC", role: "Lojista de Luxo", text: "Peças que são o ponto focal de qualquer vitrine. O suporte comercial é eficiente e extremamente profissional." }
  ];

  return (
    <section className="py-32 bg-luxury-dark text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-luxury-gold font-bold uppercase tracking-[0.5em] text-[10px]">Reconhecimento B2B</span>
          <h2 className="text-5xl font-serif italic text-white">A Confiança de Grandes Parceiros</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 space-y-8 hover:border-luxury-gold/50 transition-all duration-500 group">
              <Quote className="text-luxury-gold/30 group-hover:text-luxury-gold/60 transition-colors" size={40} />
              <p className="text-gray-300 font-light italic leading-relaxed text-lg">"{r.text}"</p>
              <div className="pt-8 border-t border-white/10">
                <p className="font-serif text-xl text-white">{r.name}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] font-bold text-luxury-gold uppercase tracking-widest">{r.role}</span>
                  <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest">{r.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommercialPolicy = () => {
  return (
    <section id="comercial" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto border-y-2 border-luxury-gold/20 p-12 lg:p-24 grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-luxury-gold font-bold uppercase tracking-luxury text-[10px]">Acordos Comerciais</span>
              <h2 className="text-5xl font-serif leading-none">Diretrizes de Parceria</h2>
              <p className="text-luxury-muted font-light leading-relaxed">Estrutura comercial desenhada para parcerias de longo prazo com Buffets e Lojistas em todo o Brasil.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <Building2 className="text-luxury-gold mb-2" size={24} />
                <h4 className="font-bold uppercase tracking-widest text-xs">Exclusivo B2B</h4>
                <p className="text-[11px] text-luxury-muted font-light leading-relaxed">Faturamento exclusivo para empresas (CNPJ) com IE ativa.</p>
              </div>
              <div className="space-y-2">
                <Award className="text-luxury-gold mb-2" size={24} />
                <h4 className="font-bold uppercase tracking-widest text-xs">Aporte Mínimo</h4>
                <p className="text-[11px] text-luxury-muted font-light leading-relaxed">R$ 1.500,00 para manutenção da tabela de atacado.</p>
              </div>
              <div className="space-y-2">
                <Truck className="text-luxury-gold mb-2" size={24} />
                <h4 className="font-bold uppercase tracking-widest text-xs">Despacho FOB</h4>
                <p className="text-[11px] text-luxury-muted font-light leading-relaxed">Frete FOB (Londrina-PR). Escolha sua transportadora.</p>
              </div>
              <div className="space-y-2">
                <Clock className="text-luxury-gold mb-2" size={24} />
                <h4 className="font-bold uppercase tracking-widest text-xs">Cronograma 2026</h4>
                <p className="text-[11px] text-luxury-muted font-light leading-relaxed">Buffet: 90 a 120 dias. Décor: Pronta-entrega.</p>
              </div>
            </div>
          </div>

          <div className="bg-luxury-dark text-white p-12 flex flex-col justify-center space-y-10 relative overflow-hidden group shadow-2xl">
            <div className="space-y-4 relative z-10">
               <h4 className="text-3xl font-serif italic text-luxury-gold">Solicitar Orçamento 2026</h4>
               <p className="text-gray-300 font-light text-sm leading-relaxed">
                 O próximo passo para elevar o padrão do seu acervo começa com uma conversa técnica.
               </p>
            </div>
            <div className="space-y-4 relative z-10">
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/70">
                  <CheckCircle size={16} className="text-luxury-gold" /> Dados Jurídicos Completos
               </div>
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/70">
                  <CheckCircle size={16} className="text-luxury-gold" /> Identificação IE (PJ)
               </div>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-luxury-gold text-black py-6 font-bold text-xs uppercase tracking-[0.3em] hover:bg-white transition-all text-center">
              Solicitar Tabela Comercial
            </a>
            <p className="text-center text-[9px] text-gray-500 font-bold uppercase tracking-[0.4em] relative z-10 italic">Aprovação cadastral obrigatória</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HistorySection = () => {
  return (
    <section id="historia" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <span className="text-luxury-gold font-bold uppercase tracking-luxury text-[10px]">Gênese Criativa</span>
              <h2 className="text-5xl md:text-7xl font-serif italic leading-none">A Essência <br/>Sarquis Samara.</h2>
              <p className="text-luxury-muted text-xl font-light leading-relaxed">
                Mais de três décadas transformando o alumínio bruto em objetos de desejo. Fotos reais que mostram cada detalhe do fabrico artesanal brasileiro.
              </p>
            </div>
            <div className="border-l-4 border-luxury-gold pl-12 py-4 italic text-luxury-accent font-serif text-2xl">
              "Honramos o alimento através da forma."
            </div>
          </div>
          <div className="lg:col-span-7 relative">
             <div className="grid grid-cols-2 gap-6">
                <img src={IMAGES.main_secondary} className={sharpImageClass + " shadow-2xl rounded-sm"} alt="Enquadramento Editorial Legado" />
                <div className="grid grid-rows-2 gap-6">
                  <img src={IMAGES.gallery[0]} className={sharpImageClass + " shadow-2xl rounded-sm"} alt="Nitidez Buffet" />
                  <img src={IMAGES.gallery[1]} className={sharpImageClass + " shadow-2xl rounded-sm"} alt="Nitidez Art" />
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-luxury-dark p-12 text-white hidden md:block shadow-3xl">
                <Globe className="text-luxury-gold mb-6" size={40} />
                <p className="font-serif italic text-2xl text-white">Exportação</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold mt-2 text-white">Londres • Milão • Tóquio</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white pt-32 pb-12 overflow-hidden border-t border-luxury-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-24 mb-32 border-b border-white/5 pb-24">
          <div className="col-span-1 lg:col-span-2 space-y-12">
            <div className="flex flex-col">
              <span className="font-serif italic text-4xl text-white">Sarquis Samara</span>
              <span className="text-luxury-gold text-[10px] font-bold tracking-[0.5em] uppercase mt-2">Artesania de Alta Definição</span>
            </div>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Consolidando o luxo brasileiro através de objetos de arte para o setor de hospitalidade e decoração.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/sarquissamarahome/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-luxury-gold transition-colors transform hover:scale-110"><Instagram size={28} /></a>
            </div>
          </div>
          
          <div className="space-y-10">
            <h5 className="font-bold uppercase tracking-[0.5em] text-luxury-gold text-[10px]">Sede & Fábrica</h5>
            <div className="flex gap-4 group">
                <MapPin className="text-luxury-gold flex-shrink-0" size={24} />
                <address className="not-italic text-gray-400 font-bold uppercase text-[11px] leading-relaxed tracking-widest group-hover:text-white transition-colors">
                    Rua João-de-Barro, 215<br/>
                    Pq das Indústrias Leves<br/>
                    Londrina - PR
                </address>
            </div>
          </div>

          <div className="space-y-10">
            <h5 className="font-bold uppercase tracking-[0.5em] text-luxury-gold text-[10px]">WhatsApp Atacado</h5>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white font-serif italic text-2xl hover:text-luxury-gold transition-all block">
              (43) 99964-1763
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] text-gray-600 font-bold uppercase tracking-[0.5em]">
          <p>© 2026 Sarquis Samara. Qualidade Editorial Garantida.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Política Comercial</a>
            <a href="#" className="hover:text-white transition-colors">Termos B2B</a>
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
    <div className={`fixed bottom-0 left-0 w-full bg-luxury-dark/95 py-5 border-t border-luxury-gold/50 z-[60] transition-all duration-700 lg:hidden ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-luxury-gold text-black py-5 font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4">
        Orçamento 2026 WhatsApp <MessageCircle size={20} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="antialiased selection:bg-luxury-gold selection:text-black bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CatalogSection />
        <Testimonials />
        <CommercialPolicy />
        <HistorySection />
      </main>
      <Footer />
      <StickyCTA />
      
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[70] bg-[#121212] text-white p-6 rounded-full shadow-3xl hover:scale-110 active:scale-95 transition-all flex items-center gap-4 group overflow-hidden border border-luxury-gold"
      >
        <MessageCircle size={32} className="text-luxury-gold" fill="currentColor" />
        <div className="max-w-0 group-hover:max-w-xs transition-all duration-700 overflow-hidden flex flex-col whitespace-nowrap">
           <span className="font-bold uppercase text-[10px] tracking-widest text-luxury-gold">Catálogo 2026</span>
           <span className="text-[8px] font-bold opacity-40 uppercase tracking-tighter italic text-white">Suporte Técnico PJ</span>
        </div>
      </a>
    </div>
  );
}
