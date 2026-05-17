import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EbookSections, { findSectionById } from './components/EbookSections';
import type { EbookSection } from './components/EbookSections';
import InteractiveGallery from './components/InteractiveGallery';
import Comparador from './components/Comparador';
import CarouselSection from './components/CarouselSection';
import AuthorSection from './components/AuthorSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import SectionModal from './components/SectionModal';
import { resetMonthlyLikesIfNeeded } from '../lib/monthlyReset';

export default function App() {
  const [modalSection, setModalSection] = useState<EbookSection | null>(null);
  const [highlightedPhraseId, setHighlightedPhraseId] = useState<string | null>(null);

  // Ejecutar reset mensual al cargar la aplicación
  useEffect(() => {
    resetMonthlyLikesIfNeeded();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sectionId = params.get('section');
    const phraseId = params.get('phrase');

    if (!sectionId || !phraseId) return;

    const section = findSectionById(sectionId);
    const phraseExists = section?.frases.some((frase) => frase.id === phraseId);

    if (!section || !phraseExists) return;

    window.setTimeout(() => {
      document.getElementById('secciones')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setModalSection(section);
      setHighlightedPhraseId(phraseId);
    }, 100);
  }, []);

  const handleSectionClick = (section: EbookSection) => {
    setHighlightedPhraseId(null);
    setModalSection(section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EbookSections onSectionClick={handleSectionClick} />
      <InteractiveGallery />
      <Comparador />
      <CarouselSection />
      <AuthorSection />
      <DownloadSection />
      <Footer />

      <SectionModal
        isOpen={!!modalSection}
        onClose={() => {
          setModalSection(null);
          setHighlightedPhraseId(null);
        }}
        section={modalSection}
        highlightedPhraseId={highlightedPhraseId}
        onHighlightComplete={() => setHighlightedPhraseId(null)}
      />
    </div>
  );
}
