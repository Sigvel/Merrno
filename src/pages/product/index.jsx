import { useParams } from "react-router-dom";

function Product() {
    let params = useParams();
    console.log(params);
    // Logs the id of whichever product page you are on e.g.
    // {id: '1'} or {id: '2'}
    return <div>Individual product page: {params.id}</div>;
  }

  export default Product