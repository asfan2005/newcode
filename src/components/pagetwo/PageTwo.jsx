import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from "../../assets/image2.svg";

function PageTwo() {
  const conditioners = [
    {
      id: 1,
      name: "Сплит-система ballu olympio edge bso-09hn8_22y",
      rating: 3,
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 22 дб(а)",
      availability: "В наличии",
      price: 36250.2,
      image: image2,
    },
    {
      id: 2,
      name: "Сплит-система ballu olympio edge bso-12hn8_22y",
      rating: 4,
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 24 дб(а)",
      availability: "В наличии",
      price: 41500.0,
      image: image2,
    },
    {
      id: 3,
      name: "Сплит-система ballu olympio edge bso-18hn8_22y",
      rating: 5,
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 26 дб(а)",
      availability: "В наличии",
      price: 58900.5,
      image: image2,
    },
    {
      id: 4,
      name: "Сплит-система ballu olympio edge bso-24hn8_22y",
      rating: 4,
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 28 дб(а)",
      availability: "В наличии",
      price: 72300.8,
      image: image2,
    },
    {
      id: 5,
      name: "Сплит-система ballu olympio edge bso-07hn8_22y",
      rating: 3,
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 21 дб(а)",
      availability: "В наличии",
      price: 32100.6,
      image: image2,
    },
    {
      id: 6,
      name: "Сплит-система ballu olympio edge bso-30hn8_22y",
      rating: 5,
      type: "настенная",
      modes: "охлаждение / обогрев",
      noiseLevel: "от 30 дб(а)",
      availability: "В наличии",
      price: 89700.3,
      image: image2,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold xs:text-2xl">Лучший выбор</h1>
        <div className="flex items-center">
          <div className="w-16 h-px bg-gray-300 mr-4 xs:w-12"></div>
          <span className="text-gray-500 uppercase text-sm xs:text-xs">
            Кондиционеры
          </span>
        </div>
      </div>
      <Slider {...settings}>
        {conditioners.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-gray-50 rounded-lg shadow-md p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <div className="flex mb-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-1">Тип: {item.type}</p>
              <p className="text-sm text-gray-600 mb-1">
                Основные режимы: {item.modes}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Уровень шума: {item.noiseLevel}
              </p>
              <p className="text-sm text-green-600 font-semibold mb-2">
                {item.availability}
              </p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">
                  {item.price.toFixed(2)} ₽/шт
                </p>
                <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-100">
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PageTwo;
