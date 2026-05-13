import { useState } from 'react';
import { Heart, TrendingUp, Share2 } from 'lucide-react';
import ShareModal from './ShareModal';
import { findPhraseShareTargetByImage } from './EbookSections';
import type { PhraseShareTarget } from './EbookSections';
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

export default function InteractiveGallery() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedShareTarget, setSelectedShareTarget] = useState<PhraseShareTarget | null>(null);

  const frases = [
    { text: '', bgImage: img8, likes: 89 },
    { text: '', bgImage: img9, likes: 100 },
    { text: '', bgImage: img10, likes: 33 },
    { text: '', bgImage: img11, likes: 56 },
    { text: '', bgImage: img12, likes: 134 },
    { text: '', bgImage: img13, likes: 21 },
    { text: '', bgImage: img100, likes: 234 },
    { text: '', bgImage: img111, likes: 76 },
    { text: '', bgImage: img98, likes: 45 },
    { text: '', bgImage: img92, likes: 12 },
    { text: '', bgImage: img104, likes: 91 },
    { text: '', bgImage: img93, likes: 67 }
  ];

  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(
    frases.reduce((acc, frase, idx) => ({ ...acc, [idx]: frase.likes }), {})
  );

  const handleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(prev => {
      const newLiked = { ...prev, [index]: !prev[index] };
      setLikeCounts(counts => ({
        ...counts,
        [index]: counts[index] + (newLiked[index] ? 1 : -1)
      }));
      return newLiked;
    });
  };

  const handleShare = (imageUrl: string) => {
    setSelectedShareTarget(findPhraseShareTargetByImage(imageUrl));
    setShareModalOpen(true);
  };

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
            Las frases favoritas de la comunidad en este momento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {frases.map((frase, index) => (
            <div
              key={index}
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

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        shareTarget={selectedShareTarget}
      />
    </section>
  );
}
