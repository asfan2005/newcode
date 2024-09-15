import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer } from "../index";
import image2 from "../../assets/image2.svg";
import korzina from "../../assets/korzina.svg";

function Korzina() {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [basePrice, setBasePrice] = useState(36250.2);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (location.state && location.state.selectedProduct) {
      setSelectedProduct(location.state.selectedProduct);
      console.log("Selected Product:", location.state.selectedProduct);
      
      if (location.state.selectedProduct.price) {
        const price = parseFloat(location.state.selectedProduct.price);
        if (!isNaN(price)) {
          setBasePrice(price);
          setTotalPrice(price);
        }
      }
    }
  }, [location]);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    setTotalPrice(basePrice * newQuantity);
  };

  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };

  return (
    <div className="container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-[15px] text-gray-400 mb-2">ГЛАВНАЯ / Корзина</p>
          <h1 className="text-black text-[25px] font-bold mb-6">Корзина</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Левая часть */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-8 shadow-md p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                  <img
                    src={selectedProduct?.image || image2}
                    alt="Товар"
                    className="w-[183px] h-[110px] object-contain mr-0 sm:mr-4 mb-4 sm:mb-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-[16px] mb-2">
                      {selectedProduct?.name || "Сплит-система ballu olympio edge bso-09hn8 22y"}
                    </h3>
                    <button className="text-gray-500 text-[14px] border border-gray-300 rounded px-2 py-1">
                      Удалить ×
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-end">
                  <span className="font-bold text-[18px] mb-2">
                    {formatPrice(totalPrice)} ₽
                  </span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-3 py-1 text-[18px]"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="px-3 py-1 text-[18px]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <h2 className="font-bold text-xl mb-4">Детали оплаты</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block mb-2 text-[14px]">Имя*</label>
                  <input
                    type="text"
                    placeholder="Укажите имя"
                    className="w-full p-2 border rounded text-[14px]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[14px]">Фамилия*</label>
                  <input
                    type="text"
                    placeholder="Укажите фамилию"
                    className="w-full p-2 border rounded text-[14px]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-[14px]">Адрес*</label>
                  <input
                    type="text"
                    placeholder="Номер и название улицы"
                    className="w-full p-2 border rounded text-[14px]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[14px]">Телефон*</label>
                  <input
                    type="tel"
                    placeholder="Укажите телефон"
                    className="w-full p-2 border rounded text-[14px]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[14px]">E-mail*</label>
                  <input
                    type="email"
                    placeholder="Укажите электронную почту"
                    className="w-full p-2 border rounded text-[14px]"
                  />
                </div>
              </form>

              <h2 className="font-bold text-xl mb-4">Способ оплаты</h2>
              <div className="mb-8">
                <label className="flex items-center mb-2">
                  <input type="radio" name="payment" className="mr-2" />
                  <span className="text-[14px]">
                    Оплата при доставке (оплата наличными при доставке заказа)
                  </span>
                </label>
                <label className="flex items-center flex-wrap">
                  <input type="radio" name="payment" className="mr-2" />
                  <span className="text-[14px] mr-2">
                    Тинькофф банк (оплата через www.tinkoff.ru)
                  </span>
                  <img
                    style={{
                      width: "92px",
                      height: "38px",
                    }}
                    src={korzina}
                    alt="Тинькофф"
                    className="mt-2 sm:mt-0"
                  />
                </label>
              </div>

              <div>
                <label className="block mb-2 text-[14px]">Комментарий к заказу</label>
                <textarea
                  className="w-full p-2 border rounded text-[14px]"
                  rows="4"
                  placeholder="Введите комментарий"
                ></textarea>
              </div>
            </div>

            {/* Правая часть */}
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="font-bold text-xl mb-4">ВАШ ЗАКАЗ</h2>
                <div className="flex justify-between mb-2">
                  <span>Товары ({quantity})</span>
                  <span>{formatPrice(totalPrice)} руб.</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Оплата</span>
                  <span>оплата при доставке</span>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Введите код купона, если он у вас есть"
                    className="flex-grow p-2 border rounded-l-lg text-[14px]"
                  />
                  <button className="bg-gray-300 p-2 rounded-r-lg">→</button>
                </div>
                <div className="text-2xl font-bold mb-4">{formatPrice(totalPrice)} руб.</div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
                  ОФОРМИТЬ ЗАКАЗ
                </button>
              </div>
              <p className="text-gray-400 text-[14px] my-4">
                *Ваши данные будут использоваться для обработки заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей политике конфиденциальности.
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Korzina;