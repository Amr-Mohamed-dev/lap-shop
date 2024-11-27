import { useEffect, useState } from "react";
import { productsData } from "../data/productsData";
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { translate, language } = useTranslation();
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter(
          (product) =>
            product.category[language] &&
            product.category[language].toLowerCase() === filter
        );

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
    console.log("====================================");
    console.log(productId);
    console.log("====================================");
  };

  console.log("Products data:", productsData);

  useEffect(() => {
    window.scrollTo(0, 0); // تمرير الشريط إلى أعلى الصفحة
  }, []);

  const categories = [
    { key: "all", label: translate("allProducts.filter.all") },
    { key: "laptops", label: translate("products.categories.laptops") },
    { key: "phones", label: translate("products.categories.phones") },
    { key: "headphones", label: translate("products.categories.headphones") },
    { key: "tablets", label: translate("products.categories.tablets") },
  ];

  return (
    <section className="pt-24 px-4 bg-secondary dark:bg-primary text-primary dark:text-secondary h-full min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {translate("products.title")}
        </h2>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`px-4 py-2 rounded-lg ${
                filter === category.key
                  ? "bg-primary text-secondary"
                  : "bg-iconsBg dark:bg-iconsBg text-primary dark:text-secondary"
              }`}
              onClick={() => handleFilterChange(category.key)}>
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="dark:bg-secondary bg-primary text-secondary dark:text-primary p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleProductClick(product.id)}>
                <img
                  src={product.images[0]} // Use first image in the array
                  alt={product.title[language]}
                  className="h-48 w-full object-cover rounded-lg mb-4 hover:-rotate-3 transition duration-300"
                />
                <h3 className="text-xl font-semibold">
                  {product.title[language]}
                </h3>
                <p className="italic">{product.description[language]}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-xl text-third">
              {translate("products.noProducts")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
