import { X, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle, Instagram, Download } from 'lucide-react';
import { useState } from 'react';
import type { PhraseShareTarget } from './EbookSections';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareTarget: PhraseShareTarget | null;
  phraseImage?: string; 
}

export default function ShareModal({ isOpen, onClose, shareTarget, phraseImage }: ShareModalProps) {
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

  // ── Utilidad: convierte el src de la imagen a un File blob ──────────────
  const getImageFile = async (): Promise<File | null> => {
    if (!phraseImage) return null;
    try {
      const res = await fetch(phraseImage);
      const blob = await res.blob();
      return new File([blob], 'frase-mindset.png', { type: 'image/png' });
    } catch {
      return null;
    }
  };

  // ── Web Share API (WhatsApp móvil, Instagram, y fallback general) ─────────────────────────
  const handleNativeShare = async () => {
    const file = await getImageFile();
    const shareData: ShareData = {
      title: 'El Mindset Innovador',
      text: shareText,
      url: shareUrl,
      ...(file && navigator.canShare?.({ files: [file] }) ? { files: [file] } : {}),
    };
    try {
      await navigator.share(shareData);
    } catch (e) {
      // usuario canceló o no soportado
    }
  };

  // ── Descarga directa del PNG ────────────────────────────────────────────
  const handleDownload = async () => {
    const file = await getImageFile();
    if (!file) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'frase-mindset.png';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFacebookShare = () =>
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');

  const handleTwitterShare = () =>
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');

  const handleLinkedInShare = () =>
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');


  const handleWhatsAppShare = async () => {
    if ('share' in navigator) {
      await handleNativeShare();
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
    }
  };

  const handleInstagramShare = async () => {
    if ('share' in navigator) {
      await handleNativeShare();
    } else {
      await handleDownload();
      alert('Imagen descargada. Súbela manualmente a Instagram Stories o Feed.');
    }
  };

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* Modal */}
    <div className="relative bg-white rounded-3xl shadow-2xl max-w-6xl mx-4 p-8 z-10">

      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>

      {/* Título */}
      <h3 className="text-3xl font-semibold bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-8">
        Compartir frase
      </h3>

      {/* Layout horizontal */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

        {/* Imagen */}
        {phraseImage && (
          <div className="flex justify-center items-center flex-shrink-0">
            <img
              src={phraseImage}
              alt="Frase a compartir"
              className="
                max-w-[500px]
                max-h-[500px]
                w-auto
                h-auto
                rounded-3xl
                shadow-xl
                border border-gray-100
                object-contain
                bg-white
              "
            />
          </div>
        )}

        {/* Botones */}
        <div className="flex-1 space-y-4">

          <button
            onClick={handleFacebookShare}
            className="w-full flex items-center gap-3 px-6 py-4 bg-[#1877F2] text-white rounded-2xl hover:shadow-lg transition"
          >
            <Facebook className="w-5 h-5" />
            <span>Compartir en Facebook</span>
          </button>

          <button
            onClick={handleTwitterShare}
            className="w-full flex items-center gap-3 px-6 py-4 bg-[#1DA1F2] text-white rounded-2xl hover:shadow-lg transition"
          >
            <Twitter className="w-5 h-5" />
            <span>Compartir en Twitter</span>
          </button>

          <button
            onClick={handleLinkedInShare}
            className="w-full flex items-center gap-3 px-6 py-4 bg-[#0A66C2] text-white rounded-2xl hover:shadow-lg transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>Compartir en LinkedIn</span>
          </button>

          <button
            onClick={handleWhatsAppShare}
            className="w-full flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-2xl hover:shadow-lg transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Compartir en WhatsApp</span>
          </button>

          <button
            onClick={handleInstagramShare}
            className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white rounded-2xl hover:shadow-lg transition"
          >
            <Instagram className="w-5 h-5" />
            <span>Compartir en Instagram</span>
          </button>

          <button
            onClick={handleDownload}
            className="w-full flex items-center gap-3 px-6 py-4 bg-purple-100 text-purple-700 rounded-2xl hover:bg-purple-200 transition"
          >
            <Download className="w-5 h-5" />
            <span>Descargar imagen</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full flex items-center gap-3 px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition"
          >
            <LinkIcon className="w-5 h-5" />
            <span>
              {copied ? '¡Enlace copiado!' : 'Copiar enlace'}
            </span>
          </button>

        </div>
      </div>
    </div>
  </div>
);
}