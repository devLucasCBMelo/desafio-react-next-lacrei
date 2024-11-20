'use client'
import { HeaderContainer, DivLeftSide, DivRightSide } from "../header/styles";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo_lacrei_mobile.1f3a65cb.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <DivLeftSide>
          <Image src={logo} alt="logo da lacrei saude" />
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