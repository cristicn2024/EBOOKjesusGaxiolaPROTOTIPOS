import { Brain, Lightbulb, Zap } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: 'Pensamiento creativo',
      color: 'from-[#C6A13B] to-[#D4B456]'
    },
    {
      icon: Lightbulb,
      title: 'Resolución de problemas',
      color: 'from-[#547C5C] to-[#679073]'
    },
    {
      icon: Zap,
      title: 'Adaptabilidad',
      color: 'from-[#1A43CF] to-[#3D5FDB]'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent">
            Sobre <span className="italic">El Mindset Innovador</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="italic font-semibold">El Mindset Innovador</span> reúne más de cien frases que no buscan ser fórmulas mágicas ni recetas rápidas, sino destellos que invitan a detenerse activar la creatividad y reflexionar. Cada una de ellas nace de mi experiencia acompañando a personas y organizaciones en sus procesos de creatividad e innovación.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
           No están escritas para ser leídas de forma lineal: cada frase es una chispa que puede encenderse en distintos momentos, y lo que hoy significa una cosa para ti, mañana puede inspirarte de otra manera.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
