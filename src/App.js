import { Routes, Route } from "react-router-dom";

import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Layout from "./components/layout/Layout";
import RouteNotFound from "./pages/error";
import Product from "./pages/product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart/" element={<Cart />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
