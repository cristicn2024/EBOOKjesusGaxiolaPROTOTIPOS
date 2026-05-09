import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CarouselSection() {
  const books = [
    {
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400',
      title: 'Innovación Práctica',
      url: '#libro1'
    },
    {
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400',
      title: 'Liderazgo Efectivo',
      url: '#libro2'
    },
    {
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400',
      title: 'Estrategias de Éxito',
      url: '#libro3'
    },
    {
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=400',
      title: 'Mentalidad Ganadora',
      url: '#libro4'
    },
    {
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400',
      title: 'El Arte de Emprender',
      url: '#libro5'
    },
    {
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=400',
      title: 'Creatividad Sin Límites',
      url: '#libro6'
    },
    {
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400',
      title: 'Visión Empresarial',
      url: '#libro7'
    },
    {
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=400',
      title: 'Transformación Digital',
      url: '#libro8'
    },
    {
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400',
      title: 'Camino al Éxito',
      url: '#libro9'
    },
    {
      image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=400',
      title: 'Pasión y Propósito',
      url: '#libro10'
    }
  ];

  const [visibleBooks, setVisibleBooks] = useState(books);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const showMore = () => {
    setVisibleBooks([...visibleBooks, ...books.slice(0, 5)]);
  };

  return (
    <section id="explorar" className="py-20 px-4 bg-gradient-to-br from-white via-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl bg-gradient-to-r from-[#1A43CF] to-[#1A43CF] bg-clip-text text-transparent mb-4">
            Más del autor
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {visibleBooks.map((book, index) => (
              <a
                key={index}
                href={book.url}
                className="flex-shrink-0 w-64 group block"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white space-y-2">
                      <p className="text-lg">
                        {book.title}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span>Ver más</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        
      </div>
    </section>
  );
}
