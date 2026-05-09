
import React, { ReactNode } from 'react';
// or for specific imports:
import { useState, useEffect } from 'react';

const Icon = ({ className, children }: { className?: string; children: ReactNode }) => (
  <span className={className} aria-hidden="true">
    {children}
  </span>
);

const Sprout = (props: { className?: string }) => <Icon {...props}>🌱</Icon>;
const Lightbulb = (props: { className?: string }) => <Icon {...props}>💡</Icon>;
const Zap = (props: { className?: string }) => <Icon {...props}>⚡</Icon>;
const Rocket = (props: { className?: string }) => <Icon {...props}>🚀</Icon>;
const TrendingUp = (props: { className?: string }) => <Icon {...props}>📈</Icon>;

import img8 from '../../imports/8.png';
import img9 from '../../imports/9.png';
import img10 from '../../imports/10.png';
import img11 from '../../imports/11.png';
import img12 from '../../imports/12.png';
import img13 from '../../imports/13.png';
import img14 from '../../imports/14.png';
import img15 from '../../imports/15.png';
import img16 from '../../imports/16.png';
import img17 from '../../imports/17.png';
import img18 from '../../imports/18.png';
import img19 from '../../imports/19.png';
import img20 from '../../imports/20.png';
import img21 from '../../imports/21.png';
import img22 from '../../imports/22.png';
import img23 from '../../imports/23.png';
import img24 from '../../imports/24.png';
import img25 from '../../imports/25.png';
import img26 from '../../imports/26.png';
import img27 from '../../imports/27.png';
import img28 from '../../imports/28.png';
import img29 from '../../imports/28.png';
import img30 from '../../imports/30.png';
import img31 from '../../imports/31.png';
import img34 from '../../imports/34.png';
import img35 from '../../imports/35.png';
import img36 from '../../imports/36.png';
import img37 from '../../imports/37.png';
import img38 from '../../imports/38.png';
import img39 from '../../imports/39.png';
import img40 from '../../imports/40.png';
import img41 from '../../imports/41.png';
import img42 from '../../imports/42.png';
import img43 from '../../imports/43.png';
import img44 from '../../imports/44.png';
import img45 from '../../imports/45.png';
import img46 from '../../imports/46.png';
import img47 from '../../imports/47.png';
import img48 from '../../imports/48.png';
import img49 from '../../imports/49.png';
import img50 from '../../imports/50.png';
import img51 from '../../imports/51.png';
import img52 from '../../imports/53.png';
import img53 from '../../imports/53.png';
import img54 from '../../imports/54.png';
import img55 from '../../imports/55.png';
import img56 from '../../imports/56.png';
import img57 from '../../imports/57.png';
import img58 from '../../imports/58.png';
import img59 from '../../imports/59.png';
import img60 from '../../imports/60.png';
import img61 from '../../imports/61.png';

interface EbookSectionsProps {
  onSectionClick: (section: {
    title: string;
    gradient: string;
    frases: Array<{
      text: string;
      bgImage: string;
      likes: number;
    }>;
  }) => void;
}

export default function EbookSections({ onSectionClick }: EbookSectionsProps) {
  const sections = [
    {
      icon: Sprout,
      title: 'Antes de Innovar: La Semilla',
      description: 'Donde todo comienza con la curiosidad y la capacidad de ver lo que otros no ven.',
      gradient: 'from-[#547C5C] to-[#679073]',
      bgGradient: 'from-[#547C5C]/10 to-[#679073]/10',
      frases: [
        { text: '', bgImage: img8, likes: 89 },
        { text: '', bgImage: img9, likes: 102 },
        { text: '', bgImage: img10, likes: 76 },
        { text: '', bgImage: img11, likes: 94 },
        { text: '', bgImage: img12, likes: 118 },
        { text: '', bgImage: img13, likes: 83 },
        { text: '', bgImage: img14, likes: 89 },
        { text: '', bgImage: img41, likes: 102 },
        { text: '', bgImage: img16, likes: 76 },
        { text: '', bgImage: img17, likes: 94 },
        { text: '', bgImage: img18, likes: 118 },
        { text: '', bgImage: img19, likes: 83 },
        { text: '', bgImage: img20, likes: 89 },
        { text: '', bgImage: img21, likes: 102 },
        { text: '', bgImage: img22, likes: 76 },
        { text: '', bgImage: img23, likes: 94 },
        { text: '', bgImage: img24, likes: 118 },
        { text: '', bgImage: img25, likes: 83 },
        { text: '', bgImage: img26, likes: 89 },
        { text: '', bgImage: img27, likes: 102 },
        { text: '', bgImage: img28, likes: 76 },
        { text: '', bgImage: img29, likes: 94 },
        { text: '', bgImage: img30, likes: 118 },
        { text: '', bgImage: img31, likes: 83 }
      ]
    },
    {
      icon: Lightbulb,
      title: 'Encender la Chispa: Ideación y Exploración',
      description: 'El terreno del caos creativo y la valentía de experimentar.',
      gradient: 'from-[#C6A13B] to-[#D4B456]',
      bgGradient: 'from-[#C6A13B]/10 to-[#D4B456]/10',
       frases: [
        { text: '', bgImage: img34, likes: 89 },
        { text: '', bgImage: img35, likes: 102 },
        { text: '', bgImage: img36, likes: 76 },
        { text: '', bgImage: img37, likes: 94 },
        { text: '', bgImage: img38, likes: 118 },
        { text: '', bgImage: img39, likes: 83 },
        { text: '', bgImage: img40, likes: 89 },
        { text: '', bgImage: img41, likes: 102 },
        { text: '', bgImage: img42, likes: 76 },
        { text: '', bgImage: img43, likes: 94 },
        { text: '', bgImage: img44, likes: 118 },
        { text: '', bgImage: img45, likes: 83 },
        { text: '', bgImage: img46, likes: 89 },
        { text: '', bgImage: img47, likes: 102 },
        { text: '', bgImage: img48, likes: 76 },
        { text: '', bgImage: img49, likes: 94 },
        { text: '', bgImage: img50, likes: 118 },
        { text: '', bgImage: img51, likes: 83 },
        { text: '', bgImage: img52, likes: 89 },
        { text: '', bgImage: img53, likes: 102 },
        { text: '', bgImage: img54, likes: 76 },
        { text: '', bgImage: img55, likes: 94 },
        { text: '', bgImage: img56, likes: 118 },
        { text: '', bgImage: img57, likes: 83 },
        { text: '', bgImage: img58, likes: 76 },
        { text: '', bgImage: img59, likes: 94 },
        { text: '', bgImage: img60, likes: 118 },
        { text: '', bgImage: img61, likes: 83 }
      ]
    },
    {
      icon: Zap,
      title: 'En Acción: Desarrollo y Validación',
      description: 'El momento en que la realidad pone a prueba las ideas',
      gradient: 'from-[#1A43CF] to-[#3D5FDB]',
      bgGradient: 'from-[#1A43CF]/10 to-[#3D5FDB]/10',
      frases: [
        { text: 'Una idea sin acción es solo un sueño', bgImage: 'https://images.unsplash.com/photo-1679193559904-aea078fa7afd?q=80&w=600', likes: 201 },
        { text: 'Ejecuta rápido, aprende más rápido', bgImage: 'https://images.unsplash.com/photo-1665652475985-37e285aeff53?q=80&w=600', likes: 178 },
        { text: 'El progreso se mide en prototipos, no en planes perfectos', bgImage: 'https://images.unsplash.com/photo-1669465716237-9cb999b47773?q=80&w=600', likes: 189 },
        { text: 'Valida temprano, fracasa barato', bgImage: 'https://images.unsplash.com/photo-1617550523898-600c24418b75?q=80&w=600', likes: 195 },
        { text: 'La acción convierte ideas en realidad', bgImage: 'https://images.unsplash.com/photo-1770954098194-5521c9eb68a1?q=80&w=600', likes: 212 },
        { text: 'Prueba, mide, ajusta, repite', bgImage: 'https://images.unsplash.com/photo-1617550529026-df6214fe8b18?q=80&w=600', likes: 183 }
      ]
    },
    {
      icon: Rocket,
      title: 'Lanzar e Impactar: Implementación y Escalabilidad',
      description: 'Cuando la innovación trasciende lo individual para convertirse en un impacto colectivo.',
      gradient: 'from-[#EE5A41] to-[#F27D68]',
      bgGradient: 'from-[#EE5A41]/10 to-[#F27D68]/10',
      frases: [
        { text: 'El momento de lanzar es ahora', bgImage: 'https://images.unsplash.com/photo-1771732267145-835666f3b291?q=80&w=600', likes: 234 },
        { text: 'Escala lo que funciona, descarta lo que no', bgImage: 'https://images.unsplash.com/photo-1773695801862-dbfa4fba6c74?q=80&w=600', likes: 198 },
        { text: 'La perfección es enemiga del lanzamiento', bgImage: 'https://images.unsplash.com/photo-1771732267123-10624d6c6f20?q=80&w=600', likes: 256 },
        { text: 'Crece con intención, escala con estrategia', bgImage: 'https://images.unsplash.com/photo-1617550525187-82c59482bbc5?q=80&w=600', likes: 221 },
        { text: 'El impacto real sucede cuando implementas', bgImage: 'https://images.unsplash.com/photo-1773761193222-4ad3b5ac23dc?q=80&w=600', likes: 243 },
        { text: 'No esperes estar listo, hazlo mientras aprendes', bgImage: 'https://images.unsplash.com/photo-1773751392423-212463aa28c2?q=80&w=600', likes: 209 }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Después de Innovar: Aprendizaje y Evolución',
      description: 'La fase donde cada cierre se transforma en semilla de un nuevo comienzo',
      gradient: 'from-[#8A47A8] to-[#A062BF]',
      bgGradient: 'from-[#8A47A8]/10 to-[#A062BF]/10',
      frases: [
        { text: 'Cada final es el inicio de una nueva innovación', bgImage: 'https://images.unsplash.com/photo-1679193559904-aea078fa7afd?q=80&w=600', likes: 167 },
        { text: 'El aprendizaje continuo es el secreto de la evolución', bgImage: 'https://images.unsplash.com/photo-1665652475985-37e285aeff53?q=80&w=600', likes: 154 },
        { text: 'Reflexiona, aprende, mejora, repite', bgImage: 'https://images.unsplash.com/photo-1669465716237-9cb999b47773?q=80&w=600', likes: 178 },
        { text: 'Los errores son datos para tu próximo éxito', bgImage: 'https://images.unsplash.com/photo-1617550523898-600c24418b75?q=80&w=600', likes: 189 },
        { text: 'La innovación nunca termina, solo evoluciona', bgImage: 'https://images.unsplash.com/photo-1770954098194-5521c9eb68a1?q=80&w=600', likes: 196 },
        { text: 'Celebra el progreso, abraza la mejora continua', bgImage: 'https://images.unsplash.com/photo-1617550529026-df6214fe8b18?q=80&w=600', likes: 172 }
      ]
    }
  ];

  return (
    <section id="secciones" className="py-20 px-4 bg-gradient-to-br from-green-50/30 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-4">
            Secciones de <span className="italic">El Mindset Innovador</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {sections.slice(0, 3).map((section, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${section.bgGradient} p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {section.description}
              </p>
              <button
                onClick={() => onSectionClick({ title: section.title, gradient: section.gradient, frases: section.frases })}
                className={`px-6 py-2 bg-gradient-to-r ${section.gradient} text-white rounded-full hover:shadow-lg transition-all text-sm`}
              >
                Explorar sección
              </button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sections.slice(3, 5).map((section, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${section.bgGradient} p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <section.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {section.description}
              </p>
              <button
                onClick={() => onSectionClick({ title: section.title, gradient: section.gradient, frases: section.frases })}
                className={`px-6 py-2 bg-gradient-to-r ${section.gradient} text-white rounded-full hover:shadow-lg transition-all text-sm`}
              >
                Explorar sección
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
