import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Импортируйте изображения
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';

interface SlideProps {
  id: number;
  title: string;
  description: string;
  image: string; // Добавьте поле для изображения
}

const ScreenshotsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideProps[] = [
    {
      id: 1,
      title: "Авторизация",
      description: "Вход и регистрация в приложение.",
      image: slide1
    },
    {
      id: 2,
      title: "Шифрование файлов",
      description: "Выбор файлов и настройка параметров шифрования",
      image: slide2
    },
    {
      id: 3,
      title: "Генератор паролей",
      description: "Генерация паролей любой сложности!",
      image: slide3
    },
    {
      id: 4,
      title: "Менеджер паролей",
      description: "Храните пароли в приложение",
      image: slide4
    },
    {
      id: 5,
      title: "Облако",
      description: "Храните зашифрованные файлы в приложение",
      image: slide5
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

  return (
    <section id="screenshots" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white">
            Интерфейс <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">ShadowVault</span>
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
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
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
