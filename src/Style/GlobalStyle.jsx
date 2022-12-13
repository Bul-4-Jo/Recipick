import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    font-family: 'SpoqaHanSans', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer; 

    &disabled {
      cursor: default;
    }
  }

  textarea {
    border: none;
    resize: none;
  }
`;
