import { useState, useEffect } from 'react';
import { X, Heart, Share2 } from 'lucide-react';
import ShareModal from './ShareModal';
import type { EbookSection, EbookPhrase, PhraseShareTarget } from './EbookSections';

// 1. Importamos Firebase
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface SectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: EbookSection | null;
  highlightedPhraseId?: string | null;
  onHighlightComplete?: () => void;
}

export default function SectionModal({
  isOpen,
  onClose,
  section,
  highlightedPhraseId,
  onHighlightComplete,
}: SectionModalProps) {
  // Ahora usamos string (frase.id) en lugar de number (index) para evitar que se mezclen secciones
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedShareTarget, setSelectedShareTarget] = useState<PhraseShareTarget | null>(null);
<<<<<<< HEAD

  // 2. Cargar datos de Firebase y LocalStorage al abrir el modal
=======
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
>>>>>>> Asiel&Cristi_Branch
  useEffect(() => {
    if (!isOpen || !section?.frases) return;

    // Cargar likes locales (para saber si el usuario ya votó)
    const savedLikes = JSON.parse(localStorage.getItem('user_likes') || '{}');
    setLiked(savedLikes);

    // Cargar conteos reales desde Firebase
    const fetchLikes = async () => {
      const counts: Record<string, number> = {};
      
      const loadPromises = section.frases.map(async (frase) => {
        // Usamos el ID único de la frase (ej: 'semilla-1')
        const docRef = doc(db, 'frases', frase.id);
        try {
          const docSnap = await getDoc(docRef);
          counts[frase.id] = docSnap.exists() ? docSnap.data().count : 0;
        } catch (err) {
          console.error(`Error leyendo ${frase.id}:`, err);
          counts[frase.id] = 0;
        }
      });

      await Promise.all(loadPromises);
      setLikeCounts(counts);
    };

    fetchLikes();
  }, [section, isOpen]);

  useEffect(() => {
    if (!isOpen || !highlightedPhraseId) return;

    const scrollTimer = window.setTimeout(() => {
      const phraseElement = document.getElementById(`phrase-${highlightedPhraseId}`);
      phraseElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);

    const clearTimer = window.setTimeout(() => {
      onHighlightComplete?.();
    }, 4500);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(clearTimer);
    };
  }, [highlightedPhraseId, isOpen, onHighlightComplete]);

  if (!isOpen || !section) return null;

  // 3. Lógica de dar/quitar Like conectada a Firebase
  const handleLike = async (frase: EbookPhrase) => {
    const fraseId = frase.id;
    const fraseRef = doc(db, 'frases', fraseId);
    const isRemovingLike = liked[fraseId];

    // Actualización visual inmediata
    setLiked(prev => {
      const newState = { ...prev };
      if (isRemovingLike) {
        delete newState[fraseId];
      } else {
        newState[fraseId] = true;
      }
      localStorage.setItem('user_likes', JSON.stringify(newState));
      return newState;
    });

    setLikeCounts(prev => ({
      ...prev,
      [fraseId]: isRemovingLike ? Math.max(0, (prev[fraseId] || 1) - 1) : (prev[fraseId] || 0) + 1
    }));

    // Actualización en Firebase
    try {
      const docSnap = await getDoc(fraseRef);
      
      if (!docSnap.exists()) {
        await setDoc(fraseRef, {
          count: isRemovingLike ? 0 : 1,
          last_liked: new Date()
        });
      } else {
        await updateDoc(fraseRef, {
          count: increment(isRemovingLike ? -1 : 1),
          last_liked: new Date()
        });
      }
    } catch (error) {
      console.error("Error al guardar el like en Firebase:", error);
    }
  };


const handleShare = (frase: EbookPhrase) => {
  setSelectedShareTarget({
    sectionId: section.id,
    phraseId: frase.id,
    imageUrl: frase.bgImage,
  });
  setSelectedImage(frase.bgImage); // 👈
  setShareModalOpen(true);
};


  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <h2 className={`text-3xl bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                {section.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.frases.map((frase, index) => (
                <div
                  id={`phrase-${frase.id}`}
                  key={frase.id}
                  className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    highlightedPhraseId === frase.id
                      ? 'animate-[phrase-highlight_1s_ease-in-out_4] ring-4 ring-[#1A43CF]/70'
                      : ''
                  }`}
                >
                  <div className="w-full h-64 relative cursor-pointer" onClick={() => handleShare(frase)}>
                    <img
                      src={frase.bgImage}
                      alt={`Frase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {frase.text && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center p-6">
                        <p className="text-white text-center leading-relaxed">
                          "{frase.text}"
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Share2 className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(frase)}
                    className={`absolute top-4 right-4 z-10 backdrop-blur-sm p-2 rounded-full transition-all ${
                      liked[frase.id] ? 'bg-red-50' : 'bg-white/90 hover:bg-white'
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        liked[frase.id] ? 'fill-red-500 text-red-500' : 'text-gray-700'
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs">
                      <Heart className={`w-3.5 h-3.5 ${liked[frase.id] ? 'fill-red-500' : ''}`} />
                      {likeCounts[frase.id] || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        shareTarget={selectedShareTarget}
        phraseImage={selectedImage ?? undefined}
      />
    </div>
  );
}