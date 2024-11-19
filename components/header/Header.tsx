'use client';
import { HeaderContainer, DivLeftSide, DivRightSide } from "../header/styles";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <DivLeftSide>
          <h3>Lacrei Saúde</h3>
        </DivLeftSide>
        <DivRightSide>
          <Link href="https://lacreisaude.com.br/quem-somos/">
            <button type="button">Quem Somos</button>
          </Link>
          <Link href="https://lacreisaude.com.br/ajuda/">
            <button type="button">Ajuda</button>
          </Link>
          <button type="button">Entrar</button>
        </DivRightSide>
      </div>
    </HeaderContainer>
  )
}