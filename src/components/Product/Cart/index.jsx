import { useProductStore, useStore } from "../../../hooks/useProductStore";
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
            <div>
              <figure className={styles.imgBox}>
                <img src={product.imageUrl} alt={product.title} />
              </figure>
              <h3>{product.title}</h3>
              {/* <p>{product.description}</p> */}
            </div>
            <div>
              <div>
                <button type="button" onClick={() => increment(product.id)}>
                  +
                </button>
                <div>{product.quantity}</div>
                <button type="button" onClick={() => decrement(product.id)} disabled={product.quantity === 1}>
                  -
                </button>
              </div>
              <p>price</p>
              <p>{product.discountedPrice}</p>
              <button type="button" onClick={() => removeFromCart(product.id)}>
                X
              </button>
            </div>
          </S.Card>
        )
      })}
    </>
  );
}

export default ProductCart;
