import { background_accent, background_color, border_color, color_foreground_default, color_text } from "@/utils/colors";
import { spacing_inline, spacing_stack } from "@/utils/spaces";
import styled from "styled-components";

export const RegisterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 8.625rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`

export const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1100px;
  gap: 4rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0px;
    height: 100%;
    gap: 1rem;

    #content_container {
      padding-top: 24px;
      padding-bottom: 48px;
    }

    #presentation_container h2, p {
      width: 500px;
    }

    #email {
      width: 100%;
    }

    #doctor_patients_image {
      width: 400px;
      height: 300px;
    }

  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 52%;
  padding: 3rem 0px 5.25rem;

  form {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    gap: 1rem;

    label {
      font-family: 'Nunito', 'sans-serif';
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0em;
      line-height: 1.5em;
      padding-bottom: ${spacing_stack.xs};
      color: ${color_text.body}
    }
  }
`
export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  h2 {
    font-family: 'Nunito', 'sans-serif';
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0em;
    line-height: 1.2em;
  }

  p {
    font-family: 'Nunito', 'sans-serif';
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0em;
    line-height: 1.5em;
  }
`

export const InputBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0px 8px;
  height: 48px;

  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 0px 8px;
    font-family: 'Nunito', 'sans-serif';
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0em;
    line-height: 1.5em;
  }

  button {
    border: none;
    background-color: ${background_color.default}
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing_stack.m};

  button {
    background-color: ${background_accent.base};
    border: none;
    border-radius: 10px;
    color: ${color_text.invert};
    padding: 5px;
    height: 48px;
    font-weight: bold;
    filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 10px);

    &:hover {
      cursor: pointer;
      background-color: ${background_accent.dark};
      transition: 0.2s;
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

  a {
    width: 100%;
    
    button {
      font-size: 15px;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 16px;
      margin-bottom: 16px;
      background-color: ${background_color.default};
      color: ${color_text.accent};
      border: 2px solid;
      width: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 5px 10px);

      &:hover {
        cursor: pointer;
        background-color: ${background_accent.lighter};
        transition: 0.2s;
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
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${color_foreground_default.light};
  width: 100%;
  margin-bottom: ${spacing_inline.l};
  max-width: 1100px;
`