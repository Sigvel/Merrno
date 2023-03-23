import ProductCart from "../../components/Product/Cart";

import * as S from "../../App.styles";
import F from "../../scss/modules/pageFeature/Feature.module.scss";
// import { useLocalStorage } from "../../hooks/useProductStore";
// import { useStore } from "../../hooks/useProductStore";

function Cart() {
  return (
    <S.PageContainer>
      <h1>Cart</h1>
      <S.Breadcrumb />
      <h2>Your cart</h2>
      <ProductCart />
      <S.AsideFeature className={F.featureButton}>
        <S.Button type="button">Show form</S.Button>
      </S.AsideFeature>
    </S.PageContainer>
  );
}

export default Cart;
