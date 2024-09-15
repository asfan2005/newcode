import React, { useEffect, useState } from "react";
import axios from "axios";
import image9 from "../../assets/image9.svg";

function Page9() {
  const [contactInfo, setContactInfo] = useState(null);
  const [locationName, setLocationName] = useState("");
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
        setContactInfo(response.data.results[0]);

        if (response.data.results[0].lat && response.data.results[0].lon) {
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${response.data.results[0].lat}&lon=${response.data.results[0].lon}&zoom=18&addressdetails=1`
          );
          const address = locationResponse.data.address;
          const fullName = locationResponse.data.display_name;

          const relevantParts = [
            address.road,
            address.suburb,
            address.city || address.town || address.village,
          ].filter(Boolean);

          const shortName =
            relevantParts.length > 0
              ? relevantParts.join(", ")
              : fullName.split(", ").slice(0, 2).join(", ");

          setLocationName(shortName || "Название местоположения не найдено");
        } else {
          setLocationName("Koordinatalar mavjud emas");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLocationClick = (lat, lon) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
      "_blank"
    );
  };

  const handleTelegramClick = (username) => {
    window.open(`https://t.me/${username}`, "_blank");
  };

  const handleWhatsAppClick = (phone) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, "")}`, "_blank");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!contactInfo) return <div>No contact information available</div>;

  return (
    <div
      className="container mx-auto lg:h-[430px] min-h-[630px] bg-cover bg-center flex items-center py-10 px-4"
      style={{ backgroundImage: `url(${image9})` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[526px] bg-white p-6 lg:p-8 rounded-lg shadow-lg flex flex-col mb-10 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Заказать звонок
          </h2>
          <p className="text-gray-600 mb-6 text-base lg:text-lg">
            Свяжитесь с нами любым удобным для Вас способом.
            <br />
            Мы всегда рады ответить на Ваши вопросы!
          </p>
          <form className="flex-grow flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 text-base lg:text-lg"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Укажите имя"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-base lg:text-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2 text-base lg:text-lg"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Укажите номер телефона"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-base lg:text-lg"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 text-base lg:text-lg font-semibold"
              >
                Отправить
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных
              </p>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 text-white lg:pl-20 mt-10 lg:mt-0">
          <div className="mb-4 flex items-center gap-5">
            <div className="w-20 h-0.5 bg-white"></div>
            <h1 className="text-3xl lg:text-5xl font-bold">
              {contactInfo.title}
            </h1>
          </div>
          <p className="text-lg lg:text-xl mb-8">{contactInfo.description}</p>
          <div className="space-y-6">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handlePhoneClick(contactInfo.phone)}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-lg lg:text-xl">{contactInfo.phone}</span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleEmailClick(contactInfo.email)}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-lg lg:text-xl">{contactInfo.email}</span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() =>
                handleLocationClick(contactInfo.lat, contactInfo.lon)
              }
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full mr-4 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-lg lg:text-xl">{locationName}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => handleTelegramClick(contactInfo.telegram)}
              >
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => handleWhatsAppClick(contactInfo.phone)}
              >
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.4379.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page9;
