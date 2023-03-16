import { useParams } from "react-router-dom";
import ProductFetch from "../../components/Product/Product/index";
import * as S from "../../App.styles"

function Product() {
    let params = useParams();
    
    return (
    <S.PageContainer>
      <ProductFetch id={params.id} />
    </S.PageContainer>
    )
  }

  export default Product