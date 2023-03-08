import * as S from "../../App.styles";

import { useLocation } from "react-router-dom";

function Breadcrumbs() {
    let location = useLocation();
    let paths = location.pathname.split("/");

    if(paths[0] === "") {
        paths.splice(0, 1, "home");
    }

    console.log(paths);

      return (
        <S.Breadcrumb>
        {paths.map((path) => {
          return <li key={path}>{path}</li>
        })}
        </S.Breadcrumb>
        );
      }

export default Breadcrumbs;
