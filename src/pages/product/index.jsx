import { useParams } from "react-router-dom";
import ProductFetch from "../../components/Product/Product/index";
import * as S from "../../App.styles";
import styles from "./Product.module.scss";

function Product() {
    let params = useParams();
    
    return (
    <S.PageContainer className={styles.productPage}>
      <ProductFetch id={params.id} />
    </S.PageContainer>
    )
  }

  export default Product