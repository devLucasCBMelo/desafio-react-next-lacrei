'use client';
import { background_accent, background_color, color_foreground_default, color_text } from "@/utils/colors";
import styled from "styled-components";
import rainbow_background from '@/assets/rainbow_background.jpg';
import { spacing_inline, spacing_stack } from "@/utils/spaces";

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

   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;

    div {
      margin: 0px 48px;
    }

    h1 {
      font-size: 2rem;
      line-height: 2.4rem;
      margin-top: 1rem;
      border-radius: 8px;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      background-color: ${background_color.default};
      border-radius: 8px;
      padding: 8px 8px;
    }

   }

   
`;

export const SecondDivContainer = styled.div`
  height: 33rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;

  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
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
    font-size: 1.5rem;
    color: ${color_text.disabled}
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    h2 {
      width: 20rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
      text-align: left;
      margin: 0px;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
    }
  }
`

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 700px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      width: 20rem;
      font-size: 1.2rem;
      line-height: 2.25rem;
      margin: 0px;
    }

    p {
      width: 300px;
    }

    div {
      width: 500px;
    }
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${color_foreground_default.light};
  width: 80%;
  margin-bottom: ${spacing_inline.l};
`