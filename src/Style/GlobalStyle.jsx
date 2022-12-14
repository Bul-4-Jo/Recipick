import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
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

  #root {
    height: 100%;
    overflow: hidden;
  }

  .screen-out {
    position:  absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    clip-path: inset(50%);
  }
`;
