import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../../App.styles";
import styles from "../../scss/modules/Card.module.scss";
import ProductPrice from "../Product/PriceCalculation/index";
// import Breadcrumbs from "./pages/BreadCrumb";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductsFetch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json);

      setProducts(json);
    }
    fetchData();
  }, []);

  return (
    <S.Container>
      {/* <Breadcrumbs /> */}
      <h1>Home</h1>
      {products.map((product) => (
        <S.Card className={styles.smallCard} key={product.id}>
          <figure>
            <img src={product.imageUrl} alt={product.title}></img>
          </figure>
          <div>
          <h2>{product.title}</h2>
          <h3 className="truncate">{product.description}</h3>
          </div>
          <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>
          <div>
            <S.Button><Link to={`/product/${product.id}`}>Show</Link></S.Button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}

export default ProductsFetch;