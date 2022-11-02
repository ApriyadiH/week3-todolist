import React from "react";
import Router from "./shared/Router";
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div>
        <GlobalStyle/>    
        <Router />;
    </div>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Roboto', sans-serif;
  }
`