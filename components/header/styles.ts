import styled from "styled-components";
import {background_accent, background_color, color_text} from "@/utils/colors";

export const HeaderContainer = styled.header`
  background-color: #F5FFFB;
  color: black;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  button {
    background-color: ${background_accent.base};
    border: 1px solid;
    border-radius: 10px;
    color: ${color_text.invert};
    padding: 5px;
    height: 48px;
    font-weight: bold;

  }
`;

export const DivLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 500px;
`;

export const DivRightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 500px;

  a {
    margin-right: 16px;
    
    button {
      font-size: 15px;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 16px;
      margin-bottom: 16px;
      background-color: ${background_color.default};
      color: ${color_text.accent};
      border: none;

      &:hover {
        cursor: pointer;
        background-color: ${background_accent.lighter};
      }

      &:active {
        background-color: ${background_accent.darker};
        transform: scale(0.95);
      }

      &:focus {
        outline: 1px solid ; /* Cor e espessura da borda */
        outline-offset: 4px;    /* Distância entre a borda e o botão */
      }
    }
  }

  > button {
    font-size: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 16px;
    margin-bottom: 16px;

    &:hover {
      cursor: pointer;
      background-color: ${background_accent.darker};
    }
  }
`;