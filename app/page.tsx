import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import { CardList, Divider, FirstDivContainer, SecondDivContainer, SecondDivLeftContent, SecondDivRightContent } from "./styles";
import Card from "@/components/card/Card";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import doctorImage from '@/assets/doctor_image.png'
import patientImage from '@/assets/patient_image.jpg'



export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <FirstDivContainer>
        <div>
          <h1>Olá , você está na Lacrei Saúde!</h1>
          <p>Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas</p>
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
            <h2>Conecte-se aqui</h2>
            <ServiceCard img_src={patientImage} title="Pacientes" text="Conecte-se a profissionais da saúde que estudam as necessidades da comunidade LGBTQIAPN+." buttonName="Buscar Atendimento" />
            <ServiceCard img_src={doctorImage} title="Profissionais" text="Buscamos profissionais da saúde qualificados que priorizam o bem-estar físico e mental de pessoas LGBTQIAPN+." buttonName="Oferecer atendimento"/>
          </SecondDivRightContent>
        </div>
      </SecondDivContainer>
      <Divider />
      <Footer />
    </div>
  );
}
