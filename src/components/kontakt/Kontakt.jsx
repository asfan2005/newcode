import React, { useEffect, useState } from "react";
import { Header, Page9, Footer } from "../index";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

function Kontakt() {
  const [contakt, setContakt] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
        const response = await axios.get(
          "http://212.67.12.22:8000/blog/contact-info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContakt(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative w-full">
        <p className="text-gray-400 mx-2 text-[15px]">ГЛАВНАЯ / Контакты</p>
        <div className="my-10 px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : contakt.length > 0 ? (
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2">
                <p className="text-gray-500 mb-6">
                  {contakt[0].description ||
                    "Свяжитесь с нами любым удобным для Вас способом. Мы всегда рады ответить на Ваши вопросы!"}
                </p>
                <div className="flex flex-col space-y-4">
                  <a href={`tel:${contakt[0].phone}`} className="flex items-center hover:text-blue-500">
                    <div className="bg-blue-500 rounded-full p-2 mr-4">
                      <FaPhone className="text-white" />
                    </div>
                    <span>{contakt[0].phone || "Номер телефона отсутствует"}</span>
                  </a>
                  <a href={`mailto:${contakt[0].email}`} className="flex items-center hover:text-blue-500">
                    <div className="bg-blue-500 rounded-full p-2 mr-4">
                      <FaEnvelope className="text-white" />
                    </div>
                    <span>{contakt[0].email || "Email отсутствует"}</span>
                  </a>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${contakt[0].lat},${contakt[0].lon}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
                    <div className="bg-blue-500 rounded-full p-2 mr-4">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <span>Санкт-Петербург</span>
                  </a>
                  <div className="flex space-x-4 mt-2">
                    <a href={`https://t.me/${contakt[0].telegram}`} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded-full p-2 hover:bg-blue-500 hover:text-white">
                      <FaTelegramPlane className="text-gray-500 hover:text-white" />
                    </a>
                    <a href={`https://wa.me/${contakt[0].whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded-full p-2 hover:bg-green-500 hover:text-white">
                      <FaWhatsapp className="text-gray-500 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                {contakt[0].lat && contakt[0].lon ? (
                  <iframe
                    src={`https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&amp;source=constructor&amp;ll=${contakt[0].lon},${contakt[0].lat}&amp;z=15`}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Yandex Map"
                  ></iframe>
                ) : (
                  <p>Координаты карты отсутствуют</p>
                )}
              </div>
            </div>
          ) : (
            <p>Контактная информация отсутствует</p>
          )}
        </div>
        <Page9 />
        <Footer />
      </main>
    </div>
  );
}

export default Kontakt;
