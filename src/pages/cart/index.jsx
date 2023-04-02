import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductCart from "../../components/Product/Cart";
import { useStore, useProductStore } from "../../hooks/useProductStore";

import * as S from "../../App.styles";
import styles from "./Cart.module.scss";
import F from "../../scss/modules/pageFeature/Feature.module.scss";

function Cart() {
  const { getCartTotal, cartCheckout } = useStore();
  const products = useProductStore((state) => state.products);
  const total = getCartTotal();

  const notify = (message) => toast(message, { autoClose: 1000 });

  function checkoutButton() {
    if (products.length === 0) {
      notify("No items in cart");
    } else {
      cartCheckout();
    }
  }

  return (
    <S.PageContainer>
      <h1>Cart</h1>
      <ToastContainer />
      <div className={styles.pageWrap}>
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
            <div>Total: {Math.round(total)} kr</div>
          </section>
        </div>
        <S.AsideFeature className={F.featureButton}>
          <h2>Billing address</h2>
          <form>
            <label></label>
            <input name="your-email" type="email" placeholder="Email" />
            <label></label>
            <input name="your-name" type="text" placeholder="Full name" />
            <label></label>
            <input name="your-address" type="text" placeholder="Address" />
            <label></label>
            <input name="your-country-code" type="text" placeholder="Country Code" />
          </form>
          {products.length === 0 ? (
            <div className={styles.toShoppingButton}>
              <Link to="/">
                <S.Button>Back to shopping</S.Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link onClick={() => checkoutButton()} to="/success">
                <S.Button>Checkout</S.Button>
              </Link>
            </div>
          )}
        </S.AsideFeature>
      </div>
    </S.PageContainer>
  );
}

export default Cart;
