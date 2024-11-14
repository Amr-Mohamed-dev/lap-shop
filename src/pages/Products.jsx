import { useState } from "react";
import { productsData } from "../data/productsData"; // تأكد من أن هذا الملف يحتوي على البيانات الصحيحة
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";

const Products = () => {
  const { translate, language } = useTranslation();
  const [filter, setFilter] = useState("all");

  // فلتر المنتجات حسب الفئة
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

  // مصفوفة الفئات المتاحة
  const categories = [
    { key: "all", label: translate("allProducts.filter.all") },
    { key: "laptops", label: translate("products.categories.laptops") },
    { key: "phones", label: translate("products.categories.phones") },
    { key: "headphones", label: translate("products.categories.headphones") },
    { key: "tablets", label: translate("products.categories.tablets") },
  ];

  return (
    <section className="pt-24 px-4 bg-white dark:bg-gray-900 h-full">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {translate("products.title")}
        </h2>

        {/* الفلتر */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`px-4 py-2 rounded-lg ${
                filter === category.key
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900"
              }`}
              onClick={() => handleFilterChange(category.key)}>
              {category.label}
            </button>
          ))}
        </div>

        {/* عرض المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="dark:bg-gray-100 bg-gray-900 text-white dark:text-gray-900 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <img
                  src={product.image}
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
            <p className="text-xl text-gray-500">
              {translate("products.noProducts")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
