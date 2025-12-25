import { CreditCard, QrCode, Smartphone, Shield } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formas de <span className="text-gradient-gold">Pagamento</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Aceitamos as principais formas de pagamento para sua comodidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 h-full">
            <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            <span className="font-body font-medium text-foreground text-center">Cartão de Crédito</span>
            <span className="text-xs text-muted-foreground text-center">Até 3x com juros</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 h-full">
            <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <span className="font-body font-medium text-foreground text-center">Cartão de Débito</span>
            <span className="text-xs text-muted-foreground text-center">Débito à vista</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1 h-full">
            <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
              <QrCode className="w-8 h-8 text-primary" />
            </div>
            <span className="font-body font-medium text-foreground text-center">PIX</span>
            <span className="text-xs text-muted-foreground text-center">5% de desconto "Valor Antecipado"</span>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
          <Shield className="w-5 h-5" />
          <span className="font-body text-sm">Pagamento 100% seguro</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
