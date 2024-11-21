'use client';
import { color_text } from "@/utils/colors";
import styled from "styled-components";
import rainbow_background from '@/assets/rainbow_background.jpg';

export const FirstDivContainer = styled.div`
  height: 33rem;
  background-image: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0)), url(${rainbow_background.src}); /* Usar .src para obter o caminho da imagem */
  background-size: cover;
  background-position: center;
  width: 100%;

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
`;

export const SecondDivContainer = styled.div`
  height: 33rem;
`;
