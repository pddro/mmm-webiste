import { Instagram, Youtube } from 'lucide-react';
import { SiSpotify } from 'react-icons/si';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-turquoise-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-turquoise-200/40 rounded-full blur-2xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(89,195,188,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20" style={{ maxWidth: '1200px' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-turquoise-50 border border-turquoise-200 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-turquoise-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-turquoise-700 text-sm font-medium">Nueva Temporada Disponible</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Mujeres que
                <span className="block text-turquoise-500">
                  mueven
                </span>
                <span className="block text-slate-900">
                  montañas
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Descubre historias poderosas de mujeres extraordinarias que están transformando el mundo. 
                Inspírate y encuentra tu propia fuerza interior.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="text-left">
                <p className="text-lg text-slate-600 mb-6">
                  Escucha el último episodio
                </p>
                <div className="space-y-4">
                  <a
                    href="https://creators.spotify.com/pod/profile/andreacardonaeverest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-600 hover:text-turquoise-600 transition-all duration-300 group"
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
                    className="flex items-center gap-4 text-slate-600 hover:text-turquoise-600 transition-all duration-300 group"
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
                    className="flex items-center gap-4 text-slate-600 hover:text-turquoise-600 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Youtube className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Podcast Artwork */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main artwork */}
              <div className="relative group">
                <img 
                  src="https://mocha-cdn.com/01986661-7557-748e-9843-a407ec004a49/square-logo.jpg"
                  alt="Mujeres que mueven montañas podcast artwork"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-turquoise-400/20 to-emerald-400/20 blur-2xl scale-110 -z-10"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg">
                <SiSpotify className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              
              {/* Stats badge */}
              <div className="absolute top-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-turquoise-500">2</div>
                  <div className="text-sm text-slate-600">temporadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
