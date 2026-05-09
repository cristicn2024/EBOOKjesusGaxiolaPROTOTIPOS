import { Linkedin, Youtube, Globe, Twitter, Award, Users, Presentation, BookOpen } from 'lucide-react';

export default function AuthorSection() {
  const stats = [
    { icon: Presentation, number: '+150', label: 'Conferencias internacionales' },
    { icon: Users, number: '+100', label: 'Talleres impartidos' },
    { icon: Award, number: '4', label: 'Empresas fundadas' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/jesusgaxiola',
      label: 'LinkedIn',
      color: 'hover:bg-[#1A43CF]'
    },
    {
      icon: Twitter,
      url: 'https://x.com/jesusgaxiola',
      label: 'X (Twitter)',
      color: 'hover:bg-gray-800'
    },
    {
      icon: Globe,
      url: 'https://jesusgaxiola.com',
      label: 'Website',
      color: 'hover:bg-[#547C5C]'
    },
    {
      icon: Youtube,
      url: 'https://youtube.com/@jesusgaxiola',
      label: 'YouTube',
      color: 'hover:bg-[#EE5A41]'
    }
  ];

  return (
    <section id="autor" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-4">
            Acerca del Autor
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Información del autor */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl mb-2">
                <span className="block text-gray-800">Jesús Antonio</span>
                <span className="block bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent">
                  Gaxiola
                </span>
              </h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Maestro universitario a nivel pregrado y posgrado. Coach de negocios y de emprendedores.
                Ayuda a empresas a establecer la gestión exitosa de la innovación.
              </p>
              <p>
                Creador de metodologías para el impulso de la innovación en las personas y empresas.
                Fundador de <span className="font-semibold text-gray-900">Sahuarolabs</span>, <span className="font-semibold text-gray-900">Yaquivalley</span>,
                <span className="font-semibold text-gray-900"> Vertical</span> y <span className="font-semibold text-gray-900">Be-Analítica</span>.
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${social.color} hover:text-white hover:shadow-lg text-gray-700`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna derecha - Stats y logros */}
          <div className="space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A43CF]/10 to-[#8A47A8]/10 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#1A43CF]" />
                    </div>
                    <div>
                      <div className="text-3xl bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Logros adicionales */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-[#1A43CF] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experiencia Internacional</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Conferencias en empresas, cámaras empresariales, congresos y universidades
                    de <span className="font-semibold">México, Colombia, Perú y España</span>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <BookOpen className="w-5 h-5 text-[#8A47A8] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Autor Publicado</h4>
                  <p className="text-sm text-gray-700">
                    Varios ebooks sobre negocios, transformación digital e innovación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
