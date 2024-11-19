import styled from "styled-components";
import {background_accent} from "@/utils/colors";

export const HeaderContainer = styled.header`
  background-color: white;
  color: #FFFFFF;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: ${background_accent.base};
    border: 1px solid;
    border-radius: 10px;
    color: #FFFFFF;
    padding: 5px;
    height: 48px;

    &:hover {
      cursor: pointer;
      background-color: ${background_accent.dark};
    }
  }
`;