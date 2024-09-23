import  { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
export const Blogs2 = () => {
  const images = [
    {
        src: "https://itginnovators.com/CreativePrints/BackendStyle/img/blogs/2051245479_3d928ad5-c926-4f85-918a-8e24556c3ca3How-Will-the-UK-General-Election-Affect-My-Business-header-.jpg",
        alt: "Image 1",
        title: "Office Politics Exposed:From...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
      {
        src: "https://itginnovators.com/CreativePrints/BackendStyle/img/blogs/1861266402_af11e624-c6b5-4bd3-8dc5-ae355ddb5600instantprint-Blog-Headers-(1).jpg",
        alt: "Image 2",
        title: "One Day Transport and...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
      {
        src: "https://itginnovators.com/CreativePrints/BackendStyle/img/blogs/2051245479_3d928ad5-c926-4f85-918a-8e24556c3ca3How-Will-the-UK-General-Election-Affect-My-Business-header-.jpg",
        alt: "Image 3",
        title: "How Will the UK General Election...",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
      {
          src: "https://itginnovators.com/CreativePrints/BackendStyle/img/blogs/1480206189_e8e76100-2b57-4aa4-8950-dd3cb2f712e9Blog.jpg",
          alt: "Image 4",
          title: "Battling Hay Fever at Work:How",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        {
          src: "https://itginnovators.com/CreativePrints/BackendStyle/img/blogs/1480206189_e8e76100-2b57-4aa4-8950-dd3cb2f712e9Blog.jpg",
          alt: "Image 5",
          title: "Spring Bank Holiday 2024 Openin...",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;

  const nextSlide = () => {
    if (currentIndex < images.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - visibleCards);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="w-[25%]  p-4 box-border flex-shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[250px] object-cover"
              />
              <h4 className="text-base font-medium mt-6">{item.title}</h4><br />
              <p className="text-gray-500 text-sm font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[10px] transform -translate-y-1/2 border rounded-full bg-gray-200 p-2 z-10"
      >
       <Icon icon="ph:arrow-left" width="16" height="16"  style={{color: "black"}} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[10px] transform -translate-y-1/2 border rounded-full bg-gray-200 p-2 z-10"
      >
        <Icon icon="ph:arrow-right" width="16" height="16"  style={{color: "black"}} />
      </button>
    </div>
  );
};
