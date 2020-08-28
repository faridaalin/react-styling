import React from 'react';
import '../src/sass/styles.scss';

import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Intro from './components/Intro';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="wrapper">
      <Heading />
      <SubHeading />
      <Intro />
      <Card />

    </div>
    <Footer />
    </>
  );
}

export default App;
