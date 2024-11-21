import CardProps from "@/types/types";
import { ServiceCardContainer, ServiceCardContent, StyledImage } from "./styles";
import Image from 'next/image';
import Link from "next/link";

export default function ServiceCard({title, text, buttonName, img_src }: CardProps) {
  return (
    <ServiceCardContainer>
      <StyledImage>
        <Image src={img_src} alt="uma imagem" layout="responsive" />
      </StyledImage>
      <ServiceCardContent>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href="/register">
          <button type="button">{buttonName}</button>
        </Link>
      </ServiceCardContent>
    </ServiceCardContainer>
  );
}
