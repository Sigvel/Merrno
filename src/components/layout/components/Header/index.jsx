import { Link } from "react-router-dom";

import Nav from "../Nav/index";
import "./../../../../scss/components/header/styles.scss";

function Header() {
  return (
    <header>
      <Link to="/" className="logo element-border">
        <p>Merrno</p>
      </Link>
      <Nav/>
    </header>
  );
}

export default Header;
