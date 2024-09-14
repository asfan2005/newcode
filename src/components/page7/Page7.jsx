import React, { useState, useEffect } from "react";
import Frame1 from "../../assets/Frame1.svg";
import Frame2 from "../../assets/Frame2.svg";
import Frame3 from "../../assets/Frame3.svg";
import Frame4 from "../../assets/Frame4.svg";
import Frame5 from "../../assets/Frame1.svg";
import Frame6 from "../../assets/Frame2.svg";
import Frame7 from "../../assets/Frame3.svg";
import Frame8 from "../../assets/Frame4.svg";
import Frame9 from "../../assets/Frame1.svg";
import Frame10 from "../../assets/Frame2.svg";
import Frame11 from "../../assets/Frame3.svg";
import Frame12 from "../../assets/Frame4.svg";

function Page7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    { image: Frame1, alt: "Quattro Clima" },
    { image: Frame2, alt: "Daikin" },
    { image: Frame3, alt: "Cooper&Hunter" },
    { image: Frame4, alt: "Gree" },
    { image: Frame5, alt: "Quattro Clima" },
    { image: Frame6, alt: "Daikin" },
    { image: Frame7, alt: "Cooper&Hunter" },
    { image: Frame8, alt: "Gree" },
    { image: Frame9, alt: "Quattro Clima" },
    { image: Frame10, alt: "Daikin" },
    { image: Frame11, alt: "Cooper&Hunter" },
    { image: Frame12, alt: "Gree" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [slides.length]);

  const visibleSlides = slides.slice(currentIndex, currentIndex + (isMobile ? 2 : 4));

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
          Производители климатической техники
        </h1>
        <div className="flex items-center">
          <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-gray-300 mr-2 sm:mr-4 hidden sm:block"></div>
          <span className="text-base sm:text-lg">С КЕМ МЫ </span>
          <span className="text-base sm:text-lg text-blue-500 font-semibold">РАБОТАЕМ</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {visibleSlides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className="w-full h-auto object-contain"
          />
        ))}
      </div>
      <div className="flex justify-center space-x-2 mb-8">
        {[...Array(Math.ceil(slides.length / (isMobile ? 2 : 4)))].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === Math.floor(currentIndex / (isMobile ? 2 : 4))
                ? "bg-blue-500"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Page7;