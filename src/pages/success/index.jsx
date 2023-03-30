import { useProductStore } from "../../hooks/useProductStore";

import * as S from "../../App.styles";
import styles from "./Success.module.scss";

function Success() {
  const { products, totalCost } = useProductStore((state) => state.order);
  const orderNumber = Math.floor(Math.random() * 100000) + 100000;

  return (
    <S.PageContainer>
      <div className={styles.contentWrap}>
        <h2 className="success">Your order has been received.</h2>

        <div className={styles.orderSummary}>
          <h3>Order number: {orderNumber}</h3>
          <div className={styles.ordersWrap}>
            <h2>Products:</h2>
            {products.map((product) => {
              return (
                <S.Card key={product.id} className={styles.card}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p>quantity: {product.quantity}</p>
                </S.Card>
              );
            })}
            <p className={styles.total}>Total: {Math.round(totalCost)} kr</p>
          </div>
          <div className={styles.buttonWrapper}>
            <S.Button>Back to shopping</S.Button>
          </div>
        </div>
      </div>
    </S.PageContainer>
  );
}

export default Success;
