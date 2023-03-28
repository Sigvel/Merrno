import { useContext } from "react";
import { DataContext } from "../../components/layout/Layout"

import AllProducts from "../../components/Product/AllProducts/index";
import * as S from "../../App.styles";
import styles from "./Home.module.scss";

import CableIcon from "../../assets/interface/categories/icons8-audio-cable-96.png";
import LaptopIcon from "../../assets/interface/categories/icons8-laptop-96.png";
import SneakerIcon from "../../assets/interface/categories/icons8-sneakers-96.png";
import ElectricalIcon from "../../assets/interface/categories/icons8-electrical-96.png";
import JewelryIcon from "../../assets/interface/categories/icons8-jewelry-96.png";
import ClothesIcon from "../../assets/interface/categories/icons8-clothes-96.png";

function Home() {
  const {products, filteredProducts} = useContext(DataContext);

  return (
    <S.PageContainer>
      <div className={styles.pageWrapper}>
      <AllProducts products={products} onFilter={filteredProducts}/>
        <S.AsideFeature className={styles.categoriesBox}>
          <div className="img-box">
          <img src={ElectricalIcon} alt="Electrical category" />
          <img src={ClothesIcon} alt="clothes category" />
          <img src={CableIcon} alt="cable category" />
          <img src={LaptopIcon} alt="laptop category" />
          <img src={SneakerIcon} alt="sneaker category" />
          <img src={JewelryIcon} alt="jewelry category" />
          </div>
        </S.AsideFeature>
        </div>
      </S.PageContainer>
  );
}

export default Home;
