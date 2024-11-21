'use client';

import { background_color, color_gradient } from "@/utils/colors";
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
`