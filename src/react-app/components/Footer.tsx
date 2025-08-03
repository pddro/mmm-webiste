import { Heart, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { SiSpotify } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 text-gray-800 relative">
      <div className="container mx-auto px-6 py-16" style={{ maxWidth: '1200px' }}>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold mb-6 text-turquoise-500">
              Mujeres que mueven montañas
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Inspirando a mujeres a través de historias poderosas de éxito y empoderamiento.
            </p>
            <div className="flex items-center text-gray-600">
              <span>Hecho con</span>
              <Heart className="w-5 h-5 text-red-400 mx-2" />
              <span>por Andrea Cardona</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6 text-gray-800">Enlaces rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-turquoise-500 transition-colors text-lg cursor-pointer"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); document.querySelector('[data-section="about"]')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-turquoise-500 transition-colors text-lg cursor-pointer"
                >
                  Sobre Andrea
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); document.querySelector('[data-section="teaser"]')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-turquoise-500 transition-colors text-lg cursor-pointer"
                >
                  Video
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); document.querySelector('[data-section="episodes"]')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-turquoise-500 transition-colors text-lg cursor-pointer"
                >
                  Episodios
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); document.querySelector('[data-section="contact"]')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-gray-600 hover:text-turquoise-500 transition-colors text-lg cursor-pointer"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="col-span-1">
            <h4 className="text-xl font-bold mb-6 text-gray-800">Síguenos</h4>
            <div className="space-y-4 mb-8">
              <a
                href="https://creators.spotify.com/pod/profile/andreacardonaeverest/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-turquoise-600 transition-all duration-300 group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <SiSpotify className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">Spotify</span>
              </a>
              <a
                href="https://www.instagram.com/mujeresquemuevenmontanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-turquoise-600 transition-all duration-300 group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@MujeresQueMuevenMontanas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 hover:text-turquoise-600 transition-all duration-300 group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Youtube className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">YouTube</span>
              </a>
            </div>
            <div className="text-gray-600">
              <p className="mb-3 font-semibold">Contacto:</p>
              <a 
                href="mailto:info@mujeresquemuevenmontanas.com" 
                className="text-turquoise-500 hover:text-turquoise-600 transition-colors text-lg"
              >
                info@mujeresquemuevenmontanas.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-lg mb-4 md:mb-0">
            © 2024 Mujeres que mueven montañas. Todos los derechos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center bg-turquoise-500 hover:bg-turquoise-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
