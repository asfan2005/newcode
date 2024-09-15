import React, { useState } from "react";
import { Header, Page9, Footer } from "../index";
import ServicKon from "../../assets/servicKon.svg";
import image20 from "../../assets/image20.svg";
import image21 from "../../assets/image21.svg";
import image22 from "../../assets/image22.svg";
import image23 from "../../assets/image20.svg";
import image24 from "../../assets/image21.svg";
import image25 from "../../assets/image22.svg";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-gray-100 rounded-lg">
      <button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

function ServicesKon() {
  const images = [image20, image21, image22, image23, image24, image25];
  const [currentSlide, setCurrentSlide] = useState(0);

  const faqData = [
    {
      question: "Кондиционер плохо охлаждает, в чем причина?",
      answer:
        "Причины могут быть разными, во внутреннем и наружном блоке кондиционера постоянно циркулирует воздух, и грязь которая в нем накапливается скапливается на теплообменниках, вентиляторах,в дренажных поддонах, это значительно снижает эффективность кондиционера. также возможна техническая проблема связанная с потерей герметичности, низкого уровня фреона, неисправностью электроники. наиболее часто встречающаяся проблема элементарное загрязнение фильтров кондиционера.",
    },
    {
      question: "Почему обмерзает кондиционер?",
      answer: "Ответ на вопрос о причинах обмерзания кондиционера...",
    },
    {
      question: "Течет вода из кондиционера причины?",
      answer: "Ответ на вопрос о причинах протечки воды из кондиционера...",
    },
  ];

  return (
    <div className="container mx-auto px-4  md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <div className="md:flex-row gap-8 max-w-7xl mx-auto">
          <div>
            <p className="text-gray-400 text-[15px]">
              ГЛАВНАЯ / Сервис кондиционеров
            </p>
            <h1 className="text-3xl font-bold mb-4">Сервис кондиционеров</h1>
          </div>
          <div className="flex justify-between">
            <div className="md:w-1/2">
              <p className="mb-4 text-gray-400">
                Для корректной работы кондиционера необходимо своевременно
                производить техническое обслуживание, наши специалисты
                производят полный спектр услуг по сервису.
              </p>
              <p className="mb-4 text-gray-400">
                Залог бесперебойной работы оборудования – своевременное
                техническое обслуживание, чтобы летом не изнывать от жары –
                закажите сервис заранее
              </p>
              <p className="mb-4 text-gray-400">
                При возникновении любых проблем с кондиционером – позвоните нам
                по номеру +7(981) 777-71-61 или оставьте свою заявку на обратный
                звонок
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded">
                Посмотреть цены
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={ServicKon}
                alt="Сервис кондиционеров"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="md:w-1/2 text-center bg-gray-100 p-6 rounded">
            <h2 className="text-xl font-semibold mb-2">Плановый сервис</h2>
            <p className="mb-4 text-gray-400">
              Для правильной работы оборудования рекомендуется делать 2
              технических обслуживания в год
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded w-full">
              Оставить заявку
            </button>
            <a href="#" className="block text-center mt-2 text-blue-500">
              Цена
            </a>
          </div>
          <div className="md:w-1/2 text-center bg-gray-100 p-6 rounded">
            <h2 className="text-xl font-semibold mb-2">Ремонт кондиционера</h2>
            <p className="mb-4 text-gray-400">
              В случае поломки кондиционера, Вы можете заказать ремонт в нашей
              компании
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded w-full">
              Оставить заявку
            </button>
            <a href="#" className="block text-center mt-2 text-blue-500">
              Цена
            </a>
          </div>
        </div>

        <section className="mt-12 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Сервисное обслуживание кондиционера
          </h2>
          <p className="text-gray-400 mb-4">
            Рекомендуем регулярное обслуживание кондиционеров и сплит-систем :
          </p>
          <ul className="list-none pl-5 mb-8 text-gray-400">
            <li className="mb-2 flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              Помещения с небольшим количеством людей с малозагрязненным
              воздухом (квартиры, частные дома, небольшие офисы) — 2 раза в год
            </li>
            <li className="mb-2 flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              Помещения с большим количеством людей (крупные офисы, магазины,
              торговые центры, общественные места) — 4 раза в год
            </li>
            <li className="mb-2 flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              В специальных помещениях (серверные, лаборатории, производство) —
              12 раз в год
            </li>
          </ul>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">
                Обслуживание внутреннего блока :
              </h3>
              <ul className="list-none pl-0 text-gray-400">
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Чистка фильтров внутреннего блока
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Чистка декоративной панели внутреннего блока
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Проверка надежности электрических соединений внутреннего блока
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Проверка производительности внутреннего блока
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Проверка/замена элементов питания ПДУ
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                Стоимость от{" "}
                <span className="text-blue-500 text-2xl">22 500р.</span>
              </p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-md w-[40%]">
                Оставить заявку
              </button>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">
                Обслуживание внешнего блока:
              </h3>
              <ul className="list-none pl-0 text-gray-400">
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Очистка воздухозаборной решетки наружного блока
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Проверка работы компрессора
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Проверка давления в холодильном контуре
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Проверка надежности электрических соединений наружного блока
                </li>
                <li className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  Дозаправка фреоном
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              Фотогалерея
            </h2>
          </div>
          <div className="relative">
            <div className="flex gap-4 md:gap-6 overflow-hidden">
              {images
                .slice(currentSlide, currentSlide + 3)
                .map((img, index) => (
                  <div key={index} className="w-full md:w-1/3 flex-shrink-0">
                    <img
                      src={img}
                      alt={`Объект ${index + 1}`}
                      className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: images.length - 2 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Частые вопросы</h2>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </section>

        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default ServicesKon;
