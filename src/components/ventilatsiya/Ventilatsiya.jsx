import React, { useState } from "react";
import { Header, Page9, Footer } from "../index";
import image26 from "../../assets/image26.svg";
import img1 from "../../assets/01.svg";
import img2 from "../../assets/02.svg";
import img3 from "../../assets/03.svg";
import img4 from "../../assets/04.svg";
import Frame13 from "../../assets/Frame13.svg";
import Frame14 from "../../assets/Frame14.svg";
import Frame15 from "../../assets/Frame15.svg";
import Photo1 from "../../assets/Photo1.svg";
import conditionerImage from "../../assets/image2.svg";
function Ventilatsiya() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stages = [
    {
      icon: Frame13,
      title: "Выезд на замер",
      description:
        "Приезжаем к вам на объект и производим все необходимые замеры",
    },
    {
      icon: Frame14,
      title: "Согласование цены",
      description:
        "Оцениваем стоимость работ и предлагаем несколько вариантов по оборудованию",
    },
    {
      icon: Frame15,
      title: "Разработка проекта",
      description: "Разрабатываем систему под ваш объект",
    },
    {
      icon: Frame13,
      title: "Поставка оборудования",
      description: "Закупаем и доставляем необходимое оборудование на объект",
    },
    {
      icon: Frame14,
      title: "Монтажные работы",
      description: "Выполняем монтаж вентиляционной системы согласно проекту",
    },
    {
      icon: Frame15,
      title: "Пусконаладка",
      description: "Проводим пусконаладочные работы и настройку оборудования",
    },
    {
      icon: Frame13,
      title: "Проверка работы",
      description: "Тестируем систему и проверяем ее эффективность",
    },
    {
      icon: Frame14,
      title: "Сдача объекта",
      description: "Передаем вам полностью готовую и работающую систему",
    },
    {
      icon: Frame15,
      title: "Гарантийное обслуживание",
      description: "Обеспечиваем гарантийное и постгарантийное обслуживание",
    },
  ];

  const similarProducts = [
    {
      id: 1,
      name: "Сплит-система ballu olympio edge bso-09hn8_22y",
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 22 дБ(а)",
      inStock: true,
      price: "36 250.20 ₽/шт",
      rating: 3,
    },
    {
      id: 2,
      name: "Сплит-система ballu olympio edge bso-09hn8_22y",
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 22 дБ(а)",
      inStock: true,
      price: "36 250.20 ₽/шт",
      rating: 3,
    },
    {
      id: 3,
      name: "Сплит-система ballu olympio edge bso-09hn8_22y",
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 22 дБ(а)",
      inStock: true,
      price: "36 250.20 ₽/шт",
      rating: 3,
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(stages.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(stages.length / 3)) % Math.ceil(stages.length / 3)
    );
  };

  return (
    <div className="container mx-auto px-4 md:my-6">
      <Header />
      <main id="main-content" className="my-4 md:my-0 relative w-full">
        <p className="text-gray-400 text-[15px] mb-2">ГЛАВНАЯ / Вентиляция</p>
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="md:w-1/2 mb-4 md:mb-0 pr-0 md:pr-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Проектирование, поставка и монтаж вентиляционных систем
            </h1>
            <p className="text-gray-400 mb-2">
              Наша компания предоставляет услуги по проектированию, поставке и
              монтажу систем вентиляции в жилых и коммерческих помещениях в
              Санкт-Петербурге и Лен. области.
            </p>
            <p className="text-gray-400 mb-2">
              Если вы хотите создать комфортный климат дома или в офисе -
              обращайтесь в нашу компанию, менеджеры подберут варианты под вашу
              задачу.
            </p>
            <p className="text-gray-400 mb-3">
              Мы работаем с ведущими поставщиками оборудования и можем
              предоставить самые выгодные условия для наших клиентов.
            </p>
            <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-300">
              Посмотреть цены
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={image26}
              alt="Вентиляционная система"
              className="w-full h-auto"
            />
          </div>
        </div>

        <section className="mt-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Все услуги "под ключ"
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <ServiceCard
              title="Поставка вентиляции"
              description="Подберем необходимое оборудование и доставим на объект комплектующие"
            />
            <ServiceCard
              title="Монтаж вентиляции"
              description="Качественно и быстро смонтируем систему вентиляции"
            />
            <ServiceCard
              title="Техническое обслуживание"
              description="Произведем сервис установленной системы вентиляции"
            />
            <ServiceCard
              title="Проектирование и согласование"
              description="Разработаем проект в соответствии с требованиями"
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Кто наши клиенты
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="lg:w-[598px] mb-4 lg:mb-0 pr-0 lg:pr-6">
              <p className="text-gray-400 mb-3">
                Мы работаем как с частными, так и с юридическими лицами,
                осуществляем полный спектр услуг по подбору, проектированию,
                поставке, установке и сервисному обслуживанию систем вентиляции
              </p>
              <p className="text-gray-400 mb-4">
                Подберем вариант для любого объекта, будь то квартира,
                загородный дом, офис, здание общепита, торговый центр или
                производство
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 w-full lg:w-auto">
                Оставить заявку
              </button>
            </div>
            <div className="w-full lg:w-auto grid grid-cols-2 gap-3">
              <ClientCard image={img1} title="Жилые помещения" />
              <ClientCard image={img2} title="Офисные помещения" />
              <ClientCard image={img3} title="Торговые комплексы, рестораны" />
              <ClientCard image={img4} title="Промышленные объекты" />
            </div>
          </div>
        </section>
        <section className="mt-8 md:mt-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 text-center">
            Этапы проведения работ
          </h2>
          <div className="relative px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
              {stages
                .slice(currentSlide * 3, currentSlide * 3 + 3)
                .map((stage, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[30%] mb-4 md:mb-0 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div className="flex flex-col items-center md:items-start">
                      <img
                        src={stage.icon}
                        alt={stage.title}
                        className="w-16 h-16 mb-4"
                      />
                      <h3 className="text-lg font-extrabold mb-2 text-center md:text-left">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm font-medium text-center md:text-left">
                      {stage.description}
                    </p>
                  </div>
                ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Previous slide"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              aria-label="Next slide"
            >
              &gt;
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(stages.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Цены</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-[636px] mb-4 md:mb-0 pr-0 md:pr-4">
              <div className="bg-blue-500 text-white py-2 px-4 flex justify-between mb-2">
                <span className="text-lg font-medium">Работы</span>
                <span className="text-lg font-medium">Цены</span>
              </div>
              <div className="bg-gray-100 py-3 px-4 flex justify-between mb-2">
                <span className="text-sm text-gray-700 w-3/4">
                  Проектирование систем вентиляции и кондиционирования
                </span>
                <span className="text-sm text-gray-700">от 10 000 рублей</span>
              </div>
              <div className="py-3 px-4 flex justify-between mb-2">
                <span className="text-sm text-gray-700">
                  Монтаж систем вентиляции
                </span>
                <span className="text-sm text-gray-700">от 5 000 рублей</span>
              </div>
              <div className="bg-gray-100 py-3 px-4 flex justify-between mb-4">
                <span className="text-sm text-gray-700">
                  Сервис систем вентиляции
                </span>
                <span className="text-sm text-gray-700">от 5 000 рублей</span>
              </div>
              <button className="bg-blue-500 text-white text-lg font-medium py-3 px-4 rounded hover:bg-blue-600 transition duration-300 w-full">
                Оставить заявку
              </button>
            </div>
            <div className="md:w-[636px] h-[430px]">
              <img
                src={Photo1}
                alt="Монтаж вентиляции"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <div className="mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">
              Бытовые вентиляционные установки
            </h2>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:block w-[100px] md:w-[200px] h-[1px] bg-black my-1"></div>
              <span className="text-sm md:text-base text-black-500">
                вентиляционные установки
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {similarProducts.map((product) => (
              <div key={product.id} className="border p-3 md:p-4 rounded-lg">
                <img
                  src={conditionerImage}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-contain mb-3 md:mb-4"
                />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg md:text-xl ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-sm md:text-base mb-2">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-1">
                  Тип: {product.type}
                </p>
                <p className="text-xs md:text-sm text-gray-600 mb-1">
                  Основные режимы: {product.modes}
                </p>
                <p className="text-xs md:text-sm text-gray-600 mb-2">
                  Уровень шума: {product.noiseLevel}
                </p>
                <p
                  className={`text-xs md:text-sm ${
                    product.inStock ? "text-green-500" : "text-red-500"
                  } mb-2`}
                >
                  {product.inStock ? "В наличии" : "Нет в наличии"}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm md:text-base">
                    {product.price}
                  </span>
                  <button className="bg-gray-200 p-1.5 md:p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
       <div className="my-10">
       <Page9 />
       <Footer />
       </div>
      </main>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{description}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-sm mt-auto">
        Подробнее
      </button>
    </div>
  );
}

function ClientCard({ image, title }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-45 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default Ventilatsiya;
