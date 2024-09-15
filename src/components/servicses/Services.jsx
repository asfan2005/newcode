import React from "react";
import { Header, Page9, Footer } from "../index";
import servic from "../../assets/sevic.svg";

function Services() {
  return (
    <div className="container mx-auto px-4  md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <p className="text-gray-400 text-[14px]">
          ГЛАВНАЯ / Сервисное обслуживание вентиляционных систем в
          Санкт-Петербурге и ЛО
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <h1 className="text-3xl font-bold mb-4">
              Сервисное обслуживание вентиляционных систем в Санкт-Петербурге и
              ЛО
            </h1>
            <p className="mb-4 text-gray-400">
              Для долгой и эффективной работы вентиляционной системы необходимо
              регулярно выполнять сервисное обслуживание. Техническое
              обслуживание систем вентиляции в нашей компании предполагает самый
              широкий перечень работ:
            </p>
            <ul className="list-none pl-5 mb-4 space-y-2">
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Профилактический осмотр и диагностику систем
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Контроль надежности креплений, соединений, качества уплотнений,
                состояния заслонок и вентиляционных решеток
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Чистку вентилятора, каналов, воздуховодов, фильтров
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Выявление и устранение неисправностей, ремонт и замену деталей и
                узлов, вышедших из строя
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Замену мягких вставок, фильтрующих прокладок
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Проверку и замену автоматов, пускателей и предохранителей
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Замер уровня шума и вибрации
              </li>
              <li className="text-gray-400 flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                Инструктаж
              </li>
            </ul>
            <p className="mb-6 text-gray-400">
              Комплекс мероприятий позволяет предотвратить поломки, сбои в
              работе и гарантировать эффективную бесперебойную работу систем.
              Техническое обслуживание предотвратит ремонт систем вентиляции и
              приведет к существенной финансовой экономии, так как ремонт
              вентиляционной системы по стоимости окажется гораздо дороже ее
              обслуживания.
            </p>
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              <p>
                При возникновении любых проблем с вентиляцией – позвоните нам по
                номеру +7 981 898 78 98 или оставьте свою заявку на обратный
                звонок
              </p>
            </div>
          </div>
          <div className="md:w-1/2 pl-4 mt-6 md:mt-0">
            <img
              src={servic}
              alt="Сервисное обслуживание"
              className="w-full h-auto"
            />
          </div>
        </div>
       <div className="container mx-auto my-4">
       <Page9 />
       <Footer />
       </div>
      </main>
    </div>
  );
}

export default Services;
