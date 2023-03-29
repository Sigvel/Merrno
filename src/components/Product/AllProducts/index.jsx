import { Link } from "react-router-dom";

import * as S from "../../../App.styles";
import styles from "../../../pages/home/Home.module.scss"
import C from "../../../scss/modules/cards/Card.module.scss";
import ProductPrice from "../PriceCalculation/index";
// import Breadcrumbs from "./pages/BreadCrumb";

function AllProducts({ products }) {
  return (
    <S.Container>
      {/* <Breadcrumbs /> */}
      <h1 className={styles.pageText}>Home</h1>
      {products.map((product) => {
        return (
          <S.Card className={C.smallCard} key={product.id}>
            <section>
              <figure>
                <img src={product.imageUrl} alt={product.title}></img>
              </figure>
              <div>
                <h2>{product.title}</h2>
                <h3 className="truncate">{product.description}</h3>
              </div>
              </section>
              
              <section>
            <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>
            <div>
              <S.Button>
                <Link to={`/product/${product.id}`}>Show</Link>
              </S.Button>
            </div>
            </section>
          </S.Card>
        );
      })}
    </S.Container>
  );
}

export default AllProducts;
