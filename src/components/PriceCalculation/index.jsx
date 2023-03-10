import "../../scss/styles.scss"

function ProductPrice({ price, discount }) {

  let sale;

  if (price !== discount) {
    sale = Math.floor(price - discount);
  } else {
    sale = false;
  }

  return (
    <div>
      <p className={sale ? "sale" : ""}>{price },-</p>{sale && <p>{discount} <span className="sale-color">-{sale},-</span></p>}
    </div>
  );
}

export default ProductPrice;
