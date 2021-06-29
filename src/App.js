import './App.scss';
import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FAQComponent from './components/FAQComponent';
import Footer from './components/Footer';
import {ThemeProvider} from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import {theme} from "./theme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <HomePage />
      <AboutUs />
      <Projects />
      <Contact />
      <FAQComponent />
      <Footer />
      </ThemeProvider>
   
    </div>
  );
}

export default App;
