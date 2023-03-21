import { Link } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";

import * as S from "../../../App.styles";
import C from "../../../scss/modules/cards/Card.module.scss";
import ProductPrice from "../PriceCalculation/index";
// import Breadcrumbs from "./pages/BreadCrumb";

function AllProducts({ products }) {
  return (
    <S.Container>
      {/* <Breadcrumbs /> */}
      <h1>Home</h1>
      {products.map((product) => {
        return (
          <S.Card className={C.smallCard} key={product.id}>
              <figure>
                <img src={product.imageUrl} alt={product.title}></img>
              </figure>
              <div className="product-info">
                <h2>{product.title}</h2>
                <h3 className="truncate">{product.description}</h3>
              </div>
            <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>
            <div>
            <Link to={`/product/${product.id}`}><S.Button>Show</S.Button></Link>
            </div>
          </S.Card>
        );
      })}
    </S.Container>
  );
}

export default AllProducts;
