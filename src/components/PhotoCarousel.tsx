import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import brigadeiro from '@/assets/Brigadeiro-Gourmet.png';
import beijinho from '@/assets/Bejiinho-Gourmet.png';
import morango from '@/assets/Morango-Gourmet.png';
import ninho from '@/assets/Ninho-Gourmet.png';
import pistache from '@/assets/Pistache-Gourmet.png';
import kit50Gourmet from '@/assets/kit-50.png';

const images = [
  { src: kit50Gourmet, alt: 'Kit 50 Unidades Gourmet' },
  { src: brigadeiro, alt: 'Brigadeiro tradicional' },
  { src: beijinho, alt: 'Beijinho de coco' },
  { src: morango, alt: 'Brigadeiro de morango' },
  { src: ninho, alt: 'Brigadeiro de ninho' },
  { src: pistache, alt: 'Brigadeiro de pistache' },
];

const PhotoCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 240 + 16;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="galeria" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="gradient-gold rounded-full p-3 shadow-gold hover:scale-105 transition-transform flex-shrink-0"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6 text-chocolate" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-hidden pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide flex-1"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-60 rounded-2xl overflow-hidden snap-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-60 object-cover object-center"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="gradient-gold rounded-full p-3 shadow-gold hover:scale-105 transition-transform flex-shrink-0"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6 text-chocolate" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-accent w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
