import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <NavBar />
            <Products />
            <ScrollToTop />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <NavBar />
            <AboutPage />
            <ScrollToTop />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <div className="dark:bg-primary">
            <NavBar />
            <ContactUs />
          </div>
        }
      />
      <Route
        path="/products/:id"
        element={
          <>
            <NavBar />
            <ProductDetails />
            <ScrollToTop />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
