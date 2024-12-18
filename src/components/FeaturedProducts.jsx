import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import useInView from "./UseInView";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const { translate, language } = useTranslation();
  const [ref, isVisible] = useInView();
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const isArabic = language === "ar";

  return (
    <section
      ref={ref}
      id={`featured-products`}
      className={`py-16 px-4 dark:bg-primary bg-secondary text-primary dark:text-secondary`}>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container mx-auto text-center ">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">
            {translate("featuredProducts.title")}
          </h2>
          <p className="text-lg">{translate("featuredProducts.description")}</p>
        </div>

        {/* قائمة المنتجات المميزة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* مثال على منتج مميز */}
          <div className="dark:bg-secondary bg-primary text-secondary dark:text-primary p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <img
              src="/laptops.jpg"
              alt="Product 1"
              className="h-48 w-full object-cover rounded-lg mb-4 hover:-rotate-3 transition duration-300"
            />
            <h3 className="text-xl font-semibold">
              {translate("products.title")}
            </h3>
            <p className="text-secondary dark:text-primary italic">
              {translate("products.categories.laptops")}
            </p>
          </div>

          <div className="dark:bg-secondary bg-primary text-secondary dark:text-primary p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <img
              src="/phones.jpg"
              alt="Product 2"
              className="h-48 w-full object-cover rounded-lg mb-4 hover:-rotate-3 transition duration-300"
            />
            <h3 className="text-xl font-semibold">
              {translate("products.title")}
            </h3>
            <p className="text-secondary dark:text-primary italic">
              {translate("products.categories.phones")}
            </p>
          </div>

          <div className="dark:bg-secondary bg-primary text-secondary dark:text-primary p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <img
              src="/Headphones.webp"
              alt="Product 3"
              className="h-48 w-full object-cover rounded-lg mb-4 hover:-rotate-3 transition duration-300"
            />
            <h3 className="text-xl font-semibold">
              {translate("products.title")}
            </h3>
            <p className="text-secondary dark:text-primary italic">
              {translate("products.categories.headphones")}
            </p>
          </div>

          <div className="dark:bg-secondary bg-primary text-secondary dark:text-primary p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
            <img
              src="/tablets.avif"
              alt="Product 3"
              className="h-48 w-full object-cover rounded-lg mb-4 hover:-rotate-3 transition duration-300"
            />
            <h3 className="text-xl font-semibold">
              {translate("products.title")}
            </h3>
            <p className="text-secondary dark:text-primary italic">
              {translate("products.categories.tablets")}
            </p>
          </div>
        </div>

        {/* زر "عرض المزيد" */}
        <div className="text-center mt-8 flex justify-center items-center">
          <button
            onClick={() => navigate("/products")}
            className="bg-primary dark:bg-secondary text-secondary dark:text-primary px-6 py-3 rounded-lg flex items-center justify-center">
            <span>{translate("featuredProducts.viewAll")}</span>
            {isArabic ? (
              <FaArrowLeft className="mr-2" />
            ) : (
              <FaArrowRight className="ml-2" />
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
