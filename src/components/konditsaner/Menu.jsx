import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import telegram from "../../assets/telegram.svg";

function Menu() {
  const [openCategories, setOpenCategories] = useState({});

  const menuItems = [
    {
      id: 1,
      title: "Категории товаров",
      items: [
        { id: 11, title: "Тепловые насосы воздух-воздух", count: 32 },
        { id: 12, title: "Тепловые насосы воздух-вода", count: 43 },
        { id: 13, title: "Настенные кондиционеры", count: 32 },
        { id: 14, title: "Напольно-потолочные кондиционеры", count: 18 },
        { id: 15, title: "Кассетные кондиционеры", count: 25 },
        {
          id: 16,
          title: "Вентиляция",
          count: 31,
          subitems: [
            { id: 161, title: "Бытовая", count: 7 },
            { id: 162, title: "Приточно-вытяжная", count: 20 },
            { id: 163, title: "Промышленная", count: 4 },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Тип кондиционера",
      items: [
        { id: 21, title: "Сплит-система", count: 25 },
        { id: 22, title: "Мульти-сплит система", count: 15 },
        { id: 23, title: "Канальный", count: 10 },
        { id: 24, title: "Оконный", count: 5 },
        { id: 25, title: "Мобильный", count: 8 },
        { id: 26, title: "Колонный", count: 3 },
      ],
    },
    {
      id: 3,
      title: "Уровень шума",
      items: [
        { id: 31, title: "До 20 дБ", count: 5 },
        { id: 32, title: "20-30 дБ", count: 15 },
        { id: 33, title: "30-40 дБ", count: 20 },
        { id: 34, title: "40-50 дБ", count: 12 },
        { id: 35, title: "Более 50 дБ", count: 8 },
      ],
    },
    {
      id: 4,
      title: "Площадь помещения",
      items: [
        { id: 41, title: "До 20 м²", count: 10 },
        { id: 42, title: "20-40 м²", count: 20 },
        { id: 43, title: "40-60 м²", count: 15 },
        { id: 44, title: "60-80 м²", count: 12 },
        { id: 45, title: "80-100 м²", count: 8 },
        { id: 46, title: "Более 100 м²", count: 5 },
      ],
    },
    {
      id: 5,
      title: "Производитель",
      items: [
        { id: 51, title: "Daikin", count: 30 },
        { id: 52, title: "Mitsubishi", count: 25 },
        { id: 53, title: "LG", count: 20 },
        { id: 54, title: "Samsung", count: 18 },
        { id: 55, title: "Panasonic", count: 15 },
        { id: 56, title: "Toshiba", count: 12 },
      ],
    },
    {
      id: 6,
      title: "Цвет",
      items: [
        { id: 61, title: "Белый", count: 40 },
        { id: 62, title: "Серебристый", count: 15 },
        { id: 63, title: "Черный", count: 10 },
        { id: 64, title: "Бежевый", count: 5 },
        { id: 65, title: "Красный", count: 3 },
        { id: 66, title: "Золотой", count: 2 },
      ],
    },
    {
      id: 7,
      title: "Обогрев до °C",
      items: [
        { id: 71, title: "До -5°C", count: 10 },
        { id: 72, title: "До -15°C", count: 20 },
        { id: 73, title: "До -25°C", count: 15 },
        { id: 74, title: "До -30°C", count: 8 },
        { id: 75, title: "Ниже -30°C", count: 3 },
      ],
    },
    {
      id: 8,
      title: "Wi-Fi опция",
      items: [
        { id: 81, title: "Есть", count: 30 },
        { id: 82, title: "Нет", count: 20 },
        { id: 83, title: "Возможность установки", count: 10 },
      ],
    },
  ];

  useEffect(() => {
    setOpenCategories({ 1: true });
  }, []);

  const toggleCategory = (id) => {
    if (id === 1) return;
    setOpenCategories((prev) => ({
      1: true,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="menu bg-white p-6 w-80 shadow-2xl rounded-lg">
      {menuItems.map((item) => (
        <div key={item.id} className="mb-6">
          <div
            className={`flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-md transition duration-300 ${
              item.id === 1 ? 'bg-gray-100' : ''
            }`}
            onClick={() => toggleCategory(item.id)}
          >
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            {item.id !== 1 && (
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                  openCategories[item.id] ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
          {(openCategories[item.id] || item.id === 1) && item.items && (
            <ul className="mt-3 ml-4 space-y-2">
              {item.items.map((subItem) => (
                <li key={subItem.id} className="group">
                  <div className="flex justify-between text-sm text-gray-700 hover:text-blue-600 transition duration-300">
                    <span className="group-hover:translate-x-1 transition duration-300">{subItem.title}</span>
                    {subItem.count && (
                      <span className="text-gray-500 group-hover:text-blue-500 transition duration-300">({subItem.count})</span>
                    )}
                  </div>
                  {subItem.subitems && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {subItem.subitems.map((subSubItem) => (
                        <li
                          key={subSubItem.id}
                          className="flex justify-between text-xs text-gray-600 hover:text-blue-500 transition duration-300"
                        >
                          <span>{subSubItem.title}</span>
                          {subSubItem.count && (
                            <span className="text-gray-500">
                              ({subSubItem.count})
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="telegram-block bg-blue-50 p-5 rounded-lg mt-8 shadow-inner">
        <div className="flex flex-col items-center mb-4">
          <img className="w-[137px] h-[137px] mb-3" src={telegram} alt="Telegram" />
          <p className="text-sm text-center text-gray-700 font-medium">
            Будьте в курсе наших акций и новостей
          </p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Подписаться
        </button>
      </div>
    </div>
  );
}

export default Menu;