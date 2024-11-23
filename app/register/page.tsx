'use client';
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Buttons, ContentContainer, InputBorder, MainSection, Presentation, RegisterBody } from "./styles";
import { Divider } from "../styles";
import styles from "./page.module.css";
import medico_pacientes from '@/assets/medico_pacientes.webp';
import Image from "next/image";

export default function Register () {
  const [showPassword, setShotPassword] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [checkValues, setCheckValues] = useState(true);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
  const isPasswordValid = userPassword.length > 7;

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setCheckValues(false);
    } else {
      setCheckValues(true);
    }
  }, [isEmailValid, isPasswordValid]);

  const hiddenOrHidePassword = () => {
    if (showPassword == false) {
      setShotPassword(true);
    } else {
      setShotPassword(false);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    alert('login efetuado com sucesso!')
  }

  return (
    <div className={styles.page}>
      <RegisterBody>
        <Header />
        <MainSection>
          <ContentContainer id="content_container">
            <Presentation id="presentation_container">
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha" required value={userPassword}
                    onChange={(event) => setUserPassword(event?.target.value)}
                    />
                  <button type="button" onClick={hiddenOrHidePassword}>{showPassword ? <FaEye/> : <FaEyeSlash /> }</button>
                </InputBorder>
              </label>
              <Buttons>
                <button type="submit" disabled={checkValues}>Entrar</button>
                <Link href="https://paciente.lacreisaude.com.br/cadastro/">
                  <button type="button">Criar conta</button>
                </Link>
              </Buttons>
            </form>
          </ContentContainer>
          <Image id="doctor_patients_image" src={medico_pacientes} alt="Uma médica atendendo um casal" style={{width: 500, height: 400, borderRadius: 30, boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)'}} />
        </MainSection>
        <Divider /> 
      </RegisterBody>
      <Footer />
    </div>
  )
}