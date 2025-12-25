import { useState, useEffect } from 'react';
import logo from '@/assets/logo-taina-doces.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tainá Doces" className="h-12 w-12 rounded-full object-cover" />
          <span className={`font-display text-xl font-semibold transition-colors ${
            isScrolled ? 'text-primary' : 'text-primary-foreground drop-shadow-lg'
          }`}>
            Tainá Doces
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className={`font-body transition-colors ${
              isScrolled ? 'text-foreground/80 hover:text-accent' : 'text-primary-foreground/90 hover:text-gold-light drop-shadow-md'
            }`}
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('produtos')} 
            className={`font-body transition-colors ${
              isScrolled ? 'text-foreground/80 hover:text-accent' : 'text-primary-foreground/90 hover:text-gold-light drop-shadow-md'
            }`}
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('galeria')} 
            className={`font-body transition-colors ${
              isScrolled ? 'text-foreground/80 hover:text-accent' : 'text-primary-foreground/90 hover:text-gold-light drop-shadow-md'
            }`}
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection('orcamento')} 
            className="px-6 py-2.5 gradient-gold text-primary font-semibold rounded-full shadow-gold hover:scale-105 transition-transform"
          >
            Fazer Orçamento
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
