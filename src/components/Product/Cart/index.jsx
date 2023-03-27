import { useProductStore, useStore } from "../../../hooks/useProductStore";
import DeleteImg from "../../../assets/interface/navigation/icons8-multiply-64.png";
import Increment from "../../../assets/interface/navigation/icons8-plus-math-30.png"
import Decrement from "../../../assets/interface/navigation/icons8-subtract-30.png"

import * as S from "../../../App.styles";
import styles from "./ProductCard.module.scss";

function ProductCart() {
  const products = useProductStore((state) => state.products);
  const { increment, decrement, removeFromCart } = useStore();

  return (
    <>
      {products.map((product) => {
        return (
          <S.Card key={product.id} className={styles.productCard}>
            <div className={styles.imgTitleWrap}>
              <figure className={styles.imgBox}>
                <img src={product.imageUrl} alt={product.title} />
              </figure>
              <h3>{product.title}</h3>
              {/* <p>{product.description}</p> */}
            </div>

            <section className={styles.productInfo}>

              <div className={styles.buttonBox}>
                <button className={styles.btnLeft} type="button" onClick={() => increment(product.id)}>
                  <img src={Increment} alt="+"></img>
                </button>
                <div>{product.quantity}</div>
                <button className={styles.btnRight} type="button" onClick={() => decrement(product.id)} disabled={product.quantity === 1}>
                <img src={Decrement} alt="-"></img>
                </button>
              </div>

              <div className={styles.productCartDetails}>
                <p>{Math.ceil(product.discountedPrice)} kr</p>
                <button className={styles.deleteButton} type="button" onClick={() => removeFromCart(product.id)}>
                <img src={DeleteImg} alt="Delete button" /> 
                </button>
              </div>

            </section>
          </S.Card>
        );
      })}
    </>
  );
}

export default ProductCart;
