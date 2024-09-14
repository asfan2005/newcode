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

  if (loading) {
    return <div>Ma'lumotlar yuklanmoqda...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative min-h-screen">
      <img
        src={image3}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <div className="w-[30%] h-0.5 bg-white mb-6"></div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {data && data[0] ? data[0].title : "Ma'lumot mavjud emas"}
            </h2>
            <p className="text-white mb-4 text-base lg:text-lg">
              {data && data[0] ? data[0].description : "Ma'lumot mavjud emas"}
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 lg:px-8 lg:py-3 rounded text-base lg:text-lg font-semibold">
              ПОДРОБНЕЕ
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  icon: "🚀",
                  title: "Быстро",
                  description: "Поставка и установка в кратчайшие сроки",
                },
                {
                  icon: "💰",
                  title: "Недорого",
                  description:
                    "У нас среднерыночные цены и скидки для постоянных клиентов",
                },
                {
                  icon: "⚙️",
                  title: "Качественно",
                  description: "Опыт работы наших сотрудников более 9 лет",
                },
                {
                  icon: "🔑",
                  title: "Под ключ",
                  description: 'Выполняем полный спектр услуг "под ключ"',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 lg:p-6 rounded-lg shadow-lg"
                >
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center mb-3 lg:mb-4 text-xl lg:text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg lg:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
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