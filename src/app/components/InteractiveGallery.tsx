import { useState, useEffect, useMemo } from 'react';
import { Heart, TrendingUp, Share2 } from 'lucide-react';
import ShareModal from './ShareModal';
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

import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function InteractiveGallery() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedShareTarget, setSelectedShareTarget] = useState<PhraseShareTarget | null>(null);

  // IDs únicos para cada frase basados en el nombre de la imagen
  const frasesData = [
    { id: 'frase_8', bgImage: img8 },
    { id: 'frase_9', bgImage: img9 },
    { id: 'frase_10', bgImage: img10 },
    { id: 'frase_11', bgImage: img11 },
    { id: 'frase_12', bgImage: img12 },
    { id: 'frase_13', bgImage: img13 },
    { id: 'frase_100', bgImage: img100 },
    { id: 'frase_111', bgImage: img111 },
    { id: 'frase_98', bgImage: img98 },
    { id: 'frase_92', bgImage: img92 },
    { id: 'frase_104', bgImage: img104 },
    { id: 'frase_93', bgImage: img93 }
  ];

  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const [monthlyLikeCounts, setMonthlyLikeCounts] = useState<Record<number, number>>({});

  // 1. CARGAR DATOS AL INICIAR
  useEffect(() => {
    // Cargar corazones rojos desde LocalStorage
    const savedLikes = JSON.parse(localStorage.getItem('user_likes') || '{}');
    setLiked(savedLikes);

    // Cargar conteos reales desde Firebase
    const fetchLikes = async () => {
      const counts: Record<number, number> = {};
      const monthlyCounts: Record<number, number> = {};
      
      const loadPromises = frasesData.map(async (frase, index) => {
        const docRef = doc(db, 'frases', frase.id);
        try {
          const docSnap = await getDoc(docRef);
          counts[index] = docSnap.exists() ? docSnap.data().count : 0;
          monthlyCounts[index] = docSnap.exists() ? docSnap.data().currentMonthLikes : 0;
        } catch (err) {
          console.error(`Error leyendo ${frase.id}:`, err);
          counts[index] = 0;
          monthlyCounts[index] = 0;
        }
      });

      await Promise.all(loadPromises);
      setLikeCounts(counts);
      setMonthlyLikeCounts(monthlyCounts);
    };

    fetchLikes();
  }, []);

  // 2. LÓGICA DE LIKE / UNLIKE
  const handleLike = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const fraseId = frasesData[index].id;
    const fraseRef = doc(db, 'frases', fraseId);
    const isRemovingLike = liked[index];

    // Actualización Visual Inmediata (UI)
    setLiked(prev => {
      const newState = { ...prev };
      if (isRemovingLike) {
        delete newState[index];
      } else {
        newState[index] = true;
      }
      localStorage.setItem('user_likes', JSON.stringify(newState));
      return newState;
    });

    setLikeCounts(prev => ({
      ...prev,
      [index]: isRemovingLike ? (prev[index] || 1) - 1 : (prev[index] || 0) + 1
    }));

    setMonthlyLikeCounts(prev => ({
      ...prev,
      [index]: isRemovingLike ? (prev[index] || 1) - 1 : (prev[index] || 0) + 1
    }));

    // Actualización en Firebase
    try {
      const docSnap = await getDoc(fraseRef);
      
      if (!docSnap.exists()) {
        // Si no existe el documento, lo creamos con 1 o 0 dependiendo de la acción
        await setDoc(fraseRef, {
          count: isRemovingLike ? 0 : 1,
          currentMonthLikes: isRemovingLike ? 0 : 1,
          last_liked: new Date()
        });
      } else {
        // Si existe, usamos increment(1) o increment(-1)
        await updateDoc(fraseRef, {
          count: increment(isRemovingLike ? -1 : 1),
          currentMonthLikes: increment(isRemovingLike ? -1 : 1),
          last_liked: new Date()
        });
      }
    } catch (error) {
      console.error("ERROR CRÍTICO: Firebase rechazó el like. Revisa las 'Rules' en la consola de Firebase.", error);
    }
  };

  const handleShare = (imageUrl: string) => {
    setSelectedShareTarget(findPhraseShareTargetByImage(imageUrl));
    setShareModalOpen(true);
  };

  // Ordenar frases por likes mensuales (mayor a menor)
  const sortedFrasesIndices = useMemo(() => {
    return frasesData
      .map((_, index) => index)
      .sort((a, b) => (monthlyLikeCounts[b] || 0) - (monthlyLikeCounts[a] || 0));
  }, [monthlyLikeCounts]);

  return (
    <section id="galeria" className="py-20 px-4 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-10 h-10 text-[#1A43CF]" />
            <h2 className="text-4xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent">
              Frases Más Gustadas
            </h2>
          </div>
          <p className="text-gray-600">
            Las frases favoritas de la comunidad este mes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedFrasesIndices.map((index) => {
            const frase = frasesData[index];
            return (
            <div
              key={frase.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => handleShare(frase.bgImage)}
            >
              <div className="w-full h-64 relative">
                <img
                  src={frase.bgImage}
                  alt={`Frase ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Share2 className="w-12 h-12 text-white" />
                </div>
              </div>
              <button
                onClick={(e) => handleLike(index, e)}
                className={`absolute top-4 right-4 z-10 backdrop-blur-sm p-2 rounded-full transition-all ${
                  liked[index] ? 'bg-red-50' : 'bg-white/90 hover:bg-white'
                }`}
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    liked[index] ? 'fill-red-500 text-red-500' : 'text-gray-700'
                  }`}
                />
              </button>
              <div className="absolute bottom-3 left-3">
                <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs">
                  <Heart className={`w-3.5 h-3.5 ${liked[index] ? 'fill-red-500' : ''}`} />
                  {monthlyLikeCounts[index] || 0}
                </span>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        shareTarget={selectedShareTarget}
      />
    </section>
  );
}