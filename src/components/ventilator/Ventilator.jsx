import React from "react";
import { Header, Page9, Footer } from "../index";
import image2 from "../../assets/image2.svg";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import royal from "../../assets/royal.svg";
import lessar from "../../assets/lessar.svg";
import zavod from "../../assets/zavod.svg";
import komfovent from "../../assets/komfonet.svg";
function Ventilator() {
  const ventilators = [
    {
      id: 1,
      name: "Сплит-система ballu olympio edge bso-09hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 22 дБ(а)",
      availability: "В наличии",
      price: "36 250.20 ₽/шт",
      rating: 3,
    },
    {
      id: 2,
      name: "Сплит-система ballu olympio edge bso-12hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 24 дБ(а)",
      availability: "В наличии",
      price: "38 250.20 ₽/шт",
      rating: 4,
    },
    {
      id: 3,
      name: "Сплит-система ballu olympio edge bso-18hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 26 дБ(а)",
      availability: "В наличии",
      price: "40 250.20 ₽/шт",
      rating: 3,
    },
    {
      id: 4,
      name: "Сплит-система ballu olympio edge bso-24hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 28 дБ(а)",
      availability: "В наличии",
      price: "42 250.20 ₽/шт",
      rating: 5,
    },
    {
      id: 5,
      name: "Сплит-система ballu olympio edge bso-30hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 30 дБ(а)",
      availability: "В наличии",
      price: "44 250.20 ₽/шт",
      rating: 4,
    },
    {
      id: 6,
      name: "Сплит-система ballu olympio edge bso-36hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 32 дБ(а)",
      availability: "В наличии",
      price: "46 250.20 ₽/шт",
      rating: 3,
    },
    {
      id: 7,
      name: "Сплит-система ballu olympio edge bso-48hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 34 дБ(а)",
      availability: "В наличии",
      price: "48 250.20 ₽/шт",
      rating: 4,
    },
    {
      id: 8,
      name: "Сплит-система ballu olympio edge bso-60hn8_22y",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 36 дБ(а)",
      availability: "В наличии",
      price: "50 250.20 ₽/шт",
      rating: 5,
    },
    {
      id: 9,
      name: "Сплит-система ballu olympio edge bso-09hn8_22y-w",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 22 дБ(а)",
      availability: "В наличии",
      price: "52 250.20 ₽/шт",
      rating: 3,
    },
    {
      id: 10,
      name: "Сплит-система ballu olympio edge bso-12hn8_22y-w",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 24 дБ(а)",
      availability: "В наличии",
      price: "54 250.20 ₽/шт",
      rating: 4,
    },
    {
      id: 11,
      name: "Сплит-система ballu olympio edge bso-18hn8_22y-w",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 26 дБ(а)",
      availability: "В наличии",
      price: "56 250.20 ₽/шт",
      rating: 5,
    },
    {
      id: 12,
      name: "Сплит-система ballu olympio edge bso-24hn8_22y-w",
      type: "Тип: настенная",
      modes: "Основные режимы: охлаждение / обогрев",
      noise: "Уровень шума: от 28 дБ(а)",
      availability: "В наличии",
      price: "58 250.20 ₽/шт",
      rating: 4,
    },
  ];

  const Rating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <p className="text-gray-400 text-[13px] mb-2">
          ГЛАВНАЯ / Бытовые вентиляционные установки
        </p>
        <h1 className="text-bold text-[28px] mb-8 font-medium">
          Бытовые вентиляционные установки
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventilators.map((ventilator) => (
            <div key={ventilator.id} className="bg-white p-4 rounded-lg shadow">
              <img
                src={image2}
                alt={ventilator.name}
                className="w-full h-48 object-contain mb-4"
              />
              <Rating rating={ventilator.rating} />
              <h3 className="text-lg font-semibold my-2">{ventilator.name}</h3>
              <p className="text-sm text-gray-600">{ventilator.type}</p>
              <p className="text-sm text-gray-600">{ventilator.modes}</p>
              <p className="text-sm text-gray-600">{ventilator.noise}</p>
              <p className="text-sm my-2">
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-500 font-medium">
                    {ventilator.availability}
                  </span>
                </span>
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-lg">{ventilator.price}</span>
                <button className="bg-white border border-gray-300 p-2 rounded">
                  <FiShoppingCart className="text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col my-10 md:flex-row justify-between items-start">
          <div
            style={{
              width: "603px",
            }}
            className="md:w-1/2 mb-6 md:mb-0 mx-4"
          >
            <h1 className="text-bold text-[28px] mb-8 font-medium">
              Промышленные вентиляционные установки
            </h1>
            <p className="mb-4 text-gray-400">
              Мы работаем с самыми надежными брендами и производителями
              вентиляционного оборудования.
            </p>
            <p className="mb-4 text-gray-400">
              Проекты рассчитываются индивидуально, исходя из требуемых
              параметров помещений.
            </p>
            <p className="mb-4 text-gray-400">
              Реализуем системы вентиляции для кафе, ресторанов, офисных
              помещений, производственных объектов, торговых центров.
            </p>
            <p className="mb-6 text-gray-400">
              Производим работы "под ключ" от проекта до сервисного обслуживания
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Оставить заявку
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 mx-1 mt-6 lg:mt-0">
            {[royal, lessar, zavod, komfovent].map((img, index) => (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Brand ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Ventilator;
