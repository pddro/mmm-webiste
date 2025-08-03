import { useState, useEffect, useRef } from 'react';
import { Play, Calendar, ExternalLink, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

interface Episode {
  title: string;
  description: string;
  image: string;
  spotifyUrl: string;
  pubDate: string;
  guid: string;
}

export default function EpisodesSection() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('/api/episodes');
        const data = await response.json();
        
        if (data.success) {
          setEpisodes(data.episodes);
        } else {
          setError('Error al cargar los episodios');
        }
      } catch (err) {
        setError('Error de conexión');
        console.error('Error fetching episodes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  useEffect(() => {
    const handleScroll = () => updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      // Initial check
      setTimeout(updateScrollButtons, 100);
    }
    
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [episodes]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Fecha no disponible';
    }
  };

  if (loading) {
    return (
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-turquoise-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-turquoise-50 border border-turquoise-200 rounded-full px-4 py-2 mb-8">
                <Headphones className="w-4 h-4 mr-2 text-turquoise-600" />
                <span className="text-sm font-medium text-turquoise-700">Últimos Episodios</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Cargando episodios...
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-turquoise-500"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-turquoise-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-600 text-lg">{error}</p>
            <a
              href="https://creators.spotify.com/pod/profile/andreacardonaeverest/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center bg-turquoise-500 hover:bg-turquoise-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver en Spotify
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-turquoise-50" data-section="episodes">
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-turquoise-50 border border-turquoise-200 rounded-full px-4 py-2 mb-8">
              <Headphones className="w-4 h-4 mr-2 text-turquoise-600" />
              <span className="text-sm font-medium text-turquoise-700">Últimos Episodios</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              Descubre nuestras
              <span className="block text-turquoise-500">
                historias más recientes
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explora los episodios más recientes del podcast y encuentra la inspiración que necesitas
            </p>
          </div>

          {/* Episodes horizontal scroll */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <Play className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <Headphones className="w-8 h-8 text-white" />
            </div>

            {/* Episodes container */}
            <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
              {/* Navigation arrows */}
              <button
                onClick={scrollLeft}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                  canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-40 cursor-not-allowed'
                }`}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="w-6 h-6 text-turquoise-600" />
              </button>
              
              <button
                onClick={scrollRight}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                  canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-40 cursor-not-allowed'
                }`}
                disabled={!canScrollRight}
              >
                <ChevronRight className="w-6 h-6 text-turquoise-600" />
              </button>

              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto" 
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
              >
                <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                  {episodes.map((episode, index) => (
                    <div
                      key={episode.guid || index}
                      className="flex-shrink-0 w-80 group cursor-pointer"
                      onClick={() => window.open(episode.spotifyUrl, '_blank')}
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                        {/* Episode Image */}
                        <div className="relative aspect-square">
                          {episode.image ? (
                            <img
                              src={episode.image}
                              alt={episode.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-turquoise-400 to-emerald-500 flex items-center justify-center">
                              <Headphones className="w-16 h-16 text-white" />
                            </div>
                          )}
                          
                          {/* Play overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                              <Play className="w-8 h-8 text-turquoise-500 ml-1" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Episode Info */}
                        <div className="p-6">
                          <div className="flex items-center text-turquoise-600 text-sm mb-3">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(episode.pubDate)}
                          </div>
                          
                          <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight" style={{ 
                            display: '-webkit-box', 
                            WebkitLineClamp: 2, 
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden' 
                          }}>
                            {episode.title}
                          </h3>
                          
                          <p className="text-slate-600 text-sm leading-relaxed mb-4" style={{ 
                            display: '-webkit-box', 
                            WebkitLineClamp: 3, 
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden' 
                          }}>
                            {episode.description}
                          </p>
                          
                          <div className="flex items-center text-turquoise-600 font-medium text-sm group-hover:text-turquoise-700 transition-colors">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Escuchar en Spotify
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-turquoise-400/10 to-emerald-400/10 blur-3xl scale-110 -z-10"></div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 mb-6">
              ¿Quieres escuchar todos nuestros episodios?
            </p>
            <a
              href="https://creators.spotify.com/pod/profile/andreacardonaeverest/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Ver todos en Spotify
            </a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </section>
  );
}
