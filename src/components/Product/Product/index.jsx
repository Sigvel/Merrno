import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "../../../App.styles";
import styles from "../../../pages/product/Product.module.scss";
import C from "../../../scss/modules/cards/Card.module.scss";
import F from "../../../scss/modules/pageFeature/Feature.module.scss";

import * as S from "../../../App.styles"
import C from "../../../scss/modules/cards/Card.module.scss";
import F from "../../../scss/modules/pageFeature/Feature.module.scss";

import ProductPrice from "../PriceCalculation/index";
import Breadcrumbs from "../../pages/Breadcrumbs/index";

const url = "https://api.noroff.dev/api/v1/online-shop/";

function ProductFetch() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    async function getProduct(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await fetch(url);
        const json = await res.json();

        setProduct(json);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct(`${url}${id}`);
  }, [id]);
  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

    console.log(product);
    return (
        <div>
        <h1>{product.title}</h1>
        <Breadcrumbs />
        <S.Card className={C.bigCard}>
            <figure>
          <img src={product.imageUrl} alt={product.title} />
          </figure>

          <h2>Price</h2>
          <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>

          <div>
            <S.Button>Add to cart</S.Button>
          </div>
        </S.Card>
        <S.Card className={C.bigCard}>
            <section>
          <h2>Description</h2>
          <p>{product.description}</p>
          </section>
          <section>
            <h2>Description</h2>
            <p>{product.description}</p>
          </section>

          <section>
            <h2>Categories</h2>
            <div className={styles.prodTags}>
              {product.tags.map((tag, index) => {
                return <p key={index}>{tag}</p>;
              })}
            </div>
          </section>

          <section>
            <h2>Rating</h2>
            <p>{product.rating} / 5</p>
          </section>
        </S.Card>
        <S.AsideFeature className={F.featureButton}>
            <S.Button type="button">Reviews</S.Button>
        </S.AsideFeature>
        </div>
  );
}

export default ProductFetch;
