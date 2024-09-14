import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import image7 from "../../assets/image7.svg";
import Vector from "../../assets/Vector.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Page8() {
  const [isCarousel, setIsCarousel] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCarousel(window.innerWidth < 1028);
      setIsLargeText(window.innerWidth > 546);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const newsData = [
    {
      id: 1,
      image: image7,
      title: "О российском рынке систем кондиционирования в 2024 году",
      date: "17.02.2021",
      description:
        "АПИК сообщает также, что в России и в странах, входящих в Европейский экономический союз...",
      link: "Подробнее",
    },
    {
      id: 2,
      image: image7,
      title: "О российском рынке систем кондиционирования в 2024 году",
      date: "17.02.2021",
      description:
        "АПИК сообщает также, что в России и в странах, входящих в Европейский экономический союз...",
      link: "Подробнее",
    },
    {
      id: 3,
      image: image7,
      title: "О российском рынке систем кондиционирования в 2024 году",
      date: "17.02.2021",
      description:
        "АПИК сообщает также, что в России и в странах, входящих в Европейский экономический союз...",
      link: "Подробнее",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Новости
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-600 flex items-center">
            <div className="w-8 sm:w-12 md:w-16 lg:w-24 h-px bg-gray-300 mr-2"></div>
            ЧТО НОВОГО?
          </h2>
        </div>
        {isCarousel ? (
          <Slider {...settings}>
            {newsData.map((item) => (
              <div key={item.id} className="px-2">
                <NewsCard item={item} isLargeText={isLargeText} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <NewsCard key={item.id} item={item} isLargeText={isLargeText} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function NewsCard({ item, isLargeText }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 sm:h-48 object-cover"
      />
      <div className="p-4 flex flex-col h-64">
        <h3 className={`font-semibold mb-2 text-gray-800 leading-tight ${isLargeText ? 'text-lg sm:text-xl' : 'text-base'}`}>
          {item.title}
        </h3>
        <p className={`text-gray-500 mb-2 sm:mb-3 ${isLargeText ? 'text-sm sm:text-base' : 'text-xs'}`}>
          {item.date}
        </p>
        <p className={`text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-grow ${isLargeText ? 'text-sm sm:text-base' : 'text-xs'}`}>
          {item.description}
        </p>
        <a
          href="#"
          className={`text-blue-500 flex items-center gap-1 sm:gap-2 hover:text-blue-600 font-medium ${isLargeText ? 'text-sm sm:text-base' : 'text-xs'}`}
        >
          {item.link}
          <img src={Vector} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>
    </div>
  );
}

export default Page8;