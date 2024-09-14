import React, { useEffect, useState } from "react";
import axios from "axios";

function Section({ onKonditsanerClick }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => onKonditsanerClick(product.id, product.category, product.quantity)}
          >
            <img src={product.images[0] || 'placeholder-image-url'} alt={product.title} className="w-full h-48 object-contain p-4" />
            <div className="p-4">
              <div className="flex mb-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={`text-xl ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}>
                    ★
                  </span>
                ))}
              </div>
              <h3 className="text-sm font-semibold mb-2 text-gray-800">{product.title}</h3>
              <p className="text-xs text-gray-600">{product.details}</p>
              <p className="text-xs text-gray-600">{product.characteristics}</p>
              <p className="text-xs text-gray-400 mt-2 flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
                {product.in_stock ? "В наличии" : "Нет в наличии"}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold text-gray-800">{`${parseFloat(product.price).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₽/шт`}</p>
                <button 
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`${product.title} savatga qo'shildi`);
                  }}
                >
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex">
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-2 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-blue-500 hover:bg-blue-100'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Section;