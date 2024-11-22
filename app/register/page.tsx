'use client';
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputBorder } from "./styles";

export default function Register () {
  const [showPassword, setShotPassword] = useState(false);

  const hiddenOrHidePassword = () => {
    if (showPassword == false) {
      setShotPassword(true);
    } else {
      setShotPassword(false);
    }
  }

  return (
    <div>
      <Header />
      <h2>Boas-vindas à Lacrei Saúde</h2>
      <p>Entre ou crie sua conta Lacrei Saúde</p>
      <form action="">
        <label htmlFor="email">E-mail</label>
        <InputBorder>
          <input id="email" name="email" type="email" placeholder="Digite seu e-mail" required/>
        </InputBorder>
        <label htmlFor="senha">Senha</label>
        <InputBorder>
          <input id="senha" name="senha" minLength={8} aria-describedby="senha-helpertext" type={showPassword ? 'password' : 'text'} placeholder="Digite sua senha" required/>
          <button type="button" onClick={hiddenOrHidePassword}>{showPassword ? <FaEyeSlash /> : <FaEye /> }</button>
        </InputBorder>
        <p id="senha-helpertext">Senha incorreta, digite novamente.</p>
        <button type="submit">Entrar</button>
        <Link href="https://paciente.lacreisaude.com.br/cadastro/">
          <button type="button">Criar conta</button>
        </Link>
      </form>
      <Footer />
    </div>
  )
}