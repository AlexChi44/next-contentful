"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface Brand {
  fields: {
    file: {
      url: string;
    };
    title?: string;
  };
}

interface SliderProps {
  content: {
    fields: {
      brands: Brand[];
    };
  };
}

const Slider: React.FC<SliderProps> = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastSlideTime = useRef<number>(0);

  const brands = content?.fields?.brands || [];
  const items = [...brands, ...brands]; // Для бесконечного эффекта
  const AUTO_SLIDE_INTERVAL = 1000;

  // Обновление позиции слайдера
  useEffect(() => {
    const updateTransform = () => {
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;
        const newPosition = -(currentIndex * itemWidth);
        sliderRef.current.style.transform = `translateX(${newPosition}px)`;
      }
    };

    updateTransform();
    window.addEventListener("resize", updateTransform);
    return () => window.removeEventListener("resize", updateTransform);
  }, [currentIndex]);

  // Автоматическая прокрутка

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (sliderRef.current) {
        const totalItems = items.length - 2;

        // Если дошли до конца дублированного массива
        if (newIndex >= totalItems) {
          sliderRef.current.style.transition = "none";
          setTimeout(() => {
            sliderRef.current!.style.transition = "transform 0.5s ease";
            setCurrentIndex(0);
          }, 0);
          return 0; // Мгновенный возврат в начало
        }
      }
      return newIndex;
    });
  }, [items.length]);

  useEffect(() => {
    if (isAuto) {
      const animate = (timestamp: number) => {
        if (timestamp - lastSlideTime.current >= AUTO_SLIDE_INTERVAL) {
          nextSlide();
          lastSlideTime.current = timestamp;
        }
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isAuto, nextSlide]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (sliderRef.current) {
        const totalItems = items.length;
        const itemWidth = sliderRef.current.children[0]?.clientWidth || 0;

        if (newIndex < 0) {
          sliderRef.current.style.transition = "none";
          const resetIndex = totalItems - 1;
          sliderRef.current.style.transform = `translateX(-${
            resetIndex * itemWidth
          }px)`;
          setTimeout(() => {
            sliderRef.current!.style.transition = "transform 0.5s ease";
            setCurrentIndex(resetIndex);
          }, 0);
          return resetIndex;
        }
      }
      return newIndex;
    });
  };

  const toggleAuto = () => {
    setIsAuto((prev) => !prev);
    if (!isAuto) {
      lastSlideTime.current = performance.now();
    }
  };

  return (
    <div className="mt-10 w-full max-w-[1200px] mx-auto relative">
      {/* Контейнер с рамкой */}
      <div className="overflow-hidden border-2 border-gray-200 rounded-lg">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ willChange: "transform" }}
        >
          {items.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/4 md:w-1/5 lg:w-1/6 p-2 box-border"
            >
              {/* <div className="relative w-full aspect-square">
                <Image
                  src={brand.fields.file.url}
                  alt={brand.fields.title || "Brand Logo"}
                  fill
                  className="object-contain p-2"
                  priority={index < 4} // Приоритет для первых 4 изображений
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div> */}
              <div className="relative">
                <img
                  src={brand.fields.file.url}
                  alt={brand.fields.title || "Brand Logo"}
                  style={{ maxWidth: 100 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки управления */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Назад
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Вперед
        </button>
        <button
          onClick={toggleAuto}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          {isAuto ? "Остановить" : "Авто"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
