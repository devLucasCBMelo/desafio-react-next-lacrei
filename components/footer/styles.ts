import { background_color, color_text } from "@/utils/colors";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${background_color.default};
  color: ${color_text.heading};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding-bottom: 3rem;
  gap: 1rem;
  
    h2 {
      font-size: 18px;
      margin-bottom: 8px;
    }

    a {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      #logo_lacrei_footer {
        display: none;
      }

      #left_div_footer {
        display: none;
      }
    }
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  div {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: row;
  }
`

export const ConectionBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`