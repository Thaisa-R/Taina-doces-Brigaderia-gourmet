import { useState } from 'react';
import ProductCard from './ProductCard';
import kit4sabores from '@/assets/kit-4.png';
import kit10unidades from '@/assets/kit-10.png';
import kit50unidades from '@/assets/kit-50.png';
import kit100unidades from '@/assets/kit-100-Gourmet.png';
import kitTradicionais from '@/assets/kit-50-100-trad.png';

type FilterType = 'todos' | 'gourmet' | 'tradicional';

const kitsGourmet = [
  {
    name: 'Kit 4 Unidades',
    price: 'R$ 12,00',
    image: kit4sabores,
    description: 'Gourmet: Brigadeiro, Ninho, Nozes, Morango com Ninho, Cappuccino, outros',
    isKit: true,
    category: 'gourmet' as const,
  },
  {
    name: 'Kit 10 Unidades',
    price: 'R$ 25,00',
    image: kit10unidades,
    description: 'Gourmet: Brigadeiro, Ninho, Nozes, Morango com Ninho, Cappuccino, outros',
    isKit: true,
    category: 'gourmet' as const,
  },
  {
    name: '50 Unidades',
    price: 'R$ 130,00',
    image: kit50unidades,
    description: 'Gourmet: Brigadeiro, Ninho, Nozes, Morango com Ninho, Cappuccino, outros',
    isKit: true,
    category: 'gourmet' as const,
  },
  {
    name: '100 Unidades',
    price: 'R$ 250,00',
    image: kit100unidades,
    description: 'Gourmet: Brigadeiro, Ninho, Nozes, Morango com Ninho, Cappuccino, outros',
    isKit: true,
    category: 'gourmet' as const,
  },
];

const kitsTradicionais = [
  {
    name: 'Kit 50 Unidades - Doces Tradicionais',
    price: 'R$ 100,00',
    image: kitTradicionais,
    description: 'Brigadeiro, beijinho, morango, meio a meio, cajuzinho',
    isKit: true,
    category: 'tradicional' as const,
  },
  {
    name: 'Kit 100 Unidades - Doces Tradicionais',
    price: 'R$ 200,00',
    image: kitTradicionais,
    description: 'Brigadeiro, beijinho, morango, meio a meio, cajuzinho',
    isKit: true,
    category: 'tradicional' as const,
  },
];

const allKits = [...kitsGourmet, ...kitsTradicionais];

const ProductsSection = () => {
  const [filter, setFilter] = useState<FilterType>('todos');

  const getFilteredProducts = () => {
    if (filter === 'gourmet') return kitsGourmet;
    if (filter === 'tradicional') return kitsTradicionais;
    return allKits;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full font-body text-sm font-medium mb-4">
            Nosso Cardápio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sabores <span className="text-gradient-gold">Irresistíveis</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada docinho é feito artesanalmente com ingredientes premium selecionados. 
            Descubra nossos sabores exclusivos.
          </p>
        </div>

        <div className="flex flex-nowrap justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setFilter('todos')}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-body font-medium text-sm sm:text-base transition-all duration-300 flex-shrink-0 ${
              filter === 'todos'
                ? 'bg-gradient-gold text-chocolate shadow-lg shadow-gold/30'
                : 'bg-card border border-border text-foreground hover:border-gold hover:text-gold'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('gourmet')}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-body font-medium text-sm sm:text-base transition-all duration-300 flex-shrink-0 ${
              filter === 'gourmet'
                ? 'bg-gradient-gold text-chocolate shadow-lg shadow-gold/30'
                : 'bg-card border border-border text-foreground hover:border-gold hover:text-gold'
            }`}
          >
            Gourmet
          </button>
          <button
            onClick={() => setFilter('tradicional')}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-body font-medium text-sm sm:text-base transition-all duration-300 flex-shrink-0 ${
              filter === 'tradicional'
                ? 'bg-gradient-gold text-chocolate shadow-lg shadow-gold/30'
                : 'bg-card border border-border text-foreground hover:border-gold hover:text-gold'
            }`}
          >
            Tradicionais
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="text-muted-foreground font-body">
            Encomendas a partir de <span className="font-semibold text-foreground">50 unidades</span>. 
            Consulte sabores adicionais disponíveis.
          </p>
          <p className="text-muted-foreground font-body">
            O pedido é feito com <span className="font-semibold text-foreground">50% do valor total do pedido!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
