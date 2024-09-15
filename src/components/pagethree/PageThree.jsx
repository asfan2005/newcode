import React, { useEffect, useState } from "react";
import image3 from "../../assets/image3.svg";
import axios from "axios";

function PageThree() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
        const response = await axios.get(
          "http://212.67.12.22:8000/blog/about-company",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Ma'lumotlar yuklanmoqda...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  const features = [
    { icon: "🚀", title: "Быстро", description: "Поставка и установка в кратчайшие сроки" },
    { icon: "💰", title: "Недорого", description: "У нас среднерыночные цены и скидки для постоянных клиентов" },
    { icon: "⚙️", title: "Качественно", description: "Опыт работы наших сотрудников более 9 лет" },
    { icon: "🔑", title: "Под ключ", description: 'Выполняем полный спектр услуг "под ключ"' },
  ];

  return (
    <div className="relative container mx-auto min-h-[701px">
      <div className="absolute inset-0">
        <img
          src={image3}
          alt="Background"
          className="w-full h-[701px] object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <div className="w-[30%] h-0.5 bg-white mb-6"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
              {data?.[0]?.title || "Ma'lumot mavjud emas"}
            </h2>
            <p className="text-white mb-4 text-sm sm:text-base lg:text-lg">
              {data?.[0]?.description || "Ma'lumot mavjud emas"}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded text-sm sm:text-base lg:text-lg font-semibold">
              ПОДРОБНЕЕ
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 text-lg sm:text-xl lg:text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageThree;