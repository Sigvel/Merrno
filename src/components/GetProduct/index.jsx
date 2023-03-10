import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import * as S from "../../App.styles"
import styles from "../../scss/modules/Card.module.scss";
import ProductPrice from "../PriceCalculation/index";
import Breadcrumbs from "../pages/Breadcrumbs/index";

const url = "https://api.noroff.dev/api/v1/online-shop/";

function ProductFetch() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null)

    let { id } = useParams();

    useEffect(() => {
        async function getProduct(url) {
            try {
                setIsLoading(true);
                setIsError(false);

                const res = await fetch(url);
                const json = await res.json();

                setProduct(json)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false);
            }
        }

        getProduct(`${url}${id}`);
    }, [id])

    if(isLoading || !product) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error</div>
    }

    console.log(product);
    return (
        <>
        <h1>{product.title}</h1>
        <Breadcrumbs />
        <S.Card className={styles.bigCard}>
            <figure>
          <img src={product.imageUrl} alt={product.title} />
          </figure>
          <p>Price</p>
          <ProductPrice price={product.price} discount={product.discountedPrice}></ProductPrice>
        </S.Card>
        <S.Card className={styles.bigCard}>
          <h2>Description</h2>
          <h3>{product.description}</h3>
        </S.Card>
        <S.Category>
            <S.Button type="button">Reviews</S.Button>
        </S.Category>
        </>
      );
}

export default ProductFetch;