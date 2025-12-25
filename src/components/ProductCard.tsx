interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  const isKit4 = name === 'Kit 4 Unidades';
  
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-64 sm:h-56 overflow-hidden bg-card flex items-center flex-shrink-0">
        <img
          src={image}
          alt={name}
          className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
            isKit4 ? 'object-cover object-center' : 'object-cover object-center'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-semibold text-foreground mb-1 min-h-[3rem]">{name}</h3>
        <p className="font-body text-sm text-muted-foreground mb-3 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-2xl font-bold text-accent">{price}</span>
          <span className="text-xs text-muted-foreground font-body">por unidade</span>
        </div>
      </div>

      <div className="h-1 gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default ProductCard;
