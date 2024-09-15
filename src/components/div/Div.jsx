import React from "react";
import { Header, Page9, Footer } from "../index";
import div from "../../assets/div.svg";

function Div() {
  return (
    <div className="container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-20 md:my-0 relative">
        <div className="flex container mx-auto flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Согласование с КГА
            </h1>
            <p className="text-gray-400 mb-4">
              Выполняем работы по согласованию кондиционеров с Комитетом по
              Градостроительству Санкт-Петербурга
            </p>
            <p className="mb-2 text-gray-400">Производим весь процесс:</p>
            <ul className="mb-6 text-gray-600">
              <li className="flex items-center text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Сбор необходимых данных
              </li>
              <li className="flex items-center text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Подготовка чертежа
              </li>
              <li className="flex items-center text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Подача документов в КГА
              </li>
              <li className="flex items-center text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Подача акта о монтаже оборудования после согласования и
                установки
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded w-full md:w-auto">
              Оставить заявку
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={div}
              alt="Здание КГА"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="container mx-auto mx-auto my-8 md:my-12">
          <p className="text-gray-400 mb-8 text-sm">
            На данный момент более 60 % управляющих компаний требуют
            предоставление согласования с КГА. В случае отсутствия необходимого
            документа УК может не дать доступ на кровлю. А в случае уже
            смонтированного оборудования собственник может получить судебное
            предписание на демонтаж, а также штраф
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Стоимость согласования
              </h2>
              <p className="text-gray-400">Работы "под ключ" 8 000 рублей</p>
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Срок согласования
              </h2>
              <p className="flex items-center text-gray-400">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                15 Рабочих Дней (3 Недели) + 5 Рабочих Дней Для Подготовки
                Документов
              </p>
            </div>
          </div>
        </div>
        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Div;
