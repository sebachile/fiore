import { motion } from 'motion/react';
import { ServiceSection } from './components/ServiceSection';
import { ContactForm } from './components/ContactForm';
import { ServiceDock } from './components/ServiceDock';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Tarot Terapéutico',
      description: `El Tarot Terapéutico reconoce el "YO SOY" como la fuerza creadora que habita en cada persona.\nA través de sus símbolos y mensajes, amplía la conciencia, ofrece claridad ante los desafíos y nos guía a comprender el propósito detrás de nuestras experiencias.\nEs una herramienta de autoconocimiento que permite sanar patrones, integrar aprendizajes y enfocar la energía hacia la vida que queremos manifestar.`,
      benefit: 'claridad interior, dirección y comprensión profunda del momento presente.',
      imageUrl: 'img/tarot.jpeg',
      accentColor: '#C9A8D0'
    },
    {
      title: 'Reiki Rafá',
      description: `El Reiki Rafá restablece el flujo energético y facilita la sanación emocional profunda.\nDurante la sesión se acompaña al cuerpo y a la memoria interna para liberar dolor, rabia o angustia, devolviendo esa energía transformada a la fuente.\nTrabaja la trinidad madre-padre-hijo interior, promoviendo calma, gratitud y reconexión con el amor como esencia vital.`,
      benefit: 'liberación emocional, equilibrio y conexión con el amor interno.',
      imageUrl: 'img/reiki1.jpeg',
      accentColor: '#F9BB7C'
    },
    {
      title: 'Arte Terapéutico',
      description: `El arte es un canal de sanación y expansión. A través de la experimentación con materiales, texturas y colores, accedemos a nuestra esencia y damos forma a lo que busca expresarse.\nCada creación es un acto de conexión y autoconocimiento que nos invita a soltar juicios y abrirnos a la transformación personal.`,
      benefit: 'expresión auténtica, sanación creativa y expansión personal.',
      imageUrl: 'img/arte1.jpeg',
      accentColor: '#53A7DD'
    },
    {
      title: 'Programación Neuro Lingüística (PNL)',
      description: `La PNL nos ayuda a reconocer nuestros recursos internos y a transformar creencias o patrones inconscientes.\nPermite integrar lo que manteníamos en sombra y redirigir la energía hacia nuevas perspectivas, ampliando la flexibilidad mental y emocional.`,
      benefit: 'integración interior, claridad y herramientas para navegar los desafíos de la vida.',
      imageUrl: 'img/pnl1.jpeg',
      accentColor: '#C9A8D0'
    },
    {
      title: 'Fonoaudiología Integral',
      description: `La fonoaudiología es un encuentro entre ciencia y arte al servicio de la comunicación.\nMi enfoque considera la voz, el lenguaje y la palabra como reflejo del equilibrio entre cuerpo, emoción y energía.\nTrabajamos desde una visión integral que busca restablecer la salud vocal y la armonía general de la persona.`,
      benefit: 'expresión libre, mejora de la comunicación y bienestar integral.',
      imageUrl: 'img/fono1.jpeg',
      accentColor: '#F9BB7C'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-orange-50/30">
      <Toaster position="top-center" />
      
      {/* Floating Dock */}
      <ServiceDock floating />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="img\background.jpg"
            alt="Peaceful meditation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-purple-50/70 to-white/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-white text-[8rem] md:text-[10rem] font-extrabold tracking-tight leading-[0.9] px-4">
              Fiorenza Mazzotti
            </h1>
            
            <p className="text-white text-3xl max-w-2xl mx-auto mt-8">
              Integración cuerpo, mente y energía para el bienestar del ser.
            </p>
            
            <ServiceDock />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-8"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-[#C9A8D0] to-[#F9BB7C] hover:opacity-90 shadow-lg px-8"
              >
                Agenda tu sesión
              </Button>
              <p className="mt-4 text-gray-600">
                Comienza tu proceso de transformación
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div key={service.title} data-service-section>
              <ServiceSection
                {...service}
                reversed={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Contacto</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Agenda tu sesión personalizada
            </p>
          </motion.div>
          
          <ContactForm />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-16 space-y-6"
          >
            <div className="max-w-2xl mx-auto p-8 bg-white/60 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-800 italic">
                "Todo proceso de sanación comienza al escucharte a ti mismo. Te acompaño a reconectar con tu esencia."
              </p>
            </div>
            
            <div className="flex justify-center gap-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#C9A8D0]/20 hover:bg-[#C9A8D0]/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-[#C9A8D0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#53A7DD]/20 hover:bg-[#53A7DD]/30 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 text-[#53A7DD]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#F9BB7C]/20 hover:bg-[#F9BB7C]/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-[#F9BB7C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Fiorenza Mazzotti Vega. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
