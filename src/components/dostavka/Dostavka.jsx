import React, { useEffect, useState } from "react";
import { Header, Page9, Footer } from "../index";
import dostavkaImage from "../../assets/dostavka.svg";
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
import axios from "axios";
function Dostavka() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [dostavka, setDostavka] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
        const response = await axios.get(
          "http://212.67.12.22:8000/blog/delivery",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDostavka(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
  const visibleSlides = slides.slice(
    currentIndex,
    currentIndex + (isMobile ? 2 : 4)
  );
  return (
    <div className="mx-auto px-4 max-w-7xl">
      <Header />
      <main id="main-content" className="my-8">
        <p className="text-gray-400 text-sm mb-2">Главная / Доставка</p>
        <h1 className="text-3xl font-bold mb-4">Доставка</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          dostavka.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-start mb-8"
            >
              <div className="md:w-1/2 pr-8">
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="mb-6 text-gray-600">{item.description}</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md">
                  Посмотреть каталог
                </button>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))
        )}

        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              Наши поставщики
            </h1>
            <div className="flex items-center">
              <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-px bg-gray-300 mr-2 sm:mr-4 hidden sm:block"></div>
              <span className="text-base sm:text-lg">С КЕМ МЫ </span>
              <span className="text-base sm:text-lg text-blue-500 font-semibold">
                РАБОТАЕМ
              </span>
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
            {[...Array(Math.ceil(slides.length / (isMobile ? 2 : 4)))].map(
              (_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === Math.floor(currentIndex / (isMobile ? 2 : 4))
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></span>
              )
            )}
          </div>
        </div>
        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Dostavka;
