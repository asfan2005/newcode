import React, { useState } from "react";
import image4 from "../../assets/image4.svg";
import teksIcon from "../../assets/teksIcon.svg";

function Page4() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Modal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-[#333333]">Оставить заявку</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299E1]" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
            <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4299E1]" required />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-[#4299E1] text-white px-4 py-2 rounded-md hover:bg-[#3182CE] transition duration-300">Отправить</button>
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4 lg:p-8 bg-white">
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img 
          src={image4} 
          alt="Кондиционер на здании" 
          className="w-full max-w-[554px] h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-8">
        <div className="mb-4">
          <div className="w-[102px] h-0.5 bg-[#4299E1] mb-4"></div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333] leading-tight">
            Поставка и монтаж кондиционеров в СПБ
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Наша компания уже более 10-ти лет занимается поставкой и установкой систем кондиционирования и вентиляции
        </p>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-[#333333]">Монтаж кондиционеров от 16 000 рублей</h2>
        <ul className="mb-8 space-y-4">
          {["Только проверенные бренды", "Доставка оборудования", "Собственные монтажные бригады", "Проектирование и согласование"].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={teksIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={openModal}
          className="w-full sm:w-[249px] h-[60px] sm:h-[77px] px-4 sm:px-[43px] py-3 sm:py-[17px] bg-[#4299E1] text-white text-base sm:text-lg font-semibold rounded-md hover:bg-[#3182CE] transition duration-300 shadow-[0px_0px_2.05px_0px_rgba(229,242,255,1),0px_0px_4.11px_0px_rgba(229,242,255,1),0px_0px_14.38px_0px_rgba(229,242,255,1),0px_0px_28.76px_0px_rgba(229,242,255,1),0px_0px_49.31px_0px_rgba(229,242,255,1),0px_0px_86.28px_0px_rgba(229,242,255,1)]"
        >
          Оставить заявку
        </button>
      </div>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default Page4;