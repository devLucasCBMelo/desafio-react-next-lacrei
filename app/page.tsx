import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import { FirstDivContainer, SecondDivContainer } from "./styles";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <FirstDivContainer>
        <div>
          <h1>Olá, você está na Lacrei Saúde!</h1>
          <p>Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas</p>
        </div>
      </FirstDivContainer>
      <SecondDivContainer>
        <h2>segunda div</h2>
      </SecondDivContainer>
      <Footer />
    </div>
  );
}
