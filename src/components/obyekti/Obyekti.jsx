import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header, Page9, Footer } from "../index";

function Obyekti() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
        const response = await axios.get(
          "http://212.67.12.22:8000/blog/object-image",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
      <Header />
      <main id="main-content" className="py-6 sm:py-12 my-10 lg:py-12">
        <p className="text-gray-400 text-xs sm:text-sm mb-2">ГЛАВНАЯ / Объекты</p>
        <h1 className="text-[#373737] text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Галерея наших объектов
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${
                index === 0 || index === 3 ? "sm:row-span-2" : ""
              } aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-md`}
            >
              <img
                src={image.images}
                alt={`Object ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <Page9 />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Obyekti;