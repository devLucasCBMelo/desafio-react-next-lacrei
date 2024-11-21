import CardProps from "@/types/types";
import { CardContainer } from "./styles";

export default function Card({title, text} : CardProps) {
  return (
    <CardContainer>
      <h4>{title}</h4>
      <p>{text}</p>
    </CardContainer>
  )
}