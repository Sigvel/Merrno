import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <li>
        <Link to="/product/1">Product with ID: 1</Link>
      </li>
      <li>
        <Link to="/product/2">Product with ID: 2</Link>
      </li>
    </div>
  );
}

export default Home;
