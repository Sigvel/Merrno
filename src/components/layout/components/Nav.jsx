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
            </ul>
        </nav>
    )
};


export default Nav