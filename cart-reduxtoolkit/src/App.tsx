import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-green-50">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
