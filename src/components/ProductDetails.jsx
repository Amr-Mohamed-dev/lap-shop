import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData"; // تأكد أن بيانات المنتجات موجودة
import { useTranslation } from "../hooks/useTranslation";

const ProductDetails = () => {
  const { id } = useParams();
  const { translate, language } = useTranslation();

  const product = productsData.find((p) => p.id === parseInt(id, 10));
  const [currentIndex, setCurrentIndex] = useState(0);

  // تحديث الصور عند تغيير اللغة
  useEffect(() => {
    setCurrentIndex(0); // إعادة ضبط الصورة الحالية عند تغيير اللغة
  }, [language]);

  if (!product) {
    return <p>{translate("products.noProducts")}</p>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="pt-24 px-4 bg-white dark:bg-gray-900 h-full min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {product.title[language]}
        </h2>

        <div className="relative w-full max-w-lg mx-auto">
          <div
            id="default-carousel"
            className="relative w-full overflow-hidden"
            data-carousel="slide">
            {/* Carousel wrapper */}
            <div
              className="relative flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`, // تحريك الصور بشكل أفقي
              }}>
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full"
                  style={{ height: "400px" }}>
                  <img
                    src={image}
                    key={language} // تغيير المفتاح عند تغيير اللغة
                    className="w-full h-full object-cover"
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-gray-900"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}></button>
              ))}
            </div>

            {/* Slider controls */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">{product.title[language]}</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {product.description[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
