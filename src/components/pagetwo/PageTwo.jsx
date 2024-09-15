import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Header } from "../index";

function PageTwo() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
        const response = await axios.get(
          "http://212.67.12.22:8000/blog/products/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollTo = (groupIndex) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * groupIndex,
        behavior: 'smooth'
      });
      setCurrentGroup(groupIndex);
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  const groupCount = Math.ceil(products.length / 3);

  return (
    <>
      <Header selectedProduct={selectedProduct} />
      <div className="p-4 sm:p-6 bg-white container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">Лучший выбор</h1>
          <div className="flex items-center">
            <div className="w-12 sm:w-16 h-px bg-gray-300 mr-2 sm:mr-4"></div>
            <span className="text-gray-500 uppercase text-xs sm:text-sm">
              Кондиционеры
            </span>
          </div>
        </div>
        <div className="relative">
          <div 
            ref={sliderRef} 
            className="flex overflow-x-hidden scroll-smooth"
          >
            {products.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/3 px-2 mb-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={item.images[0].image}
                    alt={item.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg sm:text-xl ${
                          i < Math.round(item.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-1"> Тип: {item.description}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">{item.details}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">{item.characteristics}</p>
                  <p className="text-xs sm:text-sm font-semibold mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-gray-400">{item.in_stock ? "В наличии" : "Нет в наличии"}</span>
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg sm:text-xl text-gray-900">
                      {parseFloat(item.price).toFixed(2)} ₽/шт
                    </p>
                    <button 
                      className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      onClick={() => setSelectedProduct(item)}
                    >
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(groupCount)].map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentGroup === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PageTwo;