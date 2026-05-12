import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  

  return (
   
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4 relative overflow-hidden border-t border-gray-200">

      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A43CF] rounded-full blur-[120px]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8A47A8] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#1A43CF] to-[#8A47A8] bg-clip-text text-transparent">
               El Mindset Innovador
            </h3>
            <p className="text-gray-600 max-w-sm leading-relaxed">
              Transforma tu mentalidad y crea el futuro que imaginas. Un recurso diseñado para mentes disruptivas.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Sígueme</h4>
            <div className="flex gap-3">
              <SocialLink href="https://www.facebook.com/share/1Ekfy4spSL/?mibextid=wwXIfr" icon={<Facebook />} hoverColor="hover:bg-[#1A43CF]" />
              <SocialLink href="https://x.com/jesusgaxiola" icon={<Twitter />} hoverColor="hover:bg-[#547C5C]" />
              <SocialLink href="https://www.instagram.com/_jesusgaxiola?igsh=MTczdnVkYjllZzc4dw==" icon={<Instagram />} hoverColor="hover:bg-[#EE5A41]" />
              <SocialLink href="https://mx.linkedin.com/in/jesusgaxiola" icon={<Linkedin />} hoverColor="hover:bg-[#1A43CF]" />
              <SocialLink href="mailto:contacto@mindsetinnovador.com" icon={<Mail />} hoverColor="hover:bg-[#8A47A8]" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} <span className="text-gray-700 font-medium">Jesús Gaxiola</span>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// Sub-componente para limpiar el código
function SocialLink({ href, icon, hoverColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${hoverColor} hover:shadow-lg text-gray-600 hover:text-white`}
    >
      {window.React && window.React.cloneElement(icon, { className: "w-5 h-5" })}
      {!window.React && icon}
    </a>
  );
}