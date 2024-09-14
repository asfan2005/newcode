import React, { useState } from "react";
import image1 from "../../assets/image.svg" // Rasmlar yo'lini to'g'rilang
import image2 from "../../assets/image.svg"
import image3 from "../../assets/image.svg"

const slides = [
  {
    image: image1,
    title: "ОХЛАЖДАЕМ ВАШ ДОМ С МАКСИМАЛЬНЫМ КОМФОРТОМ В СПБ",
    description: "Широкий выбор кондиционеров от ведущих производителей нашего магазина"
  },
  {
    image: image2,
    title: "Экономичные решения для любого помещения",
    description: "Энергоэффективные модели для экономии вашего бюджета"
  },
  {
    image: image3,
    title: "Профессиональная установка и обслуживание",
    description: "Команда опытных специалистов к вашим услугам"
  }
];

function PageOne() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[300px] md:h-[503px] bg-cover bg-center flex items-center" 
         style={{backgroundImage: `url(${slides[currentSlide].image})`}}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-lg">
          <h1 className="text-2xl md:text-[40px] font-bold leading-tight text-gray-800 mb-2 md:mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 md:py-3 md:px-10 text-base md:text-lg font-semibold uppercase hover:bg-blue-600 transition duration-300">
            Подробнее
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 flex">
        <button onClick={prevSlide} className="bg-white text-gray-800 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mx-1 text-lg md:text-xl hover:bg-gray-100 transition duration-300">←</button>
        <button onClick={nextSlide} className="bg-white text-gray-800 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mx-1 text-lg md:text-xl hover:bg-gray-100 transition duration-300">→</button>
      </div>
    </div>
  );
}

export default PageOne;