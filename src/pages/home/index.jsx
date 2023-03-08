// import { Link } from "react-router-dom";
import ProductsFetch from "../../components/Products";
import * as S from "../../App.styles"
import CableIcon from "../../assets/interface/categories/icons8-audio-cable-96.png";
import HangerIcon from "../../assets/interface/categories/icons8-hanger-96.png";
import LaptopIcon from "../../assets/interface/categories/icons8-laptop-96.png";
import SneakerIcon from "../../assets/interface/categories/icons8-sneakers-96.png";
import WorkstationIcon from "../../assets/interface/categories/icons8-workstation-96.png";
import ProcessorIcon from "../../assets/interface/categories/icons8-processor-96.png";

function Home() {
  return (
    <div>
      <h1 className="element-border" >Home</h1>
      <ProductsFetch />
      <S.PageContainer>
        <S.Category>
          <img src={CableIcon} alt="cable category" />
          <img src={HangerIcon} alt="cable category" />
          <img src={LaptopIcon} alt="cable category" />
          <img src={SneakerIcon} alt="cable category" />
          <img src={WorkstationIcon} alt="cable category" />
          <img src={ProcessorIcon} alt="cable category" />
        </S.Category>
      </S.PageContainer>
    </div>
  );
}

export default Home;
