import { useState, useContext } from "react";
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
  const { filteredProducts, handleFilter, searchTerm } = useContext(DataContext);

  /**
   * Search event value catcher
   * @param {event} e Contains the value of the input
   */
  const handleSearch = (e) => {
    handleFilter(e.target.value);
  };
  return (
    <>
      <S.SearchBar>
        <input onChange={handleSearch} value={searchTerm} type="search" placeholder="Search..." />
        <label onClick={onClick}>
          <img src={SearchIcon} alt="Search Icon" />
        </label>
      </S.SearchBar>
      {filteredProducts.length > 0 ? (
        <div className="scroll-box">
        <ol className="search-result">
          {filteredProducts.map((product) => {
            return (
              <Link to={`/product/${product.id}`}>
              <li key={product.id}>
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
      </div>
      ) : (
        <div></div>
      )}
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
