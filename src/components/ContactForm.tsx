import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', contact: '', service: '', message: '' });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="contact">Correo o WhatsApp</Label>
          <Input
            id="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
            className="mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="service">Servicio de interés</Label>
          <Input
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            placeholder="Tarot, Reiki, Arte, PNL, Fonoaudiología..."
            className="mt-2"
          />
        </div>
        
        <div>
          <Label htmlFor="message">Mensaje (opcional)</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="mt-2"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-[#53A7DD] hover:bg-[#4396CC]">
        <Send className="w-4 h-4 mr-2" />
        Agendar sesión
      </Button>
    </motion.form>
  );
}
