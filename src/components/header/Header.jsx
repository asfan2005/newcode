import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaShoppingCart,
  FaTelegramPlane,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/logo.svg";
import icons from "../../assets/icon.svg";

function Header({ selectedProduct }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [contact, setContact] = useState({ phone: "", email: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Selected Product:", selectedProduct);
  }, [selectedProduct]);

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
        setContact(response.data.results[0] || { phone: "", email: "" });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topMenuItems = [
    { name: "Объекты", path: "/obyekti" },
    { name: "Новости", path: "/news" },
    { name: "Доставка", path: "/dostavka" },
    { name: "Отзывы", path: "/Отзывы" },
    { name: "Согласование С КГА", path: "/div" },
    { name: "Контакты", path: "/kontakt" },
  ];

  const conditionerItems = [
    {
      title: "Настенные кондиционеры",
      items: [
        "Мультисплит системы",
        "Мобильные кондиционеры",
        "Колонные кондиционеры",
      ],
    },
    {
      title: "Канальные кондиционеры",
      items: ["Касетные кондиционеры", "Напольно-потолочные кондиционеры"],
    },
    {
      title: "Тепловые насосы",
      items: ["Воздух-воздух", "Воздух-вода"],
    },
    {
      title: "Вентиляция",
      items: ["Бризеры", "Приточно-вытяжные"],
    },
  ];

  const serviceItems = [
    { title: "Монтаж вентиляции", path: "/ventilatsiya" },
    { title: "Сервис вентиляции", path: "/services" },
    { title: "Монтаж кондиционеров", path: "/montaj" },
    { title: "Сервис кондиционеров", path: "/servicKon" },
    { title: "Поставка ветиляционного оборудования", path: "/" },
    { title: "Установка настенных кондиционеров", path: "/ustanovka" },
    { title: "Проектирование", path: "/sistem" },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { type: "tween", duration: 0.3 },
    },
  };

  const handleKonditsanerClick = () => {
    setShowDropdown(true);
    setTimeout(() => {
      navigate("/konditsaner");
    }, 300);
  };

  const asosiyPage = () => {
    navigate("/");
  };

  const dropdownStyles = {
    width: "800px",
    maxHeight: "400px",
    overflowY: "auto",
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/your_telegram_username", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/your_whatsapp_number", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contact.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  const handleCartClick = () => {
    if (selectedProduct) {
      navigate("/korzina", { state: { selectedProduct } });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <header
        className={`w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between items-center text-sm mb-4 pb-2 border-b border-gray-200">
            <div className="flex space-x-4">
              {topMenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="hover:text-blue-500 cursor-pointer relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <FaTelegramPlane
                onClick={handleTelegramClick}
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              />
              <FaWhatsapp
                onClick={handleWhatsAppClick}
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              />
              <FaPhoneAlt
                onClick={handlePhoneClick}
                className="text-blue-500 cursor-pointer"
              />
              <span onClick={handlePhoneClick} className="cursor-pointer">
                {contact.phone}
              </span>
              <FaEnvelope
                onClick={handleEmailClick}
                className="text-blue-500 cursor-pointer"
              />
              <span onClick={handleEmailClick} className="cursor-pointer">
                {contact.email}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                onClick={asosiyPage}
                src={logo}
                alt="СКВО"
                className="h-10 w-auto cursor-pointer"
              />
              {isMobile && (
                <div className="flex flex-col">
                  <span className="font-semibold">{contact.phone}</span>
                  <span className="text-blue-500 text-sm">Заказать звонок</span>
                </div>
              )}
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              <img src={icons} alt="" className="h-6" />
              <div className="relative group">
                <span
                  className="font-semibold cursor-pointer flex items-center"
                  onClick={() => setShowDropdown(!showDropdown)}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link to={"/konditsaner"} className="flex items-center">
                    Кондиционеры <FaChevronDown className="ml-1" />
                  </Link>
                </span>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      className="absolute top-full left-0 bg-white shadow-md py-4 mt-1 z-10"
                      style={dropdownStyles}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <div className="grid grid-cols-4 gap-4 p-4">
                        {conditionerItems.map((category, index) => (
                          <div key={index}>
                            <h3 className="font-semibold mb-2">
                              {category.title}
                            </h3>
                            <ul>
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="mb-1">
                                  <Link
                                    to={`/konditsaner/${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="text-gray-700 hover:text-blue-500"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative group">
                <span
                  className="font-semibold cursor-pointer flex items-center"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  Услуги <FaChevronDown className="ml-1" />
                </span>
                <AnimatePresence>
                  {showServicesDropdown && (
                    <motion.div
                      className="absolute top-full left-0 bg-white shadow-md py-4 mt-1 z-10"
                      style={dropdownStyles}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                      <div className="grid grid-cols-3 gap-4 p-4">
                        {serviceItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span
                onClick={() => navigate("/ventilatsiya")}
                className="font-semibold cursor-pointer"
              >
                Вентиляция
              </span>
            </nav>

            <div className="flex items-center space-x-4">
              {!isMobile && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск"
                      className="pl-10 pr-3 py-2 w-64 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    ЗАКАЗАТЬ ЗВОНОК
                  </button>
                  <div className="relative">
                    <FaShoppingCart
                      onClick={handleCartClick}
                      className="text-2xl text-gray-600 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                    />
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {selectedProduct ? 1 : 0}
                    </span>
                  </div>
                </>
              )}
              {isMobile && (
                <>
                  <FaSearch className="text-xl text-gray-600 cursor-pointer" />
                  <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="text-gray-600 focus:outline-none"
                  >
                    {showMobileMenu ? (
                      <FaTimes className="text-xl" />
                    ) : (
                      <FaBars className="text-xl" />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showMobileMenu && isMobile && (
          <motion.div
            className="lg:hidden bg-white fixed top-[60px] left-0 right-0 z-40 shadow-md overflow-y-auto max-h-[calc(100vh-60px)]"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="py-4 px-4">
              <nav className="flex flex-col space-y-4">
                {topMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2">
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={handleKonditsanerClick}
                  >
                    Кондиционеры
                  </span>
                  {conditionerItems.map((category, index) => (
                    <div key={index} className="pl-4">
                      <h4 className="font-medium mb-1">{category.title}</h4>
                      {category.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={`/konditsaner/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-gray-700 hover:text-blue-500 py-1"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold">Услуги</span>
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="text-gray-800 hover:text-blue-500 transition-colors duration-300 pl-4"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/ventilatsiya"
                  className="text-gray-800 hover:text-blue-500 transition-colors duration-300 font-semibold"
                >
                  Вентиляция
                </Link>
              </nav>
              <div className="mt-4 flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  ЗАКАЗАТЬ ЗВОНОК
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
