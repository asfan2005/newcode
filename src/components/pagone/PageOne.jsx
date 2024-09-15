import React, { useState, useEffect } from "react";
import axios from "axios";

function PageOne() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
        const response = await axios.get(
          "http://212.67.12.22:8000/blog/banner",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSlides(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <div className="container mx-auto relative h-[300px] md:h-[503px] bg-cover bg-center flex items-center" 
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
          <button className="w-[214px] h-[67px] px-[43px] py-[17px] bg-[#5896E2] text-white text-base md:text-lg font-semibold uppercase hover:bg-blue-600 transition duration-300">
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