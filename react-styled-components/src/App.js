import React from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import Button from './components/button/Button';
import TextInput from './components/form/Input';

const theme = {
  brandColorPrimary: "lightblue",
  brandColorSecondary: "green",
  defaultFont: "Arial, sans-serif, sans",
  primary: "#b3344b",
  secondary: "orange",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Button variant="primary">Click me</Button>
        <TextInput placeholder="name" />
      </div>
    </ThemeProvider>
  );
}

export default App;
