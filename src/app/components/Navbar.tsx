import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#EE5A41] to-[#C6A13B] bg-clip-text text-transparent font-bold text-xl">
              El Mindset Innovador
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#1A43CF] transition">
              Inicio
            </button>
            <button onClick={() => scrollToSection('secciones')} className="text-gray-700 hover:text-[#1A43CF] transition">
              Secciones
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-[#1A43CF] transition">
              Galería
            </button>
            <button onClick={() => scrollToSection('comparador')} className="text-gray-700 hover:text-[#1A43CF] transition">
              Comparador
            </button>
            <button onClick={() => scrollToSection('explorar')} className="text-gray-700 hover:text-[#1A43CF] transition">
              Explorar
            </button>
            <button onClick={() => scrollToSection('autor')} className="text-gray-700 hover:text-[#1A43CF] transition">
              Autor
            </button>
            <button
              onClick={() => scrollToSection('descargar')}
              className="bg-gradient-to-r from-[#EE5A41] to-[#C6A13B] text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Descargar Libro
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Inicio
            </button>
            <button onClick={() => scrollToSection('secciones')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Secciones
            </button>
            <button onClick={() => scrollToSection('galeria')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Galería
            </button>
            <button onClick={() => scrollToSection('comparador')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Comparador
            </button>
            <button onClick={() => scrollToSection('explorar')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Explorar
            </button>
            <button onClick={() => scrollToSection('autor')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Autor
            </button>
            <button
              onClick={() => scrollToSection('descargar')}
              className="block w-full bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] text-white px-4 py-2 rounded-full"
            >
              Descargar Libro
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
