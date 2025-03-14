import { Link } from "wouter";
import { LockKeyhole } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "О компании",
      links: [
        { label: "О нас", href: "#" },
        { label: "Команда", href: "#" },
        { label: "Карьера", href: "#" },
        { label: "Контакты", href: "#" }
      ]
    },
    {
      title: "Продукты",
      links: [
        { label: "КриптоЗащита Pro", href: "#" },
        { label: "КриптоЗащита для бизнеса", href: "#" },
        { label: "Мобильная версия", href: "#" },
        { label: "Все продукты", href: "#" }
      ]
    },
    {
      title: "Поддержка",
      links: [
        { label: "Справочный центр", href: "#" },
        { label: "Руководство пользователя", href: "#" },
        { label: "Видеоуроки", href: "#" },
        { label: "Сообщить о проблеме", href: "#" }
      ]
    },
    {
      title: "Юридическая информация",
      links: [
        { label: "Условия использования", href: "#" },
        { label: "Политика конфиденциальности", href: "#" },
        { label: "Лицензионное соглашение", href: "#" },
        { label: "Правовая информация", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat font-medium text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-purple-600 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <LockKeyhole className="text-purple-600 h-8 w-8 mr-2" />
            <span className="text-white font-montserrat font-bold text-xl">КриптоЗащита</span>
          </div>
          
          <div className="flex space-x-6">
            {[
              { icon: "ri-telegram-fill", label: "Telegram" },
              { icon: "ri-vk-fill", label: "VK" },
              { icon: "ri-instagram-fill", label: "Instagram" },
              { icon: "ri-youtube-fill", label: "YouTube" }
            ].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-purple-600 transition"
                aria-label={social.label}
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} КриптоЗащита. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
