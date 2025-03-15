import { Button } from "@/components/ui/button";
import { Download, Apple, Terminal } from "lucide-react";

const DownloadSection = () => {
  const downloadFile = (platform: string) => {
    if (platform === 'Windows') {
      const fileUrl = 'setup-sv.exe';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'ShadowVault-Windows.exe');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Скоро будет доступно! Пока что вы можете скачать ShadowVault только для Windows!');
    }
  };

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-zinc-800 rounded-2xl p-8 sm:p-12 shadow-xl border border-zinc-700 shadow-purple-500/20">
          <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-6">
            Начните защищать свои данные <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">прямо сейчас</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Скачайте ShadowVault бесплатно и получите полный контроль над безопасностью ваших данных
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              onClick={() => downloadFile('Windows')}
              className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-800 text-white font-montserrat font-bold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              <Download className="h-5 w-5" />
              Скачать для Windows
            </Button>
            <div className="flex gap-4">
              <Button
                onClick={() => downloadFile('macOS')}
                variant="outline"
                className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 hover:text-white hover:bg-purple-800 font-montserrat font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                <Apple className="h-4 w-4" />
                macOS
              </Button>
              <Button
                onClick={() => downloadFile('Linux')}
                variant="outline"
                className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 hover:text-white hover:bg-purple-800 font-montserrat font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                <Terminal className="h-4 w-4" />
                Linux
              </Button>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            <p>Версия 2.3.3 | Размер: 24.5 МБ | Обновлено: 10.03.2025</p>
            <p className="mt-2">Совместимо с Windows 10/11</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;