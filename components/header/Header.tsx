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
          <Link href="/">
            <Image id="logo_lacrei_header" data-testid="logo_lacrei_header" src={logo} alt="logo da lacrei saude" />
          </Link>
        </DivLeftSide>
        <DivRightSide>
          <Link href="https://lacreisaude.com.br/quem-somos/">
            <button id="quem_somos_button" type="button">Quem Somos</button>
          </Link>
          <Link href="https://lacreisaude.com.br/ajuda/">
            <button id="ajuda_button" type="button">Ajuda</button>
          </Link>
          <button id="entrar_button" type="button">Entrar</button>
        </DivRightSide>
      </div>
    </HeaderContainer>
  )
}