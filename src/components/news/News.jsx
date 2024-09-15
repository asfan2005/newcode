import React, { useEffect, useState } from "react";
import { Header } from "../index";
import axios from "axios";

function News() {
   const [news,setNews]=useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Njg0MzE3LCJpYXQiOjE3MjYwNzk1MTcsImp0aSI6ImI1MjFlMjhjNDdjYzRhZWNiODBmOWIzNzUxYjhkZWIyIiwidXNlcl9pZCI6MX0.ItWrUAskZMdpoyD0tAJGFRaBOpI1gdV3FaXp9fdXXkM";
         const response = await axios.get(
           "http://212.67.12.22:8000/blog/news",
           {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           }
         );
         setNews(response.data.results);
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
      <main id="main-content" className="my-10 md:my-0 relative">
        <h1 className="text-2xl font-bold mb-8 text-gray-400">Последний Новости</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={item.images} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Published on: {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default News;
