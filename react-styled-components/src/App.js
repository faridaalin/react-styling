import React from "react";
import "./App.css";
import GlobalStyle from './styles/globalStyles'

import { ThemeProvider } from "styled-components";
import theme from './styles/theme'
import Container from './components/layout/Container'
import PageHeader from './components/headings/PageHeading';
import Subheading from './components/headings/SubHeading';
import Form from './components/form/Form';
import Input from './components/form/Input';
import Button from './components/button/Button'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <PageHeader>Payment details</PageHeader>
        <Subheading>Fusce id libero ut orci ornare tempor sit amet at augue.</Subheading>
        <Form>
          <Input placeholder="Name on card"/>
          <Input placeholder="Card number"/>
          <Input placeholder="Expiry date"/>
          <Input placeholder="Security number"/>
          <Button variant="primary">Pay</Button>
        </Form>
        <Subheading variant="darker">Fusce id libero ut orci ornare tempor sit amet at augue.</Subheading>
      </Container>
    </ThemeProvider>
  );
}

export default App;
