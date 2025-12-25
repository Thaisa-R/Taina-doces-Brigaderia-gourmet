import logo from '@/assets/logo-taina-doces.png';
import heroImage from '@/assets/kit-100-Gourmet.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Brigadeiros Gourmet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-8 animate-float">
            <img
              src={logo}
              alt="Tainá Doces"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-gold"
            />
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
            Tainá Doces
          </h1>
          <p className="font-display text-xl md:text-2xl text-gold-light italic mb-6">
            Brigaderia Gourmet
          </p>

          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-lg">
            Doces artesanais feitos com amor e os melhores ingredientes. 
            Transforme seus momentos especiais em experiências inesquecíveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('produtos')}
              className="px-8 py-4 gradient-gold text-primary font-semibold rounded-full shadow-gold hover:scale-105 transition-transform"
            >
              Ver Cardápio
            </button>
            <button
              onClick={() => scrollToSection('orcamento')}
              className="px-8 py-4 bg-transparent border-2 border-gold-light text-gold-light font-semibold rounded-full hover:bg-gold-light/10 transition-colors"
            >
              Fazer Orçamento
            </button>
          </div>

          <div className="absolute top-20 right-10 text-gold-light text-2xl animate-pulse hidden md:block">✦</div>
          <div className="absolute bottom-40 right-20 text-gold text-lg animate-pulse hidden md:block" style={{ animationDelay: '0.5s' }}>✦</div>
          <div className="absolute top-40 right-40 text-gold-light text-sm animate-pulse hidden md:block" style={{ animationDelay: '1s' }}>✦</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
