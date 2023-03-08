import { useParams } from "react-router-dom";
import ProductFetch from "../../components/GetProduct";
import * as S from "../../App.styles"

function Product() {
    let params = useParams();
    console.log(params);
    
    return (
    <S.PageContainer>
      <ProductFetch id={params.id} />
    </S.PageContainer>
    )
  }

  export default Product