import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../../../scss/components/header/header.scss";

function Header() {
  return (
    <header>
      <div className="element-border">
        <Link to="/" className="logo">
          Merrno
        </Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
