import { background_color, color_text } from "@/utils/colors";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${background_color.default};
  color: ${color_text.heading};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;

    h2 {
      font-size: 18px;
    }

    a {
      font-size: 16px;
    }
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ConectionBar = styled.div`
  display: flex;
  flex-direction: row;
`