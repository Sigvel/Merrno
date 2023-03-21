import * as S from "../../App.styles";
import F from "../../scss/modules/pageFeature/Feature.module.scss";

function Cart() {
  return (
    <S.PageContainer>
      <h1>Cart</h1>
    <S.Breadcrumb />
    <h2>Your cart</h2>
    <S.Card>
      <div>
      <img src="#" alt="product"/>
      <h3>Title</h3>
      <p>Description</p>
      </div>
      <div>
      <div>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
      <p>price</p>
      <p>Discount: 22.99,-</p>
      <button type="button">X</button>
      </div>
    </S.Card>
    <S.AsideFeature className={F.featureButton}>
      <S.Button type="button">Show form</S.Button>
      </S.AsideFeature>
    </S.PageContainer>
  );
}

export default Cart;
