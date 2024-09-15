import React, { useState, useEffect } from "react";
import { Header, Page9, Footer } from "../index";
import image27 from "../../assets/image27.svg";
import image20 from "../../assets/image20.svg";
import image21 from "../../assets/image21.svg";
import image22 from "../../assets/image22.svg";
import image23 from "../../assets/image20.svg";
import image24 from "../../assets/image21.svg";
import image25 from "../../assets/image22.svg";
import Frame13 from "../../assets/Frame13.svg";
import Frame14 from "../../assets/Frame14.svg";
import Frame15 from "../../assets/Frame15.svg";
import Frame1 from "../../assets/Frame1.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import Frame4 from "../../assets/Frame4.svg";
import Frame5 from "../../assets/Frame1.svg";
import Frame6 from "../../assets/Frame2.svg";
import Frame7 from "../../assets/Frame3.svg";
import Frame8 from "../../assets/Frame4.svg";
import Frame9 from "../../assets/Frame1.svg";
import Frame10 from "../../assets/Frame2.svg";
import Frame11 from "../../assets/Frame3.svg";
import Frame12 from "../../assets/Frame4.svg";
function Montaj() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image20, image21, image22, image23, image24, image25];
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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images.length - 2));
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(stages.length / 3));
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(stages.length / 3)) % Math.ceil(stages.length / 3)
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    { image: Frame1, alt: "Quattro Clima" },
    { image: Frame2, alt: "Daikin" },
    { image: Frame3, alt: "Cooper&Hunter" },
    { image: Frame4, alt: "Gree" },
    { image: Frame5, alt: "Quattro Clima" },
    { image: Frame6, alt: "Daikin" },
    { image: Frame7, alt: "Cooper&Hunter" },
    { image: Frame8, alt: "Gree" },
    { image: Frame9, alt: "Quattro Clima" },
    { image: Frame10, alt: "Daikin" },
    { image: Frame11, alt: "Cooper&Hunter" },
    { image: Frame12, alt: "Gree" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [slides.length]);

  const visibleSlides = slides.slice(
    currentIndex,
    currentIndex + (isMobile ? 2 : 4)
  );

  return (
    <div className="container mx-auto px-4">
      <Header />
      <main id="main-content" className="my-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2">
              ГЛАВНАЯ / Монтаж кондиционеров
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">
              Монтаж кондиционеров
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 p-6 bg-white rounded-lg shadow-md">
            <div className="lg:w-1/2">
              <p className="mb-4 text-gray-500 text-sm">
                За 10 лет наша компания установила большое количество
                кондиционеров на разных объектах: от квартир и домов до больших
                офисных и производственных помещений.
              </p>
              <p className="mb-4 text-gray-500 text-sm">
                Собственные монтажные бригады и альпинисты:
              </p>
              <p className="mb-4 text-gray-500 text-sm">
                Только качественные расходные материалы, мы скрупулезно подходим
                к выбору поставщиков материалов
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={image27}
                alt="Монтаж кондиционера"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Монтаж в 1 этап</h2>
            <p className="mb-4 text-gray-600 text-sm">
              Обычно такой монтаж производится, если ремонт уже готов
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-2">
              Оставить заявку
            </button>
            <a href="#" className="text-blue-500 text-sm block">
              Цена
            </a>
          </div>

          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Монтаж в 2 этапа</h2>
            <p className="mb-4 text-gray-600 text-sm">
              Закладка коммуникаций на стадии ремонта и установка блоков после
              завершения
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-2">
              Оставить заявку
            </button>
            <a href="#" className="text-blue-500 text-sm block">
              Цена
            </a>
          </div>

          <div className="bg-white text-center p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Высотные работы</h2>
            <p className="mb-4 text-gray-600 text-sm">
              Если внешний блок размещается не на балконе, а на фасаде, начиная
              со 2 этажа
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-2">
              Оставить заявку
            </button>
            <a href="#" className="text-blue-500 text-sm block">
              Цена
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              Объекты
            </h2>
            <div className="flex items-center">
              <div className="w-16 md:w-32 h-px bg-black mr-4"></div>
              <p className="text-gray-500 uppercase text-xs md:text-sm">
                Галерея наших объектов
              </p>
            </div>
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

        <div className="max-w-7xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Монтаж кондиционера в 1 этап
              </h2>
              <p className="text-gray-600 mb-4">
                Итоговая стоимость установки складывается из метража фреоновой
                трассы, дренажного трубопровода, наличия дренажной помпы,
                подведения электропитания, сложности монтажных работ,
                необходимости проведения высотных работ и других условий
              </p>
              <p className="text-gray-600 mb-4">
                Но во многих случаях можно уложиться в стандартный монтаж через
                стену
              </p>
              <p className="text-gray-600 mb-4">
                Перед оценкой стоимости работ производим выезд на замер
              </p>
              <p className="text-xl font-bold text-gray-400">
                Стоимость от{" "}
                <span className="text-3xl text-blue-500">19 000р.</span>
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Что входит в стоимость:
              </h2>
              <ul className="list-inside space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Расходные материалы: трубы в теплоизоляции, межблочный
                    кабель, дренажный шланг, кабель-канал до 0,5 м, герметик,
                    пена, скотч, крепеж;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Бурение одного отверстия под межблочную трассу;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Прокладка межблочной трассы до 3-х метров;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Отвод конденсата от внутреннего блока до 3-х метров;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Установка наружного блока кондиционера на кронштейнах;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Установка внутреннего блока;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Кабель канал для питания iek 16*16 до 3-х метров;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Двухступенчатое вакуумирование фреонового контура;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Пусконаладочные работы и проверка дренажной системы на
                    герметичность.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Монтаж кондиционера в 2 этап
              </h2>
              <p className="text-gray-600 mb-4">
                Итоговая стоимость установки складывается из метража фреоновой
                трассы, дренажного трубопровода, наличия дренажной помпы,
                подведения электропитания, сложности монтажных работ,
                необходимости проведения высотных работ и других условий
              </p>
              <p className="text-gray-600 mb-4">
                Но во многих случаях можно уложиться в стандартный монтаж через
                стену
              </p>
              <p className="text-gray-600 mb-4">
                Перед оценкой стоимости работ производим выезд на замер
              </p>
              <p className="text-xl font-bold text-gray-400">
                Стоимость от{" "}
                <span className="text-3xl text-blue-500">22 500р.</span>
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Что входит в стоимость:
              </h2>
              <ul className="list-inside space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Расходные материалы: трубы в теплоизоляции, межблочный
                    кабель, дренажный шланг, кабель-канал до 0,5 м, герметик,
                    пена, скотч, крепеж;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Бурение одного отверстия под межблочную трассу;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Прокладка межблочной трассы до 3-х метров;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Отвод конденсата от внутреннего блока до 3-х метров;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Установка наружного блока кондиционера на кронштейнах;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Установка внутреннего блока;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Кабель канал для питания iek 16*16 до 3-х метров;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Двухступенчатое вакуумирование фреонового контура;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-400">
                    Пусконаладочные работы и проверка дренажной системы на
                    герметичность.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 max-w-7xl mx-auto my-5 bg-white rounded-lg shadow-md p-6 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Высотные работы
            </h2>
            <p className="text-gray-400 mb-6">
              У нас в штате свои альпинисты, что позволяет экономить и не
              заказывать высотные работы в других организациях.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md w-full md:w-auto">
              Оставить заявку
            </button>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-400">
              Когда нужны высотные работы:
            </h2>
            <ul className="list-inside space-y-2 mb-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-gray-600">
                  Если кондиционер монтируется на фасаде выше 1-го этажа
                </span>
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              Наши сотрудники имеют все удостоверения, которые необходимы для
              получения допуска на кровлю
            </p>
            <p className="text-xl font-bold text-gray-400">
              Стоимость от{" "}
              <span className="text-3xl text-blue-500">7 000р.</span>
            </p>
          </div>
        </div>
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
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              Производители климатической техники
            </h1>
            <div className="flex items-center">
              <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-gray-300 mr-2 sm:mr-4 hidden sm:block"></div>
              <span className="text-base sm:text-lg">С КЕМ МЫ </span>
              <span className="text-base sm:text-lg text-blue-500 font-semibold">
                РАБОТАЕМ
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {visibleSlides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.alt}
                className="w-full h-auto object-contain"
              />
            ))}
          </div>
          <div className="flex justify-center space-x-2 mb-8">
            {[...Array(Math.ceil(slides.length / (isMobile ? 2 : 4)))].map(
              (_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === Math.floor(currentIndex / (isMobile ? 2 : 4))
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></span>
              )
            )}
          </div>
        </div>
        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Montaj;
