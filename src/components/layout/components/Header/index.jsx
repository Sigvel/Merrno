import { Link } from "react-router-dom";
import Nav from "../Nav/index";
import "./../../../../scss/components/header/header.scss";
// import * as S from "../../../../App.styles";

function Header() {
  return (
    <header>
        <Link to="/" className="logo">
          Merrno
        </Link>
      <Nav />
    </header>
  );
}

export default Header;
