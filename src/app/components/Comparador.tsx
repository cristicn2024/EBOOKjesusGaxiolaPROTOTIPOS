import { useState, useEffect } from 'react';

// Esto es como un truco de Vite para que importe todas las imagenes y no hacerlo 1 por una (son muchas ps)
const imageModules = import.meta.glob<{ default: string }>('../../imports/[0-9]*.png', { eager: true });
const allImages = Object.values(imageModules).map(mod => mod.default);

export default function Comparador() {
  const [currentPair, setCurrentPair] = useState<{ left: string, right: string }>({ left: '', right: '' });

  const pickRandomPair = () => {
    if (allImages.length < 2) return;

    const randomIndex1 = Math.floor(Math.random() * allImages.length);
    let randomIndex2 = Math.floor(Math.random() * allImages.length);

    // Validacion para que nunca salga la misma imagen en ambos lados
    while (randomIndex1 === randomIndex2) {
      randomIndex2 = Math.floor(Math.random() * allImages.length);
    }

    setCurrentPair({
      left: allImages[randomIndex1],
      right: allImages[randomIndex2]
    });
  };

  useEffect(() => {
    pickRandomPair();
  }, []);

  const handleChoice = () => {
    pickRandomPair();
  };

  if (!currentPair.left) return null;

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
            onClick={handleChoice}
            className="group relative cursor-pointer"
          >
            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden relative flex items-center justify-center p-4" style={{ minHeight: '500px' }}>
              <img
                src={currentPair.left}
                alt="Opción izquierda"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-[#1A43CF]/20 opacity-0 group-hover:opacity-100 transition-all rounded-2xl"></div>
            </div>
          </div>

          <div
            onClick={handleChoice}
            className="group relative cursor-pointer"
          >
            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden relative flex items-center justify-center p-4" style={{ minHeight: '500px' }}>
              <img
                src={currentPair.right}
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