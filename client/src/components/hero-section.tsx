import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900"></div>
        {/* Binary pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg 
            width="100%" 
            height="100%" 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 800 800"
          >
            <g opacity="0.2" fill="#ffffff">
              {[...Array(20)].map((_, rowIndex) => (
                [...Array(20)].map((_, colIndex) => (
                  <circle
                    key={`${rowIndex}-${colIndex}`}
                    cx={20 + (colIndex * 40)}
                    cy={20 + (rowIndex * 40)}
                    r="1"
                  />
                ))
              ))}
            </g>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat text-white leading-tight">
              Надежная <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">защита</span> ваших цифровых данных
            </h1>
            <p className="mt-6 text-xl text-gray-300 font-roboto max-w-3xl">
              ShadowVault  — современная программа для шифрования ваших файлов и сообщений с использованием передовых алгоритмов шифрования.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-800 text-white font-montserrat font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_15px_rgba(138,43,226,0.5)]"
              >
                <Link href="#download">
                  <a>Скачать бесплатно</a>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border border-purple-600 text-purple-600 hover:text-white hover:bg-purple-800 font-montserrat font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
              >
                <Link href="#features">
                  <a>Узнать больше</a>
                </Link>
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Поддерживаются Windows</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-purple-500/20 p-4">
              {/* Замените SVG на изображение */}
              <img
                src="slag.jpg" // Укажите правильный путь к изображению
                alt="ShadowVault Interface"
                className="w-full h-auto rounded-lg bg-zinc-900"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;