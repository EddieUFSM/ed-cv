import React, { useState, useEffect } from 'react'
import Route from './routes'
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#5965b2',
        main: '#303f9f',
        dark: '#212c6f',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#ed4b82',
        main: '#e91e63',
        dark: '#a31545',
        contrastText: '#ffffff',
      }
    }
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </div>
  );
}

export default App;
