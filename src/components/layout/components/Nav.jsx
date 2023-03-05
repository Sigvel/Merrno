import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <form>
                <label>Button (border, logo)</label>
                <input type="search" placeholder="Search"></input>
            </form>
            <ul>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/product/1">Product with ID: 1</Link>
                </li>
                <li>
                    <Link to="/product/2">Product with ID: 2</Link>
                </li>
            </ul>
        </nav>
    )
};


export default Nav