import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";

export default function Register () {
  return (
    <div>
      <Header />
      <h2>Boas-vindas à Lacrei Saúde</h2>
      <p>Entre ou crie sua conta Lacrei Saúde</p>
      <form action="">
        <input type="email" placeholder="Digite seu e-mail" required/>
        <input type="password" placeholder="Digite sua senha" required/>
        <button type="submit">Entrar</button>
        <Link href="https://paciente.lacreisaude.com.br/cadastro/">
          <button type="button">Criar conta</button>
        </Link>
      </form>
      <Footer />
    </div>
  )
}