import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceSectionProps {
  title: string;
  description: string;
  benefit: string;
  imageUrl: string;
  reversed?: boolean;
  accentColor: string;
}

export function ServiceSection({
  title,
  description,
  benefit,
  imageUrl,
  reversed = false,
  accentColor
}: ServiceSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 mix-blend-multiply opacity-20"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 
          className="inline-block pb-2 border-b-4"
          style={{ borderColor: accentColor }}
        >
          {title}
        </h2>
        <div className="space-y-4 text-gray-700">
          {description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div 
          className="mt-6 p-4 rounded-lg border-l-4"
          style={{ 
            borderColor: accentColor,
            backgroundColor: `${accentColor}15`
          }}
        >
          <p className="text-gray-800">
            <span className="opacity-70">Beneficio: </span>
            {benefit}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
