import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";

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
