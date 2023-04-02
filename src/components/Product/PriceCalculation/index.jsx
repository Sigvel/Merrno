import "../../../scss/styles.scss";

/**
 * returns discounted price.
 * @param {number} param1 number value
 * @param {number} param2 number value
 * @returns discounted price in %;
 *
 * @example
 * ```
 * productPrice(1699, 1529);
 * returns: react component with a calculated discount -> -10%
 * ```
 */
function ProductPrice({ price, discount }) {
  let sale;
  let discountedPrice;

  if (price !== discount) {
    discountedPrice = price - price * (discount / price);
    sale = (discountedPrice / price) * 100;
  } else {
    sale = false;
  }

  return (
    <div>
      <p className={sale ? "sale" : ""}>{price},-</p>
      {sale && (
        <p>
          {discount} <span className="sale-color"> -{Math.round(sale)}%</span>
        </p>
      )}
    </div>
  );
}

export default ProductPrice;
