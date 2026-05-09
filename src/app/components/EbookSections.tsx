
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
import img52 from '../../imports/52.png';
import img53 from '../../imports/53.png';
import img54 from '../../imports/54.png';
import img55 from '../../imports/55.png';
import img56 from '../../imports/56.png';
import img57 from '../../imports/57.png';
import img58 from '../../imports/58.png';
import img59 from '../../imports/59.png';
import img60 from '../../imports/60.png';
import img61 from '../../imports/61.png';
import img64 from '../../imports/64.png';
import img65 from '../../imports/65.png';
import img66 from '../../imports/66.png';
import img67 from '../../imports/67.png';
import img68 from '../../imports/68.png';
import img69 from '../../imports/69.png';
import img70 from '../../imports/70.png';
import img71 from '../../imports/71.png';
import img72 from '../../imports/72.png';
import img73 from '../../imports/73.png';
import img74 from '../../imports/74.png';
import img75 from '../../imports/75.png';
import img76 from '../../imports/76.png';
import img77 from '../../imports/77.png';
import img78 from '../../imports/78.png';
import img79 from '../../imports/79.png';
import img80 from '../../imports/80.png';
import img81 from '../../imports/81.png';
import img82 from '../../imports/83.png';
import img83 from '../../imports/83.png';
import img84 from '../../imports/84.png';
import img85 from '../../imports/85.png';
import img88 from '../../imports/88.png';
import img89 from '../../imports/89.png';
import img90 from '../../imports/90.png';
import img91 from '../../imports/91.png';
import img92 from '../../imports/92.png';
import img93 from '../../imports/93.png';
import img94 from '../../imports/94.png';
import img95 from '../../imports/95.png';
import img96 from '../../imports/96.png';
import img97 from '../../imports/97.png';
import img98 from '../../imports/98.png';
import img99 from '../../imports/99.png';
import img100 from '../../imports/100.png';
import img101 from '../../imports/101.png';
import img102 from '../../imports/102.png';
import img103 from '../../imports/103.png';
import img104 from '../../imports/104.png';
import img105 from '../../imports/105.png';
import img106 from '../../imports/106.png';
import img109 from '../../imports/109.png';
import img110 from '../../imports/110.png';
import img111 from '../../imports/111.png';
import img112 from '../../imports/112.png';
import img113 from '../../imports/113.png';
import img114 from '../../imports/114.png';
import img115 from '../../imports/115.png';
import img116 from '../../imports/116.png';
import img117 from '../../imports/117.png';
import img118 from '../../imports/118.png';
import img119 from '../../imports/119.png';
import img120 from '../../imports/120.png';
import img121 from '../../imports/121.png';
import img122 from '../../imports/122.png';
import img123 from '../../imports/123.png';
import img124 from '../../imports/124.png';
import img125 from '../../imports/125.png';

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
        { text: '', bgImage: img64, likes: 89 },
        { text: '', bgImage: img65, likes: 102 },
        { text: '', bgImage: img66, likes: 76 },
        { text: '', bgImage: img67, likes: 94 },
        { text: '', bgImage: img68, likes: 118 },
        { text: '', bgImage: img69, likes: 83 },
        { text: '', bgImage: img70, likes: 89 },
        { text: '', bgImage: img71, likes: 102 },
        { text: '', bgImage: img72, likes: 76 },
        { text: '', bgImage: img73, likes: 94 },
        { text: '', bgImage: img74, likes: 118 },
        { text: '', bgImage: img75, likes: 83 },
        { text: '', bgImage: img76, likes: 89 },
        { text: '', bgImage: img77, likes: 102 },
        { text: '', bgImage: img78, likes: 76 },
        { text: '', bgImage: img79, likes: 94 },
        { text: '', bgImage: img80, likes: 118 },
        { text: '', bgImage: img81, likes: 83 },
        { text: '', bgImage: img82, likes: 89 },
        { text: '', bgImage: img83, likes: 102 },
        { text: '', bgImage: img84, likes: 76 },
        { text: '', bgImage: img85, likes: 94 }
      ]
    },
    {
      icon: Rocket,
      title: 'Lanzar e Impactar: Implementación y Escalabilidad',
      description: 'Cuando la innovación trasciende lo individual para convertirse en un impacto colectivo.',
      gradient: 'from-[#EE5A41] to-[#F27D68]',
      bgGradient: 'from-[#EE5A41]/10 to-[#F27D68]/10',
       frases: [
        { text: '', bgImage: img88, likes: 89 },
        { text: '', bgImage: img89, likes: 102 },
        { text: '', bgImage: img90, likes: 76 },
        { text: '', bgImage: img91, likes: 94 },
        { text: '', bgImage: img92, likes: 118 },
        { text: '', bgImage: img93, likes: 83 },
        { text: '', bgImage: img94, likes: 89 },
        { text: '', bgImage: img95, likes: 102 },
        { text: '', bgImage: img96, likes: 76 },
        { text: '', bgImage: img97, likes: 102 },
        { text: '', bgImage: img98, likes: 76 },
        { text: '', bgImage: img99, likes: 94 },
        { text: '', bgImage: img100, likes: 118 },
        { text: '', bgImage: img101, likes: 83 },
        { text: '', bgImage: img102, likes: 89 },
        { text: '', bgImage: img103, likes: 102 },
        { text: '', bgImage: img104, likes: 76 },
        { text: '', bgImage: img105, likes: 94 },
        { text: '', bgImage: img106, likes: 94 }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Después de Innovar: Aprendizaje y Evolución',
      description: 'La fase donde cada cierre se transforma en semilla de un nuevo comienzo',
      gradient: 'from-[#8A47A8] to-[#A062BF]',
      bgGradient: 'from-[#8A47A8]/10 to-[#A062BF]/10',
      frases: [
        { text: '', bgImage: img109, likes: 102 },
        { text: '', bgImage: img110, likes: 76 },
        { text: '', bgImage: img111, likes: 94 },
        { text: '', bgImage: img112, likes: 118 },
        { text: '', bgImage: img113, likes: 83 },
        { text: '', bgImage: img114, likes: 89 },
        { text: '', bgImage: img115, likes: 102 },
        { text: '', bgImage: img116, likes: 76 },
        { text: '', bgImage: img117, likes: 102 },
        { text: '', bgImage: img118, likes: 76 },
        { text: '', bgImage: img109, likes: 94 },
        { text: '', bgImage: img110, likes: 118 },
        { text: '', bgImage: img111, likes: 83 },
        { text: '', bgImage: img112, likes: 89 },
        { text: '', bgImage: img113, likes: 102 },
        { text: '', bgImage: img114, likes: 76 },
        { text: '', bgImage: img115, likes: 94 },
        { text: '', bgImage: img116, likes: 94 },
        { text: '', bgImage: img117, likes: 102 },
        { text: '', bgImage: img118, likes: 76 },
        { text: '', bgImage: img119, likes: 94 },
        { text: '', bgImage: img120, likes: 118 },
        { text: '', bgImage: img121, likes: 83 },
        { text: '', bgImage: img122, likes: 89 },
        { text: '', bgImage: img123, likes: 102 },
        { text: '', bgImage: img124, likes: 76 },
        { text: '', bgImage: img125, likes: 94 }
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
