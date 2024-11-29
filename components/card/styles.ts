'use client';

import { background_color, color_gradient } from "@/utils/colors";
import { spacing_stack } from "@/utils/spaces";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 250px;
  gap: 1rem;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  background-color: ${background_color.highlight};
  text-align: center;
  border-radius: 8px;
  margin-left: 10px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.4);


  h4 {
  font-family: 'Nunito';
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  background: ${color_gradient.lacrei};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 450px;
    border-radius: 8px;
    padding: 0px;
    gap: 1rem;
    margin: 16px 16px;

    h4 {
      font-size: 1.125rem;
      margin: 0px 10px;
      text-align: start;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      box-sizing: border-box;
      text-align: start;
      padding: 4px 4px;
      width: 400px;
    }
  }

  @media (max-width: 420px) {
    width: 100%;
    max-width: 370px;
  }

  h4 {
    margin-left: ${spacing_stack.m}; 
  }

  p {
    width: 100%;
    margin: ${spacing_stack.xxs} ${spacing_stack.xs};
    padding: ${spacing_stack.xs};
  }
`