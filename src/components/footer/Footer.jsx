import React, { useEffect, useState } from "react";
import axios from "axios";
import logo2 from "../../assets/logo2.svg";
import { Link } from "react-router-dom";

function Footer() {
  const [contakt, setContakt] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("Loading...");

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

        // Fetch location based on lat and lon
        if (response.data.results.length > 0) {
          const { lat, lon } = response.data.results[0];
          const locationResponse = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );
          setLocation(
            locationResponse.data.display_name ||
              "Название местоположения не найдено"
          );
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

  const contactInfo = contakt.length > 0 ? contakt[0] : null;

  return (
    <footer className="bg-[rgba(47,47,47,1)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <img
              style={{
                width: "121px",
                height: "45px",
              }}
              src={logo2}
              alt="CKBO Logo"
              className="mb-4"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold mb-4 text-lg">Кондиционеры</h3>
            <ul className="space-y-2">
              <li>Услуги</li>
              <li>Вентиляция</li>
              <li>Мультисплит системы</li>
              <li>Настенные кондиционеры</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold mb-4 text-lg">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to={"/obyekti"}>Объекты</Link>
              </li>
              <li>
                <Link to={"/news"}>Новости</Link>
              </li>
              <li>
                <Link to={"/dostavka"}>Доставка</Link>
              </li>
              <li>
                <Link to={"/Отзывы"}>Отзывы</Link>
              </li>
              <li>
                <Link to={"/div"}>Согласование С КГА</Link>
              </li>
              <li>
                <Link to={"/kontakt"}>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold mb-4 text-lg">Контакты</h3>
            <ul className="space-y-2">
              {contactInfo && (
                <>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                      <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
                    </svg>
                    {contactInfo.phone}
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                    </svg>
                    {contactInfo.email}
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {location}
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <svg
                      className="w-5 h-5 ml-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-8 pt-4 border-t border-gray-700 text-sm">
          <p className="mb-2 sm:mb-0">Политика и конфиденциальность</p>
          <p>2024©СКВО</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
