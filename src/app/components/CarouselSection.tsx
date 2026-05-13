
import ebook1 from '../../imports/transformacionDigital.png';
import ebook2 from '../../imports/adminObjNeg.png';
import ebook3 from '../../imports/laInnovGest.png';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export default function CarouselSection() {
  

  const books = [
    {
      image: ebook1,
      title: 'Transformación Digital',
      url: 'https://mailchi.mp/cd0bb8b74ce2/ebook-transformacion'
    },
    {
      image: ebook2,
      title: 'Administración Por Objetivos de Negocios',
      url: 'https://mailchi.mp/2ef491ef39d1/ebook_axo'
    },
    {
      image: ebook3,
      title: 'La innovación también se gestiona',
      url: 'https://mailchi.mp/0c0416962841/ebook-gesinno'
    }
  ];

  const [visibleBooks, setVisibleBooks] = useState(books);
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  const showMore = () => {
    setVisibleBooks([...visibleBooks, ...books.slice(0, 3)]);
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
          

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {visibleBooks.map((book, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
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

          
        </div>

        
      </div>
    </section>
  );
}
