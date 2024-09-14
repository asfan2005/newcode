import React, { useState } from "react";
import { Header, Page9, Footer } from "../index";
import ustanovka from "../../assets/ustanovka.svg";
import conditionerImage from "../../assets/image2.svg";
import image20 from "../../assets/image20.svg";
import image21 from "../../assets/image21.svg";
import image22 from "../../assets/image22.svg";
import image23 from "../../assets/image20.svg";
import image24 from "../../assets/image21.svg";
import image25 from "../../assets/image22.svg";
function Ustanovka() {
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
  const images = [image20, image21, image22, image23, image24, image25];
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="mx-auto px-4 max-w-full md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row justify-between items-start">
          <div className="md:w-1/2 pr-4">
            <p className="text-gray-400 text-[15px] mb-2">
              ГЛАВНАЯ / Установка настенных кондиционеров
            </p>
            <h1 className="text-3xl font-bold mb-4">
              Установка настенных кондиционеров
            </h1>
            <p className="text-gray-600 mb-4">
              Качественный монтаж настенных кондиционеров для квартиры,
              загородного дома, офиса, ресторана и других помещений. подберем и
              смонтируем сплит-систему на вашем объекте
            </p>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>
                  Осуществляем выезд на замер и бесплатный подбор оборудования.
                </span>
              </li>
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>
                  Монтаж кондиционеров производится с использованием только
                  качественных расходных материалов и инструментов.
                </span>
              </li>
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>
                  При необходимости выполняем высотные работы с применением
                  альпинистского снаряжения.
                </span>
              </li>
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>Производим установку кондиционеров в 1 или 2 этапа</span>
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Посмотреть цены
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={ustanovka}
              width={526}
              height={481}
              alt="Установка кондиционера"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-4">Цены</h2>
          <h3 className="text-xl mb-2 my-3">
            Прайс на монтаж настенных кондиционеров
          </h3>
          <table className="w-full mb-8">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 text-left">
                  Наименование услуги, производительность
                </th>
                <th className="py-2 px-4 text-right">Цены</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="py-2 px-4  text-gray-400">
                  Монтаж настенного кондиционера 1,5-3,0 квт
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  15 750 рублей
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4  text-gray-400">
                  Монтаж настенного кондиционера 3,1-4,5 квт
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  16 650 рублей
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4  text-gray-400">
                  Монтаж настенного кондиционера 4,6-6,0 квт
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  17 550 рублей
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4  text-gray-400">
                  Монтаж настенного кондиционера 6,1-8,1 квт
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  20 700 рублей
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl mb-2 ">Прайс на отдельные работы</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 text-left">
                  Наименование услуги, производительность
                </th>
                <th className="py-2 px-4 text-right">Цены</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="py-2 px-4 text-gray-400">
                  Прокладка фреонопровода (с материалом), м.п.
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  1 700 рублей
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4  text-gray-400">
                  Прокладка дренажного трубопровода (с материалом), м.п.
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  200 рублей
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4  text-gray-400">
                  Прокладка кабеля питания (с материалом), м.п.
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  200 рублей
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4  text-gray-400">
                  Штробление 20х20 мм, в газобетоне, в кирпиче, м.п.
                </td>
                <td className="py-2 px-4 text-right  text-gray-400">
                  300 рублей
                </td>
              </tr>
            </tbody>
          </table>
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

        <div className="max-w-7xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
              Hаши объекты
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

        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Ustanovka;
