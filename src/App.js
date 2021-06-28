import './App.scss';
import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
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

      </ThemeProvider>
   
    </div>
  );
}

export default App;
