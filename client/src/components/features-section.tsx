import {
  LockKeyhole,
  Shield,
  MessageSquare,
  Key,
  HardDrive,
  UserCog
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-zinc-900 rounded-xl p-6 shadow-lg border border-zinc-800 hover:border-purple-600 transition duration-300">
    <div className="h-12 w-12 rounded-full bg-purple-900/20 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-montserrat font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <LockKeyhole className="text-2xl text-purple-600" />,
      title: "Мощное шифрование",
      description: "Используйте современные алгоритмы шифрования AES-256, RSA и другие для надежной защиты файлов."
    },
    {
      icon: <Shield className="text-2xl text-purple-600" />,
      title: "Защита файлов",
      description: "Шифруйте любые типы файлов — документы, фотографии, видео и другие данные без потери качества."
    },
    {
      icon: <MessageSquare className="text-2xl text-purple-600" />,
      title: "Защищенные сообщения",
      description: "Обменивайтесь зашифрованными сообщениями, которые могут прочитать только получатели с ключом."
    },
    {
      icon: <Key className="text-2xl text-purple-600" />,
      title: "Управление ключами",
      description: "Создавайте, храните и управляйте ключами шифрования для максимальной безопасности."
    },
    {
      icon: <HardDrive className="text-2xl text-purple-600" />,
      title: "Шифрование дисков",
      description: "Защищайте целые диски или разделы для комплексной защиты всех хранящихся данных."
    },
    {
      icon: <UserCog className="text-2xl text-purple-600" />,
      title: "Простой интерфейс",
      description: "Интуитивно понятный интерфейс позволяет начать использование сразу после установки."
    }
  ];

  return (
    <section id="features" className="py-16 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white">
            Возможности <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">КриптоЗащиты</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Передовые технологии шифрования для максимальной защиты ваших данных
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
