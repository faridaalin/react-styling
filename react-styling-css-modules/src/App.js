import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import CardContainer from "./components/Cards/CardContainer/CardContainer";
import BoxContainer from "./components/Cards/BoxContainer/BoxContainer";
import Box from "./components/Cards/Box/Box";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Nav />
        <CardContainer />
        <section className="grid">
          <BoxContainer>
            <Box>ONE</Box>
            <Box variant="secondary">TWO</Box>
          </BoxContainer>
          <BoxContainer>
            <Box variant="secondary maxWidth">TREE</Box>
          </BoxContainer>
        </section>
      </div>
    </div>
  );
}

export default App;
