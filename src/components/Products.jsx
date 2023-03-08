import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../App.styles";
import styles from "../scss/modules/Card.module.scss";
import ProductPrice from "./Price";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductsFetch() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json);

      setItems(json);
    }
    fetchData();
  }, []);

  return (
    <S.Container>
      {items.map((item) => (
        <S.Card className={styles.smallCard} key={item.id}>
          <figure>
            <img src={item.imageUrl} alt={item.title}></img>
          </figure>
          <div>
          <h2>{item.title}</h2>
          <h3 className="truncate">{item.description}</h3>
          </div>
          <ProductPrice price={item.price} discount={item.discountedPrice}></ProductPrice>
          <div>
            <S.Button><Link to={`/product/${item.id}`}>Show</Link></S.Button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}

export default ProductsFetch;