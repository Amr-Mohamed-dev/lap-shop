import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";

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
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
