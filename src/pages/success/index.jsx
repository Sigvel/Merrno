import { useProductStore } from "../../hooks/useProductStore";

import * as S from "../../App.styles";
import styles from "./Success.module.scss";
import C from "../../scss/modules/cards/Card.module.scss";

function Success() {
  const products = useProductStore((state) => state.products);

  return (
<S.PageContainer>
  <div className={styles.contentWrap}>
<S.Card className={C.bigCard}>
<h2>Your purchase was successful</h2>
</S.Card>

<S.Card>
<div className={styles.orderSummary}>
  <h2>Order summary</h2>
  <h3>Order number: {Math.floor(Math.random() * 10000) + 10000 }</h3>
  <h4>Products:</h4>
  {products.map((product) => {
    return (
      <li>
        <h2>{product.title}</h2>
      </li>
    )
  })}
</div>
</S.Card>
</div>
</S.PageContainer>
  );
}

export default Success;