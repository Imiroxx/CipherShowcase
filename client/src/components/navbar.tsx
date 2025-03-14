import { useState } from "react";
import { Link } from "wouter";
import { LockKeyhole } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <LockKeyhole className="text-purple-600 h-8 w-8 mr-2" />
              <span className="text-white font-montserrat font-bold text-xl">КриптоЗащита</span>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Возможности
            </Link>
            <Link href="#screenshots" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Скриншоты
            </Link>
            <Link href="#download" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Скачать
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                О программе
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-zinc-900 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">
              Возможности
          </Link>
          <Link href="#screenshots" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">
              Скриншоты
          </Link>
          <Link href="#download" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">
              Скачать
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-montserrat">
              О программе
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
