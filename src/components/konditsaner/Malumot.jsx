import React, { useState, useEffect } from "react";
import { Header } from "../index";
import tinkoffLogo from "../../assets/text.svg";
import conditionerImage from "../../assets/image2.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

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

function Malumot() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Описание");
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://212.67.12.22:8000/blog/products/${id}/`, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM"
          }
        });
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Header />
      <main id="main-content" className="my-6 md:my-10 relative">
        <p className="text-gray-400 text-[15px]">ГЛАВНАЯ / кОНДИЦИОНЕРЫ/Сплит-система Ballu Olympio Edge BSO-09HN8_22Y</p>
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2 lg:w-7/12">
              <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4">
                {/* Main Image */}
                <div className="w-full md:w-10/12 h-[300px] md:h-[400px]">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Thumbnail Slider */}
                <div className="flex md:flex-col w-full md:w-2/12 gap-2 overflow-x-auto md:overflow-y-auto md:h-[400px] pb-2 md:pb-0">
                  {product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`w-16 h-16 md:w-full md:h-20 flex-shrink-0 cursor-pointer border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={img}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 lg:w-5/12 bg-white p-4 md:p-6 shadow-md">
              <h1 className="text-xl md:text-2xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center mb-3">
                <span className="text-yellow-400 text-lg md:text-xl">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl md:text-3xl font-bold">{product.price} ₽</span>
                <span className="text-gray-400 line-through text-sm md:text-base">{(parseFloat(product.price) * 1.1).toFixed(2)} ₽</span>
              </div>
              <p className="text-gray-600 mb-3 flex items-center text-sm">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 flex-shrink-0"></span>
                В наличии
              </p>
              <ul className="mb-4 space-y-1 text-sm text-gray-600">
                <li>Охлаждение: Вт: {product.cooling_power}</li>
                <li>Охлаждение минимум: Вт: {product.cooling_power}</li>
                <li>Нагрев: Вт: {product.heating_power}</li>
                <li>Охлаждение максимум: Вт: {product.cooling_power_max}</li>
                <li>Нагрев минимум: Вт: {product.heating_power}</li>
              </ul>
              {product.installment_available && (
                <div className="flex items-center justify-between mb-4 bg-gray-100 p-2 rounded">
                  <p className="font-bold text-xs md:text-sm">
                    Доступна рассрочка Тинькофф
                  </p>
                  <img
                    src={tinkoffLogo}
                    alt="Tinkoff Bank"
                    className="w-[80px] md:w-[100px] h-auto"
                  />
                </div>
              )}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div className="flex items-center border rounded w-full sm:w-auto">
                  <button
                    className="px-3 py-1 bg-gray-200 w-10"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-12 text-center border-x"
                  />
                  <button
                    className="px-3 py-1 bg-gray-200 w-10"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-auto">
                  В корзину
                </button>
                <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded w-full sm:w-auto">
                  Купить в 1 клик
                </button>
              </div>
              <p className="text-sm text-gray-600">Артикул: {product.category}</p>
            </div>
          </div>

          {/* Tab section */}
          <div className="mt-8">
            <div className="flex border-b">
              {["Описание", "Детали", "Характеристики"].map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-4">
              {activeTab === "Описание" && (
                <p className="text-gray-600">
                  Стратегия компании haier за 32 года присутствия на мировом
                  рынке бытовой техники и электроники компания Haier завоевала
                  не только 9 престижных наград и премий в своей области, но и
                  признание покупателей. В основе глобального успеха Haier в
                  более чем 100 странах мира лежит стремление компании быть
                  близко к покупателю: именно на этом принципе вот уже много лет
                  строится работа всего международного концерна.
                </p>
              )}
              {activeTab === "Детали" && (
                <div className="text-gray-600">
                  <h3 className="font-bold mb-2">Подробные характеристики:</h3>
                  <ul className="list-disc pl-5">
                    <li>Тип: Сплит-система</li>
                    <li>Инверторная технология: Да</li>
                    <li>Мощность охлаждения: 9300 Вт</li>
                    <li>Мощность обогрева: 10200 Вт</li>
                    <li>Уровень шума внутреннего блока: 24 дБ</li>
                    <li>Класс энергоэффективности: A++</li>
                    <li>Функция самоочистки: Да</li>
                    <li>Режим "Сон": Да</li>
                    <li>Таймер: Да</li>
                    <li>Пульт ДУ: Да</li>
                  </ul>
                </div>
              )}
              {activeTab === "Характеристики" && (
                <div className="text-gray-600">
                  <h3 className="font-bold mb-2">Основные характеристики:</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Бренд</td>
                        <td className="py-2">Ballu</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Модель</td>
                        <td className="py-2">Olympio Edge BSO-09HN8_22Y</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Тип компрессора</td>
                        <td className="py-2">Инверторный</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">
                          Площадь помещения
                        </td>
                        <td className="py-2">до 25 м²</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Гарантия</td>
                        <td className="py-2">3 года</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Similar Products Section */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Похожие товары</h2>
              <span className="text-blue-500">КОНДИЦИОНЕРЫ</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                  <img
                    src={conditionerImage}
                    alt={product.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < product.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Тип: {product.type}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Основные режимы: {product.modes}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Уровень шума: {product.noiseLevel}
                  </p>
                  <p
                    className={`text-sm ${
                      product.inStock ? "text-green-500" : "text-red-500"
                    } mb-2`}
                  >
                    {product.inStock ? "В наличии" : "Нет в наличии"}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{product.price}</span>
                    <button className="bg-gray-200 p-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
        </div>
      </main>
    </div>
  );
}

export default Malumot;
