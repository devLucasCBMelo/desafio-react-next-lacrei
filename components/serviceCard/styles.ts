'use client';

import { background_accent, background_color, border_color, color_text } from "@/utils/colors";
import { spacing_inline, spacing_stack } from "@/utils/spaces";
import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: ${spacing_stack.m};
  background-color: ${background_color.highlight};

`
export const ServiceCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
  }

  h2 {
    margin-top: ${spacing_stack.xs};
  }

  p {
    font-size: 1rem;
    padding-left: 1rem;
    border-left: 2px solid ${color_text.accent};
    width: 500px;
    margin-left: ${spacing_inline.l};
  }

  button {
    background-color: ${background_accent.base};
    border: 1px solid;
    border-radius: 10px;
    color: ${color_text.invert};
    padding: 5px;
    height: 48px;
    font-weight: bold;
    font-size: 1.06rem;
    text-align: center;
    font-weight: 700;
    line-height: 150%;
    margin-top: ${spacing_inline.xm};
    margin-bottom: ${spacing_inline.m};
    width: 200px;

    &:hover {
        cursor: pointer;
        background-color: ${background_accent.dark};
      }

      &:active {
        background-color: ${background_accent.darker};
        transform: scale(0.95);
      }

      &:focus {
        outline: 2px solid ${border_color.focus};
        outline-offset: 4px;
      }
  }
`

export const StyledImage = styled.div`
  margin-top: ${spacing_inline.l};
  margin-bottom: ${spacing_inline.l};
  margin-left: ${spacing_inline.s};
  width: 200px;
  height: 120px;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
`;