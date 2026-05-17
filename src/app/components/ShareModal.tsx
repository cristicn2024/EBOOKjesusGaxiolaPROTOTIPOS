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
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const shareUrl = `${window.location.origin}/share?section=${shareTarget?.sectionId}&phrase=${shareTarget?.phraseId}`;

  const shareText = 'Mira esta frase inspiradora de "El Mindset Innovador"';
  const isMobile = typeof navigator !== 'undefined' && !!navigator.share && typeof navigator.canShare === 'function';

  const getImageFile = async (): Promise<File | null> => {
  if (!phraseImage) return null;

  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = phraseImage;
    });

    if (!img.naturalWidth) return null;

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.drawImage(img, 0, 0);

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, 'image/png');
    });

    if (!blob) return null;

    return new File([blob], 'frase-mindset.png', { type: 'image/png' });
  } catch (err) {
    console.warn('Error generando imagen:', err);
    return null;
  }
};

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const file = await getImageFile();
      if (!file) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.download = 'frase-mindset.png';
      a.click();
      URL.revokeObjectURL(a.href);
    } finally {
      setDownloading(false);
    }
  };

  const handleNativeShare = async () => {
    try {
      const file = await getImageFile();
      const canShareFile = file && navigator.canShare({ files: [file] });
      await navigator.share({
        title: 'El Mindset Innovador',
        text: shareText,
        url: shareUrl,
        ...(canShareFile ? { files: [file!] } : {}),
      });
    } catch { /* cancelado */ }
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

  const handleWhatsAppShare = () => {
  window.open(
    `https://wa.me/?text=${encodeURIComponent(
      `${shareText} ${shareUrl}`
    )}`,
    '_blank'
  );
};

  const handleInstagramShare = () => {
  window.open("https://www.instagram.com/", "_blank");
};

  function SocialButton({
  icon,
  label,
  onClick,
  color,
  disabled,
}: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition hover:shadow-md disabled:opacity-50 ${color}`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* Modal */}
    <div className="relative z-10 w-full max-w-xl rounded-3xl bg-white shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Compartir frase
        </h3>

        <button
          onClick={onClose}
          className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-6 p-6 md:flex-row">

        {/* Image */}
        {phraseImage && (
          <div className="flex flex-col items-center">
            <img
              src={phraseImage}
              alt="Frase inspiradora"
              className="h-64 w-64 rounded-2xl border border-gray-200 object-cover shadow-lg"
            />

            {!isMobile && (
              <p className="mt-2 max-w-[12rem] text-center text-[11px] text-gray-500">
                WhatsApp e Instagram descargan la imagen automáticamente
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-1 flex-col gap-3">

          {/* Primary action group */}
          <div className="space-y-2">

            <SocialButton
              color="bg-[#1877F2] hover:bg-[#166FE5]"
              icon={<Facebook className="h-4 w-4" />}
              label="Facebook"
              onClick={handleFacebookShare}
            />

            <SocialButton
              color="bg-[#1DA1F2] hover:bg-[#0D8DE1]"
              icon={<Twitter className="h-4 w-4" />}
              label="Twitter / X"
              onClick={handleTwitterShare}
            />

            <SocialButton
              color="bg-[#0A66C2] hover:bg-[#084C93]"
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              onClick={handleLinkedInShare}
            />
          </div>

          {/* Messaging */}
          <div className="pt-2 border-t border-gray-100 space-y-2">

            <SocialButton
              color="bg-[#25D366] hover:bg-[#1EBE5D]"
              icon={<MessageCircle className="h-4 w-4" />}
              label={isMobile ? 'WhatsApp' : 'WhatsApp + imagen'}
              onClick={handleWhatsAppShare}
            />

            <SocialButton
              color="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040]"
              icon={<Instagram className="h-4 w-4" />}
              label={isMobile ? 'Instagram' : 'Instagram + imagen'}
              onClick={handleInstagramShare}
            />
          </div>

          {/* Utilities */}
          <div className="pt-2 border-t border-gray-100 space-y-2">

            <SocialButton
              color="bg-gray-900 hover:bg-black text-white"
              icon={<Download className="h-4 w-4" />}
              label={downloading ? 'Descargando...' : 'Descargar imagen'}
              onClick={handleDownload}
              disabled={downloading}
            />

            <SocialButton
              color="bg-gray-100 hover:bg-gray-200 text-gray-800"
              icon={<LinkIcon className="h-4 w-4" />}
              label={copied ? '¡Enlace copiado!' : 'Copiar enlace'}
              onClick={handleCopyLink}
            />

          </div>
        </div>
      </div>
    </div>
  </div>
);
}