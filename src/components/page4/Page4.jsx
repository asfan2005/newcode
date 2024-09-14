import React from "react";
import image4 from "../../assets/image4.svg";

function Page4() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-white">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img 
          src={image4} 
          alt="Кондиционер на здании" 
          className="w-full max-w-[554px] h-[474px] object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Поставка и монтаж кондиционеров в СПБ</h1>
        <p className="text-gray-600 mb-4">
          Наша компания уже более 10-ти лет занимается поставкой и установкой систем кондиционирования и вентиляции
        </p>
        <h2 className="text-lg md:text-xl font-semibold mb-4">Монтаж кондиционеров от 16 000 рублей</h2>
        <ul className="mb-6">
          {["Только проверенные бренды", "Доставка оборудования", "Собственные монтажные бригады", "Проектирование и согласование"].map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <button className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default Page4;