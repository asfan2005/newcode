import React from "react";
import { Header, Page9, Footer } from "../index";
import navosti1 from "../../assets/navosti1.svg";
import navosti2 from "../../assets/navosti2.svg";
import Vector from "../../assets/Vector.svg";
function Navosti() {
  return (
    <div className="container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-6 md:my-10 relative">
        <p className="text-gray-400 text-sm mb-4">
          ГЛАВНАЯ / Новости / О российском рынке систем кондиционирования в 2024
          году
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              О российском рынке систем кондиционирования в 2024 году
            </h1>
            <div className="md:hidden mb-4">
              <img
                src={navosti1}
                alt="Кондиционер"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="mb-4 text-gray-400 text-sm md:text-base">
              АПИК сообщает также, что в России и в странах, входящих в
              Европейский экономический союз (ЕАЭС), бытовые кондиционеры и
              мультизональные системы кондиционирования не производятся. Более
              того, в силу целого ряда финансовых и организационных причин,
              создание завода по производству бытовых кондиционеров в России
              признано нецелесообразным. Ограниченная линейка бытовых
              кондиционеров производится в Узбекистане. Однако там не
              производятся мультизональные системы, и Узбекистан не входит в
              число членов ЕАЭС.
            </p>
            <p className="mb-4 text-gray-400 text-sm md:text-base">
              Уход из России многих ведущих кондиционерных брендов вынудил
              российских девелоперов, проектные и монтажные организации замещать
              заложенное в проектах и частично поставленное на объекты
              оборудование доступными китайскими аналогами. Именно такой
              практики придерживаются в настоящее время организации нашей
              отрасли.
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              Ассоциация регулярно проводит верификационные испытания
              климатического оборудования. На основании результатов испытаний
              официально заявляет, что по качеству оборудования и по своим
              характеристикам китайские кондиционеры сейчас находятся на уровне
              известных мировых брендов.
            </p>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img
              src={navosti1}
              alt="Кондиционер"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Другие новости</h2>
            <div className="flex items-center gap-2">
              <div
                className=""
                style={{
                  width: "120px",
                  height: "1px",
                  backgroundColor: "black",
                }}
              ></div>
              <span className="text-gray-500">ЧТО НОВОГО?</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={navosti2}
                  alt="Кондиционер"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">
                    О российском рынке систем кондиционирования в 2024 году
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">17.02.2021</p>
                  <p className="text-gray-400 text-sm mb-4">
                    АПИК сообщает также, что в России и в странах, входящих в
                    Европейский экономический союз...
                  </p>
                  <a href="#" className="text-blue-500 text-sm flex items-center gap-2">
                    Подробнее
                    <img src={Vector} alt="" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="my-5">
      <Page9 />
      <Footer />
      </div>
      </main>
    </div>
  );
}

export default Navosti;
