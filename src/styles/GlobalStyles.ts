import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: #F6F7FB;
    --white: #FFFFFF;
    --primary-1: #1E86FF;
    --primary-2: #334680;
    --text-1: #282538;
    --text-2: #334680;
    --text-3: #b9bdcf;
  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: var(--background);
    color: var(--text-1);
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: start;
  > * {
    width: fit-content;
    color: inherit;
  }
`;

export const InputStyles = styled.label`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--primary-2);
  margin-bottom: 3.2rem;

  display: flex;
  align-items: flex-end;
  width: fit-content;

  > input {
    margin-right: 1rem;
    width: 1.8rem;
    height: 1.8rem;
    border-color: var(--text-3);
    background: var(--text-3);
  }
`;