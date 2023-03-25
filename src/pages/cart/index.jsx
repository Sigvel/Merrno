import ProductCart from "../../components/Product/Cart";
import { useStore } from "../../hooks/useProductStore";

import * as S from "../../App.styles";
import styles from "./Cart.module.scss";
import F from "../../scss/modules/pageFeature/Feature.module.scss";

function Cart() {
  const { getCartTotal, handleCheckout } = useStore();
  const total = getCartTotal();

  return (
    <S.PageContainer>
      <h1>Cart</h1>
<div className={styles.contentWrap}>
      <S.Breadcrumb />
      <section className={styles.cartHero}>
        <h2>Your cart</h2>
        <div>
          <p>Amount</p>
          <p>Price</p>
          <p>Delete</p>
        </div>
      </section>

      <ProductCart />

      <section className={styles.checkout}>
        
        <div>total: {Math.round(total)}</div>
        <S.Button onclick={() => handleCheckout()}>Checkout</S.Button>
      </section>
      </div>
      <S.AsideFeature className={F.featureButton}>
        <form>
          <label></label>
          <input name="your-address" type="text" placeholder="Address" />
          <label></label>
          <input name="your-address" type="text" placeholder="Address" />
          <label></label>
          <input name="your-email" type="email" placeholder="Email" />
          <label></label>
          <input name="your-name" type="text" placeholder="Full name" />
        </form>
        <div>
          <S.Button type="button">Show form</S.Button>
        </div>
      </S.AsideFeature>
    </S.PageContainer>
  );
}

export default Cart;
