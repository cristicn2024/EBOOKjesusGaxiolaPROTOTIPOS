import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EbookSections from './components/EbookSections';
import InteractiveGallery from './components/InteractiveGallery';
import Comparador from './components/Comparador';
import CarouselSection from './components/CarouselSection';
import AuthorSection from './components/AuthorSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import SectionModal from './components/SectionModal';

export default function App() {
  const [modalSection, setModalSection] = useState<{
    title: string;
    gradient: string;
    frases: Array<{
      text: string;
      bgImage: string;
      likes: number;
    }>;
  } | null>(null);

  const handleSectionClick = (section: {
    title: string;
    gradient: string;
    frases: Array<{
      text: string;
      bgImage: string;
      likes: number;
    }>;
  }) => {
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
        onClose={() => setModalSection(null)}
        section={modalSection}
      />
    </div>
  );
}