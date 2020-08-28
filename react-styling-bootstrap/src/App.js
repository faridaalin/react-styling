import React from "react";

import Nav from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import UserTable from "./components/Table";
import CardContainer from "./components/CardContainer";
import UserAccordian from "./components/UserAccordian";
import UserTab from "./components/UserTab";
import UserForm from "./components/UserForm";
import Row from "react-bootstrap/Row";

import "./sass/style.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Container>
          <Header title="Users" />
          <UserTable />
          <Header title="Features" />
          <CardContainer />
          <UserAccordian />
          <Row className="pb-5">
            <UserTab />
            <UserForm />
          </Row>
        </Container>
      </div>
      <footer className="footer">
        <p>Copyright 2020</p>
      </footer>
    </>
  );
}

export default App;
