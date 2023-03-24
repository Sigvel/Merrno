import { Link } from "react-router-dom";
import { useStore } from "../../../../hooks/useProductStore";

import ContactIcon from "../../../../assets/interface/navigation/icons8-online-support-48.png";
import CartIcon from "../../../../assets/interface/navigation/icons8-shopping-bag-48.png";

import SearchBar from "../../../Search";

function Nav() {
  const { getCartQuantity } = useStore();
  const quantity = getCartQuantity();

  return (
    <nav>
        <SearchBar />
      <ul>
        <li className="element-border">
          <Link to="/contact">
            <img src={ContactIcon} alt="Contact Icon" />
          </Link>
        </li>
        <li className="element-border">
          <Link to="/cart">
            <img src={CartIcon} alt="Cart Icon" />
            <div>{quantity}</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
