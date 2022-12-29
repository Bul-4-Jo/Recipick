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
    background: #fed1d1 url('https://cdn-icons-png.flaticon.com/512/590/590772.png') no-repeat 0 0;
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

  ::-webkit-scrollbar {
      width: 14px;
      height: 14px;
  }

  ::-webkit-scrollbar-thumb {
      border: 3px solid transparent;
      border-radius: 50px;
      background: #fed1d1;
      background: ${({ theme }) => theme.colors.secondary};
      background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
      margin: 5px 0;
      background: transparent;
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
