import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Menu, Section, Page9, Footer } from "../index";

const Konditsaner = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1050);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleKonditsanerClick = (id, category, quantity) => {
    navigate(`/malumot/${category}`, { 
      state: { 
        productId: id,
        category: category,
        quantity: quantity
      } 
    });
  };

  return (
    <div className=" container mx-auto px-4 md:my-10">
      <Header />
      <main id="main-content" className="my-10 md:my-0 relative">
        <nav className="text-sm text-gray-500 mb-4">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">
                Главная
              </a>
              <span className="mx-2">/</span>
            </li>
            <li>Кондиционеры</li>
          </ol>
        </nav>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Кондиционеры
          </h1>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {isMobile && (
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center bg-gray-100 rounded-md w-full sm:w-auto h-12 px-4"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span className="text-sm font-medium">Фильтр</span>
              </button>
            )}

            <div className="relative hidden md:block w-64">
              <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition duration-150 ease-in-out">
                <option>Сортировать по умолчанию</option>
                <option>По популярности</option>
                <option>По цене (возрастание)</option>
                <option>По цене (убывание)</option>
                <option>По новизне</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 relative">
          {(!isMobile || showMenu) && (
            <aside 
              className={`w-full ${
                isMobile 
                  ? 'fixed top-0 left-0 h-full bg-white shadow-lg z-50 overflow-y-auto'
                  : 'md:w-1/4'
              }`}
              style={{
                transform: isMobile ? (showMenu ? 'translateX(0)' : 'translateX(-100%)') : 'none',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              {isMobile && (
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <Menu />
            </aside>
          )}
          <section className={`w-full ${!isMobile ? 'md:w-3/4' : ''}`}>
            <Section onKonditsanerClick={handleKonditsanerClick} />
          </section>
        </div>
        <div className="w-full" style={{
          marginTop:"50px"
        }}>
          <Page9 />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Konditsaner;