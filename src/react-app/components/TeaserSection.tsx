import { Play, Star } from 'lucide-react';

export default function TeaserSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-turquoise-50 via-white to-emerald-50" data-section="teaser">
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-turquoise-50 border border-turquoise-200 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 mr-2 text-turquoise-600" />
              <span className="text-sm font-medium text-turquoise-700">Experiencia</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              Descubre el poder de las
              <span className="block text-turquoise-500">
                historias inspiradoras
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Un vistazo al contenido que está transformando vidas y empoderando mujeres alrededor del mundo
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <Play className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <Star className="w-8 h-8 text-white" />
            </div>

            {/* Video wrapper with responsive aspect ratio */}
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/kwFcZ0il9cU"
                  title="Mujeres que Mueven Montañas - Video Teaser"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-turquoise-400/10 to-emerald-400/10 blur-3xl scale-110 -z-10"></div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-6">
              ¿Lista para ser parte de esta comunidad inspiradora?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://creators.spotify.com/pod/profile/andreacardonaeverest/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Escuchar en Spotify
              </a>
              <a
                href="https://www.youtube.com/@MujeresQueMuevenMontanas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-turquoise-600 border-2 border-turquoise-500 hover:bg-turquoise-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ver más videos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
