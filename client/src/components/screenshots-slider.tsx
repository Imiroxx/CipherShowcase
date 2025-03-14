import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  id: number;
  title: string;
  description: string;
}

const ScreenshotsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const slides: SlideProps[] = [
    {
      id: 1,
      title: "Основной экран программы",
      description: "Управление файлами и доступ ко всем функциям шифрования"
    },
    {
      id: 2,
      title: "Шифрование файлов",
      description: "Выбор файлов и настройка параметров шифрования"
    },
    {
      id: 3,
      title: "Управление ключами",
      description: "Создание и хранение ключей шифрования"
    },
    {
      id: 4,
      title: "Шифрованные сообщения",
      description: "Обмен защищенными сообщениями с другими пользователями"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const pauseSlideShow = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeSlideShow = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, activeSlide]);

  // Example image placeholders using SVG
  const getSlideImage = (slideId: number) => {
    // Create different SVG backgrounds for each slide
    const backgrounds = [
      '#2a2a3a', // Dark blue-ish
      '#2a3a2a', // Dark green-ish
      '#3a2a2a', // Dark red-ish
      '#382a3a', // Dark purple-ish
    ];
    
    return (
      <svg 
        className="w-full h-full object-cover rounded-lg"
        viewBox="0 0 800 450"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="800" height="450" fill={backgrounds[slideId % backgrounds.length]} />
        
        {/* UI Elements based on slide ID */}
        {slideId === 0 && (
          <g>
            <rect x="50" y="50" width="700" height="60" rx="5" fill="#333" />
            <rect x="50" y="130" width="200" height="270" rx="5" fill="#333" />
            <rect x="270" y="130" width="480" height="270" rx="5" fill="#333" />
            <circle cx="150" cy="80" r="15" fill="#8A2BE2" />
            <rect x="180" y="75" width="120" height="10" rx="2" fill="#555" />
            
            <rect x="70" y="150" width="160" height="12" rx="2" fill="#8A2BE2" />
            <rect x="70" y="180" width="160" height="10" rx="2" fill="#444" />
            <rect x="70" y="200" width="160" height="10" rx="2" fill="#444" />
            <rect x="70" y="220" width="160" height="10" rx="2" fill="#444" />
            
            <rect x="290" y="150" width="440" height="230" rx="5" fill="#222" />
            <rect x="310" y="170" width="180" height="180" rx="5" fill="#444" />
            <rect x="510" y="170" width="200" height="40" rx="5" fill="#8A2BE2" opacity="0.8" />
            <rect x="510" y="230" width="200" height="120" rx="5" fill="#333" />
          </g>
        )}
        
        {slideId === 1 && (
          <g>
            <rect x="50" y="50" width="700" height="350" rx="5" fill="#333" />
            <rect x="80" y="80" width="300" height="290" rx="5" fill="#222" />
            <rect x="400" y="80" width="320" height="290" rx="5" fill="#222" />
            
            <rect x="100" y="100" width="260" height="30" rx="5" fill="#8A2BE2" />
            <rect x="100" y="150" width="260" height="20" rx="3" fill="#444" />
            <rect x="100" y="180" width="260" height="20" rx="3" fill="#444" />
            <rect x="100" y="210" width="260" height="20" rx="3" fill="#444" />
            
            <rect x="420" y="100" width="280" height="30" rx="5" fill="#8A2BE2" />
            <rect x="420" y="150" width="280" height="120" rx="5" fill="#444" />
            <rect x="440" y="290" width="120" height="40" rx="5" fill="#8A2BE2" />
            <rect x="580" y="290" width="100" height="40" rx="5" stroke="#8A2BE2" strokeWidth="2" fill="transparent" />
          </g>
        )}
        
        {slideId === 2 && (
          <g>
            <rect x="100" y="50" width="600" height="350" rx="8" fill="#333" />
            <rect x="130" y="80" width="540" height="60" rx="5" fill="#222" />
            <rect x="150" y="95" width="300" height="30" rx="3" fill="#444" />
            <rect x="500" y="95" width="150" height="30" rx="15" fill="#8A2BE2" />
            
            <rect x="130" y="160" width="250" height="220" rx="5" fill="#222" />
            <rect x="400" y="160" width="270" height="220" rx="5" fill="#222" />
            
            <circle cx="180" cy="200" r="30" fill="#8A2BE2" opacity="0.7" />
            <circle cx="180" cy="270" r="30" fill="#444" />
            <circle cx="180" cy="340" r="30" fill="#444" />
            
            <rect x="230" y="185" width="130" height="15" rx="2" fill="#fff" opacity="0.7" />
            <rect x="230" y="210" width="100" height="10" rx="2" fill="#666" />
            
            <rect x="230" y="255" width="130" height="15" rx="2" fill="#fff" opacity="0.3" />
            <rect x="230" y="280" width="100" height="10" rx="2" fill="#666" />
            
            <rect x="230" y="325" width="130" height="15" rx="2" fill="#fff" opacity="0.3" />
            <rect x="230" y="350" width="100" height="10" rx="2" fill="#666" />
            
            <rect x="420" y="180" width="230" height="40" rx="5" fill="#444" />
            <rect x="420" y="240" width="230" height="40" rx="5" fill="#444" />
            <rect x="420" y="300" width="230" height="40" rx="5" fill="#444" />
          </g>
        )}
        
        {slideId === 3 && (
          <g>
            <rect x="50" y="50" width="700" height="350" rx="5" fill="#333" />
            <rect x="80" y="80" width="320" height="290" rx="5" fill="#222" />
            <rect x="420" y="80" width="300" height="290" rx="5" fill="#222" />
            
            <rect x="100" y="100" width="280" height="40" rx="20" fill="#8A2BE2" opacity="0.8" />
            <rect x="100" y="160" width="280" height="190" rx="5" fill="#1a1a1a" />
            
            <rect x="120" y="180" width="240" height="40" rx="3" fill="#333" />
            <rect x="120" y="230" width="240" height="40" rx="3" fill="#333" />
            <rect x="120" y="280" width="240" height="40" rx="3" fill="#333" />
            
            <rect x="440" y="100" width="260" height="40" rx="20" fill="#8A2BE2" opacity="0.8" />
            <circle cx="470" cy="180" r="40" fill="#8A2BE2" opacity="0.7" />
            <rect x="530" y="160" width="150" height="15" rx="2" fill="#fff" opacity="0.8" />
            <rect x="530" y="185" width="120" height="10" rx="2" fill="#666" />
            
            <circle cx="470" cy="260" r="40" fill="#444" />
            <rect x="530" y="240" width="150" height="15" rx="2" fill="#fff" opacity="0.4" />
            <rect x="530" y="265" width="120" height="10" rx="2" fill="#666" />
          </g>
        )}
      </svg>
    );
  };

  return (
    <section id="screenshots" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white">
            Интерфейс <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">КриптоЗащиты</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Ознакомьтесь с интерфейсом программы и её основными функциями
          </p>
        </div>

        <div className="relative mt-12 max-w-5xl mx-auto">
          <div className="bg-zinc-800 rounded-xl p-4 shadow-xl shadow-purple-500/20">
            <div id="screenshot-slider" className="relative"
                 onMouseEnter={pauseSlideShow}
                 onMouseLeave={resumeSlideShow}>
              <div className="slide-container relative overflow-hidden rounded-lg aspect-video">
                {/* Slides */}
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    {getSlideImage(index)}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold font-montserrat">{slide.title}</h3>
                      <p className="text-gray-200">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider controls */}
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-20">
                <button 
                  onClick={prevSlide}
                  className="bg-zinc-900/80 hover:bg-purple-600/80 text-white rounded-full p-2 transition"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-zinc-900/80 hover:bg-purple-600/80 text-white rounded-full p-2 transition"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Slider indicators */}
              <div className="flex justify-center mt-4 space-x-2 z-20">
                {slides.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeSlide 
                        ? 'w-12 bg-purple-600' 
                        : 'w-3 bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSlider;
