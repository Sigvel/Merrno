import { useState, useContext, useEffect } from "react";
import { DataContext } from "../layout/Layout";
import { Link } from "react-router-dom";

import SearchIcon from "../../assets/interface/navigation/icons8-search-48.png";
import * as S from "../../App.styles";

/**
 * Show search button HTML
 * @param {event} handleClick shows the input when triggered.
 */
const Icon = ({ onClick }) => {
  return (
    <S.SearchIcon>
      <label onClick={onClick}>
        <img src={SearchIcon} alt="Search Icon" />
      </label>
    </S.SearchIcon>
  );
};

/**
 *  Search input.
 * @param {event} handleClick closes the search input
 */
const ComponentWithInput = ({ onClick }) => {
  const { products } = useContext(DataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRes = document.getElementsByClassName("search-result");

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    }
  }, [searchTerm, setFilteredProducts, products])

  const handleSearch = (e) => {
    const updatedSearchTerm = e.target.value;
  setSearchTerm(updatedSearchTerm);

      const filteredData = products.filter((product) => product.title.toLowerCase().includes(updatedSearchTerm.toLowerCase()));

      setFilteredProducts(filteredData);
  };

  const hideSearch = () => {
    for (let i = 0; i < searchRes.length; i++) {
      searchRes[i].style.display = "none";
    }
  };

  return (
    <>
      <S.SearchBar>
        <input onChange={handleSearch} value={searchTerm} type="search" placeholder="Search..." />
        <label onClick={onClick}>
          <img src={SearchIcon} alt="Search Icon" />
        </label>
      </S.SearchBar>
      <div className="scroll-box">
        {filteredProducts.length > 0 ? (
          <ol className="search-result">
            {filteredProducts.map((product) => {
              return (
                <Link key={product.id} to={`/product/${product.id}`} onClick={hideSearch}>
                  <li>
                    <figure>
                      <img src={product.imageUrl} alt={product.title} />
                    </figure>
                    <h2>{product.title}</h2>
                    <p>Price: {product.discountedPrice},-</p>
                  </li>
                </Link>
              );
            })}
          </ol>
        ) : (
          <div style={{textAlign: "center"}}>Search for a product</div>
        )}
      </div>
    </>
  );
};

/**
 * Renders the search input
 */
function SearchBar() {
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggle's the useState for showing search input
   */
  function handleClick() {
    setIsActive(!isActive);
  }

  return <div className="element-border full-width">{isActive ? <ComponentWithInput onClick={handleClick} /> : <Icon onClick={handleClick} />}</div>;
}

export default SearchBar;
