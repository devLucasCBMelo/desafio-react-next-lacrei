import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import { CardList, FirstDivContainer, SecondDivContainer, SecondDivLeftContent, SecondDivRightContent } from "./styles";
import Card from "@/components/card/Card";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <FirstDivContainer>
        <div>
          <h1>Olá, você está na Lacrei Saúde!</h1>
          <p>Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas</p>
          {/* <div>
            <button>Para Pacientes</button>
            <button>Para Profissionais</button>
          </div> */}
        </div>
      </FirstDivContainer>
      <SecondDivContainer>
        <div>
          <SecondDivLeftContent>
            <h2>Conheça o jeito Lacrei Saúde de cuidar</h2>
            <h3>Atendimento de qualidade e inclusivo</h3>
            <CardList>
              <Card title="Inclusão" text="Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+"/>
              <Card title="Acolhimento" text="As pessoas profissionais de saúde  entendem as necessdades da comunidade LGBTQIAPN+"/>
              <Card title="Segurança" text="Protegemos seus dados e validamos pacientes e profissionais da saúde" />
            </CardList>
          </SecondDivLeftContent>
        </div>
        <div>
          <SecondDivRightContent>
            Direita
          </SecondDivRightContent>
        </div>
      </SecondDivContainer>
      <Footer />
    </div>
  );
}
