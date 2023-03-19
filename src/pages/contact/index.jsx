import styles from "./Contact.module.scss";
import * as S from "../../App.styles";
import F from "../../scss/modules/pageFeature/Feature.module.scss";

import PaypalIcon from "../../assets/interface/payment/icons8-paypal-48.png";
import BitcoinIcon from "../../assets/interface/payment/icons8-bitcoin-48.png";
import MastercardIcon from "../../assets/interface/payment//icons8-mastercard-48.png";
import VisaIcon from "../../assets/interface/payment/icons8-visa-48.png";

import FacebookIcon from "../../assets/interface/social/icons8-facebook-48.png";
import InstagramIcon from "../../assets/interface/social/icons8-instagram-48.png";
import LinkedinIcon from "../../assets/interface/social/icons8-linkedin-48.png";
import TwitterIcon from "../../assets/interface/social/icons8-twitter-48.png";

function Contact() {
  return (
    <S.PageContainer className={styles.common}>
      <h1>Contact</h1>
      <S.Card className={styles.about}>
        <h2>About</h2>
        <p>
          Merrno is your go-to online store for a wide variety of high-quality products. Our user-friendly interface and exceptional customer service ensure a seamless shopping
          experience. We are committed to offering eco-friendly and ethically sourced products,Our hassle-free return policy and secure payment options provide peace of mind. Shop
          with confidence knowing that customer satisfaction is our top priority. If you have any questions or concerns, our customer service team is always here to help. Thank you
          for choosing Merrno
        </p>
        <h3>Socials</h3>
        <S.imgContainer className={styles.imgContainer}>
          <S.imgBox src={FacebookIcon} alt="Facebook icon" />
          <S.imgBox src={InstagramIcon} alt="Instagram icon" />
          <S.imgBox src={LinkedinIcon} alt="LinkedIn icon" />
          <S.imgBox src={TwitterIcon} alt="Twitter icon" />
        </S.imgContainer>
      </S.Card>
      <S.Card className={styles.info}>
        <h2>Location</h2>
        <p>Address: 25 Rue de la Paix, 75002 Paris, France</p>
        <div className={styles.contact}>
          <p>Contact Info</p>
          <p>Email: info@merrno.com</p>
          <p>Phone: 555-555-5555</p>
          <p>Hours: Monday - Friday, 9am - 5pm CET</p>
          <h2>Billing options</h2>
        </div>
        <S.imgContainer className={styles.imgContainer}>
          <S.imgBox src={PaypalIcon} alt="Paypal icon" />
          <S.imgBox src={VisaIcon} alt="Paypal icon" />
          <S.imgBox src={MastercardIcon} alt="Paypal icon" />
          <S.imgBox src={BitcoinIcon} alt="Paypal icon" />
        </S.imgContainer>
      </S.Card>
      <S.AsideFeature className={F.featureButton}>
        <S.Button type="button">Show form</S.Button>
      </S.AsideFeature>
    </S.PageContainer>
  );
}

export default Contact;
