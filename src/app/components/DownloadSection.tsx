import { useState } from 'react';
import { Download } from 'lucide-react';

export default function DownloadSection() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && email) {
      setSubmitted(true);
      setNombre('');
      setEmail('');
    }
  };

  return (
    <section id="descargar" className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">

      {/* Elementos decorativos con colores de la paleta */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#547C5C] rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1A43CF] rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C6A13B] rounded-full blur-[120px]"></div>
      </div>

      {/* Patrón de puntos sutil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #1A43CF 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          {/* Icono con gradiente */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1A43CF]/10 to-[#8A47A8]/10 backdrop-blur-sm rounded-2xl mb-6 border border-[#1A43CF]/20 shadow-xl">
            <Download className="w-10 h-10 text-[#1A43CF]" />
          </div>

          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-6 tracking-tight">
            Empieza hoy tu transformación
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Recibe <span className="italic font-semibold text-gray-900">El Mindset Innovador</span> directamente en tu correo y comienza a desarrollar tu mentalidad innovadora.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A43CF] focus:border-transparent transition-all shadow-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 placeholder:text-gray-400 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A43CF] focus:border-transparent transition-all shadow-lg"
              required
            />

            <p className="text-sm text-gray-600 text-center py-2">
              Tranquilo, odiamos el spam. Solo te enviaremos el libro y no compartiremos tu correo.
            </p>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] hover:from-[#2555e3] hover:to-[#9b5ab9] text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95"
            >
              Descargar Gratis
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-white border-2 border-[#547C5C] rounded-2xl p-10 shadow-2xl">
            <div className="text-4xl mb-4">🎉</div>
            <p className="text-2xl text-[#547C5C] mb-2">
              ¡Todo listo!
            </p>
            <p className="text-gray-700">
              Revisa tu bandeja de entrada, <span className="italic font-semibold text-gray-900">El Mindset Innovador</span> está en camino.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}