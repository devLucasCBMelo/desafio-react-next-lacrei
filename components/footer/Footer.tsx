'use client'
import Image from "next/image";
import { ConectionBar, FooterBox, FooterContainer } from "./styles";
import logo_branca from '@/assets/logo_lacrei_branco.png';
import facebook_icon from '@/assets/facebook_icon.png';
import intagram_icon from '@/assets/instagram_icon.png';
import linkedin_icon from '@/assets/linkedin_icon.png';
import email_icon from '@/assets/email_icon.png';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <Image src={logo_branca} alt="logo da lacrei saúde" />
        <div>
          <ConectionBar>
              <a href="https://www.facebook.com/lacrei.saude/">
                <Image src={facebook_icon} alt="ícone do facebook" />
              </a>
              <a href="https://www.instagram.com/lacrei.saude/">
                <Image src={intagram_icon} alt="ícone do instagram"/>
              </a>
              <a href="https://www.linkedin.com/company/lacrei-saude/">
                <Image src={linkedin_icon} alt="ícone do linkedin"/>
              </a>
              <a href="mailto:contato@lacreisaude.com.br">
                <Image src={email_icon} alt="ícone do email"/>
              </a>
          </ConectionBar>
        </div>
      </FooterBox>
      <FooterBox>
        <h2>Lacrei Saúde</h2>
        <a href="">Quem Somos</a>
        <a href="">Nosso Propósito</a>
        <a href="">Missão, Visão e Valor</a>
        <a href="">Acessibilidade</a>
      </FooterBox>
      <FooterBox>
        <h2>Saúde</h2>
        <a href="">Bucar atendimento</a>
        <a href="">Oferecer atendimento</a>
      </FooterBox>
      <FooterBox>
        <h2>Segurança e Privacidade</h2>
        <a href="">Política de Privacidade</a>
        <a href="">Termos de Uso</a>
        <a href="">Direitos de Titular</a>
      </FooterBox>
    </FooterContainer>
  )
} 