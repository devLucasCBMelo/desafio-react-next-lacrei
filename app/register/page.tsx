'use client';
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Buttons, ContentContainer, InputBorder, MainSection, Presentation, RegisterBody } from "./styles";
import { Divider } from "../styles";
import styles from "./page.module.css";
import medico_pacientes from '@/assets/medico_pacientes.webp';
import Image from "next/image";

export default function Register () {
  const [showPassword, setShotPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const hiddenOrHidePassword = () => {
    if (showPassword == false) {
      setShotPassword(true);
    } else {
      setShotPassword(false);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  }

  return (
    <div className={styles.page}>
      <RegisterBody>
        <Header />
        <MainSection>
          <ContentContainer>
            <Presentation>
              <h2>Boas-vindas à Lacrei Saúde</h2>
              <p>Entre ou crie sua conta Lacrei Saúde</p>
            </Presentation>
            <form onSubmit={(event) => handleSubmit(event)}>
              <label htmlFor="email">
                E-mail
                <InputBorder>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    required
                    value={userEmail}
                    onChange={(event) => setUserEmail(event?.target.value)}
                  />
                </InputBorder>
              </label>
              <label htmlFor="senha">
                Senha
                <InputBorder>
                  <input
                    id="senha"
                    name="senha"
                    minLength={8}
                    aria-describedby="senha-helpertext"
                    type={showPassword ? 'password' : 'text'}
                    placeholder="Digite sua senha" required value={userPassword}
                    onChange={(event) => setUserPassword(event?.target.value)}
                    />
                  <button type="button" onClick={hiddenOrHidePassword}>{showPassword ? <FaEyeSlash /> : <FaEye /> }</button>
                </InputBorder>
              </label>
              <p id="senha-helpertext">Senha incorreta, digite novamente.</p>
              <Buttons>
                <button type="submit">Entrar</button>
                <Link href="https://paciente.lacreisaude.com.br/cadastro/">
                  <button type="button">Criar conta</button>
                </Link>
              </Buttons>
            </form>
          </ContentContainer>
          <Image src={medico_pacientes} alt="Uma médica atendendo um casal" style={{width: 500, height: 400, borderRadius: 30, boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)'}} />
        </MainSection>
        <Divider /> 
      </RegisterBody>
      <Footer />
    </div>
  )
}