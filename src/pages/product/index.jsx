import { useParams } from "react-router-dom";
import ProductFetch from "../../components/Product";
import * as S from "../../App.styles"

function Product() {
    let params = useParams();
    console.log(params);
    // Logs the id of whichever product page you are on e.g.
    // {id: '1'} or {id: '2'}
    return (
    <S.PageContainer>
      <ProductFetch id={params.id} />
    </S.PageContainer>
    )
  }

  export default Product