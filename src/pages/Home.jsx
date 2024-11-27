import FeaturedProducts from "../components/FeaturedProducts";
import HeroSection from "../components/HeroSection";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="dark:bg-primary">
      <HeroSection />
      <FeaturedProducts />
      <ScrollToTop />
    </div>
  );
};

export default Home;
