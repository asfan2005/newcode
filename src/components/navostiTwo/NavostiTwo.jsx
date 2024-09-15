import React from "react";
import { Header, Page9, Footer } from "../index";
import navosti2 from "../../assets/navosti2.svg";
import Vector from "../../assets/Vector.svg";
import { Link } from "react-router-dom";
function NavostiTwo() {
  return (
    <div className="container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <p className="text-gray-400 text-[15px]">ГЛАВНАЯ / Новости</p>
        <h1 className="text-[rgba(55,55,55,1)] text-[30px]">Новости</h1>
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
                <Link to={"/navosti"}>
                  <a
                    href="#"
                    className="text-blue-500 text-sm flex items-center gap-3"
                  >
                    Подробнее
                    <img src={Vector} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="my-3">
          <Page9 />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default NavostiTwo;
