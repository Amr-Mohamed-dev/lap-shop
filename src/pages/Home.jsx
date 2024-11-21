import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeroSection />
      <FeaturedProducts />
      <ScrollToTop />
    </div>
  );
};

export default Home;
