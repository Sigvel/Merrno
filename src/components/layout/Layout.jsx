import { Outlet } from "react-router-dom";
import Header from "./components/Header/index";
import { useState, useEffect, createContext } from "react";
const url = "https://api.noroff.dev/api/v1/online-shop/";

export const DataContext = createContext();

function Layout() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();

      setProducts(json);
    }
    fetchData();
  }, []);

  const handleFilter = (term) => {
    setSearchTerm(term);

    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredProducts(filteredData);

    if(term === "") {
      setFilteredProducts([]);
    }
    
    console.log(filteredData);
  };

  return (
    <DataContext.Provider value={{products, filteredProducts, handleFilter, searchTerm }}> 
      <Header />
      <Outlet />
    </DataContext.Provider>
  );
}

export default Layout;
