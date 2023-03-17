import "../../../scss/styles.scss"

function ProductPrice({ price, discount }) {

  let sale;
  let discountedPrice;

  if (price !== discount) {
    discountedPrice = price - (price * (discount / price));
    sale = (discountedPrice / price) * 100;
    console.log(sale);
  } else {
    sale = false;
  }

  return (
    <div>
      <p className={sale ? "sale" : ""}>{price },-</p>{sale && <p>{discount} <span className="sale-color"> -{Math.round(sale)}%</span></p>}
    </div>
  );
}

export default ProductPrice;
