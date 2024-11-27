import { useTranslation } from "../hooks/useTranslation";

const HeroSection = () => {
  const { translate } = useTranslation();

  return (
    <section className="relative text-white h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/herrobg.jpg')` }} // تغيير الخلفية لصورة تقنيات
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {translate("heroSection.title")}
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          {translate("heroSection.description")}
        </p>
        <button
          onClick={`href='#featured-products'`}
          className="px-6 py-3 bg-primary dark:bg-white text-secondary dark:text-primary font-semibold rounded ">
          {translate("heroSection.cta")}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
