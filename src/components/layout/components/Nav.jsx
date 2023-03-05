import { Link } from "react-router-dom";
import SearchIcon from "../../../assets/interface/navigation/icons8-search-48.png"
import ContactIcon from "../../../assets/interface/navigation/icons8-headset-48.png"
import CartIcon from "../../../assets/interface/navigation/icons8-shopping-bag-48.png"


function Nav() {
    return (
        <nav>
            <form className="element-border">
                <label><img src={SearchIcon} alt="Search Icon" /></label>
                <input type="search" placeholder="Search"></input>
            </form>
            <ul>
                <li className="element-border">
                    <Link to="/contact"><img src={ContactIcon} alt="Contact Icon" />Contact</Link>
                </li>
                <li className="element-border">
                    <Link to="/cart"><img src={CartIcon} alt="Cart Icon" />Cart</Link>
                </li>
            </ul>
        </nav>
    )
};


export default Nav