import React from "react";
import image5 from "../../assets/image5.svg";

function Page5() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:order-2 mb-8 md:mb-0">
          <img
            src={image5}
            alt="Техник обслуживает кондиционер"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-1">
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Сервисное обслуживание кондиционеров в СПБ</h1>
          <p className="text-gray-600 mb-6">
            Для корректной работы кондиционера необходимо своевременно производить
            техническое обслуживание. наши специалисты производят полный спектр услуг по
            сервису
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Плановое техническое обслуживание</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Гарантийное обслуживание</span>
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page5;