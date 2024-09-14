import React from "react";
import { Header, Page9, Footer } from "../index";
import sistem from "../../assets/sistem.svg";

function Sistem() {
  return (
    <div className="mx-auto px-4 max-w-full md:my-10">
      <Header />
      <main id="main-content" className="my-5 md:my-10 relative">
        <div className="flex flex-col md:flex-row justify-around max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
            <p className="text-gray-400 text-[13px] md:text-[15px] mb-2">
              ГЛАВНАЯ / Проектирование систем вентиляции в Санкт-Петербурге и
              Лен. области
            </p>
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Проектирование систем вентиляции в Санкт-Петербурге и Лен. области
            </h1>
            <div className="text-sm md:text-base mb-4 text-gray-400">
              <p className="mb-2">
                Профессиональное проектирование вентиляции заключается в расчете
                необходимого воздухообмена для конкретных помещений, в
                зависимости от их назначения, а также в подборе оборудования.
              </p>
              <p className="mb-2">
                В качестве исходных данных служит поэтажный план объекта с
                указанием точной площади помещений. При этом, учитывается
                кратность воздухообмена, вычисляемая с учетом количества
                присутствующих людей, общей мощности тепловых установок,
                необходимой кратности воздухообмена и назначением объекта.
              </p>
              <p className="mb-2">
                Наша компания осуществляет услуги по проектированию для жилых и
                коммерческий помещений, а именно:
              </p>
              <ul className="list-none mb-2 pl-2 md:pl-4">
                {[
                  "Квартиры и загородные дома",
                  "Кафе и рестораны",
                  "Офисные помещения",
                  "Торговые центры",
                  "Производственные объекты",
                ].map((item, index) => (
                  <li key={index} className="flex items-center mb-1">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={sistem}
              alt="Проектирование систем вентиляции"
              className="max-w-full h-auto mx-auto"
              width="526"
              height="481"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-5 justify-between max-w-7xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Стоимость проекта</h2>
            <div className="text-gray-400">
              <p className="mb-2">
                Стоимость проектирования рассчитывается индивидуально, в
                зависимости от сложности объекта
              </p>
              <p className="mb-2">Цены на проект начинаются от 10 000 рублей</p>
              <p>Срок разработки проектных решений - от 1 недели</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Что входит в стоимость:</h2>
            <ul className="list-none">
              {[
                "Сведения об объекте",
                "Эффективное инженерное решение",
                "Прокладка межблочной трассы до 3-х метров;",
                "Спецификации оборудования и материалов",
                "Схемы систем вентиляции и кондиционирования",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-400 mb-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Sistem;
