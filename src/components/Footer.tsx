import { Instagram, MapPin, Heart } from 'lucide-react';
import logo from '@/assets/logo-taina-doces.png';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary py-6 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Tainá Doces" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground">Tainá Doces</h3>
                <p className="font-body text-xs text-primary-foreground/70">Brigaderia Gourmet</p>
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 text-center max-w-xs mt-3">
              Brigadeiros artesanais feitos com amor para tornar seus momentos ainda mais especiais.
            </p>
            <Heart className="w-4 h-4 text-gold-light mt-2 fill-gold-light" />
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">Contato</h4>
            <div className="space-y-2">
              <a 
                href="https://wa.me/5521965228990" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold-light transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="font-body">(21) 965228990</span>
              </a>
              <a 
                href="https://instagram.com/tainadocesgourmet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="font-body">@tainadocesgourmet</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="font-body">Nova Iguaçu, RJ</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">Horário</h4>
            <div className="space-y-1 text-center">
              <p className="font-body text-primary-foreground/80">
                <span className="font-medium">Segunda a Sexta:</span><br />
                9h às 18h
              </p>
              <p className="font-body text-primary-foreground/80">
                <span className="font-medium">Sábado:</span><br />
                9h às 14h
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-chocolate-light my-4" />

        <div className="flex flex-wrap items-center justify-center gap-2 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            Copyright © 2025 Tainá Doces Brigaderia Gourmet.
          </p>
          <span className="font-body text-sm text-primary-foreground/60">Todos os direitos reservados.</span>
          <span className="font-body text-sm text-primary-foreground/60">
            Feito por{' '}
            <a
              href="https://instagram.com/thaisa.raquel.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light hover:text-gold transition-colors"
            >
              Thaísa Raquel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
