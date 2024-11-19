'use client';
import { HeaderContainer } from "../header/styles";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <h3>Lacrei Saúde</h3>
      <Link href="/about">
        <button>Criar conta</button>
      </Link>
    </HeaderContainer>
  )
}