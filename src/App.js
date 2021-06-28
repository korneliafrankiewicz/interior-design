import './App.scss';
import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import {ThemeProvider} from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import {theme} from "./theme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <HomePage />
      <AboutUs />


      </ThemeProvider>
   
    </div>
  );
}

export default App;
