import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart, Palette, Brain, Mic } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  { id: 'tarot', icon: Sparkles, label: 'Tarot', color: '#C9A8D0' },
  { id: 'reiki', icon: Heart, label: 'Reiki', color: '#F9BB7C' },
  { id: 'arte', icon: Palette, label: 'Arte', color: '#53A7DD' },
  { id: 'pnl', icon: Brain, label: 'PNL', color: '#C9A8D0' },
  { id: 'fono', icon: Mic, label: 'Fonoaudiología', color: '#F9BB7C' }
];

interface ServiceDockProps {
  floating?: boolean;
}

export function ServiceDock({ floating = false }: ServiceDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(!floating);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!floating) return;

    const handleScroll = () => {
      // Show dock after scrolling past hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);

      // Track active section
      const sections = document.querySelectorAll('[data-service-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(index);
        }
      });
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [floating]);

  const scrollToSection = (id: string, index: number) => {
    const sectionMap: { [key: string]: number } = {
      'tarot': 0,
      'reiki': 1,
      'arte': 2,
      'pnl': 3,
      'fono': 4
    };
    
    const sections = document.querySelectorAll('[data-service-section]');
    const sectionIndex = sectionMap[id];
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const dockContent = (
    <div className="inline-flex items-end gap-2 p-3 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isHovered = hoveredIndex === index;
        const isActive = activeSection === index && floating;
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : 0;
        
        let scale = 1;
        if (isHovered) scale = 1.5;
        else if (distance === 1) scale = 1.2;
        else if (distance === 2) scale = 1.1;

        return (
          <motion.button
            key={service.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => scrollToSection(service.id, index)}
            animate={{ scale }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all cursor-pointer group"
            style={{ 
              backgroundColor: isActive ? `${service.color}40` : `${service.color}20`,
              originY: 1,
              boxShadow: isActive ? `0 0 0 2px ${service.color}` : 'none'
            }}
          >
            <Icon 
              className="w-6 h-6 transition-transform group-hover:scale-110" 
              style={{ color: service.color }}
            />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10
              }}
              transition={{ duration: 0.2 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
              style={{ backgroundColor: service.color }}
            >
              <span className="text-white text-sm">{service.label}</span>
              <div 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );

  if (floating) {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        {dockContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="pt-4"
    >
      {dockContent}
    </motion.div>
  );
}
