import { Link } from "react-router-dom";
import Nav from "../Nav/index";
import "./../../../../scss/components/header/header.scss";
import * as S from "../../../../App.styles"

function Header() {
  return (
    <header>
      <S.PageContainer>
        <Link to="/" className="logo">
          Merrno
        </Link>
      </S.PageContainer>
      <Nav />
    </header>
  );
}

export default Header;
