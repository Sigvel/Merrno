import React, { useEffect, useState } from "react";
import * as S from "../App.styles";
const url = "https://api.noroff.dev/api/v1/online-shop";

function ItemsFetch() {
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
        <S.Card>
          <figure>
            <img src={item.imageUrl} alt={item.title}></img>
          </figure>
          <h2>{item.title}</h2>
          <h3 className="truncate">{item.description}</h3>
          <p>{item.price},-</p>
          <div>
            <S.Button>Show</S.Button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}

export default ItemsFetch;