// import { Link } from "react-router-dom";
import ProductsFetch from "../../components/GetProducts/index";
import * as S from "../../App.styles"
import CableIcon from "../../assets/interface/categories/icons8-audio-cable-96.png";
import LaptopIcon from "../../assets/interface/categories/icons8-laptop-96.png";
import SneakerIcon from "../../assets/interface/categories/icons8-sneakers-96.png";
import ElectricalIcon from "../../assets/interface/categories/icons8-electrical-96.png";
import JewelryIcon from "../../assets/interface/categories/icons8-jewelry-96.png";
import ClothesIcon from "../../assets/interface/categories/icons8-clothes-96.png";

function Home() {
  return (
    <S.PageContainer>
      <ProductsFetch />
        <S.Category>
        <img src={ElectricalIcon} alt="cable category" />
        <img src={ClothesIcon} alt="cable category" />
          <img src={CableIcon} alt="cable category" />
          <img src={LaptopIcon} alt="cable category" />
          <img src={SneakerIcon} alt="cable category" />
          <img src={JewelryIcon} alt="cable category" />
        </S.Category>
      </S.PageContainer>
  );
}

export default Home;
