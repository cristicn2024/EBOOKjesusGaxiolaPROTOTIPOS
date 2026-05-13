import { useState, useEffect } from 'react';
import { X, Heart, Share2 } from 'lucide-react';
import ShareModal from './ShareModal';
import type { EbookSection, EbookPhrase, PhraseShareTarget } from './EbookSections';

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
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedShareTarget, setSelectedShareTarget] = useState<PhraseShareTarget | null>(null);

  useEffect(() => {
    if (section?.frases) {
      setLikeCounts(
        section.frases.reduce((acc, frase, idx) => ({ ...acc, [idx]: frase.likes }), {})
      );
      setLiked({});
    }
  }, [section]);

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

  const handleLike = (index: number) => {
    setLiked(prev => {
      const newLiked = { ...prev, [index]: !prev[index] };
      setLikeCounts(counts => ({
        ...counts,
        [index]: counts[index] + (newLiked[index] ? 1 : -1)
      }));
      return newLiked;
    });
  };

  const handleShare = (frase: EbookPhrase) => {
    setSelectedShareTarget({
      sectionId: section.id,
      phraseId: frase.id,
      imageUrl: frase.bgImage,
    });
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
                    onClick={() => handleLike(index)}
                    className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
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
                      {likeCounts[index]}
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
      />
    </div>
  );
}
