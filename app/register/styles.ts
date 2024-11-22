import { spacing_stack } from "@/utils/spaces";
import styled from "styled-components";

export const RegisterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 8.625rem;
`

export const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1100px;
  gap: 4rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 52%;
  padding: 3rem 0px 5.25rem;

  h2 {
    font-family: 'Nunito', 'sans-serif';
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0em;
    line-height: 1.2em;
  }
`

export const InputBorder = styled.div`
  border: 1px solid black;
  border-radius: 10px;

  input {
    border: none;
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing_stack.m};
`