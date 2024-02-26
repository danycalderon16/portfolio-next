"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Carousel = ({
  images,
}: {
  images: {
    id: number;
    src: string;
  }[];
}) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="flex flex flex-col">
      <div className="flex-grow bg-white dark:bg-slate-800 relative">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[45vh] object-cover p-3 transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              fill
              className="object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
        <div className="flex justify-center">
          <div
            className="cursor-pointer"
            onClick={clickPrev}
          >
            <BiLeftArrow size={20} className="hover:scale-110"/>
          </div>

          <div
            className="cursor-pointer"
            onClick={clickNext}
          >
            <BiRightArrow size={20} className="hover:scale-110"/>
          </div>
        </div>
    </div>
  );
};

export default Carousel;
