import { useState } from 'react';
import { CalendarIcon, ChevronDown, Send } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'sonner';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '5521965228990';

const FLAVORS = [
  'Brigadeiro',
  'Ninho',
  'Beijinho',
  'Morango',
  'Morango com Ninho',
  'Cappuccino',
  'Pistache',
  'Nozes',
  'Meio a Meio',
  'Cajuzinho',
];

const BudgetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    event: '',
    kitType: '',
    selectedFlavors: [] as string[],
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddFlavor = (value: string) => {
    if (value && !formData.selectedFlavors.includes(value) && formData.selectedFlavors.length < 5) {
      setFormData({
        ...formData,
        selectedFlavors: [...formData.selectedFlavors, value],
      });
    }
  };

  const handleRemoveFlavor = (flavorToRemove: string) => {
    setFormData({
      ...formData,
      selectedFlavors: formData.selectedFlavors.filter(flavor => flavor !== flavorToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();

    if (!name) {
      toast.error('Por favor, preencha seu nome.');
      return;
    }

    const formattedDate = formData.date 
      ? format(new Date(formData.date), "dd/MM/yyyy", { locale: ptBR })
      : 'A definir';

    const messageParts = [
      '🍫 *Orçamento - Tainá Doces*',
      '',
      `👤 *Nome:* ${name}`,
      `🎉 *Evento:* ${formData.event || 'Não informado'}`,
      `🍬 *Sabores:* ${formData.selectedFlavors.length > 0 ? formData.selectedFlavors.join(', ') : 'A definir'}`,
      ...(formData.kitType ? [`🎁 *Kit:* ${formData.kitType}`] : []),
      `📅 *Data do Evento:* ${formattedDate}`,
      '',
      '💬 *Mensagem:*',
      formData.message || 'Gostaria de fazer um orçamento.'
    ];

    const message = messageParts.join('\n');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    const newWindow = window.open(whatsappUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
    
    toast.success('Abrindo WhatsApp...');
  };

  return (
    <section id="orcamento" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold-light rounded-full font-body text-sm font-medium mb-4">
              Faça seu Pedido
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Solicite um <span className="text-gold-light">Orçamento</span>
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para finalizar seu pedido.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-hover">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block font-body font-medium text-foreground mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block font-body font-medium text-foreground mb-2">
                  Tipo de Evento
                </label>
                <Select value={formData.event} onValueChange={(value) => handleSelectChange('event', value)}>
                  <SelectTrigger className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Casamento">Casamento</SelectItem>
                    <SelectItem value="Aniversário">Aniversário</SelectItem>
                    <SelectItem value="Chá de Bebê">Chá de Bebê</SelectItem>
                    <SelectItem value="Formatura">Formatura</SelectItem>
                    <SelectItem value="Evento Corporativo">Evento Corporativo</SelectItem>
                    <SelectItem value="Presente">Presente</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-body font-medium text-foreground mb-2">
                Tipo de Produto?
                </label>
                <Select value={formData.kitType} onValueChange={(value) => handleSelectChange('kitType', value)}>
                  <SelectTrigger className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kit 4 Unidades">Kit 4 Unidades</SelectItem>
                    <SelectItem value="Kit 10 Unidades">Kit 10 Unidades</SelectItem>
                    <SelectItem value="50 Unidades">50 Unidades</SelectItem>
                    <SelectItem value="Cento (100 un)">Cento (100 un)</SelectItem>
                    <SelectItem value="Kit 50 Unidades - Doces Tradicionais">Kit 50 Unidades - Doces Tradicionais</SelectItem>
                    <SelectItem value="Kit 100 Unidades - Doces Tradicionais">Kit 100 Unidades - Doces Tradicionais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-body font-medium text-foreground mb-2">
                  Sabores Desejados {formData.selectedFlavors.length > 0 && `(${formData.selectedFlavors.length}/5)`}
                </label>
                <Select
                  onValueChange={handleAddFlavor}
                  disabled={formData.selectedFlavors.length >= 5}
                >
                  <SelectTrigger className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    <SelectValue placeholder="Selecione o sabor" />
                  </SelectTrigger>
                  <SelectContent>
                    {FLAVORS.filter(flavor => !formData.selectedFlavors.includes(flavor)).map(flavor => (
                      <SelectItem key={flavor} value={flavor}>{flavor}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formData.selectedFlavors.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.selectedFlavors.map(flavor => (
                      <span
                        key={flavor}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/20 text-accent font-body text-sm"
                      >
                        {flavor}
                        <button
                          type="button"
                          onClick={() => handleRemoveFlavor(flavor)}
                          className="hover:text-destructive transition-colors"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block font-body font-medium text-foreground mb-2">
                  Data do Evento
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-10 px-3 py-2 pr-12 justify-between text-left font-normal rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-body text-foreground relative",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <span className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? (
                          format(new Date(formData.date), "dd/MM/yyyy", { locale: ptBR })
                        ) : (
                          <span>Selecione a data</span>
                        )}
                      </span>
                      <ChevronDown className="absolute right-3 h-4 w-4 opacity-50 pointer-events-none" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start" side="bottom" avoidCollisions={false}>
                    <Calendar
                      mode="single"
                      selected={formData.date ? new Date(formData.date) : undefined}
                      onSelect={(date) => {
                        if (date) {
                          setFormData({
                            ...formData,
                            date: format(date, 'yyyy-MM-dd'),
                          });
                        }
                      }}
                      locale={ptBR}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="md:col-span-2">
                <label className="block font-body font-medium text-foreground mb-2">
                  Mensagem Adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos mais sobre seu evento ou pedido especial..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-4 gradient-gold text-primary font-semibold rounded-full shadow-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enviar para WhatsApp
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BudgetForm;
