import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutSection = () => {
  const faqItems = [
    {
      question: "Безопасна ли КриптоЗащита?",
      answer: "Да, наша программа использует только международно признанные алгоритмы шифрования, такие как AES-256, которые невозможно взломать при современном уровне вычислительных мощностей."
    },
    {
      question: "Что делать, если я забыл пароль?",
      answer: "К сожалению, если вы забыли мастер-пароль, восстановить доступ к зашифрованным данным невозможно. Это обеспечивает максимальную безопасность, но требует ответственного хранения паролей."
    },
    {
      question: "Отправляете ли вы мои данные на сервер?",
      answer: "Нет, КриптоЗащита работает полностью локально на вашем устройстве. Мы не имеем доступа к вашим данным или ключам шифрования."
    },
    {
      question: "Могу ли я использовать программу на нескольких устройствах?",
      answer: "Да, вы можете установить КриптоЗащиту на любое количество устройств без ограничений."
    }
  ];

  return (
    <section id="about" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-white mb-6">
              О программе <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700">КриптоЗащита</span>
            </h2>
            <p className="text-gray-300 mb-6">
              КриптоЗащита разработана командой опытных специалистов по информационной безопасности с целью обеспечить пользователей надежным и простым в использовании инструментом для защиты конфиденциальной информации.
            </p>
            <p className="text-gray-300 mb-6">
              Наша программа использует только проверенные алгоритмы шифрования, одобренные международными стандартами безопасности, и регулярно обновляется для обеспечения максимальной защиты от новых угроз.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center">
                <div className="text-purple-600 text-4xl font-bold">500K+</div>
                <div className="text-gray-400">Пользователей</div>
              </div>
              <div className="text-center">
                <div className="text-purple-600 text-4xl font-bold">4.8/5</div>
                <div className="text-gray-400">Рейтинг</div>
              </div>
              <div className="text-center">
                <div className="text-purple-600 text-4xl font-bold">99.9%</div>
                <div className="text-gray-400">Надежность</div>
              </div>
              <div className="text-center">
                <div className="text-purple-600 text-4xl font-bold">24/7</div>
                <div className="text-gray-400">Поддержка</div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-montserrat font-bold text-white mb-6">Часто задаваемые вопросы</h3>
              
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-700">
                    <AccordionTrigger className="text-white font-montserrat font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
