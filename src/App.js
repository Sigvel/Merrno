import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Product from "./pages/product";
import RouteNotFound from "./pages/error";
import "./scss/styles.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
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
