// import { Link } from "react-router-dom";
import AllProducts from "../../components/Product/AllProducts/index";
import * as S from "../../App.styles"
import CableIcon from "../../assets/interface/categories/icons8-audio-cable-96.png";
import LaptopIcon from "../../assets/interface/categories/icons8-laptop-96.png";
import SneakerIcon from "../../assets/interface/categories/icons8-sneakers-96.png";
import ElectricalIcon from "../../assets/interface/categories/icons8-electrical-96.png";
import JewelryIcon from "../../assets/interface/categories/icons8-jewelry-96.png";
import ClothesIcon from "../../assets/interface/categories/icons8-clothes-96.png";
import { useContext } from "react";
import { DataContext } from "../../components/layout/Layout"

function Home() {
  const {products, filteredProducts} = useContext(DataContext);

  return (
    <S.PageContainer>
      <AllProducts products={products} onFilter={filteredProducts}/>
        <S.Category>
          <img src={ElectricalIcon} alt="Electrical category" />
          <img src={ClothesIcon} alt="clothes category" />
          <img src={CableIcon} alt="cable category" />
          <img src={LaptopIcon} alt="laptop category" />
          <img src={SneakerIcon} alt="sneaker category" />
          <img src={JewelryIcon} alt="jewelry category" />
        </S.Category>
      </S.PageContainer>
  );
}

export default Home;
