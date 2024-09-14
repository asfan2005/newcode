import React from "react";
import k1 from "../../assets/k1.svg";
import k2 from "../../assets/k2.svg";
import k3 from "../../assets/k3.svg";
import "./page6.css";

function Page6() {
  const images = [k1, k2, k3, k1, k2, k3];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Объекты
        </h2>
        <div className="flex items-center">
          <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-gray-300 mr-2 sm:mr-4"></div>
          <p className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap">
            ГАЛЕРЕЯ НАШИХ ОБЪЕКТОВ
          </p>
        </div>
      </div>
      <div className="custom-scrollbar">
        <div
          className="flex space-x-6 pb-4"
          style={{ minWidth: "max-content" }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-none">
              <img
                src={img}
                alt={`Object ${index + 1}`}
                className="w-[400px] h-[250px] object-cover rounded-lg shadow-md transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page6;
