import React, { useState } from "react";
import image5 from "../../assets/image5.svg";
import teksIcon from "../../assets/teksIcon.svg";

function Page5() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Modal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Оставить заявку</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
            <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Отправить</button>
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  );

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
          <div className="w-[102px] h-1 bg-blue-400 mb-6"></div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Сервисное обслуживание кондиционеров в СПБ
          </h1>
          <p className="text-gray-600 mb-6">
            Для корректной работы кондиционера необходимо своевременно
            производить техническое обслуживание. наши специалисты производят
            полный спектр услуг по сервису
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2 gap-2">
              <img src={teksIcon} alt="" />
              <span className="text-gray-600">
                Плановое техническое обслуживание
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={teksIcon} alt="" />
              <span className="text-gray-600">Гарантийное обслуживание</span>
            </li>
          </ul>
          <button 
            onClick={openModal}
            className="w-full sm:w-[249px] h-[60px] sm:h-[77px] px-4 sm:px-[43px] py-3 sm:py-[17px] bg-[#4299E1] text-white text-base sm:text-lg font-semibold rounded-md hover:bg-[#3182CE] transition duration-300 shadow-[0px_0px_2.05px_0px_rgba(229,242,255,1),0px_0px_4.11px_0px_rgba(229,242,255,1),0px_0px_14.38px_0px_rgba(229,242,255,1),0px_0px_28.76px_0px_rgba(229,242,255,1),0px_0px_49.31px_0px_rgba(229,242,255,1),0px_0px_86.28px_0px_rgba(229,242,255,1)]"
          >
            Оставить заявку
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default Page5;