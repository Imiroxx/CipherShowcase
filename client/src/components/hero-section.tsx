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
              Надежная <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">защита</span> ваших данных
            </h1>
            <p className="mt-6 text-xl text-gray-300 font-roboto max-w-3xl">
              КриптоЗащита — современное решение для шифрования ваших файлов и сообщений с использованием передовых алгоритмов шифрования.
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
              <p>Поддерживаются Windows, macOS и Linux</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-xl shadow-purple-500/20 p-4">
              <svg 
                viewBox="0 0 800 450" 
                className="w-full h-auto rounded-lg bg-zinc-900"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="450" rx="8" fill="#1E1E1E" />
                <g transform="translate(85, 50)">
                  <rect x="0" y="0" width="630" height="350" rx="6" fill="#252525" />
                  <rect x="20" y="20" width="590" height="45" rx="4" fill="#333333" />
                  <circle cx="45" cy="42" r="10" fill="#8A2BE2" />
                  <rect x="65" y="37" width="200" height="10" rx="2" fill="#777777" />
                  
                  <rect x="20" y="85" width="180" height="245" rx="4" fill="#333333" />
                  <rect x="220" y="85" width="390" height="245" rx="4" fill="#333333" />
                  
                  <rect x="35" y="105" width="150" height="10" rx="2" fill="#8A2BE2" />
                  <rect x="35" y="125" width="150" height="8" rx="2" fill="#666666" />
                  <rect x="35" y="143" width="150" height="8" rx="2" fill="#666666" />
                  <rect x="35" y="161" width="150" height="8" rx="2" fill="#666666" />
                  <rect x="35" y="179" width="150" height="8" rx="2" fill="#666666" />
                  
                  <rect x="240" y="105" width="350" height="15" rx="2" fill="#8A2BE2" />
                  <rect x="240" y="135" width="350" height="175" rx="4" fill="#222222" />
                  
                  <rect x="260" y="155" width="310" height="10" rx="2" fill="#999999" />
                  <rect x="260" y="175" width="310" height="10" rx="2" fill="#999999" />
                  <rect x="260" y="195" width="310" height="10" rx="2" fill="#999999" />
                  
                  <rect x="260" y="235" width="120" height="40" rx="4" fill="#8A2BE2" />
                  <rect x="400" y="235" width="120" height="40" rx="4" fill="#444444" stroke="#8A2BE2" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
