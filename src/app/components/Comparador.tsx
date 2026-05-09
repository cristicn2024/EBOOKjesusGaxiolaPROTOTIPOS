import { useState } from 'react';
import img8 from '../../imports/8.png';
import img9 from '../../imports/9.png';
import img10 from '../../imports/10.png';
import img11 from '../../imports/11.png';
import img12 from '../../imports/12.png';
import img13 from '../../imports/13.png';
import img100 from '../../imports/100.png';
import img111 from '../../imports/111.png';
import img98 from '../../imports/98.png';
import img92 from '../../imports/92.png';
import img104 from '../../imports/104.png';
import img93 from '../../imports/93.png';

export default function Comparador() {
  const imagePairs = [
    {
      left: { text: '', bgImage: img8, likes: 89 },
      right: { text: '', bgImage: img100, likes: 9 }
    },
    {
       left: { text: '', bgImage: img9, likes: 103 },
      right: { text: '', bgImage: img111, likes: 45 }
    },
    {
       left: { text: '', bgImage: img10, likes: 65 },
      right: { text: '', bgImage: img98, likes: 29 }
    },
    {
       left: { text: '', bgImage: img11, likes: 89 },
      right: { text: '', bgImage: img92, likes: 9 }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChoice = (choice: 'left' | 'right') => {
    if (currentIndex < imagePairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <section id="comparador" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-4 px-4">
            ¿Cuál te inspira más?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            onClick={() => handleChoice('left')}
            className="group relative cursor-pointer"
          >
            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden relative flex items-center justify-center p-4" style={{ minHeight: '500px' }}>
              <img
                src={imagePairs[currentIndex].left.bgImage}
                alt="Opción izquierda"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-[#1A43CF]/20 opacity-0 group-hover:opacity-100 transition-all rounded-2xl"></div>
            </div>
          </div>

          <div
            onClick={() => handleChoice('right')}
            className="group relative cursor-pointer"
          >
            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden relative flex items-center justify-center p-4" style={{ minHeight: '500px' }}>
              <img
                src={imagePairs[currentIndex].right.bgImage}
                alt="Opción derecha"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-[#8A47A8]/20 opacity-0 group-hover:opacity-100 transition-all rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
