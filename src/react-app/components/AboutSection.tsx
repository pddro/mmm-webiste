import { Mic, Heart, Users, Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-32 bg-white" data-section="about">
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-turquoise-50 border border-turquoise-200 rounded-full px-4 py-2 mb-8">
              <Heart className="w-4 h-4 mr-2 text-turquoise-600" />
              <span className="text-sm font-medium text-turquoise-700">Conoce a la anfitriona</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              Andrea Cardona
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Apasionada por las historias que inspiran y empoderan a mujeres de todo el mundo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Andrea's Photo */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main photo */}
                <div className="relative group">
                  <img 
                    src="https://mocha-cdn.com/01986661-7557-748e-9843-a407ec004a49/andrea-cardona---square.png"
                    alt="Andrea Cardona en expedición"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 object-cover"
                  />
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-turquoise-400/20 to-emerald-400/20 blur-2xl scale-110 -z-10"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-turquoise-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                
                {/* Achievement badge */}
                <div className="absolute top-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-turquoise-500">2010</div>
                    <div className="text-sm text-slate-600">Everest</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  <span className="font-semibold text-turquoise-600">Andrea Cardona</span> es una montañista guatemalteca, 
                  la primera mujer centroamericana en conquistar el Monte Everest y la primera 
                  latinoamericana en completar el <span className="font-semibold text-turquoise-500">Adventurers Grand Slam</span>.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Ahora comparte su historia inspiradora a través del podcast 
                  <span className="font-semibold text-turquoise-500">"Mujeres que mueven montañas"</span>, 
                  motivando a otras mujeres a superar sus propios desafíos.
                </p>
              </div>
              
              <div className="bg-turquoise-50 border border-turquoise-100 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-3 text-turquoise-600" />
                  Logros Extraordinarios
                </h3>
                <div className="space-y-3">
                  <p className="text-base text-slate-700">
                    <span className="font-semibold text-turquoise-600">2010:</span> Primera mujer centroamericana en conquistar el Monte Everest
                  </p>
                  <p className="text-base text-slate-700">
                    <span className="font-semibold text-turquoise-600">2011-2012:</span> Completó el Reto de los Tres Polos del Planeta
                  </p>
                  <p className="text-base text-slate-700">
                    <span className="font-semibold text-turquoise-600">Adventurers Grand Slam:</span> Primera persona en Latinoamérica
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-turquoise-100 text-turquoise-800 rounded-full text-sm font-medium">
                  Récords deportivos
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  Coaching
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Autora
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Conferencista
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Montañista
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
