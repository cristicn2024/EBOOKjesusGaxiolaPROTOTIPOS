import { X, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle, Instagram } from 'lucide-react';
import { useState } from 'react';
import type { PhraseShareTarget } from './EbookSections';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareTarget: PhraseShareTarget | null;
}

export default function ShareModal({ isOpen, onClose, shareTarget }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = (() => {
    const url = new URL(window.location.origin + window.location.pathname);

    if (shareTarget) {
      url.searchParams.set('section', shareTarget.sectionId);
      url.searchParams.set('phrase', shareTarget.phraseId);
    }

    return url.toString();
  })();
  const shareText = 'Mira esta frase inspiradora de "El Mindset Innovador"';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleWhatsAppShare = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const handleInstagramShare = () => {
    window.open(
      'https://www.instagram.com/',
      '_blank',
      'width=600,height=400'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <h3 className="text-2xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-6">
          Compartir frase
        </h3>

        <div className="space-y-4">
          <button
            onClick={handleFacebookShare}
            className="w-full flex items-center gap-3 px-6 py-3 bg-[#1877F2] text-white rounded-xl hover:shadow-lg transition"
          >
            <Facebook className="w-5 h-5" />
            <span>Compartir en Facebook</span>
          </button>

          <button
            onClick={handleTwitterShare}
            className="w-full flex items-center gap-3 px-6 py-3 bg-[#1DA1F2] text-white rounded-xl hover:shadow-lg transition"
          >
            <Twitter className="w-5 h-5" />
            <span>Compartir en Twitter</span>
          </button>

          <button
            onClick={handleLinkedInShare}
            className="w-full flex items-center gap-3 px-6 py-3 bg-[#0A66C2] text-white rounded-xl hover:shadow-lg transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>Compartir en LinkedIn</span>
          </button>

          <button
            onClick={handleWhatsAppShare}
            className="w-full flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:shadow-lg transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Compartir en WhatsApp</span>
          </button>

          <button
            onClick={handleInstagramShare}
            className="w-full flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white rounded-xl hover:shadow-lg transition"
          >
            <Instagram className="w-5 h-5" />
            <span>Compartir en Instagram</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
          >
            <LinkIcon className="w-5 h-5" />
            <span>{copied ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
