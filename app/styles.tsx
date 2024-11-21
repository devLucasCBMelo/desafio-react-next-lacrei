'use client';
import { background_accent, color_text } from "@/utils/colors";
import styled from "styled-components";
import rainbow_background from '@/assets/rainbow_background.jpg';
import { spacing_stack } from "@/utils/spaces";

export const FirstDivContainer = styled.div`
  height: 33rem;
  background-image: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0)), url(${rainbow_background.src}); /* Usar .src para obter o caminho da imagem */
  background-size: cover;
  background-position: center;
  width: 100vw;
  margin-top: ${spacing_stack.m};

  div {
    border-radius: 5px;
    margin-left: 162px;
  }

  h1 {
    margin: 48px 0 16px;
    font-size: 3rem;
    font-weight: 700;
    color: ${color_text.accent};
    background-color: white;
    width: 451px;
  }

  p {
    width: 451px;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: ${color_text.body}
  }

  /* button {
    background-color: ${background_accent.base};
    border: 1px solid;
    border-radius: 10px;
    color: ${color_text.invert};
    padding: 5px;
    height: 48px;
    font-weight: bold;
  } */
`;

export const SecondDivContainer = styled.div`
  height: 33rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
`;

export const SecondDivLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    text-align: center;
  }

  h3 {
    margin: 16px 0 24px;
  }
`

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 700px;
`

export const SecondDivRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: ${spacing_stack.xs};
  }
`