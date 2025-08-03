import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 bg-turquoise-500" data-section="contact">
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto text-center">
          {/* Hero illustration */}
          <div className="mb-4">
            <img 
              src="https://mocha-cdn.com/01986661-7557-748e-9843-a407ec004a49/20250801_1148_Women-Conquering-Mount.png" 
              alt="Mujeres conquistando montañas - ilustración inspiradora"
              className="w-full max-w-[400px] h-auto mx-auto object-contain"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Conversemos
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            ¿Tienes una historia inspiradora? ¡Nos encantaría escucharte!
          </p>
          
          <a 
            href="mailto:info@mujeresquemuevenmontanas.com" 
            className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 inline-flex items-center hover:bg-white/30 hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <Mail className="w-6 h-6 text-white mr-3 group-hover:text-yellow-200 transition-colors" />
            <span className="text-white font-semibold text-lg group-hover:text-yellow-200 transition-colors">
              Contáctanos
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
