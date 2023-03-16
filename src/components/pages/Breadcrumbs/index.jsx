import * as S from "../../../App.styles";

import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink = +`/${crumb}`;

      return (
        <S.Breadcrumb key={index}>
          <Link to={currentLink}><li>{crumb}</li></Link>
        </S.Breadcrumb>
      );
    });

    return (
      <div>
        {crumbs}
      </div>
    )
}

export default Breadcrumbs;
