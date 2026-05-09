import { useState } from 'react';
import { RefreshCw, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const frases = [
    "El éxito no es el final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
    "La innovación distingue a un líder de un seguidor.",
    "No te preocupes por el fracaso, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "El emprendedor siempre busca el cambio, responde a él y lo aprovecha como una oportunidad.",
    "Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona.",
    "La mejor manera de predecir el futuro es crearlo.",
    "Las grandes cosas en los negocios nunca las hace una sola persona, las hace un equipo.",
    "No tengas miedo de renunciar a lo bueno para ir a por lo grandioso.",
    "El único lugar donde el éxito viene antes del trabajo es en el diccionario.",
    "Hacer lo mejor en este momento te coloca en el mejor lugar para el siguiente momento."
  ];

  const [currentFrase, setCurrentFrase] = useState(0);

  const handleNext = () => {
    setCurrentFrase((prev) => (prev + 1) % frases.length);
  };

  const handleReload = () => {
    setCurrentFrase(Math.floor(Math.random() * frases.length));
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-white px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#EE5A41]/40 to-[#C6A13B]/40 rounded-3xl blur-3xl opacity-20"></div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-200">
            <p className="text-3xl md:text-4xl text-gray-800 leading-relaxed">
              "{frases[currentFrase]}"
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-gradient-to-r from-[#EE5A41] to-[#C6A13B]  text-white px-8 py-4 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            Siguiente
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleReload}
            className="flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full border border-gray-300 hover:shadow-lg transition-all transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            Recargar
          </button>
        </div>
      </div>
    </section>
  );
}
